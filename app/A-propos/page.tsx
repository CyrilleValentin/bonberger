import Navbar from "@/features/home/components/navbar";
import Footer from "@/features/home/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-brand-orange/10 py-20 overflow-hidden" data-purpose="hero-banner">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl text-slate-800 mb-4">
              À Propos de Nous
            </h1>
            <p className="text-lg md:text-xl text-slate-800/80 max-w-2xl mx-auto">
              Découvrez notre engagement, notre histoire et l&apos;équipe dévouée qui œuvre chaque jour
              pour l&apos;avenir des enfants.
            </p>
          </div>

          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl" />
        </section>

        {/* Our History */}
        <section className="bg-brand-beige py-20" data-purpose="history-content" id="histoire">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="rounded-custom overflow-hidden shadow-xl aspect-[4/3]">
                  <img
                    alt="Photo historique de l'orphelinat"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPsqnMYDkdJdxIQ8mrs0GU-1JUV6gEgsksZ5XfnVuE2cJsy47vk44Qxz1azkgVMxdTmm5jjZRX5jBGqEvfPymLkclmgkNxokQ05s-znP64k0KVsnK2y7Zv7R7xdiLJlir9CC6TRBJbAgLatkYtWiVIqYw4YaN6-pHJEE0IpPskjVOM0zJM1fIA1P7N1p0mHPrvWVHmsQsLzvPuVLtuD8W7S7XVvERimE2QX7uVZMQhgTVpU56tX9LnN-ZbWLbDlZ2sWEnufFtaNu8"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <span className="text-brand-orange font-semibold uppercase tracking-wider mb-2 block">
                  Depuis 1995
                </span>
                <h2 className="text-3xl md:text-4xl mb-6">Notre Histoire</h2>

                <div className="space-y-4 text-slate-800/80">
                  <p>
                    Fondé il y a plus de 25 ans, notre orphelinat est né d&apos;une volonté simple :
                    offrir un foyer sûr et aimant aux enfants les plus vulnérables de notre communauté.
                    Ce qui a commencé avec une petite maison et trois enfants est devenu aujourd&apos;hui
                    un havre de paix reconnu.
                  </p>
                  <p>
                    Au fil des décennies, nous avons surmonté de nombreux défis grâce à la générosité
                    de nos donateurs et au dévouement de nos bénévoles. Chaque mur de cette institution
                    raconte une histoire de résilience et d&apos;espoir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20" data-purpose="mission-grid" id="mission-valeurs">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Mission &amp; Valeurs</h2>
              <p className="text-slate-800/70 max-w-xl mx-auto">
                Nos actions sont guidées par trois piliers fondamentaux qui garantissent le bien-être et
                le développement de chaque enfant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Confiance */}
              <div className="p-8 border border-gray-100 rounded-custom hover:shadow-lg transition-shadow bg-white text-center" data-purpose="value-card">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Confiance</h3>
                <p className="text-slate-800/70">
                  Nous bâtissons des relations basées sur l&apos;intégrité et la transparence avec nos partenaires et les enfants.
                </p>
              </div>

              {/* Espoir */}
              <div className="p-8 border border-gray-100 rounded-custom hover:shadow-lg transition-shadow bg-white text-center" data-purpose="value-card">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Espoir</h3>
                <p className="text-slate-800/70">
                  Chaque enfant mérite une chance de rêver et les outils nécessaires pour bâtir son propre futur.
                </p>
              </div>

              {/* Bienveillance */}
              <div className="p-8 border border-gray-100 rounded-custom hover:shadow-lg transition-shadow bg-white text-center" data-purpose="value-card">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Bienveillance</h3>
                <p className="text-slate-800/70">
                  Nous offrons un environnement chaleureux et sécurisant, essentiel à l&apos;épanouissement émotionnel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-brand-beige py-20" data-purpose="team-roster" id="equipe">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Notre Équipe</h2>
              <p className="text-slate-800/70 max-w-xl mx-auto">
                Des professionnels passionnés qui consacrent leur vie au bien-être de nos pensionnaires.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Member 1 */}
              <div className="group" data-purpose="member-profile">
                <div className="rounded-custom overflow-hidden shadow-xl aspect-square mb-4">
                  <img
                    alt="Portrait de Marie Lefebvre"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx658DvD1mcLLhfC8n85UrDTx9IxoeLEdaekLgMRtbTMmvLnUHfla9izBVrMsiaeVZI4WJtUPxyagUrnZvk_c5UJcBxxXZEauu107iakNiowesR2bNaVQnwZQlerZuiJ4qGzL5jDrqc8g5194ldef5iEHFjV0RF7UF3sam0Iy2oiRvH7nv5twetY2Lo8MtvvFkgg0b2qnXU0-QZu9MPGcUYoUSImduhJtzQZ1mIjyYy8eU__8myxlIajBan_Yn1O0yCrlL41wvQeY"
                  />
                </div>
                <h4 className="text-lg font-bold">Marie Lefebvre</h4>
                <p className="text-brand-orange font-medium text-sm mb-2 uppercase">Directrice Générale</p>
                <p className="text-slate-800/70 text-sm italic">
                  &quot;Ma passion est de voir chaque enfant s&apos;épanouir dans un environnement familial.&quot;
                </p>
              </div>

              {/* Member 2 */}
              <div className="group" data-purpose="member-profile">
                <div className="rounded-custom overflow-hidden shadow-xl aspect-square mb-4">
                  <img
                    alt="Portrait de Dr. Jean Dupont"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG2k_pBqPtd0KLVnG5DsBv5cD0EHfMcrMMeXbf_cGYvjLdxvk5ibl-oLSJlbHNT5l1A1OAwUv_fS8ybYIALPoxVjK9sT8nKZavL0HkFmdtaSbGeM2dcK3TrvGpykfsX3lrZybxDrfEJYnb3fYtKeK-tTAZlqUyW89HMH-IQTm9a4bKMF2zPzrdIirnZRUFPsYozdKhHyUwtxNQ87HmZ8eMHV4IZMhHyd-2Hml8GZG0NbJQcluKp95-MQUglg0qP544TYMGrDI55wk"
                  />
                </div>
                <h4 className="text-lg font-bold">Dr. Jean Dupont</h4>
                <p className="text-brand-orange font-medium text-sm mb-2 uppercase">
                  Psychologue pour enfants
                </p>
                <p className="text-slate-800/70 text-sm italic">
                  Spécialisé dans le soutien émotionnel et la reconstruction après un traumatisme.
                </p>
              </div>

              {/* Member 3 */}
              <div className="group" data-purpose="member-profile">
                <div className="rounded-custom overflow-hidden shadow-xl aspect-square mb-4">
                  <img
                    alt="Portrait de Sarah Martin"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM7qNXp_gD-hQSYRQXU6POLhTt1agOXdQqoVsLbPTdtaeOwB6X0AdNDM8WcNTbV3IDDKUSxyDBuKo5DikHPoffHizD_hZr9T7H1zc8MlyIPDBwX576Ao17X83F_xGOihmtMIGYc7mAaguEuQnhCFyd-GP5ej4HGjmRreI7BEkaO41tFJge9_Rnh4xDMlNyx3nuH7MLHi2xA3BxW7oA2cu5KiqK-5qcobiSJtyQdvouoBjiuhZA_fazjPgYztUBcvopNB8Px_gN9_s"
                  />
                </div>
                <h4 className="text-lg font-bold">Sarah Martin</h4>
                <p className="text-brand-orange font-medium text-sm mb-2 uppercase">
                  Éducatrice Principale
                </p>
                <p className="text-slate-800/70 text-sm italic">
                  Coordonne les activités éducatives et parascolaires au quotidien.
                </p>
              </div>

              {/* Member 4 */}
              <div className="group" data-purpose="member-profile">
                <div className="rounded-custom overflow-hidden shadow-xl aspect-square mb-4">
                  <img
                    alt="Portrait de Marc Lambert"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrj2zSAN5-fUGppiHqORLzmPmNkeppDuJfnqmtmCsyPF9ts1rzHYA1GWb_nHW2MkobZIS2TE6HApkQ806v9PZF21AmFshyoXXNflCGNJ89I0m2hA0N_WZgqS6CPnOGFcRM2IwA9XJc-RHRk7HA6xD9sq-Cjx8Dr_alidTnwaLbqOqpRqDcsZwnCuVlEP24jFRpzS1-V2RmSlab-kIstsCP9sTDPlzl7e1dP6aD_jmXNXa_eJIZVREkPlLtmEfmkRRXF8_RFFURkVI"
                  />
                </div>
                <h4 className="text-lg font-bold">Marc Lambert</h4>
                <p className="text-brand-orange font-medium text-sm mb-2 uppercase">
                  Admin &amp; Logistique
                </p>
                <p className="text-slate-800/70 text-sm italic">
                  Gère les ressources pour assurer le fonctionnement optimal de la structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Footer (CTA spécifique “À propos”) */}
        <footer className="bg-slate-800 text-white py-12" data-purpose="footer-cta">
          <div className="container mx-auto px-6 text-center">
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/images/logo2.png"
                alt="Bon Berger Logo"
                width={160}
                height={160}
                className="h-20 w-auto object-contain brightness-0 invert opacity-90 mb-4"
              />
              <h2 className="text-3xl mb-6">Prêt à faire une différence ?</h2>
              <p className="mb-8 text-white/70 max-w-lg mx-auto">
                Votre soutien nous aide à continuer d&apos;écrire cette belle histoire d&apos;humanité.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="px-8 py-4 bg-brand-orange text-slate-800 font-bold rounded-custom hover:bg-white transition-colors"
                >
                  Faire un don
                </Link>
                <Link
                  href="/#contact"
                  className="px-8 py-4 border border-white/30 text-white font-bold rounded-custom hover:bg-white/10 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <Footer />
    </>
  );
}

