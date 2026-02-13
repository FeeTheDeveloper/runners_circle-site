import type { LeadData } from "./leadTypes";

/**
 * Generates a branded HTML email for a new concierge lead.
 */
export function buildLeadEmailHTML(lead: LeadData): string {
  const rows = [
    { label: "Name", value: lead.name },
    { label: "Email", value: lead.email },
    { label: "Company", value: lead.company || "—" },
    { label: "Service", value: lead.service },
    { label: "Budget", value: lead.budget },
    { label: "Timeline", value: lead.timeline },
    { label: "Message", value: lead.message },
  ];

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#0D0D0F;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D0D0F;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#2B2B2E;border-radius:12px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#F24C1A 0%,#C63E14 100%);padding:28px 32px;">
            <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;letter-spacing:0.5px;">
              New Concierge Lead
            </h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">
              Runners Circle Branding &amp; Marketing
            </p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${rows
                .map(
                  ({ label, value }) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">
                  <span style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:rgba(230,210,194,0.45);">${label}</span>
                  <span style="display:block;margin-top:4px;font-size:15px;color:#E6D2C2;line-height:1.5;">${escapeHTML(value)}</span>
                </td>
              </tr>`
                )
                .join("")}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0;font-size:11px;color:rgba(230,210,194,0.35);">
              This lead was submitted via the Runners Circle Concierge system.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

/**
 * Generates a plain-text fallback for the lead email.
 */
export function buildLeadEmailText(lead: LeadData): string {
  return [
    "NEW CONCIERGE LEAD — Runners Circle Branding & Marketing",
    "─".repeat(50),
    `Name:     ${lead.name}`,
    `Email:    ${lead.email}`,
    `Company:  ${lead.company || "—"}`,
    `Service:  ${lead.service}`,
    `Budget:   ${lead.budget}`,
    `Timeline: ${lead.timeline}`,
    `Message:  ${lead.message}`,
    "─".repeat(50),
    "Submitted via Concierge Chat",
  ].join("\n");
}

function escapeHTML(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
