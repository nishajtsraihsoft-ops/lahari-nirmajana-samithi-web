import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Shield, HeartHandshake, Award, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/', malayalam: 'ഹോം' },
  { name: 'About Us', path: '/about', malayalam: 'ഞങ്ങളെക്കുറിച്ച്' },
  { name: 'Our Activities', path: '/activities', malayalam: 'പ്രവർത്തനങ്ങൾ' },
  { name: 'Leadership', path: '/leadership', malayalam: 'നേതൃത്വം' },
  { name: 'Gallery', path: '/gallery', malayalam: 'ഗ്യാലറി' },
  { name: 'Contact Us', path: '/contact', malayalam: 'ബന്ധപ്പെടുക' },
];

const Navbar = ({ onOpenJoinModal, onOpenPledgeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* 1. Modern Top Information & Emergency Strip */}
      <div className="bg-gradient-to-r from-themeBlue-dark via-themeBlue to-slate-900 text-white text-xs py-2 px-4 sm:px-6 relative z-50 border-b border-white/10 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          {/* Emergency Toll-Free Badge */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-themeRed hover:bg-themeRed-hover px-2.5 py-0.5 rounded-full font-black text-[11px] uppercase tracking-wider text-white shadow-xs transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              24x7 Helpline
            </span>
            <span className="text-white/90 text-[11px] sm:text-xs">
              State Anti-Drug Helpline: <a href="tel:14405" className="font-extrabold underline hover:text-yellow-300 ml-1 transition-colors">14405</a> (Toll-Free)
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/80 text-[11px]">
              Direct Office: <a href="tel:+919447012345" className="hover:text-white font-semibold transition-colors">+91 94470 12345</a>
            </span>
          </div>

          {/* Right Action: Pledge & Malayalam Slogan */}
          <div className="flex items-center gap-3 text-[11px] text-blue-100">
            <button
              onClick={onOpenPledgeModal}
              className="inline-flex items-center gap-1.5 text-white hover:text-themeGreen-light transition-all font-semibold bg-white/10 hover:bg-white/20 px-3 py-0.5 rounded-full border border-white/15"
            >
              <Award className="w-3.5 h-3.5 text-yellow-300" />
              <span>Anti-Drug Pledge</span>
            </button>
            <span className="hidden lg:inline text-blue-200 font-malayalam font-medium">
              ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation with Glassmorphism */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5' 
            : 'bg-white shadow-xs py-3 sm:py-3.5'
        } border-b border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo and Brand Title */}
            <Link to="/" className="flex items-center gap-3 sm:gap-3.5 group">
              <div className="relative shrink-0">
                <img
                  src="/LNS-Logo.png"
                  alt="Lahari Nirmaargana Samithi Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = '/logo.svg'; }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-black tracking-wider text-themeBlue uppercase leading-tight font-sans group-hover:text-themeBlue-hover transition-colors">
                  LAHARI NIRMAARGANA SAMITHI
                </span>
                <span className="font-malayalam text-xs sm:text-sm font-bold text-themeGreen leading-tight tracking-wide">
                  ലഹരി നിർമ്മാർജന സമിതി
                </span>
                <span className="text-[10px] text-gray-500 font-medium tracking-tight hidden sm:block">
                  State Social Movement for a Drug-Free Society
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 relative ${
                      isActive
                        ? 'text-themeBlue font-bold bg-themeBlue-light/80 shadow-2xs'
                        : 'text-gray-700 hover:text-themeBlue hover:bg-gray-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-themeBlue rounded-full"></span>
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-themeRed hover:bg-themeRed-hover shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 transform hover:-translate-y-0.5"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Join Us</span>
              </button>
            </div>

            {/* Mobile Hamburger & Quick Join */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-themeRed hover:bg-themeRed-hover shadow-xs"
              >
                Join Us
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-themeBlue hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-themeRed" />
                ) : (
                  <Menu className="w-6 h-6 text-themeBlue" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Modern Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-themeBlue text-white shadow-xs'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-themeBlue'
                    }`
                  }
                >
                  <div className="flex flex-col">
                    <span>{link.name}</span>
                    <span className="font-malayalam text-[11px] opacity-80 font-normal">
                      {link.malayalam}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold bg-themeRed hover:bg-themeRed-hover shadow-md text-sm"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Join Our Mission (രജിസ്റ്റർ ചെയ്യൂ)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPledgeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-themeGreen-dark font-bold bg-themeGreen-light hover:bg-green-100 border border-themeGreen/25 text-sm"
              >
                <Award className="w-4 h-4 text-themeGreen" />
                <span>Take Anti-Drug Pledge</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
