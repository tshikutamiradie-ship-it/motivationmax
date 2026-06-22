export default function AProposPage() {
  return (
    <section className="pt-[100px] px-[5%] pb-20 min-h-screen bg-black">
      <p className="text-yellow-500 text-xs font-bold tracking-[3px] uppercase mb-3">Notre histoire</p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
        La mission qui nous <span className="text-yellow-500">anime</span>
      </h1>
      <p className="text-gray-400 leading-relaxed max-w-2xl mb-8">
        MotivationMax est né d'une conviction profonde : chaque être humain possède un potentiel illimité. Notre mission est de fournir les outils, l'inspiration et la communauté pour que chacun puisse l'atteindre.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
        {[
          { icon: '⚡', name: 'Discipline', desc: 'La clé de tout succès durable' },
          { icon: '🔥', name: 'Persévérance', desc: 'Ne jamais abandonner' },
          { icon: '🦁', name: 'Courage', desc: 'Agir malgré la peur' },
          { icon: '📈', name: 'Croissance', desc: 'Amélioration continue' },
          { icon: '👑', name: 'Excellence', desc: 'Toujours viser le sommet' },
          { icon: '🎯', name: 'Vision', desc: 'Voir loin, agir maintenant' },
        ].map(v => (
          <div key={v.name} className="bg-yellow-600/5 border border-yellow-600/15 rounded-xl p-5">
            <div className="text-2xl mb-3">{v.icon}</div>
            <div className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-1">{v.name}</div>
            <div className="text-xs text-gray-400">{v.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}