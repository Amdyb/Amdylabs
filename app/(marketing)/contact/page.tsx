'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, X, Link2, Globe2, Share2, ArrowRight, Calendar } from 'lucide-react'
import { useLang } from '@/lib/lang'

const T = {
  fr: {
    tag: 'Nous contacter', title1: 'DÉMARRONS QUELQUE', title2: 'CHOSE DE GRAND',
    sub: 'Partagez votre idée. Nous vous répondrons dans les 24 heures. Appel de découverte gratuit, sans engagement.',
    infoTitle: 'Informations de contact',
    contacts: [
      { title: 'Contact général', value: 'contact@amdylabs.com', link: 'mailto:contact@amdylabs.com' },
      { title: 'Support', value: 'support@amdylabs.com', link: 'mailto:support@amdylabs.com' },
      { title: 'Facturation', value: 'billing@amdylabs.com', link: 'mailto:billing@amdylabs.com' },
      { title: 'Adresse', value: '10629 W 7 Mile, Detroit, MI 48221', link: 'https://maps.google.com/?q=10629+W+7+Mile+Detroit+MI+48221' },
      { title: 'Réponse', value: 'Sous 24h · Lun–Sam', link: null },
    ],
    whatsappTitle: 'Préférez WhatsApp ?', whatsappDesc: 'Envoyez un message directement à Amdy.', whatsappBtn: 'Ouvrir WhatsApp',
    calendlyTitle: 'Réserver un appel gratuit', calendlyDesc: 'Appel de découverte 30 min, gratuit.', calendlyBtn: 'Planifier sur Calendly',
    formTitle: 'Envoyez-nous un message',
    fields: { name: 'Nom complet *', email: 'Email *', phone: 'Téléphone / WhatsApp', service: 'De quoi avez-vous besoin ?', message: 'Décrivez votre projet *' },
    placeholder: { name: 'Mamadou Diallo', email: 'vous@email.com', phone: '+221 77 XXX XXXX', message: 'Décrivez votre idée, votre entreprise, votre marché cible...' },
    services: ['Développement mobile', 'Développement web', 'Logiciel POS', 'Plateforme SaaS', 'E-Commerce', 'Branding & Marketing', 'Abonnement CaissePro', 'IA & Automatisation', 'Autre'],
    sending: 'Envoi en cours...', sendBtn: 'Envoyer le message',
    sentTitle: 'Message envoyé !', sentDesc: 'Nous vous répondrons dans les 24 heures.',
    footer: 'contact@amdylabs.com',
  },
  en: {
    tag: 'Get in touch', title1: 'LET\'S BUILD SOMETHING', title2: 'GREAT TOGETHER',
    sub: 'Share your idea. We\'ll get back to you within 24 hours. Free discovery call — no commitment.',
    infoTitle: 'Contact Information',
    contacts: [
      { title: 'General', value: 'contact@amdylabs.com', link: 'mailto:contact@amdylabs.com' },
      { title: 'Support', value: 'support@amdylabs.com', link: 'mailto:support@amdylabs.com' },
      { title: 'Billing', value: 'billing@amdylabs.com', link: 'mailto:billing@amdylabs.com' },
      { title: 'Address', value: '10629 W 7 Mile, Detroit, MI 48221', link: 'https://maps.google.com/?q=10629+W+7+Mile+Detroit+MI+48221' },
      { title: 'Response time', value: 'Within 24h · Mon–Sat', link: null },
    ],
    whatsappTitle: 'Prefer WhatsApp?', whatsappDesc: 'Send a message directly to Amdy.', whatsappBtn: 'Open WhatsApp',
    calendlyTitle: 'Book a free call', calendlyDesc: '30-min discovery call, completely free.', calendlyBtn: 'Schedule on Calendly',
    formTitle: 'Send us a message',
    fields: { name: 'Full name *', email: 'Email *', phone: 'Phone / WhatsApp', service: 'What do you need?', message: 'Describe your project *' },
    placeholder: { name: 'Your full name', email: 'you@email.com', phone: '+1 555 000 0000', message: 'Describe your idea, your business, your target market...' },
    services: ['Mobile development', 'Web development', 'POS software', 'SaaS platform', 'E-Commerce', 'Branding & Marketing', 'CaissePro subscription', 'AI & Automation', 'Other'],
    sending: 'Sending...', sendBtn: 'Send Message',
    sentTitle: 'Message sent!', sentDesc: 'We\'ll get back to you within 24 hours.',
    footer: 'contact@amdylabs.com',
  }
}

const ICONS_CONTACT = [Mail, Mail, Mail, MapPin, Clock]

export default function ContactPage() {
  const { lang } = useLang()
  const t = T[lang === 'ar' ? 'en' : lang]
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)',
    borderRadius: 10, padding: '13px 15px', color: '#f8fafc', fontSize: 14,
    outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', transition: 'border-color 0.2s',
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
  }

  return (
    <div style={{ paddingTop: 72, background: '#060818', color: '#f8fafc' }}>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '100px 24px 70px', background: '#060818', overflow: 'hidden', textAlign: 'center' }}>
        <Image src="/hero-contact.png" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 35%', opacity: 0.30 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,8,24,0.88) 0%, rgba(13,19,64,0.62) 40%, rgba(6,8,24,0.92) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -60, right: -60, width: 360, height: 360, background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 280, height: 280, background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#60a5fa', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>{t.tag}</p>
          <h1 style={{ fontFamily: 'Syne, system-ui', fontSize: 'clamp(36px, 5.5vw, 62px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 22 }}>
            {t.title1}<br /><span style={{ color: '#60a5fa' }}>{t.title2}</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(148,163,184,0.85)', maxWidth: 500, margin: '0 auto', lineHeight: 1.72 }}>{t.sub}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '60px 24px 90px', background: '#07091c' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>

          {/* LEFT */}
          <div>
            <h2 style={{ fontFamily: 'Syne, system-ui', fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#f8fafc', marginBottom: 28 }}>{t.infoTitle}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
              {t.contacts.map((item, i) => {
                const Icon = ICONS_CONTACT[i]
                return (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                    <div style={{ width: 36, height: 36, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} color="#60a5fa" />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: 'rgba(148,163,184,0.6)', marginBottom: 2, fontWeight: 500 }}>{item.title}</div>
                      {item.link
                        ? <a href={item.link} style={{ fontSize: 14, fontWeight: 600, color: '#f8fafc', textDecoration: 'none' }}>{item.value}</a>
                        : <div style={{ fontSize: 14, fontWeight: 600, color: '#f8fafc' }}>{item.value}</div>}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* WhatsApp */}
            <div style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: 14, padding: 22, marginBottom: 12, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#4ade80', marginBottom: 6 }}>{t.whatsappTitle}</div>
              <p style={{ fontSize: 13, color: 'rgba(148,163,184,0.75)', marginBottom: 14 }}>{t.whatsappDesc}</p>
              <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#25d366', color: '#000', padding: '12px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                <MessageCircle size={16} /> {t.whatsappBtn}
              </a>
            </div>

            {/* Calendly */}
            <div style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: 14, padding: 22, marginBottom: 20, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#60a5fa', marginBottom: 6 }}>{t.calendlyTitle}</div>
              <p style={{ fontSize: 13, color: 'rgba(148,163,184,0.75)', marginBottom: 14 }}>{t.calendlyDesc}</p>
              <a href="https://calendly.com/amdylabs" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', padding: '12px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: '0 4px 20px rgba(26,110,245,0.3)' }}>
                <Calendar size={16} /> {t.calendlyBtn}
              </a>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { href: 'https://www.linkedin.com/in/a-boubacar-52178b437/', Icon: Link2, color: '#60a5fa' },
                { href: 'https://wa.me/15863442378', Icon: MessageCircle, color: '#4ade80' },
                { href: 'mailto:contact@amdylabs.com', Icon: Mail, color: 'rgba(148,163,184,0.7)' },
              ].map(({ href, Icon, color }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" style={{ width: 38, height: 38, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', color, textDecoration: 'none' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 36, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ width: 60, height: 60, background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Mail size={26} color="#4ade80" />
                </div>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 24, fontWeight: 800, color: '#f8fafc', marginBottom: 10 }}>{t.sentTitle}</h3>
                <p style={{ fontSize: 14, color: 'rgba(148,163,184,0.75)', lineHeight: 1.7 }}>{t.sentDesc}</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Syne, system-ui', fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', color: '#f8fafc', marginBottom: 24 }}>{t.formTitle}</h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                    {[{ key: 'name', type: 'text' }, { key: 'email', type: 'email' }].map(({ key, type }) => (
                      <div key={key}>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(148,163,184,0.6)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{(t.fields as any)[key]}</label>
                        <input type={type} style={inputStyle} placeholder={(t.placeholder as any)[key]} value={(form as any)[key]} onChange={e => set(key, e.target.value)} required onFocus={e => (e.target as HTMLElement).style.borderColor = '#3b82f6'} onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(148,163,184,0.6)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.fields.phone}</label>
                    <input style={inputStyle} placeholder={t.placeholder.phone} value={form.phone} onChange={e => set('phone', e.target.value)} onFocus={e => (e.target as HTMLElement).style.borderColor = '#3b82f6'} onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(148,163,184,0.6)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.fields.service}</label>
                    <select style={{ ...inputStyle, color: form.service ? '#f8fafc' : 'rgba(148,163,184,0.5)' }} value={form.service} onChange={e => set('service', e.target.value)}>
                      <option value="" style={{ background: '#07091c' }}>Choisir...</option>
                      {t.services.map(s => <option key={s} value={s} style={{ background: '#07091c' }}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(148,163,184,0.6)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.fields.message}</label>
                    <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }} placeholder={t.placeholder.message} value={form.message} onChange={e => set('message', e.target.value)} required onFocus={e => (e.target as HTMLElement).style.borderColor = '#3b82f6'} onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                  <button type="submit" disabled={loading} style={{ width: '100%', background: loading ? 'rgba(59,130,246,0.4)' : 'linear-gradient(135deg,#1a6ef5,#0050c8)', color: '#fff', border: 'none', borderRadius: 10, padding: '15px', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit', boxShadow: '0 4px 20px rgba(26,110,245,0.35)' }}>
                    {loading ? t.sending : <><ArrowRight size={17} /> {t.sendBtn}</>}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(148,163,184,0.5)', marginTop: 12 }}>{t.footer}</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
