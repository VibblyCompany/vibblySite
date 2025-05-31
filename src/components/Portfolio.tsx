import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const projects: Project[] = [
    {
      id: 'fintech-dashboard',
      title: t.portfolio.project1.title,
      description: t.portfolio.project1.description,
      category: t.portfolio.project1.category,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 'ecommerce-platform',
      title: t.portfolio.project2.title,
      description: t.portfolio.project2.description,
      category: t.portfolio.project2.category,
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 'healthcare-portal',
      title: t.portfolio.project3.title,
      description: t.portfolio.project3.description,
      category: t.portfolio.project3.category,
      image: "https://images.pexels.com/photos/2882507/pexels-photo-2882507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 'travel-platform',
      title: t.portfolio.project4.title,
      description: t.portfolio.project4.description,
      category: t.portfolio.project4.category,
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

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
      className="py-24 bg-violet-950/80 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-violet-600 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
            {t.portfolio.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t.portfolio.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-10">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 transition-all duration-500 hover:shadow-xl hover:shadow-violet-900/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="inline-block px-3 py-1 rounded-full bg-violet-600/30 text-violet-300 text-xs mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 opacity-0 transform translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.description}
                </p>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
                >
                  {t.portfolio.viewProject} <ExternalLink className="ml-1 w-4 h-4" />
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