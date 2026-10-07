import React, { useState } from 'react';
import { Camera, Flame, Eye, Cpu, AlertTriangle, FileText, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Layers } from 'lucide-react';
import { THERMAL_HOTSPOTS } from '../data/mockData';
import { ThermalHotspot } from '../types';

export const ThermalAuditSection: React.FC = () => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('spot-1');
  const [viewMode, setViewMode] = useState<'thermal' | 'radiometric'>('thermal');

  const activeSpot: ThermalHotspot = THERMAL_HOTSPOTS.find(s => s.id === activeHotspotId) || THERMAL_HOTSPOTS[0];

  const workflowSteps = [
    { label: 'Thermal Camera', icon: Camera, desc: 'High-res radiometric sensor (FLIR/DJI)' },
    { label: 'Image Capture', icon: Eye, desc: 'Radiometric RAW thermal frames' },
    { label: 'AI Analysis', icon: Cpu, desc: 'Convolutional CV & isotherm matrix' },
    { label: 'Anomaly Detection', icon: Flame, desc: 'Delta-T threshold breach (>15°C)' },
    { label: 'Facility Audit', icon: FileText, desc: 'ISO 18434 thermographic report' },
    { label: 'Work Order', icon: AlertTriangle, desc: 'Auto-dispatched with CAD coordinates' },
    { label: 'Resolution', icon: CheckCircle2, desc: 'Verified cool-down post repair' }
  ];

  return (
    <section id="thermal-audit" className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-xs font-semibold text-amber-800 mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Infrared Computer Vision AI</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Thermal Camera & AI Building Audit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Uncover invisible electrical hotspots, insulation breaches, and mechanical friction before smoke or failure occurs. SmartFM pairs radiometric thermal cameras with deep learning vision models.
          </p>
        </div>

        {/* 7-Step Workflow Ribbon */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 mb-12 shadow-sm">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Suggested Workflow: Thermal Camera → Image Capture → AI Analysis → Anomaly Detection → Facility Audit → Work Order → Resolution
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
                  <Icon className="w-4 h-4 text-blue-600 mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-slate-900 leading-tight">{step.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 leading-snug">{step.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Thermal Viewer Showcase */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden mb-16">
          {/* Top Bar */}
          <div className="px-6 py-4 bg-slate-50/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Radiometric Inspection: Substation Busbar & Central Chiller Loop
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('thermal')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'thermal' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Thermal Heatmap
              </button>
              <button
                onClick={() => setViewMode('radiometric')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'radiometric' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                }`}
              >
                AI Diagnostic Telemetry
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left: Thermal Image with Interactive Clickable Hotspots */}
            <div className="lg:col-span-7 relative p-4 sm:p-6 bg-slate-950 flex items-center justify-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-lg">
                <img
                  src="/src/assets/images/smartfm_thermal_audit_1791371696519.jpg"
                  alt="Thermal infrared camera inspection showing hotspot"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Thermal color scale gradient legend overlay */}
                <div className="absolute right-3 top-3 bottom-3 w-4 rounded bg-gradient-to-t from-blue-700 via-amber-500 to-rose-600 border border-white/30 flex flex-col justify-between text-[9px] font-mono font-bold text-white px-0.5 text-center shadow-xs">
                  <span>90°C</span>
                  <span>55°C</span>
                  <span>20°C</span>
                </div>

                {/* Hotspot Markers */}
                {THERMAL_HOTSPOTS.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspotId(spot.id)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full flex items-center justify-center transition-transform cursor-pointer ${
                      activeHotspotId === spot.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                    }`}
                    title={spot.component}
                  >
                    <span className={`flex h-6 w-6 rounded-full items-center justify-center text-[10px] font-bold text-white shadow-md ${
                      spot.severity === 'Critical' ? 'bg-rose-600 ring-4 ring-rose-500/50 animate-pulse' :
                      spot.severity === 'Warning' ? 'bg-amber-500 ring-4 ring-amber-400/40' : 'bg-emerald-600 ring-2 ring-emerald-400/30'
                    }`}>
                      !
                    </span>
                  </button>
                ))}

                {/* Active spot overlay label on image */}
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2.5 rounded-lg text-white text-xs max-w-xs">
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Selected: {activeSpot.component}</span>
                  </div>
                  <div className="font-mono text-slate-300 text-[11px] mt-0.5">
                    Temp: <strong className="text-rose-400">{activeSpot.temperature}</strong> ({activeSpot.delta})
                  </div>
                </div>
              </div>
            </div>

            {/* Right: AI Anomaly & Auto Work Order Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    AI Thermographic Audit Assessment
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    activeSpot.severity === 'Critical' ? 'bg-rose-100 text-rose-800' :
                    activeSpot.severity === 'Warning' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {activeSpot.severity} Severity
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-lg font-bold font-display text-slate-900">{activeSpot.component}</div>
                  <div className="flex items-center gap-3 text-xs font-mono mt-1 text-slate-600">
                    <span>Peak Temp: <strong className="text-slate-900">{activeSpot.temperature}</strong></span>
                    <span>·</span>
                    <span>Delta-T: <strong className="text-rose-600">{activeSpot.delta}</strong></span>
                  </div>
                </div>

                {/* Diagnosis */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    AI Radiometric Diagnosis
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeSpot.diagnosis}
                  </p>
                </div>

                {/* Automated Action */}
                <div className="mt-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-1">
                    Prescriptive Work Order Action
                  </div>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    {activeSpot.actionRequired}
                  </p>
                </div>
              </div>

              {/* Bottom Work Order Generation Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] text-slate-500 font-mono">
                  Auto Work Order: <span className="text-slate-800 font-semibold">#WO-THM-8821</span>
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Auto-Dispatched
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Thermal Inspection Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Electrical Hotspots',
              desc: 'Identifies loose lugs, phase unbalance, contact oxidation, and overstressed breaker terminals before electrical arc flash accidents occur.'
            },
            {
              title: 'HVAC Abnormality Detection',
              desc: 'Audits compressor discharge temperature, expansion valve starvation, and fouled cooling coil passes with thermal gradient mapping.'
            },
            {
              title: 'Rotating Equipment Overheating',
              desc: 'Pinpoints dry bearings, misalignment friction, and motor winding insulation degradation on chilled water pumps and exhaust fans.'
            },
            {
              title: 'Building Envelope Thermal Leaks',
              desc: 'Inspects curtain wall glazing, spandrel panels, and roof membrane thermal bridges causing massive conditioned air leakage.'
            },
            {
              title: 'Moisture & Water Ingress Detection',
              desc: 'Detects trapped evaporative cooling moisture beneath rooftop waterproofing membranes and interstitial plumbing duct shafts.'
            },
            {
              title: 'Energy-Loss Indicators',
              desc: 'Quantifies kWh dollar loss per square meter resulting from missing pipe insulation, steam trap blow-throughs, and valve leaks.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 transition-colors">
              <div className="text-xs font-bold text-blue-600 mb-1">0{idx + 1}</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
