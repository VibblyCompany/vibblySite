import { Project } from './types';

export const fintechDashboard: Project = {
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
  }
}; 