import React from 'react';
import { personalInfo, codingProfiles } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-editorial-footer dark-block" data-theme="dark">
      <div className="content-wrapper">
        
        {/* Massive Editorial Signature */}
        <div className="footer-headline-row scroll-reveal">
          <span className="footer-big-name">{personalInfo.fullName}</span>
        </div>

        <div className="footer-top-row">
          <div className="footer-brand-side scroll-reveal">
            <div className="footer-brand-meta">
              <span className="footer-fullname">{personalInfo.fullName}</span>
              <span className="footer-role">{personalInfo.role}</span>
              <span className="footer-sub-details">B.Tech CSE (AI & ML) • VISTAS • Chennai, India</span>
            </div>
          </div>

          <div className="footer-nav-columns scroll-reveal">
            <div className="footer-links-col">
              <span className="col-heading">NAVIGATION</span>
              <a href="#hero">01. Home</a>
              <a href="#about">02. About & Philosophy</a>
              <a href="#projects">03. Featured Works</a>
              <a href="#skills">04. Capabilities</a>
              <a href="#experience">05. Experience</a>
              <a href="#contact">06. Contact</a>
            </div>

            <div className="footer-links-col">
              <span className="col-heading">PROFILES & REPOS</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              {codingProfiles.map((p, idx) => (
                <a key={idx} href={p.url} target="_blank" rel="noopener noreferrer">{p.platform} ↗</a>
              ))}
            </div>

            <div className="footer-links-col">
              <span className="col-heading">DIRECT CONTACT</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
              <span className="footer-live-status">
                <span className="live-dot-green"></span>
                <span>Open for SWE Internships</span>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 {personalInfo.fullName}. Built with intention, precision, and performance.
          </p>

          <button 
            onClick={scrollToTop} 
            className="pill-btn pill-btn-outline back-to-top-btn"
            data-magnetic
            aria-label="Back to top"
          >
            <span className="pill-label">
              <span className="label-default">BACK TO TOP</span>
              <span className="label-marquee">
                <span>SCROLL UP • RETURN •&nbsp;</span>
              </span>
            </span>
            <span className="pill-icon">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
