import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  HeartHandshake, 
  MessageCircle, 
  PhoneCall, 
  ZoomIn, 
  X, 
  Eye
} from 'lucide-react';
import { samithiContact } from '../data/objectives';

const HERO_SLIDES = [
  {
    id: 1,
    title: "TOGETHER FOR A DRUG-FREE SOCIETY",
    malayalam: "ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം",
    subtitle: "Building a Healthy, Responsible and Substance-Free Generation.",
    image: "/hero-image.png",
    ctaText: "DISCOVER MORE",
    ctaLink: "/about"
  },
  {
    id: 2,
    title: "PROTECTING OUR YOUTH & STUDENTS",
    malayalam: "വിദ്യാർത്ഥി - യുവജന സംരക്ഷണവും ബോധവൽക്കരണവും",
    subtitle: "Statewide Campus Vigilance Network Across All 14 Districts of Kerala.",
    image: "/hero-image-2.jpg",
    ctaText: "OUR ACTIVITIES",
    ctaLink: "/activities"
  },
  {
    id: 3,
    title: "UNITED IN CITIZEN ACTION & HOPE",
    malayalam: "ലഹരിക്കെതിരെ ഒന്നിക്കാം... ജനകീയ പ്രതിരോധം തീർക്കാം",
    subtitle: "Over 20+ Years of Unbroken Public Service Since 2005.",
    image: "/hero-image-3.jpg",
    ctaText: "MEET LEADERSHIP",
    ctaLink: "/leadership"
  }
];

const Hero = ({ onOpenJoinModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Auto-advance slider every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : HERO_SLIDES.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative bg-slate-950 overflow-hidden text-white select-none">
      {/* 1. Full-Width Background Images with Smooth Crossfade & Cinematic Scale Transition */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={item.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat will-change-[opacity,transform] ${
                isActive
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-105 z-0'
              }`}
              style={{
                backgroundImage: `url('${item.image}')`,
                transitionProperty: 'opacity, transform',
                transitionDuration: '1200ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          );
        })}
      </div>

      {/* 2. Cinematic Gradient Overlay (Dark scrim for high-contrast white text) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35 lg:from-black/80 lg:via-black/45 lg:to-black/20 z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

      {/* 3. Main Hero Slider Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24 lg:py-36 min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] flex items-center justify-between z-20">
        
        {/* Left / Center: All-Caps Title & Discover Button with Smooth Fade Animation */}
        <div 
          key={slide.id}
          className="max-w-3xl space-y-3.5 sm:space-y-6 animate-hero-fade w-full"
        >
          
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10.5px] sm:text-xs font-bold text-emerald-300 uppercase tracking-wider">
            <span>State Social Movement &bull; Kerala</span>
          </div>

          <p className="font-malayalam text-sm sm:text-lg lg:text-2xl font-bold text-green-300 drop-shadow-md break-words leading-snug">
            {slide.malayalam}
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wide sm:tracking-wider uppercase leading-tight sm:leading-tight drop-shadow-xl font-sans break-words">
            {slide.title}
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-gray-200 max-w-2xl font-medium leading-relaxed drop-shadow-md break-words">
            {slide.subtitle}
          </p>

          {/* Action Buttons: Outlined DISCOVER MORE + Red JOIN US + Green WHATSAPP */}
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
            <Link
              to={slide.ctaLink}
              className="px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase text-white bg-white/15 hover:bg-white hover:text-gray-900 backdrop-blur-md border border-white/40 transition-all duration-200 shadow-lg text-center"
            >
              {slide.ctaText}
            </Link>

            <button
              type="button"
              onClick={onOpenJoinModal}
              className="px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase text-white bg-themeRed hover:bg-themeRed-hover shadow-xl hover:shadow-themeRed/40 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>JOIN US</span>
            </button>

            <a
              href={`https://wa.me/91${samithiContact.rawPhone || '9567555661'}?text=${encodeURIComponent('Hello Lahari Nirmaargana Samithi, I would like to know more about your activities.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase text-white bg-[#198754] hover:bg-[#157347] shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>

        {/* Right Arrow Controls */}
        <div className="hidden md:flex items-center gap-2.5 self-end mb-6 z-20">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-12 h-12 rounded-xl bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all hover:scale-105 shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-12 h-12 rounded-xl bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all hover:scale-105 shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Bottom Slider Dots (Matches 3 Dots on Left in Reference Design) */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-12 flex items-center gap-2 sm:gap-2.5 z-20">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-500 ease-out rounded-full ${
              currentSlide === idx 
                ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-white shadow-md' 
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/45 hover:bg-white/80 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Fullscreen Photo Trigger Button (Bottom Right) */}
      <div className="absolute bottom-3.5 right-3.5 sm:bottom-5 sm:right-8 z-20">
        <button
          type="button"
          onClick={() => setIsZoomOpen(true)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white/90 hover:text-white text-[10px] sm:text-[11px] font-bold border border-white/20 transition-all shadow-sm rounded-lg"
        >
          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-200" />
          <span>High-Res Photo</span>
        </button>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            onClick={() => setIsZoomOpen(false)}
            aria-label="Close fullscreen view"
            className="absolute top-4 right-4 z-50 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={slide.image}
              alt="Lahari Nirmaargana Samithi Campaign Photo"
              className="max-h-[82vh] w-auto object-contain rounded-xl shadow-2xl border-2 border-white/20"
            />
            <div className="mt-3 text-center text-white">
              <p className="font-bold text-sm sm:text-base font-malayalam">
                Lahari Nirmaargana Samithi (LNS) &bull; ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
