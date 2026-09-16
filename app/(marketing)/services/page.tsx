'use client'
import Link from 'next/link'
import { Smartphone, Globe, Store, Cloud, ShoppingCart, Zap, Palette, Bot, CheckCircle2, ArrowRight, MessageCircle, Star, Shield, Clock, TrendingUp, Award, Users } from 'lucide-react'
import { useLang } from '@/lib/lang'

const T = {
  fr: {
    heroTag: 'Ce que nous construisons',
    heroTitle1: 'NOS', heroTitle2: 'SERVICES',
    heroSub: 'Des solutions digitales modernes et complètes pour transformer votre entreprise et conquérir les marchés africains.',
    heroCta: 'Explorer nos services',
    whyTitle1: 'POURQUOI', whyTitle2: 'NOUS CHOISIR',
    whySub: 'Découvrez ce qui nous distingue dans le monde du digital africain',
    why: [
      { title: 'EXPERTISE PROUVÉE', desc: 'Notre équipe apporte des années d\'expérience dans le développement de produits digitaux pour les marchés africains.' },
      { title: 'SÉCURITÉ', desc: 'Nous priorisons la sécurité de vos données avec des protocoles et pratiques de pointe.' },
      { title: 'SUPPORT 24/7', desc: 'Surveillance et support en continu pour garantir que vos opérations ne s\'arrêtent jamais.' },
      { title: 'SOLUTIONS ÉVOLUTIVES', desc: 'Développez votre entreprise avec une infrastructure qui évolue avec vos besoins.' },
      { title: 'ULTRA RAPIDE', desc: 'Solutions optimisées qui délivrent des performances et une vitesse exceptionnelles.' },
      { title: 'PORTÉE MONDIALE', desc: 'Déployez vos applications plus près de vos utilisateurs avec notre infrastructure distribuée.' },
    ],
    servicesTitle1: 'TOUS NOS', servicesTitle2: 'SERVICES',
    servicesSub: 'De l\'idée à la production — nous construisons, lançons et soutenons des produits de classe mondiale.',
    learnMore: 'En savoir plus',
    ctaTitle: 'Prêt à démarrer votre projet ?',
    ctaSub: 'Parlez-nous de votre idée. Appel de découverte gratuit — sans engagement.',
    ctaBtn1: 'Démarrer un projet', ctaBtn2: 'WhatsApp',
  },
  en: {
    heroTag: 'What We Build',
    heroTitle1: 'OUR', heroTitle2: 'SERVICES',
    heroSub: 'Modern, comprehensive digital solutions to transform your business and conquer African markets.',
    heroCta: 'Explore Our Services',
    whyTitle1: 'WHY', whyTitle2: 'CHOOSE US',
    whySub: 'Discover what sets us apart in the world of African digital solutions',
    why: [
      { title: 'PROVEN EXPERTISE', desc: 'Our team brings years of experience in building digital products for African markets.' },
      { title: 'SECURITY', desc: 'We prioritize your data\'s security with industry-leading protocols and practices.' },
      { title: '24/7 SUPPORT', desc: 'Round-the-clock monitoring and support to ensure your operations never stop.' },
      { title: 'SCALABLE SOLUTIONS', desc: 'Grow your business with infrastructure that scales with your needs.' },
      { title: 'LIGHTNING FAST', desc: 'Optimized solutions that deliver exceptional performance and speed.' },
      { title: 'GLOBAL REACH', desc: 'Deploy your applications closer to your users with our worldwide infrastructure.' },
    ],
    servicesTitle1: 'ALL OUR', servicesTitle2: 'SERVICES',
    servicesSub: 'From idea to production — we build, launch, and support world-class digital products.',
    learnMore: 'Learn more',
    ctaTitle: 'Ready to start your project?',
    ctaSub: 'Tell us about your idea. Free discovery call — no commitment.',
    ctaBtn1: 'Start a Project', ctaBtn2: 'WhatsApp',
  }
}

const WHY_ICONS = [Star, Shield, Clock, TrendingUp, Zap, Globe]

const SERVICES = [
  { Icon: Smartphone, fr: 'Applications Mobiles', en: 'Mobile Apps', color: '#1a6ef5', descFr: 'Applications Android et iOS natives et multiplateformes conçues pour les consommateurs africains. Rapides, utilisables hors connexion et magnifiquement designées.', descEn: 'Native & cross-platform Android and iOS apps built for African consumers. Fast, offline-capable, beautifully designed.', benefits: { fr: ['Android et iOS', 'Mode hors connexion', 'Intégration Mobile Money', 'Notifications WhatsApp'], en: ['Android & iOS', 'Offline mode', 'Mobile Money integration', 'WhatsApp notifications'] } },
  { Icon: Globe, fr: 'Sites Web', en: 'Websites', color: '#0891b2', descFr: 'Sites web modernes, rapides et responsifs qui transforment vos visiteurs en clients payants.', descEn: 'Modern, fast, responsive websites that turn visitors into paying customers.', benefits: { fr: ['SEO optimisé', 'Design mobile-first', 'Chargement rapide sur 2G', 'CMS facile'], en: ['SEO optimized', 'Mobile-first design', 'Fast on 2G', 'Easy CMS'] } },
  { Icon: Store, fr: 'Systèmes POS', en: 'POS Systems', color: '#059669', descFr: 'Systèmes de caisse alimentés par CaissePro. Wave, Orange Money, Free Money — tous intégrés nativement.', descEn: 'CaissePro-powered point-of-sale. Wave, Orange Money, Free Money — all natively integrated.', benefits: { fr: ['Wave & Orange Money', 'Gestion des stocks', 'Reçus WhatsApp', 'Rapports quotidiens'], en: ['Wave & Orange Money', 'Inventory management', 'WhatsApp receipts', 'Daily reports'] } },
  { Icon: Cloud, fr: 'Plateformes SaaS', en: 'SaaS Platforms', color: '#7c3aed', descFr: 'Plateformes logicielles SaaS multi-tenant complètes construites pour évoluer à travers l\'Afrique.', descEn: 'Full multi-tenant SaaS platforms built to scale across Africa.', benefits: { fr: ['Multi-tenant', 'Facturation abonnement', 'Rôles & permissions', 'API-first'], en: ['Multi-tenant', 'Subscription billing', 'Roles & permissions', 'API-first'] } },
  { Icon: ShoppingCart, fr: 'E-Commerce', en: 'E-Commerce', color: '#dc2626', descFr: 'Boutiques en ligne complètes avec passerelles de paiement africaines et commandes WhatsApp.', descEn: 'Full online stores with African payment gateways and WhatsApp ordering.', benefits: { fr: ['CinetPay & PayDunya', 'Commandes WhatsApp', 'Gestion catalogue', 'Multilingue'], en: ['CinetPay & PayDunya', 'WhatsApp ordering', 'Catalog management', 'Multilingual'] } },
  { Icon: Zap, fr: 'Automatisation', en: 'Automation', color: '#d97706', descFr: 'Automatisez les tâches répétitives, notifications, rapports et flux de travail pour gagner du temps.', descEn: 'Automate repetitive tasks, notifications, reports and workflows to save time and scale.', benefits: { fr: ['Automatisation WhatsApp', 'Rapports auto', 'Alertes de stock', 'Flux personnalisés'], en: ['WhatsApp automation', 'Auto reports', 'Stock alerts', 'Custom workflows'] } },
  { Icon: Palette, fr: 'Branding & Marketing', en: 'Branding & Marketing', color: '#db2777', descFr: 'Identité de marque professionnelle, réseaux sociaux et campagnes marketing digital.', descEn: 'Professional brand identity, social media management and digital marketing campaigns.', benefits: { fr: ['Logo & identité', 'Contenu réseaux', 'Publicités digitales', 'Stratégie de croissance'], en: ['Logo & identity', 'Social content', 'Digital ads', 'Growth strategy'] } },
  { Icon: Bot, fr: 'Solutions IA', en: 'AI Solutions', color: '#0891b2', descFr: 'Intégrez l\'IA dans vos produits — chatbots, analyses intelligentes, moteurs de personnalisation.', descEn: 'Integrate AI into your products — chatbots, smart analytics, personalization engines.', benefits: { fr: ['Chatbots IA', 'Analyses intelligentes', 'Recommandations', 'NLP Français/Wolof'], en: ['AI Chatbots', 'Smart analytics', 'Recommendations', 'French/Wolof NLP'] } },
]

export default function ServicesPage() {
  const { lang } = useLang()
  const t = T[lang]
  const isEn = lang === 'en'

  return (
    <div style={{ paddingTop: 72, background: '#fff', color: '#1a1a2e' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f9ff 40%, #e8f0fe 100%)' }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, background: 'radial-gradient(circle, rgba(26,110,245,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,230,118,0.07) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '30%', left: '15%', width: 180, height: 180, background: 'radial-gradient(circle, rgba(26,110,245,0.05) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div style={{ position: 'relative', textAlign: 'center', padding: '80px 24px', maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>{t.heroTag}</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 22, color: '#0f172a' }}>
            {t.heroTitle1}&nbsp;
            <span style={{ color: '#1a6ef5', textDecoration: 'underline', textDecorationColor: '#1a6ef5', textUnderlineOffset: 8 }}>{t.heroTitle2}</span>
          </h1>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.72 }}>{t.heroSub}</p>
          <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1a6ef5', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', letterSpacing: '0.04em', boxShadow: '0 4px 24px rgba(26,110,245,0.25)' }}>
            {t.heroCta} <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: '90px 24px', background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 14 }}>
              {t.whyTitle1}&nbsp;
              <span style={{ color: '#1a6ef5', textDecoration: 'underline', textDecorationColor: '#1a6ef5', textUnderlineOffset: 8 }}>{t.whyTitle2}</span>
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>{t.whySub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {t.why.map((item, i) => {
              const Icon = WHY_ICONS[i]
              return (
                <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '36px 28px', textAlign: 'center', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9', transition: 'all 0.3s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 20px 60px rgba(26,110,245,0.12)'; el.style.borderColor = '#dbeafe' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)'; el.style.borderColor = '#f1f5f9' }}>
                  <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Icon size={24} color="#1a6ef5" />
                  </div>
                  <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', color: '#0f172a', marginBottom: 12 }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section id="services" style={{ padding: '80px 24px 100px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 14 }}>
              {t.servicesTitle1}&nbsp;
              <span style={{ color: '#1a6ef5', textDecoration: 'underline', textDecorationColor: '#1a6ef5', textUnderlineOffset: 8 }}>{t.servicesTitle2}</span>
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>{t.servicesSub}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', boxShadow: '0 2px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', transition: 'all 0.3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.1)`; el.style.borderColor = '#dbeafe' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)'; el.style.borderColor = '#f1f5f9' }}>
                {/* Icon */}
                <div style={{ width: 52, height: 52, background: `${s.color}14`, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <s.Icon size={24} color={s.color} />
                </div>
                {/* Title */}
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: 10 }}>{isEn ? s.en : s.fr}</h3>
                {/* Description */}
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, marginBottom: 18 }}>{isEn ? s.descEn : s.descFr}</p>
                {/* Benefits */}
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                  {s.benefits[lang].map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: '#475569' }}>
                      <CheckCircle2 size={14} color={s.color} style={{ flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: s.color, fontWeight: 700, textDecoration: 'none' }}>
                  {t.learnMore} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #04081a, #0d1f4a)', borderRadius: 20, padding: '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 400, height: 400, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(100px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.08 }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 14 }}>{t.ctaTitle}</h2>
              <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.7 }}>{t.ctaSub}</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1a6ef5', color: '#fff', padding: '14px 30px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.35)' }}>
                  <ArrowRight size={15} /> {t.ctaBtn1}
                </Link>
                <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d366', color: '#000', padding: '14px 30px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                  <MessageCircle size={15} /> {t.ctaBtn2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
