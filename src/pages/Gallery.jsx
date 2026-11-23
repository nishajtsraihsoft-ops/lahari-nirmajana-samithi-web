import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Film, 
  Image as ImageIcon, 
  Play, 
  Calendar, 
  MapPin, 
  ZoomIn,
  Flame,
  Users,
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import LightboxModal from '../components/LightboxModal';
import { galleryItems, videoItems, galleryCategories } from '../data/gallery';
import { samithiContact } from '../data/objectives';

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
    <div className="bg-[#ECEFF1]/70 py-6 sm:py-10 px-3 sm:px-6 lg:px-8 min-h-screen text-slate-800 selection:bg-themeBlue selection:text-white">
      
      {/* =========================================================================
          MAIN BOXED CONTAINER (Matches Editorial Boxed Layout of Reference Design)
         ========================================================================= */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl sm:rounded-2xl border border-slate-200/80 overflow-hidden">
        
        {/* =======================================================================
            SECTION 1: TOP HERO SECTION
            Left: 3 Vertical Photo Strips with Attached Red, Blue, and Green Color Tags
            Right: Top Action Button + "Media Gallery" Heading + Malayalam Description
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: 3 Vertical Photo Strips with Color Banner Bars (7 Cols on LG) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 h-64 sm:h-80 md:h-96">
                
                {/* Photo Strip 1 (Full Color, No Grayscale) */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100">
                    <img 
                      src="/hero-image.png" 
                      alt="Historic Anti-drug Campaign Archive" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Red Solid Tag: RALLIES */}
                  <div className="bg-[#E53935] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      RALLIES
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      MASS MARCHES
                    </div>
                  </div>
                </div>

                {/* Photo Strip 2 (Full Color, No Grayscale) */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100">
                    <img 
                      src="/hero-image-2.jpg" 
                      alt="State Conference Moments" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Blue Solid Tag: CONVENTIONS */}
                  <div className="bg-[#1565C0] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      EVENTS
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      CONFERENCES
                    </div>
                  </div>
                </div>

                {/* Photo Strip 3 (Full Color, No Grayscale) */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100">
                    <img 
                      src="/hero-image-3.jpg" 
                      alt="Campus Vigilance Sessions" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Green Solid Tag: CAMPUS */}
                  <div className="bg-[#198754] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      CAMPUS
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      YOUTH FORUMS
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Editorial Intro Block (5 Cols on LG) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              
              {/* Top Action Button */}
              <div className="flex justify-start lg:justify-end">
                <button
                  type="button"
                  onClick={() => displayedItems.length > 0 && handleOpenLightbox(displayedItems[0])}
                  className="bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-6 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200 active:scale-95 flex items-center gap-1.5"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>VIEW FULL ARCHIVE</span>
                </button>
              </div>

              {/* Bold Display Heading */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-sans leading-none">
                  Gallery
                </h1>

                {/* Teal/Blue Uppercase Subtitle */}
                <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#0284C7] leading-relaxed">
                  DOCUMENTING TWO DECADES OF CITIZEN RESISTANCE ACROSS KERALA
                </h2>

                {/* Authentic Malayalam Narrative Content */}
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-2.5 font-normal">
                  <p>
                    ലഹരി നിർമ്മാർജന സമിതിയുടെ സംസ്ഥാനതല ക്യാമ്പയിനുകൾ, സമ്മേളനങ്ങൾ, പടയൊരുക്കം ക്യാമ്പ്, കോട്ടക്കുന്ന് ജനകീയ സമരം എന്നിവയുടെ അപൂർവ്വ ഫോട്ടോകളും വീഡിയോ ശേഖരവും.
                  </p>
                  <p>
                    2005-ൽ മാറാക്കരയിൽ ആരംഭിച്ച മുന്നേറ്റത്തിന്റെ ചരിത്ര മുഹൂർത്തങ്ങൾ ഇവിടെ രേഖപ്പെടുത്തിയിരിക്കുന്നു.
                  </p>
                </div>
              </div>

              {/* Quick Action Badges */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#E53935]">
                  {displayedItems.length} MEDIA RECORDS ARCHIVED
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-[11px] font-bold text-slate-500 font-malayalam">
                  ഫോട്ടോ &amp; വീഡിയോകൾ
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 2: THREE COLUMNS WITH DARK HEADERS (Matches Section 2 of Reference)
            Card 1: PADAYORUKKAM MEMORIES
            Card 2: CONFERENCES ARCHIVE
            Card 3: SCHOOL & CAMPUS ARCHIVE
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: PADAYORUKKAM MEMORIES */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-[#E53935]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  PADAYORUKKAM CAMP
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  പാണക്കാട് അബ്ബാസ് അലി തങ്ങളുടെ വസതിയിൽ നിന്നാരംഭിച്ച് കളക്ടറേറ്റിലേക്ക് 600-ലധികം പ്രവർത്തകർ പങ്കെടുത്ത ഐതിഹാസിക റാലിയുടെ ചിത്രങ്ങൾ.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('camps')}
                    className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    VIEW PHOTOS
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: CONFERENCES ARCHIVE */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#0284C7]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  DISTRICT CONFERENCES
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  2008-ലെ മലപ്പുറം ജില്ലാ സമ്മേളനം, 2013-ലെ സംസ്ഥാന കമ്മിറ്റി രൂപീകരണ സമ്മേളനം, 2022-ലെ മക്കരപ്പറമ്പ് സമ്മേളനം എന്നിവയുടെ ചിത്രങ്ങൾ.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('conferences')}
                    className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    VIEW CONFERENCES
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: SCHOOL & CAMPUS ARCHIVE */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#198754]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  CAMPUS OUTREACH
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  കേരളത്തിലെ വിവിധ ഹൈസ്കൂളുകളിലും കോളേജുകളിലും വിദ്യാർത്ഥികൾക്കായി സംഘടിപ്പിച്ച ബോധവൽക്കരണ സെമിനാറുകളുടെയും പ്രതിജ്ഞകളുടെയും ഫോട്ടോകൾ.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('schools')}
                    className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    VIEW SESSIONS
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 3: MEDIA GRID WITH CATEGORY FILTERS & LIGHTBOX
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200">
          
          {/* Header Bar with Category Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-widest uppercase text-slate-900 font-sans">
                HISTORIC PHOTOGRAPHY &amp; MEDIA
              </h3>
              <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                പ്രവർത്തന ചരിത്ര ചിത്രങ്ങൾ
              </span>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-bold rounded transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-[#262C38] text-white shadow-2xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.englishName} ({cat.name})
                </button>
              ))}
            </div>
          </div>

          {/* Media Grid (100% Full Color Photos, No Grayscale) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="group cursor-pointer bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                    
                    {/* Media Type Icon Badge */}
                    <div className="absolute top-3 left-3 bg-[#E53935] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-xs flex items-center gap-1">
                      {item.type === 'video' ? <Play className="w-3 h-3 fill-white" /> : <ImageIcon className="w-3 h-3" />}
                      <span>{item.type === 'video' ? 'Video' : 'Photo'}</span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 text-white text-[11px] font-semibold flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded font-malayalam">
                      <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                      <span className="truncate max-w-[200px]">{item.location}</span>
                    </div>
                  </div>

                  {/* Caption Content */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold font-mono">
                      <span>{item.date}</span>
                      <span className="text-[#0284C7] font-sans font-bold uppercase">{item.category}</span>
                    </div>

                    <h4 className="text-sm font-bold font-malayalam text-slate-900 group-hover:text-themeBlue transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 font-malayalam line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-4 pt-0">
                  <div className="w-full text-center py-2 bg-slate-50 group-hover:bg-[#262C38] group-hover:text-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>ENLARGE PHOTO</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =======================================================================
            SECTION 4: STATE HEADQUARTERS & ACTION BANNER
           ======================================================================= */}
        <section className="bg-slate-900 text-white p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                STATE HEADQUARTERS &bull; കുന്നുമ്മൽ, മലപ്പുറം
              </span>
              <p className="text-sm text-slate-300 font-malayalam">
                {samithiContact.name} &bull; {samithiContact.fullAddress}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3 text-xs text-slate-400 pt-1">
                <span>24x7 Helpline: <strong className="text-white">{samithiContact.helpline}</strong></span>
                <span>&bull;</span>
                <span>14 Active Districts Across Kerala</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${samithiContact.helpline}`}
                className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded shadow-sm transition-colors flex items-center gap-1.5"
              >
                <span>CALL HELPLINE</span>
              </a>
            </div>
          </div>
        </section>

      </div>

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
