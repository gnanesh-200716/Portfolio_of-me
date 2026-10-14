import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Create a prefilled mailto link as reliable client action
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Gnaneshwaran,\n\n${message}\n\nBest regards,\n${name}\n${email}`);
    
    window.location.href = `mailto:${personalInfo.contacts.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-card card">
          <div className="contact-grid">
            {/* Left Info Column */}
            <div className="contact-info-col">
              <div className="section-eyebrow">
                <span className="pulse-dot" />
                <span>INQUIRIES &bull; COLLABORATION</span>
              </div>
              
              <h2 className="contact-heading">Let&rsquo;s Build Something.</h2>
              
              <p className="contact-subtext">
                Have an idea, opportunity, or project worth discussing? I&rsquo;d be happy to connect.
              </p>

              {/* Direct Email Action Box */}
              <div className="contact-direct-box">
                <div className="email-display-row">
                  <Mail size={18} className="contact-icon-accent" />
                  <span className="email-text">{personalInfo.contacts.email}</span>
                </div>

                <div className="email-buttons-row">
                  <a
                    href={`mailto:${personalInfo.contacts.email}`}
                    className="btn btn-primary btn-sm"
                  >
                    <Mail size={14} />
                    <span>Send Me an Email</span>
                  </a>

                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="copied-check" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-social-links">
                <span className="social-links-title">Online Profiles:</span>
                <div className="social-buttons-list">
                  <a
                    href={personalInfo.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-tag"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={personalInfo.contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-tag"
                  >
                    <LinkedinIcon size={15} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Message Composer Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <div className="form-header">
                  <MessageSquare size={16} className="form-header-icon" />
                  <h4>Quick Message Composer</h4>
                </div>

                <form onSubmit={handleSendMessage} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Alex Miller"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="e.g. alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      rows={4}
                      placeholder="Tell me about your project, team, or opportunity..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary full-width">
                    <Send size={15} />
                    <span>Send Message via Email Client</span>
                  </button>

                  {sentSuccess && (
                    <div className="form-success-banner">
                      <Check size={15} />
                      <span>Email draft opened in your default email client!</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
