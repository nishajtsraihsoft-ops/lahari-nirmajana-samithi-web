import React from 'react';
import { Mail, Phone, MapPin, Award, Shield } from 'lucide-react';

const LeaderCard = ({ leader }) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-blue-subtle hover:shadow-blue-hover transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5">
      {/* Profile Photo Area with Modern Gradient Halo */}
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
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeBlue-light text-themeBlue border border-themeBlue/25 shadow-2xs">
          {leader.committee}
        </span>
      </div>

      {/* Card Info */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-center space-y-4">
        <div>
          <p className="font-malayalam text-xs font-bold text-themeGreen mb-1">
            {leader.malayalamName}
          </p>
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 group-hover:text-themeBlue transition-colors leading-snug">
            {leader.name}
          </h3>
          <p className="text-xs sm:text-sm font-bold text-themeRed mt-1">
            {leader.designation}
          </p>
          
          <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 mt-2 px-2.5 py-0.5 rounded-full bg-gray-50 border border-gray-200">
            <MapPin className="w-3.5 h-3.5 text-themeBlue" />
            <span>{leader.district} District</span>
          </div>

          <p className="mt-3.5 text-xs text-gray-600 line-clamp-3 leading-relaxed text-left bg-gray-50/80 p-3.5 rounded-2xl border border-gray-100">
            {leader.bio}
          </p>
        </div>

        {/* Contact info / Action buttons */}
        <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between gap-2 text-xs">
          {leader.phone ? (
            <a
              href={`tel:${leader.phone}`}
              className="flex-1 py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-themeBlue hover:text-white text-gray-700 border border-gray-200 transition-all flex items-center justify-center gap-1.5 font-bold shadow-2xs"
              title="Call Leader"
            >
              <Phone className="w-3.5 h-3.5 text-themeBlue group-hover:text-white" />
              <span className="truncate">{leader.phone}</span>
            </a>
          ) : (
            <div className="flex-1 text-gray-400 text-[11px] italic py-2">Official Liaison</div>
          )}

          {leader.email && (
            <a
              href={`mailto:${leader.email}`}
              className="p-2.5 rounded-xl bg-gray-50 hover:bg-themeGreen hover:text-white text-gray-700 border border-gray-200 transition-all flex items-center justify-center shadow-2xs"
              title={`Email: ${leader.email}`}
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4 text-themeGreen hover:text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
