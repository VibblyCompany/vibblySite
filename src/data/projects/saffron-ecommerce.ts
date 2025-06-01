import { Project } from './types';

export const saffronEcommerce: Project = {
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
      {
        category: "Performance",
        score: 95,
        description: "Measures how fast the page loads and becomes interactive"
      },
      {
        category: "Accessibility",
        score: 98,
        description: "Ensures content is accessible to all users"
      },
      {
        category: "Best Practices",
        score: 97,
        description: "Follows modern web development best practices"
      },
      {
        category: "SEO",
        score: 96,
        description: "Optimized for search engine visibility"
      }
    ],
    pageSpeedUrl: "https://pagespeed.web.dev/"
  }
}; 