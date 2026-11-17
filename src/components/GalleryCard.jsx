import React from 'react';
import { Calendar, MapPin, ZoomIn, Play, Film } from 'lucide-react';

const GalleryCard = ({ item, onClick }) => {
  const isVideo = item.type === 'video';

  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-blue-subtle hover:shadow-blue-hover transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1.5"
    >
      {/* Image Container */}
      <div className="relative h-60 sm:h-64 overflow-hidden bg-gray-950">
        <img
          src={isVideo ? item.thumbnail : item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent"></div>

        {/* Hover Zoom or Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-13 h-13 rounded-2xl bg-white/95 text-gray-900 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
            {isVideo ? (
              <Play className="w-6 h-6 text-themeRed fill-themeRed translate-x-0.5" />
            ) : (
              <ZoomIn className="w-6 h-6 text-themeBlue" />
            )}
          </div>
        </div>

        {/* Type / Category Badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          {isVideo ? (
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-themeRed text-white flex items-center gap-1.5 shadow-md">
              <Film className="w-3.5 h-3.5" />
              <span>{item.duration || 'Video'}</span>
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-themeBlue text-white shadow-md">
              Photo
            </span>
          )}
        </div>

        {/* Metadata in Image */}
        <div className="absolute bottom-3.5 left-4 right-4 text-white">
          <div className="flex items-center gap-3 text-[11px] text-gray-300 mb-1">
            {item.date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-blue-300" />
                <span>{item.date}</span>
              </span>
            )}
            {item.location && (
              <span className="flex items-center gap-1 truncate">
                <MapPin className="w-3 h-3 text-emerald-300" />
                <span>{item.location}</span>
              </span>
            )}
          </div>
          <p className="font-malayalam text-xs text-green-300 font-bold line-clamp-1">
            {item.malayalamTitle}
          </p>
          <h4 className="text-sm sm:text-base font-extrabold text-white line-clamp-2 leading-snug">
            {item.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
