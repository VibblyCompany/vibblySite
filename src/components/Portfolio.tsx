import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPortfolioProjects } from '../data/projects';
import { translations } from '../utils/translations';

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].portfolio;
  const projects = getPortfolioProjects(language as 'en' | 'pl');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const filters = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="portfolio"
      className="py-16 sm:py-20 md:py-24 bg-violet-950/80 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-violet-600 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
            {t.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            {t.subtitle}
          </p>
          
          {/* Filter buttons - hidden on mobile */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 mt-10">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {(activeFilter === 'all' ? projects : filteredProjects).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-900 transition-all duration-500 hover:shadow-xl hover:shadow-violet-900/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="inline-block px-2 sm:px-3 py-1 rounded-full bg-violet-600/30 text-violet-300 text-xs mb-2 sm:mb-4">
                  {project.category}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 sm:mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-none opacity-0 transform translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.description}
                </p>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors text-sm sm:text-base"
                >
                  {t.viewProject} <ExternalLink className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;