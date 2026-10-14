import React from 'react';
import { Terminal, Globe, Cpu, Wrench } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return <Terminal size={20} className="skill-cat-icon" />;
      case 'Web Development':
        return <Globe size={20} className="skill-cat-icon" />;
      case 'AI / Machine Learning':
        return <Cpu size={20} className="skill-cat-icon" />;
      case 'Tools & Platforms':
        return <Wrench size={20} className="skill-cat-icon" />;
      default:
        return <Terminal size={20} className="skill-cat-icon" />;
    }
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>CORE COMPETENCIES &bull; TOOLSET</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            Organized across programming languages, web engineering, artificial intelligence workflows, and developer tooling.
          </p>
        </div>

        {/* Skills Categorized Grid */}
        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="card skill-category-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">{getCategoryIcon(category.title)}</div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <p className="skill-category-desc">{category.description}</p>

              <div className="skill-tags-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-chip">
                    <span className="skill-chip-dot" />
                    <span className="skill-chip-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Bar */}
        <div className="skills-philosophy-bar">
          <div className="philosophy-item">
            <strong>Clean Code</strong>
            <span>Readable, modular, well-commented architecture</span>
          </div>
          <div className="philosophy-divider" />
          <div className="philosophy-item">
            <strong>Practical AI</strong>
            <span>Applied machine learning aimed at tangible solutions</span>
          </div>
          <div className="philosophy-divider" />
          <div className="philosophy-item">
            <strong>Reliable Engineering</strong>
            <span>Systematic debugging, version control, and continuous testing</span>
          </div>
        </div>
      </div>
    </section>
  );
};
