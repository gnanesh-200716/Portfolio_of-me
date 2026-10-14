import React, { useState } from 'react';
import { Activity, Bluetooth, Radio } from 'lucide-react';

export const AxonBandPreview: React.FC = () => {
  const [selectedGesture, setSelectedGesture] = useState<'fist' | 'swipe' | 'pinch' | 'wave'>('fist');

  const gestureDetails = {
    fist: {
      name: 'Closed Fist (Flex)',
      action: 'Toggle Smart Appliance / Lamp',
      target: 'Smart Lamp State: ON',
      voltage: '1.42 mV',
      confidence: '96.2%',
      waveFrequency: 'High Amplitude Burst',
    },
    swipe: {
      name: 'Swipe Right (Extensor)',
      action: 'Next Slide / Track Control',
      target: 'Computer Media: Slide +1',
      voltage: '0.89 mV',
      confidence: '94.8%',
      waveFrequency: 'Biphasic Pulse Train',
    },
    pinch: {
      name: 'Index Pinch (Precision)',
      action: 'Volume / Intensity Control',
      target: 'System Audio: 65% (+5%)',
      voltage: '0.64 mV',
      confidence: '97.5%',
      waveFrequency: 'Micro-EMG Modulated',
    },
    wave: {
      name: 'Hand Wave (Assistive)',
      action: 'Emergency / Voice Assist Cue',
      target: 'Speech Synthesis Triggered',
      voltage: '1.15 mV',
      confidence: '95.1%',
      waveFrequency: 'Sustained Sinusoidal',
    },
  };

  const current = gestureDetails[selectedGesture];

  return (
    <div className="preview-container axon-preview">
      {/* Simulation Top Bar */}
      <div className="preview-topbar">
        <div className="preview-badge-status">
          <Activity size={13} className="cam-icon" />
          <span>EMG BIO-SIGNAL TELEMETRY &bull; 8-CH SENSORS</span>
        </div>
        <div className="ble-status-pill">
          <Bluetooth size={12} />
          <span>BLE Connected</span>
        </div>
      </div>

      {/* Interactive Gesture Selector */}
      <div className="gesture-btn-row">
        {(['fist', 'swipe', 'pinch', 'wave'] as const).map((g) => (
          <button
            key={g}
            className={`gesture-btn ${selectedGesture === g ? 'active' : ''}`}
            onClick={() => setSelectedGesture(g)}
          >
            {g.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Waveform Canvas & Signal Visualizer */}
      <div className="axon-signal-display">
        <div className="signal-waveform-box">
          <div className="waveform-grid-lines">
            <div className="wave-line-h" />
            <div className="wave-line-h" />
            <div className="wave-line-h" />
          </div>

          {/* Animated SVG Waveform */}
          <svg className="waveform-svg" viewBox="0 0 400 80" preserveAspectRatio="none">
            <path
              d={
                selectedGesture === 'fist'
                  ? 'M0,40 Q30,10 60,70 T120,40 T180,10 T240,70 T300,40 T360,20 T400,40'
                  : selectedGesture === 'swipe'
                  ? 'M0,40 Q40,40 80,15 T160,65 T240,40 T320,40 T400,40'
                  : selectedGesture === 'pinch'
                  ? 'M0,40 Q25,25 50,55 T100,40 T150,30 T200,50 T250,40 T300,35 T350,45 T400,40'
                  : 'M0,40 Q50,10 100,70 T200,10 T300,70 T400,40'
              }
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animated-wave-path"
            />
          </svg>
        </div>

        {/* Realtime Decoded Payload */}
        <div className="axon-decoded-panel">
          <div className="decoded-header">
            <Radio size={14} className="radio-pulse" />
            <span>Decoded Command: <strong>{current.name}</strong></span>
          </div>
          <div className="decoded-grid">
            <div className="decoded-cell">
              <span className="cell-k">Signal Voltage</span>
              <span className="cell-v">{current.voltage}</span>
            </div>
            <div className="decoded-cell">
              <span className="cell-k">Confidence</span>
              <span className="cell-v font-accent">{current.confidence}</span>
            </div>
            <div className="decoded-cell full-span">
              <span className="cell-k">Target Trigger</span>
              <span className="cell-v">{current.target}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="preview-console-footer">
        <span>Hardware: Wrist EMG Sensor Array &bull; AI Classifier: On-Device Lightweight Model</span>
        <span className="console-interactive-hint">Select gesture to test signal decoding</span>
      </div>
    </div>
  );
};
