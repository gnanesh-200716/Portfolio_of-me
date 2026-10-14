import React, { useEffect, useState } from 'react';
import { Search, ArrowRight, FileText, Code2, Sparkles, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNav = (sectionId: string) => {
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const items = [
    {
      id: 'projects',
      icon: <Code2 size={16} />,
      label: 'Projects & Work',
      detail: 'ParkTrove, CineMatch, Axon Control Band',
      action: () => handleNav('projects'),
    },
    {
      id: 'parktrove',
      icon: <Code2 size={16} />,
      label: 'ParkTrove (Smart Parking)',
      detail: 'AI & Computer Vision Platform',
      action: () => {
        onClose();
        onSelectProject('parktrove');
      },
    },
    {
      id: 'cinematch',
      icon: <Code2 size={16} />,
      label: 'CineMatch (Movie Discovery)',
      detail: 'TMDB & Recommendation Logic',
      action: () => {
        onClose();
        onSelectProject('cinematch');
      },
    },
    {
      id: 'axon',
      icon: <Code2 size={16} />,
      label: 'Axon Control Band (IoT/EMG)',
      detail: 'Wearable Gesture Recognition',
      action: () => {
        onClose();
        onSelectProject('axon-band');
      },
    },
    {
      id: 'resume',
      icon: <FileText size={16} />,
      label: 'View / Download Resume',
      detail: 'Verified academic & technical resume',
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'about',
      icon: <Sparkles size={16} />,
      label: 'About Gnaneshwaran',
      detail: 'Background, positioning, and current status',
      action: () => handleNav('about'),
    },
    {
      id: 'skills',
      icon: <Code2 size={16} />,
      label: 'Technical Skills',
      detail: 'Python, Java, React, ML, SQL, Git, Figma',
      action: () => handleNav('skills'),
    },
    {
      id: 'experience',
      icon: <Sparkles size={16} />,
      label: 'Experience & Internship',
      detail: 'Mindenious & Wipro collaboration',
      action: () => handleNav('experience'),
    },
    {
      id: 'achievements',
      icon: <Sparkles size={16} />,
      label: 'Achievements & Certifications',
      detail: 'NPTEL Python 75%, Avishkar Finalist, Hackathon',
      action: () => handleNav('achievements'),
    },
    {
      id: 'education',
      icon: <Sparkles size={16} />,
      label: 'Education & Vels University',
      detail: 'B.Tech CSE (AI/ML) 2024–2028',
      action: () => handleNav('education'),
    },
    {
      id: 'copy-email',
      icon: <Mail size={16} />,
      label: copied ? 'Email Copied!' : 'Copy Email Address',
      detail: personalInfo.contacts.email,
      action: handleCopyEmail,
    },
    {
      id: 'github',
      icon: <GithubIcon size={16} />,
      label: 'GitHub Profile',
      detail: 'github.com/gnanesh-200716',
      action: () => {
        window.open(personalInfo.contacts.github, '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      icon: <LinkedinIcon size={16} />,
      label: 'LinkedIn Profile',
      detail: 'linkedin.com/in/gnaneshwarans',
      action: () => {
        window.open(personalInfo.contacts.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.detail.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-backdrop command-palette-backdrop" onClick={onClose}>
      <div className="command-palette-container" onClick={(e) => e.stopPropagation()}>
        {/* Search input */}
        <div className="command-input-row">
          <Search size={18} className="command-search-icon" />
          <input
            type="text"
            className="command-search-input"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <span className="command-esc-badge" onClick={onClose}>ESC</span>
        </div>

        {/* List */}
        <div className="command-results-list">
          {filtered.length === 0 ? (
            <div className="command-empty">No results found for &ldquo;{query}&rdquo;</div>
          ) : (
            filtered.map((item) => (
              <button key={item.id} className="command-item" onClick={item.action}>
                <div className="command-item-left">
                  <span className="command-item-icon">{item.icon}</span>
                  <div className="command-item-text">
                    <span className="command-item-title">{item.label}</span>
                    <span className="command-item-detail">{item.detail}</span>
                  </div>
                </div>
                <ArrowRight size={14} className="command-item-arrow" />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="command-footer">
          <span>Click to select &bull; ⌘K to toggle</span>
          <span>Gnaneshwaran S Portfolio</span>
        </div>
      </div>
    </div>
  );
};
