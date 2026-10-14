import React from 'react';

export default function Marquee({ items, speed = '28s' }) {
  const defaultItems = [
    "BUILDING USEFUL AI",
    "FULL-STACK DEVELOPMENT",
    "FROM IDEAS TO WORKING PRODUCTS",
    "JAVA 17 & SPRING BOOT",
    "APPLIED GENAI & HIGH-DIMENSIONAL RAG",
    "FASTAPI & PYTHON",
    "4,804 MOVIES EMBEDDED",
    "3,072-D VECTOR PIPELINES",
    "5★ JAVA PROBLEM SOLVING"
  ];

  const displayItems = items || defaultItems;

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track" style={{ animationDuration: speed }}>
        <div className="marquee-content">
          {displayItems.map((item, idx) => (
            <React.Fragment key={`marquee-1-${idx}`}>
              <span>{item}</span>
              <span className="marquee-dot">◆</span>
            </React.Fragment>
          ))}
        </div>
        {/* Duplicate track to guarantee seamless loop without stutter */}
        <div className="marquee-content">
          {displayItems.map((item, idx) => (
            <React.Fragment key={`marquee-2-${idx}`}>
              <span>{item}</span>
              <span className="marquee-dot">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
