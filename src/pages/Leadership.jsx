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
  CheckCircle2,
  X
} from 'lucide-react';
import { leaders, leadershipCategories, mandalamLeaders } from '../data/leaders';
import { samithiContact } from '../data/objectives';
import LeaderCard from '../components/LeaderCard';

const Leadership = ({ onOpenJoinModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'mandalam') {
      const el = document.getElementById('mandalam-leaders');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter leaders by category and search query
  const filteredLeaders = leaders.filter((leader) => {
    if (selectedCategory === 'mandalam') return false;
    const matchesCategory = 
      selectedCategory === 'all' || 
      leader.category === selectedCategory;

    const matchesSearch = 
      leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (leader.englishName && leader.englishName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (leader.englishDesignation && leader.englishDesignation.toLowerCase().includes(searchQuery.toLowerCase())) ||
      leader.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.committee.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#ECEFF1]/70 py-4 sm:py-8 lg:py-10 px-2.5 sm:px-6 lg:px-8 min-h-screen text-slate-800 selection:bg-themeBlue selection:text-white">
      
      {/* =========================================================================
          MAIN EDITORIAL CONTAINER (Classic Editorial Layout of Leadership Page)
         ========================================================================= */}
      <div className="max-w-6xl mx-auto bg-white shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden">
        
        {/* =======================================================================
            SECTION 1: TOP HERO SECTION
            Left: 3 Vertical Photo Strips with Attached Red, Blue, and Green Tags
            Right: Top Action Button + "Leaders" Heading + Malayalam Description
           ======================================================================= */}
        <section className="p-4 sm:p-7 lg:p-10 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            
            {/* Left Column: 3 Vertical Photo Strips with Full Color Photos (7 Cols on LG) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 h-52 sm:h-80 md:h-96">
                
                {/* Photo Strip 1: Kurukkoli Moideen MLA */}
                <div className="flex flex-col h-full rounded-lg sm:rounded-xl overflow-hidden shadow-xs group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                      src="/leaders/Kurukkoli_Moideen_MLA_State_President_LNS.png" 
                      alt="Kurukkoli Moideen MLA - State President" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Red Solid Tag: STATE PRESIDENT */}
                  <div className="bg-[#E53935] text-white p-1.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-xs sm:text-base lg:text-xl font-black font-sans uppercase tracking-tight leading-none">
                      STATE
                    </div>
                    <div className="text-[7.5px] sm:text-[10.5px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      PRESIDENT
                    </div>
                  </div>
                </div>

                {/* Photo Strip 2: O.K. Kunjikomu Master */}
                <div className="flex flex-col h-full rounded-lg sm:rounded-xl overflow-hidden shadow-xs group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                      src="/leaders/O_K_Kunjikko_Mu_Master_Working_President_Lahari_Nirmarjana_Samithi_State_Committee.png" 
                      alt="O.K. Kunjikomu Master - Working President & Founder" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Blue Solid Tag: WORKING PRESIDENT */}
                  <div className="bg-[#1565C0] text-white p-1.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-xs sm:text-base lg:text-xl font-black font-sans uppercase tracking-tight leading-none">
                      WORKING
                    </div>
                    <div className="text-[7.5px] sm:text-[10.5px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      PRESIDENT
                    </div>
                  </div>
                </div>

                {/* Photo Strip 3: P.M.K. Kanjiyoor */}
                <div className="flex flex-col h-full rounded-lg sm:rounded-xl overflow-hidden shadow-xs group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                      src="/leaders/PMK_Kanjiyoor_General_Secretary_LNS_State_Committee.png" 
                      alt="P.M.K. Kanjiyoor - General Secretary" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Green Solid Tag: GENERAL SECRETARY */}
                  <div className="bg-[#198754] text-white p-1.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-xs sm:text-base lg:text-xl font-black font-sans uppercase tracking-tight leading-none">
                      GENERAL
                    </div>
                    <div className="text-[7.5px] sm:text-[10.5px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      SECRETARY
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Editorial Intro Block (5 Cols on LG) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5">
              
              {/* Top Red Button */}
              <div className="flex justify-start lg:justify-end">
                <button
                  type="button"
                  onClick={onOpenJoinModal}
                  className="w-full sm:w-auto bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-95 text-center"
                >
                  VOLUNTEER WITH US
                </button>
              </div>

              {/* Bold Display Heading */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-sans leading-none">
                  Leaders
                </h1>

                {/* Teal/Blue Uppercase Subtitle */}
                <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#0284C7] leading-relaxed">
                  OFFICIAL LEADERSHIP &bull; LAHARI NIRMAARGANA SAMITHI
                </h2>

                {/* Authentic Malayalam Narrative Content */}
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-2 font-normal">
                  <p>
                    ലഹരി നിർമ്മാർജന സമിതിയുടെ (എൽ.എൻ.എസ്) സംസ്ഥാന സമിതിയും ജില്ലാ സമിതികളും നയിക്കുന്ന ഔദ്യോഗിക ഭാരവാഹികൾ.
                  </p>
                  <p>
                    2005 ഒക്ടോബർ 25-ന് ആരംഭിച്ച ജനകീയ ലഹരിവിരുദ്ധ പ്രതിരോധത്തിന് കേരളത്തിലുടനീളം ദിശാബോധവും ഊർജ്ജവും നൽകുന്നത് ഈ സാരഥികളാണ്.
                  </p>
                </div>
              </div>

              {/* Quick Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#leaders-grid"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#E53935] hover:text-[#C62828] underline underline-offset-4"
                >
                  <span>STATE DIRECTORY &rarr;</span>
                </a>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <a
                  href="#mandalam-leaders"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#198754] hover:text-[#146c43] underline underline-offset-4"
                >
                  <span>MANDALAM LEADERS ({mandalamLeaders.length}) &darr;</span>
                </a>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="text-[11px] font-bold text-slate-500 font-malayalam">
                  സംസ്ഥാന - മണ്ഡലം നേതൃനിര
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 2: THREE COLUMNS WITH DARK HEADERS (State & District Wings)
           ======================================================================= */}
        <section className="p-4 sm:p-7 lg:p-10 border-b border-slate-200 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Card 1: STATE COMMITTEE */}
            <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#0284C7]" />
                <h3 className="text-xs sm:text-sm font-black tracking-widest uppercase font-sans">
                  STATE COMMITTEE
                </h3>
              </div>
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-1.5">
                  <p className="font-bold text-slate-900">സംസ്ഥാന സമിതി നേതൃത്വം:</p>
                  <p>&bull; കുറുക്കോളി മൊയ്തീൻ എം.എൽ.എ (പ്രസിഡന്റ്)</p>
                  <p>&bull; ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്റർ (വർക്കിംഗ് പ്രസിഡന്റ്)</p>
                  <p>&bull; പി.എം.കെ. കാഞ്ഞിയൂർ (ജനറൽ സെക്രട്ടറി)</p>
                  <p>&bull; എം.കെ.എ. ലത്തീഫ് ആലുവ (ട്രഷറർ)</p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('state-committee')}
                    className="w-full sm:w-auto bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-2xs transition-colors text-center"
                  >
                    STATE COUNCIL (4)
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: MALAPPURAM EAST */}
            <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#E53935]" />
                <h3 className="text-xs sm:text-sm font-black tracking-widest uppercase font-sans">
                  MALAPPURAM EAST
                </h3>
              </div>
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-1.5">
                  <p className="font-bold text-slate-900">മലപ്പുറം ഈസ്റ്റ് ജില്ലാ സമിതി:</p>
                  <p>&bull; സയ്യിദ് ഫസൽ ജിഫ്രി തങ്ങൾ (പ്രസിഡന്റ്)</p>
                  <p>&bull; പി.പി. അബൂബക്കർ മനു എടവണ്ണ (ജനറൽ സെക്രട്ടറി)</p>
                  <p>&bull; മൊയ്തീൻ കുട്ടി ഹാജി പാലസ് (ട്രഷറർ)</p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('malappuram-east')}
                    className="w-full sm:w-auto bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-2xs transition-colors text-center"
                  >
                    EAST DISTRICT (3)
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: MALAPPURAM WEST */}
            <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#198754]" />
                <h3 className="text-xs sm:text-sm font-black tracking-widest uppercase font-sans">
                  MALAPPURAM WEST
                </h3>
              </div>
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-1.5">
                  <p className="font-bold text-slate-900">മലപ്പുറം വെസ്റ്റ് ജില്ലാ സമിതി:</p>
                  <p>&bull; സി.കെ.എം. ബാപ്പു ഹാജി താനൂർ (പ്രസിഡന്റ്)</p>
                  <p>&bull; ഷാനവാസ് തുറക്കൽ കാടാമ്പുഴ (ജനറൽ സെക്രട്ടറി)</p>
                  <p>&bull; പി.പി. കുഞ്ഞിമുഹമ്മദ് തവനൂർ (ട്രഷറർ)</p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('malappuram-west')}
                    className="w-full sm:w-auto bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-2xs transition-colors text-center"
                  >
                    WEST DISTRICT (3)
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 3: LEADERS DIRECTORY WITH SEARCH & FILTERS
            (4 Leaders In A Row on LG, 2 on SM, 1 on Mobile - Fully Responsive)
           ======================================================================= */}
        <section id="leaders-grid" className="p-4 sm:p-7 lg:p-10 border-b border-slate-200 bg-slate-50/30">
          
          {/* Header Bar with Search & Category Pills */}
          <div className="space-y-4 pb-6 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm sm:text-lg font-black tracking-widest uppercase text-slate-900 font-sans">
                  OFFICIAL LEADERSHIP DIRECTORY
                </h3>
                <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                  സംസ്ഥാന, ജില്ലാ ഭരണസമിതി ഭാരവാഹികൾ
                </span>
              </div>

              {/* Search Input */}
              <div className="relative w-full sm:w-72 md:w-80">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="നേതാവിനെ തിരയുക... / Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-8 py-2 text-xs border border-slate-300 rounded-full focus:outline-none focus:border-themeBlue focus:ring-1 focus:ring-themeBlue font-sans bg-white shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-2.5 text-[10px] text-slate-400 hover:text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-full"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills (Mobile Friendly Horizontal Scroll) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar -mx-1 px-1">
              {leadershipCategories.map((cat) => {
                const count = cat.id === 'all' 
                  ? leaders.length 
                  : cat.id === 'mandalam'
                    ? mandalamLeaders.length
                    : leaders.filter(l => l.category === cat.id).length;
                const isActive = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`px-3.5 sm:px-4 py-1.5 text-xs font-bold rounded-full transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#262C38] text-white shadow-xs font-black'
                        : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span>{cat.englishName}</span>
                    <span className="font-malayalam text-[10.5px] opacity-80 hidden sm:inline">({cat.name})</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Leaders Grid (4 in a row on Desktop, 2 on Tablet, 1 on Mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-6">
            {filteredLeaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} onOpenContact={onOpenJoinModal} />
            ))}
          </div>

          {filteredLeaders.length === 0 && (
            <div className="py-12 text-center text-slate-500 font-malayalam text-xs sm:text-sm">
              {selectedCategory === 'mandalam' ? (
                <span>മണ്ഡലം നേതാക്കളുടെ ചിത്രങ്ങൾ താഴെ കാണാം 👇</span>
              ) : (
                <span>നേതാക്കളെ കണ്ടെത്താൻ സാധിച്ചില്ല. ദയവായി മറ്റൊരു പേരോ പദവിയോ നൽകി തിരയുക.</span>
              )}
            </div>
          )}

        </section>

        {/* =======================================================================
            SECTION 4: MANDALAM LEADERS (മണ്ഡലം നേതൃത്വം)
            Only Images - Not Any Texts Wanted - 4 Columns In A Row - Responsive
           ======================================================================= */}
        <section id="mandalam-leaders" className="p-4 sm:p-7 lg:p-10 border-b border-slate-200 bg-white">
          <div className="border-b-2 border-slate-900 pb-2 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm sm:text-base font-black tracking-widest uppercase text-slate-900 font-sans">
                MANDALAM LEADERS &bull; മണ്ഡലം നേതൃത്വം
              </h3>
              <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                മണ്ഡലം നേതൃത്വ നിര
              </span>
            </div>
            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto font-sans">
              {mandalamLeaders.length} Images
            </span>
          </div>

          {/* Grid: 4 in a row on Desktop, 2 on Tablet, 1 on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {mandalamLeaders.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => setSelectedImage(item.image)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-98"
              >
                <div className="w-full aspect-[3/4.2] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt="Mandalam Leader"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================================
            SECTION 4: DEMOCRATIC GOVERNANCE & CONSTITUTIONAL PRINCIPLES
           ======================================================================= */}
        <section className="p-4 sm:p-7 lg:p-10 border-b border-slate-200 bg-slate-50/50">
          <div className="border-b-2 border-slate-900 pb-2 mb-4 sm:mb-6">
            <h3 className="text-xs sm:text-base font-black tracking-widest uppercase text-slate-900 font-sans">
              ORGANISATIONAL GOVERNANCE &bull; സംഘടനാ ഘടന
            </h3>
            <span className="text-[10.5px] sm:text-[11px] text-slate-500 font-malayalam font-bold">
              സംസ്ഥാന സമിതി മുതൽ ജില്ലാ - പ്രാദേശിക തലം വരെയുള്ള ഭരണസംവിധാനം
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs">
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#E53935]">
                  സംസ്ഥാന സമിതി (State Committee - Apex Body)
                </strong>
                പ്രസിഡന്റ് കുറുക്കോളി മൊയ്തീൻ എം.എൽ.എ, വർക്കിംഗ് പ്രസിഡന്റ് ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്റർ എന്നിവരുടെ നേതൃത്വത്തിൽ നയരൂപീകരണം നടത്തുന്നു.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#1565C0]">
                  മലപ്പുറം ഈസ്റ്റ് ജില്ലാ കമ്മിറ്റി (Malappuram East)
                </strong>
                സയ്യിദ് ഫസൽ ജിഫ്രി തങ്ങൾ (പ്രസിഡന്റ്), പി.പി. അബൂബക്കർ മനു എടവണ്ണ (സെക്രട്ടറി), മൊയ്തീൻ കുട്ടി ഹാജി (ട്രഷറർ) എന്നിവരുടെ നേതൃത്വം.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#198754]">
                  മലപ്പുറം വെസ്റ്റ് ജില്ലാ കമ്മിറ്റി (Malappuram West)
                </strong>
                സി.കെ.എം. ബാപ്പു ഹാജി താനൂർ (പ്രസിഡന്റ്), ഷാനവാസ് തുറക്കൽ കാടാമ്പുഴ (സെക്രട്ടറി), പി.പി. കുഞ്ഞിമുഹമ്മദ് തവനൂർ (ട്രഷറർ) എന്നിവരുടെ നേതൃത്വം.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                &gt;
              </span>
              <div className="font-malayalam text-slate-700 leading-snug">
                <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-slate-800">
                  പ്രാദേശിക &amp; വിദ്യാലയ ജാഗ്രതാ സമിതികൾ
                </strong>
                മണ്ഡലം, പഞ്ചായത്ത്, വാർഡ് തലങ്ങളിലും സ്കൂളുകളിലും കോളേജുകളിലും നിരന്തര ബോധവൽക്കരണം ഉറപ്പാക്കുന്ന ജനകീയ ഘടകങ്ങൾ.
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================
            SECTION 5: STATE HEADQUARTERS & ACTION BANNER
           ======================================================================= */}
        <section className="bg-slate-900 text-white p-4 sm:p-7 lg:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400">
                STATE HEADQUARTERS &bull; കുന്നുമ്മൽ, മലപ്പുറം
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-malayalam">
                {samithiContact.name} &bull; {samithiContact.fullAddress}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs text-slate-400 pt-1">
                <span>24x7 Helpline: <strong className="text-white">{samithiContact.helpline}</strong></span>
                <span className="hidden sm:inline">&bull;</span>
                <span className="hidden sm:inline">14 Active Districts Across Kerala</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="w-full md:w-auto bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded-full shadow-sm transition-colors text-center"
              >
                JOIN THE SAMITHI
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* Lightbox Modal for Full View (Only Image - No Text) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-2xl max-h-[92vh] bg-transparent rounded-2xl overflow-hidden flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Mandalam Leader Full View"
              className="w-full h-auto max-h-[88vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Leadership;
