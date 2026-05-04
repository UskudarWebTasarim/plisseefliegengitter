import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Fliegengitter Deutschland: Cleverer Fensterschutz",
  description: "Fliegengitter Deutschland: Cleverer Insektenschutz für Ihr Zuhause. Einfach montiert, langlebig und stilvoll - genießen Sie insektenfreie Fenster ohne Kompromisse.",
  keywords: "Fliegengitter Deutschland, Plissee Fliegengitter Deutschland, Plissee Storen Deutschland, Insektenschutz Deutschland, Almanya sineklik, Almanya plise sineklik, Almanya plise perde, Fenster Gitter, Sineklik, Plise Perde",
  metadataBase: new URL("https://plisseefliegengitter.de"),
  alternates: {
    canonical: "https://plisseefliegengitter.de",
    languages: {
      'de': 'https://plisseefliegengitter.de',
      'tr': 'https://plisseefliegengitter.de',
    },
  },
  openGraph: {
    title: "Fliegengitter Deutschland: Cleverer Fensterschutz",
    description: "Fliegengitter Deutschland: Cleverer Insektenschutz für Ihr Zuhause. Einfach montiert, langlebig und stilvoll - genießen Sie insektenfreie Fenster ohne Kompromisse.",
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
  "name": "Plissee Fliegengitter Deutschland",
  "alternateName": "Almanya Sineklik",
  "description": "Fliegengitter Deutschland: Cleverer Insektenschutz für Ihr Zuhause. Hochwertige Plissee Fliegengitter, Sineklik, Plise Perde für Deutschland, Österreich, Schweiz.",
  "url": "https://plisseefliegengitter.de",
  "telephone": "+90 540 336 3873",
  "email": "info@fenetresystems.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Köln",
    "addressCountry": "DE"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Deutschland"
    },
    {
      "@type": "Country",
      "name": "Österreich"
    },
    {
      "@type": "Country",
      "name": "Schweiz"
    },
    {
      "@type": "Country",
      "name": "Belgien"
    },
    {
      "@type": "Country",
      "name": "Niederlande"
    },
    {
      "@type": "Country",
      "name": "Frankreich"
    }
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
  ],
  "keywords": [
    "Fliegengitter Deutschland",
    "Plissee Fliegengitter Deutschland",
    "Plissee Storen Deutschland",
    "Insektenschutz Deutschland",
    "Almanya sineklik",
    "Almanya plise sineklik",
    "Almanya plise perde"
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
