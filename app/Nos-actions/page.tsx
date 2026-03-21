import Navbar from "@/features/home/components/navbar";
import Footer from "@/features/home/components/footer";
import Link from "next/link";

export default function NosActionsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section
          className="py-16 bg-slate-50 border-b border-gray-100"
          data-purpose="hero-banner"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Nos Actions au Quotidien
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Depuis plus de 10 ans, nous œuvrons pour offrir un avenir meilleur aux enfants. Découvrez
              nos piliers d&apos;intervention et comment vous pouvez nous aider.
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          {/* Educational Programs */}
          <section
            className="flex flex-col lg:flex-row items-center gap-12"
            data-purpose="program-section"
            id="education"
          >
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-wider">
                Éducation
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Programmes éducatifs
              </h2>
              <p className="text-slate-600 leading-relaxed">
                L&apos;accès au savoir est le premier pas vers l&apos;autonomie. Nos classes accueillent
                les enfants de tout âge avec un encadrement pédagogique adapté, du matériel moderne et
                des professeurs dévoués. Nous finançons également les fournitures scolaires et les
                uniformes.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-blue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  Soutien scolaire personnalisé
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-blue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  Ateliers d&apos;informatique
                </li>
              </ul>

              <button
                type="button"
                className="bg-brand-blue text-white px-8 py-3 rounded-custom font-bold hover:opacity-90 transition-all shadow-md"
              >
                Soutenir ce projet
              </button>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="rounded-custom overflow-hidden shadow-xl ring-8 ring-slate-50">
                <img
                  alt="Enfants étudiant dans une classe"
                  className="w-full h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmqvh_PwySuhFy8H3E54A5M29MHyFU0r8FY1Tkja8zepqr99afNeYzvK3W9OnKoOCjSaHDK5-J3ZQg_1LAuTbn-cyZPOl-rSvC-OuE_L0FAPv5OuYcrv122-KidE94RfEyfN3R7GbhvBxTSUHcE2ng89BviUzPzN05dprLh8-HszTwDMqmikohaxWvCeT6p6V20hWLNW0hS3EM746PE03cd5VWFo8R7TdLoReTudqo82gCh4wZf89HkTnsNWIfvooVOxm6cKI8sRI"
                />
              </div>
            </div>
          </section>

          {/* Food Aid */}
          <section
            className="flex flex-col lg:flex-row-reverse items-center gap-12"
            data-purpose="program-section"
            id="food-aid"
          >
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold uppercase tracking-wider">
                Nutrition
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Aide alimentaire</h2>
              <p className="text-slate-600 leading-relaxed">
                Un enfant qui mange bien est un enfant qui grandit bien. Nous fournissons trois repas
                équilibrés par jour à chaque résident, préparés avec des produits frais et locaux. Nous
                organisons également des distributions alimentaires pour les familles précaires de la
                communauté.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-custom bg-brand-green/10 text-brand-green text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs font-semibold">Repas quotidiens</div>
                </div>
                <div className="p-4 rounded-custom bg-brand-green/10 text-brand-green text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs font-semibold">Produits Frais</div>
                </div>
              </div>
              <button
                type="button"
                className="mt-4 bg-brand-green text-white px-8 py-3 rounded-custom font-bold hover:bg-opacity-90 transition-all shadow-md"
              >
                Soutenir ce projet
              </button>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="rounded-custom overflow-hidden shadow-xl ring-8 ring-slate-50">
                <img
                  alt="Repas équilibrés pour les enfants"
                  className="w-full h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-8AP4APf-_onu67NFpRd0qLFtjY6cPJRBpAESrWmb1E6Uk4udHlbEaObLVN6PVjQnSRVEDgczN0BuQGx8kDFD5VAtmpXiwZQTHcezCa3hGa85U4O0lU_0ZnaV6L7Pf6cG33iKA7MJ7H0-o_7eqpqExkH5IumfjkM8iBwtzwDnBapBFcxtR0jtMrKDe6IkagZ-agg25UMBlb6HNkBq5xGCQKkwhx0y-RpCQqKeTqt7wHf3-5PDOprpeq8-1ELcTjYFzsrl3HYEwfQ"
                />
              </div>
            </div>
          </section>

          {/* Social Activities */}
          <section
            className="flex flex-col lg:flex-row items-center gap-12"
            data-purpose="program-section"
            id="social"
          >
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold uppercase tracking-wider">
                Épanouissement
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Activités sociales</h2>
              <p className="text-slate-600 leading-relaxed">
                Le jeu et le sport sont essentiels au développement social et émotionnel. Nos programmes
                incluent des tournois de football, des cours de danse et des sorties culturelles pour
                renforcer la confiance en soi et l&apos;esprit d&apos;équipe chez nos enfants.
              </p>

              <div className="bg-brand-blue/5 p-6 rounded-custom border border-brand-blue/20">
                <p className="italic text-slate-700">
                  &quot;Le sport m&apos;a appris que nous sommes plus forts ensemble. Ici, j&apos;ai trouvé
                  une deuxième famille.&quot; - Marc, 14 ans
                </p>
              </div>

              <button
                type="button"
                className="mt-4 bg-brand-blue text-white px-8 py-3 rounded-custom font-bold hover:opacity-90 transition-all shadow-md"
              >
                Soutenir ce projet
              </button>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="rounded-custom overflow-hidden shadow-xl ring-8 ring-slate-50">
                <img
                  alt="Enfants jouant au football"
                  className="w-full h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKAw8Wi9EMwg0m3e09CIUh1qMxk4500y2ylQ03FfPf3FXOhIy6XuLiA1HtEsbLvb4p7LwpX44Abv1IqGVx_DvQNcdMRbT-h-4X3eN5xZ1gcA4PusovQqS6Z4vUlfHf4cFiieLlNy5Q2U_ifOAslY1k5vCO_9iJqO_2rBGPRy1CeKwEgcnk5HJY6cXT_v-gZoX8O_5sLqxA0-fKnkCYyqd0D2N_pNXL9BLRBYy2Uewfkxe8WzsrrouOfRJzmFEulAb7xjP6fVa8rNs"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Donation CTA */}
        <section className="bg-slate-900 text-white py-20" data-purpose="global-cta">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Chaque geste compte pour leur avenir
            </h2>
            <p className="text-slate-400 text-lg">
              Votre contribution, quelle qu&apos;elle soit, permet de maintenir ces programmes et d&apos;en
              créer de nouveaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-brand-orange hover:brightness-110 px-10 py-4 rounded-custom font-bold transition-colors shadow-md"
              >
                Faire un don ponctuel
              </Link>
              <Link
                href="/#contact"
                className="border border-white/30 hover:bg-white hover:text-slate-900 px-10 py-4 rounded-custom font-bold transition-all"
              >
                Devenir parrain
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

