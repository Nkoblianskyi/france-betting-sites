import Link from "next/link"
import { ArrowLeft, Cookie, Shield, Settings, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'Accueil
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Politique des Cookies</h1>
          </div>
          <p className="text-blue-100 text-lg">Informations sur l'utilisation des cookies sur notre plateforme</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-6 h-6 text-blue-600" />
              <h2 className="text-blue-900 font-bold text-xl">Que sont les Cookies ?</h2>
            </div>
            <p className="text-blue-800">
              Les cookies sont de petits fichiers de données stockés sur votre appareil lorsque vous visitez notre site
              web. Ils nous aident à améliorer votre expérience et à fournir du contenu pertinent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Cookies Nécessaires</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Ces cookies sont essentiels pour les fonctions de base du site web.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Navigation et sécurité</li>
                <li>• Paramètres et préférences</li>
                <li>• Gestion de session</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Cookies Fonctionnels</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Ces cookies améliorent les fonctionnalités et la personnalisation.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Paramètres de langue</li>
                <li>• Interfaces utilisateur</li>
                <li>• Contenu personnalisé</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Catégories de Cookies</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies de Session</h4>
                <p className="text-sm text-gray-600">
                  Cookies temporaires supprimés lorsque vous fermez votre navigateur. Utilisés pour maintenir votre
                  session pendant la navigation.
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies Permanents</h4>
                <p className="text-sm text-gray-600">
                  Restent sur votre appareil pendant une période déterminée. Aident à mémoriser vos préférences lors de
                  futures visites.
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies Tiers</h4>
                <p className="text-sm text-gray-600">
                  Cookies de services externes comme les analyses et les réseaux sociaux. Nous aident à comprendre
                  comment notre site est utilisé.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h3 className="text-green-800 font-bold mb-3">Gérez vos Paramètres de Cookies</h3>
            <p className="text-green-700 mb-3">
              Vous avez un contrôle total sur les paramètres de cookies dans votre navigateur :
            </p>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Voir tous les cookies stockés</li>
              <li>• Supprimer des cookies spécifiques ou tous les cookies</li>
              <li>• Bloquer les cookies de sites spécifiques</li>
              <li>• Configurer la suppression automatique</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="text-yellow-800 font-bold mb-3">Votre Consentement</h3>
            <p className="text-yellow-700">
              En continuant à utiliser notre site web, vous acceptez notre utilisation des cookies comme décrit dans
              cette politique. Vous pouvez modifier vos préférences de cookies à tout moment via les paramètres de votre
              navigateur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
