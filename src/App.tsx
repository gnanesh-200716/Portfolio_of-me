import { useState, useEffect } from 'react';
import './styles/index.css';
import './styles/components.css';

import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Education } from './components/sections/Education';
import { CareerDirection } from './components/sections/CareerDirection';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer';

import { ResumeModal } from './components/common/ResumeModal';
import { ProjectModal } from './components/common/ProjectModal';
import { CommandPalette } from './components/common/CommandPalette';
import type { Project } from './types';
import { projectsData } from './data/portfolioData';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // Global keydown for ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectProjectById = (projectId: string) => {
    const proj = projectsData.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Top Sticky Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <div className="divider" />

        <About />
        <div className="divider" />

        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <div className="divider" />

        <Experience />
        <div className="divider" />

        <Skills />
        <div className="divider" />

        <Achievements />
        <div className="divider" />

        <Education />
        <div className="divider" />

        <CareerDirection />
        <div className="divider" />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onSelectProject={handleSelectProjectById}
      />
    </div>
  );
}

export default App;
