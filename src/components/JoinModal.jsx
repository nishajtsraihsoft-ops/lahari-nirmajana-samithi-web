import React, { useState } from 'react';
import { X, CheckCircle, Heart, Phone, Mail, MapPin, User, ShieldCheck } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
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
            ലഹരിമുക്ത സമൂഹത്തിനായി സന്നദ്ധപ്രവർത്തകനായി രജിസ്റ്റർ ചെയ്യാം.
          </p>
        </div>

        {/* ബോഡി */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4">
              <div className="w-16 h-16 bg-themeGreen-light text-themeGreen rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-gray-900">
                Registration Successful!
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                ലഹരി നിർമ്മാർജന സമിതിയുടെ സന്നദ്ധപ്രവർത്തകനായി താങ്കൾ രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു. ഞങ്ങളുടെ ജില്ലാ കോർഡിനേറ്റർ ഉടൻ താങ്കളെ ബന്ധപ്പെടുന്നതാണ്.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-themeBlue hover:bg-themeBlue-hover text-white rounded-xl text-sm font-bold shadow-md transition-all"
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
                  Full Name *
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
                    Phone Number *
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
                    Email Address *
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
                    District *
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
                    Volunteer Role *
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
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Any prior experience in anti-drug campaigns or social work..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30"
                ></textarea>
              </div>

              {/* സബ്മിറ്റ് ബട്ടൺ */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 px-4 bg-themeRed hover:bg-themeRed-hover text-white font-bold rounded-xl shadow-md transition-all text-sm active:scale-98"
                >
                  {isSubmitting ? 'Submitting Registration...' : 'Complete Registration'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
