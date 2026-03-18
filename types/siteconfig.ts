interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface NavLink {
  label: string;
  href: string;
}

interface AuthLink {
  label: string;
  href: string;
  className: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  x?: string;
  linkedin?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  logo: Logo;
  navLinks: NavLink[];
  authLinks: AuthLink[];
  socialLinks?: SocialLinks;
  contact?: ContactInfo;
}