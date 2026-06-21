export default function AdminArticles() {
  return (
    <div>
      <h1 className="text-2xl font-black mb-6">
        📝 Articles
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#111] border border-white/5 rounded-xl p-6">
          <h2 className="text-sm font-bold text-yellow-500 mb-5 uppercase tracking-wider">
            Nouvel article
          </h2>
          <div className="flex flex-col gap-3">
            <input placeholder="Titre de l'article"
              className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
            <input placeholder="Résumé court"
              className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
            <textarea placeholder="Contenu de l'article..." rows={5}
              className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full resize-none" />
            <select className="px-4 py-2.5 rounded-lg border border-white/8 bg-[#1a1a1a] text-sm text-white outline-none">
              <option value="">Catégorie</option>
              <option>Motivation</option>
              <option>Discipline</option>
              <option>Succes</option>
              <option>Productivite</option>
              <option>Leadership</option>
              <option>Mindset</option>
              <option>Habitudes</option>
            </select>
            <input placeholder="Tags : motivation, discipline..."
              className="px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-500/40 w-full" />
            <button className="bg-yellow-600 text-black font-bold py-2.5 rounded-lg text-sm hover:bg-yellow-400 transition-colors">
              Publier l'article
            </button>
          </div>
        </div>
        <div className="bg-[#111] border border-white/5 rounded-xl p-6">
          <h2 className="text-sm font-bold text-yellow-500 mb-5 uppercase tracking-wider">
            Articles récents
          </h2>
          <p className="text-gray-400 text-sm">Aucun article publié pour le moment.</p>
        </div>
      </div>
    </div>
  )
}