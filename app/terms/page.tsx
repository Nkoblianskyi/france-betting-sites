import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920&text=Stadium+Background)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-emerald-800/95 to-emerald-900/95 backdrop-blur-sm text-white py-6">
          <div className="container mx-auto px-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'Accueil
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold">Conditions Générales</h1>
            </div>
            <p className="text-emerald-200">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <h2>1. Acceptation des Conditions</h2>
              <p>
                En accédant et en utilisant Meilleurs Sites de Paris Français, vous acceptez et consentez à être lié par
                les conditions générales suivantes. Ces conditions s'appliquent à tous les utilisateurs de notre site
                web et services.
              </p>

              <h2>2. Objectif du Site Web</h2>
              <p>
                Ce site web fournit des informations et des avis sur les sites de paris disponibles en France. Nous
                sommes un service de comparaison indépendant et n'exploitons aucun service de jeu nous-mêmes.
              </p>

              <h2>3. Restrictions d'Âge</h2>
              <p>
                Vous devez avoir au moins 18 ans pour utiliser ce site web. Le jeu est réservé aux adultes uniquement.
                Nous prenons la vérification d'âge au sérieux et encourageons le jeu responsable.
              </p>

              <h2>4. Précision des Informations</h2>
              <p>
                Bien que nous nous efforcions de fournir des informations précises et à jour, nous ne pouvons garantir
                l'exactitude de tout le contenu. Les cotes de paris, les bonus et les conditions peuvent changer sans
                préavis.
              </p>

              <h2>5. Liens Tiers</h2>
              <p>
                Notre site web contient des liens vers des sites de paris tiers. Nous ne sommes pas responsables du
                contenu, des conditions ou des pratiques de ces sites externes. Veuillez consulter leurs conditions
                générales avant utilisation.
              </p>

              <h2>6. Jeu Responsable</h2>
              <p>Nous promouvons le jeu responsable et encourageons les utilisateurs à :</p>
              <ul>
                <li>Fixer des limites de temps et d'argent dépensé au jeu</li>
                <li>Ne jamais jouer plus que vous ne pouvez vous permettre de perdre</li>
                <li>Chercher de l'aide si le jeu devient un problème</li>
                <li>Utiliser les outils d'auto-exclusion si nécessaire</li>
              </ul>

              <h2>7. Propriété Intellectuelle</h2>
              <p>
                Tout le contenu de ce site web, y compris le texte, les graphiques, les logos et les images, est la
                propriété de Meilleurs Sites de Paris Français et est protégé par les lois sur le droit d'auteur.
              </p>

              <h2>8. Limitation de Responsabilité</h2>
              <p>
                Nous ne serons pas responsables de tout dommage direct, indirect, accessoire ou consécutif découlant de
                votre utilisation de ce site web ou des informations qu'il contient.
              </p>

              <h2>9. Confidentialité</h2>
              <p>
                Votre vie privée est importante pour nous. Veuillez consulter notre Politique de Confidentialité pour
                comprendre comment nous collectons, utilisons et protégeons vos informations.
              </p>

              <h2>10. Modifications des Conditions</h2>
              <p>
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet
                immédiatement lors de leur publication sur ce site web.
              </p>

              <h2>11. Loi Applicable</h2>
              <p>Ces conditions seront régies et interprétées conformément aux lois françaises.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
