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

export const projects: Project[] = [
  {
    id: 'fintech-dashboard',
    translations: {
      en: {
        title: 'Fintech Dashboard Redesign',
        description: 'A complete UX/UI overhaul for a financial technology platform, focusing on data visualization and user efficiency.',
        category: 'web app',
        fullDescription: [
          'The Fintech Dashboard Redesign project was a comprehensive overhaul of a legacy financial platform, transforming it into a modern, user-centric interface that prioritizes data clarity and operational efficiency.',
          'Our team conducted extensive user research and workflow analysis to identify pain points and opportunities for improvement. The result is a streamlined dashboard that reduces cognitive load while providing powerful financial insights at a glance.',
          'The new design implements real-time data visualization, customizable widgets, and an intuitive navigation system that has significantly reduced the learning curve for new users while enhancing productivity for power users.'
        ],
        stack: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
        testimonial: {
          quote: 'The redesigned dashboard has transformed how our team interacts with financial data. What used to take multiple clicks and screens is now accessible with remarkable ease.',
          author: 'Sarah Chen',
          role: 'Head of Product, FinanceFlow'
        }
      },
      pl: {
        title: 'Redesign Panelu Fintech',
        description: 'Kompletna przebudowa UX/UI dla platformy technologii finansowej, skupiająca się na wizualizacji danych i wydajności użytkownika.',
        category: 'aplikacja webowa',
        fullDescription: [
          'Projekt Redesign Panelu Fintech był kompleksową modernizacją przestarzałej platformy finansowej, przekształcając ją w nowoczesny, zorientowany na użytkownika interfejs, który priorytetowo traktuje przejrzystość danych i efektywność operacyjną.',
          'Nasz zespół przeprowadził szeroko zakrojone badania użytkowników i analizę przepływu pracy, aby zidentyfikować problemy i możliwości ulepszeń. Rezultatem jest uproszczony dashboard, który zmniejsza obciążenie poznawcze, jednocześnie zapewniając potężne narzędzia do analizy finansowej.',
          'Nowy design implementuje wizualizację danych w czasie rzeczywistym, konfigurowalne widżety i intuicyjny system nawigacji, który znacząco zmniejszył krzywą uczenia się dla nowych użytkowników, jednocześnie zwiększając produktywność zaawansowanych użytkowników.'
        ],
        stack: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
        testimonial: {
          quote: 'Przeprojektowany dashboard zmienił sposób, w jaki nasz zespół pracuje z danymi finansowymi. To, co kiedyś wymagało wielu kliknięć i ekranów, jest teraz dostępne z niezwykłą łatwością.',
          author: 'Sara Chen',
          role: 'Kierownik Produktu, FinanceFlow'
        }
      }
    },
    portfolio: {
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    projectPage: {
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gallery: [
        'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8370727/pexels-photo-8370727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8370735/pexels-photo-8370735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8370742/pexels-photo-8370742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      client: "FinanceFlow",
      duration: "12 weeks",
      year: "2024",
      projectType: "Web Application",
      projectUrl: "https://financeflow-dashboard.com",
      pageSpeedScores: [
        { category: "Performance", score: 98, description: "Measures how fast the page loads and becomes interactive" },
        { category: "Accessibility", score: 100, description: "Ensures content is accessible to all users" },
        { category: "Best Practices", score: 95, description: "Follows modern web development best practices" },
        { category: "SEO", score: 100, description: "Optimized for search engine visibility" }
      ],
      pageSpeedUrl: "https://pagespeed.web.dev/"
    }
  },
  {
    id: 'saffron-ecommerce',
    translations: {
      en: {
        title: 'Saffron E-commerce Platform',
        description: 'Modern e-commerce solution with advanced product management and seamless payment integration.',
        category: 'e-commerce',
        fullDescription: [
          'Saffron is a cutting-edge e-commerce platform designed to provide businesses with a powerful yet intuitive solution for online retail.',
          'The platform features advanced product management capabilities, real-time inventory tracking, and seamless integration with multiple payment gateways.',
          'Built with scalability in mind, Saffron handles high traffic volumes while maintaining exceptional performance and user experience.'
        ],
        stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
        testimonial: {
          quote: 'Saffron has transformed our online business. The platform is not only beautiful but also incredibly efficient to manage.',
          author: 'Michael Anderson',
          role: 'CEO, StyleHub'
        }
      },
      pl: {
        title: 'Platforma E-commerce Saffron',
        description: 'Nowoczesne rozwiązanie e-commerce z zaawansowanym zarządzaniem produktami i płynną integracją płatności.',
        category: 'e-commerce',
        fullDescription: [
          'Saffron to nowoczesna platforma e-commerce zaprojektowana, aby zapewnić firmom potężne, a jednocześnie intuicyjne rozwiązanie do sprzedaży online.',
          'Platforma oferuje zaawansowane możliwości zarządzania produktami, śledzenie stanów magazynowych w czasie rzeczywistym oraz płynną integrację z wieloma bramkami płatności.',
          'Zbudowana z myślą o skalowalności, Saffron obsługuje duże wolumeny ruchu, zachowując wyjątkową wydajność i doświadczenie użytkownika.'
        ],
        stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
        testimonial: {
          quote: 'Saffron zrewolucjonizował nasz biznes online. Platforma jest nie tylko piękna, ale także niezwykle wydajna w zarządzaniu.',
          author: 'Michael Anderson',
          role: 'CEO, StyleHub'
        }
      }
    },
    portfolio: {
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    projectPage: {
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gallery: [
        'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5632366/pexels-photo-5632366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5632358/pexels-photo-5632358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5632349/pexels-photo-5632349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      client: "StyleHub",
      duration: "16 weeks",
      year: "2024",
      projectType: "E-commerce Platform",
      projectUrl: "https://saffron-ecommerce.com",
      pageSpeedScores: [
        { category: "Performance", score: 95, description: "Measures how fast the page loads and becomes interactive" },
        { category: "Accessibility", score: 98, description: "Ensures content is accessible to all users" },
        { category: "Best Practices", score: 97, description: "Follows modern web development best practices" },
        { category: "SEO", score: 96, description: "Optimized for search engine visibility" }
      ],
      pageSpeedUrl: "https://pagespeed.web.dev/"
    }
  }
];

// Helper functions to get project data for different views
export const getPortfolioProjects = (language: 'en' | 'pl') => {
  return projects.map(project => ({
    id: project.id,
    title: project.translations[language].title,
    description: project.translations[language].description,
    category: project.translations[language].category,
    image: project.portfolio.image
  }));
};

export const getProjectPageData = (id: string, language: 'en' | 'pl') => {
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
    client: project.projectPage.client,
    duration: project.projectPage.duration,
    year: project.projectPage.year,
    projectType: project.projectPage.projectType,
    projectUrl: project.projectPage.projectUrl,
    pageSpeedScores: project.projectPage.pageSpeedScores,
    pageSpeedUrl: project.projectPage.pageSpeedUrl
  };
}; 