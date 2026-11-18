import React from 'react';

const SectionTitle = ({ 
  badge, 
  title, 
  malayalamTitle, 
  subtitle, 
  center = true, 
  badgeColor = 'blue',
  className = ''
}) => {
  const badgeColors = {
    blue: 'bg-themeBlue-light/80 text-themeBlue border-themeBlue/25',
    green: 'bg-themeGreen-light/80 text-themeGreen-dark border-themeGreen/25',
    red: 'bg-themeRed-light/80 text-themeRed border-themeRed/25',
  };

  const dotColors = {
    blue: 'bg-themeBlue',
    green: 'bg-themeGreen',
    red: 'bg-themeRed',
  };

  return (
    <div className={`mb-8 sm:mb-12 lg:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase border shadow-2xs mb-3 transition-transform hover:scale-102 ${badgeColors[badgeColor] || badgeColors.blue}`}>
          <span className={`w-2 h-2 rounded-full ${dotColors[badgeColor] || dotColors.blue} animate-pulse`}></span>
          <span>{badge}</span>
        </div>
      )}

      {malayalamTitle && (
        <p className="font-malayalam text-base sm:text-lg lg:text-xl font-bold text-themeGreen mb-1 tracking-wide">
          {malayalamTitle}
        </p>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      {center && (
        <div className="flex items-center justify-center gap-1.5 mt-5">
          <span className="w-10 sm:w-14 h-1 bg-themeBlue rounded-full"></span>
          <span className="w-3.5 sm:w-4 h-1 bg-themeGreen rounded-full"></span>
          <span className="w-2 sm:w-2.5 h-1 bg-themeRed rounded-full"></span>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
