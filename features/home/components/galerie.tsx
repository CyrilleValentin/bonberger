"use client";
import { useState } from "react";
import { MdPhotoLibrary } from "react-icons/md";
import { FiVideo, FiPlay, FiArrowRight } from "react-icons/fi";
import { MdCalendarMonth, MdMail } from "react-icons/md";

interface Card {
  categorie: string;
  nom: string;
  description: string;
  photo: string;
  video?: string;
}

const categories: string[] = [
  "Tout",
  "Education",
  "Repas",
  "Jeux & Loisir",
  "Equipe & Sport",
];

const cards: Card[] = [
  {
    categorie: "Education",
    nom: "Atelier de lecture matinal",
    description:
      "Le plaisir de découvrir de nouvelles histoires ensemble chaque matin.",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYKiu1Amr8EPqj2U8Y-Px0fAtwr-tByupn8ohQgyjskJzrvivEtCtgeFZk1MZK3PX1k8QFRkhAKu4PrMFYNeBwrm_UnyHpGyNachUAgl8EoRo6IG-Rtx-Y38sBVkbWn6ljOzQStBzgZYE3zVaBybicX40J48kN28OdvUqYcT86NhFkVUFm97zXv79n3IQ9AZSGX1YlGizuS68cHUQI1tERvsTD-liHW-gLWoLJKHwpxrrpHvpfBHbvOJt4O_JNljOSJJVIORDBdM",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    categorie: "Repas",
    nom: "Déjeuner communautaire",
    description: "Des repas sains et équilibrés partagés dans la convivialité.",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-CBbLOtPpP7E2EXE4KLocj0gGoLvIX6ikfWkV8Dp-JV4rZ0CDswYSzFk3b1Q3f4sTPOr3HBB1Um70-dAARwU6G7HatsGGbSPDaFMQycBulIpXXA-8WEy-1ugStmKm-W16VuOSPIWEDBc382GEahaDVPRx2ptgm5IWbubdEGEpkNLr2PosNN1SSNBzPt1vB8IpADFWuC3few38GwRU8cfWrMCgh4NnjW3z05GBB4AJu-QL6_mgBaVnuNCgfXhQ_ayDPS8azyMc6B0",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0",
  },
  {
    categorie: "Jeux & Loisir",
    nom: "Après-midi sportives",
    description:
      "Le sport pour renforcer l'esprit d'équipe et la santé physique.",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlW2QAy8tHowcKfn9FfY3shdT3MnwZ0gxX_rIxTju_FJuPfKejy_zQyfanmFkNJs0jzNeW9VGXFxI-JXzciE6IlcASdZZZ8u8m_ZAgnp25JxWACLakbNvPJqb8_1E3X5jsxCyjwvG6qwDGfv3VPj89xj0ExKEIdM7dEFpWaqNdKIPqzyFxERUzOJaC_E6NdrJ4QOhcal4Hbd4avT9fTnWpyHz4lPrb7FTudC4q4cEScFfJeTA3lONa6DAf4ERJoa_7qVz1bMKGtRg",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0",
  },
  {
    categorie: "Equipe & Sport",
    nom: "Accompagnement individuel",
    description: "Nos encadreurs veillent au progrès de chaque enfant.",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqlptfvb0dZDhBKVOtuS8LKL8WNg44DmaxYPEsR_Yk28UEXtkLma1GoeaIb-c7xcQNnU9G_mdhlJdBir9D9qAPEyi5_hwX7qKXsxNeM_TZc2G8aUILB-x-NRurxUJUjgzNVBdtZLn9JKiBMoJgIuTyYCUpjRgMKpVx42NFTCtycRC2TWYBLoZkGfmnIhQIEUc9zIl9XGsBDpcyTQfaPDTy6It_4kJXQ8YuYKQ6GgXzhc9659_Ht9S5MGhTjEmZ9xubZ8h8eqOipf4",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0",
  },
];

const Galerie = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [viewMode, setViewMode] = useState<"image" | "video">("image");

  // Filtre des cartes
  const filteredCards =
    selectedCategory === "Tout"
      ? cards
      : cards.filter((card) => card.categorie === selectedCategory);

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
      <section className="mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-secondary mb-4">
          <MdPhotoLibrary className="text-sm" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Transparence & Vie
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
          Notre Galerie de <span className="text-primary">Sourires</span>
        </h2>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Découvrez les moments précieux, les étapes d &apos;apprentissage et les
          instants de pure joie qui rythment le quotidien de nos protégés.
        </p>
      </section>

      {/* Switch Image / Video */}
      <div className="flex items-center gap-2 mb-8 bg-gray-100 p-1 rounded-full justify-center mx-auto w-full max-w-160">
        <button
          onClick={() => setViewMode("image")}
          className={`flex-1 px-6 py-2 rounded-full font-semibold transition-colors ${
            viewMode === "image"
              ? "bg-primary text-white"
              : "bg-white text-gray-500 hover:bg-primary/10"
          }`}
        >
          Images
        </button>
        <button
          onClick={() => setViewMode("video")}
          className={`flex-1 px-6 py-2 rounded-full font-semibold transition-colors ${
            viewMode === "video"
              ? "bg-primary text-white"
              : "bg-white text-gray-500 hover:bg-primary/10"
          }`}
        >
          Vidéos
        </button>
      </div>

      {/* Categories */}
      <section className="mb-12">
        <div className="flex flex-wrap items-center gap-4 border-b border-primary/10 pb-4 mb-8">
          {categories.map((cat: string, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-primary/10 hover:bg-primary/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid / Galerie */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          id="video-section"
        >
          {filteredCards
            .filter(
              (card) =>
                viewMode === "image" || (viewMode === "video" && card.video),
            )
            .map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {viewMode === "image" ? (
                  <div
                    className="aspect-4/3 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${card.photo}')` }}
                    data-alt={card.nom}
                  ></div>
                ) : (
                  <div className="aspect-4/3 w-full bg-black">
                    <iframe
                      className="w-full h-full"
                      src={card.video || ""}
                      title={card.nom}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 rounded-full mb-3">
                    {card.categorie}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {card.nom}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* card de video */}
      <section className="mt-24 mb-16 rounded-[2rem] bg-slate-900 dark:bg-slate-950 p-8 md:p-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-secondary mb-6">
              <FiVideo className="text-sm" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Vidéos de nos activités
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vivez notre quotidien en mouvement
            </h2>

            <p className="text-slate-300 mb-8 leading-relaxed">
              Parce que les images animées racontent mieux que les mots,
              découvrez nos reportages et les témoignages de nos encadreurs.
            </p>

            <button
              className="flex items-center gap-3 text-secondary font-bold hover:gap-5 transition-all"
              onClick={() => {
                setViewMode("video"); // switch sur les vidéos
                const videoSection = document.getElementById("video-section");
                if (videoSection) {
                  // scroll vers le début de la galerie
                  videoSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Voir toutes les vidéos <FiArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="group relative aspect-video rounded-2xl overflow-hidden bg-slate-800 cursor-pointer">
              {/* IMAGE DE FOND CORRIGÉE EN JSX */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"
                data-alt="Aperçu vidéo d'une fête d'anniversaire"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoRYxrPR3oox9rMDCCagoXCw-pk8XAtY5YvQ86cLEdDwdPXj1VFYL_BH6NTqa7XHCIjDIcLQiZw7Deq0Dxz0zpJpz_eJGOCYaYm0SsmrmWamPkuGrJE0Q_ZLPHG1aEdouq8usNTVOQL-I2nphdx3mHxGtScNCU5xEbsc9JaDj2RLSpIukEPEYRmJ5KOIYlaUIR49R_mvAYa37lp2hXoytUMXl1p0eLVAVt3abFsCcBzaLVyI25I2QhllY_4aRyDPIiky7IPOxkUt0')`,
                }}
              ></div>

              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <FiPlay className="text-3xl" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-medium">
                  Reportage : La rentrée scolaire 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* prendre un rendez-vous */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Vous souhaitez nous rendre visite ?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Nous serions ravis de vous accueillir pour vous présenter notre
            projet de vive voix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              <MdCalendarMonth size={20} />
              Prendre rendez-vous
            </button>
            <button className="bg-white dark:bg-slate-800 border border-primary/20 text-secondary px-8 py-3 rounded-xl font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
              <MdMail size={20} />
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Galerie;
