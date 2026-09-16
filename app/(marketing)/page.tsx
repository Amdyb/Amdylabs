'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, ChevronDown, Smartphone, Globe, Store, Cloud, ShoppingCart, Bot, Zap, DollarSign, MessageCircle, Languages, Wifi, Coins, Monitor, Shield, TrendingUp, MapPin, Rocket, Users } from 'lucide-react'
import { useLang } from '@/lib/lang'

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

// Animated tech grid canvas
function TechGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.005

      // Grid lines
      ctx.strokeStyle = 'rgba(26,110,245,0.04)'
      ctx.lineWidth = 1
      const gs = 60
      for (let x = 0; x < canvas.width; x += gs) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gs) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }

      // Moving dots + connections
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1
      })

      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.strokeStyle = `rgba(26,110,245,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        })
        ctx.fillStyle = 'rgba(96,165,250,0.5)'
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill()
      })

      // Scanning line
      const scanY = (Math.sin(t) * 0.5 + 0.5) * canvas.height
      const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40)
      grad.addColorStop(0, 'rgba(26,110,245,0)')
      grad.addColorStop(0.5, 'rgba(26,110,245,0.04)')
      grad.addColorStop(1, 'rgba(26,110,245,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 40, canvas.width, 80)

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 1 }} />
}

const T = {
  fr: {
    badge: 'TECHNOLOGIE · INNOVATION · IMPACT AFRICAIN',
    h1a: 'Nous construisons', h1b: "l'avenir numérique", h1c: "de l'Afrique",
    sub: "AMDY LABS conçoit des solutions digitales modernes pour aider les entreprises africaines à se développer, se digitaliser et conquérir le monde.",
    cta1: 'Démarrer un projet', cta2: 'Voir nos solutions',
    pillars: [
      { title: 'Innovation', desc: 'Solutions modernes et performantes' },
      { title: 'Fiabilité', desc: 'Sécurisé, stable, conçu pour durer' },
      { title: 'Impact', desc: 'Nous aidons les entreprises à grandir' },
      { title: 'Présence Mondiale', desc: 'Équipe africaine présente partout' },
    ],
    partnersLabel: "Partenaires de l'écosystème",
    servicesTag: 'Ce que nous construisons', servicesTitle1: 'TOUT CE DONT VOTRE', servicesTitle2: 'ENTREPRISE A BESOIN',
    servicesSub: "De l'idée à la mise en production — nous construisons, lançons et soutenons des produits de classe mondiale.",
    learnMore: 'En savoir plus',
    whyTag: 'Pourquoi AMDY LABS', whyTitle1: 'NOUS COMPRENONS', whyTitle2: "L'AFRIQUE",
    whySub: "Fondé par Amdy Boubacar avec une équipe distribuée aux États-Unis, en Europe et en Afrique.",
    checks: ['Conçu pour les marchés, langues et réalités africaines', 'Solutions abordables, évolutives et maintenables', 'Intégrations Mobile Money et paiements africains', 'Français, anglais, wolof — produits multilingues', 'Optimisé pour les réseaux 2G/3G et appareils bas de gamme', 'Support continu, communication WhatsApp en priorité'],
    buildWith: 'Construire avec nous',
    stats: ['Projets réalisés', 'Clients satisfaits', 'Produits sur le marché', 'Pays atteints'],
    projectsTag: 'Nos Produits', projectsTitle1: 'CE QUE NOUS', projectsTitle2: 'AVONS CONSTRUIT', seeAll: 'Voir tous →',
    africaTag: "Conçu pour l'Afrique", africaTitle1: 'UNE TECHNOLOGIE QUI', africaTitle2: 'PARLE VOTRE LANGUE',
    africaSub: "Nos solutions sont conçues de A à Z pour les marchés africains — avec les réalités, les langues et les systèmes de paiement africains au cœur.",
    africaFeatures: ['Wave & Orange Money', 'Commerce WhatsApp', 'Multilingue', 'Hors Connexion', 'CFA & Devises Locales', 'Mobile d\'abord'],
    africaFeatureDescs: ['Intégrations mobiles natives', 'Vendre et notifier via WhatsApp', 'Français, anglais et wolof', 'Fonctionne sur 2G sans internet', 'XOF, XAF, GHS, NGN supportés', 'Conçu pour les utilisateurs smartphone'],
    trustTag: 'Crédibilité', trustItems: [
      { label: 'Michigan LLC', sub: 'Entreprise enregistrée aux USA' },
      { label: 'Detroit, MI 48221', sub: '10629 W 7 Mile' },
      { label: '4 Produits Live', sub: 'caissepro.app · vybz.city · immopro.agency' },
      { label: '38+ Marchands', sub: 'Revenus réels, traction réelle' },
      { label: 'Seed Round', sub: 'contact@amdylabs.com' },
    ],
    ctaTag: 'Prêt à commencer ?', ctaTitle1: 'PRÊT À TRANSFORMER', ctaTitle2: 'VOTRE ENTREPRISE ?',
    ctaSub: "Partagez votre idée. Appel de découverte gratuit — sans engagement.",
    ctaBtn1: 'Démarrer un projet', ctaBtn2: 'WhatsApp',
    faqTag: 'Questions fréquentes', faqTitle1: 'QUESTIONS', faqTitle2: 'COURANTES',
    faq: [
      ["Combien de temps faut-il pour créer une application ?", "En général 6 à 16 semaines selon la complexité. Un MVP peut être livré en 4 à 6 semaines. Nous fournissons un calendrier détaillé après un appel gratuit."],
      ["Intégrez-vous les méthodes de paiement africaines ?", "Oui — Wave, Orange Money, Free Money, MTN, PayDunya, CinetPay et autres passerelles africaines sont intégrées nativement dans tous nos produits."],
      ["Quels sont vos modèles de tarification ?", "Projets à prix fixe, retainers mensuels et abonnements SaaS. Devis transparents à l'avance, sans surprises."],
      ["Assurez-vous le support après le lancement ?", "Absolument. Maintenance, corrections de bugs, mises à jour et support d'urgence 24h/7j via WhatsApp."],
      ["Un fondateur non-technique peut-il travailler avec vous ?", "C'est notre spécialité. Vous apportez la vision, nous gérons toute la technologie. Aucune connaissance en code requise."],
    ],
  },
  en: {
    badge: 'TECHNOLOGY · INNOVATION · AFRICAN IMPACT',
    h1a: 'We build', h1b: "Africa's digital", h1c: "future",
    sub: "AMDY LABS creates modern digital solutions to help African businesses grow, digitize, and compete globally.",
    cta1: 'Start a Project', cta2: 'Explore Our Work',
    pillars: [
      { title: 'Innovation', desc: 'Modern, high-performance solutions' },
      { title: 'Reliability', desc: 'Secure, stable, built to last' },
      { title: 'Impact', desc: 'We help businesses grow and scale' },
      { title: 'Global Presence', desc: 'African team present everywhere' },
    ],
    partnersLabel: 'Ecosystem partners',
    servicesTag: 'What We Build', servicesTitle1: 'EVERYTHING YOUR', servicesTitle2: 'BUSINESS NEEDS',
    servicesSub: "From idea to production — we build, launch, and support world-class digital products for African businesses.",
    learnMore: 'Learn more',
    whyTag: 'Why AMDY LABS', whyTitle1: 'WE UNDERSTAND', whyTitle2: 'AFRICA',
    whySub: "Founded by Amdy Boubacar with a distributed team across the US, Europe, and Africa.",
    checks: ['Built for African markets, languages & realities', 'Affordable, scalable & maintainable solutions', 'Mobile money & African payment integrations', 'French, English, Wolof — multilingual products', 'Optimized for 2G/3G and low-end devices', 'Ongoing support, WhatsApp-first communication'],
    buildWith: 'Build With Us',
    stats: ['Projects Completed', 'Happy Clients', 'Products in Market', 'Countries Reached'],
    projectsTag: 'Our Products', projectsTitle1: 'WHAT WE HAVE', projectsTitle2: 'BUILT', seeAll: 'See all →',
    africaTag: 'Built for Africa', africaTitle1: 'TECHNOLOGY THAT', africaTitle2: 'SPEAKS YOUR LANGUAGE',
    africaSub: "Our solutions are designed from the ground up for African markets — with African realities, languages, and payment systems at the core.",
    africaFeatures: ['Wave & Orange Money', 'WhatsApp Commerce', 'Multilingual', 'Offline-First', 'CFA & Local Currencies', 'Mobile-First'],
    africaFeatureDescs: ['Native mobile money integrations', 'Sell & notify via WhatsApp', 'French, English & Wolof', 'Works on 2G & without internet', 'XOF, XAF, GHS, NGN support', 'Designed for smartphone users'],
    trustTag: 'Credibility', trustItems: [
      { label: 'Michigan LLC', sub: 'US Registered Company' },
      { label: 'Detroit, MI 48221', sub: '10629 W 7 Mile' },
      { label: '4 Live Products', sub: 'caissepro.app · vybz.city · immopro.agency' },
      { label: '38+ Merchants', sub: 'Real revenue, real traction' },
      { label: 'Seed Round Open', sub: 'contact@amdylabs.com' },
    ],
    ctaTag: 'Ready to start?', ctaTitle1: 'READY TO TRANSFORM', ctaTitle2: 'YOUR BUSINESS?',
    ctaSub: "Share your idea. Free discovery call — no commitment.",
    ctaBtn1: 'Start a Project', ctaBtn2: 'WhatsApp',
    faqTag: 'FAQ', faqTitle1: 'COMMON', faqTitle2: 'QUESTIONS',
    faq: [
      ['How long does it take to build an app?', 'Typically 6–16 weeks depending on complexity. A simple MVP can be delivered in 4–6 weeks. We provide a detailed timeline after a free discovery call.'],
      ['Do you integrate African payment methods?', 'Yes — Wave, Orange Money, Free Money, MTN, PayDunya, CinetPay, and other African gateways are natively integrated in all our products.'],
      ['What are your pricing models?', 'Fixed-price projects, monthly retainers, and SaaS subscriptions. Transparent quotes upfront, no surprises.'],
      ['Do you provide support after launch?', 'Absolutely. Maintenance packages, bug fixes, feature updates, and 24/7 emergency support via WhatsApp.'],
      ['Can non-technical founders work with you?', "That's our specialty. You bring the vision — we handle all the technology. No coding knowledge needed, ever."],
    ],
  }
}

const SERVICES = [
  { Icon: Smartphone, fr: 'Applications Mobiles', en: 'Mobile Apps', color: '#1a6ef5' },
  { Icon: Globe, fr: 'Sites Web', en: 'Websites', color: '#0891b2' },
  { Icon: Store, fr: 'Systèmes POS', en: 'POS Systems', color: '#059669' },
  { Icon: Cloud, fr: 'Plateformes SaaS', en: 'SaaS Platforms', color: '#7c3aed' },
  { Icon: ShoppingCart, fr: 'E-Commerce', en: 'E-Commerce', color: '#dc2626' },
  { Icon: Bot, fr: 'Solutions IA', en: 'AI Solutions', color: '#d97706' },
]

const AFRICA_ICONS = [DollarSign, MessageCircle, Languages, Wifi, Coins, Smartphone]

const PROJECTS = [
  { name: 'CaissePro', link: 'https://caissepro.app', subFr: "Caisse & Gestion d'entreprise", subEn: 'POS & Business Management', descFr: "Système de caisse moderne pour commerçants africains. Reçus WhatsApp, Wave/Orange Money, support CFA.", descEn: 'Modern POS for African merchants. WhatsApp receipts, Wave/Orange Money, CFA support.', logo: '/logo-caissepro.png', logoBg: '#0d1f4a', color: '#1a6ef5' },
  { name: 'ImmoPro', link: 'https://immopro.agency', subFr: 'Plateforme Immobilière', subEn: 'Real Estate Platform', descFr: 'Plateforme immobilière moderne pour le marché sénégalais. Annonces, agents certifiés.', descEn: 'Modern real estate platform for the Senegalese market. Listings, certified agents.', logo: '/logo-immopro.png', logoBg: '#0a1a6e', color: '#f59e0b' },
  { name: 'VYBZ Social', link: 'https://vybz.city', subFr: 'Plateforme Sociale — Dakar', subEn: 'Social Platform — Dakar', descFr: '"C\'est quoi les VYBZ ce soir ?" — Événements et vie nocturne à Dakar.', descEn: '"What are the VYBZ tonight?" — Events & nightlife in Dakar.', logo: '/logo-vybz.png', logoBg: '#150020', color: '#8b5cf6' },
]

export default function HomePage() {
  const { lang } = useLang()
  const t = T[lang]
  const statsRef = useInView()
  const c1 = useCountUp(50, 1600, statsRef.inView)
  const c2 = useCountUp(30, 1600, statsRef.inView)
  const c3 = useCountUp(3, 1600, statsRef.inView)
  const c4 = useCountUp(5, 1600, statsRef.inView)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>

      {/* ══ HERO — dark, techy background ══════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #020714 0%, #04081a 40%, #060d22 70%, #030a18 100%)', paddingTop: 72 }}>
        {/* Animated canvas */}
        <TechGrid />

        {/* Radial glow accents */}
        <div style={{ position: 'absolute', top: '20%', left: '5%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(26,110,245,0.1) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,230,118,0.06) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />

        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(transparent, #020714)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '60px 24px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.3)', borderRadius: 100, padding: '6px 16px 6px 10px', fontSize: 10, fontWeight: 600, color: '#60a5fa', marginBottom: 28, letterSpacing: '0.08em' }}>
              <span style={{ width: 7, height: 7, background: '#00e676', borderRadius: '50%', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
              {t.badge}
            </div>
            <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(40px, 5.5vw, 70px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.03em', color: '#fff', marginBottom: 22 }}>
              {t.h1a}<br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #00e676 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t.h1b}</span><br />
              {t.h1c}
            </h1>
            <p style={{ fontSize: 17, color: '#64748b', maxWidth: 480, marginBottom: 36, lineHeight: 1.72 }}>{t.sub}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 28px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.35)' }}>
                <Rocket size={15} /> {t.cta1}
              </Link>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.05)', color: '#e2e8f0', padding: '14px 28px', borderRadius: 9, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <Monitor size={15} /> {t.cta2}
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {([{ Icon: Zap }, { Icon: Shield }, { Icon: TrendingUp }, { Icon: MapPin }] as any[]).map(({ Icon }, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '13px 15px', backdropFilter: 'blur(10px)' }}>
                  <Icon size={17} color="#60a5fa" style={{ marginBottom: 6 }} />
                  <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 11, color: '#e2e8f0', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.pillars[i].title}</div>
                  <div style={{ fontSize: 11, color: '#334155' }}>{t.pillars[i].desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero right — terminal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'rgba(6,12,26,0.9)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 14, overflow: 'hidden', backdropFilter: 'blur(20px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '11px 16px', background: 'rgba(10,16,32,0.8)', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
                {['#ff5f57','#ffbd2e','#28ca42'].map((c,i) => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
                <span style={{ fontSize: 11, color: '#334155', marginLeft: 8, fontFamily: 'monospace' }}>amdylabs — terminal</span>
              </div>
              <div style={{ padding: '18px', fontSize: 12, lineHeight: 2, fontFamily: 'monospace' }}>
                {[
                  { t: 'cmd', text: lang === 'fr' ? 'amdy créer app-africaine --lang=fr,wo' : 'amdy create african-app --lang=fr,wo' },
                  { t: 'out', text: lang === 'fr' ? '✓ Configuration Wave & Orange Money...' : '✓ Configuring Wave & Orange Money...' },
                  { t: 'out', text: lang === 'fr' ? '✓ Chargement packs FR + Wolof...' : '✓ Loading FR + Wolof language packs...' },
                  { t: 'out', text: lang === 'fr' ? '✓ Mode PWA hors connexion activé...' : '✓ Enabling offline-first PWA mode...' },
                  { t: 'out', text: lang === 'fr' ? '✓ CFA (XOF) défini comme devise...' : '✓ CFA (XOF) set as base currency...' },
                  { t: 'cmd', text: lang === 'fr' ? 'amdy déployer --region=afrique-ouest' : 'amdy deploy --region=west-africa' },
                  { t: 'ok', text: lang === 'fr' ? '> En ligne sur votreapp.amdylabs.com' : '> Live at yourapp.amdylabs.com' },
                  { t: 'ok', text: lang === 'fr' ? '> Accessible à tous vos clients !' : '> Accessible to all your clients!' },
                ].map((line, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10 }}>
                    {line.t === 'cmd' && <><span style={{ color: '#00e676' }}>$</span><span style={{ color: '#60a5fa' }}>{line.text}</span></>}
                    {line.t === 'out' && <span style={{ color: '#334155', paddingLeft: 18 }}>{line.text}</span>}
                    {line.t === 'ok' && <span style={{ color: '#00e676', paddingLeft: 18 }}>{line.text}</span>}
                  </div>
                ))}
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: '#00e676' }}>$</span>
                  <span style={{ borderRight: '2px solid #1a6ef5', animation: 'blink 1s step-end infinite' }}>&nbsp;</span>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
              {[['38+', lang === 'fr' ? 'Marchands' : 'Merchants'], ['4', lang === 'fr' ? 'Produits' : 'Products'], ['5', lang === 'fr' ? 'Pays' : 'Countries'], ['$712B', 'Market']].map(([val, label]) => (
                <div key={label} style={{ background: 'rgba(6,12,26,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 10, padding: '14px 10px', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                  <div style={{ fontFamily: 'Syne, system-ui', fontSize: 20, fontWeight: 800, color: '#60a5fa', letterSpacing: '-0.02em' }}>{val}</div>
                  <div style={{ fontSize: 10, color: '#334155', marginTop: 3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', color: '#1e2d4a', animation: 'bounce 2s ease-in-out infinite', zIndex: 3 }}>
          <ChevronDown size={22} />
        </div>
      </section>

      {/* ══ PARTNERS ══════════════════════════════════════════════════════════ */}
      <div style={{ background: '#020714', borderTop: '1px solid rgba(26,110,245,0.1)', borderBottom: '1px solid rgba(26,110,245,0.1)', padding: '22px 0', overflow: 'hidden' }}>
        <p style={{ textAlign: 'center', fontSize: 10, color: '#1e3a5f', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>{t.partnersLabel}</p>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 56, animation: 'marquee 22s linear infinite', width: 'max-content' }}>
            {['WAVE','Orange Money','MTN Mobile','Free Money','Ecobank','Airtel Money','PayDunya','CinetPay','WAVE','Orange Money','MTN Mobile','Free Money','Ecobank','Airtel Money','PayDunya','CinetPay'].map((p,i) => (
              <span key={i} style={{ fontFamily: 'Syne, system-ui', fontSize: 13, fontWeight: 700, color: '#1e3a5f', whiteSpace: 'nowrap' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SERVICES — light section ══════════════════════════════════════ */}
      <section style={{ padding: '90px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>{t.servicesTag}</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a' }}>
                {t.servicesTitle1}<br /><span style={{ color: '#1a6ef5' }}>{t.servicesTitle2}</span>
              </h2>
            </div>
            <Link href="/services" style={{ color: '#1a6ef5', textDecoration: 'none', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              {lang === 'fr' ? 'Tous les services' : 'All services'} <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
            {SERVICES.map(({ Icon, fr, en: en_, color }, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '26px 22px', transition: 'all 0.25s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = `0 16px 48px rgba(0,0,0,0.1)`; el.style.borderColor = '#bfdbfe' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = 'none'; el.style.borderColor = '#e2e8f0' }}>
                <div style={{ width: 46, height: 46, background: `${color}12`, border: `1px solid ${color}25`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon size={22} color={color} />
                </div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 8, letterSpacing: '-0.01em' }}>{lang === 'fr' ? fr : en_}</h3>
                <Link href="/services" style={{ fontSize: 12, color: color, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>{t.learnMore} <ArrowRight size={11} /></Link>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#64748b', maxWidth: 520, marginTop: 24, lineHeight: 1.7 }}>{t.servicesSub}</p>
        </div>
      </section>

      {/* ══ WHY + STATS — dark ════════════════════════════════════════════ */}
      <section ref={statsRef.ref} style={{ padding: '90px 24px', background: 'linear-gradient(180deg, #020714 0%, #040a1a 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>{t.whyTag}</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 16 }}>
              {t.whyTitle1}<br /><span style={{ color: '#60a5fa' }}>{t.whyTitle2}</span>
            </h2>
            <p style={{ fontSize: 15, color: '#475569', marginBottom: 28, lineHeight: 1.72 }}>{t.whySub}</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {t.checks.map(c => (
                <li key={c} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                  <CheckCircle2 size={15} color="#00e676" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#64748b' }}>{c}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1a6ef5', color: '#fff', padding: '13px 26px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', marginTop: 28 }}>
              {t.buildWith} <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[[c1,'+',0],[c2,'+',1],[c3,'',2],[c4,'',3]].map(([n,s,i]) => (
              <div key={Number(i)} style={{ background: 'rgba(6,12,26,0.9)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 16, padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne, system-ui', fontSize: 48, fontWeight: 800, color: '#60a5fa', letterSpacing: '-0.03em', lineHeight: 1 }}>{n}{s}</div>
                <div style={{ fontSize: 12, color: '#334155', marginTop: 8 }}>{t.stats[Number(i)]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS — light ══════════════════════════════════════════════ */}
      <section style={{ padding: '90px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>{t.projectsTag}</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a' }}>
                {t.projectsTitle1}<br /><span style={{ color: '#1a6ef5' }}>{t.projectsTitle2}</span>
              </h2>
            </div>
            <Link href="/projects" style={{ color: '#1a6ef5', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>{t.seeAll}</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 18 }}>
            {PROJECTS.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noreferrer" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 18, overflow: 'hidden', textDecoration: 'none', transition: 'all 0.25s', display: 'block' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)'; el.style.borderColor = '#bfdbfe' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = 'none'; el.style.borderColor = '#e2e8f0' }}>
                <div style={{ height: 160, background: p.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ width: 90, height: 90, borderRadius: 20, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                    <Image src={p.logo} alt={p.name} width={90} height={90} style={{ objectFit: 'contain' }} />
                  </div>
                  <span style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,230,118,0.15)', color: '#00e676', border: '1px solid rgba(0,230,118,0.3)', borderRadius: 20, padding: '3px 10px', fontSize: 10, fontWeight: 700 }}>Live</span>
                </div>
                <div style={{ padding: '22px 20px' }}>
                  <div style={{ fontSize: 10, color: p.color, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{lang === 'fr' ? p.subFr : p.subEn}</div>
                  <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 18, fontWeight: 800, color: '#0f172a', marginBottom: 8, letterSpacing: '-0.02em' }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{lang === 'fr' ? p.descFr : p.descEn}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BUILT FOR AFRICA — dark ════════════════════════════════════════ */}
      <section style={{ padding: '90px 24px', background: 'linear-gradient(135deg, #020714, #040a1a)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#00e676', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>{t.africaTag}</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 14 }}>
              {t.africaTitle1}<br /><span style={{ color: '#00e676' }}>{t.africaTitle2}</span>
            </h2>
            <p style={{ fontSize: 15, color: '#475569', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>{t.africaSub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {t.africaFeatures.map((title, i) => {
              const Icon = AFRICA_ICONS[i]
              return (
                <div key={i} style={{ background: 'rgba(6,12,26,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 12, padding: '20px 18px', display: 'flex', gap: 14, alignItems: 'flex-start', transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(0,230,118,0.3)'; el.style.background = 'rgba(0,230,118,0.04)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(30,45,74,0.5)'; el.style.background = 'rgba(6,12,26,0.8)' }}>
                  <Icon size={18} color="#00e676" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: 11, color: '#334155' }}>{t.africaFeatureDescs[i]}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR — light ═════════════════════════════════════════════ */}
      <section style={{ padding: '48px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 20, textAlign: 'center' }}>{t.trustTag}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            {t.trustItems.map(({ label, sub }, i) => {
              const icons = [Shield, MapPin, Globe, Users, TrendingUp]
              const Icon = icons[i]
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={16} color="#1a6ef5" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{label}</div>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>{sub}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #020714, #0d1f4a)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 20, padding: '72px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 500, height: 500, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(120px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.07 }} />
            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: '#60a5fa', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>{t.ctaTag}</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 18 }}>
                {t.ctaTitle1}<br /><span style={{ color: '#60a5fa' }}>{t.ctaTitle2}</span>
              </h2>
              <p style={{ color: '#475569', fontSize: 16, marginBottom: 40, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>{t.ctaSub}</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '15px 36px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 40px rgba(26,110,245,0.35)' }}>
                  <Rocket size={17} /> {t.ctaBtn1}
                </Link>
                <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d366', color: '#000', padding: '15px 36px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                  <MessageCircle size={17} /> {t.ctaBtn2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ — light ═══════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, textAlign: 'center' }}>{t.faqTag}</p>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a', textAlign: 'center', marginBottom: 44 }}>
            {t.faqTitle1} <span style={{ color: '#1a6ef5' }}>{t.faqTitle2}</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {t.faq.map(([q, a], i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 22px', background: 'none', border: 'none', color: '#0f172a', cursor: 'pointer', fontSize: 14, fontWeight: 600, textAlign: 'left', gap: 16, fontFamily: 'inherit' }}>
                  {q}<span style={{ fontSize: 20, color: '#1a6ef5', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s', flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: '0 22px 18px', fontSize: 14, color: '#64748b', lineHeight: 1.72 }}>{a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      `}</style>
    </div>
  )
}
