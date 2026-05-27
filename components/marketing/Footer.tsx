import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#080d1a', borderTop: '1px solid #1e2d4a', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'Syne, system-ui', fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 12 }}>
              AMDY <span style={{ color: '#3d8bff' }}>LABS</span>
            </div>
            <p style={{ fontSize: 14, color: '#8b93a8', lineHeight: 1.7, maxWidth: 240 }}>Building Africa&apos;s digital future — one solution at a time.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[['𝕏','#'],['in','#'],['f','#'],['◎','#']].map(([s, href], i) => (
                <a key={i} href={href} style={{ width: 34, height: 34, background: '#1c2235', border: '1px solid #1e2d4a', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b93a8', textDecoration: 'none', fontSize: 13 }}>{s}</a>
              ))}
            </div>
          </div>
          {[
            { title: 'Company', links: [['About Us', '/about'], ['Our Projects', '/projects'], ['Contact', '/contact']] },
            { title: 'Services', links: [['Mobile Apps', '/services'], ['Websites', '/services'], ['POS Systems', '/services'], ['Branding', '/services']] },
            { title: 'Products', links: [['CaissePro', 'https://caissepro.amdylabs.com'], ['DeliveryDash', '/projects'], ['ShopFlow', '/projects']] },
          ].map(col => (
            <div key={col.title}>
              <h5 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8b93a8', marginBottom: 16 }}>{col.title}</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(([label, href]) => (
                  <li key={label}><Link href={href} style={{ color: '#8b93a8', textDecoration: 'none', fontSize: 14 }}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #1e2d4a', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: '#8b93a8' }}>© {year} AMDY LABS. All rights reserved.</span>
          <span style={{ fontSize: 13, color: '#8b93a8' }}>Made with ❤️ in Africa · amdylabs.com</span>
        </div>
      </div>
    </footer>
  )
}
