import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Film, 
  Image as ImageIcon, 
  Play, 
  Sparkles, 
  Calendar, 
  MapPin,
  ExternalLink,
  ZoomIn
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import GalleryCard from '../components/GalleryCard';
import LightboxModal from '../components/LightboxModal';
import { galleryItems, videoItems, galleryCategories } from '../data/gallery';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  // Combine items or filter according to category
  const allMedia = [...galleryItems, ...videoItems];

  const displayedItems = allMedia.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'videos') return item.type === 'video';
    return item.category === selectedCategory;
  });

  const handleOpenLightbox = (item) => {
    const index = displayedItems.findIndex((it) => it.id === item.id);
    setActiveItemIndex(index !== -1 ? index : 0);
  };

  const handleCloseLightbox = () => {
    setActiveItemIndex(null);
  };

  const handlePrev = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev > 0 ? prev - 1 : displayedItems.length - 1));
  };

  const handleNext = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev < displayedItems.length - 1 ? prev + 1 : 0));
  };

  const activeItem = activeItemIndex !== null ? displayedItems[activeItemIndex] : null;

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-br from-themeBlue-dark via-themeBlue to-slate-950 text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-themeGreen-light uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-themeGreen" />
            <span>Documenting Ground Realities</span>
          </div>
          <p className="font-malayalam text-lg sm:text-xl font-bold text-green-300">
            ഫോട്ടോ & മീഡിയ ഗ്യാലറി
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Photo & Media Gallery
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Witness our statewide rallies, school camps, community assemblies, and documentary campaigns against narcotics.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-100 shadow-blue-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-themeBlue text-white shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="text-xs text-gray-500 font-semibold whitespace-nowrap bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-100">
            Showing <span className="font-black text-themeBlue">{displayedItems.length}</span> media items
          </div>
        </div>
      </section>

      {/* 3. Photo & Video Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => handleOpenLightbox(item)}
            />
          ))}
        </div>
      </section>

      {/* 4. Dedicated Video Gallery Section if Not in "videos" filter */}
      {selectedCategory !== 'videos' && (
        <section className="bg-gradient-to-br from-slate-950 via-gray-900 to-themeBlue-dark text-white py-20 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="px-3.5 py-1 bg-themeRed text-white text-xs font-bold rounded-full uppercase tracking-wider inline-block mb-3 shadow-xs">
                Video Documentaries & PSAs
              </span>
              <p className="font-malayalam text-base sm:text-lg font-bold text-themeGreen-light">
                വീഡിയോ സന്ദേശങ്ങളും ഡോക്യുമെന്ററികളും
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-1">
                Visual Campaign Broadcasts
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                Watch our educational documentaries, recovery testimonials, and psychiatric guidance sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {videoItems.map((vid) => (
                <div 
                  key={vid.id}
                  onClick={() => handleOpenLightbox(vid)}
                  className="bg-gray-900/90 rounded-3xl overflow-hidden border border-gray-800 hover:border-themeRed transition-all duration-300 cursor-pointer group flex flex-col hover:-translate-y-1.5 shadow-xl"
                >
                  <div className="relative h-52 bg-gray-950 overflow-hidden">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-106 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-13 h-13 rounded-2xl bg-themeRed text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform">
                        <Play className="w-6 h-6 fill-white translate-x-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-white text-[11px] font-bold">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <p className="font-malayalam text-xs text-green-400 font-semibold">
                        {vid.malayalamTitle}
                      </p>
                      <h4 className="text-base font-extrabold text-white group-hover:text-red-400 transition-colors line-clamp-2 mt-0.5 leading-snug">
                        {vid.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                        {vid.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-800 text-xs text-gray-400 flex items-center justify-between">
                      <span>{vid.date}</span>
                      <span className="text-themeRed font-bold flex items-center gap-1.5">
                        <span>Play Video</span>
                        <Play className="w-3.5 h-3.5 fill-themeRed" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {activeItem && (
        <LightboxModal
          item={activeItem}
          items={displayedItems}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Gallery;
