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
  HelpCircle,
  PhoneCall,
  Building,
  Sparkles
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const DISTRICT_HELPLINES = [
  { district: 'Thiruvananthapuram (HQ)', officer: 'Sri. Rajesh B.', phone: '+91 94478 90123' },
  { district: 'Kollam Chapter', officer: 'Sri. Shaji Pillai', phone: '+91 94477 89012' },
  { district: 'Ernakulam Chapter', officer: 'Smt. Beena Pradeep', phone: '+91 94479 01234' },
  { district: 'Thrissur Chapter', officer: 'Smt. Lathika Suresh', phone: '+91 94473 45678' },
  { district: 'Kozhikode Chapter', officer: 'Sri. K. C. Musthafa', phone: '+91 94480 12345' },
  { district: 'Kannur Chapter', officer: 'Sri. Thomas Joseph', phone: '+91 94481 23456' },
];

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

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please choose or provide a subject';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    // Simulate backend submission
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
    }, 900);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-br from-themeBlue-dark via-themeBlue to-slate-950 text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-themeGreen-light uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-themeGreen" />
            <span>Connect With Us</span>
          </div>
          <p className="font-malayalam text-lg sm:text-xl font-bold text-green-300">
            ബന്ധപ്പെടുക
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Contact Lahari Nirmaargana Samithi
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Reach out for awareness workshops, confidential counseling appointments, volunteer partnerships, or official communications.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-themeBlue">State Headquarters</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                Official Liaison Offices
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                We are at your service across Kerala. For immediate anti-drug intervention or confidential family guidance, our state helpline is active 24x7.
              </p>
            </div>

            {/* Emergency Helpline Banner */}
            <div className="bg-gradient-to-br from-themeRed-light/80 to-red-100/50 border border-themeRed/30 rounded-3xl p-6 shadow-xs flex items-start gap-4">
              <div className="w-13 h-13 rounded-2xl bg-themeRed text-white flex items-center justify-center shrink-0 shadow-md">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-black uppercase text-themeRed tracking-wider block">
                  24x7 State Anti-Drug Helpline
                </span>
                <a href="tel:14405" className="text-3xl font-black text-gray-900 hover:text-themeRed transition-colors">
                  14405
                </a>
                <p className="text-xs text-gray-600 mt-1">Toll-free service for confidential counseling and reporting</p>
              </div>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-blue-subtle flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-themeBlue-light text-themeBlue flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-wider">State Headquarters Address</h4>
                  <p className="text-sm font-semibold text-gray-900 mt-1 leading-relaxed">
                    Lahari Nirmaargana Samithi Bhavan,<br />
                    Opp. Secretariat South Gate, MG Road,<br />
                    Thiruvananthapuram, Kerala - 695001, India.
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-green-subtle flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-themeGreen-light text-themeGreen flex items-center justify-center shrink-0 shadow-2xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Official Telephone & Desk</h4>
                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    <a href="tel:+919447012345" className="hover:text-themeBlue underline mr-3 font-bold">+91 94470 12345</a>
                    <a href="tel:04712345678" className="hover:text-themeBlue">0471 - 2345678</a>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Monday to Saturday: 9:00 AM – 7:00 PM</p>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-blue-subtle flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-themeBlue-light text-themeBlue flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Official Email Channels</h4>
                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    <a href="mailto:contact@laharinirmaarganam.org" className="hover:text-themeBlue block font-bold">
                      contact@laharinirmaarganam.org
                    </a>
                    <a href="mailto:helpline@laharinirmaarganam.org" className="hover:text-themeBlue text-xs text-themeBlue block mt-0.5">
                      helpline@laharinirmaarganam.org (Direct Counseling)
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick District Liaison Directory */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-3">
              <h4 className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-2">
                <Building className="w-4 h-4 text-themeBlue" />
                <span>Regional Liaison Helplines</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {DISTRICT_HELPLINES.map((item) => (
                  <div key={item.district} className="bg-white p-3 rounded-xl border border-gray-200 shadow-2xs">
                    <span className="font-bold text-gray-800 block truncate">{item.district}</span>
                    <a href={`tel:${item.phone}`} className="text-themeBlue font-bold hover:underline">
                      {item.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-themeGreen">Direct Communication</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Send Us a Message
                </h3>
                <p className="font-malayalam text-xs text-themeGreen font-bold mt-0.5">
                  നിങ്ങളുടെ സന്ദേശം ഇവിടെ അയക്കാം
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in the form below. For confidential counselling inquiries, please write "CONFIDENTIAL" in the subject.
                </p>
              </div>

              {isSuccess && (
                <div className="p-4 rounded-2xl bg-themeGreen-light border border-themeGreen/30 text-themeGreen-dark flex items-start gap-3 animate-fadeIn">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="font-bold block">Thank you! Your message has been sent successfully.</strong>
                    <span>Our central secretariat or district coordinator will respond to your registered email or phone promptly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 text-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 transition-all ${
                      errors.fullName ? 'border-themeRed bg-red-50/20' : 'border-gray-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-themeRed mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 text-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 transition-all ${
                        errors.phone ? 'border-themeRed bg-red-50/20' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-themeRed mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 text-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 transition-all ${
                        errors.email ? 'border-themeRed bg-red-50/20' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-themeRed mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Subject / Category *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 text-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 bg-white transition-all ${
                      errors.subject ? 'border-themeRed' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a subject...</option>
                    <option value="Conduct School / College Awareness Camp">Conduct School / College Awareness Camp</option>
                    <option value="Confidential Psychological Counselling Request">Confidential Psychological Counselling Request</option>
                    <option value="Hospital Rehabilitation Assistance Linkage">Hospital Rehabilitation Assistance Linkage</option>
                    <option value="Ward Vigilance Committee Partnership">Ward Vigilance Committee Partnership</option>
                    <option value="Volunteer Enrolment Query">Volunteer Enrolment Query</option>
                    <option value="General Feedback or Suggestion">General Feedback or Suggestion</option>
                  </select>
                  {errors.subject && <p className="text-xs text-themeRed mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Detailed Message *
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Provide details about your query or requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 text-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30 transition-all ${
                      errors.message ? 'border-themeRed bg-red-50/20' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-xs text-themeRed mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-themeBlue hover:bg-themeBlue-hover text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-blue-subtle">
          <div className="p-6 sm:p-8 bg-gray-50 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-themeBlue">Locate Us</span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                State Secretariat & Headquarters Map
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                MG Road, Opposite Government Secretariat, Thiruvananthapuram, Kerala
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-themeBlue text-white text-xs font-bold rounded-xl hover:bg-themeBlue-hover transition-colors inline-flex items-center gap-2 self-start sm:self-auto shadow-xs"
            >
              <MapPin className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Responsive Map Embed */}
          <div className="relative w-full h-80 sm:h-96 bg-gray-200">
            <iframe
              title="State Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.986348616187!2d76.94828117565494!3d8.499878291541819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbbc9e7352f7%3A0x6b63d9178ebf4b0d!2sKerala%20Government%20Secretariat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-20 hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
