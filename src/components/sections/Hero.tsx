import React from 'react';
import { ArrowRight, Mail, FileText, ArrowDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { HeroInteractiveWidget } from './HeroInteractiveWidget';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="eyebrow-badge">
                <span className="pulse-dot" />
                <span>{personalInfo.role.toUpperCase()}</span>
              </span>
            </div>

            <h1 className="hero-title">{personalInfo.tagline}</h1>

            <p className="hero-description">{personalInfo.heroDescription}</p>

            {/* Action CTAs */}
            <div className="hero-cta-group">
              <button
                className="btn btn-primary"
                onClick={() => handleScrollTo('projects')}
              >
                <span>View My Work</span>
                <ArrowDown size={16} />
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => handleScrollTo('contact')}
              >
                <span>Get In Touch</span>
              </button>

              <button
                className="hero-resume-link"
                onClick={onOpenResume}
              >
                <FileText size={15} />
                <span>Download Resume</span>
                <ArrowRight size={14} className="resume-arrow-icon" />
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="hero-socials">
              <span className="socials-label">Connect:</span>
              <div className="socials-links">
                <a
                  href={personalInfo.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.contacts.email}`}
                  className="social-btn"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Visual (Interactive Console Widget) */}
          <div className="hero-visual">
            <HeroInteractiveWidget />
          </div>
        </div>
      </div>
    </section>
  );
};
