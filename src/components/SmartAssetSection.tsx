import React, { useState } from 'react';
import { Cpu, History, Wrench, AlertOctagon, BrainCircuit, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const SmartAssetSection: React.FC = () => {
  const [activeAsset, setActiveAsset] = useState<'pump' | 'chiller' | 'transformer'>('pump');

  const assetProfiles = {
    pump: {
      tag: 'P-CHW-01A',
      name: 'Primary Chilled Water Pump #1A',
      location: 'Central Plant · Basement Level 2',
      criticality: 'Class A (Critical)',
      healthScore: 92,
      runHours: '32,140 hrs',
      stages: [
        { title: 'Asset', desc: 'Grundfos Hydro Multi-E 45kW Vertical In-Line' },
        { title: 'Asset History', desc: 'Commissioned 2022 · 98.8% availability baseline' },
        { title: 'Maintenance Data', desc: '14 quarterly services · Mechanical seal replaced at 24k hrs' },
        { title: 'Failure Patterns', desc: 'Cavitation acoustic signature detected at 52Hz inverter ramp' },
        { title: 'AI Analysis', desc: 'Suction NPSH margin insufficient during simultaneous dual pump start' },
        { title: 'Predictive Recommendation', desc: 'Stagger VFD acceleration ramp by 4 seconds to maintain suction head' }
      ]
    },
    chiller: {
      tag: 'CH-TRANE-03',
      name: 'Centrifugal Water-Cooled Chiller #03',
      location: 'Central Utility Plant · Bay 3',
      criticality: 'Class A (Mission Critical)',
      healthScore: 84,
      runHours: '19,850 hrs',
      stages: [
        { title: 'Asset', desc: 'Trane CenTraVac 800 TR Low-Pressure R-514A' },
        { title: 'Asset History', desc: 'Commissioned 2021 · 2 minor oil sensor alerts over 5 years' },
        { title: 'Maintenance Data', desc: 'Annual eddy current test verified zero tube pitting' },
        { title: 'Failure Patterns', desc: 'Approach temperature drifted from 1.2°C to 2.8°C over 45 days' },
        { title: 'AI Analysis', desc: 'Biological scaling detected on bundle tubes from condenser loop' },
        { title: 'Predictive Recommendation', desc: 'Trigger automated chemical biocide dosing cycle before weekend' }
      ]
    },
    transformer: {
      tag: 'TX-SUB-01',
      name: 'Dry-Type Power Transformer 2500kVA',
      location: 'Main Substation · Ground Level',
      criticality: 'Class A (Facility Backbone)',
      healthScore: 97,
      runHours: '44,200 hrs',
      stages: [
        { title: 'Asset', desc: 'Schneider Trihal Cast Resin Transformer 11kV/415V' },
        { title: 'Asset History', desc: 'Commissioned 2019 · Routine partial discharge tests clear' },
        { title: 'Maintenance Data', desc: 'Thermographic audit performed annually without thermal hotspots' },
        { title: 'Failure Patterns', desc: 'Harmonic distortion THD-V spike observed during EV fleet charging' },
        { title: 'AI Analysis', desc: 'Core temperature rises by 14°C between 18:00 and 20:30 on weekdays' },
        { title: 'Predictive Recommendation', desc: 'Interlock forced-cooling ventilation fan to trigger at 17:45 proactively' }
      ]
    }
  };

  const current = assetProfiles[activeAsset];

  return (
    <section id="asset-intelligence" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-blue-700 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Beyond Static Asset Registers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Smart Asset Intelligence: From Static Logs to Living Knowledge
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Traditional CAFM treats assets as rows in a spreadsheet. SmartFM turns every asset into an intelligent entity that tracks its own degradation, predicts failure modes, and prescribes its own maintenance.
          </p>
        </div>

        {/* Smart Asset Intelligence Banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md">
          <div className="h-48 sm:h-64 w-full relative">
            <img
              src="/src/assets/images/nanosoft_smart_asset_1791373509470.jpg"
              alt="NanoSoft Dynamic Smart Asset Digital Twin"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/40 to-transparent flex items-center p-6 sm:p-10 text-white">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Digital Twin & Asset Intelligence</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mt-1 text-white">
                  Living Asset Registers Powered by Machine Learning
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                  Every centrifugal chiller, transformer, and high-pressure pump maintains its own cumulative stress index, remaining useful life curve, and OEM compliance ledger.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Stage Asset Intelligence Flow Visual */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-14 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Asset Intelligence Pipeline: Asset → History → Data → Failure Patterns → AI Analysis → Recommendation
            </div>
            {/* Asset selector tabs */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setActiveAsset('pump')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeAsset === 'pump' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Chilled Water Pump
              </button>
              <button
                onClick={() => setActiveAsset('chiller')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeAsset === 'chiller' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Centrifugal Chiller
              </button>
              <button
                onClick={() => setActiveAsset('transformer')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeAsset === 'transformer' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Power Transformer
              </button>
            </div>
          </div>

          {/* Asset Live Header */}
          <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-xs mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  {current.tag}
                </span>
                <span className="font-display text-sm font-bold text-slate-900">{current.name}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">{current.location}</div>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div>
                <span className="text-slate-500">Criticality: </span>
                <span className="font-semibold text-rose-700">{current.criticality}</span>
              </div>
              <div>
                <span className="text-slate-500">Health Index: </span>
                <span className="font-bold text-emerald-600">{current.healthScore}%</span>
              </div>
              <div>
                <span className="text-slate-500">Run Time: </span>
                <span className="font-mono text-slate-800">{current.runHours}</span>
              </div>
            </div>
          </div>

          {/* 6 Stage Track */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {current.stages.map((stg, sIdx) => {
              const icons = [Cpu, History, Wrench, AlertOctagon, BrainCircuit, Sparkles];
              const Icon = icons[sIdx];
              const isHighlight = sIdx === 4 || sIdx === 5;
              return (
                <div
                  key={sIdx}
                  className={`p-4 rounded-xl border transition-all ${
                    isHighlight
                      ? 'bg-blue-50/70 border-blue-300 shadow-xs'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400">0{sIdx + 1}</span>
                    <Icon className={`w-4 h-4 ${isHighlight ? 'text-blue-600' : 'text-slate-500'}`} />
                  </div>
                  <div className="text-xs font-bold text-slate-900 mb-1">{stg.title}</div>
                  <p className="text-[11px] text-slate-600 leading-snug font-normal">{stg.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Traditional vs SmartFM AI Asset Management Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Traditional CAFM / Static Asset Register
            </div>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Static spreadsheets or database records with out-of-date manual entries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Fixed 30-day or 90-day maintenance cycles regardless of actual machine runtime or strain.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>No link between BMS alarm codes and historical component failure rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Reactive repair after catastrophic burnout resulting in tenant outrage and emergency surcharges.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              SmartFM AI Asset Intelligence
            </div>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Real-time digital twin correlating live IoT vibration, temperature, and electrical harmonics.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Dynamic condition-based schedules calculated from cumulative mechanical stress and ambient loads.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>AI-driven failure pattern recognition matching historical OEM degradation curves.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Automated prescriptive instructions with exact spare parts staging and torque specifications.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
