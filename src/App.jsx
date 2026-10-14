import React from 'react';
import Navigation from './components/Navigation';
import IntroAnimation from './components/IntroAnimation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useGSAPAnimation } from './hooks/useGSAPAnimation';

export default function App() {
  // Initialize GSAP ScrollTrigger and Lenis smooth scroll
  useGSAPAnimation();

  return (
    <div className="portfolio-app-root">
      {/* Subtle Grain Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true"></div>

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Opening Cinematic Typography Reveal */}
      <IntroAnimation />

      {/* Sticky Navigation Bar & Fullscreen Drawer */}
      <Navigation />

      {/* Main Page Flow */}
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <ProjectShowcase />
        <Skills />
        <Experience />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
