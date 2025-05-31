import React from 'react';
import { Code, Paintbrush, BarChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: <Code className="w-12 h-12 text-violet-400" />,
      title: t.services.service1.title,
      description: t.services.service1.description,
      features: t.services.service1.features,
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-violet-400" />,
      title: t.services.service2.title,
      description: t.services.service2.description,
      features: t.services.service2.features,
    },
    {
      icon: <BarChart className="w-12 h-12 text-violet-400" />,
      title: t.services.service3.title,
      description: t.services.service3.description,
      features: t.services.service3.features,
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-violet-900/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-violet-900/10 blur-3xl rounded-full"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
            {t.services.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-900/20 group"
            >
              <div className="p-4 bg-gray-800/30 rounded-xl w-fit mb-6 group-hover:bg-violet-900/20 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 mt-1 w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full">
            <button className="bg-gray-950 text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
              {t.services.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;