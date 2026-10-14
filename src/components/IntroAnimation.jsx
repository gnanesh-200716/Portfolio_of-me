import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function IntroAnimation({ onComplete }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check session storage to avoid replaying on refresh/navigation if desired,
    // or respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      handleComplete();
      return;
    }

    // 1.5 second high-impact reveal sequence
    const timer = setTimeout(() => {
      handleComplete();
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsDismissed(true);
    setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 800);
  };

  if (hidden) return null;

  return (
    <aside 
      className={`intro-screen ${isDismissed ? 'dismissed' : ''}`} 
      aria-label="Introduction Presentation"
      role="status"
    >
      <div className="intro-content">
        {/* Subtle Discipline Tag */}
        <span className="intro-sub-tag">PORTFOLIO & ARCHITECTURE</span>

        {/* Oversized Cinematic Name Reveal (No Monogram) */}
        <div className="intro-name-reveal">
          <h1 className="intro-name">{personalInfo.fullName}</h1>
        </div>

        {/* Tagline Reveal */}
        <p className="intro-tagline">
          SOFTWARE ENGINEER • APPLIED AI/ML DEVELOPER
        </p>

        {/* Lemon Yellow Kinetic Progress Line */}
        <div className="intro-progress-bar" aria-hidden="true">
          <div className="intro-progress-fill"></div>
        </div>
      </div>

      {/* Skip Intro Control */}
      <button 
        onClick={handleComplete} 
        className="skip-intro-btn"
        aria-label="Skip Intro Presentation"
      >
        Skip Intro →
      </button>
    </aside>
  );
}
