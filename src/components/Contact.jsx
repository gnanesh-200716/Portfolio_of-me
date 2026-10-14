import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section dark-block contact-editorial-section" data-theme="dark">
      <div className="content-wrapper">
        
        {/* Section Header */}
        <div className="section-meta-row scroll-reveal">
          <span className="section-num">06</span>
          <span className="section-tag">INITIATE CONVERSATION</span>
        </div>

        {/* Oversized Closing Headline */}
        <div className="contact-headline-container">
          <h2 className="contact-huge-headline">
            <span className="line-mask">
              <span className="line-inner revealed">LET’S BUILD</span>
            </span>
            <span className="line-mask">
              <span className="line-inner revealed">SOMETHING</span>
            </span>
            <span className="line-mask">
              <span className="line-inner revealed accent-yellow">REMARKABLE.</span>
            </span>
          </h2>
        </div>

        {/* Contact Layout */}
        <div className="contact-editorial-grid">
          <div className="contact-narrative-col scroll-reveal">
            <p className="contact-statement">
              Open for <strong>Software Engineering</strong> and <strong>AI/ML developer</strong> internship roles where I can contribute to production systems, learn from experienced architects, and solve real engineering problems.
            </p>

            <div className="contact-action-buttons">
              <button 
                onClick={handleCopyEmail} 
                className="pill-btn pill-btn-primary"
                data-magnetic
                aria-label="Copy email address"
              >
                <span className="pill-label">
                  <span className="label-default">{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
                  <span className="label-marquee">
                    <span>{personalInfo.email} • COPY •&nbsp;</span>
                  </span>
                </span>
                <span className="pill-icon">{copied ? "✓" : "📋"}</span>
              </button>

              <a 
                href={`mailto:${personalInfo.email}`} 
                className="pill-btn pill-btn-outline"
                data-magnetic
              >
                <span className="pill-label">
                  <span className="label-default">OPEN MAIL CLIENT</span>
                  <span className="label-marquee">
                    <span>SEND DIRECT EMAIL •&nbsp;</span>
                  </span>
                </span>
                <span className="pill-icon">✉️</span>
              </a>

              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                className="pill-btn pill-btn-outline"
                data-magnetic
              >
                <span className="pill-label">
                  <span className="label-default">CALL DIRECT</span>
                  <span className="label-marquee">
                    <span>{personalInfo.phone} • CALL •&nbsp;</span>
                  </span>
                </span>
                <span className="pill-icon">📞</span>
              </a>
            </div>
          </div>

          <div className="contact-spec-col scroll-reveal">
            <div className="contact-details-box">
              <div className="detail-row">
                <span className="detail-label">DIRECT EMAIL</span>
                <a href={`mailto:${personalInfo.email}`} className="detail-value link-highlight">
                  {personalInfo.email}
                </a>
              </div>

              <div className="detail-row">
                <span className="detail-label">TELEPHONE</span>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="detail-value">
                  {personalInfo.phone}
                </a>
              </div>

              <div className="detail-row">
                <span className="detail-label">BASE LOCATION</span>
                <span className="detail-value">{personalInfo.location}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">CURRENT AVAILABILITY</span>
                <span className="detail-value status-live">
                  <span className="live-dot-green"></span>
                  {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
