"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

const applications = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    titleDe: "Wohnzimmerfenster",
    titleTr: "Salon Pencereleri",
    descDe: "Plissee Fliegengitter für Ihr Wohnzimmer. Perfekter Schutz vor Insekten bei optimaler Durchsicht.",
    descTr: "Salonunuz için plise sineklik. Böceklerden mükemmel koruma, en iyi görüş açısı.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    titleDe: "Schlafzimmer",
    titleTr: "Yatak Odası",
    descDe: "Ruhiger Schlaf ohne störende Insekten. Unsere Fliegengitter sorgen für erholsame Nächte.",
    descTr: "Böceklerden uzak huzurlu uyku. Sinekliklerimiz rahat bir uyku sağlar.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    titleDe: "Küche",
    titleTr: "Mutfak",
    descDe: "Hygienischer Schutz für Ihre Küche. Keine Fliegen mehr an Lebensmitteln.",
    descTr: "Mutfak için hijyenik koruma. Yiyeceklerin üzerinde sinek yok.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    titleDe: "Balkontüren",
    titleTr: "Balkon Kapıları",
    descDe: "Große Fliegengitter für Balkontüren. Frische Luft ohne Insekten.",
    descTr: "Balkon kapıları için büyük sineklikler. Böceksiz temiz hava.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    titleDe: "Büro",
    titleTr: "Ofis",
    descDe: "Professionelle Insektenschutzlösungen für Büros. Fokus auf Arbeit ohne Störungen.",
    descTr: "Ofisler için profesyonel böcek koruması. Rahat çalışma ortamı.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    titleDe: "Terrasse",
    titleTr: "Teras",
    descDe: "Terrassentüren mit Fliegengitter genießen. Outdoor-Feeling ohne Insekten.",
    descTr: "Teras kapılarını sineklikli kullanın. Böceksiz dış mekan keyfi.",
  },
];

export default function ApplicationsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="applications" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {language === "de" ? "Anwendungsbereiche" : "Uygulama Alanları"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "de"
              ? "Unsere Plissee Fliegengitter passen perfekt für jeden Raum in Ihrem Haus. Von Wohnzimmer bis Küche - wir haben die passende Lösung."
              : "Plise sinekliklerimiz evinizin her odasına mükemmel uyum sağlar. Salondan mutfağa kadar uygun çözümümüz var."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <a href="#hero" className="text-primary hover:underline">
              Fliegengitter Balkon
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Insektenschutz Terrasse
            </a>
            <span className="text-gray-400">•</span>
            <a href="#hero" className="text-primary hover:underline">
              Fenster Gitter
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                {app.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {language === "de" ? app.titleDe : app.titleTr}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {language === "de" ? app.descDe : app.descTr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
