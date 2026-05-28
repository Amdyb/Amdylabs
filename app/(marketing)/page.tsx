'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, ChevronDown, Smartphone, Globe, Store, Cloud, ShoppingCart, Bot, Zap, Palette, DollarSign, MessageCircle, Languages, Wifi, Coins, Monitor, Shield, TrendingUp, Users, MapPin, Rocket } from 'lucide-react'

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
  { Icon: Smartphone, label: 'Applications Mobiles', desc: 'Applications Android et iOS natives et multiplateformes conçues pour les consommateurs africains.' },
  { Icon: Globe, label: 'Sites Web', desc: 'Sites web modernes et responsifs qui transforment vos visiteurs en clients payants.' },
  { Icon: Store, label: 'Systèmes POS', desc: 'Caisse CaissePro intégrée avec Wave, Orange Money et les paiements mobiles.' },
  { Icon: Cloud, label: 'Plateformes SaaS', desc: 'Plateformes logicielles multi-tenant complètes conçues pour évoluer à travers l\'Afrique.' },
  { Icon: ShoppingCart, label: 'E-Commerce', desc: 'Boutiques en ligne avec passerelles de paiement africaines et intégration WhatsApp.' },
  { Icon: Bot, label: 'Solutions IA', desc: 'Automatisation intelligente, chatbots et analyses alimentées par l\'IA pour votre entreprise.' },
]

const PROJECTS = [
  { name: 'CaissePro', sub: 'Caisse & Gestion d\'entreprise', desc: 'Système de caisse moderne pour commerçants africains. Inventaire, reçus WhatsApp, Wave/Orange Money, support CFA.', logo: '/logo-caissepro.png', logoBg: '#fff', color: 'linear-gradient(135deg,#0d1f4a,#1a3a8f)', tags: ['Next.js','Supabase','PWA','Wave API'] },
  { name: 'VYBZ Social', sub: 'Plateforme Sociale — Dakar', desc: '"C\'est quoi les VYBZ ce soir ?" — Événements, vie nocturne et expériences connectant Dakar et la diaspora africaine.', logo: '/logo-vybz.png', logoBg: '#0a0010', color: 'linear-gradient(135deg,#150020,#3d0060)', tags: ['React Native','Firebase','Maps','Événements'] },
  { name: 'Mon Livreur', sub: 'Livraison & Logistique', desc: '"Livrer plus vite, plus loin, pour vous." Livraison et logistique en temps réel pour les entreprises africaines.', logo: '/logo-monlivreur.png', logoBg: '#fff', color: 'linear-gradient(135deg,#0d2a1a,#1a6e3a)', tags: ['React Native','Node.js','Maps API','WhatsApp'] },
]

const AFRICA_FEATURES = [
  { Icon: DollarSign, title: 'Wave & Orange Money', desc: 'Intégrations mobiles natives' },
  { Icon: MessageCircle, title: 'Commerce WhatsApp', desc: 'Vendre et notifier via WhatsApp' },
  { Icon: Languages, title: 'Multilingue', desc: 'Français, anglais et wolof' },
  { Icon: Wifi, title: 'Hors Connexion', desc: 'Fonctionne sur 2G et sans internet' },
  { Icon: Coins, title: 'CFA & Devises Locales', desc: 'XOF, XAF, GHS, NGN supportés' },
  { Icon: Smartphone, title: 'Mobile d\'abord', desc: 'Conçu pour les utilisateurs smartphone' },
]

const FAQ = [
  ['Combien de temps faut-il pour créer une application mobile ?', 'En général 6 à 16 semaines selon la complexité. Un MVP simple peut être livré en 4 à 6 semaines. Nous fournissons un calendrier détaillé après un appel de découverte gratuit.'],
  ['Intégrez-vous les méthodes de paiement africaines ?', 'Oui — Wave, Orange Money, Free Money, MTN, PayDunya, CinetPay et autres passerelles africaines sont intégrées nativement dans tous nos produits.'],
  ['Quels sont vos modèles de tarification ?', 'Nous proposons des projets à prix fixe, des retainers mensuels et des abonnements SaaS. Devis transparents à l\'avance, sans surprises.'],
  ['Assurez-vous le support après le lancement ?', 'Absolument. Nous proposons des forfaits de maintenance, corrections de bugs, mises à jour de fonctionnalités et support d\'urgence 24h/7j via WhatsApp.'],
  ['Un fondateur non-technique peut-il travailler avec vous ?', 'C\'est notre spécialité. Vous apportez la vision, nous gérons toute la technologie. Aucune connaissance en code requise, jamais.'],
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
        <Image src="/hero-bg.webp" alt="AMDY LABS — Construire l'avenir numérique de l'Afrique" fill priority style={{ objectFit: 'cover', objectPosition: 'center center' }} quality={95} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(4,8,26,0.92) 0%, rgba(4,8,26,0.75) 38%, rgba(4,8,26,0.25) 60%, rgba(4,8,26,0.0) 80%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(transparent, #050709)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.12)', border: '1px solid rgba(26,110,245,0.4)', borderRadius: 100, padding: '6px 16px 6px 10px', fontSize: 12, fontWeight: 600, color: '#60a5fa', marginBottom: 28, letterSpacing: '0.04em' }}>
              <span style={{ width: 7, height: 7, background: '#00e676', borderRadius: '50%', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
              TECHNOLOGIE · INNOVATION · IMPACT
            </div>

            <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px, 5.5vw, 72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Nous construisons<br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #00e676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>l&apos;avenir numérique</span><br />
              de l&apos;Afrique
            </h1>

            <p style={{ fontSize: 17, color: '#94a3b8', maxWidth: 500, marginBottom: 40, lineHeight: 1.78 }}>
              AMDY LABS conçoit des solutions digitales modernes pour aider les entreprises africaines à se développer, se digitaliser et conquérir le monde.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '15px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.4)' }}>
                <Rocket size={16} /> Démarrer un projet
              </Link>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '15px 32px', borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)' }}>
                <Monitor size={16} /> Découvrir nos solutions
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, maxWidth: 480 }}>
              {[
                { Icon: Zap, title: 'Innovation', desc: 'Des solutions modernes et performantes' },
                { Icon: Shield, title: 'Fiabilité', desc: 'Sécurisé, stable et conçu pour durer' },
                { Icon: TrendingUp, title: 'Impact', desc: 'Nous aidons les entreprises à grandir' },
                { Icon: MapPin, title: 'Présence Mondiale', desc: 'Une équipe africaine présente partout' },
              ].map(({ Icon, title, desc }) => (
                <div key={title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '14px 16px', backdropFilter: 'blur(10px)' }}>
                  <Icon size={18} color="#60a5fa" style={{ marginBottom: 6 }} />
                  <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 12, color: '#e2e8f0', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</div>
                  <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: '#334155', animation: 'bounce 2s ease-in-out infinite', zIndex: 3 }}>
          <ChevronDown size={22} />
        </div>
      </section>

      {/* ══════ PARTENAIRES ══════ */}
      <div style={{ borderTop: '1px solid rgba(30,45,74,0.5)', borderBottom: '1px solid rgba(30,45,74,0.5)', padding: '24px 0', overflow: 'hidden', background: 'rgba(8,13,26,0.5)' }}>
        <p style={{ textAlign: 'center', fontSize: 10, color: '#334155', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18 }}>Partenaires de l&apos;écosystème</p>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 56, alignItems: 'center', animation: 'marquee 22s linear infinite', width: 'max-content' }}>
            {['WAVE', 'Orange Money', 'MTN Mobile', 'Free Money', 'Ecobank', 'Airtel Money', 'PayDunya', 'CinetPay', 'WAVE', 'Orange Money', 'MTN Mobile', 'Free Money', 'Ecobank', 'Airtel Money', 'PayDunya', 'CinetPay'].map((p, i) => (
              <span key={i} style={{ fontFamily: 'Syne, system-ui', fontSize: 13, fontWeight: 700, color: '#1e3a5f', whiteSpace: 'nowrap' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ SERVICES ══════ */}
      <section style={{ padding: '110px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Ce que nous construisons</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>Tout ce dont votre entreprise<br />a besoin pour se digitaliser</h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 520, lineHeight: 1.7 }}>De l&apos;idée à la mise en production — nous construisons, lançons et soutenons des produits numériques de classe mondiale pour les entreprises africaines.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {SERVICES.map(({ Icon, label, desc }, i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.6)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 16, padding: 28, backdropFilter: 'blur(10px)', transition: 'all 0.3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(26,110,245,0.5)'; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 20px 60px rgba(26,110,245,0.1)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(30,45,74,0.5)'; el.style.transform='none'; el.style.boxShadow='none' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={22} color="#60a5fa" />
                </div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{label}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, marginBottom: 16 }}>{desc}</p>
                <Link href="/services" style={{ fontSize: 12, color: '#60a5fa', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>En savoir plus <ArrowRight size={12} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ POURQUOI + STATS ══════ */}
      <section ref={statsRef.ref} style={{ padding: '110px 24px', background: 'linear-gradient(180deg,#050709 0%,#080d1a 50%,#050709 100%)', borderTop: '1px solid rgba(30,45,74,0.4)', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: 70, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Pourquoi AMDY LABS</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 18, letterSpacing: '-0.02em' }}>Nous comprenons l&apos;Afrique.<br />Nous construisons pour l&apos;Afrique.</h2>
            <p style={{ fontSize: 15, color: '#64748b', marginBottom: 30, lineHeight: 1.75 }}>Fondé par Amdy Boubacar avec une équipe distribuée à travers les États-Unis, l&apos;Europe et l&apos;Afrique — nous combinons la qualité de la Silicon Valley avec l&apos;âme africaine.</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Conçu pour les marchés, langues et réalités africaines',
                'Solutions abordables, évolutives et maintenables',
                'Intégrations Mobile Money et paiements africains',
                'Français, anglais, wolof — produits multilingues',
                'Optimisé pour les réseaux 2G/3G et appareils bas de gamme',
                'Support continu, communication WhatsApp en priorité',
              ].map(t => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                  <CheckCircle2 size={16} color="#00e676" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#94a3b8' }}>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', marginTop: 32, boxShadow: '0 8px 32px rgba(26,110,245,0.3)' }}>
              Construire avec nous <ArrowRight size={15} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[[c1,'+','Projets réalisés'],[c2,'+','Clients satisfaits'],[c3,'','Produits sur le marché'],[c4,'','Pays atteints']].map(([n,s,l]) => (
              <div key={String(l)} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 18, padding: 30, textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontFamily: 'Syne, system-ui', fontSize: 52, fontWeight: 800, color: '#60a5fa', lineHeight: 1 }}>{n}{s}</div>
                <div style={{ fontSize: 13, color: '#475569', marginTop: 10, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROJETS ══════ */}
      <section style={{ padding: '110px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Nos Produits</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.02em' }}>Ce que nous avons construit</h2>
            </div>
            <Link href="/projects" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>Voir tous les projets <ArrowRight size={14} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.6)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 20, overflow: 'hidden', transition: 'all 0.3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform='translateY(-6px)'; el.style.borderColor='rgba(26,110,245,0.4)'; el.style.boxShadow='0 30px 80px rgba(0,0,0,0.4)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform='none'; el.style.borderColor='rgba(30,45,74,0.5)'; el.style.boxShadow='none' }}>
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

      {/* ══════ CONÇU POUR L'AFRIQUE ══════ */}
      <section style={{ padding: '110px 24px', background: 'linear-gradient(135deg,#04081a,#060d1e,#04081a)', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: 70, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#00e676', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Conçu pour l&apos;Afrique</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 18, letterSpacing: '-0.02em' }}>Une technologie qui<br />parle votre langue</h2>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, marginBottom: 36 }}>Nos solutions sont conçues de A à Z pour les marchés africains — avec les réalités, les langues et les systèmes de paiement africains au cœur de chaque décision.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {AFRICA_FEATURES.map(({ Icon, title, desc }) => (
                <div key={title} style={{ background: 'rgba(26,110,245,0.05)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 12, padding: '16px 14px', display: 'flex', gap: 12, alignItems: 'flex-start', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(26,110,245,0.4)'; (e.currentTarget as HTMLElement).style.background='rgba(26,110,245,0.09)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(30,45,74,0.5)'; (e.currentTarget as HTMLElement).style.background='rgba(26,110,245,0.05)' }}>
                  <Icon size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: 11, color: '#475569' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background: '#060c1a', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 16, overflow: 'hidden', fontFamily: 'monospace' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '12px 18px', background: '#0a1020', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
                {['#ff5f57','#ffbd2e','#28ca42'].map((c,i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
                <span style={{ fontSize: 11, color: '#334155', marginLeft: 8, fontFamily: 'system-ui' }}>amdylabs-deploy.sh</span>
              </div>
              <div style={{ padding: '20px', fontSize: 12, lineHeight: 2.1 }}>
                {[
                  { type: 'cmd', text: 'amdy créer app-africaine --lang=fr,wo' },
                  { type: 'out', text: '✓ Configuration passerelle Wave...' },
                  { type: 'out', text: '✓ Intégration Orange Money...' },
                  { type: 'out', text: '✓ Chargement packs langue FR + Wolof...' },
                  { type: 'out', text: '✓ Mode PWA hors connexion activé...' },
                  { type: 'out', text: '✓ CFA (XOF) défini comme devise principale...' },
                  { type: 'cmd', text: 'amdy déployer --region=afrique-ouest' },
                  { type: 'success', text: '> En ligne sur votreapp.amdylabs.com' },
                  { type: 'success', text: '> Les utilisateurs africains peuvent y accéder !' },
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
              <TrendingUp size={28} color="#60a5fa" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight:700, fontSize:13, marginBottom:4 }}>Économie Numérique Africaine</div>
                <div style={{ fontSize:12, color:'#475569', lineHeight:1.6 }}>Projetée à <strong style={{ color:'#60a5fa' }}>712 milliards $</strong> d&apos;ici 2050. AMDY LABS construit l&apos;infrastructure aujourd&apos;hui.</div>
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
              <p style={{ fontSize: 11, fontWeight: 700, color: '#60a5fa', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Prêt à commencer ?</p>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>Prêt à transformer<br />votre entreprise ?</h2>
              <p style={{ color: '#64748b', fontSize: 17, marginBottom: 44, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>Partagez votre idée. Nous la transformerons en produit numérique de classe mondiale. Appel de découverte gratuit — sans engagement.</p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '16px 38px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 40px rgba(26,110,245,0.35)' }}>
                  <Rocket size={18} /> Démarrer un projet
                </Link>
                <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d366', color: '#000', padding: '16px 38px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 40px rgba(37,211,102,0.25)' }}>
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section style={{ padding: '90px 24px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14, textAlign: 'center' }}>Questions fréquentes</p>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, textAlign: 'center', marginBottom: 48, letterSpacing: '-0.02em' }}>Questions courantes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQ.map(([q, a], i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 12, overflow: 'hidden' }}>
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
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
    </div>
  )
}
