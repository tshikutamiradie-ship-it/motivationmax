export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <div className="bg-[#111] border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-yellow-600 flex items-center justify-center font-black text-black text-sm">M</div>
          <span className="font-bold">Motivation<span className="text-yellow-500">Max</span> — Admin</span>
        </div>
        <span className="text-xs text-yellow-500 font-bold border border-yellow-500/30 px-3 py-1 rounded-full">
          👑 Administrateur
        </span>
      </div>
      <div className="flex">
        <aside className="w-52 min-h-screen border-r border-white/5 p-4 flex flex-col gap-1">
          {[
            { href:'/admin', label:'Dashboard', icon:'📊' },
            { href:'/admin/articles', label:'Articles', icon:'📝' },
            { href:'/admin/medias', label:'Medias', icon:'▶' },
            { href:'/admin/citations', label:'Citations', icon:'💬' },
            { href:'/admin/ebooks', label:'Ebooks', icon:'📚' },
            { href:'/admin/abonnes', label:'Abonnes', icon:'💌' },
          ].map(i => (
            <a key={i.href} href={i.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/5 transition-colors">
              <span>{i.icon}</span>{i.label}
            </a>
          ))}
          <a href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-white transition-colors mt-4">
            ← Retour au site
          </a>
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}