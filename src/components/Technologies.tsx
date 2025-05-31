import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

interface Technology {
  name: string;
  icon: string;
  description: string;
  category: string;
}

const Technologies: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const technologies: Technology[] = [
    // Frontend
    { name: 'React', icon: '⚛️', description: t.tech.react, category: 'frontend' },
    { name: 'Vue.js', icon: '🟢', description: t.tech.vue, category: 'frontend' },
    { name: 'Angular', icon: '🔺', description: t.tech.angular, category: 'frontend' },
    { name: 'Next.js', icon: '▲', description: t.tech.nextjs, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: '🟢', description: t.tech.nodejs, category: 'backend' },
    { name: 'Python', icon: '🐍', description: t.tech.python, category: 'backend' },
    { name: 'Java', icon: '☕', description: t.tech.java, category: 'backend' },
    { name: 'GraphQL', icon: '◈', description: t.tech.graphql, category: 'backend' },
    
    // Design
    { name: 'Figma', icon: '🎨', description: t.tech.figma, category: 'design' },
    { name: 'Adobe XD', icon: '🎭', description: t.tech.adobexd, category: 'design' },
    { name: 'Photoshop', icon: '📸', description: t.tech.photoshop, category: 'design' },
    { name: 'Illustrator', icon: '✒️', description: t.tech.illustrator, category: 'design' },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = ['all', ...new Set(technologies.map(tech => tech.category))];
  
  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  const [hoveredTech, setHoveredTech] = useState<Technology | null>(null);

  return (
    <section id="technologies" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-violet-900/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
            {t.tech.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t.tech.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-900/20 cursor-pointer transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
        
        {hoveredTech && (
          <div className="mt-16 bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300 animate-fade-in">
            <h4 className="text-xl font-semibold text-white mb-2">{hoveredTech.name}</h4>
            <p className="text-gray-400">{hoveredTech.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;