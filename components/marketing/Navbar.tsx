'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
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
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 24px',
        background: scrolled ? 'rgba(5,7,9,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 36, height: 36, background: 'linear-gradient(135deg, #1a6ef5, #00c8ff)',
              borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 14, color: '#fff'
            }}>AL</div>
            <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 18, color: '#fff' }}>
              AMDY <span style={{ color: 'var(--blue-bright)' }}>LABS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hide-mobile">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--gray)'}
              >{l.label}</Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Link href="/contact" style={{
              background: 'var(--blue)', color: '#fff', padding: '10px 22px', borderRadius: 8,
              textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>Start a Project →</Link>
            <button className="show-mobile" onClick={() => setMobileOpen(true)}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8 }}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'var(--black)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
          <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
            <X size={28} />
          </button>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              style={{ fontFamily: 'var(--font-syne)', fontSize: 32, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)}
            style={{ background: 'var(--blue)', color: '#fff', padding: '14px 36px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16 }}>
            Start a Project →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hide-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
