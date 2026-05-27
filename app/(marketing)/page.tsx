'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'

function useCountUp(target: number, duration = 1600, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf: number, current = 0
    const step = target / (duration / 16)
    const tick = () => { current = Math.min(current + step, target); setVal(Math.floor(current)); if (current < target) raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])
  return val
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const SERVICES = [
  { icon: '📱', label: 'Mobile Apps', desc: 'Native & cross-platform Android and iOS apps built for African consumers.' },
  { icon: '🌐', label: 'Websites', desc: 'Modern responsive websites that convert visitors into paying customers.' },
  { icon: '🏪', label: 'POS Systems', desc: 'CaissePro-powered point-of-sale with Wave, Orange Money & mobile payments.' },
  { icon: '☁️', label: 'SaaS Platforms', desc: 'Full multi-tenant software platforms built to scale across Africa.' },
  { icon: '🛒', label: 'E-Commerce', desc: 'Online stores with African payment gateways and WhatsApp integration.' },
  { icon: '🤖', label: 'AI Solutions', desc: 'Smart automation, chatbots, and AI-powered analytics for your business.' },
]

const PROJECTS = [
  {
    name: 'CaissePro',
    sub: 'POS & Business Management',
    desc: 'A modern point-of-sale and business management system designed for African merchants. Inventory, WhatsApp receipts, customer debt tracking, CFA support.',
    emoji: '🏪',
    color: 'linear-gradient(135deg, #0d1f4a 0%, #1a3a8f 100%)',
    tags: ['Next.js', 'Supabase', 'PWA', 'Wave API'],
  },
  {
    name: 'VYBZ Social',
    sub: 'Social & Nightlife Platform',
    desc: 'A social platform connecting people, events, nightlife, and experiences across Africa and the diaspora.',
    emoji: '🎉',
    color: 'linear-gradient(135deg, #2a0d3a 0%, #7b2d8f 100%)',
    tags: ['React Native', 'Firebase', 'Maps', 'Events'],
  },
  {
    name: 'Mon Livreur',
    sub: 'Delivery & Logistics',
    desc: 'A delivery and logistics platform designed for African businesses and local delivery services. Real-time tracking, driver dispatch, customer notifications.',
    emoji: '🚚',
    color: 'linear-gradient(135deg, #0d2a1a 0%, #1a6e3a 100%)',
    tags: ['React Native', 'Node.js', 'Maps API', 'WhatsApp'],
  },
]

const AFRICA_FEATURES = [
  { icon: '💸', title: 'Wave & Orange Money', desc: 'Native mobile money integrations' },
  { icon: '📲', title: 'WhatsApp Commerce', desc: 'Sell & notify via WhatsApp' },
  { icon: '🇫🇷', title: 'Multilingual', desc: 'French, English & Wolof' },
  { icon: '📶', title: 'Offline-First', desc: 'Works on 2G & without internet' },
  { icon: '🪙', title: 'CFA & Local Currencies', desc: 'XOF, XAF, GHS, NGN support' },
  { icon: '📱', title: 'Mobile-First', desc: 'Designed for smartphone users' },
]

const FAQ = [
  ['How long does it take to build a mobile app?', 'Typically 6–16 weeks depending on complexity. A simple MVP can be delivered in 4–6 weeks. We provide a detailed timeline after a free discovery call.'],
  ['Do you integrate African payment methods?', 'Yes — Wave, Orange Money, Free Money, MTN, PayDunya, CinetPay, and other African gateways are natively integrated in all our products.'],
  ['What are your pricing models?', 'We offer fixed-price projects, monthly retainers, and SaaS subscriptions. Transparent quotes upfront, no surprises.'],
  ['Do you provide support after launch?', 'Absolutely. We offer maintenance packages, bug fixes, feature updates, and 24/7 emergency support via WhatsApp.'],
  ['Can non-technical founders work with you?', 'That\'s our specialty. You bring the vision — we handle all the technology. No coding knowledge needed, ever.'],
]

export default function HomePage() {
  const statsRef = useInView()
  const c1 = useCountUp(50, 1600, statsRef.inView)
  const c2 = useCountUp(30, 1600, statsRef.inView)
  const c3 = useCountUp(3, 1600, statsRef.inView)
  const c4 = useCountUp(5, 1600, statsRef.inView)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>

      {/* ══════ HERO ══════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 72 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 60% 40%, #0b1d4a 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 10% 80%, #04112e 0%, transparent 60%), #050709' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#1a2d50 1px, transparent 1px), linear-gradient(90deg, #1a2d50 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)', opacity: 0.2 }} />
        <div style={{ position: 'absolute', width: 700, height: 700, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(140px)', top: -200, right: -200, opacity: 0.07, animation: 'pulse 9s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, background: '#00c8ff', borderRadius: '50%', filter: 'blur(100px)', bottom: 0, left: -150, opacity: 0.04, animation: 'pulse 9s ease-in-out infinite 4s' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.4)', borderRadius: 100, padding: '6px 16px 6px 10px', fontSize: 12, fontWeight: 600, color: '#60a5fa', marginBottom: 32, letterSpacing: '0.04em' }}>
              <span style={{ width: 7, height: 7, background: '#00e676', borderRadius: '50%', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
              African Innovation · Global Standards
            </div>

            <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(42px, 6vw, 76px)', fontWeight: 800, lineHeight: 1.03, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Building{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #00c8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Africa's</span>
              <br />Digital Future
            </h1>

            <p style={{ fontSize: 18, color: '#94a3b8', maxWidth: 500, marginBottom: 44, lineHeight: 1.75 }}>
              AMDY LABS creates modern apps, websites, software, and digital platforms — helping African businesses grow, modernize, and compete globally.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, #1a6ef5, #0050c8)', color: '#fff', padding: '15px 30px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.35)' }}>
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.04)', color: '#fff', padding: '15px 30px', borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
                Explore Our Work
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ display: 'flex' }}>
                {['AB', 'KD', 'SF', 'MN', 'YB'].map((a, i) => (
                  <div key={a} style={{ width: 34, height: 34, borderRadius: '50%', border: '2px solid #050709', background: `hsl(${200 + i * 40}, 60%, 40%)`, marginLeft: i === 0 ? 0 : -10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#fff' }}>{a}</div>
                ))}
              </div>
              <span style={{ fontSize: 13, color: '#64748b' }}>
                <strong style={{ color: '#94a3b8' }}>Amdy Boubacar</strong> & a global team across the US, Europe & Africa
              </span>
            </div>
          </div>

          {/* Dashboard Visual */}
          <div style={{ position: 'relative', animation: 'float 7s ease-in-out infinite' }}>
            {/* Floating top-right card */}
            <div style={{ position: 'absolute', top: -28, right: -28, background: 'rgba(13,20,37,0.95)', border: '1px solid rgba(30,45,74,0.8)', borderRadius: 14, padding: '14px 18px', zIndex: 10, animation: 'float2 5s ease-in-out infinite 2s', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>💳</div>
              <div style={{ fontSize: 9, color: '#64748b', marginBottom: 2 }}>Wave payment</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#00e676' }}>+84,200 XOF</div>
            </div>

            {/* Main dashboard */}
            <div style={{ background: 'linear-gradient(135deg, #0d1425 0%, #0a1020 100%)', border: '1px solid rgba(30,45,74,0.7)', borderRadius: 20, padding: 22, boxShadow: '0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid rgba(30,45,74,0.5)' }}>
                <div>
                  <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 13, marginBottom: 2 }}>CaissePro</div>
                  <div style={{ fontSize: 10, color: '#64748b' }}>Tableau de bord</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#00e676', background: 'rgba(0,230,118,0.1)', border: '1px solid rgba(0,230,118,0.2)', borderRadius: 20, padding: '3px 10px' }}>
                  <span style={{ width: 5, height: 5, background: '#00e676', borderRadius: '50%', display: 'inline-block' }} />
                  En ligne
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 18 }}>
                {[['Ventes', '2.4M', '↑12%'], ['Commandes', '1,250', '↑8%'], ['Clients', '980', '↑15%']].map(([l, v, c]) => (
                  <div key={l} style={{ background: 'rgba(10,16,32,0.6)', border: '1px solid rgba(30,45,74,0.4)', borderRadius: 10, padding: 12 }}>
                    <div style={{ fontSize: 9, color: '#475569', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
                    <div style={{ fontFamily: 'Syne, system-ui', fontSize: 17, fontWeight: 700 }}>{v}</div>
                    <div style={{ fontSize: 9, color: '#00e676', marginTop: 2 }}>{c}</div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 68, marginBottom: 16 }}>
                {[35, 58, 42, 75, 50, 90, 65, 82, 55, 95].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: i % 2 === 0 ? 'linear-gradient(180deg, #1a6ef5, #0a3070)' : 'linear-gradient(180deg, #00c8ff, #003d5c)', borderRadius: '3px 3px 0 0', opacity: 0.85 }} />
                ))}
              </div>

              {/* Transactions */}
              {[['Wave', '+24,500 XOF', true], ['Orange Money', '+18,000 XOF', true], ['Stock', '-5,200 XOF', false]].map(([n, a, pos]) => (
                <div key={String(n)} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid rgba(30,45,74,0.3)', fontSize: 11 }}>
                  <span style={{ color: '#475569' }}>{n}</span>
                  <span style={{ fontWeight: 600, color: pos ? '#00e676' : '#f87171' }}>{String(a)}</span>
                </div>
              ))}
            </div>

            {/* Floating bottom-left */}
            <div style={{ position: 'absolute', bottom: 0, left: -28, background: 'rgba(13,20,37,0.95)', border: '1px solid rgba(30,45,74,0.8)', borderRadius: 14, padding: '14px 18px', animation: 'float2 5s ease-in-out infinite 1s', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>🚚</div>
              <div style={{ fontSize: 9, color: '#64748b', marginBottom: 2 }}>Mon Livreur</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>247 livraisons</div>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: '#334155', animation: 'bounce 2s ease-in-out infinite' }}>
          <ChevronDown size={22} />
        </div>
      </section>

      {/* ══════ PARTNERS ══════ */}
      <div style={{ borderTop: '1px solid rgba(30,45,74,0.5)', borderBottom: '1px solid rgba(30,45,74,0.5)', padding: '24px 0', overflow: 'hidden', background: 'rgba(8,13,26,0.5)' }}>
        <p style={{ textAlign: 'center', fontSize: 10, color: '#334155', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18 }}>Ecosystem partners</p>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 56, alignItems: 'center', animation: 'marquee 22s linear infinite', width: 'max-content' }}>
            {['WAVE', 'Orange Money', 'MTN Mobile', 'Free Money', 'Ecobank', 'Airtel Money', 'PayDunya', 'CinetPay', 'WAVE', 'Orange Money', 'MTN Mobile', 'Free Money', 'Ecobank', 'Airtel Money', 'PayDunya', 'CinetPay'].map((p, i) => (
              <span key={i} style={{ fontFamily: 'Syne, system-ui', fontSize: 13, fontWeight: 700, color: '#1e3a5f', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ SERVICES ══════ */}
      <section style={{ padding: '110px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>What We Build</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>Everything your business<br />needs to go digital</h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 520, lineHeight: 1.7 }}>From idea to production — we build, launch, and support world-class digital products for African businesses.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.6)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 16, padding: 28, backdropFilter: 'blur(10px)', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(26,110,245,0.5)'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 20px 60px rgba(26,110,245,0.1)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(30,45,74,0.5)'; el.style.transform = 'none'; el.style.boxShadow = 'none' }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{s.label}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <Link href="/services" style={{ fontSize: 12, color: '#60a5fa', fontWeight: 600, textDecoration: 'none' }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHY + STATS ══════ */}
      <section ref={statsRef.ref} style={{ padding: '110px 24px', background: 'linear-gradient(180deg, #050709 0%, #080d1a 50%, #050709 100%)', borderTop: '1px solid rgba(30,45,74,0.4)', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 70, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Why AMDY LABS</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 18, letterSpacing: '-0.02em' }}>We understand Africa.<br />We build for Africa.</h2>
            <p style={{ fontSize: 15, color: '#64748b', marginBottom: 30, lineHeight: 1.75 }}>
              Founded by Amdy Boubacar with a distributed team of African developers and creatives across the US, Europe, and Africa — we combine Silicon Valley quality with African soul.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Built for African markets, languages & realities',
                'Affordable, scalable & maintainable solutions',
                'Mobile money & African payment integrations',
                'French, English, Wolof — multilingual products',
                'Optimized for 2G/3G and low-end devices',
                'Ongoing support, WhatsApp-first communication',
              ].map(t => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                  <CheckCircle2 size={16} color="#00e676" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#94a3b8' }}>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', marginTop: 32, boxShadow: '0 8px 32px rgba(26,110,245,0.3)' }}>
              Build With Us <ArrowRight size={15} />
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[[c1, '+', 'Projects Completed'], [c2, '+', 'Happy Clients'], [c3, '', 'Products in Market'], [c4, '', 'Countries Reached']].map(([n, s, l]) => (
              <div key={String(l)} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 18, padding: 30, textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontFamily: 'Syne, system-ui', fontSize: 52, fontWeight: 800, color: '#60a5fa', lineHeight: 1 }}>{n}{s}</div>
                <div style={{ fontSize: 13, color: '#475569', marginTop: 10, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROJECTS ══════ */}
      <section style={{ padding: '110px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Our Products</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.02em' }}>What we&apos;ve built</h2>
            </div>
            <Link href="/projects" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>See all projects →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.6)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 20, overflow: 'hidden', transition: 'all 0.3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-6px)'; el.style.borderColor = 'rgba(26,110,245,0.4)'; el.style.boxShadow = '0 30px 80px rgba(0,0,0,0.4)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.borderColor = 'rgba(30,45,74,0.5)'; el.style.boxShadow = 'none' }}>
                <div style={{ height: 190, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, position: 'relative' }}>
                  {p.emoji}
                  <span style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '4px 10px', fontSize: 10, fontWeight: 600, color: '#60a5fa' }}>{p.sub}</span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {p.tags.map(t => <span key={t} style={{ background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 4, padding: '3px 9px', fontSize: 10, color: '#60a5fa' }}>{t}</span>)}
                  </div>
                  <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ BUILT FOR AFRICA ══════ */}
      <section style={{ padding: '110px 24px', background: 'linear-gradient(135deg, #04081a 0%, #060d1e 50%, #04081a 100%)', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 70, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#00e676', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>🌍 Built for Africa</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 18, letterSpacing: '-0.02em' }}>Technology that<br />speaks your language</h2>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, marginBottom: 36 }}>
              Our solutions are designed from the ground up for African markets — not adapted, not retrofitted. Built with African realities, languages, and payment systems at the core.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {AFRICA_FEATURES.map(a => (
                <div key={a.title} style={{ background: 'rgba(26,110,245,0.05)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 12, padding: '16px 14px', display: 'flex', gap: 12, alignItems: 'flex-start', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,110,245,0.4)'; (e.currentTarget as HTMLElement).style.background = 'rgba(26,110,245,0.09)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,45,74,0.5)'; (e.currentTarget as HTMLElement).style.background = 'rgba(26,110,245,0.05)' }}>
                  <span style={{ fontSize: 20 }}>{a.icon}</span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 3 }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: '#475569' }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div>
            <div style={{ background: '#060c1a', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 16, overflow: 'hidden', fontFamily: 'monospace' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '12px 18px', background: '#0a1020', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
                {['#ff5f57', '#ffbd2e', '#28ca42'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
                <span style={{ fontSize: 11, color: '#334155', marginLeft: 8, fontFamily: 'system-ui' }}>amdylabs-deploy.sh</span>
              </div>
              <div style={{ padding: '20px', fontSize: 12, lineHeight: 2.1 }}>
                {[
                  { type: 'cmd', prompt: '$', text: 'amdy create african-app --lang=fr,wo' },
                  { type: 'out', text: '✓ Configuring Wave payment gateway...' },
                  { type: 'out', text: '✓ Setting up Orange Money...' },
                  { type: 'out', text: '✓ Loading French + Wolof language packs...' },
                  { type: 'out', text: '✓ Enabling offline-first PWA mode...' },
                  { type: 'out', text: '✓ CFA (XOF) set as base currency...' },
                  { type: 'out', text: '✓ WhatsApp notifications configured...' },
                  { type: 'cmd', prompt: '$', text: 'amdy deploy --region=west-africa' },
                  { type: 'success', text: '🚀 Live at yourapp.amdylabs.com' },
                  { type: 'success', text: '✅ African users can now access it!' },
                ].map((line, i) => (
                  <div key={i}>
                    {line.type === 'cmd' && <div style={{ display: 'flex', gap: 10 }}><span style={{ color: '#00e676' }}>{line.prompt}</span><span style={{ color: '#60a5fa' }}>{line.text}</span></div>}
                    {line.type === 'out' && <div style={{ color: '#334155', paddingLeft: 22 }}>{line.text}</div>}
                    {line.type === 'success' && <div style={{ color: '#00e676', paddingLeft: 22 }}>{line.text}</div>}
                  </div>
                ))}
                <div style={{ display: 'flex', gap: 10 }}><span style={{ color: '#00e676' }}>$</span><span style={{ borderRight: '2px solid #1a6ef5', animation: 'blink 1s step-end infinite' }}>&nbsp;</span></div>
              </div>
            </div>

            <div style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 14, padding: 20, marginTop: 14, display: 'flex', gap: 16, alignItems: 'center' }}>
              <span style={{ fontSize: 30 }}>📊</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>African Digital Economy</div>
                <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.6 }}>Projected to reach <strong style={{ color: '#60a5fa' }}>$712B</strong> by 2050. AMDY LABS is building the infrastructure today.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f4a 100%)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 24, padding: '80px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 500, height: 500, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(130px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.08 }} />
            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#60a5fa', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Ready to Start?</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>Ready to transform<br />your business?</h2>
              <p style={{ color: '#64748b', fontSize: 17, marginBottom: 44, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                Tell us your idea. We&apos;ll turn it into a world-class digital product. Free discovery call — no commitment.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '16px 38px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 40px rgba(26,110,245,0.35)' }}>
                  🚀 Start a Project
                </Link>
                <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d366', color: '#000', padding: '16px 38px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 40px rgba(37,211,102,0.25)' }}>
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section style={{ padding: '90px 24px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14, textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, textAlign: 'center', marginBottom: 48, letterSpacing: '-0.02em' }}>Common Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQ.map(([q, a], i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 12, overflow: 'hidden', backdropFilter: 'blur(10px)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', color: '#e2e8f0', cursor: 'pointer', fontSize: 14, fontWeight: 600, textAlign: 'left', gap: 16 }}>
                  {q}
                  <span style={{ fontSize: 20, color: '#1a6ef5', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: '0 24px 20px', fontSize: 14, color: '#64748b', lineHeight: 1.75 }}>{a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0) rotate(-1deg)} 50%{transform:translateY(-8px) rotate(1deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:0.07;transform:scale(1)} 50%{opacity:0.12;transform:scale(1.08)} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
    </div>
  )
}
