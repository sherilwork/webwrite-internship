import { readFileSync } from 'fs'
import { join } from 'path'

function getPat(): string {
  try {
    const config = readFileSync(join(process.cwd(), 'config.json'), 'utf-8')
    return JSON.parse(config).SUPABASE_PAT || ''
  } catch {
    return process.env.SUPABASE_PAT || ''
  }
}

const SUPABASE_PAT = getPat()

const API_BASE = 'https://api.supabase.com/v1/projects/seudxuanrawjmrkfrobt/database/query'

export async function query(sql: string) {
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
