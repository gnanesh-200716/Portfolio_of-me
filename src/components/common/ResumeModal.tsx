import React from 'react';
import { X, Download, Printer } from 'lucide-react';
import { personalInfo, educationData } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container resume-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header Bar */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="badge badge-mono">DOCUMENT VIEWER</span>
            <h3>Gnaneshwaran_S_Resume.pdf</h3>
          </div>
          <div className="modal-actions">
            <button className="btn btn-secondary btn-sm" onClick={handlePrint} title="Print or Save as PDF">
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button className="btn btn-primary btn-sm" onClick={handlePrint} title="Download Document">
              <Download size={15} />
              <span>Download</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper */}
        <div className="resume-paper" id="printable-resume">
          {/* Header */}
          <header className="resume-header">
            <h1 className="resume-name">{personalInfo.name}</h1>
            <p className="resume-subtitle">
              Chennai, India &bull; {personalInfo.contacts.email} &bull; linkedin.com/in/gnaneshwarans
            </p>
          </header>

          {/* Career Objective */}
          <section className="resume-section">
            <h2 className="resume-heading">CAREER OBJECTIVE</h2>
            <div className="resume-rule" />
            <p className="resume-body">
              B.Tech CSE (AI &amp; ML) student with hands-on experience building AI-driven and full-stack applications.
              Seeking an opportunity to apply skills in machine learning, software development, and practical problem-solving
              to deliver reliable, real-world solutions.
            </p>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-heading">EDUCATION</h2>
            <div className="resume-rule" />
            <div className="resume-item-row">
              <div>
                <strong>{educationData.degree} ({educationData.specialization})</strong>
                <div className="resume-muted">{educationData.institution}</div>
              </div>
              <div className="resume-date">2024 &ndash; 2028 | CGPA: {educationData.cgpa}</div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-heading">TECHNICAL SKILLS</h2>
            <div className="resume-rule" />
            <ul className="resume-list">
              <li>
                <strong>Programming Languages:</strong> Python, Java, SQL, JavaScript
              </li>
              <li>
                <strong>Web Technologies:</strong> HTML, CSS, JavaScript, React
              </li>
              <li>
                <strong>Design &amp; Tools:</strong> Figma, Git, GitHub, VS Code
              </li>
              <li>
                <strong>Core Areas:</strong> Machine Learning, AI-driven Application Development, Full-Stack Web Development
              </li>
            </ul>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h2 className="resume-heading">FEATURED PROJECTS</h2>
            <div className="resume-rule" />
            
            <div className="resume-project-item">
              <div className="resume-item-row">
                <strong>ParkTrove &mdash; Smart Parking System</strong>
                <span className="resume-tech-tag">Python, Object Detection, IR Sensors, FastAPI, React</span>
              </div>
              <ul className="resume-list">
                <li>Designed a smart parking system combining IR sensors and Python-based object detection for real-time slot availability.</li>
                <li>Processed sensor and detection data through backend APIs and displayed accessible space status on a responsive interface.</li>
                <li>Architected smart navigation and reservation workflows to mitigate parking congestion in crowded areas.</li>
              </ul>
            </div>

            <div className="resume-project-item">
              <div className="resume-item-row">
                <strong>CineMatch &mdash; Movie Discovery Platform</strong>
                <span className="resume-tech-tag">React, JavaScript, TMDB API, CSS</span>
              </div>
              <ul className="resume-list">
                <li>Built a modern movie discovery and recommendation platform tailored to user preference and genre browsing.</li>
                <li>Integrated external TMDB REST APIs to retrieve high-resolution metadata, movie cast, and ratings dynamically.</li>
                <li>Created a clean, responsive user experience prioritizing frictionless search and curated discovery streams.</li>
              </ul>
            </div>

            <div className="resume-project-item">
              <div className="resume-item-row">
                <strong>AXON &mdash; EcoControl: EMG-Based Smart Wristband</strong>
                <span className="resume-tech-tag">AI, EMG Signal Processing, Bluetooth, IoT</span>
              </div>
              <ul className="resume-list">
                <li>Developed a wearable wristband concept capturing EMG muscle signals to enable touch-free gesture control of computers and appliances.</li>
                <li>Processed signals with AI models and transmitted wireless commands via Bluetooth protocol for accessibility.</li>
                <li>Aimed at improving human-computer interaction for physically challenged users through assistive technology.</li>
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h2 className="resume-heading">EXPERIENCE &amp; TRAINING</h2>
            <div className="resume-rule" />
            <div className="resume-item-row">
              <div>
                <strong>Full-Stack Development Internship</strong> &mdash; <span>Mindenious (in collaboration with Wipro)</span>
              </div>
              <div className="resume-date">Internship Program</div>
            </div>
            <p className="resume-body" style={{ marginTop: '4px' }}>
              Participated in a comprehensive full-stack development program gaining practical exposure to software development, React component architecture, and modern web application workflows.
            </p>
          </section>

          {/* Certifications & Recognition */}
          <section className="resume-section">
            <h2 className="resume-heading">CERTIFICATIONS &amp; ACHIEVEMENTS</h2>
            <div className="resume-rule" />
            <ul className="resume-list">
              <li>
                <strong>Python for Data Science (75%)</strong> &mdash; Verified Academic Certification by NPTEL / IIT Madras.
              </li>
              <li>
                <strong>Avishkar Inter-College Symposium Finalist</strong> &mdash; Recognized as a finalist for two consecutive editions.
              </li>
              <li>
                <strong>National-Level Hackathon Experience</strong> &mdash; Presented Axon Control Band gesture recognition hardware concept.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
