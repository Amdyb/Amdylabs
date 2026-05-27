import Link from 'next/link'
import { Smartphone, Globe, ShoppingBag, BarChart3, Palette, Bot, Zap, Package } from 'lucide-react'

const SERVICES = [
  { icon: Smartphone, label: 'Mobile App Development', desc: 'Custom Android & iOS apps that deliver amazing user experiences for African consumers. We build everything from fintech apps to delivery trackers to loyalty apps.', benefits: ['Cross-platform (Android & iOS)','Offline-first capability','Wave & mobile money integration','Push notifications & WhatsApp'], color: '#3d8bff' },
  { icon: Globe, label: 'Website Development', desc: 'Modern, responsive websites that make your business stand out and convert visitors into paying customers. From landing pages to full e-commerce platforms.', benefits: ['SEO-optimized for African markets','Mobile-first responsive design','Fast loading on 2G/3G','CMS for easy content updates'], color: '#00c8ff' },
  { icon: ShoppingBag, label: 'POS & E-Commerce', desc: 'Complete point-of-sale systems and online stores built for African retail. Wave, Orange Money, Free Money — all integrated natively.', benefits: ['CaissePro POS platform','Inventory management','Mobile money payments','WhatsApp order notifications'], color: '#00e676' },
  { icon: Package, label: 'Business Software', desc: 'Custom dashboards, ERPs, CRMs, and automation tools that streamline your entire business operation.', benefits: ['Custom-built for your workflow','Real-time dashboards & analytics','Role-based access control','API integrations'], color: '#ff6b6b' },
  { icon: Palette, label: 'Branding & Marketing', desc: 'Professional brand identity, visual design, and digital marketing campaigns that grow your audience and revenue.', benefits: ['Logo & brand identity','Social media content','Paid advertising campaigns','Content strategy'], color: '#ffd93d' },
  { icon: Zap, label: 'Automation Tools', desc: 'Automate repetitive tasks and workflows to save time, reduce errors, and scale efficiently.', benefits: ['WhatsApp automation','Inventory auto-alerts','Report generation','Payment reminders'], color: '#ff9f43' },
  { icon: Bot, label: 'AI Integrations', desc: 'Integrate cutting-edge AI into your products — chatbots, smart analytics, voice assistants, and personalization engines.', benefits: ['AI chatbots in French/Wolof','Smart product recommendations','Sales prediction','Automated customer support'], color: '#c77dff' },
  { icon: BarChart3, label: 'Analytics & Reports', desc: 'Real-time business intelligence dashboards that give you full visibility into performance, trends, and opportunities.', benefits: ['Daily/weekly/monthly reports','Sales trend analysis','Customer behavior insights','Export to PDF/Excel'], color: '#00b894' },
]

export const metadata = { title: 'Services — AMDY LABS', description: 'Full-stack digital services for African businesses.' }

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <div style={{ position: 'relative', padding: '100px 24px 80px', textAlign: 'center', overflow: 'hidden', background: 'radial-gradient(ellipse 60% 60% at 50% 0%, #0d1f4a 0%, transparent 70%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.08)', border: '1px solid #1a6ef5', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 600, color: '#3d8bff', marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Services</div>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(36px,6vw,64px)', fontWeight: 800, marginBottom: 20 }}>Everything your business<br />needs to go digital</h1>
        <p style={{ fontSize: 18, color: 'var(--gray)', maxWidth: 600, margin: '0 auto 32px' }}>From idea to production — we build, launch, and support world-class digital products for African businesses.</p>
        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1a6ef5', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>Get a Free Quote →</Link>
      </div>

      {/* Services Grid */}
      <div style={{ padding: '60px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ background: '#0d1425', border: '1px solid #1e2d4a', borderRadius: 20, padding: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 52, height: 52, background: `${s.color}18`, border: `1px solid ${s.color}44`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.icon size={24} color={s.color} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 18, fontWeight: 700 }}>{s.label}</h3>
              </div>
              <p style={{ fontSize: 14, color: '#8b93a8', lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                {s.benefits.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                    <span style={{ width: 18, height: 18, background: '#00e676', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Get started →</Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', background: 'linear-gradient(135deg,#0a1628,#0d1f4a)', border: '1px solid #1e2d4a', borderRadius: 20, padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Not sure where to start?</h2>
          <p style={{ color: '#8b93a8', fontSize: 16, marginBottom: 32 }}>Book a free 30-minute consultation and we&apos;ll map out the perfect solution for your business.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#1a6ef5', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Book Free Consultation</Link>
            <a href="https://wa.me/12488001234" target="_blank" rel="noreferrer" style={{ background: '#25d366', color: '#000', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>💬 Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  )
}
