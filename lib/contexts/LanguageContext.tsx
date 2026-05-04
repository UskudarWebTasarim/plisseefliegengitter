"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "de" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Header
    home: "Startseite",
    products: "Produkte",
    about: "Über uns",
    contact: "Kontakt",
    
    // Hero
    heroTitle: "Plissee Fliegengitter",
    heroSubtitle: "Premium Insektenschutz für Ihr Zuhause",
    heroDescription: "Hochwertige Fliegengitter aus Turkey. Direkt zu Ihnen nach Deutschland, Österreich, Schweiz, Belgien, Niederlande und Frankreich.",
    heroCta: "Kostenloses Angebot",
    heroCtaSecondary: "Mehr erfahren",
    
    // Products
    productsTitle: "Unsere Premium Produkte",
    productsSubtitle: "Qualität trifft Design",
    
    // Product names
    productSineklik: "Fliegengitter",
    productPliseSineklik: "Plissee Fliegengitter",
    productPlisePerde: "Plissee Storen",
    productJaluziPerde: "Jalousien",
    productHoneycombPerde: "Honeycomb Storen",
    productDuetPerde: "Duo Storen",
    productZipPerde: "Zip Fliegengitter",
    
    // Brand Value
    brandTitle: "Warum uns wählen?",
    brandSubtitle: "Exzellenz in jedem Detail",
    
    // Experience
    experienceTitle: "Jahrzehnte der Erfahrung",
    experienceSubtitle: "Ihr Partner für Fensterlösungen",
    
    // Process
    processTitle: "So arbeiten wir",
    processSubtitle: "Einfach und transparent",
    
    // Applications
    applicationsTitle: "Anwendungsbereiche",
    applicationsSubtitle: "Vielseitige Lösungen für jeden Raum",
    
    // Trust
    trustTitle: "Warum uns vertrauen?",
    trustSubtitle: "Zufriedene Kunden in ganz Europa",
    
    // Markets
    marketsTitle: "Unsere Märkte",
    marketsSubtitle: "Wir liefern in ganz Europa",
    
    // Quality
    qualityTitle: "Produktqualität",
    qualitySubtitle: "Materialien, die überzeugen",
    
    // FAQ
    faqTitle: "Häufig gestellte Fragen",
    faqSubtitle: "Alles was Sie wissen müssen",
    
    // CTA
    ctaTitle: "Bereit für Ihren Insektenschutz?",
    ctaDescription: "Kontaktieren Sie uns noch heute für ein kostenloses Angebot.",
    ctaButton: "Jetzt anfragen",
    
    // Footer
    footerDescription: "Premium Plissee Fliegengitter und professionelle Insektenschutzlösungen für Europa. Hochwertige Qualität aus Turkey, direkt zu Ihnen nach Hause.",
    footerContact: "Kontakt",
    footerProducts: "Produkte",
    
    // Popup
    popupTitle: "Werden Sie unser Partner",
    popupDescription: "Erhalten Sie diese Website kostenlos als unser Franchise-Partner!",
    popupButton: "WhatsApp kontaktieren",
    popupClose: "Schließen",
    
    // Mobile Bar
    mobileCall: "Anrufen",
    mobileWhatsApp: "WhatsApp",
  },
  tr: {
    // Header
    home: "Ana Sayfa",
    products: "Ürünler",
    about: "Hakkımızda",
    contact: "İletişim",
    
    // Hero
    heroTitle: "Plissee Fliegengitter",
    heroSubtitle: "Eviniz İçin Premium Böcek Koruması",
    heroDescription: "Türkiye'de üretilen yüksek kaliteli sineklik. Almanya, Avusturya, İsviçre, Belçika, Hollanda ve Fransa'ya doğrudan teslim.",
    heroCta: "Ücretsiz Teklif",
    heroCtaSecondary: "Daha fazla bilgi",
    
    // Products
    productsTitle: "Premium Ürünlerimiz",
    productsSubtitle: "Kalite Tasarım Buluşuyor",
    
    // Product names
    productSineklik: "Sineklik",
    productPliseSineklik: "Plise Sineklik",
    productPlisePerde: "Plise Perde",
    productJaluziPerde: "Jaluzi Perde",
    productHoneycombPerde: "Honeycomb Perde",
    productDuetPerde: "Düet Perde",
    productZipPerde: "Zip Perde",
    
    // Brand Value
    brandTitle: "Neden Bizi Seçmelisiniz?",
    brandSubtitle: "Her Detayda Mükemmellik",
    
    // Experience
    experienceTitle: "Yılların Deneyimi",
    experienceSubtitle: "Pencere Çözümleriniz İçin Partneriniz",
    
    // Process
    processTitle: "Nasıl Çalışıyoruz",
    processSubtitle: "Basit ve Şeffaf",
    
    // Applications
    applicationsTitle: "Uygulama Alanları",
    applicationsSubtitle: "Her Oda İçin Çok Yönlü Çözümler",
    
    // Trust
    trustTitle: "Neden Bize Güvenmelisiniz?",
    trustSubtitle: "Tüm Avrupa'da Memnun Müşteriler",
    
    // Markets
    marketsTitle: "Pazarlarımız",
    marketsSubtitle: "Tüm Avrupa'ya Teslimat",
    
    // Quality
    qualityTitle: "Ürün Kalitesi",
    qualitySubtitle: "İkna Eden Malzemeler",
    
    // FAQ
    faqTitle: "Sıkça Sorulan Sorular",
    faqSubtitle: "Bilmeniz Gereken Her Şey",
    
    // CTA
    ctaTitle: "Böcek Korumanız İçin Hazır mısınız?",
    ctaDescription: "Ücretsiz teklif için bugün bize ulaşın.",
    ctaButton: "Hemen Teklif Al",
    
    // Footer
    footerDescription: "Avrupa için premium sineklik ve böcek koruma çözümleri. Türkiye'den yüksek kalite, doğrudan evinize.",
    footerContact: "İletişim",
    footerProducts: "Ürünler",
    
    // Popup
    popupTitle: "Bayimiz Olun",
    popupDescription: "Bu web sitesini ücretsiz edinmek için hemen bayimiz olun!",
    popupButton: "WhatsApp'tan İletişime Geç",
    popupClose: "Kapat",
    
    // Mobile Bar
    mobileCall: "Ara",
    mobileWhatsApp: "WhatsApp",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "de" || saved === "tr")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
