import { Project } from './types';

export const projectTemplate: Project = {
  id: 'project-id', // Unique identifier for the project
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
      stack: [
        'Technology 1',
        'Technology 2',
        'Technology 3'
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
      stack: [
        'Technologia 1',
        'Technologia 2',
        'Technologia 3'
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
    pageSpeedScores: [
      {
        category: 'Performance',
        score: 0,
        description: 'Measures how fast the page loads and becomes interactive'
      },
      {
        category: 'Accessibility',
        score: 0,
        description: 'Ensures content is accessible to all users'
      },
      {
        category: 'Best Practices',
        score: 0,
        description: 'Follows modern web development best practices'
      },
      {
        category: 'SEO',
        score: 0,
        description: 'Optimized for search engine visibility'
      }
    ],
    pageSpeedUrl: 'https://pagespeed.web.dev/'
  }
}; 