/**
 * Receives "Book a demo" form submissions and forwards them to the Zapier
 * Catch Hook configured in ZAPIER_WEBHOOK_URL. The hook URL stays server-side
 * because Zapier catch hooks have no auth — anyone holding the URL can post
 * junk leads and burn the Zapier task quota.
 */

type LeadFields = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  info: string;
  page: string;
};

const REQUIRED: (keyof LeadFields)[] = ["firstName", "lastName", "email", "company"];
const MAX_FIELD_LENGTH = 256;

export async function POST(request: Request) {
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("demo-form: ZAPIER_WEBHOOK_URL is not set; lead dropped");
    return Response.json({ error: "Form is not configured." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const lead = {} as LeadFields;
  for (const key of ["firstName", "lastName", "email", "company", "info", "page"] as const) {
    const value = body[key];
    lead[key] = typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
  }

  if (REQUIRED.some((key) => lead[key] === "") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return Response.json({ error: "Missing or invalid fields." }, { status: 400 });
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString() }),
  });
  if (!res.ok) {
    console.error(`demo-form: Zapier webhook responded ${res.status}`);
    return Response.json({ error: "Failed to deliver submission." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
