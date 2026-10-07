import React from 'react';
import { ArrowRight, Sparkles, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: (mode?: 'demo' | 'expert') => void;
  onOpenDownload: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo, onOpenDownload }) => {
  return (
    <section className="relative py-20 md:py-28 bg-white border-t border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-blue-700 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Future of Autonomous Facility Management</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight text-balance">
          Make Your Facility Intelligent with AI
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto text-balance">
          Connect your people, assets, buildings, and operations with AI-powered SmartFM.
        </p>

        {/* Dual CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenDemo('demo')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onOpenDemo('expert')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs transition-all duration-200 cursor-pointer"
          >
            <span>Talk to an AI Facility Expert</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Enterprise 99.99% Uptime SLA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>SOC2 Type II & ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-indigo-600" />
            <span>Zero-Disruption BACnet/IP Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
};
