import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { MainSiteFooter } from "../components/main-site-footer"
import { MainSiteHeader } from "../components/main-site-header"

export const metadata: Metadata = {
  title: "Meilleurs Sites de Paris Français - Top Sites de Paris France 2025",
  description:
    "Découvrez les meilleurs sites de paris français avec des avis d'experts, des bonus exclusifs et des comparaisons complètes. Trouvez votre bookmaker parfait aujourd'hui.",
  keywords: "sites de paris français, bookmakers France, bonus paris, paris sportifs France",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10">
            <MainSiteHeader />
            <main>{children}</main>
            <MainSiteFooter />
          </div>
        </div>
      </body>
    </html>
  )
}
