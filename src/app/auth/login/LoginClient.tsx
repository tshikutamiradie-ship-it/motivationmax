'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginClient() {
  const sb = createClient()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const login = async () => {
    setLoading(true)
    setError('')
    const { error: err } = await sb.auth.signInWithPassword({ email, password })
    if (err) { setError(err.message); setLoading(false); return }
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center gap-2.5 justify-center mb-10">
          <div className="w-10 h-10 rounded-xl bg-yellow-600 flex items-center justify-center font-black text-black text-lg">M</div>
          <span className="font-extrabold text-xl">Motivation<span className="text-yellow-500">Max</span></span>
        </Link>
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
          <h1 className="text-xl font-black mb-1">Connexion Admin</h1>
          <p className="text-sm text-gray-400 mb-7">Acces au panneau de gestion</p>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase block mb-1.5">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="admin@motivationmax.fr" onKeyDown={e => e.key === 'Enter' && login()} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-gray-500 outline-none" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase block mb-1.5">Mot de passe</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" onKeyDown={e => e.key === 'Enter' && login()} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-gray-500 outline-none" />
            </div>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-2.5 rounded-lg">{error}</div>
            )}
            <button onClick={login} disabled={loading} className="bg-yellow-600 text-black font-bold py-3.5 rounded-xl text-sm hover:bg-yellow-400 transition-colors disabled:opacity-60">
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">
          <Link href="/" className="hover:text-white transition-colors">Retour au site</Link>
        </p>
      </div>
    </div>
  )
}