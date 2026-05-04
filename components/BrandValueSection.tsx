"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: {
      de: "Premium Qualität",
      tr: "Premium Kalite"
    },
    description: {
      de: "Europäische Standards, türkische Handwerkskunst. Jedes Produkt wird sorgfältig geprüft.",
      tr: "Avrupa standartları, Türkç işçilik. Her ürün özenle kontrol edilir."
    }
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: {
      de: "Schnelle Lieferung",
      tr: "Hızlı Teslimat"
    },
    description: {
      de: "4-10 Tage Lieferzeit in ganz Europa. Direkt vom Hersteller zu Ihnen.",
      tr: "Tüm Avrupa'da 4-10 gün teslimat. Üreticiden direkt size."
    }
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: {
      de: "Kundenservice",
      tr: "Müşteri Hizmetleri"
    },
    description: {
      de: "Persönliche Beratung und Unterstützung. Wir sind für Sie da.",
      tr: "Kişisel danışmanlık ve destek. Her zaman yanınızdayız."
    }
  },
];

export default function BrandValueSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t("brandTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("brandSubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <a href="#hero" className="text-primary hover:underline">
              Fliegengitter Europa
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Insektenschutz Deutschland
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Fenster Gitter
            </a>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <div className="text-primary">{value.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                {value.title[language]}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-16 bg-secondary rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">{t("experienceTitle")}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {language === "de"
                  ? "Seit über 10 Jahren spezialisieren wir uns auf die Herstellung von hochwertigen Insektenschutzlösungen und Fensterdekorationen. Unsere Expertise und Leidenschaft für Qualität machen uns zum vertrauenswürdigen Partner für Kunden in ganz Europa."
                  : "10 yılı aşkın süredir yüksek kaliteli böcek koruması ve pencere dekorasyonu üretiminde uzmanlaştık. Uzmanlığımız ve kaliteye olan tutkumuz, bizi tüm Avrupa'daki müşteriler için güvenilir bir ortağ yapıyor."}
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <div className="text-gray-300">{language === "de" ? "Jahre Erfahrung" : "Yıllık Deneyim"}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">10K+</div>
                  <div className="text-gray-300">{language === "de" ? "Zufriedene Kunden" : "Memnun Müşteri"}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">6</div>
                  <div className="text-gray-300">{language === "de" ? "Europäische Länder" : "Avrupa Ülkesi"}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-2xl flex items-center justify-center">
                <svg className="w-32 h-32 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
