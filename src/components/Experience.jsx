import React from 'react';
import { experience, education, certifications } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section dark-block experience-editorial-section" data-theme="dark">
      <div className="content-wrapper">
        
        {/* Section Header */}
        <div className="section-meta-row scroll-reveal">
          <span className="section-num">04</span>
          <span className="section-tag">BACKGROUND • TIMELINE</span>
        </div>

        <h2 className="section-headline scroll-reveal">
          PRACTICE, ACADEMIA & CERTIFICATION.
        </h2>

        <div className="experience-composite-grid">
          
          {/* Column 1: Industry Experience */}
          <div className="timeline-column scroll-reveal">
            <h3 className="column-label">INDUSTRY EXPERIENCE</h3>
            
            {experience.map((item, idx) => (
              <div key={idx} className="timeline-card">
                <div className="timeline-card-header">
                  <span className="timeline-badge">{item.type}</span>
                  <span className="timeline-period">{item.period}</span>
                </div>
                
                <h4 className="timeline-role">{item.role}</h4>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}

            {/* Certification Card */}
            <div className="certification-mini-card">
              <div className="cert-header">
                <span className="cert-badge">NPTEL CERTIFICATION</span>
                <span className="cert-score">Score: 75%</span>
              </div>
              <h4 className="cert-title">{certifications[0].title}</h4>
              <p className="cert-inst">{certifications[0].institution}</p>
            </div>
          </div>

          {/* Column 2: Formal Education */}
          <div className="education-column scroll-reveal">
            <h3 className="column-label">FORMAL EDUCATION</h3>
            
            <div className="education-card">
              <div className="edu-card-header">
                <span className="edu-badge">CURRENT DEGREE</span>
                <span className="edu-years">{education.period}</span>
              </div>

              <h4 className="edu-degree">{education.degree}</h4>
              <p className="edu-spec">Specialization: <strong>{education.specialization}</strong></p>
              <p className="edu-inst">{education.institution}</p>

              <div className="cgpa-highlight-box">
                <span className="cgpa-number">{education.cgpa}</span>
                <span className="cgpa-label">Cumulative GPA / 10.0</span>
              </div>

              <div className="coursework-container">
                <span className="coursework-title">Relevant Core Coursework:</span>
                <div className="coursework-tags">
                  {education.coursework.map((course, idx) => (
                    <span key={idx} className="course-pill">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
