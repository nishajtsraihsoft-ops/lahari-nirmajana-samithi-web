import React, { useState, useEffect } from 'react';

/**
 * InitialLoader - Simple full-screen branded splash loading screen on initial website open.
 * Displays only the LNS logo with a smooth subtle spinning accent ring and gentle pulse (no texts).
 * Fades out smoothly into the website after a brief moment.
 */
const InitialLoader = () => {
  const [show, setShow] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show logo splash for ~1.2s, then fade out over 600ms
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-white flex items-center justify-center select-none transition-all duration-700 ease-out ${
        fading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="status"
      aria-label="Loading"
    >
      <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28">
        {/* Subtle dual-color spinning accent ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#1565C0] border-r-[#00A859] animate-spin" />

        {/* Center Logo with gentle breathing pulse */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1.5 shadow-sm flex items-center justify-center z-10">
          <img
            src="/LNS-Logo.png"
            alt="LNS Logo"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
