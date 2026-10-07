import React, { useState } from 'react';
import { Bot, Wrench, Calendar, Headphones, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { AI_AGENTS } from '../data/mockData';
import { AIAgent } from '../types';

export const AIAgentsSection: React.FC = () => {
  const [selectedAgentId, setSelectedAgentId] = useState<'asset' | 'ppm' | 'helpdesk' | 'ops'>('asset');

  const currentAgent: AIAgent = AI_AGENTS.find(a => a.id === selectedAgentId) || AI_AGENTS[0];

  const agentIcons = {
    asset: Wrench,
    ppm: Calendar,
    helpdesk: Headphones,
    ops: BarChart3
  };

  return (
    <section id="ai-agents" className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/60 text-xs font-semibold text-cyan-800 mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>Autonomous Facility Workforce</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Specialized AI Agents for Facility Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Deploy tireless, domain-specific AI agents that operate 24/7. Each agent is pre-trained on engineering manuals, ASHRAE standards, and operational facility workflows.
          </p>
        </div>

        {/* 4 Agent Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {AI_AGENTS.map((agent) => {
            const Icon = agentIcons[agent.id];
            const isSelected = selectedAgentId === agent.id;
            return (
              <button
                key={agent.id}
                onClick={() => setSelectedAgentId(agent.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
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
                  {isSelected && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                  )}
                </div>
                <div className="font-display text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {agent.name}
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">
                  {agent.role}
                </div>
              </button>
            );
          })}
        </div>

        {/* Agent Deep-Dive Showcase Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/40 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left Column: Agent Profile & Capabilities */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Agent Spec Sheet</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  {currentAgent.name}
                </h3>
                <div className="text-xs text-blue-600 font-medium mt-1">
                  {currentAgent.tagline}
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  {currentAgent.description}
                </p>
              </div>

              {/* Capabilities checklist */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Core Autonomous Capabilities
                </div>
                {currentAgent.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Role-Based Access Control</span>
                </div>
                <span className="font-mono text-[11px] text-slate-500">MCP Verified</span>
              </div>
            </div>

            {/* Right Column: Live Simulated Reasoning & Execution */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-50/50 flex flex-col justify-between">
              <div className="space-y-5">
                {/* Simulated Trigger Prompt */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                    Trigger Query / Telemetry Event
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
                    "{currentAgent.sampleQuery}"
                  </div>
                </div>

                {/* Agent Synthesized Output Card */}
                <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div className="text-xs font-bold text-blue-700 flex items-center gap-1.5">
                      <Bot className="w-4 h-4" />
                      <span>{currentAgent.sampleResponse.title}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">
                      Reasoning Settled in 140ms
                    </span>
                  </div>

                  {/* Metrics Row if available */}
                  {currentAgent.sampleResponse.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {currentAgent.sampleResponse.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="text-[10px] text-slate-500 font-medium leading-tight">{m.label}</div>
                          <div className="text-xs font-bold text-slate-900 mt-1 truncate">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Analysis Summary */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Agent Synthesis & Root-Cause
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {currentAgent.sampleResponse.summary}
                    </p>
                  </div>

                  {/* Action Taken */}
                  <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200">
                    <div className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider">
                      Autonomous Action Executed
                    </div>
                    <div className="text-xs text-emerald-800 mt-0.5">
                      {currentAgent.sampleResponse.actionTaken}
                    </div>
                  </div>

                  {/* Next Step */}
                  <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200">
                    <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                      Recommended Human-in-the-Loop Step
                    </div>
                    <div className="text-xs text-amber-900 mt-0.5">
                      {currentAgent.sampleResponse.nextRecommendedStep}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Autonomous orchestration connected to Maximo, SAP, and BACnet</span>
                <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                  View Agent Logs →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
