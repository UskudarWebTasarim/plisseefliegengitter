"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "tr" : "de");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-secondary">Fenetre Systems</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-secondary hover:text-primary transition-colors font-medium">
              {t("home")}
            </a>
            <a href="#products" className="text-secondary hover:text-primary transition-colors font-medium">
              {t("products")}
            </a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors font-medium">
              {t("about")}
            </a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors font-medium">
              {t("contact")}
            </a>
          </nav>

          {/* Language Toggle - Switch */}
          <div className="flex items-center space-x-3">
            <span className="text-xl">{language === "de" ? "🇩🇪" : "🇹🇷"}</span>
            <button
              onClick={toggleLanguage}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                language === "de" ? "bg-secondary" : "bg-primary"
              }`}
              aria-label="Toggle language"
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  language === "de" ? "translate-x-0" : "translate-x-7"
                }`}
              />
            </button>
            <span className="text-xl">{language === "de" ? "🇹🇷" : "🇩🇪"}</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors font-medium py-2"
              >
                {t("home")}
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors font-medium py-2"
              >
                {t("products")}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors font-medium py-2"
              >
                {t("about")}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors font-medium py-2"
              >
                {t("contact")}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
