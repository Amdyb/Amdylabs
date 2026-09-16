'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, TrendingUp, Globe, Users, DollarSign, Shield, Zap, BarChart2, CheckCircle2, MessageCircle, Mail, MapPin } from 'lucide-react'

const METRICS = [
  { value: '38+', label: 'Merchants Active', sub: 'on CaissePro platform' },
  { value: '217+', label: 'Products Tracked', sub: 'across merchant catalogs' },
  { value: '$712B', label: 'Market by 2050', sub: 'African digital economy' },
  { value: '4', label: 'Live Products', sub: 'CaissePro · VYBZ · ImmoPro · Mon Livreur' },
]

const MARKET = [
  { stat: '1.4B', desc: 'People in Africa — fastest growing consumer market on earth' },
  { stat: '43%', desc: 'Mobile money adoption in Sub-Saharan Africa vs 6% credit card usage' },
  { stat: '$3T', desc: 'Informal economy in Africa — largely undigitized and underserved' },
  { stat: '70%', desc: 'of African businesses have no digital presence or management tools' },
]

const PRODUCTS = [
  { name: 'CaissePro', url: 'caissepro.app', status: 'Revenue-generating', desc: 'Multi-tenant SaaS POS platform for African merchants. Subscription-based, Wave/Orange Money integrated, WhatsApp-native.', color: '#1a6ef5' },
  { name: 'ImmoPro', url: 'immopro.agency', status: 'Live', desc: 'Real estate listings and agent management platform for the Senegalese market. First-mover advantage in a $2B+ sector.', color: '#f59e0b' },
  { name: 'VYBZ', url: 'vybz.city', status: 'Live', desc: 'Social events and nightlife platform for Dakar and the African diaspora. Network-effect growth model.', color: '#8b5cf6' },
  { name: 'Mon Livreur', url: '', status: 'In Development', desc: 'Last-mile delivery and logistics platform. Targeting the $8B African e-commerce logistics gap.', color: '#00e676' },
]

const REVENUE_MODELS = [
  { Icon: DollarSign, title: 'SaaS Subscriptions', desc: 'Monthly recurring revenue from CaissePro merchants. Free to Starter ($5K XOF) to Business ($15K) to Premium ($35K).' },
  { Icon: BarChart2, title: 'Transaction Fees', desc: 'Micro-commission on Wave and Orange Money transactions processed through our platform.' },
  { Icon: Globe, title: 'Platform Licensing', desc: 'White-label licensing of our POS and e-commerce infrastructure to banks and telecoms in West Africa.' },
  { Icon: Users, title: 'Enterprise Contracts', desc: 'Custom development and managed software contracts with African corporations and government agencies.' },
]

const COMPETITIVE = [
  { area: 'Native Wave & Orange Money', us: true, comp: false, note: 'Deep mobile money integration' },
  { area: 'Offline-First Architecture', us: true, comp: false, note: 'Works on 2G networks' },
  { area: 'Multilingual (FR/EN/Wolof)', us: true, comp: false, note: 'Built for local markets' },
  { area: 'WhatsApp-Native Commerce', us: true, comp: false, note: '85%+ penetration via WhatsApp' },
  { area: 'CFA Currency Support', us: true, comp: true, note: 'XOF, XAF, GHS, NGN' },
  { area: 'US-Based Legal Entity', us: true, comp: false, note: 'Michigan LLC — US compliant' },
]

const TIMELINE = [
  { year: '2023', title: 'Founded', desc: 'AMDY LABS established in Detroit, Michigan. First product concept: CaissePro.' },
  { year: '2024', title: 'First Products Live', desc: 'CaissePro launched with real merchants. ImmoPro and VYBZ deployed.' },
  { year: '2025', title: 'Platform Growth', desc: '38+ active merchants, 4 live products, team across US, France and Senegal.' },
  { year: '2026', title: 'Seed Round', desc: 'Seeking investment to accelerate merchant acquisition and expand to 5 new African markets.' },
]

const FAQ_INV = [
  ['What is the legal structure of AMDY LABS?', 'AMDY LABS is a Michigan-based Limited Liability Company (LLC) founded and operated in the United States. All financial operations comply with US regulations.'],
  ['What stage is the company at?', 'We are at the pre-seed/seed stage with live revenue-generating products, a distributed team, and proven product-market fit in West Africa.'],
  ['What is the investment ask?', 'We are currently raising a seed round to accelerate merchant acquisition on CaissePro, expand to 3 additional African markets, and grow our engineering team. Contact us for the full deck.'],
  ['Who are the founders?', 'AMDY LABS was founded by Amdy Boubacar, a Senegalese-American entrepreneur based in Detroit, Michigan, with deep roots in West African markets and a team across the US, France, and Senegal.'],
  ['How do you make money today?', 'CaissePro generates monthly subscription revenue from active merchant accounts. ImmoPro generates listing fees and agent commissions.'],
]

export default function InvestorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ paddingTop: 72, fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '100px 24px 70px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #0b1d4a 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: '40%', right: '10%', width: 400, height: 400, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.06 }} />
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.3)', borderRadius: 100, padding: '6px 18px 6px 12px', fontSize: 11, fontWeight: 600, color: '#60a5fa', marginBottom: 28, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <span style={{ width: 7, height: 7, background: '#00e676', borderRadius: '50%', display: 'inline-block' }} />
            Investor Relations
          </div>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 22, color: '#fff' }}>
            Investing in Africa&apos;s<br />
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #00e676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Digital Infrastructure</span>
          </h1>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.72 }}>
            AMDY LABS is building the operating system for African commerce — starting with West Africa&apos;s 400M+ undigitized merchants, and scaling globally.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:contact@amdylabs.com?subject=Investment Inquiry — AMDY LABS" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '14px 30px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.35)' }}>
              <Mail size={15} /> Request Investor Deck
            </a>
            <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '14px 30px', borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)' }}>
              <MessageCircle size={15} /> Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* TRACTION */}
      <section style={{ padding: '10px 24px 70px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          {METRICS.map((m, i) => (
            <div key={i} style={{ background: 'rgba(13,20,37,0.9)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 14, padding: '26px 22px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Syne, system-ui', fontSize: 40, fontWeight: 800, color: '#60a5fa', letterSpacing: '-0.03em', lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginTop: 10, marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.5 }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARKET */}
      <section style={{ padding: '70px 24px', background: 'linear-gradient(180deg, #080d1a, #050709)', borderTop: '1px solid rgba(30,45,74,0.4)', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Market Opportunity</p>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 18, color: '#fff' }}>The largest untapped<br />market on earth</h2>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.72, marginBottom: 24 }}>Africa is the world&apos;s youngest continent — 60% under 25. Mobile money adoption is outpacing every other region. AMDY LABS is positioned at the center of this transformation.</p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#60a5fa', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
              View full market analysis <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {MARKET.map((m, i) => (
              <div key={i} style={{ background: 'rgba(26,110,245,0.05)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 14, padding: '20px 16px' }}>
                <div style={{ fontFamily: 'Syne, system-ui', fontSize: 34, fontWeight: 800, color: '#60a5fa', letterSpacing: '-0.03em', marginBottom: 8, lineHeight: 1 }}>{m.stat}</div>
                <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.6 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: '70px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Product Portfolio</p>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, color: '#fff' }}>Four products. One platform.</h2>
          <p style={{ fontSize: 15, color: '#64748b', maxWidth: 540, lineHeight: 1.7, marginBottom: 36 }}>Each product targets a distinct vertical while sharing infrastructure — reducing costs and increasing platform defensibility.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginBottom: 60 }}>
            {PRODUCTS.map((p, i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 14, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 16, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>{p.name}</h3>
                  <span style={{ fontSize: 10, fontWeight: 600, color: p.status === 'Revenue-generating' ? '#00e676' : p.status === 'Live' ? '#60a5fa' : '#475569', background: p.status === 'Revenue-generating' ? 'rgba(0,230,118,0.1)' : p.status === 'Live' ? 'rgba(96,165,250,0.1)' : 'rgba(71,85,105,0.15)', border: `1px solid ${p.status === 'Revenue-generating' ? 'rgba(0,230,118,0.25)' : p.status === 'Live' ? 'rgba(96,165,250,0.25)' : 'rgba(71,85,105,0.3)'}`, borderRadius: 20, padding: '3px 9px', whiteSpace: 'nowrap', flexShrink: 0 }}>{p.status}</span>
                </div>
                {p.url && <div style={{ fontSize: 11, color: p.color, fontWeight: 500 }}>{p.url}</div>}
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, flex: 1 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Revenue Models</p>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 32, color: '#fff' }}>Multiple paths to revenue</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
            {REVENUE_MODELS.map(({ Icon, title, desc }, i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 14, padding: 22 }}>
                <div style={{ width: 42, height: 42, background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={19} color="#60a5fa" />
                </div>
                <h4 style={{ fontFamily: 'Syne, system-ui', fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8, color: '#e2e8f0' }}>{title}</h4>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE */}
      <section style={{ padding: '70px 24px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)', borderBottom: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Competitive Position</p>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 32, color: '#fff' }}>Built for markets others ignore</h2>
          <div style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', padding: '12px 22px', background: 'rgba(26,110,245,0.06)', borderBottom: '1px solid rgba(30,45,74,0.5)', fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', gap: 16 }}>
              <div>Capability</div>
              <div style={{ textAlign: 'center', color: '#60a5fa' }}>AMDY LABS</div>
              <div style={{ textAlign: 'center' }}>Competitors</div>
            </div>
            {COMPETITIVE.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', padding: '14px 22px', borderBottom: i < COMPETITIVE.length - 1 ? '1px solid rgba(30,45,74,0.35)' : 'none', gap: 16, alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#e2e8f0', marginBottom: 2 }}>{row.area}</div>
                  <div style={{ fontSize: 11, color: '#334155' }}>{row.note}</div>
                </div>
                <div style={{ textAlign: 'center', color: '#00e676', fontWeight: 700, fontSize: 16 }}>{row.us ? '✓' : '✗'}</div>
                <div style={{ textAlign: 'center', color: '#334155', fontSize: 16 }}>{row.comp ? '✓' : '✗'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '70px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Company Timeline</p>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 40, color: '#fff' }}>From idea to platform</h2>
          <div style={{ position: 'relative', paddingLeft: 20 }}>
            <div style={{ position: 'absolute', left: 19, top: 0, bottom: 0, width: 1, background: 'linear-gradient(180deg, #1a6ef5 0%, rgba(30,45,74,0.3) 100%)' }} />
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, marginBottom: 28, position: 'relative' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: i === TIMELINE.length - 1 ? 'linear-gradient(135deg,#1a6ef5,#0050c8)' : 'rgba(13,20,37,0.9)', border: `1px solid ${i === TIMELINE.length - 1 ? '#1a6ef5' : 'rgba(30,45,74,0.6)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1, marginLeft: -19 }}>
                  <span style={{ fontFamily: 'Syne, system-ui', fontSize: 9, fontWeight: 800, color: i === TIMELINE.length - 1 ? '#fff' : '#60a5fa' }}>{item.year}</span>
                </div>
                <div style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 12, padding: '16px 20px', flex: 1 }}>
                  <div style={{ fontFamily: 'Syne, system-ui', fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 5, color: i === TIMELINE.length - 1 ? '#60a5fa' : '#e2e8f0' }}>{item.title}{i === TIMELINE.length - 1 && ' — Now'}</div>
                  <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 24px', background: '#080d1a', borderTop: '1px solid rgba(30,45,74,0.4)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#1a6ef5', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Due Diligence</p>
          <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 32, color: '#fff' }}>Investor FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {FAQ_INV.map(([q, a], i) => (
              <div key={i} style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 11, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'none', border: 'none', color: '#e2e8f0', cursor: 'pointer', fontSize: 14, fontWeight: 600, textAlign: 'left', gap: 16, fontFamily: 'inherit' }}>
                  {q}<span style={{ fontSize: 18, color: '#1a6ef5', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s', flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: '0 20px 16px', fontSize: 13, color: '#64748b', lineHeight: 1.72 }}>{a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '70px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg,#0a1628,#0d1f4a)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 18, padding: '56px 44px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 350, height: 350, background: '#1a6ef5', borderRadius: '50%', filter: 'blur(100px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.07 }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 14, color: '#fff' }}>Ready to invest in Africa&apos;s digital future?</h2>
              <p style={{ color: '#64748b', fontSize: 15, marginBottom: 32, maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.7 }}>We are currently raising our seed round. Request the full investor deck and financial projections.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
                <a href="mailto:contact@amdylabs.com?subject=Investment Inquiry — AMDY LABS" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '13px 28px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: '0 8px 32px rgba(26,110,245,0.35)' }}>
                  <Mail size={15} /> Request Full Deck
                </a>
                <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d366', color: '#000', padding: '13px 28px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                  <MessageCircle size={15} /> +1 (586) 344-2378
                </a>
              </div>
              <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { Icon: MapPin, text: '10629 W 7 Mile, Detroit, MI 48221' },
                  { Icon: Shield, text: 'Michigan LLC — US Registered' },
                  { Icon: Globe, text: 'amdylabs.com' },
                ].map(({ Icon, text }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#334155' }}>
                    <Icon size={12} color="#475569" />{text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
