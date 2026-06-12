"""Convert 'atomic' Webflow classes (spacing, containers, no-wrap) to Tailwind
utilities per element, computing the cascade winner per (media, property).
Faithful by construction: values are copied verbatim into arbitrary-value
utilities; webflow rules whose classes no longer appear anywhere get deleted.
Relies on webflow-shared.css being layered BELOW Tailwind utilities, so the
emitted utilities win over any leftover webflow rules with the same values.
"""
import re, os, sys, collections

CSS = "src/app/webflow-shared.css"
# the classes being migrated in this tranche
TARGETS = {"padding-top", "padding-btm", "page-padding", "no-wrap",
           "container-large", "container-medium", "container-small"}
# size/modifier classes that only exist as compounds of the targets;
# they carry no rules of their own (verified below)
MODIFIERS = {"xxxs", "xxs", "xs", "xsmall", "small", "medium", "large",
             "xl", "xxl", "xxxl", "features_small", "flex_center",
             "solution_cta", "product_cta", "problem_cta", "tab_mob_100",
             "narrower_desktop", "fw_features_hed"}

MEDIA_VARIANT = {
    "": "",
    "@media screen and (max-width: 991px)": "max-tablet:",
    "@media (max-width: 991px)": "max-tablet:",
    "@media screen and (max-width: 767px)": "max-landscape:",
    "@media screen and (max-width: 479px)": "max-portrait:",
}

def val_to_tw(v):
    v = v.strip()
    m = re.fullmatch(r'var\((--[\w-]+)\)', v)
    if m:
        return f"({m.group(1)})"
    return "[" + v.replace(" ", "_") + "]"

PROP_TW = {
    "padding-top": "pt-", "padding-bottom": "pb-",
    "padding-left": "pl-", "padding-right": "pr-",
    "margin-left": "ml-", "margin-right": "mr-",
    "width": "w-", "max-width": "max-w-",
    "white-space": None, "position": None,  # special-cased
    "justify-content": None, "align-items": None, "display": None,
}

def decl_to_utility(prop, value):
    value = value.strip()
    if prop == "white-space":
        return {"nowrap": "whitespace-nowrap"}.get(value)
    if prop == "display":
        return {"flex": "flex", "block": "block", "none": "hidden",
                "grid": "grid", "inline-block": "inline-block"}.get(value)
    if prop == "justify-content":
        return {"center": "justify-center", "flex-start": "justify-start",
                "flex-end": "justify-end", "space-between": "justify-between"}.get(value)
    if prop == "position":
        return {"relative": "relative", "absolute": "absolute",
                "static": "static", "fixed": "fixed", "sticky": "sticky"}.get(value)
    if prop == "align-items":
        return {"center": "items-center", "flex-start": "items-start",
                "flex-end": "items-end", "stretch": "items-stretch"}.get(value)
    pre = PROP_TW.get(prop)
    if not pre:
        return None
    if value == "auto":
        return pre + "auto"
    if value == "100%" and prop == "width":
        return "w-full"
    if value == "none" and prop == "max-width":
        return "max-w-none"
    return pre + val_to_tw(value)

# ---------------- parse stylesheet ----------------
src_css = open(CSS).read()
nc = re.sub(r'/\*.*?\*/', '', src_css, flags=re.S)

rules = []  # (media, selector, [(prop, val)...], order)
order = 0
pos = 0
for m in re.finditer(r'(@media[^{]+)\{((?:[^{}]*\{[^}]*\})*)\s*\}|([^{}@]+)\{([^}]*)\}', nc):
    if m.group(3) is not None:
        media, body_src = "", [(m.group(3).strip(), m.group(4))]
    else:
        media = " ".join(m.group(1).split())
        body_src = re.findall(r'([^{}]+)\{([^}]*)\}', m.group(2))
    for sel_list, body in body_src:
        decls = []
        for d in body.split(";"):
            if ":" in d:
                p, v = d.split(":", 1)
                decls.append((p.strip().lower(), v.strip()))
        for sel in sel_list.split(","):
            rules.append((media, sel.strip(), decls, order))
            order += 1

# selectors that mention a target: must be pure compounds (no space/>/+/~/:)
def compound_classes(sel):
    if re.search(r'[\s>+~:]|\[', sel):
        return None
    parts = re.findall(r'\.([\w-]+)', sel)
    if not parts or not sel.startswith("."):
        return None
    # ensure selector is nothing but the classes
    if re.sub(r'\.[\w-]+', '', sel):
        return None
    return frozenset(parts)

target_rules = []  # (media, classset, decls, order)
impure = set()
for media, sel, decls, o in rules:
    classes_in_sel = set(re.findall(r'\.([\w-]+)', sel))
    if not (classes_in_sel & TARGETS):
        continue
    cc = compound_classes(sel)
    if cc is None:
        impure |= classes_in_sel & TARGETS
        print("IMPURE selector:", sel, file=sys.stderr)
        continue
    if media not in MEDIA_VARIANT:
        impure |= cc & TARGETS
        print("UNSUPPORTED media:", media, sel, file=sys.stderr)
        continue
    target_rules.append((media, cc, decls, o))

targets = TARGETS - impure
print("converting classes:", sorted(targets))

# modifiers must not have their own standalone rules
for media, sel, decls, o in rules:
    cc = compound_classes(sel)
    if cc and cc & MODIFIERS and not (cc & TARGETS):
        print("modifier has independent rule (kept):", sel, file=sys.stderr)

# ---------------- rewrite markup ----------------
SPEC = lambda cc: len(cc)
changed_files = 0
converted_elements = 0
skipped = collections.Counter()

def convert_classlist(toks):
    """Return new token list or None if not convertible."""
    global converted_elements
    tokset = set(toks)
    present = tokset & targets
    if not present:
        return None
    # selectors that match this element
    matched = [(media, cc, decls, o) for media, cc, decls, o in target_rules
               if cc <= tokset and cc & present]
    if not matched:
        return None
    # all matched selectors must consist only of target+modifier classes —
    # otherwise removing the target token breaks a compound keyed on classes
    # we keep (those classes' own rules remain, but the compound dies)
    # compute winning declaration per (media, prop)
    win = {}
    for media, cc, decls, o in sorted(matched, key=lambda r: (SPEC(r[1]), r[3])):
        for p, v in decls:
            win[(media, p)] = v
    utils = []
    for (media, p), v in win.items():
        u = decl_to_utility(p, v)
        if u is None:
            skipped["prop:" + p] += 1
            return None
        utils.append(MEDIA_VARIANT[media] + u)
    # remove target tokens and modifier tokens that only served these rules
    used_mods = set().union(*[cc for _, cc, _, _ in matched]) & MODIFIERS
    # a modifier token may also pair with OTHER (non-converted) classes on
    # this element, e.g. "container-flex small" — keep it in that case
    keep_mods = set()
    for mod in used_mods & tokset:
        for media, sel, decls, o in rules:
            cc = compound_classes(sel)
            if cc and mod in cc and not (cc & targets) and cc <= tokset:
                keep_mods.add(mod)
    new = [t for t in toks if t not in present and (t not in used_mods or t in keep_mods)]
    converted_elements += 1
    return new + utils

for root, dirs, files in os.walk("src"):
    for f in files:
        if not f.endswith(".tsx"):
            continue
        path = os.path.join(root, f)
        text = open(path).read()
        def fix(m):
            toks = m.group(1).split()
            new = convert_classlist(toks)
            return m.group(0) if new is None else 'className="' + " ".join(new) + '"'
        out = re.sub(r'className="([^"]*)"', fix, text)
        if out != text:
            open(path, "w").write(out)
            changed_files += 1

print(f"elements converted: {converted_elements} in {changed_files} files")
print("skipped:", dict(skipped))
