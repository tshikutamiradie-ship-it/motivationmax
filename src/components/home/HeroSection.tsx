import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[70px] overflow-hidden bg-black">
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-yellow-600 opacity-[0.10] blur-[90px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-white opacity-[0.02] blur-[70px]" />
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,175,55,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,0.04) 1px,transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[780px] px-[5%]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-600/10 border border-yellow-600/25 rounded-full px-4 py-2 text-xs font-bold text-yellow-500 tracking-widest uppercase mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
          🔥 Inspirez • Agissez • Réussissez
        </div>

        {/* Titre */}
        <h1 className="text-[clamp(38px,6vw,76px)] font-black leading-[1.05] tracking-[-2px] mb-6">
          Transformez votre<br />
          <span className="text-yellow-500">mentalité.</span><br />
          Transformez votre vie.
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-[540px]">
          Motivation quotidienne, discipline, succès et développement personnel.
          Devenez la meilleure version de vous-même.
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap gap-3">
          <Link href="/mediateque"
            className="bg-yellow-600 text-black font-bold px-7 py-3.5 rounded-xl text-[15px] hover:bg-yellow-400 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
            ▶ Voir les vidéos
          </Link>
          <Link href="/blog"
            className="border border-white/15 text-white font-semibold px-7 py-3.5 rounded-xl text-[15px] hover:border-yellow-500 hover:text-yellow-500 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
            📖 Lire le blog
          </Link>
          <Link href="/ebooks"
            className="border border-white/15 text-white font-semibold px-7 py-3.5 rounded-xl text-[15px] hover:border-yellow-500 hover:text-yellow-500 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
            📚 Ebooks gratuits
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/6">
          {[
            { num: '250K+', label: 'Abonnés YouTube' },
            { num: '1.2M',  label: 'Vues totales' },
            { num: '48K',   label: 'Newsletter' },
            { num: '120+',  label: 'Articles publiés' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-black text-yellow-500">{s.num}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}