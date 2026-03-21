export default function HomeLanding() {
  return (
    <>
      {/* Hero */}
      <section
        id="accueil"
        className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden"
        data-purpose="hero-banner"
      >
        {/* Background image */}
        <img
          alt="Enfants et éducateurs souriants"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPBxL42cXbHSOJ9RY3-u8UV9sorDtKtR-6Q6_PjQjCi4rNxhNZ5yDLPv3DtGtjabGCXY6BRLhfetBhSxBkISoqvI6polCEc9YpblpsNZ2PgACaUojsa2OSkMBCzx1L8-YpkOQsLSyk8ENZcQwlTlMyWlRLR1kZz3CT4TM3pQ8gDkApCChvx3OniwieUjQXVSYdC-9pqMV9VLPRddZmwMMMrGnoXVsPN8Ylzx_q-mKMcyC4SIKccG4cPq73YhY8DlBNhucQV-Qg7K4"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Offrir un avenir radieux à chaque enfant
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed font-light">
              Nous accompagnons les enfants les plus vulnérables en leur offrant
              un foyer aimant, une éducation de qualité et un soutien médical
              constant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                className="bg-brand-orange px-10 py-4 rounded-custom text-xl font-bold shadow-lg hover:scale-105 transition-transform"
              >
                Faire un don
              </button>
              <button
                type="button"
                className="bg-brand-blue px-10 py-4 rounded-custom text-xl font-bold shadow-lg hover:scale-105 transition-transform"
              >
                Devenir bénévole
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro / À propos */}
      <section
        className="py-20 bg-brand-beige"
        id="a-propos"
        data-purpose="intro-about"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-brand-blue font-bold text-lg uppercase tracking-widest mb-4">
                Notre Vision
              </h2>
              <h3 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
                Un refuge sûr pour la croissance et l&apos;épanouissement
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Depuis plus de 15 ans, l&apos;orphelinat Bon Berger s&apos;engage à
                transformer la vie des enfants orphelins et abandonnés. Notre
                mission va bien au-delà de l&apos;hébergement : nous construisons
                des fondations solides pour leur autonomie future grâce à une
                approche holistique centrée sur l&apos;enfant.
              </p>
              <button
                type="button"
                className="border-2 border-brand-blue text-brand-blue px-8 py-3 rounded-custom font-bold hover:bg-brand-blue hover:text-white transition-colors"
              >
                Lire la suite
              </button>
            </div>

            {/* Visual Elements */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  alt="Nos activités"
                  className="rounded-custom shadow-xl w-full object-cover h-64"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGHir4O1dRP92CjAAhQwl6D8uQUwYuowYi0jhc9yuTUN6pMpuDqPv1I7ZyCX2QQhLv4L7ZtzNZpcVQUZcDyJpHVlOI96xT459zUEWQsdyO1vL-LBtQjaeLbgNshsGD7iaofu1yZMXW8RVdiGFfcJaEJWf4amY631vv86rIs7pqzELCFLcgul6XV_uc_hhrnzqcKNZigFhQ1UtBtj5zGejttAbDXkwt3M0nQxOIpEf_oVXUGFL-aJOnKcN-KMCDHvu78GbTbOwCmZc"
                />
                <div className="bg-brand-green p-6 rounded-custom text-white text-center">
                  <span className="block text-4xl font-bold">120+</span>
                  <span className="text-sm font-semibold">Enfants aidés</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-brand-orange p-6 rounded-custom text-white text-center">
                  <span className="block text-4xl font-bold">15+</span>
                  <span className="text-sm font-semibold">Années d&apos;action</span>
                </div>
                <img
                  alt="Éducation"
                  className="rounded-custom shadow-xl w-full object-cover h-64"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAw-iXRA4Gz2pqiNpK4Yswie2sMm3oko-Li4uqcbHJSsekJOpY0c5HHZE6cFkHUCzvcagUtxrNQ5AQfTPlZQ0BG-4l73GN2h-A5PXTtEB7tfniwcZZlGRfmRNyGZNl4HPC-Q3mWQaO80KyNJfC_EXZ0_kYr2sApCHOm6w9sif3GHM3lDFt4PsepKqYC9dWqLQNfVLyqfeESclrgAvWytgoEDc2QqdxkQCr46syhKR2rTsytnG0VxmQK9HTS3yrmismhsfcRXvO5yY"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section
        className="py-16 bg-white border-y border-gray-100"
        id="nos-actions"
        data-purpose="impact-numbers"
      >
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-brand-blue text-4xl font-bold mb-2">250</h4>
            <p className="text-gray-500 font-medium uppercase text-xs tracking-wider">
              Repas quotidiens
            </p>
          </div>
          <div>
            <h4 className="text-brand-blue text-4xl font-bold mb-2">15</h4>
            <p className="text-gray-500 font-medium uppercase text-xs tracking-wider">
              Diplômés cette année
            </p>
          </div>
          <div>
            <h4 className="text-brand-blue text-4xl font-bold mb-2">45</h4>
            <p className="text-gray-500 font-medium uppercase text-xs tracking-wider">
              Bénévoles actifs
            </p>
          </div>
          <div>
            <h4 className="text-brand-blue text-4xl font-bold mb-2">100%</h4>
            <p className="text-gray-500 font-medium uppercase text-xs tracking-wider">
              Transparence financière
            </p>
          </div>
        </div>
      </section>

      {/* Galerie (placeholder pour correspondre au header) */}
      <section
        id="galerie"
        className="py-20 bg-brand-beige"
        data-purpose="gallery"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-brand-blue font-bold text-lg uppercase tracking-widest mb-8 text-center">
            Galerie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              alt="Galerie 1"
              className="rounded-custom shadow-xl w-full object-cover h-72"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGHir4O1dRP92CjAAhQwl6D8uQUwYuowYi0jhc9yuTUN6pMpuDqPv1I7ZyCX2QQhLv4L7ZtzNZpcVQUZcDyJpHVlOI96xT459zUEWQsdyO1vL-LBtQjaeLbgNshsGD7iaofu1yZMXW8RVdiGFfcJaEJWf4amY631vv86rIs7pqzELCFLcgul6XV_uc_hhrnzqcKNZigFhQ1UtBtj5zGejttAbDXkwt3M0nQxOIpEf_oVXUGFL-aJOnKcN-KMCDHvu78GbTbOwCmZc"
            />
            <img
              alt="Galerie 2"
              className="rounded-custom shadow-xl w-full object-cover h-72"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAw-iXRA4Gz2pqiNpK4Yswie2sMm3oko-Li4uqcbHJSsekJOpY0c5HHZE6cFkHUCzvcagUtxrNQ5AQfTPlZQ0BG-4l73GN2h-A5PXTtEB7tfniwcZZlGRfmRNyGZNl4HPC-Q3mWQaO80KyNJfC_EXZ0_kYr2sApCHOm6w9sif3GHM3lDFt4PsepKqYC9dWqLQNfVLyqfeESclrgAvWytgoEDc2QqdxkQCr46syhKR2rTsytnG0VxmQK9HTS3yrmismhsfcRXvO5yY"
            />
            <img
              alt="Galerie 3"
              className="rounded-custom shadow-xl w-full object-cover h-72"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPBxL42cXbHSOJ9RY3-u8UV9sorDtKtR-6Q6_PjQjCi4rNxhNZ5yDLPv3DtGtjabGCXY6BRLhfetBhSxBkISoqvI6polCEc9YpblpsNZ2PgACaUojsa2OSkMBCzx1L8-YpkOQsLSyk8ENZcQwlTlMyWlRLR1kZz3CT4TM3pQ8gDkApCChvx3OniwieUjQXVSYdC-9pqMV9VLPRddZmwMMMrGnoXVsPN8Ylzx_q-mKMcyC4SIKccG4cPq73YhY8DlBNhucQV-Qg7K4"
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section
        id="contact"
        className="py-20"
        data-purpose="urgent-cta"
      >
        <div className="container mx-auto px-6">
          <div className="bg-brand-blue rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full" />
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Votre soutien change des vies
              </h2>
              <p className="text-blue-100 text-lg">
                Chaque don, petit ou grand, contribue directement à la santé, à
                l&apos;éducation et au bonheur d&apos;un enfant. Rejoignez notre
                communauté de bienfaiteurs.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
              <a
                className="bg-brand-orange text-white text-center px-12 py-4 rounded-custom font-bold text-lg hover:shadow-xl transition shadow-md"
                href="#"
              >
                Soutenir maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

