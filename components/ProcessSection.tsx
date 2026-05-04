"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

const steps = [
  {
    number: "01",
    title: {
      de: "Kostenlose Beratung",
      tr: "Ücretsiz Danışmanlık"
    },
    description: {
      de: "Kontaktieren Sie uns für eine persönliche Beratung. Wir helfen Ihnen bei der Auswahl der passenden Lösung.",
      tr: "Kişisel danışmanlık için bizimle iletişime geçin. Size uygun çözümü seçmenize yardımcı oluyoruz."
    }
  },
  {
    number: "02",
    title: {
      de: "Maßanfertigung",
      tr: "Özel Ölçü Üretim"
    },
    description: {
      de: "Wir fertigen Ihre Produkte nach Ihren genauen Maßen in unserer türkischen Produktionsstätte.",
      tr: "Ürünlerinizi Türk üretim tesisimizde tam ölçülerinize göre üretiyoruz."
    }
  },
  {
    number: "03",
    title: {
      de: "Schnelle Lieferung",
      tr: "Hızlı Teslimat"
    },
    description: {
      de: "Innerhalb von 4-10 Tagen erhalten Sie Ihre Produkte direkt an Ihre Haustür in ganz Europa.",
      tr: "4-10 gün içinde ürünlerinizi tüm Avrupa'da kapınıza teslim alırsınız."
    }
  },
  {
    number: "04",
    title: {
      de: "Einfache Montage",
      tr: "Kolay Montaj"
    },
    description: {
      de: "Mit unserer detaillierten Anleitung können Sie Ihre Insektenschutzlösungen einfach selbst installieren.",
      tr: "Detaylı talimatlarımızla böcek koruma çözümlerinizi kolayca kendiniz kurabilirsiniz."
    }
  },
];

export default function ProcessSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t("processTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("processSubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <a href="#hero" className="text-primary hover:underline">
              Plissee Storen
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Jalousien Europa
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Fliegengitter Montage
            </a>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow h-full">
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {step.title[language]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description[language]}
                </p>
              </div>
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
