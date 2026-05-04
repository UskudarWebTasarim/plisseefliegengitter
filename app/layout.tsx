import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Plissee Fliegengitter: Cleverer Fensterschutz",
  description: "Plissee Fliegengitter: Cleverer Fensterschutz für Ihr Zuhause. Einfach montiert, langlebig und stilvoll - genießen Sie insektenfreie Fenster ohne Kompromisse.",
  keywords: "Plissee Fliegengitter, Insektenschutz, Fliegengitter, Fenster Gitter, Sineklik, Plise Perde, Jaluzi Perde, Zip Perde, Fenstereinrichtung",
  metadataBase: new URL("https://plisseefliegengitter.de"),
  alternates: {
    canonical: "https://plisseefliegengitter.de",
  },
  openGraph: {
    title: "Plissee Fliegengitter - Premium Insektenschutz",
    description: "Professionelle Insektenschutzlösungen für Fenster und Türen. Hochwertige Qualität aus der Türkei.",
    url: "https://plisseefliegengitter.de",
    siteName: "Plissee Fliegengitter",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Plissee Fliegengitter",
  "description": "Hochwertige Plissee Fliegengitter, Sineklik, Plise Perde, Jaluzi Perde und Zip Perde. Made in Turkey, direkt zu Ihnen nach Europa.",
  "url": "https://plisseefliegengitter.de",
  "telephone": "+90 540 336 3873",
  "email": "info@fenetresystems.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Köln",
    "addressCountry": "DE"
  },
  "areaServed": [
    "DE",
    "AT",
    "CH",
    "BE",
    "NL",
    "FR"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/FenetreSystems/",
    "https://www.instagram.com/fenetresystems/",
    "https://x.com/FenetreSystems",
    "https://www.linkedin.com/company/fenetresystems/",
    "https://tr.pinterest.com/fenetresystems/",
    "https://www.youtube.com/@FenetreSystems"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
