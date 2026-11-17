import React, { useState } from 'react';
import { ArrowRight, Clock, Target, CheckCircle, X, Shield, Sparkles } from 'lucide-react';

const ActivityCard = ({ activity }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl border border-gray-100 shadow-blue-subtle hover:shadow-blue-hover transition-all duration-300 overflow-hidden flex flex-col group h-full hover:-translate-y-1.5">
        {/* Card Image Container */}
        <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent"></div>

          {/* Badge */}
          {activity.badge && (
            <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-themeBlue text-white shadow-md">
              {activity.badge}
            </span>
          )}

          {/* Category Pill */}
          <span className="absolute bottom-3.5 left-3.5 text-[11px] text-white/95 font-semibold px-2.5 py-0.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10">
            {activity.targetAudience}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <p className="font-malayalam text-xs font-bold text-themeGreen line-clamp-1">
              {activity.malayalamTitle}
            </p>
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 group-hover:text-themeBlue transition-colors leading-snug">
              {activity.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
              {activity.description}
            </p>
          </div>

          {/* Key Metrics / Impacts */}
          <div className="pt-3.5 border-t border-gray-100 space-y-2 text-xs">
            <div className="flex items-start gap-2 text-gray-800">
              <CheckCircle className="w-4 h-4 text-themeGreen shrink-0 mt-0.5" />
              <span className="font-semibold line-clamp-1">{activity.impact}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-3.5 h-3.5 text-themeBlue shrink-0" />
              <span>{activity.frequency}</span>
            </div>
          </div>

          {/* Modern Action Button */}
          <button
            type="button"
            onClick={() => setShowDetail(true)}
            className="w-full mt-2 py-3 px-4 rounded-xl border-2 border-themeBlue/20 text-themeBlue hover:bg-themeBlue hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-2xs group-hover:border-themeBlue"
          >
            <span>Programme Details</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Modern Detail Modal */}
      {showDetail && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowDetail(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 bg-gray-950">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              
              <button
                onClick={() => setShowDetail(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider bg-themeGreen text-white mb-1.5 inline-block">
                  {activity.badge || 'Activity'}
                </span>
                <p className="font-malayalam text-xs text-green-200 font-bold">{activity.malayalamTitle}</p>
                <h4 className="text-xl font-extrabold leading-tight">{activity.title}</h4>
              </div>
            </div>

            <div className="p-6 sm:p-7 overflow-y-auto space-y-4 text-sm text-gray-700">
              <div>
                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Overview</h5>
                <p className="leading-relaxed text-gray-800">{activity.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs">
                <div>
                  <span className="text-gray-400 block font-medium">Target Audience</span>
                  <span className="font-bold text-gray-900 mt-0.5 block">{activity.targetAudience}</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-medium">Operational Frequency</span>
                  <span className="font-bold text-gray-900 mt-0.5 block">{activity.frequency}</span>
                </div>
              </div>

              <div>
                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Statewide Community Impact</h5>
                <p className="text-themeGreen-dark font-semibold bg-themeGreen-light/70 p-3.5 rounded-xl border border-themeGreen/25 text-xs sm:text-sm">
                  {activity.impact}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowDetail(false)}
                  className="px-6 py-2.5 bg-themeBlue hover:bg-themeBlue-hover text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityCard;
