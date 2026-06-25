'use client'
import HeroSection from '@/components/home/HeroSection'
import { useState } from 'react'

export default function HomePage() {
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const subscribe = async () => {
    if (!prenom || !email) return
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prenom, email }),
    })
    if (res.ok) setMsg('Abonnement confirme!')
    else setMsg('Erreur, reessayez.')
  }

  return (
    <>
      <HeroSection />

      {/* Newsletter */}
      <section className="bg-[#111] border-y border-yellow-600/10 py-20 px-[5%] text-center">
        <div className="text-4xl mb-4">🔥</div>
        <p className="text-xs font-bold uppercase tracking-[3px] text-yellow-500 mb-3">Newsletter</p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
          Recevez votre dose quotidienne de <span className="text-yellow-500">motivation</span>
        </h2>
        <p className="text-gray-400 text-sm mt-2 mb-8">
          Rejoignez 48 000 personnes qui transforment leur vie chaque jour
        </p>
        {msg ? (
          <div className="text-green-400 font-bold text-lg">{msg} 🎉</div>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
              <input
                type="text"
                value={prenom}
                onChange={e => setPrenom(e.target.value)}
                placeholder="Votre prenom"
                className="flex-1 px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40"
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Votre email"
                className="flex-1 px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40"
              />
              <button
                onClick={subscribe}
                className="bg-yellow-600 text-black font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-yellow-400 transition-colors whitespace-nowrap"
              >
                S'abonner 🚀
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              100% gratuit - Aucun spam - Desabonnement en 1 clic
            </p>
          </>
        )}
      </section>

      {/* Reseaux sociaux */}
      <section className="py-20 px-[5%] text-center bg-black">
        <p className="text-xs font-bold uppercase tracking-[3px] text-yellow-500 mb-3">Communaute</p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-10">
          Rejoignez-nous <span className="text-yellow-500">partout</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <a href="#" className="bg-[#111] border border-red-500/20 rounded-xl p-5 text-center hover:-translate-y-1 hover:border-red-500/50 transition-all">
            <div className="text-3xl mb-2 text-red-500">▶</div>
            <div className="text-sm font-bold text-white">YouTube</div>
            <div className="text-xs text-gray-400 mt-1">@MotivationMax</div>
          </a>
          <a href="#" className="bg-[#111] border border-gray-500/20 rounded-xl p-5 text-center hover:-translate-y-1 hover:border-white/30 transition-all">
            <div className="text-3xl mb-2 text-white font-black">TK</div>
            <div className="text-sm font-bold text-white">TikTok</div>
            <div className="text-xs text-gray-400 mt-1">@motivationmax</div>
          </a>
          <a href="#" className="bg-[#111] border border-pink-500/20 rounded-xl p-5 text-center hover:-translate-y-1 hover:border-pink-500/50 transition-all">
            <div className="text-3xl mb-2 text-pink-500 font-black">IG</div>
            <div className="text-sm font-bold text-white">Instagram</div>
            <div className="text-xs text-gray-400 mt-1">@motivationmax</div>
          </a>
          <a href="#" className="bg-[#111] border border-blue-500/20 rounded-xl p-5 text-center hover:-translate-y-1 hover:border-blue-500/50 transition-all">
            <div className="text-3xl mb-2 text-blue-400 font-black">TG</div>
            <div className="text-sm font-bold text-white">Telegram</div>
            <div className="text-xs text-gray-400 mt-1">@MotivationMaxFR</div>
          </a>
        </div>
      </section>
    </>
  )
}