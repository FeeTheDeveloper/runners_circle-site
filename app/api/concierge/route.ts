import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateLeadData, persistLead, type LeadData } from "@/lib/leadTypes";
import {
  buildLeadEmailHTML,
  buildLeadEmailText,
} from "@/lib/emailTemplate";

/* ─── Required env vars for email delivery ─── */
const REQUIRED_SMTP_VARS = [
  "M365_SMTP_HOST",
  "M365_SMTP_USER",
  "M365_SMTP_PASS",
  "LEAD_RECEIVER_EMAIL",
] as const;

/** Return names of SMTP env vars that are missing or empty. */
function getMissingEnvVars(): string[] {
  return REQUIRED_SMTP_VARS.filter((k) => !process.env[k]?.trim());
}

/* ─── SMTP transporter (Microsoft 365-ready) ─── */
function getTransporter() {
  const host = process.env.M365_SMTP_HOST;
  const port = Number(process.env.M365_SMTP_PORT || "587");
  const user = process.env.M365_SMTP_USER;
  const pass = process.env.M365_SMTP_PASS;

  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/* ─── POST /api/concierge ─── */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate
    const result = validateLeadData(body as Partial<LeadData>);
    if (!result.valid) {
      return NextResponse.json(
        { error: (result as { valid: false; error: string }).error },
        { status: 422 }
      );
    }

    const lead = (result as { valid: true; data: LeadData }).data;

    // Persist (future – currently a no-op)
    await persistLead(lead);

    // Send email
    const transporter = getTransporter();
    const receiver = process.env.LEAD_RECEIVER_EMAIL;
    const missing = getMissingEnvVars();

    if (transporter && receiver) {
      await transporter.sendMail({
        from: `"Runners Circle Concierge" <${process.env.M365_SMTP_USER}>`,
        to: receiver,
        subject: `🔥 New Runners Circle Concierge Lead – ${lead.service}`,
        html: buildLeadEmailHTML(lead),
        text: buildLeadEmailText(lead),
      });
    } else {
      // SMTP not fully configured – log to server console for dev/testing
      // eslint-disable-next-line no-console
      console.warn(
        `[Concierge] Email skipped — missing env vars: ${missing.join(", ")}. ` +
          "See .env.example for required variables."
      );
      // eslint-disable-next-line no-console
      console.log("[Concierge] Lead data:", lead);
    }

    // TODO: rate-limit per IP (future enhancement)

    return NextResponse.json({ success: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[Concierge] Error:", err);
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
