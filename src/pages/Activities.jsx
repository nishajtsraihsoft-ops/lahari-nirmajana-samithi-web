import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Search, 
  Calendar, 
  Sparkles, 
  HeartHandshake, 
  PhoneCall,
  GraduationCap,
  Megaphone,
  HeartPulse,
  Users,
  Award,
  ArrowRight,
  Flame,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { activities, activityCategories } from '../data/activities';
import { samithiContact } from '../data/objectives';
import SEO from '../components/SEO';

const Activities = ({ onOpenJoinModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter activities
  const filteredActivities = activities.filter((act) => {
    const matchesCategory = selectedCategory === 'all' || act.category === selectedCategory;
    const matchesSearch = 
      act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#ECEFF1]/70 py-6 sm:py-10 px-3 sm:px-6 lg:px-8 min-h-screen text-slate-800 selection:bg-themeBlue selection:text-white">
      <SEO
        title="കർമ്മപദ്ധതികൾ & പ്രവർത്തനങ്ങൾ | Activities"
        description="ക്യാമ്പസ് വിജിലൻസ്, പടയൊരുക്കം ക്യാമ്പുകൾ, ജനകീയ പ്രതിഷേധങ്ങൾ, കൗൺസിലിംഗ് തുടങ്ങിയ ലഹരി നിർമ്മാർജന സമിതിയുടെ കർമ്മപദ്ധതികൾ."
        canonicalPath="/activities"
        type="website"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "ലഹരി നിർമ്മാർജന സമിതി - കർമ്മപദ്ധതികൾ",
          "description": "വിദ്യാലയ-കലാലയ ബോധവൽക്കരണം, ജനകീയ ക്യാമ്പയിനുകൾ, കൗൺസിലിംഗ് പ്രവർത്തനങ്ങൾ.",
          "url": "https://www.laharinirmarjanasamithi.com/activities"
        }}
      />
      
      {/* =========================================================================
          MAIN BOXED CONTAINER (Matches Editorial Boxed Layout of Reference Design)
         ========================================================================= */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl sm:rounded-2xl border border-slate-200/80 overflow-hidden">
        
        {/* =======================================================================
            SECTION 1: TOP HERO SECTION
            Left: 3 Vertical Photo Strips with Attached Red, Blue, and Green Color Tags
            Right: Top Action Button + "Our Work" Heading + Malayalam Description
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: 4 Vertical Photo Strips with Color Banner Bars (7 Cols on LG) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 h-80 sm:h-80 md:h-96">
                
                {/* Photo Strip 1: COMMUNITY VOLUNTEERING */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-xs border border-slate-200 group">
                  <div className="relative flex-grow min-h-[110px] overflow-hidden bg-slate-100">
                    <img 
                      src="/Home/community-volunteering.png" 
                      alt="Community Volunteering" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      onError={(e) => { e.currentTarget.src = '/Home/COMMUNITY VOLUNTEERING.png'; }}
                    />
                  </div>
                  {/* Red Solid Tag: COMMUNITY VOLUNTEERING */}
                  <div className="bg-[#E53935] text-white p-2 sm:p-2.5 md:p-3 text-center select-none shrink-0">
                    <div className="text-xs sm:text-base lg:text-lg font-black font-sans uppercase tracking-tight leading-none">
                      COMMUNITY
                    </div>
                    <div className="text-[8px] sm:text-[9.5px] lg:text-[10.5px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      VOLUNTEERING
                    </div>
                  </div>
                </div>

                {/* Photo Strip 2: CAMPUS VIGILANCE */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-xs border border-slate-200 group">
                  <div className="relative flex-grow min-h-[110px] overflow-hidden bg-slate-100">
                    <img 
                      src="/Home/campus-vigilance.png" 
                      alt="Campus Vigilance Drives" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      onError={(e) => { e.currentTarget.src = '/Home/CAMPUS VIGILANCE.png'; }}
                    />
                  </div>
                  {/* Teal Solid Tag: CAMPUS VIGILANCE */}
                  <div className="bg-[#00897B] text-white p-2 sm:p-2.5 md:p-3 text-center select-none shrink-0">
                    <div className="text-xs sm:text-base lg:text-lg font-black font-sans uppercase tracking-tight leading-none">
                      CAMPUS
                    </div>
                    <div className="text-[8px] sm:text-[9.5px] lg:text-[10.5px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      VIGILANCE
                    </div>
                  </div>
                </div>

                {/* Photo Strip 3: MASS ACTION CAMPS */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-xs border border-slate-200 group">
                  <div className="relative flex-grow min-h-[110px] overflow-hidden bg-slate-100">
                    <img 
                      src="/Home/mass-action-camps.jpeg" 
                      alt="Mass Action Camps" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      onError={(e) => { e.currentTarget.src = '/Home/MASS ACTION CAMPS.jpeg'; }}
                    />
                  </div>
                  {/* Blue Solid Tag: MASS ACTION */}
                  <div className="bg-[#1565C0] text-white p-2 sm:p-2.5 md:p-3 text-center select-none shrink-0">
                    <div className="text-xs sm:text-base lg:text-lg font-black font-sans uppercase tracking-tight leading-none">
                      MASS ACTION
                    </div>
                    <div className="text-[8px] sm:text-[9.5px] lg:text-[10.5px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      CAMPS
                    </div>
                  </div>
                </div>

                {/* Photo Strip 4: COUNSELING & REHAB */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-xs border border-slate-200 group">
                  <div className="relative flex-grow min-h-[110px] overflow-hidden bg-slate-100">
                    <img 
                      src="/Home/counseling-rehab.png" 
                      alt="Counseling & Rehab Support" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      onError={(e) => { e.currentTarget.src = '/Home/COUNSELING & REHAB.png'; }}
                    />
                  </div>
                  {/* Green Solid Tag: COUNSELING & REHAB */}
                  <div className="bg-[#198754] text-white p-2 sm:p-2.5 md:p-3 text-center select-none shrink-0">
                    <div className="text-xs sm:text-base lg:text-lg font-black font-sans uppercase tracking-tight leading-none">
                      COUNSELING
                    </div>
                    <div className="text-[8px] sm:text-[9.5px] lg:text-[10.5px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      &amp; REHAB
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
                  JOIN AN ACTIVITY
                </button>
              </div>

              {/* Bold Typography */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-sans leading-none">
                  Activities
                </h1>

                {/* Teal/Blue Uppercase Subtitle */}
                <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#0284C7] leading-relaxed">
                  TRANSFORMING CITIZEN AWARENESS INTO SYSTEMIC ACTION
                </h2>

                {/* Authentic Malayalam Narrative Content */}
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-2.5 font-normal">
                  <p>
                    ലഹരിയുടെ ദൂഷ്യഫലങ്ങളെക്കുറിച്ച് പൊതുസമൂഹത്തിൽ അവബോധം സൃഷ്ടിക്കുക, വിദ്യാർത്ഥികളെയും യുവജനങ്ങളെയും ലഹരിയുടെ പിടിയിൽനിന്ന് സംരക്ഷിക്കുക, വിദ്യാലയങ്ങളിലും കലാലയങ്ങളിലും ബോധവൽക്കരണ പ്രവർത്തനങ്ങൾ സംഘടിപ്പിക്കുക എന്നിവയാണ് സമിതിയുടെ പ്രധാന കർമ്മപരിപാടികൾ.
                  </p>
                  <p>
                    പഞ്ചായത്ത് തലം മുതൽ സംസ്ഥാന തലം വരെയുള്ള നിരന്തര പ്രവർത്തനങ്ങളിലൂടെ കേരളത്തിലെമ്പാടും ലഹരിവിരുദ്ധ ജനകീയ മുന്നേറ്റം സൃഷ്ടിക്കാൻ സമിതിക്ക് സാധിച്ചിട്ടുണ്ട്.
                  </p>
                </div>
              </div>

              {/* Quick Action Badges */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#activities-grid"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#E53935] hover:text-[#C62828] underline underline-offset-4"
                >
                  <span>EXPLORE ALL PROGRAMMES &rarr;</span>
                </a>
                <span className="text-slate-300">|</span>
                <span className="text-[11px] font-bold text-slate-500 font-malayalam">
                  14 ജില്ലകളിലും സജീവം
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 2: FOUR STRATEGIC PILLARS WITH IMAGES FROM HOME FOLDER
            Card 1: COMMUNITY VOLUNTEERING
            Card 2: CAMPUS VIGILANCE
            Card 3: MASS ACTION CAMPS
            Card 4: COUNSELING & REHAB
           ======================================================================= */}
        <section className="p-4 sm:p-8 lg:p-10 border-b border-slate-200 bg-slate-50/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            
            {/* Card 1: COMMUNITY VOLUNTEERING */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs group hover:shadow-md transition-shadow">
              <div className="relative h-28 sm:h-36 md:h-40 overflow-hidden bg-slate-100">
                <img 
                  src="/Home/community-volunteering.png" 
                  alt="Community Volunteering" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = '/Home/COMMUNITY VOLUNTEERING.png'; }}
                />
              </div>
              <div className="bg-[#262C38] text-white px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-1.5 sm:gap-2">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E53935] shrink-0" />
                <h3 className="text-[10.5px] sm:text-xs md:text-sm font-black tracking-wider uppercase font-sans truncate">
                  COMMUNITY
                </h3>
              </div>
              <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between space-y-2.5 sm:space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-[11px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">
                  പ്രാദേശിക വാർഡുകളിലും പഞ്ചായത്തുകളിലും ലഹരിക്കെതിരായ ജനകീയ ജാഗ്രതാ സമിതികളും ബോധവൽക്കരണ കൂട്ടായ്മകളും.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('community');
                      const el = document.getElementById('activities-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 sm:px-4 py-1.5 sm:py-2 rounded shadow-2xs transition-colors"
                  >
                    VIEW COMMUNITY
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: CAMPUS VIGILANCE */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs group hover:shadow-md transition-shadow">
              <div className="relative h-28 sm:h-36 md:h-40 overflow-hidden bg-slate-100">
                <img 
                  src="/Home/campus-vigilance.png" 
                  alt="Campus Vigilance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = '/Home/CAMPUS VIGILANCE.png'; }}
                />
              </div>
              <div className="bg-[#262C38] text-white px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-1.5 sm:gap-2">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00897B] shrink-0" />
                <h3 className="text-[10.5px] sm:text-xs md:text-sm font-black tracking-wider uppercase font-sans truncate">
                  CAMPUS VIGILANCE
                </h3>
              </div>
              <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between space-y-2.5 sm:space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-[11px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">
                  വിദ്യാർത്ഥികളിലും യുവജനങ്ങളിലും ലഹരിക്കെതിരായ അവബോധം സൃഷ്ടിക്കാൻ സ്കൂളുകളിലും കോളേജുകളിലും നിരന്തര ബോധവൽക്കരണ പരിപാടികൾ.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('campus');
                      const el = document.getElementById('activities-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 sm:px-4 py-1.5 sm:py-2 rounded shadow-2xs transition-colors"
                  >
                    VIEW INITIATIVES
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: MASS ACTION CAMPS */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs group hover:shadow-md transition-shadow">
              <div className="relative h-28 sm:h-36 md:h-40 overflow-hidden bg-slate-100">
                <img 
                  src="/Home/mass-action-camps.jpeg" 
                  alt="Mass Action Camps" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = '/Home/MASS ACTION CAMPS.jpeg'; }}
                />
              </div>
              <div className="bg-[#262C38] text-white px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-1.5 sm:gap-2">
                <Megaphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284C7] shrink-0" />
                <h3 className="text-[10.5px] sm:text-xs md:text-sm font-black tracking-wider uppercase font-sans truncate">
                  MASS ACTION
                </h3>
              </div>
              <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between space-y-2.5 sm:space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-[11px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">
                  കളക്ടറേറ്റ് മാർച്ച്, മനുഷ്യച്ചങ്ങല, പടയൊരുക്കം ക്യാമ്പുകൾ എന്നിവയിലൂടെ ജനമനസ്സുകളിൽ ലഹരിവിരുദ്ധ പ്രതിരോധം ഉണർത്തുന്നു.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('campaigns');
                      const el = document.getElementById('activities-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 sm:px-4 py-1.5 sm:py-2 rounded shadow-2xs transition-colors"
                  >
                    VIEW CAMPAIGNS
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: COUNSELING & REHAB */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs group hover:shadow-md transition-shadow">
              <div className="relative h-28 sm:h-36 md:h-40 overflow-hidden bg-slate-100">
                <img 
                  src="/Home/counseling-rehab.png" 
                  alt="Counseling & Rehab" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = '/Home/COUNSELING & REHAB.png'; }}
                />
              </div>
              <div className="bg-[#262C38] text-white px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-1.5 sm:gap-2">
                <HeartPulse className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#198754] shrink-0" />
                <h3 className="text-[10.5px] sm:text-xs md:text-sm font-black tracking-wider uppercase font-sans truncate">
                  COUNSELING &amp; REHAB
                </h3>
              </div>
              <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between space-y-2.5 sm:space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-[11px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">
                  24x7 ഹെൽപ്‌ലൈനിലൂടെ ലഹരിബാധിതർക്കും കുടുംബങ്ങൾക്കും സൗജന്യ കൗൺസിലിംഗും പുനരധിവാസ മാർഗനിർദ്ദേശവും.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('counselling');
                      const el = document.getElementById('activities-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#198754] hover:bg-[#157347] text-white text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 sm:px-4 py-1.5 sm:py-2 rounded shadow-2xs transition-colors"
                  >
                    VIEW REHAB
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 3: ACTIVITIES LISTING WITH CATEGORY FILTERS
           ======================================================================= */}
        <section id="activities-grid" className="p-6 sm:p-8 lg:p-10 border-b border-slate-200">
          
          {/* Header Bar with Search & Category Pills */}
          <div className="space-y-5 pb-6 border-b border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-black tracking-widest uppercase text-slate-900 font-sans">
                  FEATURED PROGRAMMES &bull; കർമ്മപദ്ധതികൾ
                </h3>
                <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                  സമിതി നടപ്പിലാക്കുന്ന വിവിധ ബോധവൽക്കരണ പരിപാടികൾ
                </span>
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-themeBlue focus:ring-1 focus:ring-themeBlue font-sans"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {activityCategories.map((cat) => (
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

          {/* Activities Grid (100% Full Color Photos, No Grayscale) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {filteredActivities.map((activity) => (
              <div 
                key={activity.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/hero-image.png'; }}
                    />
                    <div className="absolute top-3 left-3 bg-[#E53935] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-xs">
                      {activity.badge || 'LNS Action'}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h4 className="text-base sm:text-lg font-bold font-malayalam text-slate-900 group-hover:text-themeBlue transition-colors leading-snug">
                      {activity.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 font-malayalam leading-relaxed">
                      {activity.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold">
                      <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200 font-malayalam">
                        ലക്ഷ്യവിഭാഗം: {activity.targetAudience}
                      </span>
                      {activity.impact && (
                        <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded border border-emerald-200 font-malayalam">
                          {activity.impact}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={onOpenJoinModal}
                    className="w-full bg-[#262C38] hover:bg-slate-900 text-white text-xs font-black uppercase tracking-wider py-2.5 rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>SUPPORT THIS ACTIVITY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =======================================================================
            SECTION 4: CORE FOCUS AREAS (Red Square Bulleted List)
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200 bg-slate-50/50">
          <div className="border-b-2 border-slate-900 pb-2 mb-6">
            <h3 className="text-sm sm:text-base font-black tracking-widest uppercase text-slate-900 font-sans">
              CORE OPERATIONAL PRINCIPLES &bull; പ്രവർത്തന സവിശേഷതകൾ
            </h3>
            <span className="text-[11px] text-slate-500 font-malayalam font-bold">
              സമിതിയുടെ പ്രധാന പ്രവർത്തന രീതികളും ജനകീയ ഇടപെടലുകളും
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs">
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#E53935]">
                  വിദ്യാർത്ഥി ജാഗ്രതാ സമിതികൾ
                </strong>
                സ്കൂളുകളിലും കോളേജുകളിലും അധ്യാപകരെയും വിദ്യാർത്ഥികളെയും ഉൾപ്പെടുത്തി നിരന്തര ജാഗ്രത ഉറപ്പാക്കുന്നു.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#1565C0]">
                  ബോധവൽക്കരണ സദസ്സുകൾ
                </strong>
                നാട്ടിൻപുറങ്ങളിലും റെസിഡൻസ് അസോസിയേഷനുകളിലും കുടുംബശ്രീ യൂണിറ്റുകളിലും ബോധവൽക്കരണം സംഘടിപ്പിക്കുന്നു.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#198754]">
                  ലഹരി മാഫിയക്കെതിരായ പ്രതിരോധം
                </strong>
                വിദ്യാലയ പരിസരങ്ങളിലെ ലഹരി വിൽപ്പന തടയാൻ എക്സൈസ്, പൊലീസ് സംവിധാനങ്ങളുമായി ചേർന്ന് ഇടപെടലുകൾ.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-slate-800">
                  കൗൺസിലിംഗും പുനരധിവാസവും
                </strong>
                ലഹരിക്ക് അടിമപ്പെട്ടവരെ കണ്ടെത്തി വിദഗ്ദ്ധ കൗൺസിലിംഗും ചികിത്സാ സഹായങ്ങളും നൽകുന്നു.
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
                JOIN PROGRAMME
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

export default Activities;
