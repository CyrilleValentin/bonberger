"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/configs/site";

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-600 hover:text-[#06B6D4] transition-colors"
  >
    {children}
  </Link>
);

const Footer = () => {
  const { t } = useTranslation();
  const { logo, navLinks, socialLinks, contact } = siteConfig;

  return (
    <footer>
      <div className="bg-gray-50 px-4 py-10 md:py-12">
        <div className="container mx-auto flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-16">
          {/* Colonne 1 : Logo + description */}
          <div className="flex w-full flex-col md:w-1/3">
            <Link href="/" className="inline-flex">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto md:h-10 lg:h-12"
              />
            </Link>
            <p className="font-poppins-regular mt-4 text-sm text-gray-700 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Colonne 2 : Navigation (liens comme la navbar) */}
          <div className="flex w-full flex-col md:w-1/3">
            <span className="font-poppins-semibold text-base text-black">
              {t("footer.navigation")}
            </span>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-poppins-regular text-sm text-gray-600 hover:text-[#06B6D4] transition-colors"
                  >
                    {t(`home.navbar.${link.label}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact + réseaux sociaux */}
          <div className="flex w-full flex-col md:w-1/3">
            <span className="font-poppins-semibold text-base text-black">
              {t("footer.contact")}
            </span>
            <ul className="mt-4 space-y-3">
              {contact?.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-gray-500" />
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="font-poppins-regular text-sm text-gray-600 hover:text-[#06B6D4] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </li>
              )}

              
              {contact?.email && (
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-gray-500" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-poppins-regular text-sm text-gray-600 hover:text-[#06B6D4] transition-colors"
                  >
                    {contact.email}
                  </a>
                </li>
              )}
            </ul>
            {(socialLinks?.facebook ||
              socialLinks?.instagram ||
              socialLinks?.x ||
              socialLinks?.linkedin) && (
              <div className="mt-6 flex flex-wrap gap-4">
                {socialLinks?.facebook && (
                  <SocialIcon href={socialLinks.facebook} label="Facebook">
                    <FacebookIcon />
                  </SocialIcon>
                )}
                {socialLinks?.instagram && (
                  <SocialIcon href={socialLinks.instagram} label="Instagram">
                    <InstagramIcon />
                  </SocialIcon>
                )}
                {socialLinks?.x && (
                  <SocialIcon href={socialLinks.x} label="X (Twitter)">
                    <XIcon />
                  </SocialIcon>
                )}
                {socialLinks?.linkedin && (
                  <SocialIcon href={socialLinks.linkedin} label="LinkedIn">
                    <LinkedInIcon />
                  </SocialIcon>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="flex h-14 items-center justify-center bg-black px-4">
        <p className="font-poppins-regular text-center text-xs text-white md:text-sm">
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
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
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
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
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
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default Footer;
