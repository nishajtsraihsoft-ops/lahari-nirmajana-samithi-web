import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, ArrowRight, Award, ShieldCheck, Building, Instagram, MessageCircle } from 'lucide-react';
import { samithiContact } from '../data/objectives';

const Footer = ({ onOpenJoinModal }) => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-300 pt-16 sm:pt-20 pb-10 border-t-4 border-themeBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-gray-800">
          
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img
                src="/LNS-Logo.png"
                alt="Lahari Nirmaargana Samithi Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl p-1 object-contain shadow-sm shrink-0"
                onError={(e) => { e.currentTarget.src = '/logo.svg'; }}
              />
              <div className="min-w-0">
                <span className="block text-xs sm:text-sm font-black text-white tracking-wide uppercase truncate">
                  LAHARI NIRMAARGANA SAMITHI
                </span>
                <span className="block font-malayalam text-[11px] sm:text-xs text-themeGreen-light font-bold truncate">
                  ലഹരി നിർമ്മാർജന സമിതി (LNS)
                </span>
              </div>
            </div>

            <p className="font-malayalam text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              ലഹരി എന്ന സാമൂഹിക വിപത്തിനെതിരെ ജനകീയ കൂട്ടായ്മയിലൂടെ പ്രതിരോധം തീർക്കുകയും ലഹരിമുക്തമായ ഒരു സമൂഹത്തെ വാർത്തെടുക്കുകയും ചെയ്യുക എന്ന ലക്ഷ്യത്തോടെ പ്രവർത്തിക്കുന്ന സാമൂഹിക പ്രസ്ഥാനമാണ് ലഹരി നിർമ്മാർജന സമിതി.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3.5 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-themeGreen font-bold">
                Together for a Drug-Free Society.
              </span>
              <p className="font-malayalam text-xs text-green-300 mt-1 font-bold">
                ലഹരിക്കെതിരെ ഒന്നിക്കാം... ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം!
              </p>
            </div>

            {/* Social Media Link: Instagram */}
            <div className="pt-2">
              <a
                href={samithiContact.instagram || 'https://www.instagram.com/lns_malappuram?utm_source=qr&stkn=MWIzajdzam5yeWJ1ag=='}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow LNS on Instagram"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:via-pink-700 hover:to-amber-600 text-white text-xs font-bold transition-all shadow-md hover:scale-102"
              >
                <Instagram className="w-4 h-4 text-white shrink-0" />
                <span>Follow on Instagram (@lns_malappuram)</span>
              </a>
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
                  <span>Leaders</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-themeBlue" />
                  <span>Gallery</span>
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

          {/* Column 3: Key Initiatives */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide border-l-2 border-themeGreen pl-3 uppercase">
              Key Initiatives
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-malayalam">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>ക്യാമ്പസ് ലഹരിവിരുദ്ധ പ്രവർത്തനങ്ങൾ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>പടയൊരുക്കം ബോധവൽക്കരണ ക്യാമ്പ്</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>ബാറുകൾക്കെതിരായ ജനകീയ പ്രതിരോധം</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>വിദ്യാർത്ഥി - യുവജന സംരക്ഷണ ബോധവൽക്കരണം</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeGreen mt-1.5"></span>
                <span>പഞ്ചായത്ത് - വാർഡ് തല ജനകീയ കൂട്ടായ്മകൾ</span>
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

          {/* Column 4: State Office & Helpline */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide border-l-2 border-themeRed pl-3 uppercase">
              State Office & Helpline
            </h4>
            
            <div className="bg-gray-900/90 rounded-2xl p-4 border border-gray-800 space-y-2">
              <p className="text-[11px] font-black text-themeRed tracking-wide uppercase">
                24x7 State Anti-Drug Desk
              </p>
              <p className="text-2xl font-black text-white">
                <a href={`tel:${samithiContact.helpline}`} className="hover:text-themeRed transition-colors">
                  {samithiContact.helpline}
                </a>
              </p>
              <p className="text-xs text-gray-400">
                24x7 helpline for counseling & assistance
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-themeBlue shrink-0 mt-0.5" />
                <span>
                  <strong>{samithiContact.name}</strong><br />
                  {samithiContact.building}, {samithiContact.area},<br />
                  {samithiContact.state} – {samithiContact.pincode}
                </span>
              </div>
            </div>

            {/* Quick Social Badges */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={samithiContact.instagram || 'https://www.instagram.com/lns_malappuram?utm_source=qr&stkn=MWIzajdzam5yeWJ1ag=='}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @lns_malappuram"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-950/60 border border-pink-700/50 text-pink-300 hover:text-white hover:bg-pink-900/80 text-xs font-semibold transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>
              <a
                href={`https://wa.me/91${samithiContact.rawPhone || '9567555661'}?text=${encodeURIComponent('Hello Lahari Nirmaargana Samithi, I would like to contact your office.')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 hover:text-white hover:bg-emerald-900/80 text-xs font-semibold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-gray-500 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Lahari Nirmaargana Samithi (ലഹരി നിർമ്മാർജന സമിതി). All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-5 text-gray-400">
            <span className="font-semibold text-gray-300">"Together for a Drug-Free Society."</span>
            <span className="font-malayalam text-themeGreen font-bold">
              ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
