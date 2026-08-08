import { Pool, type QueryResultRow } from "pg";

function connectionStringWithoutSslMode(url: string | undefined): string | undefined {
  if (!url) return url;
  // pg-connection-string reads `sslmode` from the URL and lets it override the
  // `ssl` option below (Supabase's pooler URL ships `sslmode=require`, which pg
  // now treats as `verify-full` and fails on Supabase's cert chain). Stripping
  // it here so our explicit `ssl` option below is what actually applies.
  const parsed = new URL(url);
  parsed.searchParams.delete("sslmode");
  return parsed.toString();
}

const pool = new Pool({
  connectionString: connectionStringWithoutSslMode(process.env.POSTGRES_URL),
  ssl: { rejectUnauthorized: false },
});

let schemaReady: Promise<void> | null = null;

function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = pool
      .query(
        `CREATE TABLE IF NOT EXISTS leads (
          id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
          name text NOT NULL,
          email text NOT NULL,
          company text NOT NULL,
          team_size text,
          message text,
          created_at timestamptz NOT NULL DEFAULT now()
        );`
      )
      .then(() => undefined);
  }
  return schemaReady;
}

export async function query<T extends QueryResultRow>(
  text: string,
  params?: unknown[]
): Promise<T[]> {
  await ensureSchema();
  const result = await pool.query<T>(text, params);
  return result.rows;
}
