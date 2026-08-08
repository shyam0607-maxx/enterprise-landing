import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
  createdAt: string;
}

interface LeadRow {
  id: string;
  name: string;
  email: string;
  company: string;
  team_size: string | null;
  message: string | null;
  created_at: string;
}

function toLead(row: LeadRow): Lead {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    company: row.company,
    teamSize: row.team_size ?? "Unspecified",
    message: row.message ?? "",
    createdAt: row.created_at,
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  const rows = await query<LeadRow>(
    "SELECT * FROM leads ORDER BY created_at DESC"
  );
  return NextResponse.json({ leads: rows.map(toLead) });
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

  const rows = await query<LeadRow>(
    `INSERT INTO leads (name, email, company, team_size, message)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, email, company, teamSize ?? "Unspecified", message ?? ""]
  );

  return NextResponse.json({ lead: toLead(rows[0]) }, { status: 201 });
}
