"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useLanguageStore } from "@/stores/languageStore";

const languages = [
  { code: 'fr', name: 'Français', flag: '/images/F.svg', label: 'FR' },
  { code: 'en', name: 'English', flag: '/images/A.svg', label: 'EN' }
];

const LanguageSelectorContent = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setLanguage, language: storeLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Utiliser la langue du store ou d'i18n comme fallback
  const currentLangCode = storeLanguage || i18n.language || 'fr';
  const currentLanguage = languages.find(lang => lang.code === currentLangCode) || languages[0];

  const changeLanguage = (languageCode: string) => {
    if (!['fr', 'en'].includes(languageCode)) return;

    // Mettre à jour i18n
    i18n.changeLanguage(languageCode);
    
    // Sauvegarder dans le store (qui sauvegarde aussi dans localStorage)
    setLanguage(languageCode);
    
    // Mettre à jour l'URL avec le paramètre de langue
    const currentPath = window.location.pathname;
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', languageCode);
    
    // Utiliser router.replace pour mettre à jour l'URL sans recharger la page
    router.replace(`${currentPath}?${params.toString()}`);
    
    setIsOpen(false);
  };

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2  border border-primary-100 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        {/* Drapeau */}
        <div className="relative w-5 h-4  flex-shrink-0">
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            fill
            className="object-cover rounded-sm"
            unoptimized
            onError={(e) => {
              // Fallback si l'image n'existe pas
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        {/* Code de langue */}
        <span className="text-primary-100 font-poppins-medium text-sm">
          {currentLanguage.label}
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-40 bg-primary-200 border border-gray-400 rounded-md shadow-lg overflow-hidden">
          <div className="py-1">
            {languages.map((language: { code: string; name: string; flag: string; label: string }) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors ${
                  currentLangCode === language.code
                    ? 'bg-primary-100 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="relative w-5 h-4 flex-shrink-0">
                  <Image
                    src={language.flag}
                    alt={language.name}
                    fill
                    className="object-cover rounded-sm"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="font-anektelugu-medium">{language.label}</span>
                {currentLangCode === language.code && (
                  <span className="ml-auto text-primary-100">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function LanguageSelector() {
  return (
    <Suspense fallback={
      <div className="flex items-center gap-2 px-3 py-2 border border-primary-100 rounded-md">
        <div className="relative w-5 h-4 flex-shrink-0 bg-gray-300 animate-pulse rounded-sm" />
        <span className="text-primary-100 font-poppins-medium text-sm">FR</span>
      </div>
    }>
      <LanguageSelectorContent />
    </Suspense>
  );
}