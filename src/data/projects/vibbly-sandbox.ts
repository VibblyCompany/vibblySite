import { Project, createPageSpeedScores } from './types';
import mainPageImage from '../../assets/projects/vibbly-sandbox/main-page.png';

export const vibblySandbox: Project = {
  id: 'vibbly-sandbox',
  stack: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Matter.js'
  ],
  translations: {
    en: {
      title: 'Vibbly Sandbox',
      description: 'A real-time physics simulation engine with multiple element types and realistic interactions',
      category: 'Interactive Web Application',
      fullDescription: [
        'This project implements a sophisticated physics simulation engine using Matter.js, allowing users to experiment with different types of elements and their interactions in real-time. The simulation supports various materials including water, oil, smoke, ash, wood, metal, and stone, each with unique physical properties and behaviors.',
        'The application features a responsive canvas that adapts to different screen sizes, real-time physics calculations, and smooth element interactions. Users can add, remove, and manipulate elements while observing realistic physics-based behaviors such as gravity, friction, and collisions.'
      ],
      testimonial: {
        quote: 'This project was a blend of technical challenge and real-world impact — we wanted every part to have purpose and value.',
        author: 'Vibbly team',
        role: 'Our thoughts'
      },
      clientBenefits: {
        title: 'Client Benefits',
        subtitle: 'Advanced Physics Simulation Capabilities',
        benefits: [
          {
            icon: 'education-icon',
            title: 'Learn the Basics of Physics',
            description: 'Users explore gravity, friction, and collisions through interactive simulations powered by the Matter.js engine'
          },
          {
            icon: 'experiment-icon',
            title: 'Experiment with Materials',
            description: 'Understand the behavior of different substances like water, oil, wood, and metal in a virtual environment'
          },
          {
            icon: 'hands-on-icon',
            title: 'Hands-On, Interactive Learning',
            description: 'Realistic interactions and behaviors allow for active learning through experimentation and observation'
          },
          {
            icon: 'efficiency-icon',
            title: 'Smooth Educational Experience',
            description: 'Optimized performance ensures a seamless environment for exploring and understanding physical phenomena'
          }
        ]
      }
    },
    pl: {
      title: 'Vibbly Sandbox',
      description: 'Silnik symulacji fizycznej w czasie rzeczywistym z wieloma typami elementów i realistycznymi interakcjami',
      category: 'Interaktywna Aplikacja Webowa',
      fullDescription: [
        'Ten projekt implementuje zaawansowany silnik symulacji fizycznej wykorzystujący Matter.js, umożliwiając użytkownikom eksperymentowanie z różnymi typami elementów i ich interakcjami w czasie rzeczywistym. Symulacja obsługuje różne materiały, w tym wodę, olej, dym, popiół, drewno, metal i kamień, każdy z unikalnymi właściwościami fizycznymi i zachowaniami.',
        'Aplikacja zawiera responsywne płótno dostosowujące się do różnych rozmiarów ekranu, obliczenia fizyczne w czasie rzeczywistym oraz płynne interakcje elementów. Użytkownicy mogą dodawać, usuwać i manipulować elementami, obserwując realistyczne zachowania oparte na fizyce, takie jak grawitacja, tarcie i kolizje.'
      ],
      testimonial: {
        quote: 'Ten projekt to połączenie technicznych wyzwań i realnego wpływu — chcieliśmy, aby każda część miała cel i wartość.',
        author: 'Zespół Vibbly',
        role: 'Nasze przemyślenia'
      },
      clientBenefits: {
        title: 'Korzyści dla Klienta',
        subtitle: 'Zaawansowane Możliwości Symulacji Fizycznej',
        benefits: [
          {
            icon: 'education-icon',
            title: 'Nauka Podstaw Fizyki',
            description: 'Użytkownicy uczą się zasad grawitacji, tarcia i kolizji poprzez interaktywną symulację opartą na silniku Matter.js'
          },
          {
            icon: 'experiment-icon',
            title: 'Eksperymentowanie z Materiałami',
            description: 'Poznawanie właściwości różnych substancji, takich jak woda, olej, drewno czy metal, w kontrolowanych warunkach'
          },
          {
            icon: 'hands-on-icon',
            title: 'Aktywna Nauka Poprzez Interakcję',
            description: 'Realistyczne reakcje i zachowania elementów pozwalają na naukę przez działanie i obserwację'
          },
          {
            icon: 'efficiency-icon',
            title: 'Płynne Doświadczenie Edukacyjne',
            description: 'Zoptymalizowana wydajność zapewnia komfortowe środowisko do nauki i testowania zjawisk fizycznych'
          }
        ]
      }
    }
  },
  portfolio: {
    image: mainPageImage
  },
  projectPage: {
    image: mainPageImage,
    gallery: [
      mainPageImage,
      mainPageImage,
      mainPageImage
    ],
    client: 'Educational Technology Department',
    duration: {
      en: '3 days',
      pl: '3 dni'
    },
    year: '2025',
    projectUrl: 'https://sanbdox.netlify.app',
    pageSpeedScores: createPageSpeedScores({
      mobile: {
        'Performance': 98,
        'Accessibility': 81,
        'Best Practices': 100,
        'SEO': 90
      },
      desktop: {
        'Performance': 100,
        'Accessibility': 81,
        'Best Practices': 100,
        'SEO': 90
      }
    }),
    pageSpeedUrl: 'https://pagespeed.web.dev/analysis/https-sanbdox-netlify-app/3sm53go1du?form_factor=mobile'
  }
}; 