"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/FenetreSystems/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/fenetresystems/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: "Twitter",
    url: "https://x.com/FenetreSystems",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/fenetresystems/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: "Pinterest",
    url: "https://tr.pinterest.com/fenetresystems/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@FenetreSystems",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
];

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-2xl font-bold">Fenetre Systems</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {language === "de"
                ? "Premium Plissee Fliegengitter und professionelle Insektenschutzlösungen für Europa. Hochwertige Qualität aus der Türkei, direkt zu Ihnen nach Hause."
                : "Premium plise sineklik ve profesyonel böcek koruma çözümleri Avrupa için. Türkiye'den yüksek kalite, doğrudan evinize."}
            </p>
            
            {/* Product Features Table */}
            <div className="bg-white/5 rounded-xl p-4 mb-6">
              <h4 className="font-semibold mb-3 text-sm">
                {language === "de" ? "Produktmerkmale" : "Ürün Özellikleri"}
              </h4>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-2 text-gray-400">
                      {language === "de" ? "Material" : "Malzeme"}
                    </td>
                    <td className="py-2 text-right">
                      {language === "de" ? "Aluminium" : "Alüminyum"}
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 text-gray-400">
                      {language === "de" ? "Gewebe" : "Kumaş"}
                    </td>
                    <td className="py-2 text-right">
                      {language === "de" ? "Fiberglas" : "Fiberglas"}
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 text-gray-400">
                      {language === "de" ? "Garantie" : "Garanti"}
                    </td>
                    <td className="py-2 text-right">5 {language === "de" ? "Jahre" : "Yıl"}</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-400">
                      {language === "de" ? "Lieferung" : "Teslimat"}
                    </td>
                    <td className="py-2 text-right">4-10 {language === "de" ? "Tage" : "Gün"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">
              {language === "de" ? "Kontakt" : "İletişim"}
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+905403363873" className="hover:text-primary transition-colors">
                  +90 540 336 3873
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/905403363873" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +90 540 336 3873
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@fenetresystems.com" className="hover:text-primary transition-colors">
                  info@fenetresystems.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="hover:text-primary transition-colors">
                  {language === "de" ? "Köln, Deutschland" : "Köln, Almanya"}
                </p>
              </li>
            </ul>
            
            {/* Service Hours */}
            <div className="mt-6 bg-white/5 rounded-xl p-4">
              <h4 className="font-semibold mb-2 text-sm">
                {language === "de" ? "Servicezeiten" : "Çalışma Saatleri"}
              </h4>
              <p className="text-sm text-gray-400">
                {language === "de" ? "Mo-Fr: 09:00 - 18:00" : "Pzt-Cum: 09:00 - 18:00"}
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">
              {language === "de" ? "Produkte" : "Ürünler"}
            </h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  {language === "de" ? "Plissee Fliegengitter" : "Plise Sineklik"}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  {language === "de" ? "Fliegengitter" : "Sineklik"}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  {language === "de" ? "Plissee Storen" : "Plise Perde"}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  {language === "de" ? "Jalousien" : "Jaluzi Perde"}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  {language === "de" ? "Zip Fliegengitter" : "Zip Perde"}
                </a>
              </li>
            </ul>
            
            {/* Service Areas List */}
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="font-semibold mb-3 text-sm">
                {language === "de" ? "Servicegebiete" : "Hizmet Bölgeleri"}
              </h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Deutschland</li>
                <li>• Österreich</li>
                <li>• Schweiz</li>
                <li>• Belgien</li>
                <li>• Niederlande</li>
                <li>• Frankreich</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">
              {language === "de" ? "Links" : "Hızlı Linkler"}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors">
                  {language === "de" ? "Startseite" : "Ana Sayfa"}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  {language === "de" ? "Produkte" : "Ürünler"}
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-primary transition-colors">
                  {language === "de" ? "Anwendungen" : "Uygulamalar"}
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-primary transition-colors">
                  {language === "de" ? "Über uns" : "Hakkımızda"}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  {language === "de" ? "FAQ" : "SSS"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 {language === "de" ? "Alle Rechte vorbehalten." : "Tüm hakları saklıdır."}
          </p>
          <a
            href="https://www.fenetresystems.com"
            target="_blank"
            rel="dofollow"
            className="text-primary hover:text-primary-light font-semibold text-sm"
          >
            Fenetre Systems
          </a>
        </div>
      </div>
    </footer>
  );
}
