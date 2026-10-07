import React, { useState } from 'react';
import { Award, CheckCircle2, ArrowRight, TrendingUp, Building2, ShieldCheck, Flame, Headphones } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';

export const CaseStudiesSection: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const activeCase: CaseStudy = CASE_STUDIES[activeCaseIndex];

  const caseIcons = [Building2, ShieldCheck, Flame, Headphones];

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-blue-700 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Enterprise Outcomes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Real-World Impact: Case Studies in AI Facility Management
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Explore how premier commercial campuses, hospitals, skyscrapers, and logistics centers transformed their facilities from reactive firefighting to autonomous intelligence.
          </p>
        </div>

        {/* 4 Case Studies Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {CASE_STUDIES.map((cs, idx) => {
            const Icon = caseIcons[idx];
            const isSelected = activeCaseIndex === idx;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-100'
                    : 'bg-white/80 hover:bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-display text-sm font-extrabold text-blue-600">
                    {cs.metricHighlight}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 line-clamp-1">{cs.title}</div>
                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{cs.category}</div>
              </button>
            );
          })}
        </div>

        {/* Structured Case Study Container: Challenge → Solution → Implementation → Result */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-10">
          {/* Header of case study */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 mb-1">
                <span>{activeCase.category}</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600">{activeCase.clientType}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                {activeCase.title}
              </h3>
            </div>
            <div className="shrink-0 p-4 rounded-xl bg-blue-50 border border-blue-200/80 text-center">
              <div className="font-display text-3xl font-extrabold text-blue-700">{activeCase.metricHighlight}</div>
              <div className="text-xs text-blue-900 font-medium mt-0.5 max-w-[140px] leading-tight">
                {activeCase.metricLabel}
              </div>
            </div>
          </div>

          {/* 4 Structured Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* 1. Challenge */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>1. The Operational Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {activeCase.challenge}
              </p>
            </div>

            {/* 2. AI Solution */}
            <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>2. The AI Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {activeCase.solution}
              </p>
            </div>

            {/* 3. Implementation */}
            <div className="p-5 rounded-xl bg-indigo-50/50 border border-indigo-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>3. SmartFM Implementation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {activeCase.implementation}
              </p>
            </div>

            {/* 4. Concrete Results */}
            <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>4. Measurable Results</span>
              </div>
              <div className="space-y-2">
                {activeCase.result.map((res, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation between studies */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Case Study {activeCaseIndex + 1} of {CASE_STUDIES.length}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveCaseIndex(activeCaseIndex > 0 ? activeCaseIndex - 1 : CASE_STUDIES.length - 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold cursor-pointer"
              >
                Previous Study
              </button>
              <button
                onClick={() => setActiveCaseIndex((activeCaseIndex + 1) % CASE_STUDIES.length)}
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Next Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
