import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Search, 
  Award, 
  Users, 
  MapPin, 
  HeartHandshake,
  Calendar,
  Building,
  PhoneCall,
  Clock,
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { leaders, leadershipCategories } from '../data/leaders';
import { samithiContact } from '../data/objectives';

const Leadership = ({ onOpenJoinModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter leaders by category and search query
  const filteredLeaders = leaders.filter((leader) => {
    const matchesCategory = 
      selectedCategory === 'all' || 
      leader.category === selectedCategory;

    const matchesSearch = 
      leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (leader.englishName && leader.englishName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (leader.englishDesignation && leader.englishDesignation.toLowerCase().includes(searchQuery.toLowerCase())) ||
      leader.district.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#ECEFF1]/70 py-6 sm:py-10 px-3 sm:px-6 lg:px-8 min-h-screen text-slate-800 selection:bg-themeBlue selection:text-white">
      
      {/* =========================================================================
          MAIN BOXED CONTAINER (Matches Editorial Boxed Layout of Reference Design)
         ========================================================================= */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl sm:rounded-2xl border border-slate-200/80 overflow-hidden">
        
        {/* =======================================================================
            SECTION 1: TOP HERO SECTION
            Left: 3 Vertical Photo Strips with Attached Red, Blue, and Green Color Tags
            Right: Top Action Button + "Leadership" Heading + Malayalam Description
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: 3 Vertical Photo Strips with Color Banner Bars (7 Cols on LG) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 h-64 sm:h-80 md:h-96">
                
                {/* Photo Strip 1 */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-900">
                    <img 
                      src="/hero-image.png" 
                      alt="State Committee Leadership" 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  {/* Red Solid Tag: STATE APEX */}
                  <div className="bg-[#E53935] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      STATE
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      APEX COUNCIL
                    </div>
                  </div>
                </div>

                {/* Photo Strip 2 */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-900">
                    <img 
                      src="/hero-image-2.jpg" 
                      alt="District Coordinators" 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  {/* Blue Solid Tag: DISTRICT */}
                  <div className="bg-[#1565C0] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      DISTRICT
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      COORDINATION
                    </div>
                  </div>
                </div>

                {/* Photo Strip 3 */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-900">
                    <img 
                      src="/hero-image-3.jpg" 
                      alt="Grassroots Patrons" 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  {/* Green Solid Tag: PATRONS */}
                  <div className="bg-[#198754] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      PATRONS
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      &amp; ADVISORS
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Editorial Intro Block (5 Cols on LG) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              
              {/* Top Red Button */}
              <div className="flex justify-start lg:justify-end">
                <button
                  type="button"
                  onClick={onOpenJoinModal}
                  className="bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-6 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200 active:scale-95"
                >
                  VOLUNTEER WITH US
                </button>
              </div>

              {/* Bold Display Heading */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-sans leading-none">
                  Leaders
                </h1>

                {/* Teal/Blue Uppercase Subtitle */}
                <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#0284C7] leading-relaxed">
                  COMMITTED CITIZENS GUIDING THE CRUSADE AGAINST SUBSTANCE ABUSE
                </h2>

                {/* Authentic Malayalam Narrative Content */}
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-2.5 font-normal">
                  <p>
                    2005 ഒക്ടോബർ 25-ന് മാറാക്കരയിൽ തുടക്കം കുറിച്ച ലഹരി നിർമ്മാർജന സമിതിയുടെ സ്ഥാപക നേതാക്കളും, 2007-ലെ മലപ്പുറം ജില്ലാ കമ്മിറ്റിയുടെയും 2013-ലെ സംസ്ഥാന കമ്മിറ്റിയുടെയും ഭാരവാഹികളുമാണ് സംഘടനയുടെ മുന്നേറ്റത്തിന് ദിശാബോധം നൽകുന്നത്.
                  </p>
                  <p>
                    പൊതുസമൂഹത്തിലും വിദ്യാലയങ്ങളിലും നിരന്തര പ്രതിരോധം സൃഷ്ടിക്കാൻ നേതൃത്വം പ്രതിജ്ഞാബദ്ധമായി പ്രവർത്തിക്കുന്നു.
                  </p>
                </div>
              </div>

              {/* Quick Action Badges */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#leaders-grid"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#E53935] hover:text-[#C62828] underline underline-offset-4"
                >
                  <span>VIEW FULL DIRECTORY &rarr;</span>
                </a>
                <span className="text-slate-300">|</span>
                <span className="text-[11px] font-bold text-slate-500 font-malayalam">
                  നേതൃത്വ നിര
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 2: THREE COLUMNS WITH DARK HEADERS (Matches Section 2 of Reference)
            Card 1: FOUNDER HERITAGE
            Card 2: STATE COMMITTEE
            Card 3: DISTRICT NETWORK
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: FOUNDER HERITAGE */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#0284C7]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  FOUNDER HERITAGE
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്ററുടെ നേതൃത്വത്തിൽ മാറാക്കരയിൽ തുടക്കം കുറിച്ച ലഹരി നിർമ്മാർജന സമിതി, സാധാരണക്കാരായ ജനങ്ങളെ സംഘടിപ്പിച്ച് ലഹരിക്കെതിരെ വിട്ടുവീഴ്ചയില്ലാത്ത പോരാട്ടത്തിന് തുടക്കമിട്ടു.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('കുഞ്ഞിക്കോമു')}
                    className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    FOUNDER PROFILE
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: STATE COMMITTEE */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#E53935]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  STATE COMMITTEE
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  2013-ൽ രൂപീകരിച്ച പ്രഥമ സംസ്ഥാന കമ്മിറ്റി: പ്രസിഡന്റ് ഉബൈദുള്ള, സെക്രട്ടറി ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്റർ, ട്രഷറർ അഷ്റഫ്. കേരളത്തിലെ 14 ജില്ലകളിലേക്കും പ്രവർത്തനം വ്യാപിപ്പിച്ചു.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('state-committee')}
                    className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    STATE COUNCIL
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: DISTRICT COMMITTEES */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#198754]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  DISTRICT WINGS
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  2007 ഏപ്രിൽ 15-ന് രൂപീകരിച്ച പ്രഥമ മലപ്പുറം ജില്ലാ കമ്മിറ്റിയെ തുടർന്ന് വയനാട്, പാലക്കാട്, എറണാകുളം, കണ്ണൂർ, കാസർഗോഡ്, തിരുവനന്തപുരം, കൊല്ലം തുടങ്ങിയ ജില്ലകളിലേക്ക് വിപുലീകരണം.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('district-committees')}
                    className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    DISTRICT HEADS
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 3: LEADERS DIRECTORY WITH SEARCH & FILTERS
           ======================================================================= */}
        <section id="leaders-grid" className="p-6 sm:p-8 lg:p-10 border-b border-slate-200">
          
          {/* Header Bar with Search & Category Pills */}
          <div className="space-y-5 pb-6 border-b border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-black tracking-widest uppercase text-slate-900 font-sans">
                  OFFICIAL LEADERSHIP DIRECTORY
                </h3>
                <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                  ഭരണസമിതി ഭാരവാഹികളും ഉപദേശകരും
                </span>
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search leader by name, role, or district..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-themeBlue focus:ring-1 focus:ring-themeBlue font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-2.5 text-[10px] text-slate-400 hover:text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {leadershipCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded transition-colors whitespace-nowrap shrink-0 ${
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

          {/* Leaders Grid (Editorial Card Aesthetic) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {filteredLeaders.map((leader) => (
              <div 
                key={leader.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-56 bg-slate-900 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" 
                    />
                    <div className="absolute top-3 left-3 bg-[#E53935] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-xs">
                      {leader.term || 'Official Leader'}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold font-malayalam text-slate-900 group-hover:text-themeBlue transition-colors leading-snug">
                        {leader.name}
                      </h4>
                      <p className="text-xs font-bold text-[#0284C7] uppercase tracking-wide">
                        {leader.englishDesignation || leader.designation}
                      </p>
                      <p className="text-[11px] text-slate-500 font-malayalam font-bold">
                        {leader.designation}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-malayalam leading-relaxed">
                      {leader.bio}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-slate-500 border-t border-slate-100">
                      <span className="flex items-center gap-1 font-malayalam">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{leader.district}</span>
                      </span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-sans font-bold text-slate-600">
                        {leader.committee}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={onOpenJoinModal}
                    className="w-full bg-[#262C38] hover:bg-slate-900 text-white text-xs font-black uppercase tracking-wider py-2 rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>CONNECT WITH OFFICE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =======================================================================
            SECTION 4: DEMOCRATIC GOVERNANCE & CONSTITUTIONAL PRINCIPLES
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200 bg-slate-50/50">
          <div className="border-b-2 border-slate-900 pb-2 mb-6">
            <h3 className="text-sm sm:text-base font-black tracking-widest uppercase text-slate-900 font-sans">
              ORGANISATIONAL GOVERNANCE &bull; സംഘടനാ ഘടന
            </h3>
            <span className="text-[11px] text-slate-500 font-malayalam font-bold">
              പഞ്ചായത്ത് തലം മുതൽ സംസ്ഥാന തലം വരെയുള്ള ജനകീയ ഭരണസംവിധാനം
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs">
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#E53935]">
                  സംസ്ഥാന സമിതി (State Apex Council)
                </strong>
                നയരൂപീകരണവും സംസ്ഥാനതല പ്രവർത്തനങ്ങളുടെ ഏകോപനവും നിർവ്വഹിക്കുന്ന പരമോന്നത സമിതി.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#1565C0]">
                  ജില്ലാ സമിതികൾ (District Committees)
                </strong>
                കേരളത്തിലെ 14 ജില്ലകളിലും പ്രാദേശിക പ്രവർത്തനങ്ങൾ ഏകോപിപ്പിക്കുന്ന ഭരണസമിതികൾ.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#198754]">
                  മണ്ഡലം &amp; പഞ്ചായത്ത് സമിതികൾ
                </strong>
                ഗ്രാമീണ തലങ്ങളിൽ ജനകീയ പങ്കാളിത്തത്തോടെ ബോധവൽക്കരണം നടത്തുന്ന പ്രാദേശിക ഘടകങ്ങൾ.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-slate-800">
                  ഉപദേശക സമിതി (Advisory Board)
                </strong>
                സാമൂഹിക, സാംസ്കാരിക, നിയമ രംഗങ്ങളിലെ പ്രമുഖർ ഉൾപ്പെടുന്ന മാർഗ്ഗനിർദ്ദേശക സമിതി.
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================
            SECTION 5: STATE HEADQUARTERS & ACTION BANNER
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
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded shadow-sm transition-colors"
              >
                JOIN THE SAMITHI
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

export default Leadership;