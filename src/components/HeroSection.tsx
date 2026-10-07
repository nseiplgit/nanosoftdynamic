import React, { useState } from 'react';
import { ArrowRight, Sparkles, Building2, Cpu, Activity, AlertTriangle, Bot, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  const [activeNode, setActiveNode] = useState<'all' | 'buildings' | 'assets' | 'sensors' | 'agents' | 'alerts'>('all');

  const nodes = [
    { id: 'buildings', label: 'Smart Buildings', count: '48 Towers', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
    { id: 'assets', label: 'Critical Assets', count: '14,820 Units', icon: Cpu, color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200' },
    { id: 'sensors', label: 'IoT & Telemetry', count: '128k Streams', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
    { id: 'agents', label: 'Autonomous Agents', count: '4 AI Engines', icon: Bot, color: 'text-cyan-600', bg: 'bg-cyan-50 border-cyan-200' },
    { id: 'alerts', label: 'Predictive Alerts', count: 'Zero Breaches', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
  ];

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-white">
      {/* Subtle background ambient grid & gradients */}
      <div className="absolute inset-0 bg-grid-slate pointer-events-none opacity-60" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Google AI-style badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-medium text-slate-700 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-blue-700 font-bold tracking-wide uppercase text-[10px]">NanoSoft Dynamic</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-800 font-medium">AI-Powered Smart Facility Management</span>
          </div>
        </div>

        {/* Hero Typography */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
            AI-Powered Smart <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Facility Management
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto text-balance font-normal">
            Transform your facilities with AI-powered insights, intelligent agents, predictive maintenance, automated workflows, and real-time facility intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#generative-ai"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <span>Explore AI Solutions</span>
            </a>
          </div>

          {/* Credibility proof metrics */}
          <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
            <div>
              <div className="text-2xl font-bold font-display text-slate-900">42%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Downtime Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-slate-900">99.4%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">PPM SLA Compliance</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-slate-900">14.8k+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Connected Assets</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-slate-900">&lt; 5 min</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Average Triage Speed</div>
            </div>
          </div>
        </div>

        {/* Centralized AI Visualization Stage */}
        <div className="mt-14 relative rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
          {/* Top header bar */}
          <div className="px-5 py-3.5 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-800 tracking-tight">SmartFM Neural Hub · Real-time Operational Stream</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-slate-500">Filter Data Layer:</span>
              <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200/60">
                <button
                  onClick={() => setActiveNode('all')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${activeNode === 'all' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  All Hubs
                </button>
                {nodes.map(n => (
                  <button
                    key={n.id}
                    onClick={() => setActiveNode(n.id as any)}
                    className={`px-2 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${activeNode === n.id ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive visual canvas representation */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-b from-white to-slate-50/50">
            {/* Visual background image with high-fidelity asset */}
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-slate-200/60">
              <img
                src="/src/assets/images/hero_smartfm_building_1791371683143.jpg"
                alt="SmartFM AI Central Building Infrastructure"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />

              {/* Data stream lines & floating nodes overlay */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                {/* Upper telemetry badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-white/40 shadow-sm text-xs font-semibold text-slate-800">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>Campus Multi-Tenant Orchestration</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/90 backdrop-blur-md text-white shadow-sm text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>IoT Gateway: 100% Online</span>
                  </div>
                </div>

                {/* Bottom interactive nodes flowing to Centralized Platform */}
                <div>
                  <div className="text-white text-xs font-mono uppercase tracking-wider mb-2 text-slate-300">
                    Active Telemetry Ingestion Flow · MCP Architecture
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {nodes.map((node) => {
                      const Icon = node.icon;
                      const isSelected = activeNode === 'all' || activeNode === node.id;
                      return (
                        <div
                          key={node.id}
                          onClick={() => setActiveNode(node.id as any)}
                          className={`p-3 rounded-lg border backdrop-blur-md transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-white/95 border-blue-400 shadow-md text-slate-900 scale-[1.02]'
                              : 'bg-white/60 border-white/20 text-slate-600 opacity-60 hover:opacity-90'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <Icon className={`w-4 h-4 ${node.color}`} />
                            <span className="text-[10px] font-mono font-medium text-slate-500">{node.count}</span>
                          </div>
                          <div className="text-xs font-bold leading-tight truncate">{node.label}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5 truncate">Streaming to MCP</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Centralized Hub Summary Strip */}
            <div className="mt-5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Unified SmartFM Platform Core</div>
                  <div className="text-xs text-slate-500">Autonomous synthesis across BMS, HVAC, Elevators, Fire & Tenant Workflows</div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs text-slate-500">Protocol: BACnet / Modbus / MQTT / REST</span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> SOC2 & ISO 27001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
