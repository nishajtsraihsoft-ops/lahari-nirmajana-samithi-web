import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, HeartHandshake, ChevronRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { samithiContact } from '../data/objectives';

const NAV_LINKS = [
  { name: 'Home', path: '/', malayalam: 'ഹോം' },
  { name: 'About Us', path: '/about', malayalam: 'ഞങ്ങളെക്കുറിച്ച്' },
  { name: 'Our Activities', path: '/activities', malayalam: 'പ്രവർത്തനങ്ങൾ' },
  { name: 'Leaders', path: '/leadership', malayalam: 'നേതൃത്വം' },
  { name: 'Gallery', path: '/gallery', malayalam: 'ഗ്യാലറി' },
  { name: 'Contact Us', path: '/contact', malayalam: 'ബന്ധപ്പെടുക' },
];

const Navbar = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="w-full relative">
      {/* 1. True Fixed Navigation Container (Stays Locked at Top When Scrolling) */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'shadow-lg bg-white/95 backdrop-blur-md' 
            : 'shadow-xs bg-white'
        }`}
      >
        {/* Top Information & Emergency Strip (Collapses smoothly on scroll) */}
        <div 
          className={`bg-gradient-to-r from-themeBlue-dark via-themeBlue to-slate-900 text-white text-xs px-3 sm:px-6 relative z-50 border-white/10 shadow-2xs transition-all duration-300 overflow-hidden ${
            isScrolled 
              ? 'max-h-0 opacity-0 py-0 border-b-0 pointer-events-none' 
              : 'max-h-24 sm:max-h-16 opacity-100 py-1.5 sm:py-2 border-b'
          }`}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
            
            {/* Emergency Helpline Badge */}
            <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap justify-center sm:justify-start text-center sm:text-left">
              <span className="inline-flex items-center gap-1 bg-themeRed hover:bg-themeRed-hover px-2 sm:px-2.5 py-0.5 rounded-full font-black text-[10px] sm:text-[11px] tracking-wide text-white shadow-xs transition-colors shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                24x7 Helpline
              </span>
              <span className="text-white/95 text-[10.5px] sm:text-xs">
                State Helpline: <a href={`tel:${samithiContact.helpline}`} className="font-extrabold underline hover:text-yellow-300 ml-1 transition-colors">{samithiContact.helpline}</a>
              </span>
            </div>

            {/* Right Action: WhatsApp Contact & Malayalam Slogan */}
            <div className="flex items-center gap-2 sm:gap-3 text-[11px] text-blue-100">
              <a
                href={`https://wa.me/91${samithiContact.rawPhone || '9567555661'}?text=${encodeURIComponent('Hello Lahari Nirmaargana Samithi, I would like to contact your office.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-green-200 transition-all font-semibold bg-white/10 hover:bg-white/20 px-2.5 sm:px-3 py-0.5 rounded-full border border-white/15 text-[10px] sm:text-[11px]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-300" />
                <span>WhatsApp: {samithiContact.rawPhone || '9567555661'}</span>
              </a>
              <span className="hidden lg:inline text-blue-200 font-malayalam font-bold">
                ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം
              </span>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar */}
        <header
          className={`w-full transition-all duration-300 ${
            isScrolled 
              ? 'py-2 sm:py-2.5 bg-white/95 backdrop-blur-md' 
              : 'py-2.5 sm:py-3.5 bg-white'
          } border-b border-gray-100`}
        >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo and Organisation Name */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 pr-2">
              <div className="relative shrink-0">
                <img
                  src="/LNS-Logo.png"
                  alt="Lahari Nirmaargana Samithi Logo"
                  className="w-9 h-9 sm:w-12 sm:h-12 md:w-13 md:h-13 object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = '/logo.svg'; }}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-sm md:text-base font-black tracking-wider text-themeBlue uppercase leading-tight group-hover:text-themeBlue-hover transition-colors truncate">
                  LAHARI NIRMAARGANA SAMITHI
                </span>
                <span className="font-malayalam text-[10px] sm:text-xs font-bold text-themeGreen leading-tight truncate">
                  ലഹരി നിർമ്മാർജന സമിതി (LNS)
                </span>
                <span className="text-[9px] text-gray-500 font-medium tracking-tight hidden sm:block truncate">
                  State Social Movement &bull; Kerala
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
                    `px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 relative ${
                      isActive
                        ? 'text-themeBlue font-black bg-themeBlue-light/80 shadow-2xs'
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

            {/* Desktop Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-themeRed hover:bg-themeRed-hover shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 transform hover:-translate-y-0.5"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Join Us</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -mr-1 rounded-xl text-gray-700 hover:text-themeBlue hover:bg-gray-100 transition-colors"
                aria-label="Toggle navigation menu"
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

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-8 shadow-2xl animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-themeBlue text-white shadow-xs font-black'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-themeBlue'
                    }`
                  }
                >
                  <span>{link.name}</span>
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
                <span>Join Our Mission</span>
              </button>

              <a
                href={`https://wa.me/91${samithiContact.rawPhone || '9567555661'}?text=${encodeURIComponent('Hello Lahari Nirmaargana Samithi, I would like to contact your office.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-themeGreen-dark font-bold bg-themeGreen-light hover:bg-green-100 border border-themeGreen/25 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-themeGreen" />
                <span>WhatsApp Contact (9567555661)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>

    {/* Dynamic Spacer to prevent page content overlap beneath fixed navbar */}
    <div 
      aria-hidden="true"
      className={`w-full transition-all duration-300 pointer-events-none ${
        isScrolled 
          ? 'h-16 sm:h-[68px]' 
          : 'h-[104px] sm:h-[114px]'
      }`} 
    />
  </div>
  );
};

export default Navbar;
