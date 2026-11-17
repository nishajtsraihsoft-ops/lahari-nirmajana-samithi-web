import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Award, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  HeartHandshake,
  UserCheck
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import LeaderCard from '../components/LeaderCard';
import { leaders, leadershipCategories } from '../data/leaders';

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
      leader.malayalamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.committee.toLowerCase().includes(searchQuery.toLowerCase());

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
            <span>Governance & Visionary Direction</span>
          </div>
          <p className="font-malayalam text-lg sm:text-xl font-bold text-green-300">
            നേതൃത്വം & ഭരണസമിതി
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Our Leadership Directory
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Eminent jurists, medical specialists, social workers, and civic leaders guiding our statewide movement with integrity and dedication.
          </p>
        </div>
      </section>

      {/* 2. Directory Controls (Search & Category Filters) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-100 shadow-blue-subtle space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-88">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search leader by name, district, or role..."
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

            {/* Counter */}
            <div className="text-xs text-gray-500 font-semibold self-end md:self-center bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-100">
              Displaying <span className="font-black text-themeBlue">{filteredLeaders.length}</span> leader profiles
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {leadershipCategories.map((cat) => (
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

      {/* 3. Leadership Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredLeaders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredLeaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
              <UserCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No leadership profile found</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              We couldn't find any leader matching "{searchQuery}". Try selecting another category or resetting the search filter.
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

      {/* 4. Leadership Values Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50/40 rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-blue-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-themeGreen">Democratic Governance</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Committed to Transparent & Ethical Leadership
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                The governing body of Lahari Nirmaargana Samithi functions democratically with regular elections, audited financial reporting, and participatory representation from all 14 revenue districts of Kerala. All leaders serve honorarily without commercial remuneration.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="py-3.5 px-6 rounded-xl bg-themeRed hover:bg-themeRed-hover text-white font-bold text-xs sm:text-sm text-center shadow-md transition-all flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Join District Working Committee</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
