#!/usr/bin/env python3
"""One-shot reorganization of the flat public/assets/ directory into
category folders, rewriting every reference in the repo. Kept for the
record of what moved where; not needed after the move."""
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, "public", "assets")

# First matching rule wins. Order matters (e.g. product-tile-background
# must hit "decor" before the product-* screenshots rule).
RULES = [
    ("case-studies", r"^(unifiedcs|weavecs|wisedocscs|smashsendcover|smashsend-cover-square|jorge-cs)"),
    ("meta", r"(-meta-img|^frameworks-.*-meta)"),
    ("badges", r"badge"),
    ("brand", r"^mycroft-lockup"),
    ("team", r"^(adam-cropped|ilya-cropped|jorge-cropped|steve-cropped|jan-2|jon-2|mike-2|mikekim2025|pq-adam|pq-jenna|pq-roy)"),
    ("decor", r"^(background-wallpaper|backgroundnoise|dots-repeat|newpixels|pixels-greyscale|gridpattern|mycroft-pattern|glow|fireplace|lantern|lamp2|chair|product-tile-background|bg-margin|bg-padding|frameworks-grid-repeat)"),
    ("logos", r"(logo|^(brickeye|controld|crc|dealroom|deck|duvo|fiscal|mantle|modem|nmbr|ownright|spatial-media|zeroclick|wispbit-mono))"),
    ("icons", r"^(arrow-|blue-checkmark|check-bullet|checkmark-icon|circus-icon|datalock-icon|eye-icon|faq-notchlabel|folder-icon|gear-icon|hands-icon|laptop-icon|lock-icon|markets-icon|megaphone|piggybank-icon|push-icon|puzzle-icon|seal-icon|settings|star-icon|triangle-shape|userlock-icon|warning-icon|crest-icon|stamp)"),
    ("photos", r"^(auditors|msp-partners|tech-partners|wgyc-|newslettersubscribe)"),
    ("screenshots", r"^(product-|feature-|features-img|compliance-slide|ai-policy-generator|app-security|cloud-security|automatic-evidence-collection|custom-controls|policy-center|risk-assessment|security-questionnaires|security-training|support-and-live-chat|tprm|mycroft-features)"),
]

REWRITE_DIRS = ["src", "scripts", ".claude"]
REWRITE_ROOT_FILES = ["CLAUDE.md", "EDITING-GUIDE.md", "README.md", "TASKS.md"]
TEXT_EXT = {".tsx", ".ts", ".css", ".mdx", ".md", ".json", ".mjs", ".py", ".js", ".xml", ".html"}


def categorize():
    mapping, unmatched = {}, []
    for f in sorted(os.listdir(ASSETS)):
        if f == ".DS_Store" or os.path.isdir(os.path.join(ASSETS, f)):
            continue
        for cat, pat in RULES:
            if re.search(pat, f):
                mapping[f] = cat
                break
        else:
            unmatched.append(f)
    return mapping, unmatched


def main():
    dry = "--apply" not in sys.argv
    mapping, unmatched = categorize()

    if dry:
        by_cat = {}
        for f, cat in mapping.items():
            by_cat.setdefault(cat, []).append(f)
        for cat in sorted(by_cat):
            print(f"\n## {cat} ({len(by_cat[cat])})")
            for f in by_cat[cat]:
                print(f"  {f}")
        if unmatched:
            print(f"\n## UNMATCHED ({len(unmatched)})")
            for f in unmatched:
                print(f"  {f}")
        print(f"\n{len(mapping)} files mapped, {len(unmatched)} unmatched. Run with --apply to execute.")
        return

    if unmatched:
        sys.exit(f"Refusing to apply with unmatched files: {unmatched}")

    for cat in sorted(set(mapping.values())):
        os.makedirs(os.path.join(ASSETS, cat), exist_ok=True)
    for f, cat in mapping.items():
        subprocess.run(["git", "mv", f"public/assets/{f}", f"public/assets/{cat}/{f}"],
                       cwd=ROOT, check=True)
    print(f"moved {len(mapping)} files")

    targets = []
    for d in REWRITE_DIRS:
        for dirpath, _, files in os.walk(os.path.join(ROOT, d)):
            targets += [os.path.join(dirpath, f) for f in files
                        if os.path.splitext(f)[1] in TEXT_EXT]
    targets += [os.path.join(ROOT, f) for f in REWRITE_ROOT_FILES
                if os.path.exists(os.path.join(ROOT, f))]

    changed = 0
    for path in targets:
        with open(path, encoding="utf-8") as fh:
            text = fh.read()
        orig = text
        for f, cat in mapping.items():
            text = text.replace(f"assets/{f}", f"assets/{cat}/{f}")
        if text != orig:
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(text)
            changed += 1
    print(f"rewrote references in {changed} files")


if __name__ == "__main__":
    main()
