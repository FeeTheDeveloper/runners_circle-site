/* ─── Lead Data Schema ─── */

export interface LeadData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

/* ─── Conversation step identifiers ─── */
export type ConversationStep =
  | "welcome"
  | "timeline"
  | "budget"
  | "business"
  | "name"
  | "email"
  | "message"
  | "submitting"
  | "success"
  | "error";

/* ─── Option sets ─── */
export const SERVICE_OPTIONS = [
  "Brand System",
  "Website / App",
  "AI Automation",
  "Full Business Build",
] as const;

export const BUDGET_OPTIONS = [
  "Under $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
] as const;

export const TIMELINE_OPTIONS = [
  "ASAP (1–2 weeks)",
  "This month",
  "1–3 months",
  "Just exploring",
] as const;

/* ─── Validation helpers ─── */
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateLeadData(
  data: Partial<LeadData>
): { valid: true; data: LeadData } | { valid: false; error: string } {
  if (!data.name?.trim()) return { valid: false, error: "Name is required." };
  if (!data.email?.trim() || !validateEmail(data.email))
    return { valid: false, error: "A valid email is required." };
  if (!data.service?.trim())
    return { valid: false, error: "Service selection is required." };
  if (!data.budget?.trim())
    return { valid: false, error: "Budget range is required." };
  if (!data.timeline?.trim())
    return { valid: false, error: "Timeline is required." };
  if (!data.message?.trim())
    return { valid: false, error: "A message is required." };

  return {
    valid: true,
    data: {
      name: data.name.trim(),
      email: data.email.trim(),
      company: data.company?.trim() || undefined,
      service: data.service.trim(),
      budget: data.budget.trim(),
      timeline: data.timeline.trim(),
      message: data.message.trim(),
    },
  };
}

/* ─── Future persistence abstraction ─── */
// Plug in any storage backend here:
// - PostgreSQL (e.g. Prisma / Drizzle)
// - Notion API
// - Airtable API
// - HubSpot / Salesforce CRM

export async function persistLead(_lead: LeadData): Promise<void> {
  // TODO: implement storage adapter
  // Example:
  // await db.leads.create({ data: lead });
  // await notion.pages.create({ ... });
  // await airtable("Leads").create([{ fields: lead }]);
  return;
}
