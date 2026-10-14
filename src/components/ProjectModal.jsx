import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="project-modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="project-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-meta-left">
            <span className="modal-number">{project.number}</span>
            <span className="modal-category">{project.category}</span>
          </div>

          <button 
            className="modal-close-pill" 
            onClick={onClose}
            aria-label="Close Project Details"
          >
            <span>CLOSE</span>
            <span className="close-icon" aria-hidden="true">✕</span>
          </button>
        </div>

        {/* Modal Hero Banner */}
        <div className="modal-image-wrapper">
          <img 
            src={project.coverImage} 
            alt={`${project.title} Preview Banner`} 
            className="modal-banner-img"
            onError={(e) => {
              if (project.fallbackImage) e.currentTarget.src = project.fallbackImage;
            }}
          />
          <div className="modal-banner-badge">
            <span>{project.dataset}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-title-group">
            <h3 id="modal-project-title" className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          
          <div className="modal-desc-box">
            <p>{project.description}</p>
          </div>

          {/* Highlights Grid */}
          <div className="modal-section-container">
            <h4 className="section-mini-heading">SYSTEM & ARCHITECTURE HIGHLIGHTS</h4>
            <div className="modal-highlights-grid">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="highlight-cell">
                  <span className="highlight-label">{h.label}</span>
                  <span className="highlight-value">{h.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Contributions */}
          <div className="modal-section-container">
            <h4 className="section-mini-heading">KEY ENGINEERING CONTRIBUTIONS</h4>
            <ul className="contributions-list">
              {project.contributions.map((c, idx) => (
                <li key={idx}>
                  <span className="bullet" aria-hidden="true">→</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="modal-section-container">
            <h4 className="section-mini-heading">TECHNOLOGIES & TOOLS</h4>
            <div className="tech-pills-row">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="modal-disclaimer-text">
            * Note: Promotional imagery illustrates the architectural flow and interface concepts.
          </p>

          {/* Action Row */}
          <div className="modal-footer-actions">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pill-btn pill-btn-primary"
            >
              <span className="pill-label">
                <span className="label-default">VIEW GITHUB REPOSITORY</span>
                <span className="label-marquee">
                  <span>SOURCE CODE • REPO •&nbsp;</span>
                </span>
              </span>
              <span className="pill-icon">↗</span>
            </a>

            <button 
              onClick={onClose} 
              className="pill-btn pill-btn-outline"
            >
              <span className="pill-label">
                <span className="label-default">BACK TO PORTFOLIO</span>
                <span className="label-marquee">
                  <span>CLOSE MODAL • RETURN •&nbsp;</span>
                </span>
              </span>
              <span className="pill-icon">←</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
