import { Project, createPageSpeedScores } from './types';

export const projectTemplate: Project = {
  id: 'project-id', // Unique identifier for the project
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
    projectType: 'Project Type', // e.g., 'Web Application'
    projectUrl: 'https://project-url.com',
    pageSpeedScores: createPageSpeedScores({
      'Performance': 0,
      'Accessibility': 0,
      'Best Practices': 0,
      'SEO': 0
    }),
    pageSpeedUrl: 'https://pagespeed.web.dev/'
  }
}; 