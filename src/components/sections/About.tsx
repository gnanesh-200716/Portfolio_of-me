import React from 'react';
import { MapPin, GraduationCap, Target } from 'lucide-react';
import { personalInfo, educationData } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>BACKGROUND &bull; SPECIALIZATION</span>
          </div>
          <h2 className="section-title">About Me</h2>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          {/* Main Narrative */}
          <div className="about-main-text">
            {personalInfo.aboutParagraphs.map((para, idx) => (
              <p key={idx} className="about-paragraph">
                {para}
              </p>
            ))}

            {/* Metric Highlights */}
            <div className="about-metrics-row">
              <div className="about-metric-card">
                <span className="metric-number">2028</span>
                <span className="metric-label">Expected Graduation</span>
              </div>
              <div className="about-metric-card">
                <span className="metric-number">{educationData.cgpa}</span>
                <span className="metric-label">Academic CGPA</span>
              </div>
              <div className="about-metric-card">
                <span className="metric-number">3+</span>
                <span className="metric-label">Engineering Projects</span>
              </div>
              <div className="about-metric-card">
                <span className="metric-number">2x</span>
                <span className="metric-label">Symposium Finalist</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar: "Currently" card & Quick Facts */}
          <div className="about-sidebar">
            {/* Currently Card */}
            <div className="card currently-card">
              <div className="currently-card-header">
                <span className="pulse-dot" />
                <h3 className="currently-title">Currently</h3>
              </div>
              <div className="currently-list">
                {personalInfo.currently.map((item, idx) => (
                  <div key={idx} className="currently-item">
                    <div className="currently-bullet" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Context Card */}
            <div className="card context-card">
              <h4 className="context-card-heading">Education Overview</h4>
              <div className="context-item">
                <GraduationCap size={16} className="context-icon" />
                <div>
                  <div className="context-title">{educationData.institution}</div>
                  <div className="context-sub">{educationData.degree} &bull; AI/ML</div>
                </div>
              </div>

              <div className="context-item">
                <MapPin size={16} className="context-icon" />
                <div>
                  <div className="context-title">Location</div>
                  <div className="context-sub">{educationData.location}</div>
                </div>
              </div>

              <div className="context-item">
                <Target size={16} className="context-icon" />
                <div>
                  <div className="context-title">Primary Focus</div>
                  <div className="context-sub">Software Development + AI/ML</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
