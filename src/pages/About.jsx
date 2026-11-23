import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Megaphone, 
  Puzzle, 
  Users, 
  Award, 
  Calendar, 
  ArrowRight, 
  HeartHandshake, 
  MapPin, 
  Building, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  GraduationCap, 
  HeartPulse, 
  ShieldAlert,
  Flame,
  ChevronRight,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { 
  historyMilestones, 
  historicalCommittees, 
  majorHistoricalActivities, 
  organisationRegions,
  samithiMessage,
  samithiContact,
  statistics
} from '../data/objectives';

const About = ({ onOpenJoinModal, onOpenPledgeModal }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  return (
    <div className="bg-[#ECEFF1]/70 py-6 sm:py-10 px-3 sm:px-6 lg:px-8 min-h-screen text-slate-800 selection:bg-themeBlue selection:text-white">
      
      {/* =========================================================================
          MAIN BOXED CONTAINER (Matches Editorial Boxed Layout of Reference Image)
         ========================================================================= */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl sm:rounded-2xl border border-slate-200/80 overflow-hidden">
        
        {/* =======================================================================
            SECTION 1: TOP HERO SECTION
            Left: 3 Vertical Photo Strips with Attached Red, Blue, and Green Tags
            Right: Top Pledge Button + "Hello" Heading + Mission Description
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: 3 Vertical Photo Strips with Color Banner Bars (7 Cols on LG) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* 3 Side-by-Side Image Strips (Full Color, No Grayscale) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 h-64 sm:h-80 md:h-96">
                
                {/* Photo Strip 1 */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100">
                    <img 
                      src="/hero-image.png" 
                      alt="LNS Youth Campaign" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Red Solid Tag: HOPE FOR PEACE / YOUTH */}
                  <div className="bg-[#E53935] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      HOPE
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      FOR YOUTH
                    </div>
                  </div>
                </div>

                {/* Photo Strip 2 */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100">
                    <img 
                      src="/hero-image-2.jpg" 
                      alt="Anti-drug awareness rally" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Blue/Teal Solid Tag: SAVE OUR FUTURE */}
                  <div className="bg-[#1565C0] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      SAVE
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      OUR FUTURE
                    </div>
                  </div>
                </div>

                {/* Photo Strip 3 */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100">
                    <img 
                      src="/hero-image-3.jpg" 
                      alt="Community mass defense" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Green Solid Tag: HELP THOSE IN NEED */}
                  <div className="bg-[#198754] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      HELP
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      THOSE IN NEED
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Editorial Intro Block (5 Cols on LG) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              
              {/* Top Red Button: MAKE PLEDGE / JOIN */}
              <div className="flex justify-start lg:justify-end">
                <button
                  type="button"
                  onClick={onOpenPledgeModal}
                  className="bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-6 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200 active:scale-95"
                >
                  TAKE ANTI-DRUG PLEDGE
                </button>
              </div>

              {/* Large Bold Typography: "About Us" */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-sans leading-none">
                  About Us
                </h1>

                {/* Teal/Blue Uppercase Subtitle */}
                <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#0284C7] leading-relaxed">
                  WE ARE A SOCIAL MOVEMENT &bull; YOU CAN HELP US IN OUR GOAL
                </h2>

                {/* Authentic Malayalam Narrative Content */}
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-2.5 font-normal">
                  <p>
                    ലഹരി എന്ന സാമൂഹിക വിപത്തിനെതിരെ ജനകീയ കൂട്ടായ്മയിലൂടെ പ്രതിരോധം തീർക്കുകയും ലഹരിമുക്തമായ ഒരു സമൂഹത്തെ വാർത്തെടുക്കുകയും ചെയ്യുക എന്ന ലക്ഷ്യത്തോടെ പ്രവർത്തിക്കുന്ന സാമൂഹിക പ്രസ്ഥാനമാണ് ലഹരി നിർമ്മാർജന സമിതി (എൽ.എൻ.എസ്).
                  </p>
                  <p>
                    ലഹരിയുടെ ദൂഷ്യഫലങ്ങളെക്കുറിച്ച് പൊതുസമൂഹത്തിൽ അവബോധം സൃഷ്ടിക്കുക, വിദ്യാർത്ഥികളെയും യുവജനങ്ങളെയും ലഹരിയുടെ പിടിയിൽനിന്ന് സംരക്ഷിക്കുക, വിദ്യാലയങ്ങളിലും കലാലയങ്ങളിലും ബോധവൽക്കരണ പ്രവർത്തനങ്ങൾ സംഘടിപ്പിക്കുക, ലഹരിക്കെതിരായ സാമൂഹിക ഇടപെടലുകൾ ശക്തിപ്പെടുത്തുക തുടങ്ങിയ ലക്ഷ്യങ്ങളോടെയാണ് സമിതി പ്രവർത്തിക്കുന്നത്.
                  </p>
                </div>
              </div>

              {/* Quick Action Badges */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenJoinModal}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#E53935] hover:text-[#C62828] underline underline-offset-4"
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>JOIN OUR MOVEMENT &rarr;</span>
                </button>
                <span className="text-slate-300">|</span>
                <span className="text-[11px] font-bold text-slate-500 font-malayalam">
                  2005 മുതൽ കേരളത്തിൽ
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 2: THREE COLUMNS WITH DARK HEADERS (Matches Section 2 of Reference)
            Card 1: JOIN US
            Card 2: OUR MISSION
            Card 3: KEY MILESTONES (History Milestone Summary)
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: JOIN US */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-[#E53935] fill-[#E53935]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  JOIN US
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  ലഹരിക്കെതിരെയുള്ള പോരാട്ടം ഒരു വ്യക്തിയുടെയോ സംഘടനയുടെയോ മാത്രം ഉത്തരവാദിത്തമല്ല. സമൂഹത്തിലെ ഓരോ വ്യക്തിക്കും ഈ പോരാട്ടത്തിൽ പങ്കാളിയാകാനുണ്ട്. ജനകീയ കൂട്ടായ്മയിൽ നിങ്ങൾക്കും പങ്കാളിയാകാം.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={onOpenJoinModal}
                    className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    JOIN NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: OUR MISSION */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Megaphone className="w-4 h-4 text-[#0284C7]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  OUR MISSION
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  വിദ്യാർത്ഥികളിലും യുവജനങ്ങളിലും ലഹരിക്കെതിരായ അവബോധവും സാമൂഹിക ഉത്തരവാദിത്തബോധവും വളർത്തുക. സ്കൂളുകളിലും കോളേജുകളിലും നിരന്തര ബോധവൽക്കരണ പരിപാടികൾ നടത്തി ലഹരി മാഫിയക്കെതിരെ പ്രതിരോധം തീർക്കുക.
                </p>
                <div>
                  <Link
                    to="/activities"
                    className="inline-block bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: KEY MILESTONES (History Timeline) */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Puzzle className="w-4 h-4 text-[#198754]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  KEY MILESTONES
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  2005 ഒക്ടോബർ 25-ന് മലപ്പുറം മാറാക്കരയിൽ തുടക്കം. 2007-ൽ ജില്ലാ കമ്മിറ്റിയും 2013-ൽ സംസ്ഥാന കമ്മിറ്റിയും രൂപീകരിച്ച് കേരളത്തിലെ 14 ജില്ലകളിലേക്കും പ്രവർത്തനം വ്യാപിപ്പിച്ച 20 വർഷത്തെ ഐതിഹാസിക ചരിത്രം.
                </p>
                <div>
                  <a
                    href="#milestones-detail"
                    className="inline-block bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    VIEW TIMELINE
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 3: BOTTOM SPLIT LAYOUT (Matches Section 3 of Reference Image)
            Left: "MEET OUR LEADERSHIP" (Stacked Team Members with Photos)
            Right: Top "SAVE OUR YOUTH" Box + Bottom "HISTORIC MILESTONES IN ACTION"
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column: MEET OUR LEADERSHIP (4 Cols on LG) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="border-b-2 border-slate-900 pb-2">
                <h3 className="text-sm sm:text-base font-black tracking-widest uppercase text-slate-900 font-sans">
                  MEET OUR LEADERSHIP
                </h3>
                <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                  ആദ്യകാല നേതൃത്വവും ഭാരവാഹികളും
                </span>
              </div>

              {/* Leader Row 1: Ubaidulla MLA */}
              <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100 pb-4">
                <div className="w-14 h-14 rounded bg-slate-200 shrink-0 overflow-hidden border border-slate-300 flex items-center justify-center text-slate-600 font-bold text-xs">
                  <Users className="w-6 h-6 text-slate-400" />
                </div>
                <div className="min-w-0 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 font-malayalam leading-tight">
                    ഉബൈദുള്ള (എം.എൽ.എ)
                  </h4>
                  <p className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wide">
                    പ്രസിഡന്റ് (President)
                  </p>
                  <p className="text-[11px] text-slate-500 font-malayalam leading-snug">
                    ആദ്യ മലപ്പുറം ജില്ലാ കമ്മിറ്റിയുടെയും (2007) തുടർന്ന് സംസ്ഥാന കമ്മിറ്റിയുടെയും (2013) പ്രസിഡന്റ്.
                  </p>
                </div>
              </div>

              {/* Leader Row 2: OK Kunjikomu Master (Real Photo) */}
              <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100 pb-4">
                <div className="w-14 h-14 rounded bg-slate-100 shrink-0 overflow-hidden border border-slate-300 shadow-2xs">
                  <img 
                    src="/leaders/O_K_Kunjikko_Mu_Master_Working_President_Lahari_Nirmarjana_Samithi_State_Committee.png" 
                    alt="ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്റർ" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 font-malayalam leading-tight">
                    ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്റർ
                  </h4>
                  <p className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wide">
                    സെക്രട്ടറി &amp; സ്ഥാപകൻ (Founder Secretary)
                  </p>
                  <p className="text-[11px] text-slate-500 font-malayalam leading-snug">
                    2005-ൽ മാറാക്കരയിൽ ലഹരി നിർമ്മാർജന സമിതിക്ക് തുടക്കം കുറിച്ച സ്ഥാപക ജനറൽ സെക്രട്ടറി.
                  </p>
                </div>
              </div>

              {/* Leader Row 3: K.K.S. Thangal / Ashraf */}
              <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100 pb-4">
                <div className="w-14 h-14 rounded bg-slate-200 shrink-0 overflow-hidden border border-slate-300 flex items-center justify-center text-slate-600 font-bold text-xs">
                  <Award className="w-6 h-6 text-slate-400" />
                </div>
                <div className="min-w-0 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 font-malayalam leading-tight">
                    കെ.കെ.എസ്. തങ്ങൾ &amp; അഷ്റഫ്
                  </h4>
                  <p className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wide">
                    ട്രഷറർമാർ (Treasurers)
                  </p>
                  <p className="text-[11px] text-slate-500 font-malayalam leading-snug">
                    ആദ്യ ജില്ലാ കമ്മിറ്റി ട്രഷറർ കെ.കെ.എസ്. തങ്ങൾ, സംസ്ഥാന കമ്മിറ്റി ട്രഷറർ അഷ്റഫ്.
                  </p>
                </div>
              </div>

              {/* View Leadership Button */}
              <div className="pt-2">
                <Link
                  to="/leadership"
                  className="inline-block bg-[#262C38] hover:bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider px-5 py-2.5 rounded shadow-xs transition-colors"
                >
                  VIEW LEADERSHIP
                </Link>
              </div>
            </div>

            {/* Right Column: Featured Action Block + Milestones List (8 Cols on LG) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Part A: "SAVE OUR YOUTH FROM SUBSTANCE ABUSE!" */}
              <div className="space-y-4">
                <div className="border-b-2 border-slate-900 pb-2">
                  <h3 className="text-sm sm:text-base font-black tracking-widest uppercase text-slate-900 font-sans">
                    SAVE OUR YOUTH FROM SUBSTANCE ABUSE!
                  </h3>
                  <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                    ലഹരിയുടെ പിടിയിൽ നിന്ന് വരുംതലമുറയെ സംരക്ഷിക്കാം
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  {/* Photo of Volunteers (Full Color, No Grayscale) */}
                  <div className="sm:col-span-5 h-48 sm:h-52 rounded-lg overflow-hidden border border-slate-300 shadow-xs bg-slate-100">
                    <img
                      src="/hero-image-2.jpg"
                      alt="LNS Campus Volunteers"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Text details */}
                  <div className="sm:col-span-7 space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#0284C7]">
                      STATEWIDE STUDENT &amp; COMMUNITY VIGILANCE
                    </h4>
                    <p className="text-slate-600 font-malayalam text-xs leading-relaxed">
                      വിദ്യാലയങ്ങളിലും കലാലയങ്ങളിലും ലഹരിവിരുദ്ധ ബോധവൽക്കരണ പരിപാടികൾ സംഘടിപ്പിച്ചു. വിദ്യാർത്ഥികളിലും യുവജനങ്ങളിലും ലഹരിക്കെതിരായ അവബോധവും സാമൂഹിക ഉത്തരവാദിത്തബോധവും വളർത്തുന്നതിനായി നിരന്തര പ്രവർത്തനങ്ങൾ നടത്തിവരുന്നു.
                    </p>
                    <div>
                      <Link
                        to="/activities"
                        className="inline-block bg-[#262C38] hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded transition-colors"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part B: "HISTORIC MILESTONES IN ACTION" */}
              <div id="milestones-detail" className="space-y-4 pt-4 border-t border-slate-200">
                <div className="border-b-2 border-slate-900 pb-2 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-black tracking-widest uppercase text-slate-900 font-sans">
                      MILESTONES IN ACTION &bull; ചരിത്ര നാൾവഴികൾ
                    </h3>
                    <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                      2005 മുതൽ സംഘടന പിന്നിട്ട പ്രധാന നാഴികക്കല്ലുകൾ
                    </span>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] font-bold text-white bg-[#1565C0] px-2.5 py-1 rounded">
                    20+ Years Journey
                  </span>
                </div>

                {/* 2-Column Red Square Bulleted List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs">
                  
                  {/* Column 1 Bullets */}
                  <div className="space-y-3">
                    
                    <div className="flex items-start gap-2 group">
                      <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <div className="font-malayalam text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#E53935]">
                          2005 ഒക്ടോബർ 25
                        </strong>
                        മാറാക്കരയിൽ ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്ററുടെ നേതൃത്വത്തിൽ ലഹരിവിരുദ്ധ പ്രവർത്തനങ്ങൾക്ക് തുടക്കം.
                      </div>
                    </div>

                    <div className="flex items-start gap-2 group">
                      <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <div className="font-malayalam text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#1565C0]">
                          2006 ആദ്യ സമ്മേളനം
                        </strong>
                        മാറാക്കര ഹൈസ്കൂളിൽ കളക്ടർ ബാലകൃഷ്ണൻ ഉദ്ഘാടനം ചെയ്തു; 'ലഹരി നിർമ്മാർജന സമിതി' എന്ന് പേര് നൽകി.
                      </div>
                    </div>

                    <div className="flex items-start gap-2 group">
                      <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <div className="font-malayalam text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#198754]">
                          2007 ഏപ്രിൽ 15
                        </strong>
                        മലപ്പുറം ജില്ലാ കമ്മിറ്റി രൂപീകരണം (പ്രസിഡന്റ്: ഉബൈദുള്ള എം.എൽ.എ, സെക്രട്ടറി: ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്റർ).
                      </div>
                    </div>

                    <div className="flex items-start gap-2 group">
                      <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <div className="font-malayalam text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-slate-800">
                          2008 ജില്ലാ സമ്മേളനം
                        </strong>
                        മലപ്പുറത്ത് നടന്ന സമ്മേളനം പാണക്കാട് സാദിഖലി ശിഹാബ് തങ്ങൾ ഉദ്ഘാടനം ചെയ്തു.
                      </div>
                    </div>

                  </div>

                  {/* Column 2 Bullets */}
                  <div className="space-y-3">
                    
                    <div className="flex items-start gap-2 group">
                      <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <div className="font-malayalam text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#E53935]">
                          2013 സംസ്ഥാന കമ്മിറ്റി
                        </strong>
                        സംസ്ഥാന കമ്മിറ്റി രൂപീകരിച്ച് കേരളത്തിലെ 14 ജില്ലകളിലേക്കും മേഖലകളിലേക്കും പ്രവർത്തനം വ്യാപിപ്പിച്ചു.
                      </div>
                    </div>

                    <div className="flex items-start gap-2 group">
                      <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <div className="font-malayalam text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#1565C0]">
                          പടയൊരുക്കം ക്യാമ്പ് (റാലി)
                        </strong>
                        അബ്ബാസ് അലി തങ്ങളുടെ വസതിയിൽ നിന്ന് കളക്ടറേറ്റിലേക്ക് 600+ പേർ പങ്കെടുത്ത ഐതിഹാസിക റാലി.
                      </div>
                    </div>

                    <div className="flex items-start gap-2 group">
                      <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <div className="font-malayalam text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-[#198754]">
                          കോട്ടക്കുന്ന് ബാർ വിരുദ്ധ സമരം
                        </strong>
                        ബാറുകളുടെ എണ്ണം വർധിപ്പിക്കുന്നതിനെതിരെ കോട്ടക്കുന്നിൽ സംഘടിപ്പിച്ച ജനകീയ സമരം.
                      </div>
                    </div>

                    <div className="flex items-start gap-2 group">
                      <span className="w-4 h-4 bg-[#E53935] text-white flex items-center justify-center text-[10px] font-bold rounded-xs shrink-0 mt-0.5">
                        &gt;
                      </span>
                      <div className="font-malayalam text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-sans text-[11.5px] block font-black text-slate-800">
                          2022 ഒക്ടോബർ 22
                        </strong>
                        മക്കരപ്പറമ്പിൽ വെച്ച് മലപ്പുറം ജില്ലാ സമ്മേളനം വിജയകരമായി സംഘടിപ്പിച്ചു.
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 4: ACTIVE DISTRICTS & STATE HEADQUARTERS
           ======================================================================= */}
        <section className="bg-slate-900 text-white p-6 sm:p-8 border-t border-slate-800">
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
                JOIN LNS
              </button>
              <button
                type="button"
                onClick={onOpenPledgeModal}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded border border-white/20 transition-colors"
              >
                TAKE PLEDGE
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

export default About;
