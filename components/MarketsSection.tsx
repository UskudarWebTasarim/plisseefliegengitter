"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

const markets = [
  {
    country: "Deutschland",
    flag: "🇩🇪",
    description: {
      de: "Unser Hauptmarkt mit umfangreichem Vertriebsnetz und schneller Lieferung.",
      tr: "Geniş dağıtım ağı ve hızlı teslimat ile ana pazarımız."
    }
  },
  {
    country: "Österreich",
    flag: "🇦🇹",
    description: {
      de: "Zuverlässige Lieferungen in alle österreichischen Bundesländer.",
      tr: "Tüm Avusturya eyaletlerine güvenilir teslimatlar."
    }
  },
  {
    country: "Schweiz",
    flag: "🇨🇭",
    description: {
      de: "Hochwertige Produkte für den Schweizer Markt mit lokaler Unterstützung.",
      tr: "Yerel destek ile İsviçre pazarı için yüksek kaliteli ürünler."
    }
  },
  {
    country: "Belgien",
    flag: "🇧🇪",
    description: {
      de: "Schnelle Lieferung nach Flandern und Wallonien.",
      tr: "Flaman ve Valonya'ya hızlı teslimat."
    }
  },
  {
    country: "Niederlande",
    flag: "🇳🇱",
    description: {
      de: "Effiziente Logistik für alle niederländischen Provinzen.",
      tr: "Tüm Hollanda illeri için verimli lojistik."
    }
  },
  {
    country: "Frankreich",
    flag: "🇫🇷",
    description: {
      de: "Wachsender Markt mit expandierendem Vertriebsnetz.",
      tr: "Genişleyen dağıtım ağı ile büyüyen pazar."
    }
  },
];

export default function MarketsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t("marketsTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("marketsSubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <a href="#hero" className="text-primary hover:underline">
              Fliegengitter Holland
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Insektenschutz Frankreich
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Fenster Gitter
            </a>
          </div>
        </div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{market.flag}</span>
                <h3 className="text-xl font-bold text-secondary">{market.country}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {market.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-secondary rounded-2xl p-8 text-white text-center">
          <p className="text-lg mb-4">
            {language === "de"
              ? "Wir liefern auch in alle anderen europäischen Länder. Kontaktieren Sie uns für individuelle Lösungen."
              : "Tüm diğer Avrupa ülkelerine de teslimat yapıyoruz. Özel çözümler için bizimle iletişime geçin."}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            <span>{language === "de" ? "Kontaktieren Sie uns" : "İletişime Geçin"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
