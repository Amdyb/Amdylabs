'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'fr' | 'en' | 'ar'

interface LangCtx { lang: Lang; setLang: (l: Lang) => void }
export const LangContext = createContext<LangCtx>({ lang: 'fr', setLang: () => {} })
export const useLang = () => useContext(LangContext)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    // 1. Respect explicit user choice stored in localStorage
    const saved = localStorage.getItem('al-lang') as Lang
    if (saved === 'fr' || saved === 'en') { setLangState(saved); return }
    // 2. Fall back to device/browser locale
    const preferred = navigator.languages ?? [navigator.language]
    const match = preferred.find(l => l.startsWith('fr') || l.startsWith('en') || l.startsWith('ar'))
    if (match?.startsWith('en')) setLangState('en')
    else if (match?.startsWith('ar')) setLangState('ar')
    // else keep 'fr' as default
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('al-lang', l)
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}
