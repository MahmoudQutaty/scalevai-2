import { contactSchema } from "@/lib/contact";
import { contactFeedback, contactFieldNames, type ContactFieldErrors } from "@/data/contact-form";

const headers = { "Cache-Control": "no-store" };
const maxBodyBytes = 32_768;

export async function POST(request: Request) {
  let body: unknown;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > maxBodyBytes) {
      return Response.json({ ok: false, error: contactFeedback.tooLarge }, { status: 400, headers });
    }
    body = JSON.parse(raw) as unknown;
  } catch {
    return Response.json({ ok: false, error: contactFeedback.invalidJson }, { status: 400, headers });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const field of contactFieldNames) {
      const issue = result.error.issues.find((item) => item.path[0] === field);
      if (issue) fieldErrors[field] = issue.message;
    }
    return Response.json({ ok: false, error: contactFeedback.invalid, fieldErrors }, { status: 400, headers });
  }

  // TODO: Real delivery belongs here after a provider is approved; use result.data.
  // Resend: RESEND_API_KEY; SMTP alternative: SMTP_HOST, SMTP_PORT, SMTP_SECURE,
  // SMTP_USER, SMTP_PASSWORD. Both need CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL.
  // Then change delivered and the frontend success copy only after confirmed delivery.
  // Demo intentionally sends nothing, stores nothing, and never logs enquiry values.
  return Response.json({ ok: true, delivered: false }, { status: 200, headers });
}
