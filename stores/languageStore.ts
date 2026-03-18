import { create } from 'zustand';

interface LanguageStore {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language:
    typeof window !== 'undefined'
      ? localStorage.getItem('i18nextLng') || 'fr'
      : 'fr',
  setLanguage: (lang) => {
    set({ language: lang });
    if (typeof window !== 'undefined') {
      localStorage.setItem('i18nextLng', lang);
    }
  },
}));