import { NextRequest, NextResponse } from "next/server";

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
  createdAt: string;
}

// In-memory mock store. Resets on server restart — swap for a real
// database/CRM call when wiring this up to production.
const leads: Lead[] = [];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  return NextResponse.json({ leads });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, company, teamSize, message } = body as Partial<Lead>;

  if (!name || !email || !company) {
    return NextResponse.json(
      { error: "Name, email, and company are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const lead: Lead = {
    id: crypto.randomUUID(),
    name,
    email,
    company,
    teamSize: teamSize ?? "Unspecified",
    message: message ?? "",
    createdAt: new Date().toISOString(),
  };

  leads.push(lead);

  return NextResponse.json({ lead }, { status: 201 });
}
