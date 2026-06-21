import HeroSection from '@/components/home/HeroSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className='bg-[#111] border-y border-yellow-600/10 py-20 px-[5%] text-center'>
        <div className='text-4xl mb-4'>??</div>
        <p className='text-xs font-bold uppercase tracking-[3px] text-yellow-500 mb-3'>Newsletter</p>
        <h2 className='text-3xl md:text-4xl font-black tracking-tight mb-2'>
          Recevez votre dose quotidienne de <span className='text-yellow-500'>motivation</span>
        </h2>
        <p className='text-gray-400 text-sm mt-2 mb-8'>Rejoignez 48 000 personnes qui transforment leur vie chaque jour</p>
        <div className='flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto'>
          <input type='text' placeholder='Votre prenom' className='flex-1 px-4 py-3.5 rounded-xl border border-white/10 bg-white/4 text-sm text-white placeholder-gray-500 outline-none' />
          <input type='email' placeholder='Votre email' className='flex-1 px-4 py-3.5 rounded-xl border border-white/10 bg-white/4 text-sm text-white placeholder-gray-500 outline-none' />
          <button className='bg-yellow-600 text-black font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-yellow-400 transition-colors whitespace-nowrap'>S abonner</button>
        </div>
        <p className='text-xs text-gray-500 mt-4'>100% gratuit - Aucun spam - Desabonnement en 1 clic</p>
      </section>

      <section className='py-20 px-[5%] text-center bg-black'>
        <p className='text-xs font-bold uppercase tracking-[3px] text-yellow-500 mb-3'>Communaute</p>
        <h2 className='text-3xl md:text-4xl font-black tracking-tight mb-10'>
          Rejoignez-nous <span className='text-yellow-500'>partout</span>
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto'>
          <a href='#' className='bg-[#111] border border-white/6 rounded-xl p-5 text-center hover:-translate-y-1 hover:border-yellow-500/25 transition-all'>
            <div className='text-3xl mb-2'>?</div>
            <div className='text-sm font-bold'>YouTube</div>
            <div className='text-xs text-gray-400 mt-1'>@MotivationMax</div>
          </a>
          <a href='#' className='bg-[#111] border border-white/6 rounded-xl p-5 text-center hover:-translate-y-1 hover:border-yellow-500/25 transition-all'>
            <div className='text-3xl mb-2'>TK</div>
            <div className='text-sm font-bold'>TikTok</div>
            <div className='text-xs text-gray-400 mt-1'>@motivationmax</div>
          </a>
          <a href='#' className='bg-[#111] border border-white/6 rounded-xl p-5 text-center hover:-translate-y-1 hover:border-yellow-500/25 transition-all'>
            <div className='text-3xl mb-2'>IG</div>
            <div className='text-sm font-bold'>Instagram</div>
            <div className='text-xs text-gray-400 mt-1'>@motivationmax</div>
          </a>
          <a href='#' className='bg-[#111] border border-white/6 rounded-xl p-5 text-center hover:-translate-y-1 hover:border-yellow-500/25 transition-all'>
            <div className='text-3xl mb-2'>TG</div>
            <div className='text-sm font-bold'>Telegram</div>
            <div className='text-xs text-gray-400 mt-1'>@MotivationMaxFR</div>
          </a>
        </div>
      </section>
    </>
  )
}
