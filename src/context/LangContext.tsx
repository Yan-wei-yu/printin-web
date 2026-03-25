import { createContext, useContext, useState } from 'react';
import { translations, LANGS } from '../i18n';
import type { LangKey, Translation } from '../i18n';

interface LangContextType {
  lang: LangKey;
  setLang: (l: LangKey) => void;
  t: Translation;
  isEn: boolean;
}

const LangContext = createContext<LangContextType>({} as LangContextType);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LangKey>('zh-TW');
  const t = translations[lang];
  const isEn = lang === 'en';

  return (
    <LangContext.Provider value={{ lang, setLang, t, isEn }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
export { LANGS };
