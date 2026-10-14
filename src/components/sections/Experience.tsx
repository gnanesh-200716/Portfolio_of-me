import React from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>PRACTICAL TRAINING &bull; INDUSTRY EXPOSURE</span>
          </div>
          <h2 className="section-title">Experience</h2>
          <p className="section-description">
            Hands-on technical exposure to modern software engineering and industry workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experienceData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>

              <div className="card experience-card">
                <div className="experience-card-header">
                  <div>
                    <span className="badge badge-mono">INTERNSHIP PROGRAM</span>
                    <h3 className="experience-role">{item.role}</h3>
                    <div className="experience-org-row">
                      <Building2 size={16} className="org-icon" />
                      <span className="org-name">{item.organization}</span>
                      <span className="org-collab-badge">&bull; {item.collaboration}</span>
                    </div>
                  </div>
                </div>

                <p className="experience-desc">{item.description}</p>

                <div className="experience-highlights">
                  <h4 className="highlights-title">Key Exposure &amp; Learnings:</h4>
                  <ul className="highlights-list">
                    {item.highlights.map((high, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 size={15} className="highlight-check" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tags">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
