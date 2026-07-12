import { query } from '@/lib/supabase-admin'

const SUPABASE_PAT = process.env.SUPABASE_PAT!
const PROJECT_REF = 'seudxuanrawjmrkfrobt'
const STORAGE_API = `https://api.supabase.com/v1/projects/${PROJECT_REF}/storage/buckets/resumes/objects`

export async function PATCH(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await _req.json()
    const sets: string[] = []
    if (body.status !== undefined) sets.push(`status = '${body.status.replace(/'/g, "''")}'`)
    if (body.stage !== undefined) sets.push(`stage = '${body.stage.replace(/'/g, "''")}'`)
    if (sets.length === 0) return Response.json({ error: 'no fields to update' }, { status: 400 })
    const sql = `UPDATE job_applications SET ${sets.join(', ')} WHERE id = ${Number(id)} RETURNING *`
    const data = await query(sql)
    return Response.json(data)
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const records = await query(`SELECT resume_url FROM job_applications WHERE id = ${Number(id)}`)
    const record = records?.[0]
    if (record?.resume_url) {
      const urlPath = record.resume_url.split('/resumes/')[1]
      if (urlPath) {
        await fetch(STORAGE_API, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${SUPABASE_PAT}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prefixes: [urlPath] }),
        })
      }
    }
    const sql = `DELETE FROM job_applications WHERE id = ${Number(id)} RETURNING *`
    const data = await query(sql)
    return Response.json(data)
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 500 })
  }
}
