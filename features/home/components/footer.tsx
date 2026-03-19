"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineProject, AiOutlinePicture, AiOutlinePhone } from "react-icons/ai";
import { JSX, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// const SocialIcon = ({
//   href,
//   label,
//   children,
// }: {
//   href: string;
//   label: string;
//   children: React.ReactNode;
// }) => (
//   <Link
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label={label}
//     className="text-gray-600 hover:text-[#06B6D4] transition-colors"
//   >
//     {children}
//   </Link>
// );

 const sectionMap: { [key: string]: { label: string; icon: JSX.Element }  } = {
    "/": { label: "Accueil", icon: <AiOutlineHome /> },
  "/A-propos": { label: "A propos", icon: <AiOutlineInfoCircle /> },
  "/Nos-actions": { label: "Nos actions", icon: <AiOutlineProject /> },
  "/galerie": { label: "Galerie", icon: <AiOutlinePicture /> },
  "/contact": { label: "Contact", icon: <AiOutlinePhone /> },
  };

const Footer = () => {
  const { t } = useTranslation();
   const pathname = usePathname();

  const [activeSection, setActiveSection] = useState<string>("");

  // Détecter la section visible sur la page d'accueil
  useEffect(() => {
    if (pathname !== "/") {
     
      return;
    }

    const sections = ["accueil", "A-propos", "Nos actions", "galerie", "contact"];

    const handleScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 0) current = id;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (path: string) => {
    if (pathname === "/") {
      // sur la page d'accueil, comparer avec activeSection
      return activeSection === sectionMap[path]?.label.toLowerCase();
    }
    return pathname === path;
  };


  return (
    <footer className="bg-secondary dark:bg-slate-900 border-t border-primary/10 rounded-t-2xl flex flex-col relative">
  {/* Contenu principal du footer */}
  <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 py-13">
    {/* Logo et description */}
    <div className="col-span-1 md:col-span-1">
      <div className="flex items-center gap-3 shrink-0">
        <div className="shrink-0 max-h-5">
          <Image width={100} height={100}
            alt="Bon Berger Logo"
            className="h-35 -mt-13 w-auto object-contain"
            src="/images/logo2.png"
          />
        </div>
        <span className="text-2xl font-bold text-white tracking-tight">
          Bon Berger
        </span>
      </div>
      <p className="text-sm text-white dark:text-slate-400 leading-relaxed mt-8">
        Offrir un avenir radieux à chaque enfant en situation de vulnérabilité à travers l&apos;amour, l&apos;éducation et le soin.
      </p>
    </div>

    {/* Liens rapides générés depuis sectionMap */}
    <div>
      <h5 className="font-bold mb-6 text-white">Liens rapides</h5>
      <ul className="space-y-4 text-sm text-white dark:text-slate-400">
       {Object.entries(sectionMap).map(([path, { label, icon }]) => (
        <Link
          key={path}
          href={path}
          className={`flex items-center gap-1 transition ${
            isActive(path) ? "text-primary border-b-2 border-secondary" : "hover:text-primary"
          }`}
        >
          <span className="text-lg">{icon}</span>
          <span>{label}</span>
        </Link>
      ))}
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h5 className="font-bold mb-6 text-white">Newsletter</h5>
      <p className="text-sm text-white dark:text-slate-400 mb-4">
        Restez informé de nos activités et de l&apos;impact de vos dons.
      </p>
      <div className="flex gap-2">
        <Input
          className="flex-1 rounded-lg border-primary bg-background-light dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary"
          placeholder="Votre email"
          type="email"
        />
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
          OK
        </button>
      </div>
    </div>

    {/* Suivez-nous */}
    <div>
      <h5 className="font-bold mb-6 text-white">Suivez-nous</h5>
      <div className="flex gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-white hover:bg-primary hover:text-white transition-all">
          <FacebookIcon />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-white hover:bg-primary hover:text-white transition-all">
          <InstagramIcon />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-white hover:bg-primary hover:text-white transition-all">
          <XIcon />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-white hover:bg-primary hover:text-white transition-all">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  </div>

  {/* Texte "Tous droits réservés" fixé en bas */}
  <div className="w-full h-7 items-center bg-black/20 py-4 absolute bottom-0 left-0">
    <p className="text-center text-xs text-white md:text-sm font-poppins-regular -mt-2">
      {t("footer.copyright", { year: new Date().getFullYear() })}{" "}
      <Link
        href="https://Hermanno.fr/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-[#06B6D4]"
      >
        {t("footer.company")}
      </Link>
    </p>
  </div>
</footer>
  );
};

function FacebookIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.994 2.012 9.334 2 11.97 2h.08zm0 5.838a3.869 3.869 0 100 7.738 3.869 3.869 0 000-7.738zm0 6.387a2.519 2.519 0 110-5.038 2.519 2.519 0 010 5.038zm5.21-6.5a.903.903 0 11-1.807 0 .903.903 0 011.807 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default Footer;
