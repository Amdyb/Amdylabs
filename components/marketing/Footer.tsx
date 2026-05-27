import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#04081a', borderTop: '1px solid rgba(30,45,74,0.5)', padding: '70px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 44, marginBottom: 52 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 14, letterSpacing: '-0.01em' }}>
              AMDY <span style={{ color: '#60a5fa' }}>LABS</span>
            </div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.8, maxWidth: 250, marginBottom: 20 }}>
              Building Africa&apos;s digital future — one solution at a time.<br />
              Founded by <strong style={{ color: '#64748b' }}>Amdy Boubacar</strong>.
            </p>
            <a href="tel:+15863442378" style={{ display: 'block', fontSize: 13, color: '#60a5fa', textDecoration: 'none', marginBottom: 6 }}>📞 +1 (586) 344-2378</a>
            <a href="mailto:hello@amdylabs.com" style={{ display: 'block', fontSize: 13, color: '#60a5fa', textDecoration: 'none', marginBottom: 20 }}>📧 hello@amdylabs.com</a>
            <div style={{ display: 'flex', gap: 9 }}>
              {[['𝕏', '#'], ['in', '#'], ['f', '#'], ['◎', '#'], ['▶', '#']].map(([s, href], i) => (
                <a key={i} href={href} style={{ width: 34, height: 34, background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', textDecoration: 'none', fontSize: 12 }}>{s}</a>
              ))}
            </div>
          </div>

          {[
            { title: 'Company', links: [['About Us', '/about'], ['Our Projects', '/projects'], ['Services', '/services'], ['Contact', '/contact']] },
            { title: 'Services', links: [['Mobile Apps', '/services'], ['Websites', '/services'], ['POS Systems', '/services'], ['SaaS Platforms', '/services'], ['AI Solutions', '/services']] },
            { title: 'Products', links: [['CaissePro', '/projects'], ['VYBZ Social', '/projects'], ['Mon Livreur', '/projects'], ['Start a Project', '/contact']] },
          ].map(col => (
            <div key={col.title}>
              <h5 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#334155', marginBottom: 18 }}>{col.title}</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.links.map(([label, href]) => (
                  <li key={label}><Link href={href} style={{ color: '#475569', textDecoration: 'none', fontSize: 14 }}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA strip */}
        <div style={{ background: 'rgba(37,211,102,0.05)', border: '1px solid rgba(37,211,102,0.15)', borderRadius: 12, padding: '18px 24px', marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
          <span style={{ fontSize: 14, color: '#64748b' }}>💬 Got a project in mind? Chat directly with Amdy on WhatsApp</span>
          <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ background: '#25d366', color: '#000', padding: '9px 22px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            +1 (586) 344-2378 →
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(30,45,74,0.4)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: '#1e3a5f' }}>© {year} AMDY LABS. All rights reserved.</span>
          <span style={{ fontSize: 12, color: '#1e3a5f' }}>Made with ❤️ in Africa · amdylabs.com</span>
        </div>
      </div>
    </footer>
  )
}
