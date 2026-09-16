'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useLang } from '@/lib/lang'

const T = {
  fr: {
    tag: 'Nos Produits', title1: 'CE QUE NOUS', title2: 'AVONS CONSTRUIT',
    sub: 'De vraies solutions pour de vraies problématiques africaines — des systèmes de caisse aux plateformes sociales.',
    live: 'En ligne', dev: 'En développement',
    similarBtn: 'Construire quelque chose de similaire',
    moreTag: 'Et bien plus', moreTitle1: 'TOUJOURS EN', moreTitle2: 'CONSTRUCTION',
    moreSub: 'AMDY LABS construit continuellement de nouvelles solutions pour les marchés africains.',
    others: [
      { name: 'Tableaux de Bord', desc: 'Analytiques personnalisés pour entreprises africaines.', tag: 'Sur mesure' },
      { name: 'Boutiques E-Commerce', desc: 'Boutiques avec paiements africains et commandes WhatsApp.', tag: 'E-Commerce' },
      { name: 'Outils IA', desc: 'Automatisation intelligente pour évoluer sans augmenter les effectifs.', tag: 'IA' },
      { name: 'Logiciels Entreprise', desc: 'ERP, CRM et outils de gestion interne sur mesure.', tag: 'Entreprise' },
    ],
    ctaTitle: 'Votre projet est le suivant', ctaSub: 'Partagez votre idée et nous la transformerons en produit de classe mondiale.', ctaBtn: 'Démarrer un projet',
  },
  en: {
    tag: 'Our Products', title1: 'WHAT WE HAVE', title2: 'BUILT',
    sub: 'Real solutions for real African problems — from POS systems to social platforms.',
    live: 'Live', dev: 'In Development',
    similarBtn: 'Build something similar',
    moreTag: 'And more', moreTitle1: 'ALWAYS', moreTitle2: 'BUILDING',
    moreSub: 'AMDY LABS continuously builds new solutions for African markets.',
    others: [
      { name: 'Dashboards', desc: 'Custom analytics for African businesses across all sectors.', tag: 'Custom' },
      { name: 'E-Commerce Stores', desc: 'Online stores with African payment gateways and WhatsApp ordering.', tag: 'E-Commerce' },
      { name: 'AI Tools', desc: 'Smart automation to scale without increasing headcount.', tag: 'AI' },
      { name: 'Enterprise Software', desc: 'Custom ERP, CRM and internal management tools.', tag: 'Enterprise' },
    ],
    ctaTitle: 'Your project is next', ctaSub: 'Share your idea and we\'ll turn it into a world-class digital product.', ctaBtn: 'Start a Project',
  }
}

const PROJECTS = [
  {
    name: 'CaissePro', status: 'live',
    subFr: 'Caisse & Gestion d\'entreprise SaaS', subEn: 'POS & Business Management SaaS',
    descFr: 'Système de caisse moderne et multi-tenant conçu pour les commerçants africains. PWA hors connexion avec reçus WhatsApp, suivi des crédits clients, gestion des stocks, rapports quotidiens et intégration native Wave/Orange Money.',
    descEn: 'Modern multi-tenant POS system designed for African merchants. Offline PWA with WhatsApp receipts, customer credit tracking, inventory management, daily reports and native Wave/Orange Money integration.',
    logo: '/logo-caissepro.png', logoBg: '#0d1f4a',
    accentColor: '#1a6ef5',
    tags: ['Next.js 16', 'Supabase', 'PWA', 'Wave API', 'Orange Money'],
    features: { fr: ['Gestion des stocks', 'Reçus WhatsApp', 'Crédit clients', 'Rapports', 'Boutique en ligne', 'Multi-employés'], en: ['Inventory management', 'WhatsApp receipts', 'Customer credit', 'Reports', 'Online store', 'Multi-staff'] },
    link: 'https://caissepro.app',
  },
  {
    name: 'ImmoPro', status: 'live',
    subFr: 'Plateforme Immobilière — Sénégal', subEn: 'Real Estate Platform — Senegal',
    descFr: 'Plateforme immobilière moderne pour le marché sénégalais. Annonces, visites virtuelles, agents certifiés et transactions sécurisées. Premier entrant sur un secteur de 2 milliards de dollars.',
    descEn: 'Modern real estate platform for the Senegalese market. Listings, virtual tours, certified agents and secure transactions. First-mover in a $2B+ sector.',
    logo: '/logo-immopro.png', logoBg: '#0a1a6e',
    accentColor: '#f59e0b',
    tags: ['Next.js', 'Supabase', 'Maps', 'Sénégal'],
    features: { fr: ['Annonces immobilières', 'Visites virtuelles', 'Agents certifiés', 'Transactions sécurisées', 'Recherche avancée', 'Multi-villes'], en: ['Property listings', 'Virtual tours', 'Certified agents', 'Secure transactions', 'Advanced search', 'Multi-city'] },
    link: 'https://immopro.agency',
  },
  {
    name: 'VYBZ Social', status: 'live',
    subFr: 'Plateforme Sociale & Vie Nocturne', subEn: 'Social & Nightlife Platform',
    descFr: '"C\'est quoi les VYBZ ce soir ?" — Une plateforme sociale vibrante connectant les gens aux événements, à la vie nocturne et aux expériences à Dakar et dans toute la diaspora africaine.',
    descEn: '"What are the VYBZ tonight?" — A vibrant social platform connecting people to events, nightlife and experiences in Dakar and the African diaspora.',
    logo: '/logo-vybz.png', logoBg: '#150020',
    accentColor: '#8b5cf6',
    tags: ['React Native', 'Firebase', 'Maps', 'Events'],
    features: { fr: ['Découverte d\'événements', 'Vie nocturne', 'Réseau social', 'Achat billets', 'Groupes', 'Profils créateurs'], en: ['Event discovery', 'Nightlife', 'Social network', 'Ticket buying', 'Groups', 'Creator profiles'] },
    link: 'https://vybz.city',
  },
  {
    name: 'Mon Livreur', status: 'dev',
    subFr: 'Livraison & Logistique', subEn: 'Delivery & Logistics',
    descFr: '"Livrer plus vite, plus loin, pour vous." Plateforme complète de livraison et logistique en temps réel pour les entreprises africaines. Dispatch intelligent, suivi GPS et notifications WhatsApp.',
    descEn: '"Deliver faster, further, for you." Full real-time delivery and logistics platform for African businesses. Smart dispatch, GPS tracking and WhatsApp notifications.',
    logo: '/logo-monlivreur.png', logoBg: '#0d2a1a',
    accentColor: '#059669',
    tags: ['React Native', 'Node.js', 'Maps API', 'WhatsApp'],
    features: { fr: ['Suivi en temps réel', 'Dispatch livreurs', 'Alertes WhatsApp', 'Optimisation routes', 'Gestion commandes', 'Analytiques'], en: ['Real-time tracking', 'Driver dispatch', 'WhatsApp alerts', 'Route optimization', 'Order management', 'Analytics'] },
    link: null,
  },
]

export default function ProjectsPage() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <div style={{ paddingTop: 72, background: '#fff', color: '#0f172a' }}>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '100px 24px 80px', background: 'linear-gradient(160deg, #f8fafc 0%, #eff6ff 50%, #f0fff8 100%)', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: -80, right: 100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(26,110,245,0.07) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>{t.tag}</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px, 6vw, 66px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 22 }}>
            {t.title1}<br /><span style={{ color: '#1a6ef5' }}>{t.title2}</span>
          </h1>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 520, margin: '0 auto', lineHeight: 1.72 }}>{t.sub}</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: '60px 24px 80px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.name} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 20, overflow: 'hidden', display: 'grid', gridTemplateColumns: i % 2 === 0 ? '320px 1fr' : '1fr 320px', transition: 'all 0.3s', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              className="proj-card"
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)'; el.style.borderColor = '#bfdbfe' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; el.style.borderColor = '#e2e8f0' }}>

              {/* Logo panel */}
              {i % 2 === 0 && (
                <div style={{ background: p.logoBg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, gap: 16, minHeight: 280 }}>
                  <div style={{ width: 120, height: 120, borderRadius: 24, overflow: 'hidden', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
                    <Image src={p.logo} alt={p.name} width={120} height={120} style={{ objectFit: 'contain' }} />
                  </div>
                  <span style={{ background: p.status === 'live' ? 'rgba(0,230,118,0.15)' : 'rgba(255,255,255,0.1)', color: p.status === 'live' ? '#00e676' : 'rgba(255,255,255,0.6)', border: `1px solid ${p.status === 'live' ? 'rgba(0,230,118,0.3)' : 'rgba(255,255,255,0.2)'}`, borderRadius: 20, padding: '5px 14px', fontSize: 11, fontWeight: 700 }}>
                    {p.status === 'live' ? t.live : t.dev}
                  </span>
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>{p.link.replace('https://', '')} <ExternalLink size={10} /></a>}
                </div>
              )}

              {/* Content panel */}
              <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'inline-block', background: `${p.accentColor}12`, border: `1px solid ${p.accentColor}30`, borderRadius: 6, padding: '4px 12px', fontSize: 11, color: p.accentColor, fontWeight: 600, marginBottom: 14, alignSelf: 'flex-start' }}>
                  {lang === 'fr' ? p.subFr : p.subEn}
                </div>
                <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 12 }}>{p.name}</h2>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, marginBottom: 20 }}>{lang === 'fr' ? p.descFr : p.descEn}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.tags.map(tag => <span key={tag} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 5, padding: '3px 10px', fontSize: 11, color: '#64748b' }}>{tag}</span>)}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 24 }}>
                  {p.features[lang].map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: '#64748b' }}>
                      <span style={{ width: 14, height: 14, background: p.accentColor, color: '#fff', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 900, flexShrink: 0 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: p.accentColor, color: '#fff', padding: '11px 22px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none', alignSelf: 'flex-start' }}>
                  {t.similarBtn} <ArrowRight size={13} />
                </Link>
              </div>

              {/* Logo panel right */}
              {i % 2 !== 0 && (
                <div style={{ background: p.logoBg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, gap: 16, minHeight: 280 }}>
                  <div style={{ width: 120, height: 120, borderRadius: 24, overflow: 'hidden', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
                    <Image src={p.logo} alt={p.name} width={120} height={120} style={{ objectFit: 'contain' }} />
                  </div>
                  <span style={{ background: p.status === 'live' ? 'rgba(0,230,118,0.15)' : 'rgba(255,255,255,0.1)', color: p.status === 'live' ? '#00e676' : 'rgba(255,255,255,0.6)', border: `1px solid ${p.status === 'live' ? 'rgba(0,230,118,0.3)' : 'rgba(255,255,255,0.2)'}`, borderRadius: 20, padding: '5px 14px', fontSize: 11, fontWeight: 700 }}>
                    {p.status === 'live' ? t.live : t.dev}
                  </span>
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>{p.link.replace('https://', '')} <ExternalLink size={10} /></a>}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MORE */}
      <section style={{ padding: '60px 24px 80px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>{t.moreTag}</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 10 }}>
              {t.moreTitle1} <span style={{ color: '#1a6ef5' }}>{t.moreTitle2}</span>
            </h2>
            <p style={{ fontSize: 15, color: '#64748b' }}>{t.moreSub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 14 }}>
            {t.others.map(o => (
              <div key={o.name} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '24px 22px', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#bfdbfe'; el.style.boxShadow = '0 8px 24px rgba(26,110,245,0.08)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e2e8f0'; el.style.boxShadow = 'none' }}>
                <div style={{ display: 'inline-block', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 4, padding: '3px 9px', fontSize: 10, color: '#1a6ef5', marginBottom: 12 }}>{o.tag}</div>
                <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{o.name}</h4>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '70px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #04081a, #0d1f4a)', borderRadius: 20, padding: '60px 44px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 350, height: 350, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(100px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.07 }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 14 }}>{t.ctaTitle}</h2>
              <p style={{ color: '#64748b', fontSize: 15, marginBottom: 32, maxWidth: 400, margin: '0 auto 32px', lineHeight: 1.7 }}>{t.ctaSub}</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1a6ef5', color: '#fff', padding: '14px 32px', borderRadius: 9, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.35)' }}>
                <ArrowRight size={15} /> {t.ctaBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:700px){.proj-card{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}
