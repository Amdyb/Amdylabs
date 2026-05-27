'use client'
import { useState } from 'react'

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

  return (
    <div style={{ paddingTop: 72 }}>
      <div style={{ position: 'relative', padding: '100px 24px 80px', textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 0%, #0d1f4a 0%, transparent 70%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(26,110,245,0.08)', border: '1px solid #1a6ef5', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 600, color: '#3d8bff', marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Contact</div>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(36px,6vw,64px)', fontWeight: 800, marginBottom: 20 }}>Let&apos;s build something great</h1>
        <p style={{ fontSize: 18, color: '#8b93a8', maxWidth: 600, margin: '0 auto' }}>Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
      </div>

      <div style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60 }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 24, fontWeight: 800, marginBottom: 32 }}>Get in touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { icon: '📧', title: 'Email', value: 'hello@amdylabs.com' },
                { icon: '💬', title: 'WhatsApp', value: '+1 (248) 800-1234' },
                { icon: '🌍', title: 'Locations', value: 'Dakar, Sénégal · Portland, Oregon, USA' },
                { icon: '⏰', title: 'Response Time', value: 'Within 24 hours · Mon–Sat' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(26,110,245,0.1)', border: '1px solid #1a6ef5', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: 4 }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: '#8b93a8' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 16, padding: 24, marginTop: 32 }}>
              <h4 style={{ fontWeight: 700, marginBottom: 8 }}>💬 Prefer WhatsApp?</h4>
              <p style={{ fontSize: 14, color: '#8b93a8', marginBottom: 16 }}>Chat directly with our team for fast answers.</p>
              <a href="https://wa.me/12488001234" target="_blank" rel="noreferrer" style={{ display: 'block', background: '#25d366', color: '#000', padding: '12px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>Open WhatsApp →</a>
            </div>

            <div style={{ background: 'rgba(26,110,245,0.08)', border: '1px solid #1e2d4a', borderRadius: 16, padding: 24, marginTop: 16 }}>
              <h4 style={{ fontWeight: 700, marginBottom: 8 }}>📅 Book a Free Call</h4>
              <p style={{ fontSize: 14, color: '#8b93a8', marginBottom: 16 }}>30-min discovery call — we review your project for free.</p>
              <a href="https://calendly.com/amdylabs" target="_blank" rel="noreferrer" style={{ display: 'block', background: '#1a6ef5', color: '#fff', padding: '12px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>Schedule on Calendly →</a>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: '#0d1425', border: '1px solid #1e2d4a', borderRadius: 20, padding: 40 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Message sent!</h3>
                <p style={{ color: '#8b93a8' }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 22, fontWeight: 700, marginBottom: 28 }}>Send us a message</h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#8b93a8', marginBottom: 6 }}>Full Name *</label>
                      <input style={{ width: '100%', background: '#080d1a', border: '1px solid #1e2d4a', borderRadius: 10, padding: '12px 14px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} placeholder="Mamadou Diallo" value={form.name} onChange={e=>set('name',e.target.value)} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#8b93a8', marginBottom: 6 }}>Email *</label>
                      <input type="email" style={{ width: '100%', background: '#080d1a', border: '1px solid #1e2d4a', borderRadius: 10, padding: '12px 14px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} placeholder="you@email.com" value={form.email} onChange={e=>set('email',e.target.value)} required />
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#8b93a8', marginBottom: 6 }}>WhatsApp / Phone</label>
                    <input style={{ width: '100%', background: '#080d1a', border: '1px solid #1e2d4a', borderRadius: 10, padding: '12px 14px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} placeholder="+221 77 XXX XXXX" value={form.phone} onChange={e=>set('phone',e.target.value)} />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#8b93a8', marginBottom: 6 }}>What do you need?</label>
                    <select style={{ width: '100%', background: '#080d1a', border: '1px solid #1e2d4a', borderRadius: 10, padding: '12px 14px', color: form.service ? '#fff' : '#8b93a8', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} value={form.service} onChange={e=>set('service',e.target.value)}>
                      <option value="">Select a service...</option>
                      <option>Mobile App Development</option>
                      <option>Website Development</option>
                      <option>POS / Business Software</option>
                      <option>E-commerce Store</option>
                      <option>Branding & Marketing</option>
                      <option>CaissePro Subscription</option>
                      <option>AI Integration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#8b93a8', marginBottom: 6 }}>Tell us about your project *</label>
                    <textarea style={{ width: '100%', background: '#080d1a', border: '1px solid #1e2d4a', borderRadius: 10, padding: '12px 14px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box', resize: 'vertical', minHeight: 120 }} placeholder="Describe your idea, business, target market..." value={form.message} onChange={e=>set('message',e.target.value)} required />
                  </div>
                  <button type="submit" disabled={loading} style={{ width: '100%', background: '#1a6ef5', color: '#fff', border: 'none', borderRadius: 10, padding: '16px', fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
