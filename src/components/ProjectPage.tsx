import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { motion } from 'framer-motion';

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  
  // Get project data based on ID
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
        gallery: t.portfolio.project1.gallery
      },
      {
        id: 'ecommerce-platform',
        title: t.portfolio.project2.title,
        description: t.portfolio.project2.description,
        category: t.portfolio.project2.category,
        image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        fullDescription: t.portfolio.project2.fullDescription,
        stack: t.portfolio.project2.stack,
        testimonial: t.portfolio.project2.testimonial,
        gallery: t.portfolio.project2.gallery
      },
      {
        id: 'healthcare-portal',
        title: t.portfolio.project3.title,
        description: t.portfolio.project3.description,
        category: t.portfolio.project3.category,
        image: "https://images.pexels.com/photos/2882507/pexels-photo-2882507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        fullDescription: t.portfolio.project3.fullDescription,
        stack: t.portfolio.project3.stack,
        testimonial: t.portfolio.project3.testimonial,
        gallery: t.portfolio.project3.gallery
      },
      {
        id: 'travel-platform',
        title: t.portfolio.project4.title,
        description: t.portfolio.project4.description,
        category: t.portfolio.project4.category,
        image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        fullDescription: t.portfolio.project4.fullDescription,
        stack: t.portfolio.project4.stack,
        testimonial: t.portfolio.project4.testimonial,
        gallery: t.portfolio.project4.gallery
      }
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
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.portfolio.backToPortfolio}
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">{t.portfolio.overview}</h2>
              <div className="text-gray-300 space-y-4">
                {project.fullDescription?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {project.gallery && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8">{t.portfolio.gallery}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Project Details */}
            <div className="bg-gray-900 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">{t.portfolio.projectDetails}</h3>
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
                        <span
                          key={index}
                          className="px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 rounded-2xl p-8 border border-violet-500/10">
                <blockquote className="text-lg italic text-gray-300">
                  "{project.testimonial.quote}"
                  <footer className="mt-4 text-sm text-gray-400 not-italic">
                    — {project.testimonial.author}
                    <span className="block text-violet-400">{project.testimonial.role}</span>
                  </footer>
                </blockquote>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;