import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  Calendar, 
  Sparkles, 
  HeartHandshake, 
  CheckCircle,
  PhoneCall,
  GraduationCap
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ActivityCard from '../components/ActivityCard';
import { activities, activityCategories } from '../data/activities';

const Activities = ({ onOpenJoinModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter activities
  const filteredActivities = activities.filter((act) => {
    const matchesCategory = selectedCategory === 'all' || act.category === selectedCategory;
    const matchesSearch = 
      act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.malayalamTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-br from-themeBlue-dark via-themeBlue to-slate-950 text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-themeGreen-light uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-themeGreen" />
            <span>Community Outreach & Vigilance</span>
          </div>
          <p className="font-malayalam text-lg sm:text-xl font-bold text-green-300">
            ഞങ്ങളുടെ പ്രവർത്തനങ്ങൾ
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Our Activities & Programmes
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Multi-tier grassroots initiatives transforming awareness into action across schools, campuses, and communities.
          </p>
        </div>
      </section>

      {/* 2. Modern Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-100 shadow-blue-subtle space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-88">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search activities or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 text-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 focus:border-themeBlue transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Results Counter */}
            <div className="text-xs text-gray-500 font-semibold self-end md:self-center bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-100">
              Showing <span className="font-black text-themeBlue">{filteredActivities.length}</span> of {activities.length} programmes
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {activityCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-themeBlue text-white shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Activities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredActivities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((act) => (
              <ActivityCard key={act.id} activity={act} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No activities found</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              We couldn't find any activity matching "{searchQuery}". Try selecting another category or resetting the search filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-themeBlue text-white text-xs font-bold rounded-xl hover:bg-themeBlue-hover transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Request an Awareness Program Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-themeBlue via-themeBlue-dark to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-themeGreen/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3.5 py-1 bg-themeGreen text-white text-xs font-bold rounded-full uppercase tracking-wider inline-block shadow-xs">
                For Schools, Colleges & Communities
              </span>
              <p className="font-malayalam text-lg font-bold text-green-300">
                നിങ്ങളുടെ സ്ഥാപനത്തിൽ ലഹരിവിരുദ്ധ സെമിനാർ സംഘടിപ്പിക്കാം
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Want to Host an Anti-Drug Awareness Session?
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                Our certified resource persons, psychologists, and legal experts provide free anti-drug workshops, street plays, and interactive student assemblies across Kerala.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-blue-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-themeGreen" />
                  <span>Free of Charge for Educational Institutions</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-themeGreen" />
                  <span>Customized for Age Groups</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="w-full py-3.5 px-6 rounded-xl bg-themeRed hover:bg-themeRed-hover text-white font-bold text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Request Camp / Speaker</span>
              </button>

              <a
                href="tel:14405"
                className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-themeGreen-light" />
                <span>Call State Help Desk: 14405</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
