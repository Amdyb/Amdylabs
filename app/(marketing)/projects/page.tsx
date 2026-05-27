import Link from 'next/link'

const PROJECTS = [
  { name: 'CaissePro', sub: 'POS & Inventory SaaS', desc: 'Full multi-tenant POS system for West African merchants. Offline-first PWA, Wave/Orange Money payments, WhatsApp receipts, inventory management, daily reports, and staff roles.', tags: ['Next.js 15','Supabase','PWA','Wave API','Orange Money'], emoji: '🏪', color: 'linear-gradient(135deg,#0d1f4a,#1a3a8f)', stats: [['36+','Businesses'],['206+','Products managed'],['61+','Sales recorded'],['Multi','Currency']] },
  { name: 'DeliveryDash', sub: 'Logistics Platform', desc: 'Real-time delivery tracking and logistics management for African courier services and last-mile delivery networks. Live map tracking and driver dispatch.', tags: ['React Native','Node.js','Google Maps','Socket.io'], emoji: '🚚', color: 'linear-gradient(135deg,#0d2a1a,#1a6e3a)', stats: [['Real-time','Tracking'],['Driver','Dispatch'],['Route','Optimization'],['WhatsApp','Alerts']] },
  { name: 'EventPro Africa', sub: 'Event Management', desc: 'Complete mobile application for event ticketing, QR code check-in, seat booking, and organizer dashboards. Built for African events and concerts.', tags: ['Flutter','Firebase','QR Code','Stripe'], emoji: '🎟️', color: 'linear-gradient(135deg,#2a0d1a,#6e1a3a)', stats: [['Mobile','App'],['QR','Check-in'],['Seat','Booking'],['Real-time','Dashboard']] },
  { name: 'ShopFlow', sub: 'E-Commerce Platform', desc: 'Modern online store built for African retailers. CinetPay & Wave integration, WhatsApp ordering, multilingual (FR/EN/WO) support, and mobile-first design.', tags: ['Next.js','CinetPay','WhatsApp API','Tailwind'], emoji: '🛒', color: 'linear-gradient(135deg,#2a1a0d,#8f5a1a)', stats: [['Mobile','First'],['Local','Payments'],['WhatsApp','Orders'],['Multi','Lingual']] },
  { name: 'DakarVape', sub: 'E-Commerce & Distribution', desc: 'Authorized vape distributor platform for West Africa. Product catalog, order management, distributor portal, and customer loyalty system.', tags: ['Next.js','Supabase','Inventory','CRM'], emoji: '📦', color: 'linear-gradient(135deg,#1a0d2a,#5a1a8f)', stats: [['Product','Catalog'],['Distributor','Portal'],['Order','Management'],['Loyalty','System']] },
  { name: 'ATLE Logistics', sub: 'Trucking & Fleet Management', desc: 'Fleet management and dispatch platform for a Michigan-based trucking company. Load tracking, driver management, invoicing, and compliance tools.', tags: ['React','Node.js','Maps','PDF Export'], emoji: '🚛', color: 'linear-gradient(135deg,#1a1a0d,#6e6e1a)', stats: [['Fleet','Tracking'],['Driver','Management'],['Invoice','Generation'],['DOT','Compliance']] },
]

export const metadata = { title: 'Projects — AMDY LABS', description: 'See the digital products we built for African businesses.' }

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <div style={{ position: 'relative', padding: '100px 24px 80px', textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 0%, #0d1f4a 0%, transparent 70%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(26,110,245,0.08)', border: '1px solid #1a6ef5', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 600, color: '#3d8bff', marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Work</div>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(36px,6vw,64px)', fontWeight: 800, marginBottom: 20 }}>Projects we&apos;re proud of</h1>
        <p style={{ fontSize: 18, color: '#8b93a8', maxWidth: 600, margin: '0 auto' }}>Real solutions built for real African businesses — from POS systems to delivery platforms to e-commerce stores.</p>
      </div>

      <div style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {PROJECTS.map((p, i) => (
            <div key={i} style={{ background: '#0d1425', border: '1px solid #1e2d4a', borderRadius: 24, overflow: 'hidden', display: 'grid', gridTemplateColumns: i%2===0 ? '1fr 2fr' : '2fr 1fr' }} className="project-card">
              {/* Visual */}
              {i%2===0 && (
                <div style={{ background: p.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, gap: 24 }}>
                  <span style={{ fontSize: 80 }}>{p.emoji}</span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%', maxWidth: 220 }}>
                    {p.stats.map(([v,l]) => (
                      <div key={l} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 14, color: '#fff' }}>{v}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Info */}
              <div style={{ padding: 40 }}>
                <div style={{ display: 'inline-block', background: '#1c2235', border: '1px solid #1e2d4a', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: '#3d8bff', fontWeight: 600, marginBottom: 16 }}>{p.sub}</div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 28, fontWeight: 800, marginBottom: 14 }}>{p.name}</h3>
                <p style={{ fontSize: 15, color: '#8b93a8', lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {p.tags.map(t => <span key={t} style={{ background: '#1c2235', border: '1px solid #1e2d4a', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#8b93a8' }}>{t}</span>)}
                </div>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1a6ef5', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Build something similar →</Link>
              </div>
              {/* Visual right side */}
              {i%2!==0 && (
                <div style={{ background: p.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, gap: 24 }}>
                  <span style={{ fontSize: 80 }}>{p.emoji}</span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%', maxWidth: 220 }}>
                    {p.stats.map(([v,l]) => (
                      <div key={l} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 14, color: '#fff' }}>{v}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.project-card{grid-template-columns:1fr!important}.project-card>div:first-child:not(.info){display:none}}`}</style>
    </div>
  )
}
