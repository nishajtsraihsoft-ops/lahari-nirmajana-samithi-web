import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  User, 
  ShieldCheck, 
  MessageCircle, 
  FileText,
  ChevronDown
} from 'lucide-react';
import { samithiContact } from '../data/objectives';

const JOIN_WHATSAPP_NUMBER = '9567555661';
const JOIN_WHATSAPP_DISPLAY = '+91 95675 55661';

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
  'ക്യാമ്പസ് ബോധവൽക്കരണം (Campus Vigilance)',
  'ജനകീയ കൂട്ടായ്മകൾ (Community Volunteering)',
  'റാലികളും ക്യാമ്പയിനുകളും (Mass Action Camps)',
  'കൗൺസിലിംഗ് & സഹായം (Counseling Support)',
  'സോഷ്യൽ മീഡിയ പ്രചാരണം (Media Outreach)',
  'മറ്റ് സന്നദ്ധ പ്രവർത്തനങ്ങൾ (General Volunteer)'
];

const JoinModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    district: 'മലപ്പുറം (Malappuram)',
    role: 'ക്യാമ്പസ് ബോധവൽക്കരണം (Campus Vigilance)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Prevent background scroll and support Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'പേര് നൽകുക (Enter your full name)';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'ഫോൺ നമ്പർ നൽകുക (Enter phone number)';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'ശരിയായ 10 അക്ക നമ്പർ നൽകുക (Enter valid 10-digit number)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getWhatsAppMessage = (data = formData) => {
    return `*പുതിയ വളണ്ടിയർ രജിസ്ട്രേഷൻ / New Volunteer Registration*\n` +
      `*ലഹരി നിർമ്മാർജന സമിതി (LNS)*\n\n` +
      `👤 *പേര് (Name):* ${data.fullName.trim()}\n` +
      `📞 *ഫോൺ (Phone):* ${data.phone.trim()}\n` +
      `📍 *ജില്ല (District):* ${data.district}\n` +
      `🎯 *മേഖല (Role):* ${data.role}\n` +
      (data.message?.trim() ? `💬 *സ്ഥലം / കുറിപ്പ് (Notes):* ${data.message.trim()}\n` : '') +
      `\n---\n_ലഹരി നിർമ്മാർജന സമിതി വെബ്സൈറ്റ് വഴി അയച്ചത്_`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const waText = getWhatsAppMessage();
    const waUrl = `https://wa.me/91${JOIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

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
      district: 'മലപ്പുറം (Malappuram)',
      role: 'ക്യാമ്പസ് ബോധവൽക്കരണം (Campus Vigilance)',
      message: ''
    });
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 flex min-h-full items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Brand Accent Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-themeRed via-themeBlue to-themeGreen shrink-0" />

        {/* Minimal Clean Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-3 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans tracking-tight leading-snug">
                Join Our Mission
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 font-malayalam leading-tight mt-0.5">
                ലഹരിമുക്ത സമൂഹത്തിനായി ഞങ്ങളോടൊപ്പം ചേരൂ
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4 font-malayalam">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-black text-slate-900 font-sans">
                  Ready on WhatsApp!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                  നിങ്ങൾ നൽകിയ വിവരങ്ങൾ ലഹരി നിർമ്മാർജന സമിതിയുടെ വാട്സ്ആപ്പിലേക്ക് ({JOIN_WHATSAPP_DISPLAY}) തയ്യാറാക്കിയിരിക്കുന്നു.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/91${JOIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#198754] hover:bg-[#157347] text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2 font-sans"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp ({JOIN_WHATSAPP_DISPLAY})</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors font-sans"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Full Name Field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-sans">
                  Full Name <span className="font-normal font-malayalam text-slate-500">(പേര്)</span> <span className="text-red-500">*</span>
                </label>
                <div className={`flex items-center w-full h-11 bg-slate-50/80 border rounded-xl transition-all ${
                  errors.fullName 
                    ? 'border-red-400 focus-within:ring-2 focus-within:ring-red-200 bg-red-50/20' 
                    : 'border-slate-200 focus-within:bg-white focus-within:border-themeBlue focus-within:ring-2 focus-within:ring-themeBlue/20'
                }`}>
                  <div className="pl-3.5 pr-2.5 text-slate-400 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    className="w-full h-full pr-3.5 text-xs sm:text-sm bg-transparent border-0 focus:outline-none focus:ring-0 font-sans text-slate-800 placeholder:text-slate-400"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-red-500 mt-1 font-malayalam pl-0.5">{errors.fullName}</p>
                )}
              </div>

              {/* WhatsApp Phone Field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-sans">
                  WhatsApp Number <span className="font-normal font-malayalam text-slate-500">(ഫോൺ നമ്പർ)</span> <span className="text-red-500">*</span>
                </label>
                <div className={`flex items-center w-full h-11 bg-slate-50/80 border rounded-xl transition-all ${
                  errors.phone 
                    ? 'border-red-400 focus-within:ring-2 focus-within:ring-red-200 bg-red-50/20' 
                    : 'border-slate-200 focus-within:bg-white focus-within:border-themeBlue focus-within:ring-2 focus-within:ring-themeBlue/20'
                }`}>
                  <div className="pl-3.5 pr-2.5 text-slate-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: null });
                    }}
                    className="w-full h-full pr-3.5 text-xs sm:text-sm bg-transparent border-0 focus:outline-none focus:ring-0 font-sans text-slate-800 placeholder:text-slate-400"
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-500 mt-1 font-malayalam pl-0.5">{errors.phone}</p>
                )}
              </div>

              {/* District Dropdown */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-sans">
                  District <span className="font-normal font-malayalam text-slate-500">(ജില്ല)</span> <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center w-full h-11 bg-slate-50/80 border border-slate-200 rounded-xl focus-within:bg-white focus-within:border-themeBlue focus-within:ring-2 focus-within:ring-themeBlue/20 transition-all relative">
                  <div className="pl-3.5 pr-2.5 text-slate-400 flex items-center justify-center shrink-0 pointer-events-none">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full h-full pr-8 text-xs sm:text-sm bg-transparent border-0 focus:outline-none focus:ring-0 font-malayalam text-slate-800 cursor-pointer appearance-none"
                  >
                    {KERALA_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Volunteer Role Dropdown */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-sans">
                  Role / Interest <span className="font-normal font-malayalam text-slate-500">(മേഖല)</span> <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center w-full h-11 bg-slate-50/80 border border-slate-200 rounded-xl focus-within:bg-white focus-within:border-themeBlue focus-within:ring-2 focus-within:ring-themeBlue/20 transition-all relative">
                  <div className="pl-3.5 pr-2.5 text-slate-400 flex items-center justify-center shrink-0 pointer-events-none">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full h-full pr-8 text-xs sm:text-sm bg-transparent border-0 focus:outline-none focus:ring-0 font-malayalam text-slate-800 cursor-pointer appearance-none"
                  >
                    {VOLUNTEER_ROLES.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Optional Location / Notes Field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-sans">
                  Mandalam / Place <span className="font-normal font-malayalam text-slate-500">(സ്ഥലം / കുറിപ്പ് - Optional)</span>
                </label>
                <div className="flex items-center w-full h-11 bg-slate-50/80 border border-slate-200 rounded-xl focus-within:bg-white focus-within:border-themeBlue focus-within:ring-2 focus-within:ring-themeBlue/20 transition-all">
                  <div className="pl-3.5 pr-2.5 text-slate-400 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Panchayat / Mandalam / School / College..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full h-full pr-3.5 text-xs sm:text-sm bg-transparent border-0 focus:outline-none focus:ring-0 font-sans text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 px-4 bg-[#198754] hover:bg-[#157347] active:scale-98 text-white font-bold rounded-xl shadow-xs hover:shadow transition-all text-xs sm:text-sm flex items-center justify-center gap-2 font-sans"
                >
                  <MessageCircle className="w-4.5 h-4.5 text-white shrink-0" />
                  <span className="truncate">
                    {isSubmitting ? 'Opening WhatsApp...' : `Submit on WhatsApp (${JOIN_WHATSAPP_DISPLAY})`}
                  </span>
                </button>
                <p className="text-center text-[10.5px] text-slate-400 mt-2 font-sans">
                  Directly opens official WhatsApp ({JOIN_WHATSAPP_DISPLAY}) to send your registration.
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
