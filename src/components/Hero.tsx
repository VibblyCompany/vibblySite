import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Particle animation background */}
      <ParticleBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/90 via-black/80 to-black/90 z-10"></div>
      
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="space-y-6 md:space-y-8 max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {t.hero.headline1}
            </span>
            <span className="block animate-fade-in-up bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text" style={{ animationDelay: '0.6s' }}>
              {t.hero.headline2}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.9s' }}>
            {t.hero.subheadline}
          </p>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <button className="group flex items-center bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105">
              {t.hero.cta}
              <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center animate-bounce">
        <div className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;