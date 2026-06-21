export default function AdminEbooks() {
  return (
    <div>
      <h1 className="text-2xl font-black mb-6">📚 Ebooks</h1>
      <div className="bg-[#111] border border-white/5 rounded-xl p-6 max-w-lg">
        <h2 className="text-sm font-bold text-yellow-500 mb-5 uppercase tracking-wider">
          Publier un ebook
        </h2>
        <div className="flex flex-col gap-3">
          <input placeholder="Titre de l'ebook"
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
          <textarea placeholder="Description..." rows={2}
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full resize-none" />
          <input placeholder="URL couverture"
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
          <input placeholder="URL fichier PDF"
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
          <select className="px-4 py-2.5 rounded-lg border border-white/8 bg-[#1a1a1a] text-sm text-white outline-none">
            <option value="1">Gratuit</option>
            <option value="0">Payant</option>
          </select>
          <input placeholder="Prix en € (si payant)" type="number"
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
          <button className="bg-yellow-600 text-black font-bold py-2.5 rounded-lg text-sm hover:bg-yellow-400 transition-colors">
            Publier l'ebook
          </button>
        </div>
      </div>
    </div>
  )
}