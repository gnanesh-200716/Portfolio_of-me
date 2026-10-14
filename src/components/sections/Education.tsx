import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Undergraduate studies focused on core computer science foundations and artificial intelligence systems.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="card education-card">
          <div className="education-card-grid">
            <div className="education-primary-info">
              <div className="education-badge-row">
                <span className="badge badge-mono">{educationData.status}</span>
                <span className="badge badge-mono">CGPA: {educationData.cgpa} / 10</span>
              </div>

              <h3 className="education-degree">{educationData.degree}</h3>
              <div className="education-spec">Specialization: {educationData.specialization}</div>

              <div className="education-meta-list">
                <div className="edu-meta-item">
                  <GraduationCap size={16} className="edu-meta-icon" />
                  <span>{educationData.institution}</span>
                </div>
                <div className="edu-meta-item">
                  <MapPin size={16} className="edu-meta-icon" />
                  <span>{educationData.location}</span>
                </div>
                <div className="edu-meta-item">
                  <Calendar size={16} className="edu-meta-icon" />
                  <span>Expected Graduation: {educationData.graduationYear}</span>
                </div>
              </div>
            </div>

            <div className="education-coursework-column">
              <h4 className="coursework-title">
                <BookOpen size={16} />
                <span>Key Coursework &amp; Academic Focus</span>
              </h4>
              <div className="coursework-tags-grid">
                {educationData.coursework.map((course, idx) => (
                  <div key={idx} className="coursework-tag">
                    <span className="coursework-dot" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
