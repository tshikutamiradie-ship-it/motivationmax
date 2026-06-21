import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-[#0d0d0d] border-t border-white/5 pt-14 pb-8 px-[5%]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12'>
        <div>
          <Link href='/' className='flex items-center gap-2 mb-4'>
            <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center font-black text-black text-sm'>M</div>
            <span className='font-extrabold text-base'>Motivation<span className='text-yellow-500'>Max</span></span>
          </Link>
          <p className='text-sm text-gray-400 leading-relaxed max-w-[220px]'>Votre centre de motivation, discipline et developpement personnel.</p>
          <p className='text-yellow-500 text-xs font-bold tracking-widest uppercase mt-4'>Inspirez - Agissez - Reussissez</p>
        </div>
        <div>
          <h4 className='text-xs font-bold uppercase tracking-widest text-yellow-500 mb-4'>Navigation</h4>
          <div className='flex flex-col gap-2'>
            <Link href='/a-propos' className='text-sm text-gray-400 hover:text-white transition-colors'>A propos</Link>
            <Link href='/blog' className='text-sm text-gray-400 hover:text-white transition-colors'>Blog</Link>
            <Link href='/mediateque' className='text-sm text-gray-400 hover:text-white transition-colors'>Medias</Link>
            <Link href='/citations' className='text-sm text-gray-400 hover:text-white transition-colors'>Citations</Link>
            <Link href='/ebooks' className='text-sm text-gray-400 hover:text-white transition-colors'>Ebooks</Link>
          </div>
        </div>
        <div>
          <h4 className='text-xs font-bold uppercase tracking-widest text-yellow-500 mb-4'>Reseaux</h4>
          <div className='flex flex-col gap-2'>
            <a href='#' className='text-sm text-gray-400 hover:text-white transition-colors'>YouTube</a>
            <a href='#' className='text-sm text-gray-400 hover:text-white transition-colors'>TikTok</a>
            <a href='#' className='text-sm text-gray-400 hover:text-white transition-colors'>Instagram</a>
            <a href='#' className='text-sm text-gray-400 hover:text-white transition-colors'>Telegram</a>
            <a href='#' className='text-sm text-gray-400 hover:text-white transition-colors'>LinkedIn</a>
          </div>
        </div>
        <div>
          <h4 className='text-xs font-bold uppercase tracking-widest text-yellow-500 mb-4'>Legal</h4>
          <div className='flex flex-col gap-2'>
            <Link href='/contact' className='text-sm text-gray-400 hover:text-white transition-colors'>Contact</Link>
            <Link href='/mentions-legales' className='text-sm text-gray-400 hover:text-white transition-colors'>Mentions legales</Link>
            <Link href='/confidentialite' className='text-sm text-gray-400 hover:text-white transition-colors'>Confidentialite</Link>
          </div>
        </div>
      </div>
      <div className='border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500'>
        <span>2025 MotivationMax. Tous droits reserves.</span>
        <span className='text-yellow-500 font-semibold'>Inspirez - Agissez - Reussissez</span>
      </div>
    </footer>
  )
}
