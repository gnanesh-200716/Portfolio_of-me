import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectModal from './ProjectModal';
import { featuredProjects } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 992;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || prefersReducedMotion) {
      // In mobile or reduced motion mode, rely on standard vertical layout
      return;
    }

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Use GSAP context for clean cleanup
    const ctx = gsap.context(() => {
      // Calculate total horizontal scroll distance
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const horizontalTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: () => `+=${getScrollAmount() + 400}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update active project index (0 or 1) based on scroll progress
            const progress = self.progress;
            setActiveProjectIndex(progress > 0.45 ? 1 : 0);
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${Math.min(100, Math.max(15, progress * 100))}%`;
            }
          }
        }
      });

      // Scroll-linked image scale and reveal parallax for each panel
      const panels = track.querySelectorAll('.project-slide-panel');
      panels.forEach((panel, i) => {
        const img = panel.querySelector('.project-cover-image');
        const textBlock = panel.querySelector('.panel-content-col');

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15, filter: 'brightness(0.85)' },
            {
              scale: 1,
              filter: 'brightness(1)',
              ease: 'power2.out',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: 'left right',
                end: 'center center',
                scrub: true
              }
            }
          );
        }

        if (textBlock && i > 0) {
          gsap.fromTo(
            textBlock,
            { x: 60, opacity: 0.7 },
            {
              x: 0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: 'left 80%',
                end: 'left 30%',
                scrub: true
              }
            }
          );
        }
      });
    }, sectionRef);

    // Refresh triggers to ensure precise geometry calculation
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="projects-pinned-section dark-block" 
      data-theme="dark"
    >
      {/* Pinned Top Navigation Bar & Active Progress Indicator */}
      <div className="projects-sticky-header">
        <div className="content-wrapper projects-header-inner">
          <div className="projects-header-left">
            <span className="section-num">02</span>
            <span className="section-tag">PRIMARY PORTFOLIO WORKS</span>
            <span className="header-divider-dot">•</span>
            <span className="active-project-pill">
              {activeProjectIndex === 0 ? "01 / 02 • CINEMATCH" : "02 / 02 • JAVA PDF-RAG"}
            </span>
          </div>

          <div className="projects-header-right">
            <div className="projects-progress-track" aria-hidden="true">
              <div 
                ref={progressBarRef} 
                className="projects-progress-fill" 
                style={{ width: activeProjectIndex === 0 ? '50%' : '100%' }}
              ></div>
            </div>
            <span className="scroll-instruction-tag">SCROLL TO ADVANCE →</span>
          </div>
        </div>
      </div>

      {/* Horizontal Track Containing the 2 Flagship Projects */}
      <div className="projects-horizontal-viewport">
        <div ref={trackRef} className="projects-horizontal-track">
          {featuredProjects.map((project, idx) => (
            <article 
              key={project.id} 
              className={`project-slide-panel ${idx === activeProjectIndex ? 'panel-active' : ''}`}
              data-cursor-text="VIEW PROJECT"
            >
              <div className="content-wrapper panel-inner-grid">
                
                {/* Left Column: Architecture, Narrative & Specs */}
                <div className="panel-content-col">
                  <div className="panel-meta-row">
                    <span className="project-index-large">{project.number}</span>
                    <span className="project-category-badge">{project.category}</span>
                    <span className="project-status-pill">{project.status}</span>
                  </div>

                  <h3 className="project-panel-title">{project.title}</h3>
                  <p className="project-panel-tagline">{project.tagline}</p>
                  
                  <p className="project-panel-desc">
                    {project.description}
                  </p>

                  {/* High-level technical highlight pills */}
                  <div className="panel-metrics-row">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="panel-metric-chip">
                        <span className="metric-chip-label">{h.label}</span>
                        <span className="metric-chip-val">{h.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills */}
                  <div className="project-tech-pills">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="panel-cta-group">
                    <button 
                      onClick={() => setSelectedProject(project)} 
                      className="pill-btn pill-btn-primary"
                      data-magnetic
                      data-cursor-text="EXPAND"
                    >
                      <span className="pill-label">
                        <span className="label-default">VIEW ARCHITECTURE</span>
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
                          <span>SOURCE CODE • REPO •&nbsp;</span>
                        </span>
                      </span>
                      <span className="pill-icon">→</span>
                    </a>
                  </div>

                  <span className="panel-artwork-disclaimer">
                    * Conceptual architectural artwork representing system components and inference pipeline.
                  </span>
                </div>

                {/* Right Column: Cinematic 16:9 Visual Frame */}
                <div className="panel-visual-col">
                  <div 
                    className="panel-image-card clip-reveal-frame"
                    onClick={() => setSelectedProject(project)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open architectural breakdown for ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                  >
                    <img 
                      src={project.coverImage} 
                      alt={`${project.title} Architectural Cover`} 
                      className="project-cover-image"
                      onError={(e) => {
                        if (project.fallbackImage) e.currentTarget.src = project.fallbackImage;
                      }}
                    />
                    
                    <div className="image-hover-curtain">
                      <div className="hover-badge-content">
                        <span className="hover-badge-title">EXPLORE ARCHITECTURE</span>
                        <span className="hover-badge-sub">Click for full system breakdown & metrics ↗</span>
                      </div>
                    </div>

                    <div className="panel-image-caption">
                      <span className="caption-tag">{project.dataset}</span>
                      <span className="caption-action">CLICK TO EXPAND ↗</span>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
