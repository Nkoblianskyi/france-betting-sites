"use client"

import { Award, TrendingUp } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function MainHeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Desktop Hero */}
      <div className="hidden lg:block relative overflow-hidden mb-6">
        <div className="bg-white/70 shadow-lg max-w-[1150px] mx-auto rounded-lg">
          <div className="relative px-8 py-8">
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-3xl xl:text-4xl font-bold mb-3 leading-tight text-black uppercase">
                  Meilleurs <span className="text-blue-600">Sites de Paris</span> Français 2025
                </h1>

                <h2 className="text-lg xl:text-xl font-medium mb-4 text-black">Avis d'Experts & Analyse</h2>

                <div className="w-20 h-0.5 bg-green-600 mx-auto mb-4"></div>

                <p className="text-base text-black max-w-3xl mx-auto leading-relaxed mb-4">
                  Trouver des bookmakers fiables nécessite une expertise et une recherche approfondie. Heureusement,
                  notre analyse complète élimine les conjectures en fournissant des informations détaillées sur les
                  principales plateformes de paris françaises.
                </p>
                <p className="text-base text-black max-w-3xl mx-auto leading-relaxed">
                  Nous commençons par des bonus de bienvenue exceptionnels, soigneusement évalués par notre équipe
                  d'experts.
                </p>

                {/* Trust Indicators */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Image src="/france-flag-icon.webp" alt="Logo" width={20} height={20} className="w-5 h-5" />
                      <span className="text-sm font-bold tech-subheading">Réglementé FR</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Award className="w-4 h-4 text-black" />
                      <span className="text-sm font-bold tech-subheading">100% Légal</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <TrendingUp className="w-4 h-4 text-black" />
                      <span className="text-sm font-bold tech-subheading">Retraits Rapides</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-blue-600 font-bold">Mis à jour : {getCurrentMonthYear()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Hero */}
      <div className="lg:hidden mb-2">
        <div className="bg-white/70 shadow-lg max-w-[1150px] mx-auto rounded-lg">
          <div className="px-4 py-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-black uppercase">
              Meilleurs <span className="text-blue-600">Sites de Paris</span> Français 2025
            </h1>

            <div className="w-16 h-0.5 bg-green-600 mx-auto mb-4"></div>

            <p className="text-sm md:text-base text-black mb-4 leading-relaxed max-w-2xl mx-auto">
              Trouver des bookmakers fiables nécessite une expertise et une recherche approfondie. Heureusement, notre
              analyse complète élimine les conjectures en fournissant des informations détaillées sur les principales
              plateformes de paris françaises.
            </p>
            <p className="text-sm md:text-base text-black leading-relaxed max-w-2xl mx-auto">
              Nous commençons par des bonus de bienvenue exceptionnels, soigneusement évalués par notre équipe
              d'experts.
            </p>
            {/* Trust Indicators */}
            <div className="mt-6">
              <div className="flex justify-center items-center gap-1 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Image src="/france-flag-icon.webp" alt="Logo" width={20} height={20} className="w-5 h-5" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Réglementé FR</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Award className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">100% Légal</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <TrendingUp className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Retraits Rapides</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-blue-600 font-bold">Mis à jour : {getCurrentMonthYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
