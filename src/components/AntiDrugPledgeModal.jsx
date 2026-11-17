import React, { useState } from 'react';
import { X, Award, CheckCircle, Shield, Share2 } from 'lucide-react';

const AntiDrugPledgeModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [pledged, setPledged] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePledge = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setPledged(true);
  };

  const handleShare = () => {
    const text = `I, ${name}, have taken the official Anti-Drug Pledge with Lahari Nirmaargana Samithi (ലഹരി നിർമ്മാർജന സമിതി) to stand for a 100% drug-free society! #DrugFreeKerala #LahariNirmaarganam`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-themeBlue to-themeBlue-dark text-white p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-themeGreen-light text-xs font-semibold tracking-wider uppercase mb-1">
            <Shield className="w-4 h-4 text-themeGreen-light" />
            <span>Public Commitment Campaign</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Anti-Drug Solemn Pledge</h3>
          <p className="font-malayalam text-sm text-blue-100 mt-1">
            ലഹരിവിരുദ്ധ പ്രതിജ്ഞ
          </p>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          {!pledged ? (
            <form onSubmit={handlePledge} className="space-y-4">
              <div className="bg-themeGreen-light/50 border border-themeGreen/20 rounded-xl p-4 text-gray-800 space-y-2">
                <p className="font-semibold text-themeGreen-dark text-sm sm:text-base">
                  "I solemnly pledge that I shall stay completely away from drugs and all intoxicating substances. I shall actively protect my family, friends, and community, and guide anyone in need towards healthy help."
                </p>
                <p className="font-malayalam text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-themeGreen/20 pt-2">
                  "ഞാൻ ലഹരി പദാർത്ഥങ്ങളിൽ നിന്നും പൂർണ്ണമായും വിട്ടുനിൽക്കുമെന്നും, എൻ്റെ കുടുംബത്തെയും സമൂഹത്തെയും ലഹരിവിപത്തിൽ നിന്ന് സംരക്ഷിക്കാൻ പ്രതിജ്ഞാബദ്ധനായിരിക്കുമെന്നും സത്യം ചെയ്യുന്നു."
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Enter Your Name to Take the Pledge *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Krishna / Ananya"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themeBlue/30"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-themeGreen hover:bg-themeGreen-hover text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Take Pledge & Get Badge</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-5 py-4">
              {/* Virtual Badge Certificate Card */}
              <div className="bg-gradient-to-b from-white to-blue-50 border-2 border-themeBlue/30 rounded-2xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-themeGreen/10 rounded-full blur-xl pointer-events-none"></div>
                <img
                  src="/LNS-Logo.png"
                  alt="Lahari Nirmaargana Samithi Official Seal"
                  className="w-16 h-16 object-contain rounded-full bg-white p-1.5 shadow-md border border-gray-200 mx-auto mb-3"
                />
                <span className="inline-block px-3 py-1 bg-themeGreen-light text-themeGreen-dark text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                  Verified Anti-Drug Champion
                </span>
                <h4 className="text-xl font-extrabold text-gray-900">{name}</h4>
                <p className="text-xs text-gray-500 mt-0.5">Certificate of Social Commitment</p>
                <p className="text-xs text-gray-600 mt-3 italic max-w-sm mx-auto">
                  "Committed to fostering a drug-free society and standing as a sentinel for truth, health, and dignity."
                </p>
                <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Lahari Nirmaargana Samithi</span>
                  <span>{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  type="button"
                  onClick={handleShare}
                  className="w-full sm:w-auto px-5 py-2.5 bg-themeBlue hover:bg-themeBlue-hover text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? 'Pledge Copied!' : 'Share Commitment'}</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AntiDrugPledgeModal;
