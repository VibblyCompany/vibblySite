export interface Project {
  // Common data for both portfolio and project page
  id: string;
  translations: {
    en: {
      title: string;
      description: string;
      category: string;
      fullDescription: string[];
      stack: string[];
      testimonial: {
        quote: string;
        author: string;
        role: string;
      };
    };
    pl: {
      title: string;
      description: string;
      category: string;
      fullDescription: string[];
      stack: string[];
      testimonial: {
        quote: string;
        author: string;
        role: string;
      };
    };
  };
  // Portfolio specific data
  portfolio: {
    image: string;
  };
  // Project page specific data
  projectPage: {
    image: string;
    gallery: string[];
    client: string;
    duration: string;
    year: string;
    projectType: string;
    projectUrl: string;
    pageSpeedScores: {
      category: string;
      score: number;
      description: string;
    }[];
    pageSpeedUrl: string;
  };
}

// Helper functions to get project data for different views
export const getPortfolioProjects = (projects: Project[], language: 'en' | 'pl') => {
  return projects.map(project => ({
    id: project.id,
    title: project.translations[language].title,
    description: project.translations[language].description,
    category: project.translations[language].category,
    image: project.portfolio.image
  }));
};

export const getProjectPageData = (projects: Project[], id: string, language: 'en' | 'pl') => {
  const project = projects.find(p => p.id === id);
  if (!project) return null;

  return {
    id: project.id,
    title: project.translations[language].title,
    description: project.translations[language].description,
    category: project.translations[language].category,
    image: project.projectPage.image,
    fullDescription: project.translations[language].fullDescription,
    stack: project.translations[language].stack,
    testimonial: project.translations[language].testimonial,
    gallery: project.projectPage.gallery,
    duration: project.projectPage.duration,
    year: project.projectPage.year,
    projectType: project.projectPage.projectType,
    pageSpeedScores: project.projectPage.pageSpeedScores,
    pageSpeedUrl: project.projectPage.pageSpeedUrl
  };
}; 