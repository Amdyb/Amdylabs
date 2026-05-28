import Link from 'next/link'
import { Smartphone, Globe, Store, Cloud, ShoppingCart, Zap, Palette, Bot, CheckCircle2, ArrowRight, MessageCircle, Rocket } from 'lucide-react'

const SERVICES = [
  { Icon: Smartphone, label: 'Mobile App Development', color: '#60a5fa', desc: 'Native and cross-platform Android & iOS apps built for African consumers. Fast, offline-capable, and beautifully designed.', benefits: ['Android & iOS', 'Offline-first capability', 'Mobile money integration', 'WhatsApp notifications', 'French/Wolof/English UI'] },
  { Icon: Globe, label: 'Website Development', color: '#00c8ff', desc: 'Modern, fast, responsive websites that convert visitors into customers. From landing pages to full enterprise web platforms.', benefits: ['SEO-optimized', 'Mobile-first design', 'Fast loading on 2G/3G', 'CMS-powered', 'African market focus'] },
  { Icon: Store, label: 'POS & Business Software', color: '#00e676', desc: 'Point-of-sale systems powered by CaissePro. Wave, Orange Money, Free Money — all integrated natively for African merchants.', benefits: ['Wave & Orange Money', 'Inventory management', 'WhatsApp receipts', 'Customer debt tracking', 'Daily reports & analytics'] },
  { Icon: Cloud, label: 'SaaS Platforms', color: '#a78bfa', desc: 'Full multi-tenant SaaS platforms built to scale across Africa. We handle architecture, security, and scalability.', benefits: ['Multi-tenant architecture', 'Subscription billing', 'Supabase & Next.js', 'Role-based access', 'API-first design'] },
  { Icon: ShoppingCart, label: 'E-Commerce Solutions', color: '#fbbf24', desc: 'Complete online stores with African payment gateways, WhatsApp ordering, and multilingual support for African markets.', benefits: ['CinetPay & PayDunya', 'WhatsApp ordering', 'Product catalog', 'Order management', 'Multi-language'] },
  { Icon: Zap, label: 'Automation Systems', color: '#f97316', desc: 'Automate repetitive business tasks, notifications, reports, and workflows to save time and scale efficiently.', benefits: ['WhatsApp automation', 'Report automation', 'Stock alerts', 'Payment reminders', 'Custom workflows'] },
  { Icon: Palette, label: 'Branding & Marketing', color: '#ec4899', desc: 'Professional brand identity, social media management, and digital marketing campaigns that grow your audience.', benefits: ['Logo & brand identity', 'Social media content', 'Digital ads', 'Content strategy', 'Growth consulting'] },
  { Icon: Bot, label: 'AI Integrations', color: '#c77dff', desc: 'Smart AI tools integrated into your business — chatbots, analytics, personalization engines, and voice assistants.', benefits: ['AI chatbots', 'Smart analytics', 'Product recommendations', 'Customer support AI', 'French & Wolof NLP'] },
]

export const metadata = { title: 'Services — AMDY LABS', description: 'Mobile apps, websites, POS systems, SaaS platforms — full digital services for African businesses.' }

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ position: 'relative', padding: '110px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #0b1d4a 0%, transparent 65%)' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>What We Build</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px,6vw,68px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>Everything you need<br />to go digital</h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.75 }}>From idea to production — AMDY LABS builds, launches, and supports world-class digital products for African businesses.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 30px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.3)' }}>
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section style={{ padding: '60px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ background: 'rgba(13,20,37,0.7)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 20, padding: 32, backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 52, height: 52, background: `${s.color}15`, border: `1px solid ${s.color}33`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><s.Icon size={24} color={s.color} /></div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 17, fontWeight: 700 }}>{s.label}</h3>
              </div>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                {s.benefits.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                    <span style={{ width: 17, height: 17, background: '#00e676', color: '#000', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    <span style={{ color: '#94a3b8' }}>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Get started →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', background: 'linear-gradient(135deg,#0a1628,#0d1f4a)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 20, padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 36, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>Not sure where to start?</h2>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Book a free 30-minute discovery call with Amdy. We&apos;ll map out the perfect solution for your business.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.3)' }}>Book Free Consultation</Link>
            <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ background: '#25d366', color: '#000', padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>💬 +1 (586) 344-2378</a>
          </div>
        </div>
      </div>
    </div>
  )
}
