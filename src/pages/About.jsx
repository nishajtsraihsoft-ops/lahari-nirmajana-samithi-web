import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Compass, 
  Target, 
  CheckCircle, 
  Layers, 
  Users, 
  Award, 
  Calendar, 
  ArrowRight,
  HeartHandshake,
  BookOpen,
  MapPin,
  Building2,
  Sparkles
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { organisationalLevels, historyMilestones } from '../data/objectives';

const KERALA_DISTRICTS_LIST = [
  { name: 'Thiruvananthapuram', zone: 'South', units: '42 Units' },
  { name: 'Kollam', zone: 'South', units: '36 Units' },
  { name: 'Pathanamthitta', zone: 'South', units: '28 Units' },
  { name: 'Alappuzha', zone: 'South', units: '32 Units' },
  { name: 'Kottayam', zone: 'Central', units: '34 Units' },
  { name: 'Idukki', zone: 'Central', units: '26 Units' },
  { name: 'Ernakulam', zone: 'Central', units: '58 Units' },
  { name: 'Thrissur', zone: 'Central', units: '44 Units' },
  { name: 'Palakkad', zone: 'Central', units: '38 Units' },
  { name: 'Malappuram', zone: 'North', units: '48 Units' },
  { name: 'Kozhikode', zone: 'North', units: '46 Units' },
  { name: 'Wayanad', zone: 'North', units: '22 Units' },
  { name: 'Kannur', zone: 'North', units: '40 Units' },
  { name: 'Kasaragod', zone: 'North', units: '28 Units' }
];

const About = ({ onOpenJoinModal }) => {
  const [selectedZone, setSelectedZone] = useState('All');

  const filteredDistricts = selectedZone === 'All'
    ? KERALA_DISTRICTS_LIST
    : KERALA_DISTRICTS_LIST.filter(d => d.zone === selectedZone);

  return (
    <div className="space-y-24 sm:space-y-28 pb-24">
      {/* 1. Modern Header Banner */}
      <section className="relative bg-gradient-to-br from-themeBlue-dark via-themeBlue to-slate-950 text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex justify-center mb-2">
            <img
              src="/LNS-Logo.png"
              alt="Lahari Nirmaargana Samithi Logo"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-3xl bg-white p-2.5 shadow-2xl border-2 border-white/40"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-themeGreen-light uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-themeGreen" />
            <span>Official Organisation Profile</span>
          </div>
          <p className="font-malayalam text-lg sm:text-xl font-bold text-green-300">
            ഞങ്ങളെക്കുറിച്ച്
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            About Lahari Nirmaargana Samithi
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            United in purpose to build a society where health, dignity, and awareness triumph over substance abuse.
          </p>
        </div>
      </section>

      {/* 2. Detailed Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-themeBlue-light text-themeBlue uppercase tracking-wider">
              <span>Our Commitment</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              A State Movement for <span className="text-themeBlue">Social Awakening</span> & <span className="text-themeGreen">Youth Protection</span>
            </h2>

            <p className="text-base text-gray-700 leading-relaxed font-medium">
              Lahari Nirmaargana Samithi (ലഹരി നിർമ്മാർജന സമിതി) is a registered state-level non-governmental social organization headquartered in Thiruvananthapuram, Kerala. Founded by eminent jurists, healthcare specialists, educators, and social advocates, the organisation spearheads the fight against the infiltration of illicit narcotic drugs, psychotropic substances, and substance dependencies among the public.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              In an era where synthetic and prescription narcotics increasingly threaten adolescents and young adults, our organisation works as a bridge between citizens, law enforcement agencies (Excise and Police), educational institutions, healthcare professionals, and local self-governments. We believe that true liberation from drugs requires not just strict policing, but empathetic family support, rigorous public awareness, and youth-oriented cultural empowerment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-themeBlue shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  Non-political and secular public welfare organisation
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-green-50/70 border border-green-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-themeGreen shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  Affiliated vigilance cells across all 14 districts
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
                alt="Samithi State Council Assembly"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 text-center max-w-[210px]">
              <span className="block text-3xl font-black text-themeRed">10+ Years</span>
              <span className="text-xs text-gray-600 font-semibold block mt-0.5">Of Steadfast Civic Advocacy in Kerala</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Core Values */}
      <section className="bg-gradient-to-b from-gray-50/70 via-white to-gray-50/70 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Institutional Identity"
            badgeColor="blue"
            malayalamTitle="കാഴ്ചപ്പാട് & ദൗത്യം"
            title="Vision & Mission Statements"
            subtitle="The fundamental foundations that define our daily initiatives and institutional character."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-blue-subtle space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-themeBlue-light text-themeBlue flex items-center justify-center">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-themeBlue">Vision</span>
              <p className="font-malayalam text-sm font-bold text-themeGreen">കാഴ്ചപ്പാട്</p>
              <h3 className="text-2xl font-extrabold text-gray-900">A Drug-Free, Dignified Generation</h3>
              <p className="text-gray-700 leading-relaxed italic bg-blue-50/50 p-4 rounded-2xl border-l-4 border-themeBlue text-sm sm:text-base">
                "To build a healthy, responsible and drug-free society where every individual can live with dignity and freedom from substance abuse."
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                We envision communities where children grow up without fear of narcotic peddling, where schools remain sanctuaries of intellectual growth, and where individuals trapped in addiction find a compassionate, stigma-free path to healing.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-green-subtle space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-themeGreen-light text-themeGreen flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-themeGreen">Mission</span>
              <p className="font-malayalam text-sm font-bold text-themeGreen">ദൗത്യം</p>
              <h3 className="text-2xl font-extrabold text-gray-900">Prevention Through Education & Action</h3>
              <p className="text-gray-700 leading-relaxed italic bg-green-50/50 p-4 rounded-2xl border-l-4 border-themeGreen text-sm sm:text-base">
                "To prevent drug abuse through awareness, education, community participation, youth empowerment and collective social responsibility."
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                We actively organize student anti-drug clubs, conduct multi-tier training for parents, provide confidential family counseling, coordinate rehabilitation linkages, and mobilize public vigilance at the panchayat ward level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Aims and Objectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Charter & Mandate"
          badgeColor="red"
          malayalamTitle="ലക്ഷ്യങ്ങളും പ്രവർത്തന മാർഗ്ഗരേഖയും"
          title="Aims and Objectives"
          subtitle="Specific goals outlined in the constitution of Lahari Nirmaargana Samithi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-blue-subtle space-y-3">
            <span className="w-9 h-9 rounded-xl bg-themeBlue-light text-themeBlue font-black text-sm flex items-center justify-center">1</span>
            <h4 className="text-lg font-extrabold text-gray-900">Eradication of Substance Peddling</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Collaborating with law enforcement agencies to identify hotspots around schools, train stations, and bus terminals to intercept illegal narcotic channels.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-green-subtle space-y-3">
            <span className="w-9 h-9 rounded-xl bg-themeGreen-light text-themeGreen font-black text-sm flex items-center justify-center">2</span>
            <h4 className="text-lg font-extrabold text-gray-900">Institutional Campus Sentinel Forums</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Establishing dedicated student-led anti-drug councils across schools, ITIs, colleges, and university campuses with teacher mentor oversight.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-red-subtle space-y-3">
            <span className="w-9 h-9 rounded-xl bg-themeRed-light text-themeRed font-black text-sm flex items-center justify-center">3</span>
            <h4 className="text-lg font-extrabold text-gray-900">Family & Parental Empowerment</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Educating parents to spot early behavioural anomalies, understand adolescent peer stress, and maintain open communication without stigma.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-green-subtle space-y-3">
            <span className="w-9 h-9 rounded-xl bg-themeGreen-light text-themeGreen font-black text-sm flex items-center justify-center">4</span>
            <h4 className="text-lg font-extrabold text-gray-900">Counselling & Aftercare Rehabilitation</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Providing free confidential telephonic and in-person counseling, as well as institutional referrals to certified de-addiction medical centers.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-blue-subtle space-y-3">
            <span className="w-9 h-9 rounded-xl bg-themeBlue-light text-themeBlue font-black text-sm flex items-center justify-center">5</span>
            <h4 className="text-lg font-extrabold text-gray-900">Alternative Youth Sports & Arts</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Channeling youthful passion into sports leagues, football tournaments, creative writing, street theatre, and cultural festivals under the banner "Play, Create, Live Free".
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-red-subtle space-y-3">
            <span className="w-9 h-9 rounded-xl bg-themeRed-light text-themeRed font-black text-sm flex items-center justify-center">6</span>
            <h4 className="text-lg font-extrabold text-gray-900">Policy Research & Legal Advocacy</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Presenting data-backed memoranda to government authorities advocating stronger NDPS enforcement, strict vendor licenses, and de-addiction hospital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 5. History of the Organisation (Modern Timeline) */}
      <section className="bg-gradient-to-b from-white via-blue-50/20 to-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Journey"
            badgeColor="blue"
            malayalamTitle="പ്രസ്ഥാനത്തിന്റെ നാൾവഴികൾ"
            title="History of the Organisation"
            subtitle="From a grassroots initiative in Thiruvananthapuram to a statewide social vigilance network."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline center line */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-themeBlue via-themeGreen to-themeRed -translate-x-1/2 rounded-full"></div>

            <div className="space-y-8">
              {historyMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={milestone.year}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-6 sm:gap-12`}
                  >
                    {/* Circle Node on Timeline */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-themeBlue flex items-center justify-center z-10 shadow-md">
                      <span className="w-2.5 h-2.5 rounded-full bg-themeRed"></span>
                    </div>

                    {/* Timeline Content Card */}
                    <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                      <div className={`bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-blue-subtle hover:shadow-blue-hover transition-all ${
                        isEven ? 'sm:mr-6' : 'sm:ml-6'
                      }`}>
                        <span className="inline-block px-3 py-1 bg-themeBlue text-white text-xs font-black rounded-lg mb-2 shadow-2xs">
                          {milestone.year}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {milestone.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Organisational Structure (3-Tier Hierarchy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Hierarchical Framework"
          badgeColor="green"
          malayalamTitle="സംഘടനാ ഘടന"
          title="Organisational Structure"
          subtitle="A transparent, three-tiered organizational hierarchy ensuring seamless policy planning down to ward-level execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organisationalLevels.map((lvl, index) => (
            <div 
              key={lvl.level}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-themeBlue/30 shadow-blue-subtle hover:shadow-blue-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-11 h-11 rounded-2xl bg-themeBlue-light text-themeBlue font-black text-base flex items-center justify-center shadow-2xs">
                    0{index + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-themeGreen-light text-themeGreen-dark border border-themeGreen/20">
                    {lvl.badge}
                  </span>
                </div>

                <div>
                  <p className="font-malayalam text-xs font-bold text-themeGreen mb-1">
                    {lvl.malayalam}
                  </p>
                  <h3 className="text-xl font-extrabold text-gray-900">
                    {lvl.level}
                  </h3>
                  <p className="text-xs font-bold text-themeRed mt-1">
                    {lvl.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {lvl.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-themeBlue">
                <span>Network Size:</span>
                <span className="bg-blue-50 px-3 py-1 rounded-lg text-themeBlue font-black">{lvl.membersCount}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 14 District Committees Grid with Interactive Zone Filter */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-blue-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold uppercase text-themeBlue tracking-wider">State Network</span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                14 District Chapters Across Kerala
              </h3>
              <p className="font-malayalam text-xs text-themeGreen font-bold mt-0.5">
                എല്ലാ 14 ജില്ലകളിലും സജീവ പ്രവർത്തന സമിതികൾ
              </p>
            </div>

            {/* Zone Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl self-start sm:self-auto text-xs">
              {['All', 'South', 'Central', 'North'].map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    selectedZone === zone
                      ? 'bg-themeBlue text-white shadow-2xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 pt-6">
            {filteredDistricts.map((dist) => (
              <div 
                key={dist.name}
                className="p-3.5 rounded-2xl bg-gray-50/80 hover:bg-themeBlue-light/60 border border-gray-100 hover:border-themeBlue/30 transition-all text-center group"
              >
                <Building2 className="w-5 h-5 text-themeBlue mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-gray-800 group-hover:text-themeBlue truncate">
                  {dist.name}
                </span>
                <span className="text-[10px] text-gray-500 font-semibold block mt-0.5">
                  {dist.units}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-themeBlue to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Join Hands With Us?</h3>
          <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Whether you are a student, teacher, medical professional, or concerned citizen, your involvement makes a tangible difference.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenJoinModal}
              className="px-8 py-3.5 bg-themeRed hover:bg-themeRed-hover text-white font-bold rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <HeartHandshake className="w-5 h-5" />
              <span>Enroll as a Volunteer</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
