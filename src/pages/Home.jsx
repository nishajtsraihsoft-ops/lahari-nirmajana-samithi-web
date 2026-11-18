import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Calendar, 
  MapPin, 
  HeartHandshake, 
  PhoneCall, 
  Megaphone, 
  GraduationCap, 
  Users, 
  HeartPulse, 
  CheckCircle,
  Clock,
  FileText,
  UserCheck,
  HandHeart,
  ChevronRight,
  ShieldCheck,
  Eye,
  Sparkles
} from 'lucide-react';
import Hero from '../components/Hero';
import { objectives, samithiContact, organisationRegions } from '../data/objectives';
import { activities } from '../data/activities';

const Home = ({ onOpenJoinModal, onOpenPledgeModal }) => {
  return (
    <div className="space-y-0 pb-16 sm:pb-24 bg-white text-gray-800">
      
      {/* =========================================================================
          1. HERO SLIDER BANNER (Matches Top Slider in Reference Image)
         ========================================================================= */}
      <Hero 
        onOpenJoinModal={onOpenJoinModal} 
        onOpenPledgeModal={onOpenPledgeModal} 
      />

      {/* =========================================================================
          2. CALLOUT / INTRO MISSION STATEMENT (Matches Text + Geometric Ribbon)
         ========================================================================= */}
      <section className="pt-10 sm:pt-20 pb-4 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-themeBlue-light text-themeBlue text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span>Kerala State Social Movement &bull; Since 2005</span>
        </div>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide sm:tracking-wider text-themeBlue font-sans break-words">
          JOIN OUR JOURNEY. MAKE YOUR IMPACT.
        </h2>
        
        <p className="font-malayalam text-sm sm:text-lg font-bold text-themeGreen mt-1 break-words">
          ലഹരിമുക്ത സമൂഹത്തിനായി ഒന്നിക്കാം
        </p>

        {/* Authentic Malayalam Narrative Content */}
        <p className="font-malayalam text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto mt-2.5 sm:mt-3 font-normal break-words">
          ലഹരി എന്ന സാമൂഹിക വിപത്തിനെതിരെ ജനകീയ കൂട്ടായ്മയിലൂടെ പ്രതിരോധം തീർക്കാനും ലഹരിമുക്തമായ ഒരു സമൂഹത്തെ വാർത്തെടുക്കാനും ഞങ്ങളോടൊപ്പം കൈകോർക്കൂ. വിദ്യാലയങ്ങളിലും കലാലയങ്ങളിലും സമൂഹത്തിലും നിരന്തര ബോധവൽക്കരണത്തിലൂടെ മുന്നോട്ട്.
        </p>

        <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto mt-2 font-medium break-words">
          Let's do something amazing together. Join hands with Lahari Nirmaargana Samithi (LNS) to safeguard our children, empower youth, and foster a healthy Kerala.
        </p>
      </section>

      {/* DECORATIVE GEOMETRIC ETHNIC RIBBON (Pattern Band from Reference) */}
      <div className="w-full bg-themeBlue py-2.5 sm:py-3 my-6 sm:my-10 overflow-hidden shadow-sm">
        <div className="flex items-center justify-around opacity-40 text-white space-x-3 sm:space-x-4">
          {[...Array(20)].map((_, i) => (
            <svg key={i} className="w-6 sm:w-8 h-3 sm:h-4 shrink-0" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0 10 L10 0 L20 10 L30 0 L40 10 L30 20 L20 10 L10 20 Z" />
              <circle cx="20" cy="10" r="3" fill="currentColor" />
            </svg>
          ))}
        </div>
      </div>

      {/* =========================================================================
          3. FOUR PRIMARY PROGRAM CARDS (Standard & Modern Card Design)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          
          {/* Program Card 1 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1544654803-b69140b285a4?auto=format&fit=crop&w=800&q=80" 
                  alt="Community Volunteering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeRed text-white shadow-md">
                  Grassroots Outreach
                </span>
              </div>
              <div className="p-6 space-y-2 text-left">
                <p className="text-[11px] font-bold uppercase tracking-wider text-themeRed">
                  COMMUNITY VOLUNTEERING
                </p>
                <h3 className="font-malayalam text-lg sm:text-xl font-black text-gray-900 group-hover:text-themeBlue transition-colors leading-snug">
                  ജനകീയ കൂട്ടായ്മകൾ
                </h3>
                <p className="font-malayalam text-xs text-gray-600 leading-relaxed font-normal">
                  പ്രാദേശിക വാർഡുകളിലും പഞ്ചായത്തുകളിലും ലഹരിക്കെതിരായ ജനകീയ ജാഗ്രതാ സമിതികളും ബോധവൽക്കരണ കൂട്ടായ്മകളും.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="w-full py-3 px-4 rounded-xl bg-themeRed hover:bg-themeRed-hover text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn active:scale-98"
              >
                <span>Join Community Programs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Program Card 2 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                  alt="Campus Vigilance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeGreen text-white shadow-md">
                  Youth & Students
                </span>
              </div>
              <div className="p-6 space-y-2 text-left">
                <p className="text-[11px] font-bold uppercase tracking-wider text-themeGreen">
                  CAMPUS VIGILANCE
                </p>
                <h3 className="font-malayalam text-lg sm:text-xl font-black text-gray-900 group-hover:text-themeBlue transition-colors leading-snug">
                  വിദ്യാലയ ബോധവൽക്കരണം
                </h3>
                <p className="font-malayalam text-xs text-gray-600 leading-relaxed font-normal">
                  സ്കൂളുകളിലും കോളേജുകളിലും വിദ്യാർത്ഥി സംരക്ഷണ സെല്ലുകളും ലഹരിവിരുദ്ധ സെമിനാറുകളും ബോധവൽക്കരണവും.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                to="/activities"
                className="w-full py-3 px-4 rounded-xl bg-themeBlue hover:bg-themeBlue-hover text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>View Campus Programs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Program Card 3 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" 
                  alt="Mass Action Camps"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeBlue text-white shadow-md">
                  Public Mobilization
                </span>
              </div>
              <div className="p-6 space-y-2 text-left">
                <p className="text-[11px] font-bold uppercase tracking-wider text-themeBlue">
                  MASS ACTION CAMPS
                </p>
                <h3 className="font-malayalam text-lg sm:text-xl font-black text-gray-900 group-hover:text-themeBlue transition-colors leading-snug">
                  പടയൊരുക്കം ക്യാമ്പുകൾ
                </h3>
                <p className="font-malayalam text-xs text-gray-600 leading-relaxed font-normal">
                  നൂറുകണക്കിന് വോളന്റിയർമാർ അണിനിരന്ന പടയൊരുക്കം ലഹരിവിരുദ്ധ ക്യാമ്പുകളും സംസ്ഥാന സമ്മേളനങ്ങളും.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                to="/activities"
                className="w-full py-3 px-4 rounded-xl bg-themeBlue hover:bg-themeBlue-hover text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>View Action Camps</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Program Card 4 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                  alt="Counseling & Rehab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeGreen text-white shadow-md">
                  Confidential & Free
                </span>
              </div>
              <div className="p-6 space-y-2 text-left">
                <p className="text-[11px] font-bold uppercase tracking-wider text-themeGreen">
                  COUNSELING &amp; REHAB
                </p>
                <h3 className="font-malayalam text-lg sm:text-xl font-black text-gray-900 group-hover:text-themeBlue transition-colors leading-snug">
                  കൗൺസിലിംഗും സഹായവും
                </h3>
                <p className="font-malayalam text-xs text-gray-600 leading-relaxed font-normal">
                  24x7 ഹെൽപ്‌ലൈനിലൂടെ ലഹരിബാധിതർക്കും കുടുംബങ്ങൾക്കും സൗജന്യ ഫോൺ കൗൺസിലിംഗും പുനരധിവാസ മാർഗനിർദ്ദേശവും.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a
                href={`tel:${samithiContact.helpline}`}
                className="w-full py-3 px-4 rounded-xl bg-themeGreen hover:bg-themeGreen-hover text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call: {samithiContact.helpline}</span>
              </a>
            </div>
          </div>

        </div>

        {/* STYLIZED CHEVRON BROWSE LINK */}
        <div className="text-center mt-8 sm:mt-12 px-2">
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-50/70 hover:bg-blue-100/80 text-[10.5px] sm:text-xs font-black tracking-wider sm:tracking-widest uppercase text-themeBlue transition-all group border border-themeBlue/20 shadow-xs max-w-full text-center flex-wrap justify-center"
          >
            <span>&gt;&gt;&gt;</span>
            <span className="underline underline-offset-4">BROWSE ALL OBJECTIVES &amp; GOALS</span>
            <span>&lt;&lt;&lt;</span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          4. SIGNATURE CIRCULAR STAMP BADGES (Modern Standard Stat Cards - 2 Col on Mobile)
         ========================================================================= */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            
            {/* Stat Card 1 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center hover:-translate-y-1.5 group">
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-1.5 sm:mb-2">
                <svg className="w-full h-full text-themeBlue" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  {[...Array(12)].map((_, i) => (
                    <circle 
                      key={i} 
                      cx={50 + 44 * Math.cos((i * 30 * Math.PI) / 180)} 
                      cy={50 + 44 * Math.sin((i * 30 * Math.PI) / 180)} 
                      r="2.5" 
                      fill="currentColor" 
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-themeBlue group-hover:scale-110 transition-transform">
                  <HandHeart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 stroke-[1.5]" />
                </div>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-black uppercase tracking-tight sm:tracking-wider text-gray-500 leading-snug block">
                  NUMBER OF VOLUNTEERS
                </span>
                <span className="font-mono text-xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight block">
                  10,000+
                </span>
                <span className="font-malayalam text-[10px] sm:text-xs text-themeGreen font-bold block">
                  സന്നദ്ധപ്രവർത്തകർ
                </span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center hover:-translate-y-1.5 group">
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-1.5 sm:mb-2">
                <svg className="w-full h-full text-themeRed" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-themeRed group-hover:scale-110 transition-transform">
                  <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 stroke-[1.5]" />
                </div>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-black uppercase tracking-tight sm:tracking-wider text-gray-500 leading-snug block">
                  HOURS OF CAMPAIGNING
                </span>
                <span className="font-mono text-xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight block">
                  1,530,600
                </span>
                <span className="font-malayalam text-[10px] sm:text-xs text-themeRed font-bold block">
                  പ്രവർത്തന മണിക്കൂറുകൾ
                </span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center hover:-translate-y-1.5 group">
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-1.5 sm:mb-2">
                <svg className="w-full h-full text-themeBlue" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  {[...Array(12)].map((_, i) => (
                    <circle 
                      key={i} 
                      cx={50 + 44 * Math.cos((i * 30 * Math.PI) / 180)} 
                      cy={50 + 44 * Math.sin((i * 30 * Math.PI) / 180)} 
                      r="2.5" 
                      fill="currentColor" 
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-themeBlue group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 stroke-[1.5]" />
                </div>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-black uppercase tracking-tight sm:tracking-wider text-gray-500 leading-snug block">
                  NUMBER OF PROGRAMMES
                </span>
                <span className="font-mono text-xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight block">
                  600+
                </span>
                <span className="font-malayalam text-[10px] sm:text-xs text-themeGreen font-bold block">
                  ലഹരിവിരുദ്ധ പരിപാടികൾ
                </span>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center hover:-translate-y-1.5 group">
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-1.5 sm:mb-2">
                <svg className="w-full h-full text-themeGreen" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 5" />
                  <circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-themeGreen group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 stroke-[1.5]" />
                </div>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-black uppercase tracking-tight sm:tracking-wider text-gray-500 leading-snug block">
                  PEOPLE NEEDED TO MAKE IMPACT
                </span>
                <span className="text-xl sm:text-3xl lg:text-4xl font-black tracking-wider text-themeGreen leading-tight font-sans block">
                  YOU
                </span>
                <span className="font-malayalam text-[10px] sm:text-xs text-gray-700 font-bold block">
                  താങ്കൾ (കൈകോർക്കൂ)
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FEATURED PROJECTS SECTION (Standard & Modern Card Design)
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-themeBlue block mb-1">
            Impact in Action
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-gray-900 font-sans">
            FEATURED PROJECTS
          </h2>
          <p className="font-malayalam text-xs sm:text-sm font-bold text-themeGreen mt-1">
            പ്രധാന ജനകീയ പ്രവർത്തനങ്ങളും മുന്നേറ്റങ്ങളും
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Featured Project Card 1 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col justify-between hover:-translate-y-2">
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="Campus Anti-Drug Vigilance Initiative"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeBlue text-white shadow-md">
                  Youth Protection
                </span>
                <span className="absolute bottom-3 left-3.5 text-[10px] text-white/95 font-mono px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs">
                  Colleges Across Kerala
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3 text-left">
                <h3 className="font-sans text-sm font-black uppercase tracking-wider text-gray-900 group-hover:text-themeBlue transition-colors leading-snug">
                  CAMPUS ANTI-DRUG VIGILANCE INITIATIVE
                </h3>
                <h4 className="font-malayalam text-base font-bold text-themeBlue">
                  വിദ്യാലയ - കലാലയ ബോധവൽക്കരണം
                </h4>
                <p className="font-malayalam text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  വിദ്യാർത്ഥികളിലും യുവജനങ്ങളിലും ലഹരിക്കെതിരായ ബോധവൽക്കരണവും സാമൂഹിക ഉത്തരവാദിത്തവും വളർത്തുന്ന സെമിനാറുകളും ക്യാമ്പയിനുകളും.
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-7 pt-0">
              <Link
                to="/activities"
                className="w-full py-3 px-4 rounded-xl border-2 border-themeBlue/20 text-themeBlue hover:bg-themeBlue hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <span>Read Full Campaign Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Featured Project Card 2 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col justify-between hover:-translate-y-2">
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1569437061241-a848be43cc82?auto=format&fit=crop&w=800&q=80"
                  alt="Padayorukkam Mass Action Camp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeGreen text-white shadow-md">
                  Statewide Mobilization
                </span>
                <span className="absolute bottom-3 left-3.5 text-[10px] text-white/95 font-mono px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs">
                  Panakkad to Collectorate
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3 text-left">
                <h3 className="font-sans text-sm font-black uppercase tracking-wider text-gray-900 group-hover:text-themeGreen transition-colors leading-snug">
                  PADAYORUKKAM MASS ACTION CAMP
                </h3>
                <h4 className="font-malayalam text-base font-bold text-themeGreen">
                  പടയൊരുക്കം ലഹരിവിരുദ്ധ ക്യാമ്പ്
                </h4>
                <p className="font-malayalam text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  പാണക്കാട് അബ്ബാസ് അലി തങ്ങളുടെ വസതിയിൽ നിന്നാരംഭിച്ച് കലക്ടറേറ്റിന് മുന്നിൽ സമാപിച്ച 600-ലധികം പേർ പങ്കെടുത്ത ജനകീയ പടയൊരുക്കം ക്യാമ്പ്.
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-7 pt-0">
              <Link
                to="/activities"
                className="w-full py-3 px-4 rounded-xl border-2 border-themeGreen/20 text-themeGreen hover:bg-themeGreen hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <span>Read Full Campaign Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Featured Project Card 3 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col justify-between hover:-translate-y-2">
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80"
                  alt="Kottakkunnu Civic Action Protest"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeRed text-white shadow-md">
                  Substance Control
                </span>
                <span className="absolute bottom-3 left-3.5 text-[10px] text-white/95 font-mono px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs">
                  Kottakkunnu, Malappuram
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3 text-left">
                <h3 className="font-sans text-sm font-black uppercase tracking-wider text-gray-900 group-hover:text-themeRed transition-colors leading-snug">
                  KOTTAKKUNNU CIVIC ACTION PROTEST
                </h3>
                <h4 className="font-malayalam text-base font-bold text-themeRed">
                  കോട്ടക്കുന്ന് ജനകീയ പ്രതിഷേധം
                </h4>
                <p className="font-malayalam text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  ബാറുകളുടെ എണ്ണം വർധിപ്പിക്കുന്നതിനെതിരെയും ലഹരി വ്യാപനത്തിനെതിരെയും കോട്ടക്കുന്നിൽ സംഘടിപ്പിച്ച വിപുലമായ ജനകീയ പ്രതിഷേധ സമരം.
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-7 pt-0">
              <Link
                to="/activities"
                className="w-full py-3 px-4 rounded-xl border-2 border-themeRed/20 text-themeRed hover:bg-themeRed hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <span>Read Full Campaign Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* STYLIZED CHEVRON BROWSE LINK */}
        <div className="text-center mt-8 sm:mt-12 px-2">
          <Link
            to="/activities"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-50/70 hover:bg-blue-100/80 text-[10.5px] sm:text-xs font-black tracking-wider sm:tracking-widest uppercase text-themeBlue transition-all group border border-themeBlue/20 shadow-xs max-w-full text-center flex-wrap justify-center"
          >
            <span>&gt;&gt;&gt;</span>
            <span className="underline underline-offset-4">BROWSE ALL PROJECTS &amp; CAMPAIGNS</span>
            <span>&lt;&lt;&lt;</span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          6. FROM OUR MOVEMENT / BLOG (Standard & Modern Card Design)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-amber-700/80 block mb-1">
              Field Reports &amp; Inspiring Stories
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-gray-900 font-sans">
              FROM OUR MOVEMENT
            </h2>
            <p className="font-malayalam text-xs sm:text-sm font-bold text-gray-600 mt-1">
              വാർത്തകളും പുതിയ വിവരങ്ങളും
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Story Card 1 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-2">
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
                    alt="Community Awareness Sessions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeBlue text-white shadow-md">
                    Community Action
                  </span>
                </div>
                <div className="p-6 sm:p-8 space-y-3 text-left">
                  <span className="text-[10px] font-black uppercase tracking-wider text-themeBlue block">
                    STATEWIDE NETWORK &bull; HEALTHY SOCIETY
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-themeBlue transition-colors leading-snug">
                    Community Gatherings &amp; Grassroots Drug-Free Networks
                  </h3>
                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/60">
                    <p className="font-malayalam text-xs sm:text-sm text-gray-700 leading-relaxed font-normal italic">
                      "ലഹരിക്കെതിരെയുള്ള പോരാട്ടം ഒരു വ്യക്തിയുടെയോ സംഘടനയുടെയോ മാത്രം ഉത്തരവാദിത്തമല്ല. സമൂഹത്തിലെ ഓരോ വ്യക്തിക്കും ഈ പോരാട്ടത്തിൽ പങ്കാളിയാകാനുണ്ട്."
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 pt-0">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-themeBlue hover:bg-themeBlue-hover text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all group/btn"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-2">
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                    alt="Campus Anti-Drug Class"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeGreen text-white shadow-md">
                    Youth Safety
                  </span>
                </div>
                <div className="p-6 sm:p-8 space-y-3 text-left">
                  <span className="text-[10px] font-black uppercase tracking-wider text-themeGreen block">
                    CAMPUS PROGRAM &bull; CITIZEN PLEDGE
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-themeGreen transition-colors leading-snug">
                    Empowering Students: Anti-Substance Seminars Across Schools
                  </h3>
                  <div className="p-4 rounded-2xl bg-green-50/50 border border-green-100/60">
                    <p className="font-malayalam text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                      വിദ്യാർത്ഥികളിലും കലാലയങ്ങളിലും ലഹരിവിരുദ്ധ അവബോധം സൃഷ്ടിച്ചു സുരക്ഷിതമായ ഭാവിയെ കരുപിടിപ്പിക്കാൻ സംഘടിപ്പിക്കുന്ന പ്രത്യേക ക്ലാസ്സുകൾ.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 pt-0">
                <button
                  type="button"
                  onClick={onOpenPledgeModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-themeGreen hover:bg-themeGreen-hover text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all group/btn"
                >
                  <Award className="w-4 h-4" />
                  <span>Take Pledge Now</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          7. REGIONAL NETWORK STRIP & 24x7 HELPLINE BANNER
         ========================================================================= */}
      <section className="bg-slate-900 text-white py-12 sm:py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left w-full md:w-auto">
              <span className="px-3 py-1 rounded-full bg-white/10 text-themeGreen-light text-[10.5px] sm:text-xs font-bold uppercase tracking-widest inline-block">
                Kerala Statewide Network
              </span>
              <p className="font-malayalam text-base sm:text-xl md:text-2xl font-bold text-white break-words">
                14 ജില്ലകളിലും പ്രാദേശിക തലങ്ങളിലും സമിതിയുടെ പ്രവർത്തനം
              </p>
              <p className="text-xs text-gray-400">
                CH Building, Kunnummal, Malappuram &bull; Established 2005
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 w-full md:w-auto">
              <a
                href={`tel:${samithiContact.helpline}`}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-themeRed hover:bg-themeRed-hover text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg text-center"
              >
                <PhoneCall className="w-4 h-4 animate-pulse" />
                <span>24x7 Helpline: {samithiContact.helpline}</span>
              </a>

              <button
                type="button"
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Join Volunteer Wing</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
