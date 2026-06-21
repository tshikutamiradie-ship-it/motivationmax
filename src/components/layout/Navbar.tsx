'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',            label: 'Accueil' },
  { href: '/a-propos',    label: 'À propos' },
  { href: '/blog',        label: 'Blog' },
  { href: '/mediateque',  label: 'Médias' },
  { href: '/citations',   label: 'Citations' },
  { href: '/ebooks',      label: 'Ebooks' },
  { href: '/contact',     label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-[5%] transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-yellow-600/10' : 'bg-transparent'}`}>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center font-black text-black text-base">
          M
        </div>
        <span className="font-extrabold text-[17px] tracking-tight">
          Motivation<span className="text-yellow-500">Max</span>
        </span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {links.map(l => (
          <Link key={l.href} href={l.href}
            className={`text-[13.5px] font-medium px-3 py-2 rounded-lg transition-colors ${pathname === l.href ? 'text-yellow-500' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
            {l.label}
          </Link>
        ))}
        <Link href="/admin"
          className="ml-2 bg-yellow-600 text-black text-[13px] font-bold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
          Admin 👑
        </Link>
      </div>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setOpen(!open)}>
        <span className={`w-6 h-0.5 bg-white rounded transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`w-6 h-0.5 bg-white rounded transition-all ${open ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-white rounded transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[70px] left-0 right-0 bg-black/97 border-b border-white/5 p-4 flex flex-col gap-1 md:hidden">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${pathname === l.href ? 'text-yellow-500 bg-yellow-500/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/admin" onClick={() => setOpen(false)}
            className="mt-2 bg-yellow-600 text-black text-sm font-bold px-4 py-3 rounded-lg text-center">
            Admin 👑
          </Link>
        </div>
      )}
    </nav>
  )
}