import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function createNoopClient(): SupabaseClient {
  const noop = () => ({ data: { user: null, session: null }, error: null })
  const noopSub = { data: { subscription: { unsubscribe: () => {} } } }
  const noopChain: any = new Proxy({}, {
    get: (_, prop) => {
      if (prop === 'then') return undefined
      if (prop === 'subscribe') return () => noopSub
      if (typeof prop === 'string') return () => noopChain
      return noopChain
    },
  })
  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
      signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: 'Supabase not configured' } }),
      signOut: async () => ({ error: null }),
      onAuthStateChange: () => noopSub,
      signUp: async () => ({ data: { user: null, session: null }, error: null }),
      resetPasswordForEmail: async () => ({ error: null }),
      updateUser: async () => ({ data: { user: null }, error: null }),
      setSession: async () => ({ data: { session: null }, error: null }),
      refreshSession: async () => ({ data: { session: null }, error: null }),
    },
    from: () => noopChain,
    rpc: () => Promise.resolve({ data: null, error: null }),
    storage: { from: () => noopChain },
  } as unknown as SupabaseClient
}

export const supabase: SupabaseClient = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        storageKey: 'smiloe-admin-session',
      },
    })
  : createNoopClient()
