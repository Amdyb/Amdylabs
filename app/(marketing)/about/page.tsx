'use client'
import Link from 'next/link'
import { Trophy, Handshake, Lightbulb, Lock, Zap, Leaf, Target, Telescope, Globe, MessageCircle, ArrowRight, Link2, MapPin, Users, TrendingUp } from 'lucide-react'
import { useLang } from '@/lib/lang'

const T = {
  fr: {
    storyTag: 'Notre Histoire', storyTitle1: 'CONSTRUIT EN AFRIQUE,', storyTitle2: 'POUR L\'AFRIQUE',
    storySub: 'AMDY LABS a été fondé avec une seule mission : combler le fossé technologique qui empêche les entreprises africaines de rivaliser au niveau mondial.',
    p1: 'AMDY LABS a été fondé par Amdy Boubacar aux côtés d\'un réseau de talentueux développeurs et créatifs africains vivant aux États-Unis, en Europe et en Afrique.',
    p2: 'L\'entreprise est née d\'une vision simple mais puissante : les entrepreneurs africains méritent des logiciels de classe mondiale, des outils digitaux modernes et des systèmes d\'entreprise évolutifs — à des prix adaptés aux réalités africaines.',
    p3: 'De CaissePro, notre système de caisse phare, à VYBZ Social et ImmoPro — chaque produit que nous construisons résout un vrai problème d\'entreprise africaine.',
    missionTag: 'Mission & Vision',
    missionItems: [
      { title: 'Mission', text: 'Aider les entreprises africaines à se moderniser grâce à la technologie en livrant des solutions digitales abordables et de classe mondiale.' },
      { title: 'Vision', text: 'Devenir l\'un des principaux écosystèmes technologiques africains — en construisant des produits de classe mondiale pour les réalités africaines.' },
      { title: 'Objectif 2030', text: 'Équiper 10 000+ entreprises africaines d\'outils digitaux dans 20+ pays du continent.' },
    ],
    teamTag: 'Notre Équipe', teamTitle1: 'UN TALENT', teamTitle2: 'DISTRIBUÉ',
    teamSub: 'Développeurs, designers et stratèges du continent africain et de la diaspora — unis par une mission commune.',
    locations: [
      { city: 'Detroit, USA', role: 'Direction & Produit' },
      { city: 'France', role: 'Design & Frontend' },
      { city: 'Dakar, Sénégal', role: 'Opérations Afrique' },
      { city: 'Côte d\'Ivoire', role: 'Développement Mobile' },
      { city: 'Maroc', role: 'Backend & Infrastructure' },
      { city: 'Afrique & Diaspora', role: 'Talents distribués' },
    ],
    valuesTag: 'Nos Valeurs', valuesTitle1: 'CE EN QUOI', valuesTitle2: 'NOUS CROYONS',
    values: [
      { title: 'Excellence', desc: 'Qualité Silicon Valley aux prix africains. Aucun raccourci.' },
      { title: 'Partenariat', desc: 'Votre partenaire technologique à long terme, pas juste un prestataire.' },
      { title: 'Innovation', desc: 'Technologie mondiale fusionnée avec la connaissance africaine.' },
      { title: 'Confiance', desc: 'Tarification transparente, communication honnête, livraison fiable.' },
      { title: 'Rapidité', desc: 'Livraison agile. Nous avançons à la vitesse de votre entreprise.' },
      { title: 'Croissance', desc: 'Chaque produit conçu pour évoluer avec vous à travers l\'Afrique.' },
    ],
    founderTag: 'Direction', founderTitle: 'LE', founderTitle2: 'FONDATEUR',
    founderBio: 'Entrepreneur sénégalo-américain basé à Detroit, Michigan, avec de profondes racines dans les marchés d\'Afrique de l\'Ouest. Amdy a fondé AMDY LABS pour combler le fossé technologique entre les logiciels de qualité Silicon Valley et les réalités des entreprises africaines.',
    founderSkills: ['SaaS & Produit', 'Marchés Africains', 'Commerce Mobile', 'Detroit, MI'],
    linkedinBtn: 'Profil LinkedIn',
    ctaTitle: 'Rejoignez la mission', ctaSub: 'Que vous soyez client, investisseur ou partenaire — construisons ensemble.', ctaBtn1: 'Travailler avec nous', ctaBtn2: 'WhatsApp',
  },
  en: {
    storyTag: 'Our Story', storyTitle1: 'BUILT IN AFRICA,', storyTitle2: 'FOR AFRICA',
    storySub: 'AMDY LABS was founded with a single mission: to bridge the technology gap preventing African businesses from competing globally.',
    p1: 'AMDY LABS was founded by Amdy Boubacar alongside a network of talented African developers and creatives based in the US, Europe, and Africa.',
    p2: 'The company was born from a simple but powerful vision: African entrepreneurs deserve world-class software, modern digital tools, and scalable business systems — at prices adapted to African realities.',
    p3: 'From CaissePro, our flagship POS system, to VYBZ Social and ImmoPro — every product we build solves a real African business problem.',
    missionTag: 'Mission & Vision',
    missionItems: [
      { title: 'Mission', text: 'Help African businesses modernize through technology by delivering affordable, world-class digital solutions.' },
      { title: 'Vision', text: 'Become one of the leading African tech ecosystems — building world-class products for African realities.' },
      { title: '2030 Goal', text: 'Equip 10,000+ African businesses with digital tools across 20+ countries on the continent.' },
    ],
    teamTag: 'Our Team', teamTitle1: 'DISTRIBUTED', teamTitle2: 'TALENT',
    teamSub: 'Developers, designers and strategists from the African continent and diaspora — united by a common mission.',
    locations: [
      { city: 'Detroit, USA', role: 'Leadership & Product' },
      { city: 'France', role: 'Design & Frontend' },
      { city: 'Dakar, Senegal', role: 'Africa Operations' },
      { city: 'Côte d\'Ivoire', role: 'Mobile Development' },
      { city: 'Morocco', role: 'Backend & Infrastructure' },
      { city: 'Africa & Diaspora', role: 'Distributed Talent' },
    ],
    valuesTag: 'Our Values', valuesTitle1: 'WHAT WE', valuesTitle2: 'BELIEVE IN',
    values: [
      { title: 'Excellence', desc: 'Silicon Valley quality at African prices. No shortcuts.' },
      { title: 'Partnership', desc: 'Your long-term tech partner — not just a vendor.' },
      { title: 'Innovation', desc: 'Global technology fused with deep African market knowledge.' },
      { title: 'Trust', desc: 'Transparent pricing, honest communication, reliable delivery.' },
      { title: 'Speed', desc: 'Agile delivery. We move at the speed of your business.' },
      { title: 'Growth', desc: 'Every product designed to scale with you across Africa.' },
    ],
    founderTag: 'Leadership', founderTitle: 'THE', founderTitle2: 'FOUNDER',
    founderBio: 'Senegalese-American entrepreneur based in Detroit, Michigan, with deep roots in West African markets. Amdy founded AMDY LABS to bridge the technology gap between Silicon Valley-quality software and African business realities.',
    founderSkills: ['SaaS & Product', 'African Markets', 'Mobile Commerce', 'Detroit, MI'],
    linkedinBtn: 'LinkedIn Profile',
    ctaTitle: 'Join the mission', ctaSub: 'Whether you\'re a client, investor or partner — let\'s build together.', ctaBtn1: 'Work With Us', ctaBtn2: 'WhatsApp',
  }
}

const VALUE_ICONS = [Trophy, Handshake, Lightbulb, Lock, Zap, Leaf]

export default function AboutPage() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <div style={{ paddingTop: 72, background: '#fff', color: '#0f172a' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', padding: '100px 24px 80px', background: 'linear-gradient(160deg, #f0f4ff 0%, #fafbff 50%, #f0fff8 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, background: 'radial-gradient(circle, rgba(26,110,245,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,230,118,0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>{t.storyTag}</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 24 }}>
            {t.storyTitle1}<br />
            <span style={{ color: '#1a6ef5' }}>{t.storyTitle2}</span>
          </h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 580, margin: '0 auto', lineHeight: 1.72 }}>{t.storySub}</p>
        </div>
      </section>

      {/* ── STORY + MISSION ── */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.82, marginBottom: 18 }}>{t.p1}</p>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.82, marginBottom: 18 }}>{t.p2}</p>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.82 }}>{t.p3}</p>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 18, padding: 32, border: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 20 }}>{t.missionTag}</p>
            {t.missionItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {i === 0 ? <Target size={16} color="#1a6ef5" /> : i === 1 ? <Telescope size={16} color="#1a6ef5" /> : <Globe size={16} color="#1a6ef5" />}
                </div>
                <div>
                  <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 4 }}>{item.title}</div>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(160deg, #f8fafc 0%, #f0f4ff 100%)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>{t.teamTag}</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 14 }}>
              {t.teamTitle1} <span style={{ color: '#1a6ef5' }}>{t.teamTitle2}</span>
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>{t.teamSub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {t.locations.map((loc, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '24px 20px', textAlign: 'center', transition: 'all 0.25s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#bfdbfe'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 40px rgba(26,110,245,0.1)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e2e8f0'; el.style.transform = 'none'; el.style.boxShadow = 'none' }}>
                <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <MapPin size={18} color="#1a6ef5" />
                </div>
                <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 5 }}>{loc.city}</div>
                <div style={{ fontSize: 12, color: '#94a3b8' }}>{loc.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>{t.valuesTag}</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a' }}>
              {t.valuesTitle1} <span style={{ color: '#1a6ef5' }}>{t.valuesTitle2}</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {t.values.map((v, i) => {
              const Icon = VALUE_ICONS[i]
              return (
                <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '28px 24px', transition: 'all 0.25s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#eff6ff'; el.style.borderColor = '#bfdbfe'; el.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#f8fafc'; el.style.borderColor = '#e2e8f0'; el.style.transform = 'none' }}>
                  <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={20} color="#1a6ef5" />
                  </div>
                  <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 15, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>{v.title}</h4>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(160deg, #f0f4ff 0%, #f8fafc 100%)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>{t.founderTag}</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a' }}>
              {t.founderTitle} <span style={{ color: '#1a6ef5' }}>{t.founderTitle2}</span>
            </h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '40px 36px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28, alignItems: 'start', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <div style={{ width: 84, height: 84, borderRadius: '50%', background: 'linear-gradient(135deg, #1a6ef5, #00c8ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, system-ui', fontWeight: 800, fontSize: 26, color: '#fff', flexShrink: 0, border: '3px solid #dbeafe' }}>AB</div>
            <div>
              <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 800, fontSize: 20, color: '#0f172a', marginBottom: 4 }}>Amdy Boubacar</div>
              <div style={{ fontSize: 12, color: '#1a6ef5', fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Founder & CEO — AMDY LABS LLC</div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 16 }}>Detroit, Michigan, USA · Dakar, Sénégal</div>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.72, marginBottom: 18 }}>{t.founderBio}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
                {t.founderSkills.map(tag => (
                  <span key={tag} style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 20, padding: '4px 12px', fontSize: 11, color: '#1a6ef5', fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
              <a href="https://www.linkedin.com/in/a-boubacar-52178b437/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0077b5', color: '#fff', padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
                <Link2 size={14} /> {t.linkedinBtn}
              </a>
            </div>
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
              <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, maxWidth: 400, margin: '0 auto 36px', lineHeight: 1.7 }}>{t.ctaSub}</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1a6ef5', color: '#fff', padding: '14px 30px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
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
