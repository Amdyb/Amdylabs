import Link from 'next/link'

const PROJECTS = [
  {
    name: 'CaissePro',
    sub: 'POS & Business Management SaaS',
    desc: 'A modern, multi-tenant point-of-sale and business management system designed from the ground up for African merchants. Offline-first PWA with WhatsApp receipts, customer debt tracking, inventory management, daily reports, CFA currency support, and native Wave/Orange Money integration.',
    emoji: '🏪',
    color: 'linear-gradient(135deg, #0d1f4a, #1a3a8f)',
    tags: ['Next.js 16', 'Supabase', 'PWA', 'Wave API', 'Orange Money', 'TypeScript'],
    features: ['Inventory Management', 'WhatsApp Receipts', 'Customer Debt Tracking', 'Reports & Analytics', 'Online Shop Integration', 'CFA Currency Support', 'Mobile-First Interface', 'Multi-Staff Roles'],
    status: 'Live',
  },
  {
    name: 'VYBZ Social',
    sub: 'Social & Nightlife Platform',
    desc: 'A vibrant social platform built to connect people, events, nightlife, and experiences across Africa and the global African diaspora. Discover events, connect with communities, and share unforgettable moments.',
    emoji: '🎉',
    color: 'linear-gradient(135deg, #2a0d3a, #7b2d8f)',
    tags: ['React Native', 'Firebase', 'Maps API', 'Push Notifications'],
    features: ['Event Discovery', 'Social Networking', 'Nightlife Listings', 'Ticket Purchasing', 'Community Groups', 'Live Experiences', 'Creator Profiles', 'African Diaspora Focus'],
    status: 'In Development',
  },
  {
    name: 'Mon Livreur',
    sub: 'Delivery & Logistics Platform',
    desc: 'A complete delivery and logistics platform built for African businesses and local delivery services. Real-time tracking, smart driver dispatch, automated WhatsApp customer notifications, and a full business dashboard.',
    emoji: '🚚',
    color: 'linear-gradient(135deg, #0d2a1a, #1a6e3a)',
    tags: ['React Native', 'Node.js', 'Google Maps', 'WhatsApp API', 'Socket.io'],
    features: ['Real-Time Tracking', 'Driver Dispatch', 'Route Optimization', 'WhatsApp Alerts', 'Customer App', 'Business Dashboard', 'Order Management', 'Delivery Analytics'],
    status: 'In Development',
  },
]

const MORE_PROJECTS = [
  { emoji: '📊', name: 'Business Dashboards', desc: 'Custom analytics and management dashboards for African businesses across multiple industries.', tag: 'Custom Build' },
  { emoji: '🛒', name: 'E-Commerce Stores', desc: 'Modern online stores with local African payment methods, WhatsApp ordering, and multilingual support.', tag: 'E-Commerce' },
  { emoji: '🤖', name: 'AI Automation Tools', desc: 'Smart automation systems that save time, reduce errors, and help businesses scale without growing headcount.', tag: 'AI / Automation' },
  { emoji: '🏢', name: 'Enterprise Software', desc: 'Custom ERP, CRM, and internal management tools built specifically for African businesses.', tag: 'Enterprise' },
]

export const metadata = {
  title: 'Projects — AMDY LABS',
  description: 'CaissePro, VYBZ Social, Mon Livreur and more — see what AMDY LABS has built for African businesses.',
}

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '110px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #0b1d4a 0%, transparent 65%)' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Our Products</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px,6vw,68px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>What we&apos;ve built</h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>Real products solving real African business problems — from POS systems to social platforms to logistics.</p>
        </div>
      </section>

      {/* Main Projects */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.name} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 24, overflow: 'hidden', display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 2fr' : '2fr 1fr' }} className="proj-grid">
              {/* Visual — left for even, right for odd */}
              {i % 2 === 0 && (
                <div style={{ background: p.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, gap: 20, minHeight: 320 }}>
                  <span style={{ fontSize: 90 }}>{p.emoji}</span>
                  <span style={{ background: p.status === 'Live' ? 'rgba(0,230,118,0.2)' : 'rgba(96,165,250,0.2)', color: p.status === 'Live' ? '#00e676' : '#60a5fa', border: `1px solid ${p.status === 'Live' ? 'rgba(0,230,118,0.4)' : 'rgba(96,165,250,0.4)'}`, borderRadius: 20, padding: '5px 14px', fontSize: 11, fontWeight: 700 }}>
                    {p.status === 'Live' ? '✅ Live' : '🔨 In Development'}
                  </span>
                </div>
              )}

              {/* Info */}
              <div style={{ padding: '40px 36px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 6, padding: '4px 12px', fontSize: 11, color: '#60a5fa', fontWeight: 600, marginBottom: 16 }}>{p.sub}</div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 32, fontWeight: 800, marginBottom: 14, letterSpacing: '-0.02em' }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.8, marginBottom: 22 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  {p.tags.map(t => <span key={t} style={{ background: 'rgba(30,45,74,0.5)', border: '1px solid rgba(30,45,74,0.7)', borderRadius: 5, padding: '4px 10px', fontSize: 11, color: '#475569' }}>{t}</span>)}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 28 }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#64748b' }}>
                      <span style={{ width: 16, height: 16, background: '#00e676', color: '#000', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 900, flexShrink: 0 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Build something similar →</Link>
              </div>

              {/* Visual — right for odd */}
              {i % 2 !== 0 && (
                <div style={{ background: p.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, gap: 20, minHeight: 320 }}>
                  <span style={{ fontSize: 90 }}>{p.emoji}</span>
                  <span style={{ background: 'rgba(96,165,250,0.2)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.4)', borderRadius: 20, padding: '5px 14px', fontSize: 11, fontWeight: 700 }}>🔨 In Development</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* More Work */}
      <section style={{ padding: '60px 24px 100px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>More of our work</h2>
          <p style={{ color: '#64748b', fontSize: 15, marginBottom: 36 }}>AMDY LABS is continuously building solutions across industries.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {MORE_PROJECTS.map(p => (
              <div key={p.name} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{p.emoji}</div>
                <div style={{ display: 'inline-block', background: 'rgba(26,110,245,0.08)', border: '1px solid rgba(26,110,245,0.15)', borderRadius: 4, padding: '3px 8px', fontSize: 10, color: '#60a5fa', marginBottom: 12 }}>{p.tag}</div>
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
