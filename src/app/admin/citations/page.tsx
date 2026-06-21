export default function AdminCitations() {
  return (
    <div>
      <h1 className="text-2xl font-black mb-6">💬 Citations</h1>
      <div className="bg-[#111] border border-white/5 rounded-xl p-6 max-w-lg">
        <h2 className="text-sm font-bold text-yellow-500 mb-5 uppercase tracking-wider">
          Nouvelle citation
        </h2>
        <div className="flex flex-col gap-3">
          <textarea placeholder="Texte de la citation..." rows={4}
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full resize-none" />
          <input placeholder="Auteur"
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
          <select className="px-4 py-2.5 rounded-lg border border-white/8 bg-[#1a1a1a] text-sm text-white outline-none">
            <option>Motivation</option>
            <option>Discipline</option>
            <option>Succes</option>
            <option>Leadership</option>
          </select>
          <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
            <input type="checkbox" className="accent-yellow-500" />
            Mettre en avant sur la page d'accueil
          </label>
          <button className="bg-yellow-600 text-black font-bold py-2.5 rounded-lg text-sm hover:bg-yellow-400 transition-colors">
            Publier la citation
          </button>
        </div>
      </div>
    </div>
  )
}