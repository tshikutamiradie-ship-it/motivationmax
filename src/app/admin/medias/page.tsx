export default function AdminMedias() {
  return (
    <div>
      <h1 className="text-2xl font-black mb-6">▶ Médias</h1>
      <div className="bg-[#111] border border-white/5 rounded-xl p-6 max-w-lg">
        <h2 className="text-sm font-bold text-yellow-500 mb-5 uppercase tracking-wider">
          Ajouter un média
        </h2>
        <div className="flex flex-col gap-3">
          <input placeholder="Titre de la vidéo"
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
          <input placeholder="ID YouTube (ex: dQw4w9WgXcQ)"
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
          <select className="px-4 py-2.5 rounded-lg border border-white/8 bg-[#1a1a1a] text-sm text-white outline-none">
            <option value="video">Vidéo longue</option>
            <option value="short">Short</option>
            <option value="podcast">Podcast</option>
            <option value="image">Image</option>
          </select>
          <input placeholder="Durée (ex: 18:42)"
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
          <textarea placeholder="Description..." rows={3}
            className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full resize-none" />
          <button className="bg-yellow-600 text-black font-bold py-2.5 rounded-lg text-sm hover:bg-yellow-400 transition-colors">
            Publier le média
          </button>
        </div>
      </div>
    </div>
  )
}