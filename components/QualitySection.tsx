"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

const materials = [
  {
    title: {
      de: "Hochwertiger Aluminiumrahmen",
      tr: "Yüksek Kaliteli Alüminyum Çerçeve"
    },
    description: {
      de: "Langlebiges, rostfreies Material für maximale Stabilität und Langlebigkeit.",
      tr: "Maksimum dayanıklılık ve uzun ömür için paslanmaz, uzun ömürlü malzeme."
    }
  },
  {
    title: {
      de: "Premium-Gewebe",
      tr: "Premium Kumaş"
    },
    description: {
      de: "Atmungsaktives Material mit feinem Maschengewebe für optimalen Insektenschutz.",
      tr: "Optimal böcek koruması için nefes alan, ince ağ dokulu malzeme."
    }
  },
  {
    title: {
      de: "Einfache Montage",
      tr: "Kolay Montaj"
    },
    description: {
      de: "Plug-and-Play-System mit detaillierter Anleitung für problemlose Installation.",
      tr: "Sorunsuz kurulum için detaylı talimatlı plug-and-play sistemi."
    }
  },
];

export default function QualitySection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t("qualityTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("qualitySubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <a href="#hero" className="text-primary hover:underline">
              Fliegengitter Material
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

        {/* Materials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {materials.map((material, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {material.title[language]}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {material.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Specifications Table */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-secondary mb-6">
            {language === "de" ? "Technische Spezifikationen" : "Teknik Özellikler"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-secondary">
                    {language === "de" ? "Eigenschaft" : "Özellik"}
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-secondary">
                    {language === "de" ? "Details" : "Detaylar"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-medium text-secondary">
                    {language === "de" ? "Rahmenmaterial" : "Çerçeve Malzemesi"}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {language === "de" ? "Aluminium, pulverbeschichtet" : "Alüminyum, toz boyalı"}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-medium text-secondary">
                    {language === "de" ? "Gewebematerial" : "Kumaş Malzemesi"}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {language === "de" ? "Fiberglas, polyesterbeschichtet" : "Fiberglas, polyester kaplı"}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-medium text-secondary">
                    {language === "de" ? "Maschenweite" : "Ağ Boyutu"}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {language === "de" ? "Ca. 1,2 x 1,2 mm" : "Yaklaşık 1,2 x 1,2 mm"}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-medium text-secondary">
                    {language === "de" ? "Garantie" : "Garanti"}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {language === "de" ? "5 Jahre" : "5 Yıl"}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-secondary">
                    {language === "de" ? "Farben" : "Renkler"}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {language === "de" ? "Weiß, Grau, Braun, Schwarz" : "Beyaz, Gri, Kahverengi, Siyah"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
