'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, MessageCircle, Rocket } from 'lucide-react'
import { useLang } from '@/lib/lang'

/* ─── tiny helpers ──────────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function useCountUp(target: number, duration = 1400, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf: number
    let current = 0
    const step = target / (duration / 16)
    const tick = () => {
      current = Math.min(current + step, target)
      setVal(Math.floor(current))
      if (current < target) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])
  return val
}

/* ─── content ───────────────────────────────────────────────────────────── */
const T = {
  fr: {
    nav: { home: 'Accueil', services: 'Services', projects: 'Projets', about: 'À propos', investors: 'Investisseurs', contact: 'Contact', cta: 'Démarrer un projet' },
    tagline: 'Studio Logiciel',
    h1: 'Nous construisons des produits\nqui fonctionnent vraiment.',
    sub: 'Nous construisons des logiciels pour les entrepreneurs aux États-Unis et à travers l\'Afrique.',
    cta1: 'Démarrer un projet', cta2: 'Voir nos solutions',
    stats: [
      { val: 38, suffix: '+', label: 'Marchands actifs' },
      { val: 4,  suffix: '',  label: 'Produits en ligne' },
      { val: 5,  suffix: '',  label: 'Pays atteints' },
    ],
    productsLabel: 'Nos produits', seeAll: 'Voir tout',
    servicesLabel: 'Ce que nous construisons',
    servicesTitle: 'Applications. Plateformes. Outils métier.',
    servicesSub: 'De l\'idée au lancement — nous concevons, développons et maintenons des produits digitaux de classe mondiale.',
    services: [
      { name: 'Applications Mobiles', desc: 'iOS & Android natifs et cross-platform avec React Native et Expo.' },
      { name: 'Sites Web & SaaS', desc: 'Plateformes web évolutives, tableaux de bord, portails et solutions e-commerce.' },
      { name: 'Systèmes POS', desc: 'Caisses modernes avec Mobile Money, reçus WhatsApp et gestion d\'inventaire.' },
      { name: 'Solutions IA', desc: 'Automatisation intelligente, chatbots et analyse de données pour votre activité.' },
    ],
    whyLabel: 'Pourquoi AMDY LABS',
    whyTitle: 'Un studio, deux marchés.',
    whySub: 'Fondé par Amdy Boubacar — entrepreneur sénégalais basé à Detroit. Nous comprenons les deux côtés : la rigueur américaine et la réalité africaine.',
    checks: [
      'Intégrations Wave, Orange Money, MTN Mobile Money',
      'Produits multilingues — français, anglais, wolof',
      'Optimisé pour réseaux 2G/3G et appareils bas de gamme',
      'Support continu via WhatsApp',
      'Prix fixes, transparents, sans surprises',
    ],
    buildWith: 'Travailler avec nous',
    trustLabel: 'Crédibilité',
    trust: [
      { label: 'AMDY LABS LLC', sub: 'Société enregistrée au Michigan, USA' },
      { label: 'Detroit, Michigan', sub: '10629 W 7 Mile, Suite 1, 48221' },
      { label: '4 produits en ligne', sub: 'caissepro.app · vybz.city · immopro.agency' },
      { label: '38+ marchands', sub: 'Revenus réels, traction réelle' },
      { label: 'Seed Round ouvert', sub: 'contact@amdylabs.com' },
    ],
    ctaTitle: 'Prêt à construire ?',
    ctaSub: 'Appel de découverte gratuit. Sans engagement.',
    ctaBtn1: 'Démarrer un projet', ctaBtn2: 'WhatsApp',
    faqLabel: 'Questions fréquentes',
    faqTitle: 'Ce qu\'on nous demande souvent.',
    faq: [
      ['Combien de temps pour créer une application ?', 'En général 6 à 16 semaines selon la complexité. Un MVP peut être livré en 4 à 6 semaines. Nous fournissons un calendrier détaillé après l\'appel de découverte.'],
      ['Intégrez-vous les paiements africains ?', 'Oui — Wave, Orange Money, Free Money, MTN, PayDunya, CinetPay et d\'autres passerelles sont intégrés nativement dans tous nos produits.'],
      ['Quels sont vos modèles de tarification ?', 'Projets à prix fixe, retainers mensuels et abonnements SaaS. Devis transparents à l\'avance, sans surprises.'],
      ['Assurez-vous le support après le lancement ?', 'Absolument. Maintenance, corrections de bugs, mises à jour et support d\'urgence via WhatsApp.'],
      ['Un fondateur non-technique peut-il travailler avec vous ?', 'C\'est notre spécialité. Vous apportez la vision, nous gérons toute la technologie.'],
    ],
  },
  en: {
    nav: { home: 'Home', services: 'Services', projects: 'Projects', about: 'About', investors: 'Investors', contact: 'Contact', cta: 'Start a Project' },
    tagline: 'Software Studio',
    h1: 'We build products\nthat actually work.',
    sub: 'We build software for entrepreneurs in the US and across Africa.',
    cta1: 'Start a Project', cta2: 'Explore Our Work',
    stats: [
      { val: 38, suffix: '+', label: 'Active merchants' },
      { val: 4,  suffix: '',  label: 'Live products' },
      { val: 5,  suffix: '',  label: 'Countries reached' },
    ],
    productsLabel: 'Our products', seeAll: 'See all',
    servicesLabel: 'What we build',
    servicesTitle: 'Apps. Platforms. Business tools.',
    servicesSub: 'From idea to launch — we design, build, and maintain world-class digital products.',
    services: [
      { name: 'Mobile Apps', desc: 'Native and cross-platform iOS & Android with React Native and Expo.' },
      { name: 'Web & SaaS', desc: 'Scalable web platforms, dashboards, portals, and e-commerce solutions.' },
      { name: 'POS Systems', desc: 'Modern point-of-sale with Mobile Money, WhatsApp receipts, and inventory.' },
      { name: 'AI Solutions', desc: 'Smart automation, chatbots, and data analysis for your business.' },
    ],
    whyLabel: 'Why AMDY LABS',
    whyTitle: 'One studio, two markets.',
    whySub: 'Founded by Amdy Boubacar — a Senegalese entrepreneur based in Detroit. We understand both sides: American standards and African realities.',
    checks: [
      'Wave, Orange Money, MTN Mobile Money integrations',
      'Multilingual products — French, English, Wolof',
      'Optimized for 2G/3G networks and low-end devices',
      'Ongoing support via WhatsApp',
      'Fixed, transparent pricing — no surprises',
    ],
    buildWith: 'Work with us',
    trustLabel: 'Credibility',
    trust: [
      { label: 'AMDY LABS LLC', sub: 'US-registered company, Michigan' },
      { label: 'Detroit, Michigan', sub: '10629 W 7 Mile, Suite 1, 48221' },
      { label: '4 live products', sub: 'caissepro.app · vybz.city · immopro.agency' },
      { label: '38+ merchants', sub: 'Real revenue, real traction' },
      { label: 'Seed Round open', sub: 'contact@amdylabs.com' },
    ],
    ctaTitle: 'Ready to build?',
    ctaSub: 'Free discovery call. No commitment.',
    ctaBtn1: 'Start a Project', ctaBtn2: 'WhatsApp',
    faqLabel: 'FAQ',
    faqTitle: 'Things we get asked.',
    faq: [
      ['How long does it take to build an app?', 'Typically 6–16 weeks depending on complexity. A simple MVP can be delivered in 4–6 weeks. We provide a detailed timeline after a free discovery call.'],
      ['Do you integrate African payment methods?', 'Yes — Wave, Orange Money, Free Money, MTN, PayDunya, CinetPay, and other African gateways are natively integrated in all our products.'],
      ['What are your pricing models?', 'Fixed-price projects, monthly retainers, and SaaS subscriptions. Transparent quotes upfront, no surprises.'],
      ['Do you provide support after launch?', 'Absolutely. Maintenance, bug fixes, feature updates, and emergency support via WhatsApp.'],
      ['Can non-technical founders work with you?', "That's our specialty. You bring the vision — we handle all the technology."],
    ],
  },
  ar: {
  nav: { home: 'الرئيسية', services: 'الخدمات', projects: 'المشاريع', about: 'من نحن', investors: 'المستثمرون', contact: 'تواصل', cta: 'ابدأ مشروعك' },
  tagline: 'استوديو برمجيات',
  h1: 'نبني منتجات\nتعمل فعلاً.',
  sub: 'نبني برمجيات لرواد الأعمال في الولايات المتحدة وعبر أفريقيا.',
  cta1: 'ابدأ مشروعك', cta2: 'اكتشف أعمالنا',
  stats: [
    { val: 38, suffix: '+', label: 'تاجر نشط' },
    { val: 4,  suffix: '',  label: 'منتج مطلق' },
    { val: 5,  suffix: '',  label: 'دول' },
  ],
  productsLabel: 'منتجاتنا', seeAll: 'عرض الكل',
  servicesLabel: 'ما نبنيه',
  servicesTitle: 'تطبيقات. منصات. أدوات أعمال.',
  servicesSub: 'من الفكرة إلى الإطلاق — نصمّم ونطوّر ونُدير منتجات رقمية عالمية المستوى.',
  services: [
    { name: 'تطبيقات الجوال', desc: 'تطبيقات iOS وAndroid أصيلة ومتعددة المنصات بـ React Native وExpo.' },
    { name: 'الويب والـ SaaS', desc: 'منصات ويب قابلة للتوسع، لوحات تحكم، بوابات، وحلول تجارة إلكترونية.' },
    { name: 'أنظمة نقاط البيع', desc: 'صناديق دفع حديثة مع Mobile Money وإيصالات واتساب وإدارة مخزون.' },
    { name: 'حلول الذكاء الاصطناعي', desc: 'أتمتة ذكية وروبوتات دردشة وتحليل بيانات لعملك.' },
  ],
  whyLabel: 'لماذا AMDY LABS',
  whyTitle: 'استوديو واحد، سوقان.',
  whySub: 'تأسس من قِبل أمدي بوبكر — رجل أعمال سنغالي مقيم في ديترويت. نفهم الجانبين: المعايير الأمريكية والواقع الأفريقي.',
  checks: [
    'تكاملات Wave وOrange Money وMTN Mobile Money',
    'منتجات متعددة اللغات — فرنسية، إنجليزية، ولوف',
    'محسّن لشبكات 2G/3G والأجهزة المتوسطة',
    'دعم مستمر عبر واتساب',
    'أسعار ثابتة وشفافة — بلا مفاجآت',
  ],
  buildWith: 'اعمل معنا',
  trustLabel: 'المصداقية',
  trust: [
    { label: 'AMDY LABS LLC', sub: 'شركة مسجلة في ميشيغان، الولايات المتحدة' },
    { label: 'ديترويت، ميشيغان', sub: '10629 W 7 Mile, Suite 1, 48221' },
    { label: '4 منتجات مطلقة', sub: 'caissepro.app · vybz.city · immopro.agency' },
    { label: '38+ تاجر', sub: 'إيرادات حقيقية، نمو حقيقي' },
    { label: 'جولة تمويل أولية مفتوحة', sub: 'contact@amdylabs.com' },
  ],
  ctaTitle: 'مستعد للبناء؟',
  ctaSub: 'مكالمة اكتشاف مجانية. بلا التزام.',
  ctaBtn1: 'ابدأ مشروعك', ctaBtn2: 'واتساب',
  faqLabel: 'الأسئلة الشائعة',
  faqTitle: 'ما يُسألنا كثيراً.',
  faq: [
    ['كم من الوقت يستغرق بناء تطبيق؟', 'عادةً من 6 إلى 16 أسبوعاً حسب التعقيد. يمكن تسليم MVP في 4 إلى 6 أسابيع. نقدم جدولاً زمنياً تفصيلياً بعد مكالمة الاكتشاف المجانية.'],
    ['هل تدعمون طرق الدفع الأفريقية؟', 'نعم — Wave وOrange Money وFree Money وMTN وPayDunya وCinetPay وغيرها مدمجة أصلاً في جميع منتجاتنا.'],
    ['ما هي نماذج التسعير لديكم؟', 'مشاريع بسعر ثابت، عقود شهرية، واشتراكات SaaS. عروض أسعار شفافة مسبقاً، بلا مفاجآت.'],
    ['هل تقدمون دعماً بعد الإطلاق؟', 'بالتأكيد. صيانة، إصلاح أخطاء، تحديثات، ودعم طارئ عبر واتساب.'],
    ['هل يمكن لمؤسسين غير تقنيين العمل معكم؟', 'هذا تخصصنا. أنت تأتي بالرؤية — نحن نتولى كل الجانب التقني.'],
  ],
  },
}

const PROJECTS = [
  {
    name: 'RigCoach',
    status: 'soon',
    subFr: 'App mobile · USA', subEn: 'Mobile app · USA', subAr: 'تطبيق جوال · الولايات المتحدة',
    descFr: "L'application financière pour owner-operators : revenu net réel par chargement, IFTA, scan de documents.",
    descEn: 'The money app for truck drivers: real take-home per load, IFTA, paperwork scanning.',
    descAr: 'تطبيق المال لسائقي الشاحنات: صافي الربح الحقيقي لكل شحنة، IFTA، ومسح الوثائق.',
    logo: '/portfolio/rigcoach/logo-on-dark.svg',
    logoBg: '#0a1628',
    accent: '#00c853',
    link: 'https://www.rigcoach.com',
  },
  {
    name: 'CaissePro',
    status: 'live',
    subFr: "Caisse & gestion", subEn: 'POS & management', subAr: 'نقطة بيع وإدارة',
    descFr: "Système de caisse pour commerçants africains. Wave, Orange Money, reçus WhatsApp.",
    descEn: 'POS for African merchants. Wave, Orange Money, WhatsApp receipts.',
    descAr: 'نظام نقطة بيع للتجار الأفارقة. Wave وOrange Money وإيصالات واتساب.',
    logo: '/logo-caissepro.png',
    logoBg: '#0d1f4a',
    accent: '#1a6ef5',
    link: 'https://caissepro.app',
  },
  {
    name: 'ImmoPro',
    status: 'live',
    subFr: 'Immobilier', subEn: 'Real estate', subAr: 'عقارات',
    descFr: "Plateforme immobilière pour le marché sénégalais. Annonces, agents certifiés.",
    descEn: 'Real estate platform for the Senegalese market. Listings, certified agents.',
    descAr: 'منصة عقارية للسوق السنغالية. إعلانات ووكلاء معتمدون.',
    logo: '/logo-immopro.png',
    logoBg: '#0a1a6e',
    accent: '#f59e0b',
    link: 'https://immopro.agency',
  },
  {
    name: 'VYBZ Social',
    status: 'live',
    subFr: 'Événements · Dakar', subEn: 'Events · Dakar', subAr: 'فعاليات · داكار',
    descFr: '"C\'est quoi les VYBZ ce soir ?" — Événements et vie nocturne à Dakar.',
    descEn: '"What are the VYBZ tonight?" — Events & nightlife in Dakar.',
    descAr: '"ما هي VYBZ الليلة؟" — فعاليات وحياة ليلية في داكار.',
    logo: '/logo-vybz.png',
    logoBg: '#150020',
    accent: '#8b5cf6',
    link: 'https://vybz.city',
  },
]

/* ─── component ─────────────────────────────────────────────────────────── */
export default function HomePage() {
  const { lang } = useLang()
  const t = T[lang] ?? T.en
  const isRTL = lang === 'ar'
  const statsSection = useInView(0.2)
  const c0 = useCountUp(38, 1200, statsSection.inView)
  const c1 = useCountUp(4,  1200, statsSection.inView)
  const c2 = useCountUp(5,  1200, statsSection.inView)
  const counts = [c0, c1, c2]

  const carouselRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const slide = (dir: 1 | -1) => {
    if (!carouselRef.current) return
    const first = carouselRef.current.querySelector<HTMLElement>('[data-card]')
    const w = first ? first.offsetWidth + 20 : 320
    carouselRef.current.scrollBy({ left: dir * w, behavior: 'smooth' })
  }

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} style={{ fontFamily: isRTL ? '"Noto Sans Arabic", "Segoe UI", system-ui, sans-serif' : 'Inter, system-ui, sans-serif', color: '#e2e8f0', background: '#060818' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        paddingTop: 'calc(72px + 56px)',
        paddingBottom: 72,
        paddingLeft: 24,
        paddingRight: 24,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #060818 0%, #0d1340 40%, #0a0f2e 70%, #060818 100%)',
      }}>
        {/* Ambient orbs */}
        <div style={{ position: 'absolute', top: -120, left: '30%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Studio label */}
          <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(148,163,184,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 32 }}>
            AMDY LABS &nbsp;·&nbsp; {t.tagline}
          </p>

          <h1 style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(38px, 6vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            color: '#f8fafc',
            marginBottom: 28,
            maxWidth: 820,
            whiteSpace: 'pre-line',
          }}>
            {t.h1}
          </h1>

          <p style={{ fontSize: 17, color: 'rgba(148,163,184,0.85)', lineHeight: 1.7, maxWidth: 520, marginBottom: 44 }}>
            {t.sub}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 72 }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: '#fff',
              padding: '13px 26px', borderRadius: 10,
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
              boxShadow: '0 0 24px rgba(59,130,246,0.35)',
            }}>
              {t.cta1}
            </Link>
            <Link href="/projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              color: 'rgba(226,232,240,0.9)',
              padding: '13px 26px', borderRadius: 10,
              fontWeight: 500, fontSize: 14, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
              {t.cta2}
            </Link>
          </div>

          {/* Stats — glass pills */}
          <div ref={statsSection.ref} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '16px 24px',
              }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {counts[i]}{s.suffix}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(148,163,184,0.7)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS CAROUSEL ─────────────────────────────────────────────── */}
      <section style={{ background: '#060c1f', padding: '64px 0 80px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', paddingLeft: 24, paddingRight: 24, marginBottom: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', color: '#f8fafc' }}>
            {t.productsLabel}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => slide(-1)} aria-label="Previous" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e2e8f0' }}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => slide(1)} aria-label="Next" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e2e8f0' }}>
              <ChevronRight size={16} />
            </button>
            <Link href="/projects" style={{ fontSize: 14, fontWeight: 500, color: '#60a5fa', textDecoration: 'none', marginLeft: 8, display: 'flex', alignItems: 'center', gap: 4 }}>
              {t.seeAll} <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 48, background: 'linear-gradient(to right, #060c1f, transparent)', zIndex: 1, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #060c1f, transparent)', zIndex: 1, pointerEvents: 'none' }} />

          <div ref={carouselRef} style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', paddingLeft: 24, paddingRight: 80, paddingBottom: 8 } as React.CSSProperties}>
            {PROJECTS.map((p, i) => {
              const isSoon = p.status === 'soon'
              return (
                <a key={i} data-card href={p.link} target="_blank" rel="noreferrer"
                  style={{
                    flex: '0 0 272px',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 16,
                    overflow: 'hidden',
                    textDecoration: 'none',
                    color: 'inherit',
                    scrollSnapAlign: 'start',
                    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = `${p.accent}55`
                    el.style.boxShadow = `0 0 32px ${p.accent}22, 0 16px 40px rgba(0,0,0,0.4)`
                    el.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.1)'
                    el.style.boxShadow = 'none'
                    el.style.transform = 'none'
                  }}
                >
                  <div style={{ height: 148, background: p.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    {/* Accent glow behind logo */}
                    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 60%, ${p.accent}22 0%, transparent 65%)`, pointerEvents: 'none' }} />
                    <div style={{ width: 76, height: 76, borderRadius: 18, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 20px ${p.accent}44, 0 6px 24px rgba(0,0,0,0.5)`, position: 'relative' }}>
                      <Image src={p.logo} alt={p.name} width={76} height={76} style={{ objectFit: 'contain' }} />
                    </div>
                    <span style={{
                      position: 'absolute', top: 10, right: 10,
                      fontSize: 10, fontWeight: 700,
                      padding: '3px 10px', borderRadius: 20,
                      background: isSoon ? 'rgba(0,200,83,0.15)' : 'rgba(59,130,246,0.15)',
                      color: isSoon ? '#4ade80' : '#60a5fa',
                      border: `1px solid ${isSoon ? 'rgba(74,222,128,0.3)' : 'rgba(96,165,250,0.3)'}`,
                      backdropFilter: 'blur(8px)',
                    }}>
                      {isSoon ? (lang === 'fr' ? 'Bientôt' : lang === 'ar' ? 'قريباً' : 'Coming soon') : 'Live'}
                    </span>
                  </div>

                  <div style={{ padding: '16px 18px 20px' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: p.accent, marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {lang === 'fr' ? p.subFr : lang === 'ar' ? p.subAr : p.subEn}
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', color: '#f8fafc', marginBottom: 7 }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: 13, color: 'rgba(148,163,184,0.75)', lineHeight: 1.6, margin: 0 }}>
                      {lang === 'fr' ? p.descFr : lang === 'ar' ? p.descAr : p.descEn}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#07091c', padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(148,163,184,0.6)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.servicesLabel}</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16, maxWidth: 600 }}>
            {t.servicesTitle}
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(148,163,184,0.75)', lineHeight: 1.7, maxWidth: 480, marginBottom: 56 }}>{t.servicesSub}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {t.services.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14,
                padding: '28px 24px',
                transition: 'border-color 0.2s, background 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.3)'; (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.06)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)' }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#f8fafc', letterSpacing: '-0.01em', marginBottom: 10 }}>{s.name}</h3>
                <p style={{ fontSize: 13, color: 'rgba(148,163,184,0.7)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#060818', padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(148,163,184,0.6)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.whyLabel}</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16, lineHeight: 1.15 }}>
              {t.whyTitle}
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(148,163,184,0.75)', lineHeight: 1.7, marginBottom: 36 }}>{t.whySub}</p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              color: '#f8fafc',
              padding: '13px 22px', borderRadius: 10,
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
            }}>
              {t.buildWith} <ArrowRight size={14} />
            </Link>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {t.checks.map((c, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 0', borderBottom: i < t.checks.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <CheckCircle2 size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 14, color: 'rgba(226,232,240,0.85)', lineHeight: 1.55 }}>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'rgba(148,163,184,0.5)', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.trustLabel}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>
            {t.trust.map(({ label, sub }, i) => (
              <div key={i}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#e2e8f0', marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: 12, color: 'rgba(148,163,184,0.6)' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', background: '#060818', padding: '96px 24px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 40 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 12, lineHeight: 1.1 }}>
              {t.ctaTitle}
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(148,163,184,0.75)', lineHeight: 1.6 }}>{t.ctaSub}</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: '#fff',
              padding: '14px 28px', borderRadius: 10,
              fontWeight: 700, fontSize: 14, textDecoration: 'none',
              boxShadow: '0 0 28px rgba(59,130,246,0.4)',
            }}>
              <Rocket size={15} /> {t.ctaBtn1}
            </Link>
            <a href="https://wa.me/15863442378" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              color: '#e2e8f0',
              padding: '14px 28px', borderRadius: 10,
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
            }}>
              <MessageCircle size={15} /> {t.ctaBtn2}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#07091c', padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(148,163,184,0.6)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.faqLabel}</p>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, letterSpacing: '-0.025em', color: '#f8fafc', marginBottom: 44, lineHeight: 1.2 }}>
            {t.faqTitle}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {t.faq.map(([q, a], i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '20px 0',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 15, fontWeight: 500, color: '#e2e8f0',
                    textAlign: 'left', gap: 24, fontFamily: 'inherit',
                    letterSpacing: '-0.01em',
                  }}
                >
                  <span>{q}</span>
                  <span style={{
                    flexShrink: 0, width: 24, height: 24, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16, color: 'rgba(148,163,184,0.7)',
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: 24, fontSize: 14, color: 'rgba(148,163,184,0.75)', lineHeight: 1.7 }}>{a}</div>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
          </div>
        </div>
      </section>

      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        [data-card]::-webkit-scrollbar{display:none}
        div[style*="scrollbarWidth"]::-webkit-scrollbar{display:none}
        @media(prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
        @media(max-width:640px){
          section{padding-left:16px!important;padding-right:16px!important}
        }
      `}</style>
    </div>
  )
}
