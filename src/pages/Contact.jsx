import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  PhoneCall,
  Building,
  ArrowRight,
  HeartHandshake,
  MessageCircle,
  Instagram
} from 'lucide-react';
import { samithiContact } from '../data/objectives';
import SEO from '../components/SEO';

const PURPOSE_LABELS = {
  'school-session': 'സ്കൂൾ / കോളേജ് ബോധവൽക്കരണം (School/College Awareness)',
  'counseling': 'ലഹരിവിമുക്തി കൗൺസിലിംഗ് സഹായം (De-addiction Counseling)',
  'volunteer': 'സന്നദ്ധ പ്രവർത്തകനാകാൻ (Volunteer Registration)',
  'local-committee': 'പ്രാദേശിക കമ്മിറ്റി രൂപീകരിക്കാൻ (Local Committee Formation)',
  'other': 'മറ്റു കാര്യങ്ങൾ (General Enquiry)'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
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
    if (!formData.subject.trim()) {
      errs.subject = 'Please select a subject';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message of at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getWhatsAppMessage = (data = formData) => {
    const purposeText = PURPOSE_LABELS[data.subject] || data.subject;
    return `*പുതിയ അന്വേഷണം / New Contact Enquiry*\n` +
      `*ലഹരി നിർമ്മാർജന സമിതി (LNS)*\n\n` +
      `👤 *പേര് (Name):* ${data.fullName.trim()}\n` +
      `📞 *ഫോൺ (Phone):* ${data.phone.trim()}\n` +
      `📧 *ഇമെയിൽ (Email):* ${data.email.trim()}\n` +
      `📌 *ആവശ്യം (Purpose):* ${purposeText}\n` +
      `💬 *സന്ദേശം (Message):*\n${data.message.trim()}\n\n` +
      `---\n_Sent via Lahari Nirmaargana Samithi Website_`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const waText = getWhatsAppMessage();
    setSubmittedMessage(waText);
    const waUrl = `https://wa.me/91${samithiContact.rawPhone || '9567555661'}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }, 600);
  };

  return (
    <div className="bg-[#ECEFF1]/70 py-6 sm:py-10 px-3 sm:px-6 lg:px-8 min-h-screen text-slate-800 selection:bg-themeBlue selection:text-white">
      <SEO
        title="സമ്പർക്കം & 24x7 ഹെൽപ്‌ലൈൻ | Contact Us"
        description="ലഹരി നിർമ്മാർജന സമിതി സംസ്ഥാന കമ്മിറ്റി ഓഫീസ് കുന്നുമ്മൽ, മലപ്പുറം. 24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന സൗജന്യ ഫോൺ ഹെൽപ്‌ലൈൻ: +91 95675 55661."
        canonicalPath="/contact"
        type="website"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "ലഹരി നിർമ്മാർജന സമിതി - സമ്പർക്കം",
          "description": "സംസ്ഥാന കമ്മിറ്റി ഓഫീസ് വിവരങ്ങളും 24x7 ഹെൽപ്‌ലൈനും.",
          "url": "https://www.laharinirmarjanasamithi.com/contact",
          "mainEntity": {
            "@type": "ContactPoint",
            "telephone": "+91-9567555661",
            "contactType": "emergency helpline",
            "availableLanguage": ["Malayalam", "English"]
          }
        }}
      />
      
      {/* =========================================================================
          MAIN BOXED CONTAINER (Matches Editorial Boxed Layout of Reference Design)
         ========================================================================= */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl sm:rounded-2xl border border-slate-200/80 overflow-hidden">
        
        {/* =======================================================================
            SECTION 1: TOP HERO SECTION
            Left: 3 Vertical Photo Strips with Attached Red, Blue, and Green Color Tags
            Right: Top Call Helpline Button + "Contact" Heading + Malayalam Description
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: 3 Vertical Photo Strips with Color Banner Bars (Hidden on Mobile screens, visible on LG Desktop) */}
            <div className="hidden lg:flex lg:col-span-7 flex-col justify-between">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 h-64 sm:h-80 md:h-96">
                
                {/* Photo Strip 1 (Full Color, No Grayscale) */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100">
                    <img 
                      src="/hero-image.png" 
                      alt="State Headquarters Kunnummal" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Red Solid Tag: HEADQUARTERS */}
                  <div className="bg-[#E53935] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      OFFICE
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      KUNNUMMAL
                    </div>
                  </div>
                </div>

                {/* Photo Strip 2 (Full Color, No Grayscale) */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100">
                    <img 
                      src="/hero-image-2.jpg" 
                      alt="24x7 Anti-Drug Helpline" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Blue Solid Tag: HELPLINE */}
                  <div className="bg-[#1565C0] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      HELPLINE
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      24X7 ASSISTANCE
                    </div>
                  </div>
                </div>

                {/* Photo Strip 3 (Full Color, No Grayscale) */}
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative flex-grow overflow-hidden bg-slate-100">
                    <img 
                      src="/hero-image-3.jpg" 
                      alt="Statewide Network" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Green Solid Tag: NETWORK */}
                  <div className="bg-[#198754] text-white p-2.5 sm:p-3 text-center select-none shrink-0">
                    <div className="text-base sm:text-xl lg:text-2xl font-black font-sans uppercase tracking-tight leading-none">
                      NETWORK
                    </div>
                    <div className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase opacity-95 mt-0.5">
                      14 DISTRICTS
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Editorial Intro Block (5 Cols on LG) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              
              {/* Top Red Button */}
              <div className="flex justify-start lg:justify-end">
                <a
                  href={`tel:${samithiContact.helpline}`}
                  className="bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-6 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200 active:scale-95 flex items-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>24X7 HELPLINE</span>
                </a>
              </div>

              {/* Bold Typography */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-sans leading-none">
                  Contact
                </h1>

                {/* Teal/Blue Uppercase Subtitle */}
                <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#0284C7] leading-relaxed">
                  GET IN TOUCH WITH STATE HEADQUARTERS &bull; LAHARI NIRMAARGANA SAMITHI
                </h2>

                {/* Authentic Malayalam Narrative Content */}
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-2.5 font-normal">
                  <p>
                    ലഹരിവിമുക്തി കൗൺസിലിംഗ്, വിദ്യാലയങ്ങളിലെ ബോധവൽക്കരണ പരിപാടികൾ സംഘടിപ്പിക്കൽ, സമിതിയിൽ സന്നദ്ധ പ്രവർത്തകരാകൽ തുടങ്ങിയ ആവശ്യങ്ങൾക്ക് സംസ്ഥാന ഓഫീസുമായോ 24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന ഹെൽപ്‌ലൈനുമായോ ബന്ധപ്പെടാം.
                  </p>
                  <p>
                    നിങ്ങളുടെ പ്രദേശത്തെ ലഹരിവിരുദ്ധ പ്രവർത്തനങ്ങൾക്ക് സമിതിയുടെ പൂർണ്ണ പിന്തുണ ലഭ്യമാണ്.
                  </p>
                </div>
              </div>

              {/* Quick Action Badges */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#E53935] hover:text-[#C62828] underline underline-offset-4"
                >
                  <span>SEND AN ENQUIRY &rarr;</span>
                </a>
                <span className="text-slate-300">|</span>
                <span className="text-[11px] font-bold text-slate-500 font-malayalam">
                  മലപ്പുറം &bull; കേരളം
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 2: THREE COLUMNS WITH DARK HEADERS (Matches Section 2 of Reference)
            Card 1: STATE HEADQUARTERS
            Card 2: 24x7 HELPLINE
            Card 3: INVITATION & SESSIONS
           ======================================================================= */}
        <section className="p-6 sm:p-8 lg:p-10 border-b border-slate-200 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: HEADQUARTERS */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Building className="w-4 h-4 text-[#E53935]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  HEADQUARTERS
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <div className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed space-y-1">
                  <p className="font-bold text-slate-900">{samithiContact.name}</p>
                  <p>{samithiContact.building}</p>
                  <p>{samithiContact.area}, {samithiContact.state} – {samithiContact.pincode}</p>
                </div>
                <div>
                  <span className="inline-block text-[11px] font-bold text-[#0284C7] bg-blue-50 px-2.5 py-1 rounded border border-blue-100 font-sans">
                    Office Hours: Mon - Sat
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: 24x7 HELPLINE */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0284C7]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  24X7 HELPLINE
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  ലഹരിക്ക് അടിമപ്പെട്ടവർക്കും രക്ഷിതാക്കൾക്കും സൗജന്യ കൗൺസിലിംഗും മാർഗ്ഗനിർദ്ദേശങ്ങളും നൽകുന്നതിനായി 24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന ഹെൽപ്‌ലൈൻ സംവിധാനം.
                </p>
                <div>
                  <a
                    href={`tel:${samithiContact.helpline}`}
                    className="inline-block bg-[#E53935] hover:bg-[#D32F2F] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    CALL: {samithiContact.helpline}
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: INVITE US */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-xs">
              <div className="bg-[#262C38] text-white px-5 py-3.5 flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#198754]" />
                <h3 className="text-sm font-black tracking-widest uppercase font-sans">
                  INVITE SESSIONS
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#F8FAFC]">
                <p className="text-slate-600 font-malayalam text-xs sm:text-sm leading-relaxed">
                  നിങ്ങളുടെ സ്കൂളിലോ കോളേജിലോ നാട്ടിലോ ലഹരിവിരുദ്ധ ബോധവൽക്കരണ പരിപാടികൾ, സെമിനാറുകൾ, എക്സിബിഷനുകൾ എന്നിവ സംഘടിപ്പിക്കാൻ സമിതിയുടെ സഹായം തേടാം.
                </p>
                <div>
                  <a
                    href="#contact-form"
                    className="inline-block bg-[#262C38] hover:bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-2xs transition-colors"
                  >
                    SUBMIT REQUEST
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 3: CONTACT FORM & DISTRICT COORDINATION (Matches Section 3 of Reference)
           ======================================================================= */}
        <section id="contact-form" className="p-6 sm:p-8 lg:p-10 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Office Details & Confidentiality Note (5 Cols on LG) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b-2 border-slate-900 pb-2">
                <h3 className="text-sm sm:text-base font-black tracking-widest uppercase text-slate-900 font-sans">
                  CONTACT DETAILS &bull; ഓഫീസ് വിവരങ്ങൾ
                </h3>
                <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                  സംസ്ഥാന ഓഫീസ് ഏകോപനം
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E53935]" />
                    <span>State Headquarters</span>
                  </div>
                  <p className="text-slate-600 font-malayalam text-xs">
                    {samithiContact.fullAddress}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#0284C7]" />
                    <span>24x7 Helpline</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    {samithiContact.helpline} (24x7 Assistance Across Kerala)
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#198754]" />
                    <span>Office Timing</span>
                  </div>
                  <p className="text-slate-600 font-malayalam text-xs">
                    തിങ്കൾ മുതൽ ശനി വരെ: രാവിലെ 9:30 മുതൽ വൈകുന്നേരം 5:30 വരെ
                  </p>
                </div>

                {/* Social Media: Instagram */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-pink-50/80 via-purple-50/50 to-white border border-pink-200/80 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 text-white flex items-center justify-center shadow-xs">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm">Official Instagram</span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-pink-700 bg-pink-100/80 px-2 py-0.5 rounded-full border border-pink-200/60">
                      @lns_malappuram
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Follow our official Instagram handle for the latest campus vigilance campaigns, updates & photo coverage.
                  </p>
                  <div>
                    <a
                      href={samithiContact.instagram || 'https://www.instagram.com/lns_malappuram?utm_source=qr&stkn=MWIzajdzam5yeWJ1ag=='}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:via-pink-700 hover:to-amber-600 text-white text-xs font-bold shadow-xs hover:shadow transition-all"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Follow on Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Confidentiality Notice Box */}
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1 font-malayalam">
                <strong className="block font-sans uppercase font-black text-amber-800">
                  CONFIDENTIAL COUNSELING PROMISE
                </strong>
                <span>
                  ലഹരി വിമുക്തി സഹായത്തിനായി ബന്ധപ്പെടുന്നവരുടെ വിവരങ്ങൾ പൂർണ്ണമായും രഹസ്യമായി സൂക്ഷിക്കുന്നതാണ്.
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Send Message Form (7 Cols on LG) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="border-b-2 border-slate-900 pb-2">
                <h3 className="text-sm sm:text-base font-black tracking-widest uppercase text-slate-900 font-sans">
                  SEND AN ENQUIRY &bull; സന്ദേശം അയക്കുക
                </h3>
                <span className="text-[11px] text-slate-500 font-malayalam font-bold">
                  പ്രവർത്തനങ്ങൾക്കോ ബോധവൽക്കരണത്തിനോ സമിതിയെ ക്ഷണിക്കാം
                </span>
              </div>

              {isSuccess ? (
                <div className="p-8 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 font-malayalam">
                    സന്ദേശം വാട്സ്ആപ്പിലേക്ക് കൈമാറി!
                  </h4>
                  <p className="text-xs text-emerald-700 font-malayalam max-w-md mx-auto leading-relaxed">
                    നിങ്ങളുടെ സന്ദേശം ലഹരി നിർമ്മാർജന സമിതിയുടെ ഔദ്യോഗിക വാട്സ്ആപ്പിലേക്ക് (+91 {samithiContact.rawPhone || '9567555661'}) തയ്യാറാക്കി നൽകിയിട്ടുണ്ട്. വാട്സ്ആപ്പ് ഓപ്പൺ ആയില്ലെങ്കിൽ താഴെ ക്ലിക്ക് ചെയ്യുക:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/91${samithiContact.rawPhone || '9567555661'}?text=${encodeURIComponent(submittedMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#198754] hover:bg-[#157347] text-white text-xs font-bold rounded shadow-xs transition-colors flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Open WhatsApp (+91 95675 55661)</span>
                    </a>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Full Name (പേര്) *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your Name"
                        className="w-full text-xs p-2.5 border border-slate-300 rounded focus:border-themeBlue focus:outline-none"
                      />
                      {errors.fullName && <p className="text-[11px] text-red-500 mt-0.5">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Phone Number (ഫോൺ) *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Mobile Number"
                        className="w-full text-xs p-2.5 border border-slate-300 rounded focus:border-themeBlue focus:outline-none"
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full text-xs p-2.5 border border-slate-300 rounded focus:border-themeBlue focus:outline-none"
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-0.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Purpose (ആവശ്യം) *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs p-2.5 border border-slate-300 rounded focus:border-themeBlue focus:outline-none bg-white"
                      >
                        <option value="">Select Purpose</option>
                        <option value="school-session">സ്കൂൾ / കോളേജ് ബോധവൽക്കരണം</option>
                        <option value="counseling">ലഹരിവിമുക്തി കൗൺസിലിംഗ് സഹായം</option>
                        <option value="volunteer">സന്നദ്ധ പ്രവർത്തകനാകാൻ (Volunteer)</option>
                        <option value="local-committee">പ്രാദേശിക കമ്മിറ്റി രൂപീകരിക്കാൻ</option>
                        <option value="other">മറ്റു കാര്യങ്ങൾ</option>
                      </select>
                      {errors.subject && <p className="text-[11px] text-red-500 mt-0.5">{errors.subject}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Message (വിശദാംശങ്ങൾ) *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your message or enquiry..."
                      className="w-full text-xs p-2.5 border border-slate-300 rounded focus:border-themeBlue focus:outline-none"
                    ></textarea>
                    {errors.message && <p className="text-[11px] text-red-500 mt-0.5">{errors.message}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#198754] hover:bg-[#157347] text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded shadow-sm hover:shadow transition-all disabled:opacity-50 flex items-center gap-2 active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>{isSubmitting ? 'CONNECTING WHATSAPP...' : 'SEND ON WHATSAPP (+91 95675 55661)'}</span>
                    </button>
                    <p className="text-[11px] text-slate-500 font-sans mt-2">
                      Submitting will format and send your message directly to official WhatsApp (+91 95675 55661).
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* =======================================================================
            SECTION 4: STATE HEADQUARTERS & ACTION BANNER
           ======================================================================= */}
        <section className="bg-slate-900 text-white p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                STATE HEADQUARTERS &bull; കുന്നുമ്മൽ, മലപ്പുറം
              </span>
              <p className="text-sm text-slate-300 font-malayalam">
                {samithiContact.name} &bull; {samithiContact.fullAddress}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3 text-xs text-slate-400 pt-1">
                <span>24x7 Helpline: <strong className="text-white">{samithiContact.helpline}</strong></span>
                <span>&bull;</span>
                <span>14 Active Districts Across Kerala</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${samithiContact.helpline}`}
                className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded shadow-sm transition-colors flex items-center gap-1.5"
              >
                <span>CALL 24x7 HELPLINE</span>
              </a>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

export default Contact;
