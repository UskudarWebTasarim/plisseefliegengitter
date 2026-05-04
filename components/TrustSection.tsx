"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

const trustItems = [
  {
    value: "10+",
    labelDe: "Jahre Erfahrung",
    labelTr: "Yıllık Deneyim",
    descDe: "Seit über einem Jahrzehnt führend in der Branche.",
    descTr: "On yılı aşkın süredir sektörde lider.",
  },
  {
    value: "10K+",
    labelDe: "Zufriedene Kunden",
    labelTr: "Mutlu Müşteri",
    descDe: "Tausende glückliche Kunden in ganz Europa.",
    descTr: "Tüm Avrupa'da binlerce mutlu müşteri.",
  },
  {
    value: "100%",
    labelDe: "Garantie",
    labelTr: "Garanti",
    descDe: "Alle unsere Produkte sind voll garantiert.",
    descTr: "Tüm ürünlerimiz tam garanti kapsamında.",
  },
  {
    value: "6",
    labelDe: "Europäische Länder",
    labelTr: "Avrupa Ülkesi",
    descDe: "Wir liefern in 6 europäische Länder.",
    descTr: "6 Avrupa ülkesine teslimat yapıyoruz.",
  },
];

const testimonials = [
  {
    name: "Thomas Müller",
    location: "München, Deutschland",
    rating: 5,
    textDe: "Hervorragende Qualität und schneller Service. Die Plissee Fliegengitter sind perfekt für mein Haus.",
    textTr: "Mükemmel kalite ve hızlı hizmet. Plise sineklikler evim için harika.",
  },
  {
    name: "Ahmet Yılmaz",
    location: "Berlin, Deutschland",
    rating: 5,
    textDe: "Professionelle Montage und sehr freundliches Team. Empfehle ich weiter!",
    textTr: "Profesyonel montaj ve çok kibar ekip. Kesinlikle tavsiye ederim!",
  },
  {
    name: "Sophie Schmidt",
    location: "Wien, Österreich",
    rating: 5,
    textDe: "Die besten Fliegengitter die ich je gekauft habe. Guter Preis, super Qualität.",
    textTr: "Hiç satın almadığım en iyi sineklik. İyi fiyat, harika kalite.",
  },
];

export default function TrustSection() {
  const { t, language } = useLanguage();

  return (
    <section id="trust" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {language === "de" ? "Warum uns vertrauen?" : "Neden Bize Güvenmelisiniz?"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "de"
              ? "Tausende Kunden vertrauen uns seit Jahren. Unsere Qualität und unser Service sprechen für sich."
              : "Yıllardır binlerce müşteri bize güveniyor. Kalitemiz ve hizmetimiz kendini kanıtlıyor."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <a href="#hero" className="text-primary hover:underline">
              Fliegengitter Premium
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Insektenschutz Qualität
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Fenster Gitter
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {item.value}
              </div>
              <div className="text-lg font-semibold text-secondary mb-2">
                {language === "de" ? item.labelDe : item.labelTr}
              </div>
              <div className="text-gray-600">
                {language === "de" ? item.descDe : item.descTr}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{language === "de" ? testimonial.textDe : testimonial.textTr}"
              </p>
              <div>
                <div className="font-semibold text-secondary">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
