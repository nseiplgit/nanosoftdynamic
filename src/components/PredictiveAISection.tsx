import React, { useState } from 'react';
import { Database, Activity, Cpu, AlertTriangle, Bell, Wrench, CheckCircle2, ArrowRight, TrendingDown, Gauge } from 'lucide-react';

export const PredictiveAISection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(3);

  const workflowSteps = [
    {
      step: 1,
      title: 'Asset Data',
      subtitle: 'Static & Historical Baselines',
      icon: Database,
      details: 'Ingests nameplate specs, OEM Mean Time Between Failures (MTBF), service history logs, repair records, and CAD floor coordinates.',
      liveData: {
        tag: 'Asset Tag: CH-CENT-02',
        metric: 'Age: 4.2 Yrs · Tier 1 Class',
        status: 'Baseline Indexed'
      }
    },
    {
      step: 2,
      title: 'IoT / Sensor Data',
      subtitle: 'Real-time Telemetry Stream',
      icon: Activity,
      details: 'Streams vibration triaxial acceleration (10 kHz), bearing temperatures, amp draw, suction pressure, and acoustic emission levels.',
      liveData: {
        tag: 'Sample Rate: 100ms MQTT',
        metric: 'Vibration RMS: 4.82 mm/s',
        status: 'Streaming 24/7'
      }
    },
    {
      step: 3,
      title: 'AI Analysis',
      subtitle: 'Machine Learning Invariance',
      icon: Cpu,
      details: 'Deep learning autoencoders and Fast Fourier Transform (FFT) algorithms detect sub-surface harmonic drift 4-6 weeks before human perception.',
      liveData: {
        tag: 'Algorithm: Spectral Autoencoder',
        metric: 'Harmonic Delta: +28.4%',
        status: 'Anomaly Detected'
      }
    },
    {
      step: 4,
      title: 'Prediction',
      subtitle: 'Remaining Useful Life (RUL)',
      icon: TrendingDown,
      details: 'Calculates probability curves for bearing spalling. Pinpoints estimated time to mechanical breakdown within an 8-hour confidence interval.',
      liveData: {
        tag: 'Failure Mode: Bearing Outer Race',
        metric: 'RUL: 21 Days to Breakdown',
        status: 'High Probability (94.2%)'
      }
    },
    {
      step: 5,
      title: 'Early-Warning Alert',
      subtitle: 'Autonomous Risk Flagging',
      icon: Bell,
      details: 'Issues proactive early-warning dispatch before damage propagates to the impeller shaft, eliminating catastrophic downtime and safety hazards.',
      liveData: {
        tag: 'Priority: Level 2 Pre-Emptive',
        metric: 'Recipient: Duty Mechanical Lead',
        status: 'Dispatched via MCP'
      }
    },
    {
      step: 6,
      title: 'Maintenance Action',
      subtitle: 'Automated Work Order & Parts',
      icon: Wrench,
      details: 'Auto-generates Work Order with parts requisition (bearing kit #SKF-22318), safety checklist, and schedules technician during off-peak weekend hours.',
      liveData: {
        tag: 'Work Order #WO-8910',
        metric: 'Parts Staged: Bay 4 Shelf B',
        status: 'Assigned to Certified Tech'
      }
    }
  ];

  return (
    <section id="predictive-ai" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-semibold text-emerald-700 mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Zero Unscheduled Downtime</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Predictive AI: Prevent Failures Before They Happen
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Move away from firefighting and arbitrary calendar dates. SmartFM's predictive algorithms analyze micro-vibrations, thermal gradients, and electrical harmonics to predict failures weeks in advance.
          </p>
        </div>

        {/* Predictive AI IoT Plant Room Banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md">
          <div className="h-48 sm:h-64 w-full relative">
            <img
              src="/src/assets/images/nanosoft_predictive_iot_1791373481109.jpg"
              alt="Predictive IoT Vibration and Chiller Plant Sensors"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/40 to-transparent flex items-center p-6 sm:p-10 text-white">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Industrial IoT Telemetry Ingestion</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mt-1 text-white">
                  Continuous Vibration & Thermal Waveform Analysis
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                  Wireless high-frequency sensors stream 10 kHz acceleration spectra directly to NanoSoft Dynamic autoencoder models, catching bearing micro-spalling weeks in advance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual 6-Step Workflow Track */}
        <div className="mb-12">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            End-to-End Predictive Intelligence Lifecycle
          </div>

          {/* Stepper horizontal ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-200'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      0{step.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  <div className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </div>
                  <div className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {step.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Deep-Dive Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Step narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Active Stage: 0{activeStep} of 06
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-slate-700">{workflowSteps[activeStep - 1].title}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                {workflowSteps[activeStep - 1].subtitle}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {workflowSteps[activeStep - 1].details}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveStep(activeStep > 1 ? activeStep - 1 : 6)}
                  className="px-3.5 py-1.5 bg-white border border-slate-200 text-xs font-semibold rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep(activeStep < 6 ? activeStep + 1 : 1)}
                  className="px-3.5 py-1.5 bg-blue-600 text-xs font-semibold rounded-lg text-white hover:bg-blue-700 cursor-pointer flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Live Simulated Telemetry Box */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="text-xs font-bold text-slate-800">Simulated Stage Telemetry</div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" /> Live Pipeline
                </span>
              </div>
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Metadata:</span>
                  <span className="text-slate-800 font-semibold">{workflowSteps[activeStep - 1].liveData.tag}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Key Reading:</span>
                  <span className="text-blue-600 font-bold">{workflowSteps[activeStep - 1].liveData.metric}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Current State:</span>
                  <span className="text-emerald-700 font-semibold">{workflowSteps[activeStep - 1].liveData.status}</span>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                Data flows continuously across BACnet, MQTT, and OPC-UA straight into the centralized predictive model.
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Predictive Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Predictive Maintenance',
              desc: 'Transform calendar PPM into dynamic condition-based intervention, scheduling work strictly when wear thresholds demand it.',
              badge: 'Cost Saving: -35%'
            },
            {
              title: 'Asset Failure Prediction',
              desc: 'Continuous estimation of Remaining Useful Life (RUL) across motors, pumps, transformers, and chillers with 94%+ accuracy.',
              badge: 'MTBF Extended: +28%'
            },
            {
              title: 'Multi-Sensor Anomaly Detection',
              desc: 'Autoencoder models detect subtle cross-variable deviations between temperature, current, and pressure before single-threshold alarms trigger.',
              badge: 'Zero False Alarms'
            },
            {
              title: 'Automated Recommendations',
              desc: 'Actionable guidance specifying technician skill requirement, exact replacement part numbers, and torque tolerances.',
              badge: 'Prescriptive FM'
            },
            {
              title: 'Energy & Equipment Analysis',
              desc: 'Continuous COP tracking and load profiling that flags mechanical drag and fouled heat exchanger surfaces causing power loss.',
              badge: '18% Energy Savings'
            },
            {
              title: 'Early-Warning Escalation',
              desc: 'Multi-tier automated alerting through mobile push, SMS, and WhatsApp directly to responsible plant superintendents.',
              badge: 'Sub-Minute Dispatch'
            }
          ].map((cap, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  {cap.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 mb-2">{cap.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
