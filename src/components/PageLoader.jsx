import React from 'react';

/**
 * PageLoader - Simple Suspense fallback with Logo only (no texts)
 */
const PageLoader = () => {
  return (
    <div 
      className="min-h-[70vh] w-full flex items-center justify-center p-6 bg-white/90 select-none"
      role="status"
      aria-label="Loading"
    >
      <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
        {/* Subtle spinning ring around logo */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#1565C0] border-r-[#00A859] animate-spin" />
        
        {/* Center Logo with gentle breathing pulse */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 shadow-xs flex items-center justify-center z-10">
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

export default PageLoader;
