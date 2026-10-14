import React from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import type { Project } from '../../types';
import { ParkTrovePreview } from './ParkTrovePreview';
import { CineMatchPreview } from './CineMatchPreview';
import { AxonBandPreview } from './AxonBandPreview';
import { GithubIcon } from '../common/Icons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const getProjectPreview = (id: string) => {
    switch (id) {
      case 'parktrove':
        return <ParkTrovePreview />;
      case 'cinematch':
        return <CineMatchPreview />;
      case 'axon-band':
        return <AxonBandPreview />;
      default:
        return null;
    }
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>PORTFOLIO &bull; ENGINEERING PROJECTS</span>
          </div>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-description">
            A selection of projects where I explored software development, artificial intelligence, and real-world problem solving.
          </p>
        </div>

        {/* Projects Editorial Layout */}
        <div className="projects-editorial-stack">
          {projectsData.map((project) => {
            const isDominant = project.isDominant;

            return (
              <article
                key={project.id}
                className={`project-article ${isDominant ? 'dominant-project' : ''}`}
              >
                {/* Project Header Info */}
                <div className="project-info-column">
                  <div className="project-meta-row">
                    <span className="project-num-badge">PROJECT {project.number}</span>
                    <span className="project-category-name">{project.category}</span>
                  </div>

                  <h3 className="project-name">{project.name}</h3>

                  <p className="project-short-desc">{project.description}</p>

                  {/* Problem & Concept Highlight */}
                  <div className="project-highlight-box">
                    <div className="highlight-label">PROBLEM ADDRESSED</div>
                    <p className="highlight-text">{project.keyProblem}</p>
                  </div>

                  {/* Technologies Tags */}
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="badge badge-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onSelectProject(project)}
                    >
                      <Eye size={15} />
                      <span>View Case Study</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <GithubIcon size={15} />
                      <span>GitHub</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Project Interactive Visual Preview */}
                <div className="project-visual-column">
                  <div className="project-preview-wrapper">
                    {getProjectPreview(project.id)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
