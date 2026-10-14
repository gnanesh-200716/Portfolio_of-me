import React from 'react';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <article 
      className="project-showcase-card dark-block scroll-reveal" 
      data-cursor-text="VIEW"
    >
      <div className="card-top-meta">
        <div className="meta-left">
          <span className="project-index">{project.number}</span>
          <span className="meta-sep">/</span>
          <span className="project-category-tag">{project.category}</span>
        </div>
        <span className="project-status-tag">{project.status}</span>
      </div>

      {/* Cinematic Project Image Banner */}
      <div 
        className="project-image-container clip-reveal-frame"
        onClick={() => onSelectProject(project)}
      >
        <img 
          src={project.coverImage} 
          alt={`${project.title} Architectural Cover`} 
          className="project-cover-image"
          onError={(e) => {
            if (project.fallbackImage) e.currentTarget.src = project.fallbackImage;
          }}
        />
        <div className="image-hover-overlay">
          <span className="overlay-badge">CLICK FOR ARCHITECTURAL BREAKDOWN ↗</span>
        </div>
      </div>

      {/* Card Details Grid */}
      <div className="card-details-grid">
        <div className="card-title-col">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-tagline">{project.tagline}</p>
        </div>

        <div className="card-summary-col">
          <p className="project-card-desc">{project.description}</p>
          
          <div className="project-tags-cloud">
            {project.technologies.map((t, idx) => (
              <span key={idx} className="project-tag-pill">{t}</span>
            ))}
          </div>

          <div className="project-card-actions">
            <button 
              onClick={() => onSelectProject(project)} 
              className="pill-btn pill-btn-primary"
              data-magnetic
            >
              <span className="pill-label">
                <span className="label-default">DEEP DIVE DETAILS</span>
                <span className="label-marquee">
                  <span>SPECS • CONTRIBUTIONS •&nbsp;</span>
                </span>
              </span>
              <span className="pill-icon">↗</span>
            </button>

            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pill-btn pill-btn-outline"
              data-magnetic
            >
              <span className="pill-label">
                <span className="label-default">GITHUB REPO</span>
                <span className="label-marquee">
                  <span>SOURCE CODE • REPOSITORY •&nbsp;</span>
                </span>
              </span>
              <span className="pill-icon">→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
