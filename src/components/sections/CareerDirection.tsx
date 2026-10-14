import React from 'react';
import { Lightbulb, Rocket, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const CareerDirection: React.FC = () => {
  const { heading, immediate, longTerm, pillars } = personalInfo.careerDirection;

  const pillarIcons = [
    <ShieldCheck key="shield" size={20} className="pillar-icon" />,
    <Lightbulb key="bulb" size={20} className="pillar-icon" />,
    <Rocket key="rocket" size={20} className="pillar-icon" />,
  ];

  return (
    <section className="section career-section" id="career-direction">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>VISION &bull; LONG-TERM TRAJECTORY</span>
          </div>
          <h2 className="section-title">{heading}</h2>
        </div>

        {/* Narrative Box */}
        <div className="career-narrative-card card">
          <div className="career-quote-box">
            <p className="career-primary-statement">{immediate}</p>
            <p className="career-secondary-statement">{longTerm}</p>
          </div>

          <div className="career-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-item">
                <div className="pillar-icon-box">{pillarIcons[idx]}</div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
