'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Globe, Smartphone, ShoppingBag, BarChart3, Palette, Bot, Package, CheckCircle2, Star, ChevronDown } from 'lucide-react'

/* ── tiny hooks ── */
function useCountUp(target: number, duration = 1500, start = false) {
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

/* ── Services data ── */
const SERVICES = [
  { icon: Smartphone, label: 'Mobile Apps', desc: 'Custom Android & iOS apps built for African consumers — fast, offline-first, and beautiful.', color: '#3d8bff' },
  { icon: Globe, label: 'Website Development', desc: 'Modern responsive websites that convert visitors into paying customers.', color: '#00c8ff' },
  { icon: ShoppingBag, label: 'POS & E-Commerce', desc: 'CaissePro-powered POS and online storefronts with Wave, Orange Money & mobile money.', color: '#00e676' },
  { icon: BarChart3, label: 'Business Software', desc: 'Custom dashboards, ERPs, and automation tools that streamline your operations.', color: '#ff6b6b' },
  { icon: Palette, label: 'Branding & Marketing', desc: 'Professional brand identity and digital campaigns that grow your audience.', color: '#ffd93d' },
  { icon: Bot, label: 'AI Integrations', desc: 'Integrate cutting-edge AI — chatbots, smart analytics, and personalization engines.', color: '#c77dff' },
]

/* ── Partners ── */
const PARTNERS = ['WAVE', 'Orange Money', 'MTN Business', 'Free Money', 'Ecobank', 'Airtel Money', 'PayDunya', 'CinetPay', 'WAVE', 'Orange Money', 'MTN Business', 'Free Money', 'Ecobank', 'Airtel Money', 'PayDunya', 'CinetPay']

/* ── Projects ── */
const PROJECTS = [
  { name: 'CaissePro', sub: 'POS & Inventory SaaS', desc: 'Full multi-tenant POS for West African merchants. Offline-first, Wave/Orange Money payments, WhatsApp receipts.', tags: ['Next.js', 'Supabase', 'PWA', 'Wave API'], color: 'linear-gradient(135deg,#0d1f4a,#1a3a8f)', emoji: '🏪' },
  { name: 'DeliveryDash', sub: 'Logistics Platform', desc: 'Real-time delivery tracking for African courier services and last-mile delivery networks.', tags: ['React Native', 'Node.js', 'Maps API'], color: 'linear-gradient(135deg,#0d2a1a,#1a6e3a)', emoji: '🚚' },
  { name: 'EventPro Africa', sub: 'Event Management App', desc: 'Complete mobile app for ticketing, QR check-in, seat booking and organizer dashboards.', tags: ['Flutter', 'Firebase', 'QR Code'], color: 'linear-gradient(135deg,#2a0d1a,#6e1a3a)', emoji: '🎟️' },
  { name: 'ShopFlow', sub: 'E-Commerce Platform', desc: 'Modern online store for African retailers with local payments, WhatsApp ordering & multilingual support.', tags: ['Next.js', 'CinetPay', 'WhatsApp'], color: 'linear-gradient(135deg,#2a1a0d,#8f5a1a)', emoji: '🛒' },
]

/* ── Africa features ── */
const AFRICA = [
  { icon: '💸', title: 'Wave & Orange Money', desc: 'Native mobile money integrations' },
  { icon: '📲', title: 'WhatsApp Commerce', desc: 'Sell & notify via WhatsApp' },
  { icon: '🇫🇷', title: 'Multilingual', desc: 'French, English & Wolof' },
  { icon: '📶', title: 'Offline-First', desc: 'Works on 2G & without internet' },
  { icon: '🪙', title: 'CFA & Local Currencies', desc: 'XOF, XAF, GHS, NGN support' },
  { icon: '📱', title: 'Mobile-First Design', desc: 'Optimized for smartphones' },
]

/* ── FAQ ── */
const FAQ = [
  ['How long does it take to build a mobile app?', 'Typically 6–16 weeks. A simple MVP can be delivered in 4–6 weeks. We give a detailed timeline after reviewing your requirements.'],
  ['Do you integrate African payment methods?', 'Yes — Wave, Orange Money, Free Money, MTN, PayDunya, CinetPay, and other African gateways natively in all products.'],
  ['What are your pricing models?', 'Fixed-price projects, monthly retainers, and subscription SaaS. We work with all budgets and provide transparent quotes upfront.'],
  ['Do you provide ongoing support after launch?', 'Absolutely. We offer maintenance packages, bug fixes, feature updates, and 24/7 emergency support via WhatsApp.'],
]

export default function HomePage() {
  const statsRef = useInView()
  const p50 = useCountUp(50, 1400, statsRef.inView)
  const p30 = useCountUp(30, 1400, statsRef.inView)
  const p10 = useCountUp(10, 1400, statsRef.inView)
  const p5 = useCountUp(5, 1400, statsRef.inView)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ fontFamily: 'var(--font-dm-sans, system-ui)' }}>

      {/* ════ HERO ════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 72 }}>
        {/* BG */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 60% 50%, #0d1f4a 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 15% 80%, #051230 0%, transparent 60%), #050709' }} />
        {/* Grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#1e2d4a 1px, transparent 1px), linear-gradient(90deg, #1e2d4a 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)', opacity: 0.25 }} />
        {/* Glows */}
        <div style={{ position: 'absolute', width: 600, height: 600, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(120px)', top: -100, right: -100, opacity: 0.07, animation: 'pulse 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, background: '#00c8ff', borderRadius: '50%', filter: 'blur(100px)', bottom: 50, left: -150, opacity: 0.04, animation: 'pulse 8s ease-in-out infinite 4s' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.12)', border: '1px solid #1a6ef5', borderRadius: 100, padding: '6px 14px 6px 8px', fontSize: 12, fontWeight: 600, color: '#3d8bff', marginBottom: 28, letterSpacing: '0.05em' }}>
              <span style={{ width: 8, height: 8, background: '#00e676', borderRadius: '50%', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
              Building Africa&apos;s Digital Future
            </div>

            <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(40px,6vw,72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 24 }}>
              We Build{' '}
              <span style={{ background: 'linear-gradient(135deg, #3d8bff, #00c8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Digital</span>{' '}
              Solutions for Africa
            </h1>

            <p style={{ fontSize: 18, color: 'var(--gray)', maxWidth: 480, marginBottom: 40, lineHeight: 1.7 }}>
              Custom apps, websites, POS systems, and software that help African businesses grow, compete, and scale to the world.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--blue)', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'all 0.2s' }}>
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid var(--border)', transition: 'all 0.2s' }}>
                ▷ View Our Work
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ display: 'flex' }}>
                {['AB','KC','SF','MD'].map((a,i) => (
                  <div key={a} style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #050709', background: `hsl(${i*60+200},70%,40%)`, marginLeft: i===0?0:-10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>{a}</div>
                ))}
              </div>
              <span style={{ fontSize: 13, color: 'var(--gray)' }}><strong style={{ color: '#fff' }}>50+ projects</strong> delivered across Africa</span>
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div style={{ position: 'relative', animation: 'float 6s ease-in-out infinite' }}>
            {/* Floating badge TL */}
            <div style={{ position: 'absolute', top: -20, right: -20, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 16px', zIndex: 10, animation: 'float2 5s ease-in-out infinite 2s', boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}>
              <div style={{ fontSize: 18, marginBottom: 2 }}>💳</div>
              <div style={{ fontSize: 9, color: 'var(--gray)' }}>Payment received</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#00e676' }}>+84,200 XOF</div>
            </div>

            {/* Main dashboard card */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 13 }}>CaissePro Dashboard</span>
                <span style={{ fontSize: 11, color: '#00e676', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 6, height: 6, background: '#00e676', borderRadius: '50%', display: 'inline-block' }} />Live
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 16 }}>
                {[['Sales','2.4M XOF','↑12.4%'],['Orders','1,250','↑8.1%'],['Clients','980','↑15%']].map(([l,v,c]) => (
                  <div key={l} style={{ background: 'var(--navy)', border: '1px solid var(--border)', borderRadius: 10, padding: 12 }}>
                    <div style={{ fontSize: 9, color: 'var(--gray)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontSize: 16, fontWeight: 700 }}>{v}</div>
                    <div style={{ fontSize: 9, color: '#00e676', marginTop: 2 }}>{c}</div>
                  </div>
                ))}
              </div>
              {/* Chart bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 70, marginBottom: 14 }}>
                {[40,65,50,80,55,95,70,85].map((h,i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: i%2===0 ? 'linear-gradient(180deg,#1a6ef5,#0a3070)' : 'linear-gradient(180deg,#00c8ff,#004060)', borderRadius: '4px 4px 0 0' }} />
                ))}
              </div>
              {[['Wave Payment','+24,500 XOF'],['Orange Money','+18,000 XOF'],['Stock Update','-5,200 XOF']].map(([n,a]) => (
                <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: '1px solid var(--border)', fontSize: 11 }}>
                  <span style={{ color: 'var(--gray)' }}>{n}</span>
                  <span style={{ fontWeight: 600, color: a.startsWith('-') ? '#ff6b6b' : '#00e676' }}>{a}</span>
                </div>
              ))}
            </div>

            {/* Floating badge BL */}
            <div style={{ position: 'absolute', bottom: 10, left: -30, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 16px', animation: 'float2 5s ease-in-out infinite 1s', boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}>
              <div style={{ fontSize: 18, marginBottom: 2 }}>📱</div>
              <div style={{ fontSize: 9, color: 'var(--gray)' }}>App installs today</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>+247</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite', color: 'var(--gray)' }}>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ════ PARTNERS STRIP ════ */}
      <div style={{ padding: '28px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
        <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--gray)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Trusted payment & partner ecosystem</p>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 60, alignItems: 'center', animation: 'marquee 20s linear infinite', width: 'max-content' }}>
            {PARTNERS.map((p,i) => (
              <span key={i} style={{ fontFamily: 'var(--font-syne)', fontSize: 15, fontWeight: 700, color: 'var(--gray)', opacity: 0.5, whiteSpace: 'nowrap' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ════ SERVICES ════ */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.08)', border: '1px solid var(--border)', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 600, color: '#3d8bff', marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>What We Do</div>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: 16 }}>Digital solutions tailored<br />to your business needs</h2>
            <p style={{ fontSize: 16, color: 'var(--gray)', maxWidth: 560 }}>From mobile apps to full enterprise platforms — world-class software built for African realities.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28, transition: 'all 0.3s', cursor: 'default', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = s.color; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${s.color}22` }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div style={{ width: 48, height: 48, background: `${s.color}18`, border: `1px solid ${s.color}55`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <s.icon size={22} color={s.color} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.label}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <Link href="/services" style={{ fontSize: 13, color: s.color, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ WHY AMDY LABS + STATS ════ */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, var(--navy), var(--black))', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={statsRef.ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.08)', border: '1px solid var(--border)', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 600, color: '#3d8bff', marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Why Choose Us</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: 16 }}>We understand Africa.<br />We build for Africa.</h2>
              <p style={{ fontSize: 16, color: 'var(--gray)', marginBottom: 28, lineHeight: 1.7 }}>We combine technology, creativity, and local knowledge to deliver solutions that solve real problems for African businesses.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Built specifically for African markets and realities', 'Affordable, scalable, and maintainable solutions', 'Fast delivery with reliable ongoing support', 'Multilingual: French, English, Wolof interfaces', 'Optimized for 2G/3G and low-end devices', 'Full mobile money & digital payment integration'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}>
                    <CheckCircle2 size={18} color="#00e676" style={{ flexShrink: 0 }} />
                    {t}
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--blue)', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', marginTop: 28 }}>
                Build With Us <ArrowRight size={16} />
              </Link>
            </div>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[[p50,'+','Projects Completed'],[p30,'+','Happy Clients'],[p10,'+','Industries Served'],[p5,'','Countries Reached']].map(([n,s,l]) => (
                <div key={String(l)} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28, textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: 48, fontWeight: 800, color: '#3d8bff', lineHeight: 1 }}>{n}{s}</div>
                  <div style={{ fontSize: 14, color: 'var(--gray)', marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ BUILT FOR AFRICA ════ */}
      <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#050d1f,#0a1628,#050d1f)', opacity: 0.8 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.08)', border: '1px solid var(--border)', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 600, color: '#3d8bff', marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>🌍 Built for Africa</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: 16 }}>Technology that speaks your language</h2>
              <p style={{ fontSize: 16, color: 'var(--gray)', marginBottom: 32, lineHeight: 1.7 }}>Our solutions are built from the ground up for African markets — not adapted, but designed from day one.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {AFRICA.map(a => (
                  <div key={a.title} style={{ background: 'rgba(26,110,245,0.07)', border: '1px solid var(--border)', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'flex-start', gap: 12, transition: 'all 0.25s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)'; (e.currentTarget as HTMLElement).style.background = 'rgba(26,110,245,0.12)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'rgba(26,110,245,0.07)' }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{a.icon}</span>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{a.title}</h4>
                      <p style={{ fontSize: 12, color: 'var(--gray)' }}>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal */}
            <div>
              <div style={{ background: '#090f1e', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', fontFamily: 'monospace' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', background: '#0d1525', borderBottom: '1px solid var(--border)' }}>
                  {['#ff5f57','#ffbd2e','#28ca42'].map((c,i) => <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
                  <span style={{ fontSize: 12, color: 'var(--gray)', marginLeft: 8, fontFamily: 'var(--font-dm-sans)' }}>amdylabs-deploy.sh</span>
                </div>
                <div style={{ padding: 20, fontSize: 13, lineHeight: 2.2 }}>
                  {[
                    ['$','amdy init african-store', null],
                    [null, null, '✓ Configuring Wave payment gateway...'],
                    [null, null, '✓ Setting up Orange Money integration...'],
                    [null, null, '✓ Enabling offline-first PWA mode...'],
                    [null, null, '✓ Loading Wolof language pack...'],
                    [null, null, '✓ Configuring WhatsApp notifications...'],
                    [null, null, '✓ Setting CFA (XOF) as base currency...'],
                    ['$','amdy deploy --region=west-africa', null],
                    [null, null, '🚀 Deployed to Africa!'],
                  ].map((row, i) => (
                    <div key={i}>
                      {row[0] && <div style={{ display: 'flex', gap: 10 }}><span style={{ color: '#00e676' }}>{row[0]}</span><span style={{ color: '#00c8ff' }}>{row[1]}</span></div>}
                      {!row[0] && row[2] && <div style={{ color: row[2]?.startsWith('🚀') ? '#00e676' : 'var(--gray)', paddingLeft: 24 }}>{row[2]}</div>}
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: 10 }}><span style={{ color: '#00e676' }}>$</span><span style={{ borderRight: '2px solid #3d8bff', animation: 'blink 1s step-end infinite' }}>&nbsp;</span></div>
                </div>
              </div>

              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 20, marginTop: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: 32 }}>📊</span>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4, fontSize: 14 }}>African Digital Economy</div>
                  <div style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.6 }}>Projected to reach <strong style={{ color: '#3d8bff' }}>$712 billion</strong> by 2050. We&apos;re building the infrastructure.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ PROJECTS ════ */}
      <section style={{ padding: '100px 24px', background: 'var(--navy)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.08)', border: '1px solid var(--border)', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 600, color: '#3d8bff', marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Work</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800 }}>Projects we&apos;re proud of</h2>
            </div>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', color: '#fff', padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid var(--border)' }}>View all projects →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden', transition: 'all 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 60px rgba(0,0,0,0.4)'; (e.currentTarget as HTMLElement).style.borderColor = '#1a6ef5' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}>
                <div style={{ height: 180, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <span style={{ fontSize: 56 }}>{p.emoji}</span>
                  <span style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '4px 10px', fontSize: 10, fontWeight: 600, color: '#3d8bff' }}>{p.sub}</span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                    {p.tags.map(t => <span key={t} style={{ background: 'var(--gray-dim)', border: '1px solid var(--border)', borderRadius: 4, padding: '3px 8px', fontSize: 10, color: 'var(--gray)' }}>{t}</span>)}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg,#0a1628,#0d1f4a)', border: '1px solid var(--border)', borderRadius: 24, padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 400, height: 400, background: 'var(--blue)', borderRadius: '50%', filter: 'blur(120px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.1 }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, marginBottom: 20 }}>Ready to transform<br />your business?</h2>
              <p style={{ color: 'var(--gray)', fontSize: 18, marginBottom: 40, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>Let&apos;s build something amazing together. Tell us your idea and we&apos;ll turn it into a world-class digital product.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--blue)', color: '#fff', padding: '16px 36px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>🚀 Start a Project</Link>
                <a href="https://wa.me/12488001234" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d366', color: '#000', padding: '16px 36px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>💬 WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section style={{ padding: '80px 24px', background: 'var(--navy)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, textAlign: 'center', marginBottom: 48 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQ.map(([q, a], i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 15, fontWeight: 600, textAlign: 'left', gap: 16 }}>
                  {q}
                  <span style={{ fontSize: 22, color: '#3d8bff', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', fontSize: 14, color: 'var(--gray)', lineHeight: 1.7 }}>{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CSS Animations ════ */}
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0) rotate(-1deg)} 50%{transform:translateY(-8px) rotate(1deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes pulse { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.1)} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
    </div>
  )
}
