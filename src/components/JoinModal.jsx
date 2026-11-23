import React, { useState } from 'react';
import { X, CheckCircle, Heart, Phone, Mail, MapPin, User, ShieldCheck, MessageCircle } from 'lucide-react';
import { samithiContact } from '../data/objectives';

const KERALA_DISTRICTS = [
  'മലപ്പുറം (Malappuram)',
  'കോഴിക്കോട് (Kozhikode)',
  'വയനാട് (Wayanad)',
  'കണ്ണൂർ (Kannur)',
  'കാസർഗോഡ് (Kasaragod)',
  'പാലക്കാട് (Palakkad)',
  'തൃശ്ശൂർ (Thrissur)',
  'എറണാകുളം (Ernakulam)',
  'ഇടുക്കി (Idukki)',
  'കോട്ടയം (Kottayam)',
  'ആലപ്പുഴ (Alappuzha)',
  'പത്തനംതിട്ട (Pathanamthitta)',
  'കൊല്ലം (Kollam)',
  'തിരുവനന്തപുരം (Thiruvananthapuram)'
];

const VOLUNTEER_ROLES = [
  'Youth & Campus Ambassador (വിദ്യാർത്ഥി അംബാസഡർ)',
  'Awareness Campaign Speaker (ബോധവൽക്കരണ പ്രഭാഷകൻ)',
  'Event & Rally Coordinator (റാലി & പരിപാടി കോർഡിനേറ്റർ)',
  'Counseling & Support Volunteer (കൗൺസിലിംഗ് സന്നദ്ധപ്രവർത്തകൻ)',
  'Social Media Campaigner (സോഷ്യൽ മീഡിയ പ്രചാരകൻ)',
  'Local Ward Organizer (പ്രാദേശിക വാർഡ് പ്രവർത്തകൻ)'
];

const JoinModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    district: 'മലപ്പുറം (Malappuram)',
    role: 'Youth & Campus Ambassador (വിദ്യാർത്ഥി അംബാസഡർ)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getWhatsAppMessage = (data = formData) => {
    return `*പുതിയ വളണ്ടിയർ രജിസ്ട്രേഷൻ / New Volunteer Registration*\n` +
      `*ലഹരി നിർമ്മാർജന സമിതി (LNS)*\n\n` +
      `👤 *പേര് (Name):* ${data.fullName.trim()}\n` +
      `📞 *ഫോൺ (Phone):* ${data.phone.trim()}\n` +
      `📧 *ഇമെയിൽ (Email):* ${data.email.trim()}\n` +
      `📍 *ജില്ല (District):* ${data.district}\n` +
      `🎯 *മേഖല (Role):* ${data.role}\n` +
      (data.message.trim() ? `💬 *കുറിപ്പ് (Notes):* ${data.message.trim()}\n` : '') +
      `\n---\n_Sent via Lahari Nirmaargana Samithi Website_`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const waText = getWhatsAppMessage();
    const waUrl = `https://wa.me/91${samithiContact.rawPhone || '9567555661'}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp directly
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      district: 'മലപ്പുറം (Malappuram)',
      role: 'Youth & Campus Ambassador (വിദ്യാർത്ഥി അംബാസഡർ)',
      message: ''
    });
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs transition-opacity animate-fadeIn font-malayalam">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ഹെഡർ */}
        <div className="bg-themeBlue text-white p-4 sm:p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-green-200">
              Lahari Nirmaargana Samithi (LNS)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black">
            Join Our Mission
          </h3>
          <p className="text-themeGreen-light text-xs sm:text-sm font-bold">
            ഞങ്ങളോടൊപ്പം ചേരൂ
          </p>
          <p className="text-blue-100 text-xs sm:text-sm mt-0.5">
            ലഹരിമുക്ത സമൂഹത്തിനായി സന്നദ്ധപ്രവർത്തകനായി രജിസ്റ്റർ ചെയ്യാം. വിവരങ്ങൾ ഔദ്യോഗിക വാട്സ്ആപ്പിലേക്ക് നേരിട്ട് കൈമാറാം.
          </p>
        </div>

        {/* ബോഡി */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4">
              <div className="w-16 h-16 bg-[#198754]/15 text-[#198754] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-gray-900">
                Connecting to WhatsApp!
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                ലഹരി നിർമ്മാർജന സമിതിയുടെ ഔദ്യോഗിക വാട്സ്ആപ്പിലേക്ക് (+91 {samithiContact.rawPhone || '9567555661'}) വിവരങ്ങൾ കൈമാറിയിരിക്കുന്നു. വാട്സ്ആപ്പ് ഓപ്പൺ ആയില്ലെങ്കിൽ താഴെ ക്ലിക്ക് ചെയ്യുക:
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/91${samithiContact.rawPhone || '9567555661'}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#198754] hover:bg-[#157347] text-white rounded-xl text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp (+91 95675 55661)</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-sm font-bold shadow-md transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* പേര് */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Full Name (പൂർണ്ണ നാമം) *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 sm:py-3 text-base sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 transition-all ${
                    errors.fullName ? 'border-themeRed bg-red-50/20' : 'border-gray-300'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-themeRed mt-1">{errors.fullName}</p>}
              </div>

              {/* ഫോൺ & ഇമെയിൽ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone Number (ഫോൺ നമ്പർ) *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 sm:py-3 text-base sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 transition-all ${
                      errors.phone ? 'border-themeRed bg-red-50/20' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-themeRed mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email Address (ഇമെയിൽ) *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 sm:py-3 text-base sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 transition-all ${
                      errors.email ? 'border-themeRed bg-red-50/20' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-themeRed mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* ജില്ല & താല്പര്യമുള്ള മേഖല */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    District (ജില്ല) *
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 bg-white"
                  >
                    {KERALA_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Volunteer Role (മേഖല) *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 bg-white"
                  >
                    {VOLUNTEER_ROLES.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* സന്ദേശം */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Additional Notes (കൂടുതൽ വിവരങ്ങൾ - Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Any prior experience in anti-drug campaigns or social work..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30"
                ></textarea>
              </div>

              {/* സബ്മിറ്റ് ബട്ടൺ - Connected to WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-[#198754] hover:bg-[#157347] text-white font-bold rounded-xl shadow-md transition-all text-sm active:scale-98 flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>
                    {isSubmitting ? 'Opening WhatsApp...' : 'Register on WhatsApp (+91 95675 55661)'}
                  </span>
                </button>
                <p className="text-center text-[11px] text-gray-500 mt-2 font-sans">
                  Submitting will format and open this registration directly on official WhatsApp (9567555661).
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinModal;