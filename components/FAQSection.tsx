"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

const faqs = [
  {
    question: {
      de: "Wie lange dauert die Lieferung?",
      tr: "Teslimat ne kadar sürer?"
    },
    answer: {
      de: "Die Lieferzeit beträgt in der Regel 4-10 Werktage, abhängig von Ihrem Standort in Europa. Wir versenden direkt aus unserer Produktionsstätte in der Türkei.",
      tr: "Teslimat süresi genellikle Avrupa'daki konumunuza bağlı olarak 4-10 iş günüdür. Türkiye'deki üretim tesisimizden doğrudan gönderiyoruz."
    }
  },
  {
    question: {
      de: "Bieten Sie Montage an?",
      tr: "Montaj hizmeti sunuyor musunuz?"
    },
    answer: {
      de: "Ja, wir bieten Montage in der gesamten Türkei an. Für andere europäische Länder liefern wir mit detaillierter Montageanleitung für einfache Selbstinstallation.",
      tr: "Evet, Türkiye'nin tamamında montaj hizmeti sunuyoruz. Diğer Avrupa ülkeleri için kolay kendiniz montaj için detaylı talimatlarla teslim ediyoruz."
    }
  },
  {
    question: {
      de: "Wie messe ich meine Fenster korrekt?",
      tr: "Pencerelerimi doğru nasıl ölçerim?"
    },
    answer: {
      de: "Messen Sie die lichte Öffnung Ihres Fensters. Für Türen messen Sie ebenfalls die lichte Breite und Höhe. Wir beraten Sie gerne bei der Messung.",
      tr: "Pencerenizin net açıklığını ölçün. Kapılar için de net genişlik ve yüksekliği ölçün. Ölçüm konusunda size yardımcı olmaktan mutluluk duyarız."
    }
  },
  {
    question: {
      de: "Welche Garantie bieten Sie?",
      tr: "Ne tür garanti sunuyorsunuz?"
    },
    answer: {
      de: "Wir bieten 5 Jahre Garantie auf alle unsere Produkte. Dies umfasst Material- und Verarbeitungsmängel bei normaler Nutzung.",
      tr: "Tüm ürünlerimiz için 5 yıl garanti sunuyoruz. Bu, normal kullanımdaki malzeme ve işçilik hatalarını kapsar."
    }
  },
  {
    question: {
      de: "Kann ich Muster bestellen?",
      tr: "Örnek sipariş edebilir miyim?"
    },
    answer: {
      de: "Ja, wir senden Ihnen gerne kostenlose Stoffmuster zu, damit Sie die Qualität und Farbe vor dem Kauf prüfen können.",
      tr: "Evet, satın almadan önce kalite ve rengi kontrol edebilmeniz için size ücretsiz kumaş örnekleri göndermekten mutluluk duyarız."
    }
  },
  {
    question: {
      de: "Sind die Produkte wetterfest?",
      tr: "Ürünler hava dayanıklı mı?"
    },
    answer: {
      de: "Ja, unsere Produkte sind wetterfest und für den Außenbereich geeignet. Sie sind UV-beständig und witterungsbeständig.",
      tr: "Evet, ürünlerimiz hava dayanıklıdır ve dış mekan kullanımı için uygundur. UV dayanıklı ve hava koşullarına karşı dayanıklıdırlar."
    }
  },
];

export default function FAQSection() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t("faqTitle")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("faqSubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <a href="#hero" className="text-primary hover:underline">
              Fliegengitter Schweiz
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Insektenschutz Österreich
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Fenster Gitter Belgien
            </a>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-secondary pr-4">
                  {faq.question[language]}
                </span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer[language]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
