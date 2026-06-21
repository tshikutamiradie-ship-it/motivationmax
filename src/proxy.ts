import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function proxy(req: NextRequest) {
  const res = NextResponse.next()
  const sb = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cs) => cs.forEach(c => res.cookies.set(c)),
      },
    }
  )
  const { data: { user } } = await sb.auth.getUser()

  if (req.nextUrl.pathname.startsWith('/admin') && !user) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }
  return res
}

export const config = {
  matcher: ['/admin/:path*'],
}
