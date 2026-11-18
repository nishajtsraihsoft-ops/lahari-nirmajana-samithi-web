import React from 'react';
import { Mail, Phone, MapPin, Award, Shield } from 'lucide-react';

const LeaderCard = ({ leader }) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-blue-subtle hover:shadow-blue-hover transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5">
      {/* Profile Photo Area */}
      <div className="relative pt-7 px-6 flex justify-center bg-gradient-to-b from-blue-50/40 via-white to-white">
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-white shadow-md bg-gray-100 group-hover:scale-103 transition-transform duration-300">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Committee Badge */}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeBlue-light text-themeBlue border border-themeBlue/25 shadow-2xs font-sans">
          {leader.committee}
        </span>
      </div>

      {/* Card Info */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-center space-y-4">
        <div>
          <h3 className="font-malayalam text-lg sm:text-xl font-black text-gray-900 group-hover:text-themeBlue transition-colors leading-snug">
            {leader.name}
          </h3>
          <p className="font-malayalam text-xs sm:text-sm font-bold text-themeRed mt-1">
            {leader.designation}
          </p>
          {leader.englishDesignation && (
            <p className="font-sans text-[11px] font-semibold text-gray-400 mt-0.5">
              {leader.englishDesignation}
            </p>
          )}
          
          <div className="inline-flex items-center gap-1.5 text-xs text-gray-600 mt-2 px-2.5 py-0.5 rounded-full bg-gray-50 border border-gray-200 font-malayalam">
            <MapPin className="w-3.5 h-3.5 text-themeBlue" />
            <span>{leader.district}</span>
          </div>

          {/* Main narrative bio in Malayalam */}
          <p className="font-malayalam mt-3.5 text-xs text-gray-700 leading-relaxed text-left bg-gray-50/80 p-3.5 rounded-2xl border border-gray-100 font-normal">
            {leader.bio}
          </p>
        </div>

        {/* Term Badge (English) */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-themeGreen font-bold font-sans">
          <span>{leader.term || 'Office Bearer'}</span>
          <span className="w-2 h-2 rounded-full bg-themeGreen"></span>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
