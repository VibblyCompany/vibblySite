import { Project, createPageSpeedScores } from './types';

export const saffronEcommerce: Project = {
  id: 'saffron-ecommerce',
  stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
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
      testimonial: {
        quote: 'Saffron has transformed our online business. The platform is not only beautiful but also incredibly efficient to manage.',
        author: 'Michael Anderson',
        role: 'CEO, StyleHub'
      },
      clientBenefits: {
        title: 'E-commerce Benefits',
        subtitle: 'How our platform helps StyleHub grow their online business',
        benefits: [
          {
            icon: 'Search',
            title: 'Enhanced Product Discovery',
            description: 'Advanced search and filtering capabilities help customers find products quickly and easily.'
          },
          {
            icon: 'Users',
            title: 'Improved Customer Experience',
            description: 'Intuitive navigation and streamlined checkout process increase conversion rates.'
          },
          {
            icon: 'Smartphone',
            title: 'Mobile-First Shopping',
            description: 'Optimized mobile experience ensures customers can shop seamlessly on any device.'
          },
          {
            icon: 'Edit',
            title: 'Easy Inventory Management',
            description: 'Powerful product management tools make it simple to update inventory and product details.'
          },
          {
            icon: 'Shield',
            title: 'Secure Transactions',
            description: 'Advanced security measures protect both customer data and payment information.'
          },
          {
            icon: 'Layout',
            title: 'Brand-Consistent Design',
            description: 'Modern, responsive design that reflects StyleHub\'s brand identity and enhances product presentation.'
          }
        ]
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
      testimonial: {
        quote: 'Saffron zrewolucjonizował nasz biznes online. Platforma jest nie tylko piękna, ale także niezwykle wydajna w zarządzaniu.',
        author: 'Michael Anderson',
        role: 'CEO, StyleHub'
      },
      clientBenefits: {
        title: 'Korzyści E-commerce',
        subtitle: 'Jak nasza platforma pomaga StyleHub rozwijać ich biznes online',
        benefits: [
          {
            icon: 'Search',
            title: 'Lepsze Odkrywanie Produktów',
            description: 'Zaawansowane możliwości wyszukiwania i filtrowania pomagają klientom szybko i łatwo znajdować produkty.'
          },
          {
            icon: 'Users',
            title: 'Ulepszone Doświadczenie Klienta',
            description: 'Intuicyjna nawigacja i usprawniony proces zakupowy zwiększają wskaźniki konwersji.'
          },
          {
            icon: 'Smartphone',
            title: 'Zakupy Mobile-First',
            description: 'Zoptymalizowane doświadczenie mobilne zapewnia klientom płynne zakupy na dowolnym urządzeniu.'
          },
          {
            icon: 'Edit',
            title: 'Łatwe Zarządzanie Asortymentem',
            description: 'Potężne narzędzia do zarządzania produktami ułatwiają aktualizację stanów magazynowych i szczegółów produktów.'
          },
          {
            icon: 'Shield',
            title: 'Bezpieczne Transakcje',
            description: 'Zaawansowane środki bezpieczeństwa chronią zarówno dane klientów, jak i informacje płatnicze.'
          },
          {
            icon: 'Layout',
            title: 'Spójny Design Marki',
            description: 'Nowoczesny, responsywny design, który odzwierciedla tożsamość marki StyleHub i podkreśla prezentację produktów.'
          }
        ]
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
    pageSpeedScores: createPageSpeedScores({
      'Performance': 95,
      'Accessibility': 98,
      'Best Practices': 97,
      'SEO': 96
    }),
    pageSpeedUrl: "https://pagespeed.web.dev/"
  }
}; 