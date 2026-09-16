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

const T = {
  fr: {
    badge: 'TECHNOLOGIE · INNOVATION · IMPACT',
    h1a: 'Nous construisons', h1b: "l'avenir numérique", h1c: "de l'Afrique",
    sub: "AMDY LABS conçoit des solutions digitales modernes pour aider les entreprises africaines à se développer, se digitaliser et conquérir le monde.",
    cta1: 'Démarrer un projet', cta2: 'Découvrir nos solutions',
    pillars: [{ title: 'Innovation', desc: 'Des solutions modernes et performantes' }, { title: 'Fiabilité', desc: 'Sécurisé, stable et conçu pour durer' }, { title: 'Impact', desc: "Nous aidons les entreprises à grandir" }, { title: 'Présence Mondiale', desc: 'Une équipe africaine présente partout' }],
    partnersLabel: "Partenaires de l'écosystème",
    servicesTag: 'Ce que nous construisons',
    servicesTitle: 'Tout ce dont votre entreprise\na besoin pour se digitaliser',
    servicesSub: "De l'idée à la mise en production — nous construisons, lançons et soutenons des produits numériques de classe mondiale.",
    learnMore: 'En savoir plus',
    whyTag: 'Pourquoi AMDY LABS',
    whyTitle: "Nous comprenons l'Afrique.\nNous construisons pour l'Afrique.",
    whySub: "Fondé par Amdy Boubacar avec une équipe distribuée à travers les États-Unis, l'Europe et l'Afrique — qualité Silicon Valley, âme africaine.",
    checks: ['Conçu pour les marchés, langues et réalités africaines', 'Solutions abordables, évolutives et maintenables', 'Intégrations Mobile Money et paiements africains', 'Français, anglais, wolof — produits multilingues', 'Optimisé pour les réseaux 2G/3G et appareils bas de gamme', 'Support continu, communication WhatsApp en priorité'],
    buildWith: 'Construire avec nous',
    stats: ['Projets réalisés', 'Clients satisfaits', 'Produits sur le marché', 'Pays atteints'],
    projectsTag: 'Nos Produits', projectsTitle: "Ce que nous avons construit", seeAll: 'Voir tous les projets',
    africaTag: "Conçu pour l'Afrique", africaTitle: 'Une technologie qui\nparle votre langue',
    africaSub: "Nos solutions sont conçues de A à Z pour les marchés africains — avec les réalités, les langues et les systèmes de paiement africains au cœur de chaque décision.",
    africaFeatures: ['Wave & Orange Money', 'Commerce WhatsApp', 'Multilingue', 'Hors Connexion', 'CFA & Devises Locales', 'Mobile d\'abord'],
    africaFeatureDescs: ['Intégrations mobiles natives', 'Vendre et notifier via WhatsApp', 'Français, anglais et wolof', 'Fonctionne sur 2G et sans internet', 'XOF, XAF, GHS, NGN supportés', 'Conçu pour les utilisateurs smartphone'],
    termCmd1: 'amdy créer app-africaine --lang=fr,wo',
    termLines: ['✓ Configuration passerelle Wave...', '✓ Intégration Orange Money...', '✓ Chargement packs langue FR + Wolof...', '✓ Mode PWA hors connexion activé...', '✓ CFA (XOF) défini comme devise principale...'],
    termCmd2: 'amdy déployer --region=afrique-ouest',
    termSuccess1: '> En ligne sur votreapp.amdylabs.com', termSuccess2: '> Les utilisateurs africains peuvent y accéder !',
    economyTitle: 'Économie Numérique Africaine',
    economyDesc: "Projetée à 712 milliards $ d'ici 2050. AMDY LABS construit l'infrastructure aujourd'hui.",
    ctaTag: 'Prêt à commencer ?', ctaTitle: 'Prêt à transformer\nvotre entreprise ?',
    ctaSub: "Partagez votre idée. Nous la transformerons en produit numérique de classe mondiale. Appel de découverte gratuit — sans engagement.",
    ctaBtn1: 'Démarrer un projet', ctaBtn2: 'WhatsApp',
    faqTag: 'Questions fréquentes', faqTitle: 'Questions courantes',
    faq: [
      ["Combien de temps faut-il pour créer une application mobile ?", "En général 6 à 16 semaines selon la complexité. Un MVP simple peut être livré en 4 à 6 semaines. Nous fournissons un calendrier détaillé après un appel de découverte gratuit."],
      ["Intégrez-vous les méthodes de paiement africaines ?", "Oui — Wave, Orange Money, Free Money, MTN, PayDunya, CinetPay et autres passerelles africaines sont intégrées nativement dans tous nos produits."],
      ["Quels sont vos modèles de tarification ?", "Nous proposons des projets à prix fixe, des retainers mensuels et des abonnements SaaS. Devis transparents à l'avance, sans surprises."],
      ["Assurez-vous le support après le lancement ?", "Absolument. Nous proposons des forfaits de maintenance, corrections de bugs, mises à jour et support d'urgence 24h/7j via WhatsApp."],
      ["Un fondateur non-technique peut-il travailler avec vous ?", "C'est notre spécialité. Vous apportez la vision, nous gérons toute la technologie. Aucune connaissance en code requise, jamais."],
    ],
  },
  en: {
    badge: 'TECHNOLOGY · INNOVATION · IMPACT',
    h1a: 'We build', h1b: "Africa's digital", h1c: "future",
    sub: "AMDY LABS creates modern digital solutions to help African businesses grow, digitize, and compete globally.",
    cta1: 'Start a Project', cta2: 'Explore Our Work',
    pillars: [{ title: 'Innovation', desc: 'Modern, high-performance solutions' }, { title: 'Reliability', desc: 'Secure, stable, built to last' }, { title: 'Impact', desc: 'We help businesses grow and scale' }, { title: 'Global Presence', desc: 'An African team present everywhere' }],
    partnersLabel: 'Ecosystem partners',
    servicesTag: 'What We Build',
    servicesTitle: "Everything your business\nneeds to go digital",
    servicesSub: "From idea to production — we build, launch, and support world-class digital products for African businesses.",
    learnMore: 'Learn more',
    whyTag: 'Why AMDY LABS',
    whyTitle: "We understand Africa.\nWe build for Africa.",
    whySub: "Founded by Amdy Boubacar with a distributed team across the US, Europe, and Africa — Silicon Valley quality with African soul.",
    checks: ['Built for African markets, languages & realities', 'Affordable, scalable & maintainable solutions', 'Mobile money & African payment integrations', 'French, English, Wolof — multilingual products', 'Optimized for 2G/3G and low-end devices', 'Ongoing support, WhatsApp-first communication'],
    buildWith: 'Build With Us',
    stats: ['Projects Completed', 'Happy Clients', 'Products in Market', 'Countries Reached'],
    projectsTag: 'Our Products', projectsTitle: "What we've built", seeAll: 'See all projects',
    africaTag: 'Built for Africa', africaTitle: 'Technology that\nspeaks your language',
    africaSub: "Our solutions are designed from the ground up for African markets — with African realities, languages, and payment systems at the core of every decision.",
    africaFeatures: ['Wave & Orange Money', 'WhatsApp Commerce', 'Multilingual', 'Offline-First', 'CFA & Local Currencies', 'Mobile-First'],
    africaFeatureDescs: ['Native mobile money integrations', 'Sell & notify via WhatsApp', 'French, English & Wolof', 'Works on 2G & without internet', 'XOF, XAF, GHS, NGN support', 'Designed for smartphone users'],
    termCmd1: 'amdy create african-app --lang=fr,wo',
    termLines: ['✓ Configuring Wave payment gateway...', '✓ Setting up Orange Money...', '✓ Loading FR + Wolof language packs...', '✓ Enabling offline-first PWA mode...', '✓ CFA (XOF) set as base currency...'],
    termCmd2: 'amdy deploy --region=west-africa',
    termSuccess1: '> Live at yourapp.amdylabs.com', termSuccess2: '> African users can now access it!',
    economyTitle: 'African Digital Economy',
    economyDesc: 'Projected to reach $712B by 2050. AMDY LABS is building the infrastructure today.',
    ctaTag: 'Ready to start?', ctaTitle: 'Ready to transform\nyour business?',
    ctaSub: "Share your idea. We'll turn it into a world-class digital product. Free discovery call — no commitment.",
    ctaBtn1: 'Start a Project', ctaBtn2: 'WhatsApp',
    faqTag: 'FAQ', faqTitle: 'Common Questions',
    faq: [
      ['How long does it take to build a mobile app?', 'Typically 6–16 weeks depending on complexity. A simple MVP can be delivered in 4–6 weeks. We provide a detailed timeline after a free discovery call.'],
      ['Do you integrate African payment methods?', 'Yes — Wave, Orange Money, Free Money, MTN, PayDunya, CinetPay, and other African gateways are natively integrated in all our products.'],
      ['What are your pricing models?', 'We offer fixed-price projects, monthly retainers, and SaaS subscriptions. Transparent quotes upfront, no surprises.'],
      ['Do you provide support after launch?', 'Absolutely. We offer maintenance packages, bug fixes, feature updates, and 24/7 emergency support via WhatsApp.'],
      ['Can non-technical founders work with you?', "That's our specialty. You bring the vision — we handle all the technology. No coding knowledge needed, ever."],
    ],
  }
}

const SERVICES = [
  { Icon: Smartphone, fr: 'Applications Mobiles', en: 'Mobile Apps', descFr: 'Applications Android et iOS natives conçues pour les consommateurs africains.', descEn: 'Native Android & iOS apps built for African consumers.' },
  { Icon: Globe, fr: 'Sites Web', en: 'Websites', descFr: 'Sites web modernes qui transforment vos visiteurs en clients payants.', descEn: 'Modern websites that convert visitors into paying customers.' },
  { Icon: Store, fr: 'Systèmes POS', en: 'POS Systems', descFr: 'Caisse CaissePro intégrée avec Wave, Orange Money et les paiements mobiles.', descEn: 'CaissePro-powered POS with Wave, Orange Money & mobile payments.' },
  { Icon: Cloud, fr: 'Plateformes SaaS', en: 'SaaS Platforms', descFr: "Plateformes logicielles multi-tenant conçues pour évoluer à travers l'Afrique.", descEn: 'Full multi-tenant software platforms built to scale across Africa.' },
  { Icon: ShoppingCart, fr: 'E-Commerce', en: 'E-Commerce', descFr: 'Boutiques en ligne avec passerelles africaines et intégration WhatsApp.', descEn: 'Online stores with African payment gateways and WhatsApp integration.' },
  { Icon: Bot, fr: 'Solutions IA', en: 'AI Solutions', descFr: 'Automatisation intelligente, chatbots et analyses alimentées par IA.', descEn: 'Smart automation, chatbots, and AI-powered analytics.' },
]

const PROJECTS = [
  { name: 'CaissePro', link: 'https://caissepro.app', subFr: "Caisse & Gestion d'entreprise", subEn: 'POS & Business Management', descFr: "Système de caisse moderne pour commerçants africains. Inventaire, reçus WhatsApp, Wave/Orange Money, support CFA.", descEn: 'Modern POS for African merchants. Inventory, WhatsApp receipts, Wave/Orange Money, CFA support.', logo: '/logo-caissepro.png', logoBg: '#fff', color: 'linear-gradient(135deg,#0d1f4a,#1a3a8f)', tags: ['Next.js','Supabase','PWA','Wave API'] },
  { name: 'VYBZ Social', link: 'https://vybz.city', subFr: 'Plateforme Sociale — Dakar', subEn: 'Social Platform — Dakar', descFr: '"C\'est quoi les VYBZ ce soir ?" — Événements, vie nocturne et expériences à Dakar et dans la diaspora africaine.', descEn: '"What are the VYBZ tonight?" — Events, nightlife & experiences connecting Dakar and the African diaspora.', logo: '/logo-vybz.png', logoBg: '#0a0010', color: 'linear-gradient(135deg,#150020,#3d0060)', tags: ['React Native','Firebase','Maps'] },
  { name: 'ImmoPro', link: 'https://immopro.agency', subFr: 'Plateforme Immobilière', subEn: 'Real Estate Platform', descFr: 'Plateforme immobilière moderne pour le marché sénégalais. Annonces, agents certifiés et transactions sécurisées.', descEn: 'Modern real estate platform for the Senegalese market. Listings, certified agents and secure transactions.', logo: '/logo-immopro.png', logoBg: '#0a1a6e', color: 'linear-gradient(135deg,#040d3a,#0a1a6e)', tags: ['Next.js','Supabase','Maps'] },
]

const AFRICA_ICONS = [DollarSign, MessageCircle, Languages, Wifi, Coins, Smartphone]

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
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 72 }}>
        <Image src="/hero-bg.webp" alt="AMDY LABS" fill priority style={{ objectFit: 'cover', objectPosition: 'center center' }} quality={95} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(4,8,26,0.92) 0%, rgba(4,8,26,0.75) 38%, rgba(4,8,26,0.25) 60%, rgba(4,8,26,0.0) 80%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(transparent, #050709)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.12)', border: '1px solid rgba(26,110,245,0.4)', borderRadius: 100, padding: '6px 16px 6px 10px', fontSize: 12, fontWeight: 600, color: '#60a5fa', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, background: '#00e676', borderRadius: '50%', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
              {t.badge}
            </div>
            <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px,5.5vw,72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.02em' }}>
              {t.h1a}<br />
              <span style={{ background: 'linear-gradient(135deg,#60a5fa,#00e676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t.h1b}</span><br />
              {t.h1c}
            </h1>
            <p style={{ fontSize: 17, color: '#94a3b8', maxWidth: 500, marginBottom: 40, lineHeight: 1.72 }}>{t.sub}</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '15px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.4)' }}>
                <Rocket size={16} /> {t.cta1}
              </Link>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '15px 32px', borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)' }}>
                <Monitor size={16} /> {t.cta2}
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, maxWidth: 480 }}>
              {([{ Icon: Zap }, { Icon: Shield }, { Icon: TrendingUp }, { Icon: MapPin }] as any[]).map(({ Icon }, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '14px 16px', backdropFilter: 'blur(10px)' }}>
                  <Icon size={18} color="#60a5fa" style={{ marginBottom: 6 }} />
                  <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 12, color: '#e2e8f0', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.pillars[i].title}</div>
                  <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.5 }}>{t.pillars[i].desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: '#334155', animation: 'bounce 2s ease-in-out infinite', zIndex: 3 }}>
          <ChevronDown size={22} />
        </div>
      </section>

      {/* PARTNERS */}
      <div style={{ borderTop: '1px solid rgba(30,45,74,0.5)', borderBottom: '1px solid rgba(30,45,74,0.5)', padding: '24px 0', overflow: 'hidden', background: 'rgba(8,13,26,0.5)' }}>
        <p style={{ textAlign: 'center', fontSize: 10, color: '#334155', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18 }}>{t.partnersLabel}</p>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 56, animation: 'marquee 22s linear infinite', width: 'max-content' }}>
            {['WAVE','Orange Money','MTN Mobile','Free Money','Ecobank','Airtel Money','PayDunya','CinetPay','WAVE','Orange Money','MTN Mobile','Free Money','Ecobank','Airtel Money','PayDunya','CinetPay'].map((p,i) => (
              <span key={i} style={{ fontFamily: 'Syne, system-ui', fontSize: 13, fontWeight: 700, color: '#1e3a5f', whiteSpace: 'nowrap' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 44 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>{t.servicesTag}</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}>{t.servicesTitle}</h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 520, lineHeight: 1.7 }}>{t.servicesSub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 16 }}>
            {SERVICES.map(({ Icon, fr, en: en_, descFr, descEn }, i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.6)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 14, padding: 26, backdropFilter: 'blur(10px)', transition: 'all 0.3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(26,110,245,0.5)'; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 20px 60px rgba(26,110,245,0.1)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(30,45,74,0.5)'; el.style.transform='none'; el.style.boxShadow='none' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={22} color="#60a5fa" />
                </div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{lang === 'fr' ? fr : en_}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, marginBottom: 16 }}>{lang === 'fr' ? descFr : descEn}</p>
                <Link href="/services" style={{ fontSize: 12, color: '#60a5fa', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>{t.learnMore} <ArrowRight size={12} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY + STATS */}
      <section ref={statsRef.ref} style={{ padding: '100px 24px', background: 'linear-gradient(180deg,#050709 0%,#080d1a 50%,#050709 100%)', borderTop: '1px solid rgba(30,45,74,0.4)', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 70, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>{t.whyTag}</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 18, letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}>{t.whyTitle}</h2>
            <p style={{ fontSize: 15, color: '#64748b', marginBottom: 30, lineHeight: 1.75 }}>{t.whySub}</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {t.checks.map(c => (
                <li key={c} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                  <CheckCircle2 size={16} color="#00e676" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#94a3b8' }}>{c}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', marginTop: 32, boxShadow: '0 8px 32px rgba(26,110,245,0.3)' }}>
              {t.buildWith} <ArrowRight size={15} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[[c1,'+',0],[c2,'+',1],[c3,'',2],[c4,'',3]].map(([n,s,i]) => (
              <div key={Number(i)} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 18, padding: 30, textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne, system-ui', fontSize: 52, fontWeight: 800, color: '#60a5fa', lineHeight: 1 }}>{n}{s}</div>
                <div style={{ fontSize: 13, color: '#475569', marginTop: 10 }}>{t.stats[Number(i)]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>{t.projectsTag}</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.02em' }}>{t.projectsTitle}</h2>
            </div>
            <Link href="/projects" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>{t.seeAll} <ArrowRight size={14} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.6)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 20, overflow: 'hidden', transition: 'all 0.3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform='translateY(-6px)'; el.style.borderColor='rgba(26,110,245,0.4)'; el.style.boxShadow='0 30px 80px rgba(0,0,0,0.4)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform='none'; el.style.borderColor='rgba(30,45,74,0.5)'; el.style.boxShadow='none' }}>
                <div style={{ height: 190, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 20 }}>
                  <div style={{ width: 120, height: 120, borderRadius: p.name==='VYBZ Social' ? 16 : 24, overflow: 'hidden', background: p.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 16px 48px rgba(0,0,0,0.5)' }}>
                    <Image src={p.logo} alt={p.name} width={120} height={120} style={{ objectFit: 'contain' }} />
                  </div>
                  <span style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '4px 10px', fontSize: 10, fontWeight: 600, color: '#60a5fa' }}>{lang==='fr' ? p.subFr : p.subEn}</span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {p.tags.map(tag => <span key={tag} style={{ background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 4, padding: '3px 9px', fontSize: 10, color: '#60a5fa' }}>{tag}</span>)}
                  </div>
                  <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{lang==='fr' ? p.descFr : p.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR AFRICA */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg,#04081a,#060d1e,#04081a)', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 70, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#00e676', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>{t.africaTag}</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 18, letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}>{t.africaTitle}</h2>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, marginBottom: 36 }}>{t.africaSub}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {t.africaFeatures.map((title, i) => {
                const Icon = AFRICA_ICONS[i]
                return (
                  <div key={i} style={{ background: 'rgba(26,110,245,0.05)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 12, padding: '16px 14px', display: 'flex', gap: 12, alignItems: 'flex-start', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(26,110,245,0.4)'; (e.currentTarget as HTMLElement).style.background='rgba(26,110,245,0.09)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(30,45,74,0.5)'; (e.currentTarget as HTMLElement).style.background='rgba(26,110,245,0.05)' }}>
                    <Icon size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 3 }}>{title}</div>
                      <div style={{ fontSize: 11, color: '#475569' }}>{t.africaFeatureDescs[i]}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <div style={{ background: '#060c1a', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 16, overflow: 'hidden', fontFamily: 'monospace' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '12px 18px', background: '#0a1020', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
                {['#ff5f57','#ffbd2e','#28ca42'].map((c,i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
                <span style={{ fontSize: 11, color: '#334155', marginLeft: 8, fontFamily: 'system-ui' }}>amdylabs-deploy.sh</span>
              </div>
              <div style={{ padding: '20px', fontSize: 12, lineHeight: 2.1 }}>
                <div style={{ display:'flex', gap:10 }}><span style={{ color:'#00e676' }}>$</span><span style={{ color:'#60a5fa' }}>{t.termCmd1}</span></div>
                {t.termLines.map((line, i) => <div key={i} style={{ color:'#334155', paddingLeft:22 }}>{line}</div>)}
                <div style={{ display:'flex', gap:10 }}><span style={{ color:'#00e676' }}>$</span><span style={{ color:'#60a5fa' }}>{t.termCmd2}</span></div>
                <div style={{ color:'#00e676', paddingLeft:22 }}>{t.termSuccess1}</div>
                <div style={{ color:'#00e676', paddingLeft:22 }}>{t.termSuccess2}</div>
                <div style={{ display:'flex', gap:10 }}><span style={{ color:'#00e676' }}>$</span><span style={{ borderRight:'2px solid #1a6ef5', animation:'blink 1s step-end infinite' }}>&nbsp;</span></div>
              </div>
            </div>
            <div style={{ background:'rgba(13,20,37,0.8)', border:'1px solid rgba(30,45,74,0.5)', borderRadius:14, padding:20, marginTop:14, display:'flex', gap:16, alignItems:'center' }}>
              <TrendingUp size={28} color="#60a5fa" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight:700, fontSize:13, marginBottom:4 }}>{t.economyTitle}</div>
                <div style={{ fontSize:12, color:'#475569', lineHeight:1.6 }}>{t.economyDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg,#0a1628,#0d1f4a)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 24, padding: '80px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 500, height: 500, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(130px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.08 }} />
            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: '#60a5fa', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>{t.ctaTag}</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}>{t.ctaTitle}</h2>
              <p style={{ color: '#64748b', fontSize: 17, marginBottom: 44, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>{t.ctaSub}</p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '16px 38px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 40px rgba(26,110,245,0.35)' }}>
                  <Rocket size={18} /> {t.ctaBtn1}
                </Link>
                <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d366', color: '#000', padding: '16px 38px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
                  <MessageCircle size={18} /> {t.ctaBtn2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* TRUST BAR */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 16, padding: '28px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          {[
            { Icon: Shield, label: 'Michigan LLC', sub: 'US Registered Company' },
            { Icon: MapPin, label: 'Detroit, MI 48221', sub: '10629 W 7 Mile' },
            { Icon: Globe, label: '4 Live Products', sub: 'caissepro.app · vybz.city · immopro.agency' },
            { Icon: Users, label: '38+ Active Merchants', sub: 'Real revenue, real traction' },
            { Icon: TrendingUp, label: 'Seed Round Open', sub: 'contact@amdylabs.com' },
          ].map(({ Icon, label, sub }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Icon size={18} color="#60a5fa" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0' }}>{label}</div>
                <div style={{ fontSize: 11, color: '#475569' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, textAlign: 'center' }}>{t.faqTag}</p>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, textAlign: 'center', marginBottom: 48, letterSpacing: '-0.02em' }}>{t.faqTitle}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {t.faq.map(([q, a], i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 12, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq===i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', color: '#e2e8f0', cursor: 'pointer', fontSize: 14, fontWeight: 600, textAlign: 'left', gap: 16, fontFamily: 'inherit' }}>
                  {q}<span style={{ fontSize: 20, color: '#1a6ef5', transform: openFaq===i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>+</span>
                </button>
                {openFaq===i && <div style={{ padding: '0 24px 20px', fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{a}</div>}
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
