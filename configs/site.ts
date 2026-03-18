import { SiteConfig } from "@/types/siteconfig";



export const siteConfig: SiteConfig = {
  name: 'Association BON BERGER',
  description:
    "Accompagner l'ecole LA GRACE DE DIEU et aider les élèves defavorisés",
  logo: {
    src: '/images/popo.png',
    alt: 'Logo Bon Berger',
    width: 120,
    height: 48,
  },
  navLinks: [
    { label: 'link1', href: '/' },
    { label: 'link2', href: '/ecole' },
      { label: 'link3', href: '/notre-equipe' },
      { label: 'link4', href: '/qui-sommes-nous' },
      { label: 'link5', href: '/nous-soutenir' },
      { label: 'link6', href: '/contactez-nous' },
  ],
  authLinks: [
    {
      label: 'Se connecter',
      href: '/login',
      className: `bg-black text-white transition py-2 px-4 rounded-3xl text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] hover:bg-primary-500 font-kantumruy-regular text-center`,
    },
  ],
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    x: 'https://x.com',
    linkedin: 'https://linkedin.com',
  },
  contact: {
    email: 'contact@bonberger.org',
    phone: '+33 1 23 45 67 89',
  },
};