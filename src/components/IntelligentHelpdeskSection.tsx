import React, { useState } from 'react';
import { MessageSquare, Cpu, Tag, MapPin, Box, AlertTriangle, UserCheck, CheckCircle2, Send, ArrowRight, Clock } from 'lucide-react';
import { HELPDESK_PRESETS } from '../data/mockData';
import { HelpdeskSimulation } from '../types';

export const IntelligentHelpdeskSection: React.FC = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [customQuery, setCustomQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const current: HelpdeskSimulation = HELPDESK_PRESETS[activePresetIndex];

  const handleSimulate = (idx: number) => {
    setIsProcessing(true);
    setActivePresetIndex(idx);
    setTimeout(() => {
      setIsProcessing(false);
    }, 250);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;
    setIsProcessing(true);
    setTimeout(() => {
      setActivePresetIndex((activePresetIndex + 1) % HELPDESK_PRESETS.length);
      setIsProcessing(false);
      setCustomQuery('');
    }, 300);
  };

  return (
    <section id="intelligent-helpdesk" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/60 text-xs font-semibold text-cyan-800 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Zero-Touch Tenant Ticketing</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Intelligent Helpdesk: Unstructured Complaint to Resolved Work Order
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            No more drop-down menus or confusing forms. Tenants simply describe what is wrong in plain English, WhatsApp, or voice, and SmartFM extracts location, asset, priority, and technician assignment in seconds.
          </p>
        </div>

        {/* Intelligent Helpdesk Visual Banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md">
          <div className="h-48 sm:h-64 w-full relative">
            <img
              src="/src/assets/images/nanosoft_helpdesk_mobile_1791373496079.jpg"
              alt="NanoSoft Dynamic Mobile Technician Dispatch and Helpdesk"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/40 to-transparent flex items-center p-6 sm:p-10 text-white">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Zero-Touch Mobile Dispatch</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mt-1 text-white">
                  Natural Language Inbound to Floor Technician Mobile
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                  Turn informal occupant complaints from WhatsApp, Teams, and email into geolocated, priority-rated tickets dispatched to certified technicians in under 90 seconds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8-Stage Helpdesk Visual Pipeline Ribbon */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 mb-12 shadow-xs">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Workflow: User Complaint → AI Understanding → Categorization → Location Detection → Asset Identification → Priority → Technician Assignment → Resolution
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs">
            {[
              { label: '01. Complaint', icon: MessageSquare, color: 'text-blue-600' },
              { label: '02. AI NLP', icon: Cpu, color: 'text-indigo-600' },
              { label: '03. Category', icon: Tag, color: 'text-cyan-600' },
              { label: '04. Location', icon: MapPin, color: 'text-amber-600' },
              { label: '05. Asset Tag', icon: Box, color: 'text-purple-600' },
              { label: '06. Priority', icon: AlertTriangle, color: 'text-rose-600' },
              { label: '07. Tech Route', icon: UserCheck, color: 'text-blue-600' },
              { label: '08. Resolved', icon: CheckCircle2, color: 'text-emerald-600' }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
                  <Icon className={`w-4 h-4 mx-auto mb-1 ${step.color}`} />
                  <div className="font-semibold text-slate-800 text-[11px] truncate">{step.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Live Complaint Parser Simulation */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                Real-Time Helpdesk NLP Engine
              </span>
            </div>
            <div className="text-xs text-slate-500">
              Interactive Prototype: Select a sample tenant request below
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left: Input & Scenario selector */}
            <div className="lg:col-span-5 p-6 bg-slate-50/40 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                1. Tenant Inbound Complaint (Informal Human Input)
              </div>

              {/* Sample Preset Buttons */}
              <div className="space-y-2.5">
                {HELPDESK_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSimulate(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer ${
                      activePresetIndex === idx
                        ? 'bg-blue-50/80 border-blue-400 text-slate-900 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-semibold text-blue-600 mb-1">
                      <span>Scenario 0{idx + 1}</span>
                      <span className="font-mono">{preset.category}</span>
                    </div>
                    <p className="line-clamp-2 italic text-slate-800 font-normal">"{preset.prompt}"</p>
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <form onSubmit={handleCustomSubmit} className="pt-2">
                <div className="text-[11px] font-semibold text-slate-500 mb-1">Or test custom tenant message:</div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    placeholder="e.g. Elevator 2 in South Atrium is jerking violently..."
                    className="flex-1 px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold cursor-pointer shrink-0"
                  >
                    Parse
                  </button>
                </div>
              </form>
            </div>

            {/* Right: AI Extraction & Generated Ticket */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      2. Structured SmartFM Work Order
                    </span>
                    <span className="font-mono text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-semibold">
                      #WO-8042-AI
                    </span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded ${
                    current.priority === 'Critical'
                      ? 'bg-rose-100 text-rose-800'
                      : current.priority === 'High'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    Priority: {current.priority}
                  </span>
                </div>

                {/* Extracted Entity Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>Extracted Spatial Location</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">{current.detectedLocation}</div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-1">
                      <Box className="w-3.5 h-3.5 text-purple-600" />
                      <span>Identified Asset Tag</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 truncate">{current.detectedAsset}</div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-1">
                      <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>Assigned Trade / Technician</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 truncate">{current.assignedTeam}</div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Automated SLA Target</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">{current.slaTarget}</div>
                  </div>
                </div>

                {/* Automated Actions Taken */}
                <div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                    Autonomous Actions Executed in 1.2 Seconds
                  </div>
                  <div className="space-y-1.5">
                    {current.automatedActions.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom confirmation */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Multi-channel intake: WhatsApp · Email · QR Scan · MS Teams · Tenant App</span>
                <span className="font-semibold text-emerald-600">Zero Manual Dispatcher Delay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
