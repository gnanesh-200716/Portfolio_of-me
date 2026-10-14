import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero-editorial-section dark-block" data-theme="dark">
      {/* Subtle Ambient Light Cone */}
      <div className="hero-glow-ambient" aria-hidden="true"></div>

      <div className="content-wrapper hero-container">
        
        {/* Top Eyebrow / Discipline & Coordinates (Clean Editorial Badge, No Monogram) */}
        <div className="hero-eyebrow-row scroll-reveal">
          <div className="hero-eyebrow-left">
            <div className="hero-status-pill">
              <span className="hero-status-dot" aria-hidden="true"></span>
              <span className="mono-sub-title">ASPIRING SOFTWARE DEVELOPER</span>
            </div>
            <span className="hero-discipline-badge">APPLIED AI & BACKEND SYSTEMS</span>
          </div>

          <div className="hero-eyebrow-right">
            <span className="hero-spec-tag">B.TECH CSE (AI & ML) • VISTAS '28</span>
            <span className="hero-spec-div">•</span>
            <span className="hero-spec-tag">CHENNAI, INDIA</span>
          </div>
        </div>

        {/* Oversized Full Name */}
        <div className="hero-name-container">
          <h1 className="hero-display-name">
            <span className="line-mask">
              <span className="line-inner revealed">{personalInfo.fullName}</span>
            </span>
          </h1>
        </div>

        {/* Main Editorial Headline */}
        <div className="hero-headline-block">
          <h2 className="hero-editorial-statement">
            <span className="line-mask">
              <span className="line-inner revealed">{personalInfo.headlineLine1}</span>
            </span>
            <span className="line-mask">
              <span className="line-inner revealed accent-yellow">{personalInfo.headlineLine2}</span>
            </span>
          </h2>
        </div>

        {/* Asymmetrical Lower Grid: Narrative & Actions */}
        <div className="hero-bottom-grid">
          <div className="hero-narrative-col">
            <p className="hero-lead-text scroll-reveal">
              Computer Science and Engineering student specializing in <strong>Artificial Intelligence and Machine Learning</strong> at VISTAS. I build AI-backed applications, robust backend architectures, and high-performance software systems — turning complex technical concepts into reliable, production-ready software.
            </p>

            <div className="hero-cta-actions scroll-reveal">
              <a 
                href="#projects" 
                className="pill-btn pill-btn-primary" 
                data-magnetic
                data-cursor-text="EXPLORE"
              >
                <span className="pill-label">
                  <span className="label-default">EXPLORE PROJECTS</span>
                  <span className="label-marquee">
                    <span>SEE WORKS • DISCOVER •&nbsp;</span>
                  </span>
                </span>
                <span className="pill-icon">↓</span>
              </a>

              <a 
                href="#contact" 
                className="pill-btn pill-btn-outline" 
                data-magnetic
                data-cursor-text="CONTACT"
              >
                <span className="pill-label">
                  <span className="label-default">CONTACT ME</span>
                  <span className="label-marquee">
                    <span>INQUIRE • CONNECT •&nbsp;</span>
                  </span>
                </span>
                <span className="pill-icon">→</span>
              </a>
            </div>
          </div>

          {/* Minimalist Tech Pillars (Restrained, grounded, no fluff) */}
          <div className="hero-focus-col scroll-reveal">
            <div className="hero-focus-card">
              <span className="focus-label">CORE ENGINEERING PILLARS</span>
              <ul className="focus-list">
                <li>
                  <span className="focus-bullet">01</span>
                  <span>Backend Architecture (Java 17, Spring Boot, FastAPI, REST)</span>
                </li>
                <li>
                  <span className="focus-bullet">02</span>
                  <span>Applied GenAI & RAG (Spring AI, Gemini 3,072-D Embeddings)</span>
                </li>
                <li>
                  <span className="focus-bullet">03</span>
                  <span>Machine Learning Systems (Scikit-learn, TF-IDF Vectorization)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator scroll-reveal">
          <a href="#about" className="scroll-link" aria-label="Scroll to About section">
            <span className="scroll-indicator-bar" aria-hidden="true"></span>
            <span className="scroll-text">SCROLL TO DISCOVER</span>
          </a>
        </div>

      </div>
    </section>
  );
}
