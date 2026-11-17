import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  ArrowRight, 
  Award, 
  Calendar, 
  MapPin, 
  HeartHandshake, 
  CheckCircle2, 
  PhoneCall,
  Zap,
  Megaphone,
  GraduationCap,
  Users,
  HeartPulse,
  Sparkles,
  CheckCircle,
  FileCheck2
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ActivityCard from '../components/ActivityCard';
import { objectives } from '../data/objectives';
import { activities, latestActivities } from '../data/activities';

// Map icon string name to Lucide component
const ICON_MAP = {
  ShieldCheck,
  Zap,
  Megaphone,
  GraduationCap,
  Users,
  HeartPulse
};

const Home = ({ onOpenJoinModal, onOpenPledgeModal }) => {
  // Highlight top 6 activities on Home Page
  const featuredActivities = activities.slice(0, 6);

  return (
    <div className="space-y-24 sm:space-y-28 pb-24">
      {/* 1. Hero Section (With Clear Background Image) */}
      <Hero 
        onOpenJoinModal={onOpenJoinModal} 
        onOpenPledgeModal={onOpenPledgeModal} 
      />

      {/* 2. Organisation Introduction Section (Ultra-Modern Asymmetric Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-white via-blue-50/20 to-emerald-50/15 rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-xl overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-themeBlue/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-themeBlue-light text-themeBlue border border-themeBlue/20 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-themeBlue" />
                <span>STATE LEVEL SOCIAL ORGANISATION</span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="/LNS-Logo.png"
                  alt="Lahari Nirmaargana Samithi Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-2xl bg-white p-2 shadow-md border border-gray-100 shrink-0"
                />
                <div>
                  <p className="font-malayalam text-base sm:text-lg font-bold text-themeGreen mb-0.5">
                    സ്വാഗതം &bull; ലഹരി നിർമ്മാർജന സമിതി
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Welcome to <span className="text-themeBlue">Lahari Nirmaargana Samithi</span>
                  </h2>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                Lahari Nirmaargana Samithi (ലഹരി നിർമ്മാർജന സമിതി) is a dedicated statewide social organization committed to building a healthy, vigilant, and 100% drug-free society across Kerala.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Substance abuse is not merely an individual affliction — it shatters families, undermines youth potential, and disrupts community harmony. Through persistent grassroots awareness campaigns, campus vigilance forums, community policing partnerships, psychological counseling, and medical rehabilitation linkage, we work relentlessly to safeguard every neighbourhood and empower the younger generation with truth and dignity.
              </p>

              {/* Three Modern Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-themeBlue-light text-themeBlue mb-1">
                    Pillar 01
                  </span>
                  <span className="block text-themeBlue font-black text-lg">Awaken</span>
                  <span className="text-xs text-gray-500 block leading-snug">Educating schools and families on early perils</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-themeGreen-light text-themeGreen-dark mb-1">
                    Pillar 02
                  </span>
                  <span className="block text-themeGreen font-black text-lg">Protect</span>
                  <span className="text-xs text-gray-500 block leading-snug">Ward sentinels and student peer vigilance squads</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-themeRed-light text-themeRed mb-1">
                    Pillar 03
                  </span>
                  <span className="block text-themeRed font-black text-lg">Restore</span>
                  <span className="text-xs text-gray-500 block leading-snug">Compassionate counseling and de-addiction aid</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-themeBlue hover:bg-themeBlue-hover shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Read More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={onOpenPledgeModal}
                  className="px-5 py-3.5 rounded-xl font-semibold text-sm text-themeGreen-dark bg-themeGreen-light hover:bg-green-100 border border-themeGreen/30 transition-colors flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-themeGreen" />
                  <span>Join The Anti-Drug Movement</span>
                </button>
              </div>
            </div>

            {/* Right Side: Modern Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1544654803-b69140b285a4?auto=format&fit=crop&w=1000&q=80"
                  alt="Lahari Nirmaargana Samithi Awareness Camp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-themeGreen text-[11px] font-black uppercase tracking-wider mb-2 inline-block shadow-xs">
                    Statewide Mission
                  </span>
                  <p className="font-malayalam text-sm font-bold text-green-200">
                    ലഹരിക്കെതിരെ ജനകീയ മുന്നേറ്റം
                  </p>
                  <h4 className="text-base sm:text-lg font-bold leading-tight">
                    Statewide Community Vigilance & Peer Guidance
                  </h4>
                </div>
              </div>

              {/* Floating Modern Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-100 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-themeBlue-light flex items-center justify-center text-themeBlue shadow-2xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-lg font-black text-gray-900 leading-tight">100% Non-Profit</span>
                  <span className="block text-xs text-gray-500 font-medium">Govt. Registered State NGO</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section (Cutting-Edge Manifesto Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Guiding Principles"
          badgeColor="blue"
          malayalamTitle="നമ്മുടെ കാഴ്ചപ്പാടും ലക്ഷ്യവും"
          title="Vision & Mission"
          subtitle="Our institutional compass guiding every anti-substance campaign, educational drive, and community intervention."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISION CARD */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-10 border-2 border-themeBlue/20 shadow-blue-subtle hover:shadow-blue-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-36 h-36 bg-themeBlue-light/40 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-themeBlue-light flex items-center justify-center text-themeBlue shadow-2xs">
                <Compass className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase tracking-widest text-themeBlue">
                  Institutional Direction
                </span>
                <p className="font-malayalam text-sm font-bold text-gray-500">
                  കാഴ്ചപ്പാട് (VISION)
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  OUR VISION
                </h3>
              </div>
              <blockquote className="text-base sm:text-lg text-gray-700 italic border-l-4 border-themeBlue pl-4 py-2 font-medium bg-blue-50/40 rounded-r-2xl">
                "To build a healthy, responsible and drug-free society where every individual can live with dignity and freedom from substance abuse."
              </blockquote>
              <p className="font-malayalam text-sm text-themeGreen-dark leading-relaxed font-semibold">
                "ഓരോ വ്യക്തിക്കും ലഹരിയുടെ കരാളഹസ്തങ്ങളിൽ നിന്ന് മുക്തമായി ആത്മാഭിമാനത്തോടെയും ആരോഗ്യത്തോടെയും ജീവിക്കാൻ കഴിയുന്ന ഒരു നവസമൂഹത്തെ സൃഷ്ടിക്കുക."
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-themeBlue">
              <span>Goal: Zero Addiction Tolerance</span>
              <span className="w-2.5 h-2.5 rounded-full bg-themeBlue"></span>
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-10 border-2 border-themeGreen/20 shadow-green-subtle hover:shadow-blue-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-36 h-36 bg-themeGreen-light/40 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-themeGreen-light flex items-center justify-center text-themeGreen shadow-2xs">
                <Target className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase tracking-widest text-themeGreen">
                  Action Roadmap
                </span>
                <p className="font-malayalam text-sm font-bold text-gray-500">
                  ദൗത്യം (MISSION)
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  OUR MISSION
                </h3>
              </div>
              <blockquote className="text-base sm:text-lg text-gray-700 italic border-l-4 border-themeGreen pl-4 py-2 font-medium bg-green-50/40 rounded-r-2xl">
                "To prevent drug abuse through awareness, education, community participation, youth empowerment and collective social responsibility."
              </blockquote>
              <p className="font-malayalam text-sm text-themeGreen-dark leading-relaxed font-semibold">
                "ബോധവൽക്കരണം, വിദ്യാഭ്യാസം, ജനകീയ പങ്കാളിത്തം, യുവജന ശാക്തീകരണം, സാമൂഹിക ഉത്തരവാദിത്തം എന്നിവയിലൂടെ ലഹരി ഉപയോഗം പൂർണ്ണമായി പ്രതിരോധിക്കുക."
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-themeGreen">
              <span>Execution: 14 Districts & 450+ Wards</span>
              <span className="w-2.5 h-2.5 rounded-full bg-themeGreen"></span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Objectives Section (Modern Dynamic Cards) */}
      <section className="bg-gradient-to-b from-gray-50/70 via-white to-gray-50/70 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Strategic Focus"
            badgeColor="green"
            malayalamTitle="നമ്മുടെ പ്രധാന ലക്ഷ്യങ്ങൾ"
            title="Our Objectives"
            subtitle="Six interconnected strategic pillars that power our anti-drug vigilance across the State."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {objectives.map((obj) => {
              const IconComp = ICON_MAP[obj.icon] || ShieldCheck;
              return (
                <div
                  key={obj.id}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-blue-subtle hover:shadow-blue-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="space-y-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-2xs"
                      style={{ backgroundColor: `${obj.color}15`, color: obj.color }}
                    >
                      <IconComp className="w-7 h-7" />
                    </div>

                    <div>
                      <p className="font-malayalam text-xs font-bold text-themeGreen mb-1">
                        {obj.malayalamTitle}
                      </p>
                      <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-themeBlue transition-colors">
                        {obj.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {obj.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span className="font-semibold text-gray-500">Continuous Priority</span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: obj.color }}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Activities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-themeBlue-light text-themeBlue border border-themeBlue/20 mb-2">
              <span className="w-2 h-2 rounded-full bg-themeBlue animate-pulse"></span>
              Core Initiatives
            </div>
            <p className="font-malayalam text-base sm:text-lg font-bold text-themeGreen">
              ഞങ്ങളുടെ പ്രധാന കർമ്മപദ്ധതികൾ
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Ongoing Activities
            </h2>
          </div>

          <Link
            to="/activities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-themeBlue bg-themeBlue-light/80 hover:bg-themeBlue hover:text-white transition-all shadow-2xs"
          >
            <span>View All Activities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredActivities.map((act) => (
            <ActivityCard key={act.id} activity={act} />
          ))}
        </div>
      </section>

      {/* 6. Interactive Anti-Drug Pledge Banner (High Engagement Modern Card) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-themeGreen-dark via-themeGreen to-emerald-950 text-white p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider inline-block">
                Online Commitment Campaign
              </span>
              <p className="font-malayalam text-lg sm:text-xl font-bold text-green-200">
                ലഹരിവിരുദ്ധ പ്രതിജ്ഞ എടുക്കൂ &bull; സർട്ടിഫിക്കറ്റ് നേടൂ
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Take the Official Anti-Drug Pledge Online
              </h3>
              <p className="text-green-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                Stand tall against substance abuse. Take the solemn oath in Malayalam or English and receive your personalized digital certificate as a <strong>Verified Anti-Drug Champion</strong>.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={onOpenPledgeModal}
                className="py-3.5 px-6 rounded-xl bg-white hover:bg-gray-100 text-themeGreen-dark font-extrabold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Award className="w-5 h-5 text-themeGreen" />
                <span>Take Pledge Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Latest Activities Section */}
      <section className="bg-gradient-to-b from-blue-50/40 via-white to-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="On the Ground"
            badgeColor="red"
            malayalamTitle="സമീപകാല പ്രവർത്തനങ്ങൾ"
            title="Latest Programmes & Events"
            subtitle="Highlights from recent anti-narcotics rallies, campus seminars, and community workshops conducted across Kerala."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestActivities.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-blue-subtle hover:shadow-blue-hover transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5"
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-themeRed text-white shadow-xs">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-1.5">
                      <Calendar className="w-3.5 h-3.5 text-themeBlue" />
                      <span>{item.date}</span>
                    </div>

                    <p className="font-malayalam text-xs font-bold text-themeGreen line-clamp-1">
                      {item.malayalamTitle}
                    </p>
                    <h3 className="text-base font-extrabold text-gray-900 group-hover:text-themeBlue transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-400 flex items-center gap-1 text-[11px] truncate max-w-[150px]">
                      <MapPin className="w-3 h-3 text-emerald-500 shrink-0" />
                      {item.location}
                    </span>
                    <Link
                      to="/gallery"
                      className="text-themeBlue font-bold hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                      <span>Photos</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-themeBlue bg-white border-2 border-themeBlue/30 hover:bg-themeBlue hover:text-white transition-all shadow-xs"
            >
              <span>Explore Event Media Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Call To Action (CTA) Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-themeBlue-dark via-themeBlue to-emerald-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-themeGreen/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-themeRed text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Join The Campaign
            </span>

            <p className="font-malayalam text-xl sm:text-2xl font-bold text-green-300">
              ലഹരിവിമുക്ത കേരളത്തിനായി നിങ്ങൾക്കും പങ്കാളിയാകാം
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Be a Part of the Change!
            </h2>

            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              "Your participation can help create a safer and healthier future. Join hands with Lahari Nirmaargana Samithi as an ambassador, volunteer, or supporter."
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="px-8 py-3.5 rounded-xl font-extrabold text-base text-white bg-themeRed hover:bg-themeRed-hover shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Join Our Mission</span>
              </button>

              <button
                type="button"
                onClick={onOpenPledgeModal}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-themeGreen-light hover:text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-themeGreen" />
                <span>Take Anti-Drug Pledge</span>
              </button>
            </div>

            <div className="pt-4 text-xs text-blue-200 flex items-center justify-center gap-4">
              <span>&bull; Registered Volunteers in All 14 Districts</span>
              <span>&bull; Free Confidential Help Desk</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
