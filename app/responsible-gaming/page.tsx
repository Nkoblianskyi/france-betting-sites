import Link from "next/link"
import { ArrowLeft, Shield, Clock, AlertTriangle, Phone, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResponsibleGamingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'Accueil
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Jeu Responsable</h1>
          </div>
          <p className="text-red-100 text-lg">Votre sécurité et votre bien-être sont notre priorité absolue</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-red-800 font-bold text-xl">Message Important</h2>
            </div>
            <p className="text-red-700 mb-2">
              Le jeu doit toujours rester amusant et divertissant. Si les paris cessent d'être agréables ou commencent à
              causer des problèmes dans votre vie, il est temps de chercher de l'aide.
            </p>
            <p className="text-red-700 font-semibold">
              Rappelez-vous : Vous n'êtes jamais seul, et de l'aide est toujours disponible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Fixez des Limites</h3>
              </div>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>• Décidez du temps et de l'argent avant de commencer</li>
                <li>• Ne jouez qu'avec l'argent que vous pouvez vous permettre de perdre</li>
                <li>• Prenez des pauses régulières</li>
                <li>• N'empruntez jamais d'argent pour jouer</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Outils d'Auto-Assistance</h3>
              </div>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Limites de dépôt</li>
                <li>• Limites de perte</li>
                <li>• Limites de temps de session</li>
                <li>• Auto-exclusion</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Signaux d'Alarme</h2>
            <p className="text-gray-700 mb-4">
              Il est important de reconnaître quand le jeu peut devenir un problème. Surveillez ces signes :
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• Passer plus de temps ou d'argent que prévu</li>
                <li>• Ressentir de l'anxiété ou de la culpabilité à propos du jeu</li>
                <li>• Cacher les activités de jeu aux autres</li>
                <li>• Négliger le travail ou la famille</li>
                <li>• Penser constamment au jeu</li>
                <li>• Être incapable de s'arrêter</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">ANJ</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                L'Autorité Nationale des Jeux française qui régule et supervise le marché du jeu.
              </p>
              <p className="text-sm text-gray-600">Offre des informations et des conseils sur le jeu responsable.</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Lignes d'Aide</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Un soutien professionnel et des conseils sont disponibles pour tous ceux qui ont besoin d'aide.
              </p>
              <p className="text-sm text-gray-600">Aide gratuite et confidentielle 24h/24.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-yellow-800 font-bold mb-3">Pour la Famille et les Amis</h3>
            <p className="text-yellow-700 mb-3">
              Les problèmes de jeu n'affectent pas seulement le joueur - ils affectent aussi les familles et les amis.
            </p>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• N'ignorez pas le problème</li>
              <li>• Encouragez à chercher une aide professionnelle</li>
              <li>• Ne prêtez pas d'argent ou ne payez pas les dettes de jeu</li>
              <li>• Prenez soin de votre propre bien-être</li>
            </ul>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Rappelez-vous</h3>
            <p className="text-gray-700 mb-4">
              La dépendance au jeu est une condition médicale, pas un défaut moral. La guérison est possible avec le bon
              soutien et traitement.
            </p>
            <p className="text-lg font-semibold text-green-600">
              La première étape est de reconnaître le problème et de demander de l'aide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
