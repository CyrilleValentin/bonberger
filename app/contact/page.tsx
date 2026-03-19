import Image from "next/image";

const ContactPage = () => {
  return (
    <main>
    {/* BEGIN: Testimonials Section */}
    <section className="py-16 bg-white" data-purpose="testimonials-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Témoignages</h2>
    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Découvrez les histoires de ceux qui soutiennent notre mission et font battre le cœur de l&apos;orphelinat.
              </p>
    </div>
    {/* Carousel Container */}
    <div className="relative">
    <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-8" id="testimonial-container">
    {/* Testimonial 1 */}
    <div className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center">
    <div className="testimonial-card bg-beige-50 p-8 rounded-custom shadow-sm border border-beige-200 h-full flex flex-col">
        <div className="grow">
    <svg className="h-8 w-8 text-primary opacity-50 mb-4" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
    <p className="text-gray-700 italic leading-relaxed">
                        &quot;Une expérience humaine inoubliable. Voir les sourires de ces enfants grâce à nos actions communes est la plus belle des récompenses.&quot;
                      </p>
    </div>
    <div className="mt-8 flex items-center">
    <Image width={48} height={48} alt="Portrait de Jean" className="h-12 w-12 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlArvvF8cnsV580YdfcES6GPFTaSLpZ9WuIP34J5XugMfVXVKWjujxVwEb_5h3H2EQRoWWUDGImhuEmHB9R1RC3mK6Zafy4-9upsfZSc-rgfsQraVH3kSPadzz19PwGxrLM6kkDMIXTSRQs8n4v1DnbL9zvZqOtNqhCaPBhjtcM58tkrsvbQszwGb6BTR_T9-MHQdcqxLexpZT2JmCGY0dKu1CWKA1oqXVvFJm6J5TSVv4MYSYyjaRwNRhT8fZAAhb8npiLUN1aN8"/>
    <div className="ml-4">
    <p className="text-sm font-bold text-gray-900">Jean Dupont</p>
    <p className="text-xs text-gray-500">Bénévole depuis 3 ans</p>
    </div>
    </div>
    </div>
    </div>
    {/* Testimonial 2 */}
    <div className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center">
    <div className="testimonial-card bg-beige-50 p-8 rounded-custom shadow-sm border border-beige-200 h-full flex flex-col">
    <div className="grow">
    <svg className="h-8 w-8 text-primary opacity-50 mb-4" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
    <p className="text-gray-700 italic leading-relaxed">
                        &quot;L&apos;orphelinat fait un travail incroyable en toute transparence. Je sais exactement comment mes dons sont utilisés pour l&apos;éducation des petits.&quot;
                      </p>
    </div>
    <div className="mt-8 flex items-center">
    <Image width={48} height={48} alt="Portrait de Marie" className="h-12 w-12 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSj_rOsQ-QscG_9ag-x2enypQnV1JysN_qK3Whf2C8evZM9C5o5NKKd1rMDF4MgeohCgglfAPwAatMPj37A8yDeN13WFMJE3UKzxdnA-bwJYdqZW-D5I2yD7cu-Ml-ar7fleKALpi9rTQ8LxBbY2zwC37dZ7Qwhjh1gBSTM8GId7tU-6tQi6eObNh8_ze_QMmzU3wKL5xOMjlFj49gYSh-aixflOnKgi-W9OXLnRtP5zIC3SvfLnMQiSSLsooQkPGF_lL8HjWii5A"/>
    <div className="ml-4">
    <p className="text-sm font-bold text-gray-900">Marie Leblanc</p>
    <p className="text-xs text-gray-500">Donatrice fidèle</p>
    </div>
    </div>
    </div>
    </div>
    {/* Testimonial 3 */}
    <div className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center">
    <div className="testimonial-card bg-beige-50 p-8 rounded-custom shadow-sm border border-beige-200 h-full flex flex-col">
    <div className="grow">
    <svg className="h-8 w-8 text-primary opacity-50 mb-4" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
    <p className="text-gray-700 italic leading-relaxed">
                        &quot;Le personnel est dévoué et l&apos;accueil est toujours chaleureux. C&apos;est une véritable famille pour ces enfants.&quot;
                      </p>
    </div>
    <div className="mt-8 flex items-center">
    <Image width={48} height={48} alt="Portrait de Pierre" className="h-12 w-12 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARZMnOLscPYAbjzpFfauDgU39IFJVzwCP9lQ3g9IYopXIvrBPS7-GZsRBSrPbu9N2HjwxaDqEsgFyzLNK61Ysk6EtfqiWOQUcF8cL_mHr1wOcjXqr-QuiMhZv8gRzvQBE310fuiX_SACdznZHGRJcDPO8Y9cJ6R90UjChe8BL9VNtwSqbpefl5mx_an8IzcWiOPExqra8ov8H76y5a2KXrGFkRL8rg_yuu7t3EClmu5NmafTUL1FwwKZzW3eVBPYxl25q0iswC_Bg"/>
    <div className="ml-4">
    <p className="text-sm font-bold text-gray-900">Pierre Martin</p>
    <p className="text-xs text-gray-500">Visiteur &amp; Parrain</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    {/* Carousel Navigation Dots */}
    <div className="flex justify-center space-x-2 mt-4">
    <button aria-label="Slide 1" className="h-2 w-2 rounded-full bg-primary"></button>
    <button aria-label="Slide 2" className="h-2 w-2 rounded-full bg-beige-200"></button>
    <button aria-label="Slide 3" className="h-2 w-2 rounded-full bg-beige-200"></button>
    </div>
    </div>
    </div>
    </section>
    {/* END: Testimonials Section */}
    {/* BEGIN: Contact & Map Section */}
    <section className="py-16 bg-beige-100" data-purpose="contact-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    {/* Contact Form */}
    <div className="bg-white p-8 rounded-custom shadow-md" data-purpose="contact-form-container">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
    <form action="#" className="space-y-6" method="POST">
    <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Nom complet</label>
    <input className="mt-1 block w-full rounded-custom border-beige-200 shadow-sm focus:border-primary focus:ring-primary py-3 px-4" id="name" name="name" placeholder="Votre nom" required={true} type="text"/>
    </div>
    <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
    <input className="mt-1 block w-full rounded-custom border-beige-200 shadow-sm focus:border-primary focus:ring-primary py-3 px-4" id="email" name="email" placeholder="votre@email.com" required={true} type="email"/>
    </div>
    <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
    <textarea className="mt-1 block w-full rounded-custom border-beige-200 shadow-sm focus:border-primary focus:ring-primary py-3 px-4" id="message" name="message" placeholder="Comment pouvons-nous vous aider ?" required={true} rows={4}></textarea>
    </div>
    <button className="w-full bg-primary text-white font-bold py-4 px-6 rounded-custom hover:bg-orange-500 transition-colors shadow-lg" type="submit">
                    Envoyer le message
                  </button>
    </form>
    </div>
        {/* Contact Details & Map */}
    <div className="space-y-8" data-purpose="contact-info-map">
    <div className="bg-white p-8 rounded-custom shadow-md">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Coordonnées</h3>
    <div className="space-y-4">
    <div className="flex items-start">
    <div className="shrink-0">
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
    </div>
    <div className="ml-4">
    <p className="text-sm font-medium text-gray-900">Adresse</p>
    <p className="text-sm text-gray-500">123 Avenue de l&apos;Espoir, 75000 Paris, France</p>
    </div>
    </div>
    <div className="flex items-start">
    <div className="shrink-0">
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
    </div>
    <div className="ml-4">
    <p className="text-sm font-medium text-gray-900">Téléphone</p>
    <p className="text-sm text-gray-500">+33 1 23 45 67 89</p>
    </div>
    </div>
    <div className="flex items-start">
    <div className="shrink-0">
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
    </div>
    <div className="ml-4">
    <p className="text-sm font-medium text-gray-900">Email</p>
    <p className="text-sm text-gray-500">contact@coeurdenfant.org</p>
    </div>
    </div>
    </div>
    </div>
    {/* Stylized Google Maps View (Placeholder iframe) */}
    <div className="rounded-custom overflow-hidden shadow-md border-4 border-white h-72 w-full relative">
    <iframe allowFullScreen={true} frameBorder={0} height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156743895!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca979aed86624!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1634567890123!5m2!1sfr!2sfr" style={{border:0, filter: 'sepia(20%) hue-rotate(15deg) saturate(120%)'}} width="100%">
    </iframe>
    <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-[10px] shadow font-bold text-primary">NOTRE EMPLACEMENT</div>
    </div>
    </div>
    </div>
    </div>
    </section>
    {/* END: Contact & Map Section */}
    </main>
);
};

export default ContactPage;