import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Heart, ArrowRight, ExternalLink, Award } from 'lucide-react';

const Footer = ({ onOpenJoinModal }) => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-300 pt-16 sm:pt-20 pb-10 border-t-4 border-themeBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-gray-800">
          
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/LNS-Logo.png"
                alt="Lahari Nirmaargana Samithi Logo"
                className="w-13 h-13 bg-white rounded-2xl p-1.5 object-contain shadow-md"
                onError={(e) => { e.currentTarget.src = '/logo.svg'; }}
              />
              <div>
                <span className="block text-sm font-black text-white uppercase tracking-wider">
                  LAHARI NIRMAARGANA SAMITHI
                </span>
                <span className="block font-malayalam text-xs text-themeGreen-light font-bold">
                  ലഹരി നിർമ്മാർജന സമിതി
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              A state-level non-governmental social organization dedicated to combating substance abuse through statewide civic vigilance, school campaigns, youth empowerment, and compassionate rehabilitation support.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3.5 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-themeGreen font-bold">
                Together for a Drug-Free Society.
              </span>
              <p className="font-malayalam text-xs text-gray-400 mt-1 font-semibold">
                ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide border-l-2 border-themeBlue pl-3 uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-themeBlue" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-themeBlue" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-themeBlue" />
                  <span>Our Activities</span>
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-themeBlue" />
                  <span>Leadership Directory</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-themeBlue" />
                  <span>Photo & Media Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-themeBlue" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Focus Areas */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide border-l-2 border-themeGreen pl-3 uppercase">
              Key Focus Areas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>Campus Anti-Drug Vigilance Cells</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>Panchayat Ward Sentinel Committees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>Free Confidential Tele-Counselling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>Youth Sports & Skill Empowerment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>Hospital Rehabilitation Referral Network</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-4 py-2 bg-themeRed hover:bg-themeRed-hover text-white text-xs font-bold rounded-xl transition-all shadow-xs"
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Join As A Volunteer</span>
              </button>
            </div>
          </div>

          {/* Column 4: Contact & Emergency Helpline */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide border-l-2 border-themeRed pl-3 uppercase">
              Emergency & State Office
            </h4>
            
            <div className="bg-gray-900/90 rounded-2xl p-4 border border-gray-800 space-y-2">
              <p className="text-[11px] uppercase font-black text-themeRed tracking-wider">
                Emergency Anti-Drug Desk
              </p>
              <p className="text-xl font-black text-white">
                <a href="tel:14405" className="hover:text-themeRed transition-colors">14405</a>
                <span className="text-xs font-normal text-gray-400 ml-2">(Toll-Free 24x7)</span>
              </p>
              <p className="text-xs text-gray-400">
                Direct Office: <a href="tel:+919447012345" className="text-white hover:underline">+91 94470 12345</a>
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-themeBlue shrink-0 mt-0.5" />
                <span>
                  State Headquarters, Samithi Bhavan, MG Road, Thiruvananthapuram, Kerala - 695001
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-themeGreen shrink-0" />
                <a href="mailto:contact@laharinirmaarganam.org" className="hover:text-white transition-colors">
                  contact@laharinirmaarganam.org
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Lahari Nirmaargana Samithi (ലഹരി നിർമ്മാർജന സമിതി). All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-gray-400">
            <span className="font-semibold text-gray-300">"Together for a Drug-Free Society."</span>
            <span className="hidden sm:inline font-malayalam text-themeGreen font-bold">
              ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
