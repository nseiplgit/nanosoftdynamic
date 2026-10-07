import React, { useState } from 'react';
import { Sparkles, MessageSquare, FileText, Activity, AlertCircle, Send, CheckCircle2, TrendingUp, Cpu, Copy, Check } from 'lucide-react';

export const GenerativeAISection: React.FC = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [copied, setCopied] = useState(false);

  const sampleQueries = [
    {
      label: 'Asset & Maintenance Query',
      prompt: 'What is the operational health and maintenance history of Chiller #03 in Tower West?',
      category: 'Asset Intelligence',
      response: {
        summary: 'Chiller #03 (Carrier 19XR Water-Cooled, 600 TR) is currently operating at 88.4% nominal efficiency with normal thermodynamic delta-T. Maintenance review indicates bearing lubrication was completed 18 days ago.',
        keyFacts: [
          'Run Hours: 14,210 hrs (within Tier-1 warranty window)',
          'Vibration Index: 1.8 mm/s RMS (Optimal ISO 10816 threshold)',
          'Compressor Lift Pressure: 38.2 PSI (Nominal)',
          'Upcoming Task: Quarterly Condenser Tube Eddy Current inspection due in 12 days'
        ],
        recommendation: 'No immediate mechanical intervention required. Maintain automated temperature setpoint at 7.2°C to maximize seasonal coefficient of performance (COP).'
      }
    },
    {
      label: 'Operational Report Generation',
      prompt: 'Generate an executive summary of energy consumption and tenant complaints for August across all 4 towers.',
      category: 'Executive Reporting',
      response: {
        summary: 'Generated August Facility Operations Synthesis. Aggregate campus energy consumption declined by 6.4% year-over-year ($28,400 cost avoidance), while tenant comfort complaints dropped by 34%.',
        keyFacts: [
          'Total Energy: 1.42 GWh (Budget variance: -3.8% favorable)',
          'Peak Demand Shaving: Avoided 3 peak-tariff surcharge intervals via precooling',
          'Ticket Volume: 142 total tickets (98.6% resolved within SLA window)',
          'HVAC Comfort Index: 96.2% compliant across occupied floor zones'
        ],
        recommendation: 'Recommend re-calibrating North Tower VAV box actuators on Floors 12-14 prior to upcoming September heat wave to prevent localized temperature drift.'
      }
    },
    {
      label: 'Incident & Work Order Summarizer',
      prompt: 'Summarize the critical incidents reported during the weekend night shift and their current resolution status.',
      category: 'Incident Triage',
      response: {
        summary: 'Two elevated priority incidents were triggered and addressed between Friday 20:00 and Monday 06:00. Zero business disruptions occurred.',
        keyFacts: [
          'Incident #INC-4091: Low Water Pressure alarm on Level 18 Booster Pump (Auto-switched to Standby Pump B; technician replaced check valve seal)',
          'Incident #INC-4094: IT Server Room 3B Temp Drift to 24.5°C (PAC-02 condenser coil filter cleaned; temp restored to 20.8°C in 22 mins)',
          'Total Unresolved Escalations: 0'
        ],
        recommendation: 'Schedule proactive ultrasonic flow verification on primary booster header during Wednesday off-peak maintenance window.'
      }
    },
    {
      label: 'Facility Performance Analysis',
      prompt: 'Analyze chiller plant COP vs outdoor wet-bulb temperature over the past 30 days and provide efficiency recommendations.',
      category: 'Performance Optimization',
      response: {
        summary: 'Multivariate regression shows Chiller Plant Average COP is 5.82 against a design target of 6.10. Efficiency drops disproportionately when outdoor wet-bulb exceeds 26°C.',
        keyFacts: [
          'Cooling Tower Approach Temperature: 3.8°C (Degraded by 1.1°C vs baseline)',
          'Identified Root Cause: Fan #3 VFD operating on fixed manual speed override',
          'Potential Power Recovery: ~48 kW during daytime peak hours'
        ],
        recommendation: 'Restore Cooling Tower Fan #3 VFD to automated wet-bulb approach algorithm. Projected monthly power savings: $2,150.'
      }
    }
  ];

  const currentData = sampleQueries[activeQueryIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentData.response.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="generative-ai" className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-blue-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Conversational Facility Intelligence</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Talk Directly to Your Buildings with Generative AI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Interact with complex facility databases, BMS telemetry, work order histories, and audit records using natural language. No SQL or technical query syntax needed.
          </p>
        </div>

        {/* 6 Core Generative AI Capabilities Pills/Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {[
            { icon: MessageSquare, label: 'Natural Language Q&A', desc: 'Ask about any asset, part or floor' },
            { icon: FileText, label: 'Report Generation', desc: 'Instant PDF/Markdown executive briefs' },
            { icon: AlertCircle, label: 'Incident Summaries', desc: 'Consolidate night shift & weekend logs' },
            { icon: Activity, label: 'Performance Analysis', desc: 'COP, kW/TR & utility benchmarking' },
            { icon: TrendingUp, label: 'Action Recommendations', desc: 'Specific corrective HVAC setpoints' },
            { icon: Cpu, label: 'Conversational FM', desc: 'Multimodal voice and chat assist' }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                <Icon className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-xs font-bold text-slate-900 leading-tight">{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">{item.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Generative AI Visual Banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md">
          <div className="h-48 sm:h-64 w-full relative">
            <img
              src="/src/assets/images/nanosoft_generative_ai_1791373467966.jpg"
              alt="NanoSoft Dynamic Generative Facility Copilot"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent flex items-center p-6 sm:p-10 text-white">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">NanoSoft Dynamic Facility Copilot</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mt-1 text-white">
                  Natural Language Dialogue Over Telemetry Streams
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                  Connect facility managers, operations leads, and executive teams directly to BIM, BACnet, and ERP databases with zero query latency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Generative Playground */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/40 overflow-hidden">
          {/* Playground Top Bar */}
          <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">SmartFM Generative Copilot</span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-mono">Model: Gemini 2.5 Flash Facility-Tuned</span>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <span>Grounding:</span>
              <span className="font-semibold text-slate-700">Live Campus Telemetry + Maximo & SAP ERP</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left Query Selector Column */}
            <div className="lg:col-span-4 p-5 sm:p-6 bg-slate-50/40 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Select a Real-World Scenario
              </div>
              {sampleQueries.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQueryIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeQueryIndex === idx
                      ? 'bg-blue-50/80 border-blue-400 text-slate-900 shadow-xs'
                      : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold text-blue-600 mb-1">
                    <span>{q.category}</span>
                    {activeQueryIndex === idx && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                  </div>
                  <div className="text-xs font-medium text-slate-900 line-clamp-2">{q.prompt}</div>
                </button>
              ))}

              <div className="pt-2 text-[11px] text-slate-500 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/60">
                <span className="font-semibold text-slate-700">Enterprise Security Note:</span> All prompts execute within customer-isolated VPC boundaries with zero public training leakage.
              </div>
            </div>

            {/* Right Chat Response Visualizer */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div className="space-y-6">
                {/* User Prompt Bubble */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs shrink-0">
                    FM
                  </div>
                  <div className="flex-1 bg-slate-100 rounded-2xl rounded-tl-none p-4 text-sm text-slate-800 font-medium">
                    {currentData.prompt}
                  </div>
                </div>

                {/* AI Assistant Output Bubble */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="bg-blue-50/50 border border-blue-100 rounded-2xl rounded-tl-none p-5 text-sm text-slate-800">
                      <div className="flex items-center justify-between mb-3 border-b border-blue-200/40 pb-2">
                        <span className="text-xs font-bold text-blue-800">Synthesis Result</span>
                        <button
                          onClick={handleCopy}
                          className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium cursor-pointer"
                        >
                          {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copied ? 'Copied' : 'Copy Summary'}</span>
                        </button>
                      </div>

                      <p className="text-slate-700 leading-relaxed font-normal">{currentData.response.summary}</p>

                      {/* Fact bullets */}
                      <div className="mt-4 pt-3 border-t border-blue-200/40 space-y-2">
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Ground-Truth Facility Telemetry</div>
                        {currentData.response.keyFacts.map((fact, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{fact}</span>
                          </div>
                        ))}
                      </div>

                      {/* Actionable recommendation */}
                      <div className="mt-4 p-3 rounded-xl bg-white border border-blue-200/80">
                        <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wide">Automated Recommendation</div>
                        <div className="text-xs text-slate-700 mt-0.5">{currentData.response.recommendation}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Prompt Input Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Ask SmartFM anything (e.g. 'Audit condenser water delta-T on floor 12...')"
                    className="w-full pl-4 pr-24 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                  <button
                    onClick={() => {
                      if (customInput.trim()) {
                        setActiveQueryIndex((activeQueryIndex + 1) % sampleQueries.length);
                        setCustomInput('');
                      }
                    }}
                    className="absolute right-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1 shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Analyze</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Press Analyze to simulate conversational LLM facility parsing</span>
                  <span>Natural Language · Multimodal · Zero Hallucination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
