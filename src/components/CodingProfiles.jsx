import React from 'react';
import { codingProfiles } from '../data/portfolioData';

export default function CodingProfiles() {
  return (
    <section id="profiles" className="section light-block profiles-editorial-section" data-theme="light">
      <div className="content-wrapper">
        
        {/* Section Header */}
        <div className="section-meta-row scroll-reveal">
          <span className="section-num">05</span>
          <span className="section-tag">COMPETITIVE PRACTICE • BENCHMARKS</span>
        </div>

        <h2 className="section-headline scroll-reveal">
          CODING PROFILES & PROBLEM SOLVING.
        </h2>
        <p className="profiles-sub-lead scroll-reveal">
          Direct external verification of algorithmic practice, data structures implementations, and Java language mastery.
        </p>

        {/* Profiles Grid */}
        <div className="coding-profiles-grid">
          {codingProfiles.map((p, idx) => (
            <a 
              key={idx} 
              href={p.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="coding-profile-card scroll-reveal"
              data-cursor-text="OPEN"
            >
              <div className="profile-card-top">
                <span className="profile-badge-pill">{p.badge}</span>
                <span className="profile-arrow">↗</span>
              </div>

              <h3 className="profile-platform-name">{p.platform}</h3>
              <p className="profile-username">@{p.username}</p>
              <p className="profile-highlight-text">{p.highlight}</p>

              <div className="profile-card-footer">
                <span className="view-profile-label">OPEN VERIFIED PROFILE</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
