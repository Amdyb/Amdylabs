import Link from 'next/link'
import Image from 'next/image'

const PROJECTS = [
  {
    name: 'CaissePro',
    sub: 'POS & Business Management SaaS',
    desc: 'A modern, multi-tenant point-of-sale and business management system designed from the ground up for African merchants. Offline-first PWA with WhatsApp receipts, customer debt tracking, inventory management, daily reports, CFA currency support, and native Wave/Orange Money integration.',
    logo: '/logo-caissepro.png',
    logoBg: '#fff',
    color: 'linear-gradient(135deg, #0d1f4a, #1a3a8f)',
    tags: ['Next.js 16', 'Supabase', 'PWA', 'Wave API', 'Orange Money', 'TypeScript'],
    features: ['Inventory Management', 'WhatsApp Receipts', 'Customer Debt Tracking', 'Reports & Analytics', 'Online Shop Integration', 'CFA Currency Support', 'Mobile-First Interface', 'Multi-Staff Roles'],
    status: 'Live',
    link: 'https://caissepro.app',
  },
  {
    name: 'VYBZ Social',
    sub: 'Social & Nightlife Platform — Dakar',
    desc: '"C\'est quoi les VYBZ ce soir?" — A vibrant social platform connecting people to events, nightlife, and experiences in Dakar and across Africa. Discover what\'s happening tonight, connect with your city, and share unforgettable moments.',
    logo: '/logo-vybz.png',
    logoBg: '#0a0010',
    color: 'linear-gradient(135deg, #150020, #3d0060)',
    tags: ['React Native', 'Firebase', 'Maps API', 'Events', 'Nightlife'],
    features: ['Event Discovery', 'Nightlife Listings', 'Social Networking', 'Ticket Purchasing', 'Community Groups', 'Dakar & Africa Focus', 'Creator Profiles', 'Live Experiences'],
    status: 'In Development',
    link: null,
  },
  {
    name: 'Mon Livreur',
    sub: 'Delivery & Logistics Platform',
    desc: 'A complete delivery and logistics platform built for African businesses and local delivery services. Real-time tracking, smart driver dispatch, automated WhatsApp customer notifications, and a full business dashboard.',
    logo: null,
    emoji: '🚚',
    logoBg: '#0d2a1a',
    color: 'linear-gradient(135deg, #0d2a1a, #1a6e3a)',
    tags: ['React Native', 'Node.js', 'Google Maps', 'WhatsApp API', 'Socket.io'],
    features: ['Real-Time Tracking', 'Driver Dispatch', 'Route Optimization', 'WhatsApp Alerts', 'Customer App', 'Business Dashboard', 'Order Management', 'Delivery Analytics'],
    status: 'In Development',
    link: null,
  },
]

const MORE = [
  { emoji: '📊', name: 'Business Dashboards', desc: 'Custom analytics and management dashboards for African businesses across multiple industries.', tag: 'Custom Build' },
  { emoji: '🛒', name: 'E-Commerce Stores', desc: 'Modern online stores with local African payment methods, WhatsApp ordering, and multilingual support.', tag: 'E-Commerce' },
  { emoji: '🤖', name: 'AI Automation Tools', desc: 'Smart automation that saves time, reduces errors, and helps businesses scale without growing headcount.', tag: 'AI / Automation' },
  { emoji: '🏢', name: 'Enterprise Software', desc: 'Custom ERP, CRM, and internal management tools built specifically for African businesses.', tag: 'Enterprise' },
]

export const metadata = {
  title: 'Projects — AMDY LABS | CaissePro, VYBZ, Mon Livreur',
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
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>Real products solving real African business problems — built with world-class technology and African soul.</p>
        </div>
      </section>

      {/* Main Projects */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.name} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 24, overflow: 'hidden', display: 'grid', gridTemplateColumns: i % 2 === 0 ? '360px 1fr' : '1fr 360px' }} className="proj-grid">

              {/* Visual — left for even */}
              {i % 2 === 0 && (
                <div style={{ background: p.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, gap: 20, minHeight: 340 }}>
                  {p.logo ? (
                    <div style={{ width: 140, height: 140, borderRadius: p.name === 'VYBZ Social' ? 20 : 28, overflow: 'hidden', background: p.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                      <Image src={p.logo} alt={p.name} width={140} height={140} style={{ objectFit: 'contain' }} />
                    </div>
                  ) : (
                    <div style={{ fontSize: 80 }}>{p.emoji}</div>
                  )}
                  <span style={{ background: p.status === 'Live' ? 'rgba(0,230,118,0.15)' : 'rgba(96,165,250,0.15)', color: p.status === 'Live' ? '#00e676' : '#60a5fa', border: `1px solid ${p.status === 'Live' ? 'rgba(0,230,118,0.3)' : 'rgba(96,165,250,0.3)'}`, borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700 }}>
                    {p.status === 'Live' ? '✅ Live' : '🔨 In Development'}
                  </span>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" style={{ color: '#60a5fa', fontSize: 12, textDecoration: 'none', opacity: 0.7 }}>{p.link} ↗</a>
                  )}
                </div>
              )}

              {/* Info */}
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
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 600, fontSize: 13, textDecoration: 'none', boxShadow: '0 6px 24px rgba(26,110,245,0.25)' }}>Build something similar →</Link>
              </div>

              {/* Visual — right for odd */}
              {i % 2 !== 0 && (
                <div style={{ background: p.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, gap: 20, minHeight: 340 }}>
                  {p.logo ? (
                    <div style={{ width: 140, height: 140, borderRadius: 20, overflow: 'hidden', background: p.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                      <Image src={p.logo} alt={p.name} width={140} height={140} style={{ objectFit: 'contain' }} />
                    </div>
                  ) : (
                    <div style={{ fontSize: 80 }}>{p.emoji}</div>
                  )}
                  <span style={{ background: 'rgba(96,165,250,0.15)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700 }}>🔨 In Development</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* More */}
      <section style={{ padding: '60px 24px 100px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>More of our work</h2>
          <p style={{ color: '#64748b', fontSize: 15, marginBottom: 36 }}>AMDY LABS is continuously building solutions across industries.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
            {MORE.map(p => (
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

      <style>{`
        @media(max-width:768px){
          .proj-grid { grid-template-columns: 1fr !important; }
          .proj-grid > div:last-child:not(:first-child) { order: -1; min-height: 220px !important; padding: 32px !important; }
          .proj-grid > div:first-child:not(:last-child) { min-height: 220px !important; padding: 32px !important; }
        }
      `}</style>
    </div>
  )
}
