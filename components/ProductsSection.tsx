"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

const products = [
  {
    id: 1,
    nameKey: "productSineklik",
    description: {
      de: "Hochwertige Insektenschutzgitter für Fenster und Türen. Einfache Installation, langlebiges Material.",
      tr: "Pencereler ve kapılar için yüksek kaliteli sineklik. Kolay kurulum, dayanıklı malzeme."
    },
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    id: 2,
    nameKey: "productPliseSineklik",
    description: {
      de: "Plissee-Fliegengitter mit Platzsparendem Design. Perfekt für Türen und große Fensteröffnungen.",
      tr: "Yer tasarrufu sağlayan plise sineklik tasarımı. Kapılar ve büyük pencere açıklıkları için mükemmel."
    },
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    id: 3,
    nameKey: "productPlisePerde",
    description: {
      de: "Elegante Plissee-Vorhänge für Lichtsteuerung und Privatsphäre. In verschiedenen Farben und Mustern.",
      tr: "Işık kontrolü ve mahremiyet için zarif plise perdeler. Çeşitli renk ve desenlerde."
    },
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    nameKey: "productJaluziPerde",
    description: {
      de: "Klassische Jalousien mit moderner Funktionalität. Hervorragende Lichtregulierung.",
      tr: "Modern işlevsellikle klasik jaluziler. Mükemmel ışık regülasyonu."
    },
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )
  },
  {
    id: 5,
    nameKey: "productHoneycombPerde",
    description: {
      de: "Wabenstruktur für hervorragende Wärmedämmung. Energieeffiziente Lösung für Ihr Zuhause.",
      tr: "Mükemmel yalıtım için petek yapı. Eviniz için enerji verimli çözüm."
    },
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    )
  },
  {
    id: 6,
    nameKey: "productDuetPerde",
    description: {
      de: "Duette-Vorhänge mit doppelter Stoffschicht. Maximale Privatsphäre und Lichtsteuerung.",
      tr: "Çift katmanlı kumaş ile düet perdeler. Maksimum mahremiyet ve ışık kontrolü."
    },
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 7,
    nameKey: "productZipPerde",
    description: {
      de: "Zip-Screen-Systeme für windbeständige Lösungen. Ideal für Balkone und Terrassen.",
      tr: "Rüzgar dayanıklı çözümler için zip screen sistemleri. Balkonlar ve teraslar için ideal."
    },
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
];

export default function ProductsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t("productsTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("productsSubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <a href="#hero" className="text-primary hover:underline">
              Fenster Insektenschutz
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Plissee Fliegengitter
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Zip Fliegengitter
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <a
              key={product.id}
              href="#contact"
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <div className="text-primary group-hover:text-white transition-colors">
                  {product.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {t(product.nameKey)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description[language]}
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                <span>{language === "de" ? "Mehr erfahren" : "Daha fazla bilgi"}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
