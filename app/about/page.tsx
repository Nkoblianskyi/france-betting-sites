import Link from "next/link"
import { ArrowLeft, Shield, Award, TrendingUp, Users, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'Accueil
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">À Propos de la Plateforme</h1>
          </div>
          <p className="text-blue-100 text-lg">Votre source fiable d'informations et d'analyses sur les paris</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Notre Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Nous fournissons des analyses objectives et approfondies des plateformes de paris pour aider les joueurs
                français à prendre des décisions éclairées.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Notre Approche</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Chaque plateforme est évaluée minutieusement selon des critères de sécurité, d'expérience utilisateur,
                de qualité des cotes et du service client.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Critères d'Évaluation
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Sécurité & Licence</h4>
                <p className="text-sm text-gray-600">Vérification des licences et mesures de sécurité</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Expérience Utilisateur</h4>
                <p className="text-sm text-gray-600">Navigation, design et fonctionnalités</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cotes & Marchés</h4>
                <p className="text-sm text-gray-600">Cotes compétitives et sélection de marchés</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Bonus</h4>
                <p className="text-sm text-gray-600">Valeur et transparence des offres</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Paiements</h4>
                <p className="text-sm text-gray-600">Rapidité et sécurité des transactions</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                <p className="text-sm text-gray-600">Disponibilité et qualité du service client</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-900">Notre Engagement</h3>
            </div>
            <p className="text-blue-800 mb-3">
              Nous maintenons des standards élevés d'objectivité et de transparence dans toutes nos évaluations et
              classements.
            </p>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Évaluations indépendantes basées sur des tests réels</li>
              <li>• Mises à jour régulières des informations</li>
              <li>• Focus sur les besoins des joueurs français</li>
              <li>• Promotion du jeu responsable</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Information Importante</h3>
            </div>
            <p className="text-red-700 mb-2">
              Le jeu doit toujours rester un divertissement. Ne jouez jamais avec de l'argent que vous ne pouvez pas
              vous permettre de perdre.
            </p>
            <p className="text-red-700 font-semibold">
              Si le jeu devient un problème, cherchez de l'aide auprès des organisations compétentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
