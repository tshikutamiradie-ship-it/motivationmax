export default function AdminAbonnes() {
  return (
    <div>
      <h1 className="text-2xl font-black mb-6">💌 Abonnés</h1>
      <div className="bg-[#111] border border-white/5 rounded-xl p-6">
        <h2 className="text-sm font-bold text-yellow-500 mb-5 uppercase tracking-wider">
          Liste des abonnés
        </h2>
        <p className="text-gray-400 text-sm">
          Aucun abonné pour le moment. Les abonnés apparaîtront ici quand des personnes s'inscriront à la newsletter.
        </p>
      </div>
    </div>
  )
}