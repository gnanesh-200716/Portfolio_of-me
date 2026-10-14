import React from 'react';
import { Award, Trophy, Code, CheckCircle } from 'lucide-react';
import { achievementsData } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (id: string) => {
    switch (id) {
      case 'nptel':
        return <Award size={22} className="achieve-icon" />;
      case 'avishkar':
        return <Trophy size={22} className="achieve-icon" />;
      case 'hackathon':
        return <Code size={22} className="achieve-icon" />;
      default:
        return <Award size={22} className="achieve-icon" />;
    }
  };

  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>HONORS &bull; VERIFIED CERTIFICATIONS</span>
          </div>
          <h2 className="section-title">Achievements &amp; Recognition</h2>
          <p className="section-description">
            Milestones across academic excellence, competitive symposiums, and national-level hackathons.
          </p>
        </div>

        {/* 3 Premium Achievement Cards Grid */}
        <div className="achievements-grid">
          {achievementsData.map((item) => (
            <div key={item.id} className="card achievement-card">
              <div className="achievement-top">
                <div className="achievement-icon-box">{getAchievementIcon(item.id)}</div>
                <span className="badge badge-mono">{item.badge}</span>
              </div>

              <div className="achievement-content">
                <span className="achievement-cat">{item.category}</span>
                <h3 className="achievement-title">{item.title}</h3>
                <div className="achievement-inst">{item.institution}</div>
                <p className="achievement-desc">{item.description}</p>
              </div>

              <div className="achievement-footer">
                <span className="verified-status">
                  <CheckCircle size={14} className="verified-check" />
                  <span>Verified Record</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
