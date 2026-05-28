import Link from 'next/link'
import { Smartphone, Globe, Store, Cloud, ShoppingCart, Zap, Palette, Bot, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'

const SERVICES = [
  { Icon: Smartphone, label: 'Développement d\'Applications Mobiles', color: '#60a5fa', desc: 'Applications Android et iOS natives et multiplateformes conçues pour les consommateurs africains. Rapides, utilisables hors connexion et magnifiquement designées.', benefits: ['Android et iOS','Capacité hors connexion','Intégration Mobile Money','Notifications WhatsApp','Interface français/wolof/anglais'] },
  { Icon: Globe, label: 'Développement Web', color: '#00c8ff', desc: 'Sites web modernes, rapides et responsifs qui transforment vos visiteurs en clients. Des pages d\'atterrissage aux plateformes e-commerce complètes.', benefits: ['Optimisé pour le SEO','Design mobile-first','Chargement rapide sur 2G/3G','CMS facile à utiliser','Focalisé sur le marché africain'] },
  { Icon: Store, label: 'Systèmes POS & Logiciels de Gestion', color: '#00e676', desc: 'Systèmes de caisse alimentés par CaissePro. Wave, Orange Money, Free Money — tous intégrés nativement pour les commerçants africains.', benefits: ['Wave & Orange Money','Gestion des stocks','Reçus WhatsApp','Suivi des crédits clients','Rapports & analytiques quotidiens'] },
  { Icon: Cloud, label: 'Plateformes SaaS', color: '#a78bfa', desc: 'Plateformes logicielles SaaS multi-tenant complètes construites pour évoluer à travers l\'Afrique. Architecture, sécurité et évolutivité gérées par nos soins.', benefits: ['Architecture multi-tenant','Facturation par abonnement','Supabase & Next.js','Contrôle d\'accès par rôle','Conception API-first'] },
  { Icon: ShoppingCart, label: 'Solutions E-Commerce', color: '#fbbf24', desc: 'Boutiques en ligne complètes avec passerelles de paiement africaines, commandes WhatsApp et support multilingue pour les marchés africains.', benefits: ['CinetPay & PayDunya','Commandes WhatsApp','Catalogue produits','Gestion des commandes','Multilingue'] },
  { Icon: Zap, label: 'Systèmes d\'Automatisation', color: '#f97316', desc: 'Automatisez les tâches répétitives, les notifications, les rapports et les flux de travail pour gagner du temps et évoluer efficacement.', benefits: ['Automatisation WhatsApp','Automatisation des rapports','Alertes de stock','Rappels de paiement','Flux de travail personnalisés'] },
  { Icon: Palette, label: 'Branding & Marketing', color: '#ec4899', desc: 'Identité de marque professionnelle, gestion des réseaux sociaux et campagnes de marketing digital qui développent votre audience.', benefits: ['Logo & identité visuelle','Contenu réseaux sociaux','Publicités digitales','Stratégie de contenu','Conseil en croissance'] },
  { Icon: Bot, label: 'Intégrations IA', color: '#c77dff', desc: 'Intégrez l\'IA de pointe dans vos produits — chatbots, analyses intelligentes, moteurs de personnalisation et assistants vocaux.', benefits: ['Chatbots IA','Analyses intelligentes','Recommandations produits','Support client automatisé','NLP français & wolof'] },
]

export const metadata = { title: 'Services — AMDY LABS', description: 'Applications mobiles, sites web, systèmes POS, plateformes SaaS — services digitaux complets pour les entreprises africaines.' }

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ position: 'relative', padding: '110px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #0b1d4a 0%, transparent 65%)' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Ce que nous construisons</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px,6vw,68px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>Tout ce qu&apos;il faut pour<br />vous digitaliser</h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.75 }}>De l&apos;idée à la production — AMDY LABS construit, lance et soutient des produits digitaux de classe mondiale pour les entreprises africaines.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 30px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.3)' }}>
            Obtenir un devis gratuit <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section style={{ padding: '60px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 20, padding: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 52, height: 52, background: `${s.color}15`, border: `1px solid ${s.color}33`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.Icon size={24} color={s.color} />
                </div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 17, fontWeight: 700 }}>{s.label}</h3>
              </div>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                {s.benefits.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                    <CheckCircle2 size={15} color="#00e676" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#94a3b8' }}>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Commencer <ArrowRight size={13} /></Link>
            </div>
          ))}
        </div>
      </section>

      <div style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', background: 'linear-gradient(135deg,#0a1628,#0d1f4a)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 20, padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 36, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>Pas sûr par où commencer ?</h2>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Réservez un appel de découverte gratuit de 30 minutes avec Amdy. Nous élaborerons ensemble la solution idéale pour votre entreprise.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.3)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Réserver une consultation gratuite
            </Link>
            <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ background: '#25d366', color: '#000', padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <MessageCircle size={16} /> +1 (586) 344-2378
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
