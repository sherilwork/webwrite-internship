import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://seudxuanrawjmrkfrobt.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Xvzy1443abf1YXVdgPZqWQ_itD_Cx6P'

export const supabaseAdmin = createClient(supabaseUrl, supabaseKey)

export async function getInternshipApplications() {
  const { data, error } = await supabaseAdmin
    .from('internship_applications')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getJobApplications() {
  const { data, error } = await supabaseAdmin
    .from('job_applications')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function updateApplicationStatus(
  table: 'internship_applications' | 'job_applications',
  id: number,
  status: string
) {
  const { data, error } = await supabaseAdmin
    .from(table)
    .update({ status })
    .eq('id', id)
    .select()
  if (error) throw error
  return data
}
