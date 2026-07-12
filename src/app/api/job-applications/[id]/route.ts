import { supabaseAdmin } from '@/lib/supabase-admin'

export async function PATCH(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await _req.json()
    const update: Record<string, string> = {}
    if (body.status !== undefined) update.status = body.status
    if (body.stage !== undefined) update.stage = body.stage
    if (Object.keys(update).length === 0) return Response.json({ error: 'no fields to update' }, { status: 400 })
    const { data, error } = await supabaseAdmin
      .from('job_applications')
      .update(update)
      .eq('id', Number(id))
      .select()
    if (error) throw error
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
    const { data: records } = await supabaseAdmin
      .from('job_applications')
      .select('resume_url')
      .eq('id', Number(id))
      .single()
    if (records?.resume_url) {
      const urlPath = records.resume_url.split('/resumes/')[1]
      if (urlPath) {
        await supabaseAdmin.storage.from('resumes').remove([urlPath])
      }
    }
    const { data, error } = await supabaseAdmin
      .from('job_applications')
      .delete()
      .eq('id', Number(id))
      .select()
    if (error) throw error
    return Response.json(data)
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 500 })
  }
}
