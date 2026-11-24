import React from 'react';

/**
 * PageLoader - Branded Suspense fallback loader
 * Renders during route chunk loading with LNS emblem, dual spinner, and pulsing progress bar.
 */
const PageLoader = () => {
  return (
    <div 
      className="min-h-[65vh] w-full flex flex-col items-center justify-center p-6 bg-white/90 select-none"
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-center justify-center w-24 h-24 mb-5">
        {/* Outer glowing pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-blue-100/60 animate-ping opacity-25" />
        
        {/* Spinning gradient ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#1565C0] border-r-[#00A859] animate-spin" />
        
        {/* Inner subtle border */}
        <div className="absolute inset-2 rounded-full border border-slate-100" />
        
        {/* Center Logo */}
        <div className="w-16 h-16 rounded-full bg-white p-1.5 shadow-md flex items-center justify-center z-10 border border-slate-100">
          <img 
            src="/LNS-Logo.png" 
            alt="LNS Logo" 
            className="w-full h-full object-contain animate-pulse" 
          />
        </div>
      </div>

      {/* Brand Title */}
      <h3 className="text-sm sm:text-base font-bold text-slate-800 tracking-wide font-malayalam text-center">
        ലഹരി നിർമ്മാർജന സമിതി (LNS)
      </h3>

      {/* Animated mini loading bar */}
      <div className="w-44 h-1 bg-slate-100 rounded-full overflow-hidden mt-3 relative">
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1565C0] via-[#00A859] to-[#1565C0] rounded-full w-1/2 animate-[loadingBar_1.4s_infinite_ease-in-out]" />
      </div>

      {/* Malayalam loading caption */}
      <p className="text-xs text-slate-500 mt-2 font-malayalam flex items-center gap-1">
        <span>ലോഡിംഗ്</span>
        <span className="inline-flex space-x-1 font-mono">
          <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
        </span>
      </p>
    </div>
  );
};

export default PageLoader;
