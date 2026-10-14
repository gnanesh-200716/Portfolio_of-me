import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-role">{personalInfo.role}</p>
            <p className="footer-positioning">Software Development &bull; Artificial Intelligence &bull; Machine Learning</p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Sections</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Selected Work</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links-list">
              <li>
                <a href={personalInfo.contacts.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href={personalInfo.contacts.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.contacts.email}`}>
                  <Mail size={14} />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>
          
          <button className="footer-back-to-top" onClick={scrollToTop} aria-label="Scroll back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
