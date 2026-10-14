import React, { useState } from 'react';
import { Car, Camera, CheckCircle, Cpu, RefreshCw } from 'lucide-react';

export const ParkTrovePreview: React.FC = () => {
  // Slots: true = occupied, false = available
  const [slots, setSlots] = useState<{ id: string; occupied: boolean; label: string }[]>([
    { id: 'A1', occupied: true, label: 'Slot A1 (Sedan)' },
    { id: 'A2', occupied: false, label: 'Slot A2 (Available)' },
    { id: 'A3', occupied: true, label: 'Slot A3 (SUV)' },
    { id: 'B1', occupied: true, label: 'Slot B1 (Hatchback)' },
    { id: 'B2', occupied: false, label: 'Slot B2 (Available)' },
    { id: 'B3', occupied: false, label: 'Slot B3 (Available)' },
  ]);

  const [aiConfidence, setAiConfidence] = useState(94.8);
  const [isScanning, setIsScanning] = useState(false);

  const toggleSlot = (id: string) => {
    setSlots((prev) =>
      prev.map((s) => (s.id === id ? { ...s, occupied: !s.occupied } : s))
    );
  };

  const handleRescan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setAiConfidence(Number((92 + Math.random() * 6).toFixed(1)));
      setIsScanning(false);
    }, 600);
  };

  const occupiedCount = slots.filter((s) => s.occupied).length;
  const availableCount = slots.length - occupiedCount;
  const occupancyRate = Math.round((occupiedCount / slots.length) * 100);

  return (
    <div className="preview-container parktrove-preview">
      {/* Simulation Top Bar */}
      <div className="preview-topbar">
        <div className="preview-badge-status">
          <Camera size={13} className="cam-icon" />
          <span>VISION DETECTOR &bull; CAMERA FEED 01</span>
        </div>
        <div className="preview-metrics">
          <span className="live-metric">
            <strong>{availableCount}</strong> Free Slots
          </span>
          <span className="live-metric">
            <strong>{occupancyRate}%</strong> Occupied
          </span>
          <button
            className={`btn-reanalyze ${isScanning ? 'spinning' : ''}`}
            onClick={handleRescan}
            title="Trigger AI Frame Detection"
          >
            <RefreshCw size={12} />
            <span>Scan</span>
          </button>
        </div>
      </div>

      {/* Parking Grid Visualization */}
      <div className="parking-lot-grid">
        {slots.map((slot) => (
          <button
            key={slot.id}
            className={`parking-slot-box ${slot.occupied ? 'occupied' : 'available'}`}
            onClick={() => toggleSlot(slot.id)}
            title={`Click to simulate vehicle movement in ${slot.id}`}
          >
            <div className="slot-header">
              <span className="slot-id">{slot.id}</span>
              <span className={`slot-status-indicator ${slot.occupied ? 'bg-occupied' : 'bg-free'}`}>
                {slot.occupied ? 'OCCUPIED' : 'FREE'}
              </span>
            </div>

            <div className="slot-visual-center">
              {slot.occupied ? (
                <div className="slot-car-icon">
                  <Car size={22} />
                  <span className="detection-box-label">YOLO: 98%</span>
                </div>
              ) : (
                <div className="slot-free-indicator">
                  <CheckCircle size={18} />
                  <span>Tap to Park</span>
                </div>
              )}
            </div>

            <div className="slot-footer-sensor">
              <span>IR &bull; Active</span>
            </div>
          </button>
        ))}
      </div>

      {/* Simulation Telemetry Console */}
      <div className="preview-console-footer">
        <div className="console-line">
          <Cpu size={12} />
          <span>FastAPI /cv/predict &bull; Confidence: <strong>{aiConfidence}%</strong> &bull; Latency: <strong>38ms</strong></span>
        </div>
        <span className="console-interactive-hint">Interactive Simulation &mdash; Click any slot to toggle</span>
      </div>
    </div>
  );
};
