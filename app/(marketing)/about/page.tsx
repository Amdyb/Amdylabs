import Link from 'next/link'
import { Trophy, Handshake, Lightbulb, Lock, Zap, Leaf, Target, Telescope, Globe, MessageCircle, ArrowRight } from 'lucide-react'

const VALEURS = [
  { Icon: Trophy, title: 'Excellence', desc: 'Qualité Silicon Valley aux prix africains. Aucun raccourci, aucun compromis sur la qualité du travail.' },
  { Icon: Handshake, title: 'Partenariat', desc: 'Nous devenons votre partenaire technologique à long terme — pas seulement un prestataire.' },
  { Icon: Lightbulb, title: 'Innovation', desc: 'Technologie mondiale de pointe fusionnée avec une connaissance profonde du marché africain.' },
  { Icon: Lock, title: 'Confiance', desc: 'Tarification transparente, communication honnête et livraison fiable. Toujours.' },
  { Icon: Zap, title: 'Rapidité', desc: 'Livraison agile et itération rapide. Nous avançons à la vitesse de votre entreprise.' },
  { Icon: Leaf, title: 'Croissance', desc: 'Chaque produit est conçu pour évoluer avec vous à travers l\'Afrique et au-delà.' },
]

const EQUIPE = [
  { pays: 'États-Unis', desc: 'Direction Ingénierie & Produit' },
  { pays: 'France', desc: 'Design & Développement Frontend' },
  { pays: 'Sénégal', desc: 'Opérations Afrique & Business' },
  { pays: 'Côte d\'Ivoire', desc: 'Développement Mobile' },
  { pays: 'Maroc', desc: 'Backend & Infrastructure' },
  { pays: 'Et plus...', desc: 'Talents africains distribués dans le monde' },
]

export const metadata = {
  title: 'À propos d\'AMDY LABS — Notre histoire & mission',
  description: 'Découvrez AMDY LABS, fondé par Amdy Boubacar — une entreprise tech africaine construisant des solutions numériques de classe mondiale.',
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ position: 'relative', padding: '110px 24px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 50% 0%, #0b1d4a 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Notre Histoire</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px,6vw,68px)', fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Construit en Afrique,<br />
            <span style={{ background: 'linear-gradient(135deg,#60a5fa,#00c8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>pour l&apos;Afrique</span>,<br />
            par des Africains
          </h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 640, margin: '0 auto', lineHeight: 1.75 }}>
            AMDY LABS a été fondé avec une seule mission : combler le fossé technologique qui empêche les entreprises africaines de rivaliser au niveau mondial.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 34, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em' }}>L&apos;histoire d&apos;AMDY LABS</h2>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.85, marginBottom: 18 }}>
              AMDY LABS a été fondé par <strong style={{ color: '#e2e8f0' }}>Amdy Boubacar</strong> aux côtés d&apos;un réseau de talentueux développeurs et créatifs africains vivant aux États-Unis, en Europe et en Afrique.
            </p>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.85, marginBottom: 18 }}>
              L&apos;entreprise est née d&apos;une vision simple mais puissante : les entrepreneurs africains méritent des logiciels de classe mondiale, des outils digitaux modernes et des systèmes d&apos;entreprise évolutifs — à des prix adaptés aux réalités africaines.
            </p>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.85, marginBottom: 18 }}>
              De CaissePro, notre système de caisse phare au service des commerçants africains, à VYBZ Social et Mon Livreur — chaque produit que nous construisons résout un vrai problème d&apos;entreprise africaine.
            </p>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.85 }}>
              Nous croyons que l&apos;Afrique n&apos;est pas seulement un marché — c&apos;est l&apos;avenir. Et nous sommes là pour construire cet avenir, un produit à la fois.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'linear-gradient(135deg,#0d1f4a,#0a1628)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 18, padding: 28 }}>
              <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 22, marginBottom: 28 }}>Mission & Vision</h3>
              {[
                { Icon: Target, title: 'Mission', text: 'Aider les entreprises africaines à se moderniser grâce à la technologie en livrant des solutions digitales abordables et de classe mondiale.' },
                { Icon: Telescope, title: 'Vision', text: 'Devenir l\'un des principaux écosystèmes technologiques africains — en construisant des produits de classe mondiale pour les réalités africaines et les standards mondiaux.' },
                { Icon: Globe, title: 'Objectif d\'Impact', text: 'Équiper 10 000+ entreprises africaines d\'outils digitaux d\'ici 2030, dans 20+ pays du continent.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
                  <item.Icon size={24} color="#60a5fa" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 18, padding: 24, display: 'flex', gap: 18, alignItems: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#1a6ef5,#00c8ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, system-ui', fontWeight: 800, fontSize: 18, flexShrink: 0, color: '#fff' }}>AB</div>
              <div>
                <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Amdy Boubacar</div>
                <div style={{ fontSize: 12, color: '#60a5fa', marginBottom: 6 }}>Fondateur & CEO, AMDY LABS</div>
                <div style={{ fontSize: 12, color: '#475569' }}>Entrepreneur · Technologue · Innovateur africain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '70px 24px 90px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Notre Équipe</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>Une équipe distribuée<br />de talents africains</h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>Développeurs, designers et stratèges du continent africain et de la diaspora — unis par une mission commune.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {EQUIPE.map(loc => (
              <div key={loc.pays} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 14, padding: '22px 20px', textAlign: 'center' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <Globe size={20} color="#60a5fa" />
                </div>
                <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{loc.pays}</div>
                <div style={{ fontSize: 12, color: '#475569' }}>{loc.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Ce en quoi nous croyons</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.02em' }}>Nos valeurs fondamentales</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {VALEURS.map(({ Icon, title, desc }) => (
              <div key={title} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#60a5fa" style={{ marginBottom: 16 }} />
                <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{title}</h4>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', textAlign: 'center', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 40, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>Rejoignez la mission</h2>
        <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>Que vous soyez client, investisseur ou développeur — AMDY LABS est l&apos;endroit où se construit l&apos;avenir numérique de l&apos;Afrique.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '15px 36px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.3)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Travailler avec nous <ArrowRight size={15} />
          </Link>
          <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ background: '#25d366', color: '#000', padding: '15px 36px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <MessageCircle size={15} /> WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
