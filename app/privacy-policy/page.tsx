import Link from "next/link"
import { ArrowLeft, Lock, Eye, Shield, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Politique de Confidentialité</h1>
          </div>
          <p className="text-purple-100 text-lg">Comment nous protégeons et gérons vos informations personnelles</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Quelles Données Nous Collectons</h3>
              </div>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>• Informations utilisateur de base</li>
                <li>• Informations sur le navigateur et l'appareil</li>
                <li>• Statistiques d'utilisation et préférences</li>
                <li>• Données d'interaction sur la plateforme</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Comment Nous Utilisons les Données</h3>
              </div>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Améliorer les fonctionnalités de la plateforme</li>
                <li>• Fournir du contenu pertinent</li>
                <li>• Analyser le comportement des utilisateurs</li>
                <li>• Assurer la sécurité de la plateforme</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Principes de Protection des Données</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Minimisation</h4>
                <p className="text-sm text-gray-600">
                  Nous ne collectons que les données nécessaires au fonctionnement de la plateforme
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Sécurité</h4>
                <p className="text-sm text-gray-600">
                  Toutes les données sont protégées par des mesures de sécurité modernes
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Transparence</h4>
                <p className="text-sm text-gray-600">Communication claire sur l'utilisation de vos données</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="text-purple-900 font-bold text-xl">Vos Droits</h3>
            </div>
            <p className="text-purple-800 mb-3">Vous avez les droits suivants concernant vos données personnelles :</p>
            <ul className="text-purple-800 space-y-2 text-sm">
              <li>• Droit d'accès à vos données stockées</li>
              <li>• Droit de rectification des informations incorrectes</li>
              <li>• Droit à l'effacement de vos données</li>
              <li>• Droit à la limitation du traitement des données</li>
              <li>• Droit à la portabilité des données</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mesures de Sécurité</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Nous mettons en œuvre des mesures de sécurité complètes pour protéger vos informations personnelles :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mesures Techniques</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Chiffrement des données sensibles</li>
                    <li>• Infrastructures serveur sécurisées</li>
                    <li>• Mises à jour de sécurité régulières</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mesures Organisationnelles</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Accès limité aux données</li>
                    <li>• Formation du personnel à la sécurité des données</li>
                    <li>• Examens de sécurité réguliers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="text-yellow-800 font-bold mb-3">Mises à Jour de la Politique</h3>
            <p className="text-yellow-700">
              Nous pouvons périodiquement mettre à jour cette politique de confidentialité pour refléter les changements
              dans nos pratiques ou les exigences légales. Les changements importants seront communiqués clairement sur
              la plateforme.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
