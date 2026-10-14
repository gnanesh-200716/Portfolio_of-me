import React, { useState } from 'react';
import { Terminal, Code2, Cpu, Check, Copy } from 'lucide-react';

export const HeroInteractiveWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'arch' | 'ai' | 'status'>('arch');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    arch: `// engineer_profile.ts
export const gnaneshwaran = {
  name: "Gnaneshwaran S",
  status: "3rd Year B.Tech CSE (AI & ML)",
  institution: "Vels University, Chennai",
  coreFocus: [
    "Software Engineering",
    "Artificial Intelligence",
    "Full-Stack Web Architectures"
  ],
  stack: ["Python", "Java", "React", "FastAPI", "SQL"],
  mission: "Building intelligent software with purpose."
};`,
    ai: `# vision_inference.py
import torch
import cv2

class SmartSlotDetector:
    def __init__(self, confidence_threshold=0.88):
        self.conf = confidence_threshold
        self.status = "Model Loaded: YOLO / Vision"

    def predict_occupancy(self, frame_tensor):
        # Real-time vehicle detection & parking state
        slots_occupied = [1, 0, 1, 1, 0, 1]
        availability_rate = 0.67
        return {
            "available_slots": 2,
            "occupancy_rate": availability_rate,
            "confidence": 0.94
        }`,
    status: `// live_telemetry.json
{
  "engineer": "Gnaneshwaran S",
  "academic_cgpa": 7.5,
  "specialization": "AI & ML",
  "projects_built": ["ParkTrove", "CineMatch", "Axon Control Band"],
  "certifications": ["NPTEL Python (75% - IIT Madras)"],
  "availability": "Open to Software Engineering Opportunities",
  "status_code": 200
}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="hero-widget-container">
      <div className="hero-widget-window">
        {/* Terminal Title Bar */}
        <div className="hero-widget-header">
          <div className="window-dots">
            <span className="window-dot dot-red" />
            <span className="window-dot dot-yellow" />
            <span className="window-dot dot-green" />
          </div>

          <div className="widget-tab-group">
            <button
              className={`widget-tab ${activeTab === 'arch' ? 'active' : ''}`}
              onClick={() => setActiveTab('arch')}
            >
              <Code2 size={13} />
              <span>profile.ts</span>
            </button>
            <button
              className={`widget-tab ${activeTab === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveTab('ai')}
            >
              <Cpu size={13} />
              <span>vision.py</span>
            </button>
            <button
              className={`widget-tab ${activeTab === 'status' ? 'active' : ''}`}
              onClick={() => setActiveTab('status')}
            >
              <Terminal size={13} />
              <span>telemetry</span>
            </button>
          </div>

          <button
            className="widget-copy-btn"
            onClick={handleCopy}
            title="Copy snippet"
            aria-label="Copy snippet"
          >
            {copied ? <Check size={14} className="copied-check" /> : <Copy size={14} />}
          </button>
        </div>

        {/* Code Content */}
        <div className="hero-widget-body">
          <pre className="code-block">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Console Status Bar */}
        <div className="hero-widget-footer">
          <div className="widget-status-left">
            <span className="pulse-dot" />
            <span>AI / ML &bull; Python &bull; React &bull; Full-Stack</span>
          </div>
          <div className="widget-status-right">
            <span>UTF-8</span>
            <span>2028 Batch</span>
          </div>
        </div>
      </div>
    </div>
  );
};
