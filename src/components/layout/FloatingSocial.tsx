export default function FloatingSocial() {
  const socials = [
    { icon: '?', label: 'YouTube', href: '#' },
    { icon: '??', label: 'Instagram', href: '#' },
    { icon: '??', label: 'TikTok', href: '#' },
    { icon: '??', label: 'Telegram', href: '#' },
  ]
  return (
    <div className='hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-2 z-40'>
      {socials.map(s => (
        <a key={s.label} href={s.href} title={s.label}
          className='w-9 h-9 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-base transition-all hover:scale-110 hover:bg-yellow-500/10'>
          {s.icon}
        </a>
      ))}
    </div>
  )
}
