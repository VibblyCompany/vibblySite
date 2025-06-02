import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Briefcase, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import PageSpeedIndicator from './PageSpeedIndicator';
import ClientBenefits from './ClientBenefits';
import { getProjectPageData } from '../data/projects';
import type { ProjectPageData } from '../data/projects/types';

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const project = id ? getProjectPageData(id, language as 'en' | 'pl') : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Project Not Found' : 'Nie Znaleziono Projektu'}
          </h1>
          <Link to="/" className="text-violet-400 hover:text-violet-300 transition-colors">
            {language === 'en' ? 'Back to Home' : 'Powrót do Strony Głównej'}
          </Link>
        </div>
      </div>
    );
  }

  // Type assertion to ensure project is ProjectPageData
  const projectData = project as ProjectPageData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={projectData.image}
          alt={projectData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-gray-300 text-transparent bg-clip-text"
            >
              {projectData.title}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-300"
            >
              {projectData.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Project Summary */}
      <div className="relative z-10 -mt-20 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-7xl mx-auto px-6 md:px-16"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-gray-300 bg-gray-900/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-violet-500/10"
            >
              <Briefcase className="w-5 h-5 mr-2 text-violet-400" />
              <span>{language === 'en' ? 'Client' : 'Klient'}: {projectData.client}</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-gray-300 bg-gray-900/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-violet-500/10"
            >
              <Clock className="w-5 h-5 mr-2 text-violet-400" />
              <span>{language === 'en' ? 'Duration' : 'Czas trwania'}: {projectData.duration}</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-gray-300 bg-gray-900/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-violet-500/10"
            >
              <Calendar className="w-5 h-5 mr-2 text-violet-400" />
              <span>{language === 'en' ? 'Year' : 'Rok'}: {projectData.year}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
          {language === 'en' ? 'Back to Portfolio' : 'Powrót do Portfolio'}
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-gray-300 text-transparent bg-clip-text"
              >
                {language === 'en' ? 'Project Overview' : 'Przegląd Projektu'}
              </motion.h2>
              <div className="text-gray-300 space-y-4">
                {projectData.fullDescription?.map((paragraph: string, index: number) => (
                  <motion.p 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* PageSpeed Scores */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <PageSpeedIndicator 
                scores={projectData.pageSpeedScores}
                reportUrl={projectData.pageSpeedUrl}
              />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Project Details */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-violet-900/20 rounded-3xl p-8 mb-8 border border-violet-500/10 shadow-2xl shadow-violet-900/20 backdrop-blur-2xl"
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-gray-300 text-transparent bg-clip-text">
                {language === 'en' ? 'Project Details' : 'Szczegóły Projektu'}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    {language === 'en' ? 'Category' : 'Kategoria'}
                  </p>
                  <p className="text-white">{projectData.category}</p>
                </div>
                {projectData.stack && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      {language === 'en' ? 'Technology Stack' : 'Technologie'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projectData.stack.map((tech: string, index: number) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-violet-900/30 text-violet-300 rounded-xl text-sm border border-violet-500/10 shadow-lg shadow-violet-900/10"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Client Testimonial */}
            {projectData.testimonial && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-violet-900/20 rounded-3xl p-8 border border-violet-500/10 shadow-2xl shadow-violet-900/20 backdrop-blur-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 font-bold text-xl border border-violet-500/10 shadow-lg shadow-violet-900/20">
                    {projectData.testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">{projectData.testimonial.author}</p>
                    <p className="text-sm text-violet-400">{projectData.testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-lg italic text-gray-300">
                  "{projectData.testimonial.quote}"
                </blockquote>
              </motion.div>
            )}
          </div>
        </div>

        {/* Client Benefits - Full Width */}
        {projectData.clientBenefits && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <ClientBenefits
              title={projectData.clientBenefits.title}
              subtitle={projectData.clientBenefits.subtitle}
              benefits={projectData.clientBenefits.benefits}
            />
          </motion.div>
        )}

        {/* Visit Project Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href={projectData.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out bg-gradient-to-r from-violet-600 to-violet-800 rounded-2xl shadow-lg hover:shadow-violet-500/25 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-600 to-violet-800 rounded-2xl blur-md group-hover:blur-xl transition-all duration-300"></span>
            <span className="relative flex items-center gap-2">
              {language === 'en' ? 'Visit Project' : 'Odwiedź Projekt'}
              <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.a>
        </motion.div>

        {/* Gallery - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-gray-300 text-transparent bg-clip-text">
            {language === 'en' ? 'Project Gallery' : 'Galeria Projektu'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectData.gallery.map((image: string, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/20 border border-violet-500/10"
              >
                <img
                  src={image}
                  alt={`${projectData.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;