"use client";

import { type FormEvent, useState } from "react";

/**
 * The "Book a demo" lead form used on /demo and /pricing. Markup mirrors the
 * captured Webflow form 1:1. Submission posts to /api/demo-form, which
 * forwards the lead to the Zapier webhook server-side (see that route).
 * The HubSpot collected-forms script (see ThirdPartyScripts) additionally
 * captures the submit event when analytics consent is granted.
 */
export function BookDemoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    const data = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/demo-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("First-name"),
          lastName: data.get("Last-name"),
          email: data.get("Email"),
          company: data.get("Company"),
          info: data.get("Info"),
          page: window.location.pathname,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="email-form-block" className="form-block w-form">
      <form id="email-form" name="email-form" data-name="Email Form" method="get" onSubmit={handleSubmit} className="w-clearfix" data-wf-page-id="669820dc95a0596f3fca5f33" data-wf-element-id="827ecbe2-9de7-438a-d6a2-9d6614704c4e" aria-label="Email Form" style={status === "success" ? { display: "none" } : undefined}>
        <div className="text-block">
          Book a demo
        </div>
        <div className="w-row">
          <div className="column w-clearfix w-col w-col-6">
            <label htmlFor="email" className="field-label-2">
              First name
            </label>
            <label htmlFor="First-name">
              <span>
                <strong className="bold-text-2">
                  *
                </strong>
              </span>
            </label>
            <input className="text-field-2 w-input" maxLength={256} name="First-name" data-name="First name" placeholder="" type="text" id="First-name" required />
          </div>
          <div className="column-2 w-clearfix w-col w-col-6">
            <label htmlFor="email" className="field-label-2">
              Last name
            </label>
            <label htmlFor="Last-name">
              <span>
                <strong className="bold-text-2">
                  *
                </strong>
              </span>
            </label>
            <input className="text-field-3 w-input" maxLength={256} name="Last-name" data-name="Last name" placeholder="" type="text" id="Last-name" required />
          </div>
        </div>
        <label htmlFor="email" className="field-label-2">
          Email
        </label>
        <label htmlFor="email">
          <span>
            <strong className="bold-text-2">
              *
            </strong>
          </span>
        </label>
        <input className="text-field-4 w-input" maxLength={256} name="Email" data-name="Email" pattern={"^[^@]+@(?!gmail\\.com|yahoo\\.com|hotmail\\.com|outlook\\.com|live\\.com|aol\\.com|icloud\\.com|mail\\.com|yandex\\.com|protonmail\\.com)[^@]+\\.[a-z]{2,}$"} placeholder="" title="Please use a business email." type="email" id="email" required />
        <label htmlFor="email" className="field-label-2">
          Company Name
        </label>
        <label htmlFor="Company">
          <span>
            <strong className="bold-text-2">
              *
            </strong>
          </span>
        </label>
        <input className="text-field-4 w-input" maxLength={256} name="Company" data-name="Company" placeholder="" type="text" id="Company" required />
        <label htmlFor="Info" className="field-label-2">
          Please tell us a little about your company
        </label>
        <input className="text-field-5 w-input" maxLength={256} name="Info" data-name="Info" placeholder="" type="text" id="Info" />
        <input type="submit" data-wait="Please wait..." id="submit-button" className="submit-button w-button" value={status === "submitting" ? "Please wait..." : "Submit"} />
      </form>
      <div className="success-message w-form-done" tabIndex={-1} role="region" aria-label="Email Form success" style={status === "success" ? { display: "block" } : undefined}>
        <div>
          <div className="text-block-2">
            Thank you for your submission!
          </div>
        </div>
      </div>
      <div className="w-form-fail" tabIndex={-1} role="region" aria-label="Email Form failure" style={status === "error" ? { display: "block" } : undefined}>
        <div>
          Oops! Something went wrong while submitting the form.
        </div>
      </div>
    </div>
  );
}
