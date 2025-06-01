import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Search, Users, Smartphone, Edit, Shield, Layout } from 'lucide-react';

const iconComponents = {
  Search,
  Users,
  Smartphone,
  Edit,
  Shield,
  Layout
};

const ClientBenefits: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].portfolio.clientBenefits;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mt-16"
    >
      <div className="text-center mb-12">
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-gray-300 text-transparent bg-clip-text"
        >
          {t.title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          {t.subtitle}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {t.benefits.map((benefit, index) => {
          const IconComponent = iconComponents[benefit.icon as keyof typeof iconComponents];
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-violet-900/20 rounded-2xl p-8 border border-violet-500/10 shadow-2xl shadow-violet-900/20 backdrop-blur-2xl h-full transition-all duration-300 group-hover:shadow-violet-900/30">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400 border border-violet-500/10 shadow-lg shadow-violet-900/20">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {benefit.title}
                    </h4>
                    
                    <p className="text-gray-400 text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ClientBenefits; 