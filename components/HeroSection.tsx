"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-semibold">
                {language === "de" ? "Premium Qualität aus der Türkei" : "Türkiye'den Premium Kalite"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              {t("heroTitle")}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {t("heroDescription")}
            </p>

            {/* Internal Links */}
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="#products" className="text-primary hover:underline">
                Plissee Fliegengitter
              </a>
              <span className="text-gray-400">•</span>
              <a href="#products" className="text-primary hover:underline">
                Insektenschutz
              </a>
              <span className="text-gray-400">•</span>
              <a href="#products" className="text-primary hover:underline">
                Fliegengitter Türkiye
              </a>
              <span className="text-gray-400">•</span>
              <a href="#products" className="text-primary hover:underline">
                Plissee Storen
              </a>
              <span className="text-gray-400">•</span>
              <a href="#products" className="text-primary hover:underline">
                Fenster Insektenschutz
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>{t("heroCta")}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center space-x-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200"
              >
                <span>{t("heroCtaSecondary")}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {language === "de" ? "5 Jahre Garantie" : "5 Yıl Garanti"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {language === "de" ? "Kostenloser Versand" : "Ücretsiz Kargo"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {language === "de" ? "4-10 Tage Lieferung" : "4-10 Gün Teslimat"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <svg className="w-48 h-48 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-secondary rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-secondary">10.000+ Kunden</p>
                  <p className="text-sm text-gray-500">
                    {language === "de" ? "in ganz Europa" : "tüm Avrupa'da"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
