import Link from 'next/link'

const VALUES = [
  { icon: '🏆', title: 'Excellence', desc: 'Silicon Valley quality at African prices. No shortcuts, no compromises on craft.' },
  { icon: '🤝', title: 'Partnership', desc: 'We become your long-term technology ally — not just a vendor.' },
  { icon: '💡', title: 'Innovation', desc: 'Cutting-edge global tech fused with deep African market knowledge.' },
  { icon: '🔒', title: 'Trust', desc: 'Transparent pricing, honest timelines, and reliable delivery. Always.' },
  { icon: '⚡', title: 'Speed', desc: 'Agile delivery and rapid iteration. We move at the speed of your business.' },
  { icon: '🌱', title: 'Growth', desc: 'Every product is designed to scale with you across Africa and beyond.' },
]

const TEAM_LOCATIONS = [
  { flag: '🇺🇸', country: 'United States', desc: 'Engineering & Product Leadership' },
  { flag: '🇫🇷', country: 'France', desc: 'Design & Frontend Development' },
  { flag: '🇸🇳', country: 'Senegal', desc: 'Africa Operations & Business' },
  { flag: '🇨🇮', country: "Côte d'Ivoire", desc: 'Mobile Development' },
  { flag: '🇲🇦', country: 'Morocco', desc: 'Backend & Infrastructure' },
  { flag: '🌍', country: 'And more...', desc: 'Distributed global African talent' },
]

export const metadata = {
  title: 'About AMDY LABS — Our Story & Mission',
  description: 'Learn about AMDY LABS, founded by Amdy Boubacar — an African tech company building world-class digital solutions for African businesses.',
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '110px 24px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 50% 0%, #0b1d4a 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Our Story</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px,6vw,68px)', fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Built in Africa,<br />
            <span style={{ background: 'linear-gradient(135deg,#60a5fa,#00c8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>for Africa</span>,<br />
            by Africans
          </h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 640, margin: '0 auto', lineHeight: 1.75 }}>
            AMDY LABS was founded with one mission: bridge the technology gap that holds African businesses back from competing globally.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 34, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em' }}>The Story of<br />AMDY LABS</h2>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.85, marginBottom: 18 }}>
              AMDY LABS was founded by <strong style={{ color: '#e2e8f0' }}>Amdy Boubacar</strong> alongside a network of talented African developers and creatives living across the United States, Europe, and Africa.
            </p>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.85, marginBottom: 18 }}>
              The company was born from a simple but powerful vision: African entrepreneurs deserve world-class software, modern digital tools, and scalable business systems — at prices that actually work for African markets.
            </p>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.85, marginBottom: 18 }}>
              From CaissePro, our flagship POS system serving African merchants with Wave and Orange Money integration, to VYBZ Social and Mon Livreur — every product we build solves a real African business problem.
            </p>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.85 }}>
              We believe Africa is not just a market — it&apos;s the future. And we&apos;re here to build that future, one product at a time.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Mission card */}
            <div style={{ background: 'linear-gradient(135deg,#0d1f4a,#0a1628)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 18, padding: 28 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 20 }}>
                <span style={{ fontSize: 28 }}>🎯</span>
                <div>
                  <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Mission</h4>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>Helping African businesses modernize, compete globally, and thrive in the digital age.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 20 }}>
                <span style={{ fontSize: 28 }}>🔭</span>
                <div>
                  <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Vision</h4>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>To become one of Africa&apos;s leading technology ecosystems — building world-class products for African realities and global standards.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 28 }}>🌍</span>
                <div>
                  <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Impact Goal</h4>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>Empower 10,000+ African businesses with digital tools by 2030, across 20+ countries.</p>
                </div>
              </div>
            </div>

            {/* Founder */}
            <div style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 18, padding: 24, display: 'flex', gap: 18, alignItems: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#1a6ef5,#00c8ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, system-ui', fontWeight: 800, fontSize: 18, flexShrink: 0 }}>AB</div>
              <div>
                <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Amdy Boubacar</div>
                <div style={{ fontSize: 12, color: '#60a5fa', marginBottom: 6 }}>Founder & CEO, AMDY LABS</div>
                <div style={{ fontSize: 12, color: '#475569' }}>Entrepreneur · Technologist · African Innovator</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Team */}
      <section style={{ padding: '70px 24px 90px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Our Team</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>A distributed team<br />of African talent</h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>Developers, designers, and strategists from across the African continent and diaspora — united by a shared mission.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {TEAM_LOCATIONS.map(loc => (
              <div key={loc.country} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 14, padding: '22px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{loc.flag}</div>
                <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{loc.country}</div>
                <div style={{ fontSize: 12, color: '#475569' }}>{loc.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>What We Stand For</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.02em' }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{v.title}</h4>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 40, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>Join the mission</h2>
        <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>Whether you&apos;re a client, investor, or developer — AMDY LABS is where Africa&apos;s digital future is being built.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '15px 36px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.3)' }}>Work With Us →</Link>
          <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ background: '#25d366', color: '#000', padding: '15px 36px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>💬 WhatsApp</a>
        </div>
      </section>
    </div>
  )
}
