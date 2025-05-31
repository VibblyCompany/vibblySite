import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { motion } from 'framer-motion';
import PageSpeedIndicator from './PageSpeedIndicator';

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  
  const getProjectData = () => {
    const projects = [
      {
        id: 'fintech-dashboard',
        title: t.portfolio.project1.title,
        description: t.portfolio.project1.description,
        category: t.portfolio.project1.category,
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        fullDescription: t.portfolio.project1.fullDescription,
        stack: t.portfolio.project1.stack,
        testimonial: t.portfolio.project1.testimonial,
        gallery: t.portfolio.project1.gallery,
        duration: "12 weeks",
        year: "2024",
        projectType: "Web Application",
        pageSpeedScores: [
          { category: "Performance", score: 98, description: "Measures how fast the page loads and becomes interactive" },
          { category: "Accessibility", score: 100, description: "Ensures content is accessible to all users" },
          { category: "Best Practices", score: 95, description: "Follows modern web development best practices" },
          { category: "SEO", score: 100, description: "Optimized for search engine visibility" }
        ],
        pageSpeedUrl: "https://pagespeed.web.dev/"
      },
      // ... other projects with similar data structure
    ];
    
    return projects.find(project => project.id === id);
  };

  const project = getProjectData();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{t.portfolio.projectNotFound}</h1>
          <Link to="/" className="text-violet-400 hover:text-violet-300 transition-colors">
            {t.portfolio.backToHome}
          </Link>
        </div>
      </div>
    );
  }

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
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-gray-300 text-transparent bg-clip-text"
            >
              {project.title}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-300"
            >
              {project.description}
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
              <Clock className="w-5 h-5 mr-2 text-violet-400" />
              <span>Duration: {project.duration}</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-gray-300 bg-gray-900/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-violet-500/10"
            >
              <Briefcase className="w-5 h-5 mr-2 text-violet-400" />
              <span>Type: {project.projectType}</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-gray-300 bg-gray-900/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-violet-500/10"
            >
              <Calendar className="w-5 h-5 mr-2 text-violet-400" />
              <span>Year: {project.year}</span>
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
          {t.portfolio.backToPortfolio}
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
                {t.portfolio.overview}
              </motion.h2>
              <div className="text-gray-300 space-y-4">
                {project.fullDescription?.map((paragraph, index) => (
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
                scores={project.pageSpeedScores}
                reportUrl={project.pageSpeedUrl}
              />
            </motion.div>

            {/* Gallery */}
            {project.gallery && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-gray-300 text-transparent bg-clip-text">
                  {t.portfolio.gallery}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((image, index) => (
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
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
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
                {t.portfolio.projectDetails}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{t.portfolio.category}</p>
                  <p className="text-white">{project.category}</p>
                </div>
                {project.stack && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{t.portfolio.techStack}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
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
            {project.testimonial && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-violet-900/20 rounded-3xl p-8 border border-violet-500/10 shadow-2xl shadow-violet-900/20 backdrop-blur-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 font-bold text-xl border border-violet-500/10 shadow-lg shadow-violet-900/20">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">{project.testimonial.author}</p>
                    <p className="text-sm text-violet-400">{project.testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-lg italic text-gray-300">
                  "{project.testimonial.quote}"
                </blockquote>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;