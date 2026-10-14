import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <>
      <header className={`site-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Confident Typographic Brand Identity (No Monogram) */}
          <a href="#hero" className="navbar-brand" aria-label="GNANESHWARAN — Home">
            <div className="brand-dot-accent" aria-hidden="true"></div>
            <div className="brand-titles">
              <span className="brand-fullname">{personalInfo.fullName}</span>
              <span className="brand-tagline">SOFTWARE ENGINEER • APPLIED AI</span>
            </div>
          </a>

          {/* Availability Status Badge */}
          <div className="navbar-status-badge">
            <span className="live-dot" aria-hidden="true"></span>
            <span className="status-label">OPEN FOR SWE INTERNSHIPS</span>
          </div>

          {/* Navigation Action Buttons */}
          <div className="navbar-actions">
            <a 
              href="#contact" 
              className="pill-btn pill-btn-outline nav-contact-btn" 
              data-magnetic
            >
              <span className="pill-label">
                <span className="label-default">GET IN TOUCH</span>
                <span className="label-marquee">
                  <span>SAY HELLO • CONNECT •&nbsp;</span>
                </span>
              </span>
              <span className="pill-icon">↗</span>
            </a>

            <button 
              onClick={toggleDrawer} 
              className="pill-btn pill-btn-primary nav-menu-btn"
              aria-label={drawerOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={drawerOpen}
              data-magnetic
            >
              <span className="pill-label">
                <span className="label-default">{drawerOpen ? "CLOSE" : "MENU"}</span>
                <span className="label-marquee">
                  <span>{drawerOpen ? "EXIT • RETURN • " : "INDEX • EXPLORE • "}</span>
                </span>
              </span>
              <span className="pill-icon">{drawerOpen ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Sliding Navigation Drawer */}
      <div 
        className={`nav-drawer-overlay ${drawerOpen ? 'open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        <div className="drawer-inner-container">
          <div className="drawer-top-bar">
            <div className="drawer-brand-identity">
              <span className="drawer-dot-accent" aria-hidden="true"></span>
              <div>
                <span className="drawer-fullname">{personalInfo.fullName}</span>
                <span className="drawer-sub">CSE (AI & ML) • VISTAS '28</span>
              </div>
            </div>

            <button 
              onClick={closeDrawer} 
              className="pill-btn pill-btn-outline drawer-close-btn"
              aria-label="Close Navigation Menu"
            >
              <span className="pill-label">
                <span className="label-default">CLOSE</span>
                <span className="label-marquee">
                  <span>EXIT • CLOSE •&nbsp;</span>
                </span>
              </span>
              <span className="pill-icon">✕</span>
            </button>
          </div>

          <div className="drawer-main-grid">
            {/* Links List */}
            <nav className="drawer-nav-links" aria-label="Drawer Navigation">
              <a href="#hero" onClick={closeDrawer} className="nav-item-link" data-num="01">
                <span className="link-text">Home</span>
              </a>
              <a href="#about" onClick={closeDrawer} className="nav-item-link" data-num="02">
                <span className="link-text">About & Philosophy</span>
              </a>
              <a href="#projects" onClick={closeDrawer} className="nav-item-link" data-num="03">
                <span className="link-text">Featured Works (Projects)</span>
              </a>
              <a href="#skills" onClick={closeDrawer} className="nav-item-link" data-num="04">
                <span className="link-text">Capabilities & Skills</span>
              </a>
              <a href="#experience" onClick={closeDrawer} className="nav-item-link" data-num="05">
                <span className="link-text">Experience & Education</span>
              </a>
              <a href="#profiles" onClick={closeDrawer} className="nav-item-link" data-num="06">
                <span className="link-text">Coding Benchmarks</span>
              </a>
              <a href="#contact" onClick={closeDrawer} className="nav-item-link" data-num="07">
                <span className="link-text">Contact</span>
              </a>
            </nav>

            {/* Direct Info Column */}
            <div className="drawer-info-sidebar">
              <div className="drawer-info-group">
                <h4 className="info-group-title">DIRECT INQUIRIES</h4>
                <a href={`mailto:${personalInfo.email}`} className="info-highlight-link">
                  {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="info-highlight-link">
                  {personalInfo.phone}
                </a>
              </div>

              <div className="drawer-info-group">
                <h4 className="info-group-title">LOCATION & STATUS</h4>
                <p className="info-plain-text">{personalInfo.location}</p>
                <p className="drawer-availability-pill">
                  <span className="live-dot-green"></span>
                  {personalInfo.availability}
                </p>
              </div>

              <div className="drawer-info-group">
                <h4 className="info-group-title">VERIFIED PROFILES</h4>
                <div className="drawer-social-pills">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="drawer-tag">GitHub ↗</a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="drawer-tag">LinkedIn ↗</a>
                  <a href="https://leetcode.com/u/Gnaneshzz/" target="_blank" rel="noopener noreferrer" className="drawer-tag">LeetCode ↗</a>
                  <a href="https://www.hackerrank.com/profile/sgnaneshwaran577" target="_blank" rel="noopener noreferrer" className="drawer-tag">HackerRank ↗</a>
                  <a href="https://www.geeksforgeeks.org/profile/gnaneshsizcou?from=explore&tab=overview" target="_blank" rel="noopener noreferrer" className="drawer-tag">GeeksforGeeks ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
