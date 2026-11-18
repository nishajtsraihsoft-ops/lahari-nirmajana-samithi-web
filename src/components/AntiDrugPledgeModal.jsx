import React, { useState } from 'react';
import { X, Award, Shield, Share2 } from 'lucide-react';

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
    const text = `I, ${name}, have solemnly taken the official anti-drug pledge with Lahari Nirmaargana Samithi (ലഹരി നിർമ്മാർജന സമിതി)! #ലഹരിമുക്തകേരളം #DrugFreeSociety #LNS`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-fadeIn font-malayalam">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-themeBlue to-themeBlue-dark text-white p-4 sm:p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-themeGreen-light text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-themeGreen-light shrink-0" />
            <span>Anti-Drug Campaign Pledge</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black">Solemn Anti-Drug Pledge</h3>
          <p className="text-themeGreen-light text-xs sm:text-sm font-bold">
            ലഹരിവിരുദ്ധ പ്രതിജ്ഞ
          </p>
          <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
            ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം
          </p>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {!pledged ? (
            <form onSubmit={handlePledge} className="space-y-4">
              <div className="bg-themeGreen-light/50 border border-themeGreen/30 rounded-xl sm:rounded-2xl p-4 text-gray-800 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-themeGreen-dark block">
                  പ്രതിജ്ഞാ വാചകം (The Pledge)
                </span>
                <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                  "ഞാൻ ലഹരി പദാർത്ഥങ്ങളിൽ നിന്നും പൂർണ്ണമായും വിട്ടുനിൽക്കുമെന്നും, എൻ്റെ കുടുംബത്തെയും സമൂഹത്തെയും ലഹരിവിപത്തിൽ നിന്ന് സംരക്ഷിക്കാൻ പ്രതിജ്ഞാബദ്ധനായിരിക്കുമെന്നും, ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കുമെന്നും സത്യം ചെയ്യുന്നു."
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Enter Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Krishnan / Anwar / Anjali"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-3 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-themeBlue/30"
                />
              </div>

              <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 text-sm font-bold text-gray-600 hover:text-gray-900 text-center"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-themeGreen hover:bg-themeGreen-hover text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Take Pledge Now</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-5 py-4">
              {/* ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് കാർഡ് */}
              <div className="bg-gradient-to-b from-white to-blue-50 border-2 border-themeBlue/30 rounded-2xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-themeGreen/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="w-14 h-14 rounded-full bg-themeGreen-light text-themeGreen flex items-center justify-center mx-auto mb-3 shadow-inner">
                  <Award className="w-8 h-8" />
                </div>
                <span className="inline-block px-3 py-1 bg-themeGreen-light text-themeGreen-dark text-xs font-black rounded-full mb-2">
                  Anti-Drug Pledge Certificate
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-gray-900">{name}</h4>
                <p className="text-xs text-gray-500 mt-0.5">Certificate of Social Commitment (സാമൂഹിക പ്രതിബദ്ധതാ സാക്ഷ്യപത്രം)</p>
                <p className="text-xs text-gray-700 mt-3 font-semibold max-w-sm mx-auto leading-relaxed">
                  "ലഹരിക്കതിരെ ഒന്നിക്കാം... ലഹരിമുക്ത സമൂഹത്തിനായി കൈകോർക്കാം എന്ന ദൗത്യത്തിൽ പങ്കാളിയായി പ്രതിജ്ഞ സ്വീകരിച്ചിരിക്കുന്നു."
                </p>
                <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-xs text-gray-600 font-bold">
                  <span>ലഹരി നിർമ്മാർജന സമിതി (LNS)</span>
                  <span>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  type="button"
                  onClick={handleShare}
                  className="w-full sm:w-auto px-5 py-2.5 bg-themeBlue hover:bg-themeBlue-hover text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Share Commitment'}</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-bold rounded-xl transition-colors"
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
