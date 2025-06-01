import { Project, createPageSpeedScores } from "./types";
import coverImage from '../../assets/projects/saffron-thyme/saffron-thyme-cover.jpeg';
import mainPageImage from '../../assets/projects/saffron-thyme/main-page.png';

export const saffronThyme: Project = {
    id: 'saffron-thyme',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'i18next',
      'Vite'
    ],
    translations: {
      en: {
        title: 'Saffron & Thyme Restaurant',
        description: 'A modern, responsive restaurant website with multilingual support, featuring an elegant menu presentation and seamless reservation system',
        category: 'Restaurant Website',
        fullDescription: [
          'Saffron & Thyme is a sophisticated restaurant website designed to provide an exceptional digital experience for diners. The website combines elegant design with practical functionality, making it easy for customers to explore the menu, make reservations, and learn about the restaurant\'s unique culinary offerings.',
          'The project features a fully responsive design that works perfectly on all devices, from mobile phones to desktop computers. With built-in multilingual support, the website caters to both English and Polish-speaking customers, ensuring a welcoming experience for all visitors.',
          'The website includes modern features such as smooth animations, interactive menu displays, and an intuitive reservation system. The clean, minimalist design puts the focus on the restaurant\'s culinary offerings while maintaining excellent performance and accessibility standards.'
        ],
        testimonial: {
          quote: 'The new website has significantly improved our online presence and made it much easier for customers to discover our restaurant. The multilingual support has been particularly valuable for our international clientele.',
          author: 'Restaurant Owner',
          role: 'Owner, Saffron & Thyme Restaurant'
        }
      },
      pl: {
        title: 'Restauracja Saffron & Thyme',
        description: 'Nowoczesna, responsywna strona restauracji z obsługą wielu języków, elegancką prezentacją menu i płynnym systemem rezerwacji',
        category: 'Strona Restauracji',
        fullDescription: [
          'Saffron & Thyme to wyrafinowana strona internetowa restauracji, zaprojektowana tak, aby zapewnić gościom wyjątkowe wrażenia cyfrowe. Strona łączy elegancki design z praktyczną funkcjonalnością, ułatwiając klientom przeglądanie menu, dokonywanie rezerwacji i poznawanie unikalnej oferty kulinarnej restauracji.',
          'Projekt charakteryzuje się w pełni responsywnym designem, który doskonale działa na wszystkich urządzeniach, od telefonów komórkowych po komputery stacjonarne. Dzięki wbudowanemu wsparciu dla wielu języków, strona obsługuje zarówno anglojęzycznych, jak i polskojęzycznych klientów, zapewniając przyjazne doświadczenie dla wszystkich odwiedzających.',
          'Strona zawiera nowoczesne funkcje, takie jak płynne animacje, interaktywne wyświetlanie menu i intuicyjny system rezerwacji. Czysty, minimalistyczny design skupia uwagę na ofercie kulinarnej restauracji, jednocześnie utrzymując doskonałe standardy wydajności i dostępności.'
        ],
        testimonial: {
          quote: 'Nowa strona znacząco poprawiła naszą obecność w internecie i znacznie ułatwiła klientom odkrycie naszej restauracji. Wsparcie dla wielu języków okazało się szczególnie cenne dla naszej międzynarodowej klienteli.',
          author: 'Właściciel Restauracji',
          role: 'Właściciel, Restauracja Saffron & Thyme'
        }
      }
    },
    portfolio: {
      image: mainPageImage // You'll need to add this image
    },
    projectPage: {
      image: coverImage, // You'll need to add this image
      gallery: [
        '/projects/saffron-thyme/gallery-1.jpg',
        '/projects/saffron-thyme/gallery-2.jpg',
        '/projects/saffron-thyme/gallery-3.jpg'
      ],
      client: 'Saffron & Thyme Restaurant',
      duration: '8 weeks',
      year: '2024',
      projectType: 'Restaurant Website',
      projectUrl: 'https://saffron-thyme.com', // Replace with actual URL
      pageSpeedScores: createPageSpeedScores({
        'Performance': 90,
        'Accessibility': 95,
        'Best Practices': 92,
        'SEO': 98
      }),
      pageSpeedUrl: 'https://pagespeed.web.dev/analysis/https-saffron-thyme-netlify-app/6ugca3y70n?form_factor=mobile'
    }
  };