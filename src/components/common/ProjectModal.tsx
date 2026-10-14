import React from 'react';
import { X, CheckCircle2, Layers, Cpu, AlertCircle, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container project-detail-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="badge badge-mono">CASE STUDY &bull; {project.number}</span>
            <h3>{project.name}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="project-detail-body">
          <div className="project-detail-hero">
            <span className="project-category-tag">{project.category}</span>
            <h2 className="project-detail-title">{project.tagline}</h2>
            <p className="project-detail-desc">{project.description}</p>
          </div>

          <div className="project-detail-grid">
            {/* Left: Problem & Concept */}
            <div className="project-detail-main">
              <div className="detail-card">
                <div className="detail-card-header">
                  <AlertCircle size={18} className="icon-accent" />
                  <h4>Problem Statement</h4>
                </div>
                <p>{project.keyProblem}</p>
              </div>

              <div className="detail-card">
                <div className="detail-card-header">
                  <Cpu size={18} className="icon-accent" />
                  <h4>Architecture &amp; Concept</h4>
                </div>
                <p>{project.concept}</p>
              </div>

              {project.features && (
                <div className="detail-card">
                  <div className="detail-card-header">
                    <CheckCircle2 size={18} className="icon-accent" />
                    <h4>Key Capabilities</h4>
                  </div>
                  <ul className="detail-feature-list">
                    {project.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Metadata & Tech */}
            <div className="project-detail-sidebar">
              <div className="detail-card">
                <div className="detail-card-header">
                  <Layers size={18} className="icon-accent" />
                  <h4>Technologies &amp; Tools</h4>
                </div>
                <div className="tech-tags-wrap">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.context && (
                <div className="detail-card">
                  <h4>Context</h4>
                  <p className="sidebar-meta-text">{project.context}</p>
                </div>
              )}

              <div className="detail-card action-card">
                <h4>Repository &amp; Status</h4>
                <p className="sidebar-meta-text">
                  Verified student project under active iteration. Repository code and artifacts available on GitHub.
                </p>
                <div className="sidebar-actions">
                  <a
                    href={project.githubUrl || 'https://github.com/gnanesh-200716'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm full-width"
                  >
                    <GithubIcon size={15} />
                    <span>View on GitHub</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span className="modal-footnote">Engineering Portfolio of Gnaneshwaran S</span>
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
