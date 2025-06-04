import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navLinks = [
    { name: t.nav.home, href: '/#hero' },
    { name: t.nav.about, href: '/#about' },
    { name: t.nav.portfolio, href: '/#portfolio' },
    { name: t.nav.services, href: '/#services' },
    { name: t.nav.contact, href: '/#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we've scrolled enough to change navbar appearance
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show navbar when scrolling up or at the top
      // Hide navbar when scrolling down and not at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (location.pathname !== '/') {
        navigate(`/#${sectionId}`);
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  const handleCTAClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#contact');
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[9999] w-screen max-w-[100vw] transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-lg py-3 shadow-lg'
          : 'bg-black py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex items-center justify-between w-full">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center py-1 relative z-[9999] shrink-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold text-lg md:text-xl mr-2 md:mr-3 shrink-0">
            V
          </div>
          <span className="text-white text-lg md:text-xl font-bold whitespace-nowrap">Vibbly</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-300 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Language toggle and CTA button */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
          >
            {language === 'en' ? 'PL' : 'EN'}
          </button>
          
          <button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 whitespace-nowrap shrink-0"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-600 rounded-lg relative z-[9999] shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 z-[9998] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '0', height: '100dvh', overflowY: 'auto', overflowX: 'hidden' }}
      >
        <div className="px-4 py-20 min-h-[100dvh] flex flex-col w-full max-w-[100vw]">
          <nav className="flex-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 py-4 border-b border-gray-800 whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-800">
            <button
              onClick={toggleLanguage}
              className="text-gray-400 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg whitespace-nowrap"
            >
              {language === 'en' ? 'PL' : 'EN'}
            </button>
            
            <button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg text-lg font-medium whitespace-nowrap shrink-0"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;