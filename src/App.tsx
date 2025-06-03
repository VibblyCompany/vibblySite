import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import LegalDocuments from './components/LegalDocuments';
import Sitemap from './components/Sitemap';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="relative min-h-screen bg-black text-white">
          {/* Single global particle background with cursor effect */}
          <ParticleBackground density="high" fadeDirection="down" />
          
          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <main>
                  <section id="home">
                    <Hero />
                  </section>
                  <About />
                  <Portfolio />
                  <Services />
                  <Contact />
                </main>
              } />
              <Route path="/portfolio/:id" element={<ProjectPage />} />
              <Route path="/legal" element={<LegalDocuments />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;