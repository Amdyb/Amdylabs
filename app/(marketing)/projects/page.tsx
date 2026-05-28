import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const PROJECTS = [
  {
    name: 'CaissePro',
    sub: 'Caisse & Gestion d\'entreprise SaaS',
    desc: 'Système de caisse et de gestion d\'entreprise moderne et multi-tenant conçu de A à Z pour les commerçants africains. PWA hors connexion avec reçus WhatsApp, suivi des crédits clients, gestion des stocks, rapports quotidiens, support CFA et intégration native Wave/Orange Money.',
    logo: '/logo-caissepro.png', logoBg: '#fff',
    color: 'linear-gradient(135deg, #0d1f4a, #1a3a8f)',
    tags: ['Next.js 16', 'Supabase', 'PWA', 'Wave API', 'Orange Money', 'TypeScript'],
    features: ['Gestion des stocks','Reçus WhatsApp','Suivi des crédits clients','Rapports & analytiques','Boutique en ligne intégrée','Support devise CFA','Interface mobile-first','Rôles multi-employés'],
    status: 'En ligne', link: 'https://caissepro.app',
  },
  {
    name: 'VYBZ Social',
    sub: 'Plateforme Sociale & Vie Nocturne — Dakar',
    desc: '"C\'est quoi les VYBZ ce soir ?" — Une plateforme sociale vibrante connectant les gens aux événements, à la vie nocturne et aux expériences à Dakar et dans toute la diaspora africaine.',
    logo: '/logo-vybz.png', logoBg: '#0a0010',
    color: 'linear-gradient(135deg, #150020, #3d0060)',
    tags: ['React Native', 'Firebase', 'Maps API', 'Événements', 'Vie nocturne'],
    features: ['Découverte d\'événements','Annonces vie nocturne','Réseau social','Achat de billets','Groupes communautaires','Focus Dakar & Afrique','Profils créateurs','Expériences en direct'],
    status: 'En développement', link: null,
  },
  {
    name: 'Mon Livreur',
    sub: 'Plateforme de Livraison & Logistique',
    desc: '"Livrer plus vite, plus loin, pour vous." Plateforme complète de livraison et logistique conçue pour les entreprises africaines. Suivi en temps réel, dispatch intelligent des livreurs et notifications WhatsApp automatiques.',
    logo: '/logo-monlivreur.png', logoBg: '#fff',
    color: 'linear-gradient(135deg, #0d2a1a, #1a6e3a)',
    tags: ['React Native', 'Node.js', 'Google Maps', 'API WhatsApp', 'Socket.io'],
    features: ['Suivi en temps réel','Dispatch livreurs','Optimisation des routes','Alertes WhatsApp','Application client','Tableau de bord','Gestion des commandes','Analytiques livraison'],
    status: 'En développement', link: null,
  },
]

const AUTRES = [
  { name: 'Tableaux de Bord', desc: 'Tableaux de bord analytiques personnalisés pour les entreprises africaines dans divers secteurs.', tag: 'Sur mesure' },
  { name: 'Boutiques E-Commerce', desc: 'Boutiques en ligne modernes avec paiements africains locaux, commandes WhatsApp et support multilingue.', tag: 'E-Commerce' },
  { name: 'Outils d\'Automatisation IA', desc: 'Systèmes d\'automatisation intelligents pour économiser du temps et évoluer sans augmenter les effectifs.', tag: 'IA / Automatisation' },
  { name: 'Logiciels d\'Entreprise', desc: 'ERP, CRM et outils de gestion interne sur mesure pour les entreprises africaines.', tag: 'Entreprise' },
]

export const metadata = {
  title: 'Projets — AMDY LABS | CaissePro, VYBZ, Mon Livreur',
  description: 'CaissePro, VYBZ Social, Mon Livreur et plus — découvrez ce qu\'AMDY LABS a construit pour les entreprises africaines.',
}

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ position: 'relative', padding: '110px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #0b1d4a 0%, transparent 65%)' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Nos Produits</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px,6vw,68px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>Ce que nous avons construit</h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>De vraies solutions pour de vraies problématiques africaines — des systèmes de caisse aux plateformes de livraison.</p>
        </div>
      </section>

      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.name} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 24, overflow: 'hidden', display: 'grid', gridTemplateColumns: i%2===0 ? '360px 1fr' : '1fr 360px' }} className="proj-grid">
              {i%2===0 && (
                <div style={{ background: p.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, gap: 20, minHeight: 340 }}>
                  <div style={{ width: 140, height: 140, borderRadius: p.name==='VYBZ Social' ? 20 : 28, overflow: 'hidden', background: p.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                    <Image src={p.logo} alt={p.name} width={140} height={140} style={{ objectFit: 'contain' }} />
                  </div>
                  <span style={{ background: p.status==='En ligne' ? 'rgba(0,230,118,0.15)' : 'rgba(96,165,250,0.15)', color: p.status==='En ligne' ? '#00e676' : '#60a5fa', border: `1px solid ${p.status==='En ligne' ? 'rgba(0,230,118,0.3)' : 'rgba(96,165,250,0.3)'}`, borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700 }}>{p.status}</span>
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" style={{ color: '#60a5fa', fontSize: 12, textDecoration: 'none', opacity: 0.7 }}>{p.link} ↗</a>}
                </div>
              )}
              <div style={{ padding: '40px 36px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 6, padding: '4px 12px', fontSize: 11, color: '#60a5fa', fontWeight: 600, marginBottom: 16 }}>{p.sub}</div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 34, fontWeight: 800, marginBottom: 14, letterSpacing: '-0.02em' }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.82, marginBottom: 22 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 24 }}>
                  {p.tags.map(t => <span key={t} style={{ background: 'rgba(30,45,74,0.6)', border: '1px solid rgba(30,45,74,0.8)', borderRadius: 5, padding: '4px 10px', fontSize: 11, color: '#475569' }}>{t}</span>)}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 28 }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#64748b' }}>
                      <span style={{ width: 16, height: 16, background: '#00e676', color: '#000', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 900, flexShrink: 0 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Construire quelque chose de similaire <ArrowRight size={13} /></Link>
              </div>
              {i%2!==0 && (
                <div style={{ background: p.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, gap: 20, minHeight: 340 }}>
                  <div style={{ width: 140, height: 140, borderRadius: p.name==='VYBZ Social' ? 20 : 28, overflow: 'hidden', background: p.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                    <Image src={p.logo} alt={p.name} width={140} height={140} style={{ objectFit: 'contain' }} />
                  </div>
                  <span style={{ background: 'rgba(96,165,250,0.15)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700 }}>En développement</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 24px 100px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>Et bien plus encore</h2>
          <p style={{ color: '#64748b', fontSize: 15, marginBottom: 36 }}>AMDY LABS construit continuellement des solutions dans tous les secteurs.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
            {AUTRES.map(p => (
              <div key={p.name} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 16, padding: 28 }}>
                <div style={{ display: 'inline-block', background: 'rgba(26,110,245,0.08)', border: '1px solid rgba(26,110,245,0.15)', borderRadius: 4, padding: '3px 8px', fontSize: 10, color: '#60a5fa', marginBottom: 14 }}>{p.tag}</div>
                <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{p.name}</h4>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.proj-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}
