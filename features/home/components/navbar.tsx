"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";



const NavbarComponent = () => {

  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  

  // Mapping des hrefs vers les IDs de sections
  const sectionMap: { [key: string]: string } = {
    "/": "accueil",
    "/A-propos": "A propos",
    "/Nos-actions": "Nos actions",
    "/galerie": "Galerie",
    "/contact": "Contact",
  };

  // Détecter la section visible avec Intersection Observer
  useEffect(() => {
    if (pathname !== "/") {
   
      return;
    }

    const sections = ["accueil", "A-propos", "Nos actions", "galerie","contact",];
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
  };

 

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" data-purpose="navigation-bar">
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
     {/* Logo {} */}
    <div className="flex items-center gap-3 shrink-0">
       <div className="shrink-0 max-h-5">
    <Image width={100} height={100} alt="Bon Berger Logo" className="h-30 -mt-10 w-auto object-contain" src="/images/logo2.png"/>
    </div>
   <span className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary tracking-tight">
    Bon Berger
  </span>
    </div>
     {/* Desktop Navigation  */}
   <ul className="hidden md:flex items-center space-x-8 font-semibold text-black">
      {Object.entries(sectionMap).map(([path, label]) => (
        <li key={path}>
          <a
            href={path}
            className={`transition ${
              pathname === path
                ? "text-secondary border-b-2 border-secondary"
                : "hover:text-secondary"
            }`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
    {/* CTA in Header */}
    <a className="hidden lg:block bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-secondary transition shadow-md" href="/don">
            Faire un don
          </a>
    {/* Mobile Menu Toggle (Simplified) */}
    <button aria-label="Menu" className="md:hidden p-2 text-gray-600">
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    </button>
    </nav>
    </header>
  );
};

export default NavbarComponent;