import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Missing Supabase env vars')
  return createClient(url, key)
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = typeof body?.email === 'string' ? body.email.toLowerCase().trim() : null

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const source = typeof body?.source === 'string' ? body.source : 'landing'

    const supabase = getSupabase()
    const { error } = await supabase.from('waitlist').insert({ email, source })

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Cet email est déjà sur la liste !' },
          { status: 409 }
        )
      }
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist route error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
