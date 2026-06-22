import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, prenom } = await req.json()
  if (!email) return NextResponse.json({ error: 'Email requis' }, { status: 400 })
  return NextResponse.json({ success: true, message: 'Abonnement confirme !' })
}