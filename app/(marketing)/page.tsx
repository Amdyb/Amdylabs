'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  { name: 'CaissePro', sub: 'POS & Business Management', desc: 'Modern POS & business management for African merchants. Inventory, WhatsApp receipts, Wave/Orange Money, CFA support.', logo: '/logo-caissepro.png', logoBg: '#fff', color: 'linear-gradient(135deg,#0d1f4a,#1a3a8f)', tags: ['Next.js','Supabase','PWA','Wave API'] },
  { name: 'VYBZ Social', sub: 'Social & Nightlife — Dakar', desc: '"C\'est quoi les VYBZ ce soir?" — Events, nightlife & experiences connecting Dakar and the African diaspora.', logo: '/logo-vybz.png', logoBg: '#0a0010', color: 'linear-gradient(135deg,#150020,#3d0060)', tags: ['React Native','Firebase','Maps','Events'] },
  { name: 'Mon Livreur', sub: 'Delivery & Logistics', desc: '"Livrer plus vite, plus loin, pour vous." Real-time delivery & logistics for African businesses. Driver dispatch, WhatsApp notifications.', logo: '/logo-monlivreur.png', logoBg: '#fff', color: 'linear-gradient(135deg,#0d2a1a,#1a6e3a)', tags: ['React Native','Node.js','Maps API','WhatsApp'] },
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

      {/* ══════ HERO — full bleed with real image ══════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 72 }}>
        {/* Real hero background image */}
        <Image
          src="/hero-bg.webp"
          alt="AMDY LABS — Building Africa's Digital Future"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center right' }}
          quality={90}
        />
        {/* Dark overlay so text stays readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(4,8,26,0.97) 0%, rgba(4,8,26,0.85) 45%, rgba(4,8,26,0.3) 75%, rgba(4,8,26,0.1) 100%)' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(transparent, #050709)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
          <div style={{ maxWidth: 620 }}>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.12)', border: '1px solid rgba(26,110,245,0.4)', borderRadius: 100, padding: '6px 16px 6px 10px', fontSize: 12, fontWeight: 600, color: '#60a5fa', marginBottom: 28, letterSpacing: '0.04em' }}>
              <span style={{ width: 7, height: 7, background: '#00e676', borderRadius: '50%', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
              TECHNOLOGIE · INNOVATION · IMPACT
            </div>

            <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px, 5.5vw, 72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Nous construisons<br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #00e676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>l&apos;avenir numérique</span><br />
              de l&apos;Afrique
            </h1>

            <p style={{ fontSize: 17, color: '#94a3b8', maxWidth: 520, marginBottom: 40, lineHeight: 1.78 }}>
              AMDY LABS conçoit des solutions digitales modernes, innovantes et évolutives pour aider les entreprises africaines à se développer, se digitaliser et conquérir le monde.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '15px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.4)' }}>
                🚀 Démarrer un projet
              </Link>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '15px 32px', borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)' }}>
                ▷ Découvrir nos solutions
              </Link>
            </div>

            {/* 4 pillars from the reference image */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, maxWidth: 520 }}>
              {[
                { icon: '🚀', title: 'Innovation', desc: 'Des solutions modernes et performantes' },
                { icon: '🛡️', title: 'Fiabilité', desc: 'Sécurisé, stable et conçu pour durer' },
                { icon: '🌍', title: 'Impact', desc: 'Nous aidons les entreprises à grandir' },
                { icon: '🌐', title: 'Présence Mondiale', desc: 'Une équipe africaine présente partout' },
              ].map(p => (
                <div key={p.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '14px 16px', backdropFilter: 'blur(10px)' }}>
                  <div style={{ fontSize: 18, marginBottom: 6 }}>{p.icon}</div>
                  <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 12, color: '#e2e8f0', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: '#334155', animation: 'bounce 2s ease-in-out infinite', zIndex: 3 }}>
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
      <section ref={statsRef.ref} style={{ padding: '110px 24px', background: 'linear-gradient(180deg,#050709 0%,#080d1a 50%,#050709 100%)', borderTop: '1px solid rgba(30,45,74,0.4)', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: 70, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Why AMDY LABS</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 18, letterSpacing: '-0.02em' }}>We understand Africa.<br />We build for Africa.</h2>
            <p style={{ fontSize: 15, color: '#64748b', marginBottom: 30, lineHeight: 1.75 }}>Founded by Amdy Boubacar with a distributed team across the US, Europe, and Africa — we combine Silicon Valley quality with African soul.</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Built for African markets, languages & realities','Affordable, scalable & maintainable solutions','Mobile money & African payment integrations','French, English, Wolof — multilingual products','Optimized for 2G/3G and low-end devices','Ongoing support, WhatsApp-first communication'].map(t => (
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[[c1,'+','Projects Completed'],[c2,'+','Happy Clients'],[c3,'','Products in Market'],[c4,'','Countries Reached']].map(([n,s,l]) => (
              <div key={String(l)} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 18, padding: 30, textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontFamily: 'Syne, system-ui', fontSize: 52, fontWeight: 800, color: '#60a5fa', lineHeight: 1 }}>{n}{s}</div>
                <div style={{ fontSize: 13, color: '#475569', marginTop: 10, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROJECTS with real logos ══════ */}
      <section style={{ padding: '110px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Our Products</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.02em' }}>What we&apos;ve built</h2>
            </div>
            <Link href="/projects" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>See all projects →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.6)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 20, overflow: 'hidden', transition: 'all 0.3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-6px)'; el.style.borderColor = 'rgba(26,110,245,0.4)'; el.style.boxShadow = '0 30px 80px rgba(0,0,0,0.4)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.borderColor = 'rgba(30,45,74,0.5)'; el.style.boxShadow = 'none' }}>
                {/* Logo card */}
                <div style={{ height: 190, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 20 }}>
                  <div style={{ width: 120, height: 120, borderRadius: p.name === 'VYBZ Social' ? 16 : 24, overflow: 'hidden', background: p.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 16px 48px rgba(0,0,0,0.5)' }}>
                    <Image src={p.logo} alt={p.name} width={120} height={120} style={{ objectFit: 'contain' }} />
                  </div>
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
      <section style={{ padding: '110px 24px', background: 'linear-gradient(135deg,#04081a,#060d1e,#04081a)', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: 70, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#00e676', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>🌍 Built for Africa</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 18, letterSpacing: '-0.02em' }}>Technology that<br />speaks your language</h2>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, marginBottom: 36 }}>Our solutions are designed from the ground up for African markets — built with African realities, languages, and payment systems at the core.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {AFRICA_FEATURES.map(a => (
                <div key={a.title} style={{ background: 'rgba(26,110,245,0.05)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 12, padding: '16px 14px', display: 'flex', gap: 12, alignItems: 'flex-start', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(26,110,245,0.4)'; (e.currentTarget as HTMLElement).style.background='rgba(26,110,245,0.09)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(30,45,74,0.5)'; (e.currentTarget as HTMLElement).style.background='rgba(26,110,245,0.05)' }}>
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
                {['#ff5f57','#ffbd2e','#28ca42'].map((c,i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
                <span style={{ fontSize: 11, color: '#334155', marginLeft: 8, fontFamily: 'system-ui' }}>amdylabs-deploy.sh</span>
              </div>
              <div style={{ padding: '20px', fontSize: 12, lineHeight: 2.1 }}>
                {[
                  { type: 'cmd', text: 'amdy create african-app --lang=fr,wo' },
                  { type: 'out', text: '✓ Configuring Wave payment gateway...' },
                  { type: 'out', text: '✓ Setting up Orange Money...' },
                  { type: 'out', text: '✓ Loading French + Wolof language packs...' },
                  { type: 'out', text: '✓ Enabling offline-first PWA mode...' },
                  { type: 'out', text: '✓ CFA (XOF) set as base currency...' },
                  { type: 'cmd', text: 'amdy deploy --region=west-africa' },
                  { type: 'success', text: '🚀 Live at yourapp.amdylabs.com' },
                  { type: 'success', text: '✅ African users can now access it!' },
                ].map((line, i) => (
                  <div key={i}>
                    {line.type==='cmd' && <div style={{ display:'flex', gap:10 }}><span style={{ color:'#00e676' }}>$</span><span style={{ color:'#60a5fa' }}>{line.text}</span></div>}
                    {line.type==='out' && <div style={{ color:'#334155', paddingLeft:22 }}>{line.text}</div>}
                    {line.type==='success' && <div style={{ color:'#00e676', paddingLeft:22 }}>{line.text}</div>}
                  </div>
                ))}
                <div style={{ display:'flex', gap:10 }}><span style={{ color:'#00e676' }}>$</span><span style={{ borderRight:'2px solid #1a6ef5', animation:'blink 1s step-end infinite' }}>&nbsp;</span></div>
              </div>
            </div>
            <div style={{ background:'rgba(13,20,37,0.8)', border:'1px solid rgba(30,45,74,0.5)', borderRadius:14, padding:20, marginTop:14, display:'flex', gap:16, alignItems:'center' }}>
              <span style={{ fontSize:30 }}>📊</span>
              <div>
                <div style={{ fontWeight:700, fontSize:13, marginBottom:4 }}>African Digital Economy</div>
                <div style={{ fontSize:12, color:'#475569', lineHeight:1.6 }}>Projected to reach <strong style={{ color:'#60a5fa' }}>$712B</strong> by 2050. AMDY LABS is building the infrastructure today.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg,#0a1628,#0d1f4a)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 24, padding: '80px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 500, height: 500, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(130px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.08 }} />
            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#60a5fa', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Ready to Start?</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>Ready to transform<br />your business?</h2>
              <p style={{ color: '#64748b', fontSize: 17, marginBottom: 44, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>Tell us your idea. We&apos;ll turn it into a world-class digital product. Free discovery call — no commitment.</p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '16px 38px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 40px rgba(26,110,245,0.35)' }}>🚀 Start a Project</Link>
                <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d366', color: '#000', padding: '16px 38px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 40px rgba(37,211,102,0.25)' }}>💬 WhatsApp Us</a>
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
                <button onClick={() => setOpenFaq(openFaq===i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', color: '#e2e8f0', cursor: 'pointer', fontSize: 14, fontWeight: 600, textAlign: 'left', gap: 16 }}>
                  {q}
                  <span style={{ fontSize: 20, color: '#1a6ef5', transform: openFaq===i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>+</span>
                </button>
                {openFaq===i && <div style={{ padding: '0 24px 20px', fontSize: 14, color: '#64748b', lineHeight: 1.75 }}>{a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      `}</style>
    </div>
  )
}
