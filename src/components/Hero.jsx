import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  CheckCircle, 
  ZoomIn, 
  X, 
  PhoneCall,
  Sparkles,
  Eye
} from 'lucide-react';
import { statistics } from '../data/objectives';

const Hero = ({ onOpenJoinModal, onOpenPledgeModal }) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section className="relative bg-gray-950 overflow-hidden">
      {/* 1. HERO BACKGROUND IMAGE (Clear & High-Resolution) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-100 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('/hero-image.png')`
        }}
      ></div>

      {/* 2. DIRECTIONAL GRADIENT OVERLAY
          Dark on the left to guarantee 100% text legibility,
          fading to soft/transparent across the center and right so the hero image is CLEARLY visible! */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/92 via-gray-950/70 to-gray-950/25 lg:from-gray-950/90 lg:via-gray-950/55 lg:to-transparent pointer-events-none"></div>
      
      {/* Subtle top & bottom vignette to blend naturally */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-gray-950/70 to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent pointer-events-none"></div>

      {/* 3. HERO CONTENT CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[640px] lg:min-h-[720px] flex items-center py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column: Frosted Glass / High Contrast Card for Razor-Sharp Text */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6 text-left">
            
            {/* Frosted Glass Content Panel for Maximum Readability */}
            <div className="bg-gray-950/60 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/15 shadow-2xl space-y-5">
              
              {/* Official Logo & State Movement Header */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="relative group shrink-0">
                  <img
                    src="/LNS-Logo.png"
                    alt="Lahari Nirmaargana Samithi Official Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-2xl bg-white p-2 shadow-xl border-2 border-white/60 transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-themeGreen text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm">
                    ✓
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-themeGreen-light shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-themeGreen" />
                    <span>STATE SOCIAL MOVEMENT &bull; KERALA</span>
                  </div>
                  <p className="text-xs sm:text-sm font-black text-blue-200 uppercase tracking-widest font-sans">
                    LAHARI NIRMAARGANA SAMITHI
                  </p>
                  <p className="font-malayalam text-xs text-green-300 font-bold">
                    സംസ്ഥാന ലഹരി നിർമ്മാർജന സമിതി
                  </p>
                </div>
              </div>

              {/* Malayalam Heading */}
              <div className="space-y-1">
                <h2 className="font-malayalam text-xl sm:text-2xl md:text-3xl font-extrabold text-themeGreen tracking-wide drop-shadow-md">
                  ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം
                </h2>
                
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
                  Together for a <span className="text-white underline decoration-themeBlue decoration-4 underline-offset-8">Drug-Free</span> Society
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-100 leading-snug drop-shadow-xs">
                Building a Healthy and Responsible Generation.
              </p>

              {/* Supporting text */}
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed drop-shadow-xs">
                Join hands with us to create a society free from drugs through awareness, education and collective action. Empowering schools, colleges, families and grassroot communities across the state.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={onOpenJoinModal}
                  className="px-6 sm:px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-themeRed hover:bg-themeRed-hover shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 active:scale-95"
                >
                  <HeartHandshake className="w-5 h-5" />
                  <span>Join Our Mission</span>
                </button>

                <Link
                  to="/about"
                  className="px-5 sm:px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-white/15 hover:bg-white/25 backdrop-blur-xs border border-white/30 hover:border-white/50 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={onOpenPledgeModal}
                  className="px-4 sm:px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-themeGreen-light hover:text-white bg-themeGreen/25 hover:bg-themeGreen/40 border border-themeGreen/40 transition-all flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-themeGreen" />
                  <span>Anti-Drug Pledge</span>
                </button>
              </div>

              {/* Highlights Checkmark List */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 border-t border-white/15 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-themeGreen shrink-0" />
                  <span>14 Active Districts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-themeGreen shrink-0" />
                  <span>Free Tele-Counselling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-themeGreen shrink-0" />
                  <span>Campus Vigilance Cells</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Kept Clear so Hero Background Image Shines Through!
              Features a sleek floating info badge and Fullscreen Image Viewer trigger */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-end items-end space-y-4 pt-6 lg:pt-0">
            
            {/* Floating Glassmorphic Badge Celebrating the Hero Campaign */}
            <div className="bg-gray-950/70 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-white shadow-2xl max-w-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/15 text-xs">
                <span className="flex items-center gap-1.5 text-themeGreen-light font-bold uppercase tracking-wider text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Statewide Mission</span>
                </span>
                <span className="text-gray-400 text-[10px]">2026</span>
              </div>

              <div>
                <p className="font-malayalam text-xs text-green-300 font-bold">
                  ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം
                </p>
                <p className="text-sm font-bold text-white leading-snug mt-0.5">
                  United for a Drug-Free Generation
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1 text-xs">
                <a
                  href="tel:14405"
                  className="px-3 py-1.5 rounded-lg bg-themeRed hover:bg-themeRed-hover text-white font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Helpline: 14405</span>
                </a>

                {/* Button to view background image in full screen */}
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  className="px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-medium flex items-center gap-1.5 transition-colors text-xs border border-white/20"
                  title="View full background image"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-200" />
                  <span>View Image</span>
                </button>
              </div>
            </div>

            {/* Subtle View Fullscreen Image button */}
            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white/90 hover:text-white text-xs border border-white/20 transition-all shadow-sm"
            >
              <ZoomIn className="w-3.5 h-3.5 text-blue-300" />
              <span>Click to view full background photograph</span>
            </button>
          </div>

        </div>
      </div>

      {/* Floating Bottom Stats Strip for Mobile & Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center p-2 border-r last:border-r-0 border-gray-100">
              <span className="block text-2xl sm:text-3xl font-black text-themeBlue">
                {stat.value}{stat.suffix}
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
                {stat.label}
              </span>
              <span className="block font-malayalam text-[11px] text-themeGreen font-medium mt-0.5">
                {stat.malayalamLabel}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen High-Resolution Lightbox for the Hero Background Image */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            onClick={() => setIsZoomOpen(false)}
            aria-label="Close fullscreen view"
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/hero-image.png"
              alt="Lahari Nirmaargana Samithi Official Hero Background Image"
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center text-white">
              <p className="font-malayalam text-sm text-green-300 font-bold">
                ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം &bull; ലഹരി നിർമ്മാർജന സമിതി
              </p>
              <h4 className="text-base sm:text-lg font-bold">Together for a Drug-Free Society</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
