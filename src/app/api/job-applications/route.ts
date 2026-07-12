import { getJobApplications } from '@/lib/supabase-admin'

export async function GET() {
  try {
    const data = await getJobApplications()
    return Response.json(data)
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 500 })
  }
}
