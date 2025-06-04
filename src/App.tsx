import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import LegalDocuments from './components/LegalDocuments';
import UserSitemap from './components/UserSitemap';
import ParticleBackground from './components/ParticleBackground';

// Osobny komponent do obsługi hasha
const HashHandler: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

// Container component for consistent spacing
const Container: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div className={`w-full max-w-full mx-auto px-4 sm:px-6 md:px-16 overflow-x-hidden ${className}`}>
    {children}
  </div>
);

// Section component for consistent spacing
const Section: React.FC<{ children: React.ReactNode, id?: string, className?: string }> = ({ children, id, className = '' }) => (
  <section id={id} className={`w-full max-w-[100vw] py-12 sm:py-16 md:py-20 overflow-x-hidden ${className}`}>
    <Container>
      {children}
    </Container>
  </section>
);

// Główny komponent aplikacji
const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full max-w-[100vw] bg-black text-white overflow-x-hidden">
      {/* Single global particle background with cursor effect */}
      <ParticleBackground density="high" fadeDirection="down" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[100vw] overflow-x-hidden">
        <HashHandler />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="w-full max-w-[100vw] pt-16 md:pt-20 overflow-x-hidden">
              <Section id="hero" className="min-h-[calc(100vh-4rem)] pb-0">
                <Hero />
              </Section>
              <Section id="about" className="pt-8 sm:pt-12 md:pt-16">
                <About />
              </Section>
              <Section id="portfolio">
                <Portfolio />
              </Section>
              <Section id="services">
                <Services />
              </Section>
              <Section id="contact">
                <Contact />
              </Section>
            </main>
          } />
          <Route path="/portfolio/:id" element={
            <main className="w-full max-w-[100vw] pt-16 md:pt-20 overflow-x-hidden">
              <Section>
                <ProjectPage />
              </Section>
            </main>
          } />
          <Route path="/legal" element={
            <main className="w-full max-w-[100vw] pt-16 md:pt-20 overflow-x-hidden">
              <Section>
                <LegalDocuments />
              </Section>
            </main>
          } />
          <Route path="/sitemap" element={
            <main className="w-full max-w-[100vw] pt-16 md:pt-20 overflow-x-hidden">
              <Section>
                <UserSitemap />
              </Section>
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
};

export default App;