import React from 'react';
import { MapPin } from 'lucide-react';

const LeaderCard = ({ leader }) => {
  // Determine badge and ring colors based on leadership role & committee
  const getRoleTheme = (category, designation) => {
    if (designation.includes('വനിതാ') || designation.includes("Women's")) {
      return {
        ring: 'ring-rose-500',
        badge: 'bg-rose-600 text-white',
        text: 'text-rose-600',
        bgLight: 'bg-rose-50 text-rose-600 border-rose-200'
      }; // Women's Wing: Rose
    }
    if (designation.includes('പ്രസിഡന്റ്') && !designation.includes('വർക്കിംഗ്') && !designation.includes('ജില്ലാ')) {
      return {
        ring: 'ring-[#E53935]',
        badge: 'bg-[#E53935] text-white',
        text: 'text-[#E53935]',
        bgLight: 'bg-red-50 text-[#E53935] border-red-200'
      }; // State President: Bold Red
    }
    if (designation.includes('വർക്കിംഗ്') || designation.includes('ജനറൽ സെക്രട്ടറി')) {
      return {
        ring: 'ring-[#1565C0]',
        badge: 'bg-[#1565C0] text-white',
        text: 'text-[#1565C0]',
        bgLight: 'bg-blue-50 text-[#1565C0] border-blue-200'
      }; // Working President & Gen Secretary: Deep Blue
    }
    if (designation.includes('ട്രഷറർ')) {
      return {
        ring: 'ring-[#198754]',
        badge: 'bg-[#198754] text-white',
        text: 'text-[#198754]',
        bgLight: 'bg-emerald-50 text-[#198754] border-emerald-200'
      }; // Treasurer: Emerald Green
    }
    if (category === 'malappuram-east') {
      return {
        ring: 'ring-[#0284C7]',
        badge: 'bg-[#0284C7] text-white',
        text: 'text-[#0284C7]',
        bgLight: 'bg-sky-50 text-[#0284C7] border-sky-200'
      }; // East: Sky Blue
    }
    return {
      ring: 'ring-[#0D9488]',
      badge: 'bg-[#0D9488] text-white',
      text: 'text-[#0D9488]',
      bgLight: 'bg-teal-50 text-[#0D9488] border-teal-200'
    }; // West: Teal
  };

  const theme = getRoleTheme(leader.category, leader.designation);

  return (
    <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-2.5 sm:p-4 lg:p-5 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-center">
      
      {/* Top Role Badge */}
      <div className="flex justify-center -mt-1 sm:-mt-1.5 mb-1.5 sm:mb-2.5">
        <span className={`inline-block ${theme.badge} text-[8px] sm:text-[9.5px] lg:text-[10px] font-black uppercase tracking-wider px-2 sm:px-3 py-0.5 rounded-full shadow-xs font-sans truncate max-w-[95%]`}>
          {leader.term || leader.englishDesignation || 'Leader'}
        </span>
      </div>

      <div className="flex flex-col items-center">
        {/* IMAGE: Circular Avatar Portrait - Responsive sizing for 2-column mobile */}
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-2 sm:mb-3">
          <div className={`w-full h-full rounded-full overflow-hidden ring-2 sm:ring-4 ring-offset-1 sm:ring-offset-2 ${theme.ring} shadow-md bg-slate-100 flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <span className="hidden sm:inline-block absolute -bottom-1 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full font-sans shadow-sm whitespace-nowrap">
            {leader.committee}
          </span>
        </div>

        {/* NAME: Malayalam & English Name */}
        <div className="space-y-0.5 w-full">
          <h3 className="font-malayalam text-xs sm:text-base lg:text-lg font-black text-slate-900 group-hover:text-[#1565C0] transition-colors leading-tight line-clamp-1 sm:line-clamp-none">
            {leader.name}
          </h3>
          <p className="font-sans text-[9.5px] sm:text-[11px] font-bold text-slate-500 truncate">
            {leader.englishName}
          </p>
        </div>

        {/* POSITION: Malayalam & English Designation */}
        <div className="mt-1 sm:mt-2 space-y-0.5 w-full">
          <p className={`font-malayalam text-[10.5px] sm:text-xs lg:text-sm font-bold ${theme.text} leading-tight line-clamp-2`}>
            {leader.designation}
          </p>
          {leader.englishDesignation && (
            <p className="hidden sm:block font-sans text-[10px] lg:text-[10.5px] font-semibold text-slate-500 uppercase tracking-wide truncate">
              {leader.englishDesignation}
            </p>
          )}
        </div>
      </div>

      {/* FOOTER: District Location & Committee Tag (Shown only on responsive sm+ screens) */}
      <div className="hidden sm:flex mt-3 pt-2.5 border-t border-slate-100 items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1 font-malayalam text-slate-600 text-[10.5px] truncate">
          <MapPin className="w-3 h-3 text-[#E53935] shrink-0" />
          <span className="truncate">{leader.district}</span>
        </span>
        <span className={`text-[9.5px] font-sans font-bold px-2 py-0.5 rounded-full border shrink-0 ${theme.bgLight}`}>
          {leader.committee}
        </span>
      </div>

    </div>
  );
};

export default LeaderCard;