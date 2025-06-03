import React from 'react';

const Sitemap: React.FC = () => {
  return (
    <div className="sitemap-container bg-black text-white py-16 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Mapa Strony</h1>
      <p className="text-center text-gray-400 mb-12">Pełna struktura naszej strony internetowej</p>

      <div className="flex justify-center mb-12">
        <a href="/sitemap.xml" className="text-blue-400 hover:underline text-lg">
          Zobacz sitemap.xml
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Strony Główne */}
        <div className="sitemap-section bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-violet-400">Strony Główne</h2>
          <ul>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Strona Główna<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">O Nas<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Kontakt<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
          </ul>
        </div>

        {/* Usługi */}
        <div className="sitemap-section bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-violet-400">Usługi</h2>
          <ul>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Przegląd Usług<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Cyberbezpieczeństwo<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Usługi Chmurowe<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Business Intelligence<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Konsulting IT<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Strony Internetowe<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
          </ul>
        </div>

        {/* Projekty i Case Studies */}
        <div className="sitemap-section bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-violet-400">Projekty i Case Studies</h2>
          <ul>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Projekty<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Case Studies<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">NailsByKorzeniowska.pl<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
          </ul>
        </div>

        {/* Blog i Zasoby */}
        <div className="sitemap-section bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-violet-400">Blog i Zasoby</h2>
          <ul>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Wszystkie Artykuły<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Kompletna checklista skutecznej strony firmowej 2025...<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Sztuczna inteligencja w praktyce MSP...<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
          </ul>
        </div>

         {/* Dokumenty Prawne */}
         <div className="sitemap-section bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-violet-400">Dokumenty Prawne</h2>
          <ul>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Polityka Prywatności<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Regulamin<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">Polityka Cookies<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
            <li className="mb-2"><a href="#" className="sitemap-link group relative inline-block text-white hover:text-violet-400 transition-colors duration-300">RODO<span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap; 