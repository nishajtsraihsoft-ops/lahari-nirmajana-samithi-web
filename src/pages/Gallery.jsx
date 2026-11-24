import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import SEO from '../components/SEO';

const Gallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-[#ECEFF1]/70 py-5 sm:py-8 lg:py-10 px-2.5 sm:px-6 lg:px-8 min-h-screen selection:bg-themeBlue selection:text-white flex flex-col justify-start">
      <SEO
        title="ഫോട്ടോ ഗ്യാലറി | Photo Gallery"
        description="സംസ്ഥാന സമ്മേളനങ്ങൾ, പടയൊരുക്കം ക്യാമ്പുകൾ, റാലികൾ, ബോധവൽക്കരണ സദസ്സുകൾ എന്നിവയുടെ ചിത്രങ്ങൾ അടങ്ങിയ ഔദ്യോഗിക ഗ്യാലറി."
        canonicalPath="/gallery"
        type="website"
        schema={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "ലഹരി നിർമ്മാർജന സമിതി - ഫോട്ടോ ഗ്യാലറി",
          "description": "ലഹരി നിർമ്മാർജന സമിതിയുടെ പ്രധാന പരിപാടികളുടെ ഫോട്ടോകൾ.",
          "url": "https://www.laharinirmarjanasamithi.com/gallery"
        }}
      />
      
      {/* =========================================================================
          BOX-TYPE CONTAINER (Seamless Editorial Frame, Pure Images List)
         ========================================================================= */}
      <div className="max-w-7xl w-full mx-auto bg-white shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden p-4 sm:p-7 lg:p-10">
        
        {/* Images Grid (4 in a row on Desktop, 3 on Tablet, 2 on Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id || idx}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-98"
            >
              <div className="w-full aspect-[3/2] overflow-hidden bg-slate-100">
                <img
                  src={img.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal (Pure Image, No Text) */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            aria-label="Close image viewer"
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors shadow-lg cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Display */}
          <div
            className="relative max-w-5xl max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[activeImageIndex].image}
              alt=""
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;