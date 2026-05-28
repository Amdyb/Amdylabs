'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, X, Link2, Globe2, Share2, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  function set(k: string, v: string) { setForm(f => ({...f, [k]: v})) }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
  }

  const inputStyle = { width: '100%', background: 'rgba(6,12,26,0.8)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 10, padding: '13px 15px', color: '#e2e8f0', fontSize: 14, outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'system-ui' }

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ position: 'relative', padding: '110px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #0b1d4a 0%, transparent 65%)' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px,6vw,68px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>Let&apos;s build something<br />great together</h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>Tell us about your project and we&apos;ll respond within 24 hours. Free discovery call — no commitment.</p>
        </div>
      </section>

      <section style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60 }}>

          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 26, fontWeight: 800, marginBottom: 36, letterSpacing: '-0.01em' }}>Contact AMDY LABS</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '📞', title: 'Phone', value: '+1 (586) 344-2378', link: 'tel:+15863442378' },
                { Icon: Mail, title: 'Email', value: 'hello@amdylabs.com', link: 'mailto:hello@amdylabs.com' },
                { Icon: MapPin, title: 'Locations', value: 'USA · Europe · Africa (Dakar)', link: null },
                { Icon: Clock, title: 'Response Time', value: 'Within 24 hours · Mon–Sat', link: null },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.25)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: '#475569', marginBottom: 3 }}>{item.title}</div>
                    {item.link
                      ? <a href={item.link} style={{ fontSize: 15, fontWeight: 600, color: '#e2e8f0', textDecoration: 'none' }}>{item.value}</a>
                      : <div style={{ fontSize: 15, fontWeight: 600, color: '#e2e8f0' }}>{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div style={{ background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.2)', borderRadius: 16, padding: 24, marginTop: 32 }}>
              <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>💬 Prefer WhatsApp?</div>
              <p style={{ fontSize: 13, color: '#64748b', marginBottom: 16, lineHeight: 1.6 }}>Message Amdy directly for fast answers and project discussions.</p>
              <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'block', background: '#25d366', color: '#000', padding: '13px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>
                Open WhatsApp →
              </a>
            </div>

            {/* Calendly */}
            <div style={{ background: 'rgba(26,110,245,0.07)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 16, padding: 24, marginTop: 14 }}>
              <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Book a Free Call</div>
              <p style={{ fontSize: 13, color: '#64748b', marginBottom: 16, lineHeight: 1.6 }}>30-minute discovery call. We review your project and give free advice.</p>
              <a href="https://calendly.com/amdylabs" target="_blank" rel="noreferrer" style={{ display: 'block', background: '#1a6ef5', color: '#fff', padding: '13px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>
                Schedule on Calendly
              </a>
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {[['𝕏', '#'], ['in', '#'], ['f', '#'], ['◎', '#'], ['▶', '#']].map(([icon, href], i) => (
                <a key={i} href={href} style={{ width: 38, height: 38, background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', textDecoration: 'none', fontSize: 13 }}>{icon}</a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 20, padding: 40, backdropFilter: 'blur(10px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '50px 0' }}>
                <div style={{ fontSize: 68, marginBottom: 20 }}>🎉</div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 26, fontWeight: 800, marginBottom: 12 }}>Message sent!</h3>
                <p style={{ color: '#64748b', lineHeight: 1.7 }}>We&apos;ll get back to you within 24 hours.<br />Amdy may also reach out on WhatsApp directly.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 22, fontWeight: 800, marginBottom: 28, letterSpacing: '-0.01em' }}>Send us a message</h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Full Name *</label>
                      <input style={inputStyle} placeholder="Mamadou Diallo" value={form.name} onChange={e => set('name', e.target.value)} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email *</label>
                      <input type="email" style={inputStyle} placeholder="you@email.com" value={form.email} onChange={e => set('email', e.target.value)} required />
                    </div>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Phone / WhatsApp</label>
                    <input style={inputStyle} placeholder="+221 77 XXX XXXX" value={form.phone} onChange={e => set('phone', e.target.value)} />
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>What do you need?</label>
                    <select style={{ ...inputStyle, color: form.service ? '#e2e8f0' : '#475569' }} value={form.service} onChange={e => set('service', e.target.value)}>
                      <option value="">Select a service...</option>
                      <option>Mobile App Development</option>
                      <option>Website Development</option>
                      <option>POS / Business Software</option>
                      <option>SaaS Platform</option>
                      <option>E-Commerce Store</option>
                      <option>Branding & Marketing</option>
                      <option>CaissePro Subscription</option>
                      <option>AI / Automation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tell us about your project *</label>
                    <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }} placeholder="Describe your idea, your business, target market, and any specific requirements..." value={form.message} onChange={e => set('message', e.target.value)} required />
                  </div>
                  <button type="submit" disabled={loading} style={{ width: '100%', background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', border: 'none', borderRadius: 10, padding: '16px', fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, boxShadow: '0 8px 32px rgba(26,110,245,0.3)' }}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 12, color: '#334155', marginTop: 14 }}>We respond within 24 hours · WhatsApp: +1 (586) 344-2378</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
