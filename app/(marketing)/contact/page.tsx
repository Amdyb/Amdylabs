'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, X, Link2, Globe2, Share2, ArrowRight } from 'lucide-react'

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

  const inputStyle: React.CSSProperties = { width: '100%', background: 'rgba(6,12,26,0.8)', border: '1px solid rgba(30,45,74,0.6)', borderRadius: 10, padding: '13px 15px', color: '#e2e8f0', fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: 'system-ui' }

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ position: 'relative', padding: '110px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #0b1d4a 0%, transparent 65%)' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a6ef5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>Nous contacter</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(38px,6vw,68px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>Construisons quelque chose<br />de grand ensemble</h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>Parlez-nous de votre projet et nous vous répondrons dans les 24 heures. Appel de découverte gratuit — sans engagement.</p>
        </div>
      </section>

      <section style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60 }}>
          <div>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 26, fontWeight: 800, marginBottom: 36, letterSpacing: '-0.01em' }}>Contacter AMDY LABS</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { Icon: Phone, title: 'Téléphone', value: '+1 (586) 344-2378', link: 'tel:+15863442378' },
                { Icon: Mail, title: 'Email', value: 'hello@amdylabs.com', link: 'mailto:hello@amdylabs.com' },
                { Icon: MapPin, title: 'Localisations', value: 'Portland, Oregon, USA · Dakar, Sénégal', link: null },
                { Icon: Clock, title: 'Délai de réponse', value: 'Sous 24 heures · Lun–Sam', link: null },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(26,110,245,0.1)', border: '1px solid rgba(26,110,245,0.3)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <item.Icon size={18} color="#60a5fa" />
                  </div>
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

            <div style={{ background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.2)', borderRadius: 16, padding: 24, marginTop: 32 }}>
              <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Préférez-vous WhatsApp ?</div>
              <p style={{ fontSize: 13, color: '#64748b', marginBottom: 16, lineHeight: 1.6 }}>Envoyez un message directement à Amdy pour des réponses rapides.</p>
              <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#25d366', color: '#000', padding: '13px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                <MessageCircle size={16} /> Ouvrir WhatsApp
              </a>
            </div>

            <div style={{ background: 'rgba(26,110,245,0.07)', border: '1px solid rgba(26,110,245,0.2)', borderRadius: 16, padding: 24, marginTop: 14 }}>
              <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Réserver un appel gratuit</div>
              <p style={{ fontSize: 13, color: '#64748b', marginBottom: 16, lineHeight: 1.6 }}>Appel de découverte de 30 minutes. Nous analysons votre projet gratuitement.</p>
              <a href="https://calendly.com/amdylabs" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#1a6ef5', color: '#fff', padding: '13px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                <ArrowRight size={16} /> Planifier sur Calendly
              </a>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {[X, Link2, Globe2, Share2].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 38, height: 38, background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', textDecoration: 'none' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(13,20,37,0.8)', border: '1px solid rgba(30,45,74,0.5)', borderRadius: 20, padding: 40, backdropFilter: 'blur(10px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '50px 0' }}>
                <div style={{ width: 64, height: 64, background: 'rgba(0,230,118,0.1)', border: '1px solid rgba(0,230,118,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Mail size={28} color="#00e676" />
                </div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 26, fontWeight: 800, marginBottom: 12 }}>Message envoyé !</h3>
                <p style={{ color: '#64748b', lineHeight: 1.7 }}>Nous vous répondrons dans les 24 heures.<br />Amdy pourra également vous contacter directement sur WhatsApp.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 22, fontWeight: 800, marginBottom: 28, letterSpacing: '-0.01em' }}>Envoyez-nous un message</h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Nom complet *</label>
                      <input style={inputStyle} placeholder="Mamadou Diallo" value={form.name} onChange={e => set('name', e.target.value)} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email *</label>
                      <input type="email" style={inputStyle} placeholder="vous@email.com" value={form.email} onChange={e => set('email', e.target.value)} required />
                    </div>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Téléphone / WhatsApp</label>
                    <input style={inputStyle} placeholder="+221 77 XXX XXXX" value={form.phone} onChange={e => set('phone', e.target.value)} />
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>De quoi avez-vous besoin ?</label>
                    <select style={{ ...inputStyle, color: form.service ? '#e2e8f0' : '#475569' }} value={form.service} onChange={e => set('service', e.target.value)}>
                      <option value="">Choisir un service...</option>
                      <option>Développement d&apos;application mobile</option>
                      <option>Développement de site web</option>
                      <option>Logiciel POS / Gestion d&apos;entreprise</option>
                      <option>Plateforme SaaS</option>
                      <option>Boutique e-commerce</option>
                      <option>Branding & Marketing</option>
                      <option>Abonnement CaissePro</option>
                      <option>IA / Automatisation</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Parlez-nous de votre projet *</label>
                    <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }} placeholder="Décrivez votre idée, votre entreprise, votre marché cible et vos besoins spécifiques..." value={form.message} onChange={e => set('message', e.target.value)} required />
                  </div>
                  <button type="submit" disabled={loading} style={{ width: '100%', background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', border: 'none', borderRadius: 10, padding: '16px', fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, boxShadow: '0 8px 32px rgba(26,110,245,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    {loading ? 'Envoi en cours...' : <><ArrowRight size={18} /> Envoyer le message</>}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 12, color: '#334155', marginTop: 14 }}>Réponse sous 24h · WhatsApp : +1 (586) 344-2378</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
