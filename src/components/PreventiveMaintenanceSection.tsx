import React, { useState } from 'react';
import { Calendar, Eye, Cpu, TrendingUp, Bell, UserCheck, CheckCircle2, RotateCw, ArrowRight } from 'lucide-react';

export const PreventiveMaintenanceSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(3);

  const ppmSteps = [
    {
      step: 1,
      title: 'Schedule',
      icon: Calendar,
      summary: 'Dynamic Baseline Ingestion',
      details: 'Syncs statutory inspection mandates, OEM warranty schedules, and facility operating calendar into a unified dynamic ledger.'
    },
    {
      step: 2,
      title: 'Monitor',
      icon: Eye,
      summary: 'Continuous 24/7 Surveillance',
      details: 'Monitors real-time operating hours, duty cycles, cycle counts, thermal signatures, and electrical phase balance.'
    },
    {
      step: 3,
      title: 'Analyze',
      icon: Cpu,
      summary: 'Stress & Wear Modeling',
      details: 'Computes cumulative fatigue indices. Identifies whether equipment is running ahead or behind anticipated degradation curves.'
    },
    {
      step: 4,
      title: 'Predict',
      icon: TrendingUp,
      summary: 'Optimal Window Calculation',
      details: 'Calculates the exact sweet spot for maintenance before minor degradation escalates into secondary system damage.'
    },
    {
      step: 5,
      title: 'Notify',
      icon: Bell,
      summary: 'Automated Stakeholder Alert',
      details: 'Pushes early-warning notifications to facility management and affected tenants with planned downtime windows.'
    },
    {
      step: 6,
      title: 'Assign',
      icon: UserCheck,
      summary: 'Smart Skills & Route Dispatch',
      details: 'Dispatches certified technicians with verified trade competencies, staging required spare parts and digital safety permits.'
    },
    {
      step: 7,
      title: 'Complete',
      icon: CheckCircle2,
      summary: 'Digital Proof of Work',
      details: 'Technician uploads before/after radiometric photos, acoustic verification tests, and gets electronic sign-off on mobile.'
    },
    {
      step: 8,
      title: 'Learn',
      icon: RotateCw,
      summary: 'Closed-Loop Model Reinforcement',
      details: 'The AI correlates post-service baseline performance against historical predictions, fine-tuning future intervals.'
    }
  ];

  return (
    <section id="preventive-maintenance" className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-semibold text-emerald-800 mb-3">
            <RotateCw className="w-3.5 h-3.5" />
            <span>Closed-Loop Maintenance Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            AI-Powered Preventive Maintenance: From Reactive to Predictive
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Stop performing maintenance too early (wasting parts and labor) or too late (causing catastrophic downtime). SmartFM delivers autonomous, closed-loop maintenance intelligence.
          </p>
        </div>

        {/* 8-Step Visual Horizontal Chain */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-14 shadow-lg shadow-slate-200/40">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Closed-Loop Autonomous Workflow: Schedule → Monitor → Analyze → Predict → Notify → Assign → Complete → Learn
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {ppmSteps.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedStep === item.step;
              return (
                <button
                  key={item.step}
                  onClick={() => setSelectedStep(item.step)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-100 scale-105'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex justify-center mb-1.5">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  <div className="text-[10px] font-mono font-bold opacity-70">STEP 0{item.step}</div>
                  <div className="text-xs font-bold truncate mt-0.5">{item.title}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Step Preview */}
          <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-600 uppercase font-mono">
                  Phase 0{selectedStep}: {ppmSteps[selectedStep - 1].title}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-bold text-slate-900">{ppmSteps[selectedStep - 1].summary}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {ppmSteps[selectedStep - 1].details}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <button
                onClick={() => setSelectedStep(selectedStep > 1 ? selectedStep - 1 : 8)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Prev
              </button>
              <button
                onClick={() => setSelectedStep(selectedStep < 8 ? selectedStep + 1 : 1)}
                className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Next Phase
              </button>
            </div>
          </div>
        </div>

        {/* Reactive vs Proactive Impact Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-extrabold font-display text-blue-600 mb-1">42%</div>
            <div className="text-sm font-bold text-slate-900 mb-2">Reduction in Unscheduled Failures</div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              By monitoring vibration and thermal trends continuously, potential breakdowns are caught weeks before equipment seizing.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-extrabold font-display text-emerald-600 mb-1">35%</div>
            <div className="text-sm font-bold text-slate-900 mb-2">Maintenance Labor Optimization</div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Technicians focus on assets requiring genuine care rather than routine inspection of healthy machines.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-extrabold font-display text-indigo-600 mb-1">99.4%</div>
            <div className="text-sm font-bold text-slate-900 mb-2">Statutory Audit Compliance</div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Automated reminders, dynamic route staging, and digital compliance trails ensure zero statutory audit non-conformances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
