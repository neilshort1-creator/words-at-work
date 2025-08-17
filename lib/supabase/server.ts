import { createServerClient } from '@supabase/ssr'
import { cookies, headers } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()
  const headerList = headers()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        }
      },
      headers: {
        get(key: string) {
          return headerList.get(key) ?? undefined
        }
      }
    }
  )
}
