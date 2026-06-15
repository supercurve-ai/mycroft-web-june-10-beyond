"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

const EMBED_SRC = "https://js.hsforms.net/forms/embed/v2.js";

/**
 * HubSpot embedded form (the original site created it inline with
 * `hbspt.forms.create`, which only renders an empty iframe shell server-side).
 * Loads HubSpot's embed script once and renders the form into a local target.
 */
export function HubspotForm({
  portalId = "45783254",
  formId,
  region = "na1",
}: {
  portalId?: string;
  formId: string;
  region?: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    const create = () => {
      if (!target.isConnected || !window.hbspt) return;
      target.innerHTML = ""; // guard against double-create (strict mode, remounts)
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#${target.id}`,
      });
    };
    if (window.hbspt) {
      create();
      return;
    }
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SRC}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = EMBED_SRC;
      script.charset = "utf-8";
      document.body.appendChild(script);
    }
    script.addEventListener("load", create);
    return () => script?.removeEventListener("load", create);
  }, [portalId, formId, region]);
  return (
    <div className="w-embed w-script">
      <div
        ref={targetRef}
        id={`hbspt-form-${formId}`}
        className="hbspt-form"
        data-hs-forms-root="true"
      ></div>
    </div>
  );
}
