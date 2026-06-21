export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-black">
          Dashboard <span className="text-yellow-500">Admin</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Panneau de gestion MotivationMax
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Articles', val: '0', icon: '📝' },
          { label: 'Medias', val: '0', icon: '▶' },
          { label: 'Ebooks', val: '0', icon: '📚' },
          { label: 'Abonnes', val: '0', icon: '💌' },
        ].map(s => (
          <div key={s.label} className="bg-[#111] border border-white/5 rounded-xl p-5">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-2xl font-black text-yellow-500">{s.val}</div>
            <div className="text-xs text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#111] border border-white/5 rounded-xl p-6">
        <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-4">
          Bienvenue dans votre espace admin
        </h2>
        <p className="text-gray-400 text-sm">
          Utilisez le menu a gauche pour gerer votre contenu.
        </p>
      </div>
    </div>
  )
}