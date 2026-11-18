import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Film } from 'lucide-react';

const LightboxModal = ({ item, items, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close viewer"
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous item"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next item"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Container */}
      <div 
        className="relative max-w-4xl w-full bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Media Display Area */}
        <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[62vh] overflow-hidden">
          {item.type === 'video' ? (
            <div className="w-full aspect-video flex items-center justify-center bg-gray-900">
              <div className="text-center p-6 space-y-3">
                <Film className="w-16 h-16 text-themeRed mx-auto animate-pulse" />
                <h4 className="font-malayalam text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs text-gray-400 font-sans">Duration: {item.duration}</p>
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-themeRed text-white text-xs font-bold rounded-lg hover:bg-themeRed-hover transition-colors font-sans"
                >
                  Play Official Video
                </a>
              </div>
            </div>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[60vh] w-auto max-w-full object-contain mx-auto"
            />
          )}
        </div>

        {/* Caption & Metadata */}
        <div className="p-5 sm:p-6 bg-gray-900 text-white space-y-2">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-sans">
            {item.date && (
              <span className="flex items-center gap-1 text-blue-300">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </span>
            )}
            {item.location && (
              <span className="flex items-center gap-1 text-emerald-300 font-malayalam">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.location}</span>
              </span>
            )}
          </div>
          {/* Main Title in Malayalam */}
          <h3 className="font-malayalam text-base sm:text-lg font-bold">{item.title}</h3>
          {/* Main Description in Malayalam */}
          {item.description && (
            <p className="font-malayalam text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
