import React, { useState, useEffect } from 'react';
import { Menu, X, Command, FileText } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommand: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenCommand }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section for nav highlighting
      const sections = ['about', 'projects', 'experience', 'skills', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left: Brand */}
        <a href="#" className="navbar-brand">
          <span className="brand-avatar">G</span>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-status">
              <span className="pulse-dot" />
              <span>AI &bull; Full-Stack</span>
            </span>
          </div>
        </a>

        {/* Center/Right Desktop Navigation */}
        <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Tools: Command Palette, Resume, Theme */}
        <div className="navbar-right-tools">
          <button
            className="command-trigger-btn"
            onClick={onOpenCommand}
            aria-label="Open command palette"
            title="Search & Quick Actions (Ctrl+K / ⌘K)"
          >
            <Command size={14} />
            <span className="command-key-hint">⌘K</span>
          </button>

          <button
            className="btn btn-secondary btn-sm resume-nav-btn desktop-only"
            onClick={onOpenResume}
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>

          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="mobile-menu-toggle mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-menu-inner">
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu-footer">
              <button
                className="btn btn-primary btn-sm full-width"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
              >
                <FileText size={15} />
                <span>View / Download Resume</span>
              </button>
              <div className="mobile-socials-row">
                <a href={personalInfo.contacts.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <span>&bull;</span>
                <a href={personalInfo.contacts.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <span>&bull;</span>
                <a href={`mailto:${personalInfo.contacts.email}`}>Email</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
