'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projets' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '0 24px', background: scrolled ? 'rgba(4,8,26,0.96)' : 'transparent', backdropFilter: scrolled ? 'blur(24px)' : 'none', borderBottom: scrolled ? '1px solid rgba(30,45,74,0.5)' : 'none', transition: 'all 0.3s' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/logo-amdylabs.png" alt="AMDY LABS" width={44} height={44} style={{ borderRadius: '50%', objectFit: 'cover' }} priority />
            <span style={{ fontFamily: 'Syne, system-ui', fontWeight: 800, fontSize: 17, color: '#fff', letterSpacing: '-0.01em' }}>
              AMDY <span style={{ color: '#60a5fa' }}>LABS</span>
            </span>
          </Link>

          <div style={{ display: 'flex', gap: 34, alignItems: 'center' }} className="nav-links">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{ color: '#475569', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#e2e8f0'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#475569'}
              >{l.label}</Link>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <Link href="/contact" style={{ background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '10px 22px', borderRadius: 8, textDecoration: 'none', fontSize: 13, fontWeight: 700, boxShadow: '0 4px 20px rgba(26,110,245,0.3)' }} className="nav-cta">
              Démarrer un projet
            </Link>
            <button className="nav-hamburger" onClick={() => setMobileOpen(true)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8, display: 'none' }}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: '#04081a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
          <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
            <X size={28} />
          </button>
          <Image src="/logo-amdylabs.png" alt="AMDY LABS" width={80} height={80} style={{ borderRadius: '50%' }} />
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: 'Syne, system-ui', fontSize: 28, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 40px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16, marginTop: 8 }}>
            Démarrer un projet
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .nav-links { display: none !important; } .nav-cta { display: none !important; } .nav-hamburger { display: flex !important; } }
      `}</style>
    </>
  )
}
