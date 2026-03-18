"use client";


import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/configs/site";


import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/ui/languageselector";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { t } = useTranslation();
  const pathname = usePathname();

  
  // Mapping des hrefs vers les IDs de sections
  const sectionMap: { [key: string]: string } = {
    "/": "accueil",
    "/A-propos": "A propos",
    "/Nos-actions": "Nos actions",
    "/Galerie": "Galerie",
    "/Contact": "Contact",
  };

  // Détecter la section visible avec Intersection Observer
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["accueil", "A-propos", "Nos actions", "Galerie","contact",];
    const observers: IntersectionObserver[] = [];

    const updateActiveSection = () => {
      let currentSection = "";
      let minDistance = Infinity;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const headerOffset = 80;
        
        // Si la section est visible et proche du haut (après la navbar)
        if (rect.top <= headerOffset + 100 && rect.bottom > headerOffset) {
          const distance = Math.abs(rect.top - headerOffset);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = sectionId;
          }
        }
      });

      // Si aucune section n'est proche du haut, prendre celle qui est la plus visible
      if (!currentSection) {
        sections.forEach((sectionId) => {
          const element = document.getElementById(sectionId);
          if (!element) return;

          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          
          if (visibleHeight > windowHeight * 0.3 && rect.top < windowHeight * 0.5) {
            currentSection = sectionId;
          }
        });
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        () => {
          updateActiveSection();
        },
        {
          rootMargin: "-80px 0px -50% 0px",
          threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Écouter aussi le scroll pour une détection plus précise
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection(); // Appel initial

    // Nettoyer les observers et l'event listener au démontage
    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    // Si on est sur la page d'accueil, utiliser la section active détectée
    if (pathname === "/") {
      const sectionId = sectionMap[href];
      return activeSection === sectionId || (href === "/" && activeSection === "accueil");
    }
    
    // Pour les autres pages, utiliser le pathname
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // Si on n'est pas sur la page d'accueil, naviguer d'abord
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Fermer le menu mobile si ouvert
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const sectionId = sectionMap[href];
    
    if (sectionId && pathname === "/") {
      e.preventDefault();
      scrollToSection(sectionId);
      // Mettre à jour la section active immédiatement
      setActiveSection(sectionId);
    }
    // Si on n'est pas sur la page d'accueil, laisser le comportement par défaut
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" data-purpose="navigation-bar">
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
     {/* Logo {} */}
    <div className="flex items-center gap-3">
    <img alt="Bon Berger Logo" className="h-12 w-auto" src=""/>
    <span className="text-2xl font-bold text-brand-blue tracking-tight">Bon Berger</span>
    </div>
     {/* Desktop Navigation  */}
    <ul className="hidden md:flex items-center space-x-8 font-semibold text-gray-700">
    <li><a className="text-brand-blue border-b-2 border-brand-blue" href="#">Accueil</a></li>
    <li><a className="hover:text-brand-blue transition" href="#">À propos</a></li>
    <li><a className="hover:text-brand-blue transition" href="#">Nos actions</a></li>
    <li><a className="hover:text-brand-blue transition" href="#">Galerie</a></li>
    <li><a className="hover:text-brand-blue transition" href="#">Contact</a></li>
    </ul>
    {/* CTA in Header */}
    <a className="hidden lg:block bg-brand-orange text-white px-6 py-2 rounded-custom font-bold hover:brightness-110 transition shadow-md" href="#">
            Faire un don
          </a>
    {/* Mobile Menu Toggle (Simplified) */}
    <button aria-label="Menu" className="md:hidden p-2 text-gray-600">
    <svg className="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    </button>
    </nav>
    </header>
  );
};

export default NavbarComponent;