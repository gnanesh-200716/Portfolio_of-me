import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Attach contextual hover listeners on project cards and interactive links
    const handleElementHover = () => {
      const hoverTargets = document.querySelectorAll('[data-cursor-text]');
      
      hoverTargets.forEach((target) => {
        target.addEventListener('mouseenter', () => {
          const text = target.getAttribute('data-cursor-text') || 'VIEW';
          setCursorText(text);
          setIsActive(true);
        });

        target.addEventListener('mouseleave', () => {
          setCursorText('');
          setIsActive(false);
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    
    // Initial and periodic scan for dynamically mounted elements
    handleElementHover();
    const interval = setInterval(handleElementHover, 1500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(interval);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className={`custom-cursor ${isActive ? 'cursor-active' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
      aria-hidden="true"
    >
      <span className="cursor-text">{cursorText}</span>
    </div>
  );
}
