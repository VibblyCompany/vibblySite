export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      services: 'Services',
      contact: 'Contact',
      cta: 'Get in Touch'
    },
    hero: {
      headline1: 'We Create Digital',
      headline2: 'Experiences That Matter',
      subheadline: 'Elevating brands through cutting-edge web applications and innovative digital solutions that transform ideas into reality.',
      cta: 'Let\'s Build Together'
    },
    about: {
      title: 'About Vibly',
      subtitle: 'We\'re a team of passionate digital creators building experiences that stand out in today\'s crowded digital landscape.',
      feature1: {
        title: 'Creative Vision',
        description: 'We approach each project with fresh eyes and innovative thinking, pushing boundaries to create unique digital experiences.'
      },
      feature2: {
        title: 'Technical Excellence',
        description: 'Our development team combines deep technical knowledge with a commitment to clean, efficient, and maintainable code.'
      },
      feature3: {
        title: 'Design Precision',
        description: 'Every pixel matters. We obsess over design details to create interfaces that are both beautiful and functional.'
      },
      mission: {
        title: 'Our Mission',
        description1: 'At Vibly, we believe that technology should enhance human experiences, not complicate them.',
        description2: 'We\'re committed to creating digital solutions that are intuitive, accessible, and provide real value to users and businesses alike.'
      },
      quote: 'We don\'t just build websites and applications. We craft digital experiences that tell stories, solve problems, and create meaningful connections.',
      quoteAuthor: 'Alex Kowalski',
      quoteRole: 'Founder & CEO'
    },
    portfolio: {
      title: 'Our Work',
      subtitle: 'Explore our latest projects and see how we\'ve helped brands transform their digital presence.',
      viewProject: 'View Project',
      viewAll: 'View All Projects',
      backToPortfolio: 'Back to Portfolio',
      backToHome: 'Back to Home',
      projectNotFound: 'Project Not Found',
      overview: 'Project Overview',
      gallery: 'Project Gallery',
      projectDetails: 'Project Details',
      category: 'Category',
      techStack: 'Technology Stack',
      project1: {
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
        },
        gallery: [
          'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/8370727/pexels-photo-8370727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/8370735/pexels-photo-8370735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/8370742/pexels-photo-8370742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      project2: {
        title: 'Safe trip vax',
        description: 'Takie tam ze szcepionkami.',
        category: 'e-commerce',
        fullDescription: [
          'This custom e-commerce platform was built from the ground up to provide a unique shopping experience that combines powerful functionality with elegant design.',
          'The platform features an advanced product recommendation engine that learns from user behavior to provide personalized suggestions, while the intelligent search system makes finding products intuitive and efficient.',
          'We implemented a streamlined checkout process that reduced cart abandonment by 35% and integrated multiple payment gateways to provide flexibility for international customers.'
        ],
        stack: ['Next.js', 'Redux', 'Stripe', 'MongoDB', 'Elasticsearch'],
        testimonial: {
          quote: 'Our conversion rates have increased significantly since launching the new platform. The user experience is exactly what we envisioned.',
          author: 'Michael Roberts',
          role: 'CEO, StyleHub'
        },
        gallery: [
          'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632366/pexels-photo-5632366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632358/pexels-photo-5632358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632349/pexels-photo-5632349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      project3: {
        title: 'Healthcare Provider Portal',
        description: 'Secure patient management system with telehealth capabilities and integrated medical records.',
        category: 'healthcare',
        fullDescription: [
          'The Healthcare Provider Portal is a comprehensive solution that modernizes patient care management while maintaining the highest standards of security and compliance.',
          'We developed a HIPAA-compliant system that seamlessly integrates electronic health records, appointment scheduling, and secure video consultations into a unified platform.',
          'The portal includes advanced features such as automated appointment reminders, prescription management, and secure messaging between healthcare providers and patients.'
        ],
        stack: ['Angular', 'Node.js', 'PostgreSQL', 'WebRTC', 'Docker'],
        testimonial: {
          quote: 'This portal has revolutionized how we deliver care. The integration of telehe alth has been particularly impactful for our rural patients.',
          author: 'Dr. Emily Martinez',
          role: 'Medical Director, HealthFirst'
        },
        gallery: [
          'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579544/pexels-photo-7579544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579551/pexels-photo-7579551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579570/pexels-photo-7579570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579585/pexels-photo-7579585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579598/pexels-photo-7579598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      project4: {
        title: 'Travel Experience Platform',
        description: 'Interactive travel planning application with personalized recommendations and immersive content.',
        category: 'travel',
        fullDescription: [
          'The Travel Experience Platform redefines how travelers plan and book their adventures through an immersive and personalized digital experience.',
          'Our solution combines advanced AI-driven recommendations with user-generated content to create a rich, community-driven platform that inspires and facilitates travel planning.',
          'The platform features interactive maps, real-time availability updates, and seamless integration with local experience providers to deliver a comprehensive travel planning solution.'
        ],
        stack: ['React', 'GraphQL', 'AWS', 'Redis', 'Python'],
        testimonial: {
          quote: 'The platform has transformed how our customers discover and book travel experiences. The personalization engine is particularly impressive.',
          author: 'Lisa Thompson',
          role: 'Product Manager, TravelWise'
        },
        gallery: [
          'https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412089/pexels-photo-7412089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412081/pexels-photo-7412081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412075/pexels-photo-7412075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412065/pexels-photo-7412065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer comprehensive digital solutions tailored to your unique business needs.',
      cta: 'Discuss Your Project',
      service1: {
        title: 'Custom Web Development',
        description: 'We build scalable, high-performance web applications using cutting-edge technologies.',
        features: [
          'Progressive Web Applications',
          'Complex Web Portals',
          'Custom CMS Solutions',
          'API Development & Integration'
        ]
      },
      service2: {
        title: 'UI/UX Design',
        description: 'We create intuitive, engaging user experiences that keep your customers coming back.',
        features: [
          'User Research & Testing',
          'Interface Design',
          'Interaction Design',
          'Design Systems'
        ]
      },
      service3: {
        title: 'Digital Strategy',
        description: 'We help you define your digital roadmap and identify the best technologies for your goals.',
        features: [
          'Technical Consulting',
          'Digital Transformation',
          'Technology Stack Selection',
          'Performance Optimization'
        ]
      }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to start your project? Reach out to discuss how we can help bring your vision to life.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message'
      },
      schedule: {
        title: 'Prefer a meeting?',
        button: 'Schedule a Call'
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      },
      success: {
        title: 'Message Sent!',
        message: 'Thank you for reaching out. We\'ll get back to you shortly.'
      }
    },
    footer: {
      description: 'Vibly is a creative tech agency specializing in premium digital experiences for forward-thinking companies and brands.',
      quickLinks: {
        title: 'Quick Links',
        links: [
          'Home',
          'About Us',
          'Services',
          'Portfolio',
          'Careers',
          'Blog'
        ]
      },
      legal: {
        title: 'Legal',
        links: [
          'Terms of Service',
          'Privacy Policy',
          'Cookies Policy',
          'GDPR Compliance'
        ]
      },
      rights: 'All rights reserved.',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy'
    }
  },
  pl: {
    nav: {
      home: 'Strona główna',
      about: 'O nas',
      portfolio: 'Portfolio',
      services: 'Usługi',
      contact: 'Kontakt',
      cta: 'Skontaktuj się'
    },
    hero: {
      headline1: 'Tworzymy Cyfrowe',
      headline2: 'Doświadczenia, Które Mają Znaczenie',
      subheadline: 'Podnosimy wartość marek poprzez nowoczesne aplikacje internetowe i innowacyjne rozwiązania cyfrowe, które przekształcają pomysły w rzeczywistość.',
      cta: 'Zbudujmy Coś Razem'
    },
    about: {
      title: 'O Vibly',
      subtitle: 'Jesteśmy zespołem pasjonatów tworzących cyfrowe doświadczenia, które wyróżniają się w dzisiejszym zatłoczonym krajobrazie cyfrowym.',
      feature1: {
        title: 'Kreatywna Wizja',
        description: 'Podchodzimy do każdego projektu ze świeżym spojrzeniem i innowacyjnym myśleniem, przesuwając granice, aby tworzyć unikalne doświadczenia cyfrowe.'
      },
      feature2: {
        title: 'Doskonałość Techniczna',
        description: 'Nasz zespół programistów łączy głęboką wiedzę techniczną z zaangażowaniem w czysty, wydajny i łatwy w utrzymaniu kod.'
      },
      feature3: {
        title: 'Precyzja Projektowania',
        description: 'Każdy piksel ma znaczenie. Obsesyjnie dbamy o szczegóły projektowe, aby tworzyć interfejsy, które są zarówno piękne, jak i funkcjonalne.'
      },
      mission: {
        title: 'Nasza Misja',
        description1: 'W Vibly wierzymy, że technologia powinna wzbogacać ludzkie doświadczenia, a nie je komplikować.',
        description2: 'Jesteśmy zaangażowani w tworzenie rozwiązań cyfrowych, które są intuicyjne, dostępne i zapewniają rzeczywistą wartość zarówno użytkownikom, jak i firmom.'
      },
      quote: 'Nie tylko budujemy strony internetowe i aplikacje. Tworzymy cyfrowe doświadczenia, które opowiadają historie, rozwiązują problemy i tworzą znaczące połączenia.',
      quoteAuthor: 'Aleksander Kowalski',
      quoteRole: 'Założyciel i CEO'
    },
    portfolio: {
      title: 'Nasze Prace',
      subtitle: 'Odkryj nasze najnowsze projekty i zobacz, jak pomogliśmy markom przekształcić ich obecność cyfrową.',
      viewProject: 'Zobacz Projekt',
      viewAll: 'Zobacz Wszystkie Projekty',
      backToPortfolio: 'Powrót do Portfolio',
      backToHome: 'Powrót do Strony Głównej',
      projectNotFound: 'Nie Znaleziono Projektu',
      overview: 'Przegląd Projektu',
      gallery: 'Galeria Projektu',
      projectDetails: 'Szczegóły Projektu',
      category: 'Kategoria',
      techStack: 'Technologie',
      project1: {
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
        },
        gallery: [
          'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/8370727/pexels-photo-8370727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/8370735/pexels-photo-8370735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/8370742/pexels-photo-8370742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      project2: {
        title: 'Platforma E-commerce',
        description: 'Niestandardowe rozwiązanie e-commerce z zaawansowanym filtrowaniem produktów, rekomendacjami i płynnym procesem zakupowym.',
        category: 'e-commerce',
        fullDescription: [
          'Ta niestandardowa platforma e-commerce została zbudowana od podstaw, aby zapewnić wyjątkowe doświadczenie zakupowe, które łączy potężną funkcjonalność z eleganckim designem.',
          'Platforma zawiera zaawansowany system rekomendacji produktów, który uczy się zachowań użytkowników, aby dostarczać spersonalizowane sugestie, podczas gdy inteligentny system wyszukiwania sprawia, że znajdowanie produktów jest intuicyjne i efektywne.',
          'Wdrożyliśmy uproszczony proces zakupowy, który zmniejszył porzucanie koszyka o 35% i zintegrowaliśmy wiele bramek płatniczych, aby zapewnić elastyczność dla klientów międzynarodowych.'
        ],
        stack: ['Next.js', 'Redux', 'Stripe', 'MongoDB', 'Elasticsearch'],
        testimonial: {
          quote: 'Nasze wskaźniki konwersji znacząco wzrosły od czasu uruchomienia nowej platformy. Doświadczenie użytkownika jest dokładnie takie, jakie sobie wyobrażaliśmy.',
          author: 'Michał Roberts',
          role: 'CEO, StyleHub'
        },
        gallery: [
          'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632366/pexels-photo-5632366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632358/pexels-photo-5632358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5632349/pexels-photo-5632349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      project3: {
        title: 'Portal Opieki Zdrowotnej',
        description: 'Bezpieczny system zarządzania pacjentami z funkcjami telemedycyny i zintegrowaną dokumentacją medyczną.',
        category: 'zdrowie',
        fullDescription: [
          'Portal Opieki Zdrowotnej to kompleksowe rozwiązanie, które modernizuje zarządzanie opieką nad pacjentem, zachowując najwyższe standardy bezpieczeństwa i zgodności.',
          'Opracowaliśmy system zgodny z HIPAA, który płynnie integruje elektroniczną dokumentację medyczną, planowanie wizyt i bezpieczne konsultacje wideo w jednej platformie.',
          'Portal zawiera zaawansowane funkcje, takie jak automatyczne przypomnienia o wizytach, zarządzanie receptami i bezpieczna komunikacja między pracownikami służby zdrowia a pacjentami.'
        ],
        stack: ['Angular', 'Node.js', 'PostgreSQL', 'WebRTC', 'Docker'],
        testimonial: {
          quote: 'Ten portal zrewolucjonizował sposób, w jaki świadczymy opiekę. Integracja telemedycyny była szczególnie istotna dla naszych pacjentów z obszarów wiejskich.',
          author: 'Dr Emily Martinez',
          role: 'Dyrektor Medyczny, HealthFirst'
        },
        gallery: [
          'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579544/pexels-photo-7579544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579551/pexels-photo-7579551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579570/pexels-photo-7579570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579585/pexels-photo-7579585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7579598/pexels-photo-7579598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      project4: {
        title: 'Platforma Podróżnicza',
        description: 'Interaktywna aplikacja do planowania podróży z personalizowanymi rekomendacjami i immersyjnymi treściami.',
        category: 'podróże',
        fullDescription: [
          'Platforma Podróżnicza przedefiniowuje sposób, w jaki podróżnicy planują i rezerwują swoje przygody poprzez immersyjne i spersonalizowane doświadczenie cyfrowe.',
          'Nasze rozwiązanie łączy zaawansowane rekomendacje oparte na AI z treściami generowanymi przez użytkowników, tworząc bogatą, napędzaną przez społeczność platformę, która inspiruje i ułatwia planowanie podróży.',
          'Platforma oferuje interaktywne mapy, aktualizacje dostępności w czasie rzeczywistym i bezproblemową integrację z lokalnymi dostawcami usług, zapewniając kompleksowe rozwiązanie do planowania podróży.'
        ],
        stack: ['React', 'GraphQL', 'AWS', 'Redis', 'Python'],
        testimonial: {
          quote: 'Platforma zmieniła sposób, w jaki nasi klienci odkrywają i rezerwują doświadczenia podróżnicze. Silnik personalizacji jest szczególnie imponujący.',
          author: 'Lisa Thompson',
          role: 'Menedżer Produktu, TravelWise'
        },
        gallery: [
          'https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412089/pexels-photo-7412089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412081/pexels-photo-7412081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412075/pexels-photo-7412075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/7412065/pexels-photo-7412065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      }
    },
    services: {
      title: 'Nasze Usługi',
      subtitle: 'Oferujemy kompleksowe rozwiązania cyfrowe dostosowane do unikalnych potrzeb Twojego biznesu.',
      cta: 'Omów Swój Projekt',
      service1: {
        title: 'Niestandardowy Rozwój Web',
        description: 'Budujemy skalowalne, wydajne aplikacje internetowe wykorzystując najnowocześniejsze technologie.',
        features: [
          'Progresywne Aplikacje Webowe',
          'Złożone Portale Internetowe',
          'Niestandardowe Rozwiązania CMS',
          'Rozwój i Integracja API'
        ]
      },
      service2: {
        title: 'Projektowanie UI/UX',
        description: 'Tworzymy intuicyjne, angażujące doświadczenia użytkownika, które sprawiają, że klienci wracają.',
        features: [
          'Badania i Testy Użytkowników',
          'Projektowanie Interfejsu',
          'Projektowanie Interakcji',
          'Systemy Projektowe'
        ]
      },
      service3: {
        title: 'Strategia Cyfrowa',
        description: 'Pomagamy zdefiniować cyfrową mapę drogową i zidentyfikować najlepsze technologie dla Twoich celów.',
        features: [
          'Doradztwo Techniczne',
          'Transformacja Cyfrowa',
          'Wybór Stosu Technologicznego',
          'Optymalizacja Wydajności'
        ]
      }
    },
    contact: {
      title: 'Skontaktuj się',
      subtitle: 'Gotowy, aby rozpocząć swój projekt? Skontaktuj się, aby omówić, jak możemy pomóc w realizacji Twojej wizji.',
      form: {
        name: 'Twoje Imię',
        email: 'Twój Email',
        message: 'Twoja Wiadomość',
        submit: 'Wyślij Wiadomość'
      },
      schedule: {
        title: 'Wolisz spotkanie?',
        button: 'Zaplanuj Rozmowę'
      },
      info: {
        title: 'Informacje Kontaktowe',
        email: 'Email',
        phone: 'Telefon',
        location: 'Lokalizacja'
      },
      success: {
        title: 'Wiadomość Wysłana!',
        message: 'Dziękujemy za kontakt. Odezwiemy się wkrótce.'
      }
    },
    footer: {
      description: 'Vibly to kreatywna agencja technologiczna specjalizująca się w wysokiej jakości doświadczeniach cyfrowych dla postępowych firm i marek.',
      quickLinks: {
        title: 'Szybkie Linki',
        links: [
          'Strona Główna',
          'O Nas',
          'Usługi',
          'Portfolio',
          'Kariera',
          'Blog'
        ]
      },
      legal: {
        title: 'Informacje Prawne',
        links: [
          'Warunki Korzystania z Usług',
          'Polityka Prywatności',
          'Polityka Cookies',
          'Zgodność z RODO'
        ]
      },
      rights: 'Wszelkie prawa zastrzeżone.',
      terms: 'Warunki Korzystania',
      privacy: 'Polityka Prywatności'
    }
  }
};