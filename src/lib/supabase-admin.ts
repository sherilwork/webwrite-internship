const SUPABASE_PAT = process.env.SUPABASE_PAT || ''

const API_BASE = 'https://api.supabase.com/v1/projects/seudxuanrawjmrkfrobt/database/query'

export function getPat(): string {
  return SUPABASE_PAT
}

export async function query(sql: string) {
  if (!SUPABASE_PAT) {
    throw new Error('SUPABASE_PAT environment variable is not set')
  }
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SUPABASE_PAT}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: sql }),
    cache: 'no-store',
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Supabase query failed: ${res.status} ${text}`)
  }
  return res.json()
}

export async function getInternshipApplications() {
  return query('SELECT * FROM internship_applications ORDER BY created_at DESC')
}

export async function getJobApplications() {
  return query('SELECT * FROM job_applications ORDER BY created_at DESC')
}

export async function updateApplicationStatus(
  table: 'internship_applications' | 'job_applications',
  id: number,
  status: string
) {
  return query(
    `UPDATE ${table} SET status = '${status.replace(/'/g, "''")}' WHERE id = ${id} RETURNING *`
  )
}
