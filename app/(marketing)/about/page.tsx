import Link from 'next/link'

const VALUES = [
  { icon: '🏆', title: 'Excellence', desc: 'Silicon Valley quality at African prices. No shortcuts, no compromises.' },
  { icon: '🤝', title: 'Partnership', desc: 'We become your long-term technology partner, not just a vendor.' },
  { icon: '💡', title: 'Innovation', desc: 'Cutting-edge global technology combined with deep local knowledge.' },
  { icon: '🔒', title: 'Trust', desc: 'Transparent pricing, honest communication, and reliable delivery.' },
  { icon: '⚡', title: 'Speed', desc: 'Fast iteration and agile delivery. We move at the speed of your business.' },
  { icon: '🌱', title: 'Growth', desc: 'Every solution is designed to scale as you grow across Africa and beyond.' },
]

export const metadata = { title: 'About — AMDY LABS', description: 'The story of AMDY LABS and our mission to build Africa\'s digital future.' }

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <style>{`.footer-link:hover{color:#fff!important}`}</style>
      <div style={{ position: 'relative', padding: '100px 24px 80px', textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 0%, #0d1f4a 0%, transparent 70%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(26,110,245,0.08)', border: '1px solid #1a6ef5', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 600, color: '#3d8bff', marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>About Us</div>
        <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(36px,6vw,64px)', fontWeight: 800, marginBottom: 20 }}>Built in Africa,<br />for Africa, by Africa</h1>
        <p style={{ fontSize: 18, color: '#8b93a8', maxWidth: 640, margin: '0 auto' }}>AMDY LABS was founded with a single mission: bridge the technology gap that holds African businesses back from their true potential.</p>
      </div>

      <div style={{ padding: '60px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 32, fontWeight: 800, marginBottom: 24 }}>Our Story</h2>
            <p style={{ fontSize: 15, color: '#8b93a8', lineHeight: 1.8, marginBottom: 16 }}>Africa has the talent, the ambition, and the market. What it needs is technology infrastructure that actually works for local realities — mobile-first, offline-capable, multilingual, and integrated with local payment systems.</p>
            <p style={{ fontSize: 15, color: '#8b93a8', lineHeight: 1.8, marginBottom: 16 }}>AMDY LABS was created to be that bridge. We build world-class software with Silicon Valley quality but African soul — products that understand the realities of doing business in Dakar, Abidjan, Lagos, and beyond.</p>
            <p style={{ fontSize: 15, color: '#8b93a8', lineHeight: 1.8 }}>From our flagship product CaissePro to custom enterprise software, every solution we build is designed to empower African entrepreneurs to grow, compete, and scale without limits.</p>
          </div>
          <div style={{ background: 'linear-gradient(135deg,#0d1f4a,#0a1628)', border: '1px solid #1e2d4a', borderRadius: 20, padding: 36 }}>
            <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 22, marginBottom: 28 }}>Mission & Vision</h3>
            {[
              { icon: '🎯', title: 'Mission', text: 'Helping African businesses modernize through technology by delivering affordable, world-class digital solutions.' },
              { icon: '🔭', title: 'Vision', text: 'To be the leading technology partner for African businesses, powering the continent\'s digital economy.' },
              { icon: '🌍', title: 'Impact Goal', text: 'Empower 10,000+ African businesses with digital tools by 2030, across 20+ countries on the continent.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
                <span style={{ fontSize: 28 }}>{item.icon}</span>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: '#8b93a8', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '60px 24px 100px', background: '#080d1a', borderTop: '1px solid #1e2d4a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 36, fontWeight: 800, textAlign: 'center', marginBottom: 48 }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ background: '#0d1425', border: '1px solid #1e2d4a', borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{v.title}</h4>
                <p style={{ fontSize: 14, color: '#8b93a8', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Ready to work with us?</h2>
        <p style={{ color: '#8b93a8', fontSize: 16, marginBottom: 32 }}>Let&apos;s build something that changes how Africa does business.</p>
        <Link href="/contact" style={{ background: '#1a6ef5', color: '#fff', padding: '16px 40px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Start a Conversation →</Link>
      </div>
    </div>
  )
}
