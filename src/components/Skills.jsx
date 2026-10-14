import React from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section light-block skills-editorial-section" data-theme="light">
      <div className="content-wrapper">
        
        {/* Section Header */}
        <div className="section-meta-row scroll-reveal">
          <span className="section-num">03</span>
          <span className="section-tag">CAPABILITIES & PROFICIENCIES</span>
        </div>

        <h2 className="section-headline scroll-reveal">
          TECHNICAL ARSENAL.
        </h2>
        <p className="skills-sub-lead scroll-reveal">
          Grounded technologies I actively write, debug, and discuss in technical interviews — without arbitrary percentage bars.
        </p>

        {/* 4-Category Grid */}
        <div className="skills-editorial-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card scroll-reveal">
              <div className="skill-cat-header">
                <span className="cat-icon">{cat.icon}</span>
                <h3 className="cat-title">{cat.category}</h3>
              </div>

              <div className="skill-tags-flow">
                {cat.skills.map((s, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
