export default function ContactPage() {
  return (
    <section className="pt-[100px] px-[5%] pb-20 min-h-screen bg-black">
      <p className="text-yellow-500 text-xs font-bold tracking-[3px] uppercase mb-3">Contact</p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-10">
        Parlons <span className="text-yellow-500">ensemble</span>
      </h1>
      <div className="max-w-lg">
        <div className="flex flex-col gap-4">
          <input placeholder="Votre nom" className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-gray-500 outline-none" />
          <input placeholder="Votre email" type="email" className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-gray-500 outline-none" />
          <textarea placeholder="Votre message..." rows={5} className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-gray-500 outline-none resize-none" />
          <button className="bg-yellow-600 text-black font-bold py-3.5 rounded-xl text-sm hover:bg-yellow-400 transition-colors">
            Envoyer le message
          </button>
        </div>
      </div>
    </section>
  )
}