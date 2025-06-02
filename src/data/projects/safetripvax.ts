import { Project, createPageSpeedScores } from './types';

export const safetripvax: Project = {
  id: 'safetripvax', // Unique identifier for the project
  stack: [
    'Technology 1',
    'Technology 2',
    'Technology 3'
  ],
  translations: {
    en: {
      title: 'Project Title',
      description: 'Short project description',
      category: 'category', // e.g., 'web app', 'e-commerce', 'mobile app'
      fullDescription: [
        'First paragraph of detailed description',
        'Second paragraph of detailed description',
        'Third paragraph of detailed description'
      ],
      testimonial: {
        quote: 'Client testimonial quote',
        author: 'Client Name',
        role: 'Client Role, Company'
      },
      clientBenefits: {
        title: 'Client Benefits',
        subtitle: 'How this project delivers value',
        benefits: [
          {
            icon: 'benefit-icon-1',
            title: 'Benefit 1',
            description: 'Description of benefit 1'
          },
          {
            icon: 'benefit-icon-2',
            title: 'Benefit 2',
            description: 'Description of benefit 2'
          }
        ]
      }
    },
    pl: {
      title: 'Tytuł Projektu',
      description: 'Krótki opis projektu',
      category: 'kategoria', // np. 'aplikacja webowa', 'e-commerce', 'aplikacja mobilna'
      fullDescription: [
        'Pierwszy paragraf szczegółowego opisu',
        'Drugi paragraf szczegółowego opisu',
        'Trzeci paragraf szczegółowego opisu'
      ],
      testimonial: {
        quote: 'Cytat z opinii klienta',
        author: 'Imię Klienta',
        role: 'Rola Klienta, Firma'
      },
      clientBenefits: {
        title: 'Korzyści dla Klienta',
        subtitle: 'Jak ten projekt dostarcza wartość',
        benefits: [
          {
            icon: 'benefit-icon-1',
            title: 'Korzyść 1',
            description: 'Opis korzyści 1'
          },
          {
            icon: 'benefit-icon-2',
            title: 'Korzyść 2',
            description: 'Opis korzyści 2'
          }
        ]
      }
    }
  },
  portfolio: {
    image: 'URL to portfolio image'
  },
  projectPage: {
    image: 'URL to main project image',
    gallery: [
      'URL to gallery image 1',
      'URL to gallery image 2',
      'URL to gallery image 3'
    ],
    client: 'Client Name',
    duration: 'Project Duration', // e.g., '12 weeks'
    year: 'Project Year', // e.g., '2024'
    projectType: {
      en: 'Web Application',
      pl: 'Aplikacja Webowa'
    },
    projectUrl: 'https://safetripvax.com/',
    pageSpeedScores: createPageSpeedScores({
      mobile: {
        'Performance': 90,
        'Accessibility': 95,
        'Best Practices': 92,
        'SEO': 98
      },
      desktop: {
        'Performance': 95,
        'Accessibility': 98,
        'Best Practices': 94,
        'SEO': 99
      }
    }),
    pageSpeedUrl: 'https://pagespeed.web.dev/analysis/https-safetripvax-com/wkgauzastn?hl=pl&form_factor=desktop'
  }
}; 
