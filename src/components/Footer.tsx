import React from 'react';
import { Download } from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, onOpenDemo }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                N
              </div>
              <span className="font-display text-base font-bold text-white tracking-tight">
                NanoSoft <span className="text-blue-500">Dynamic</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-normal">
              NanoSoft Dynamic delivers next-generation AI Facility Management uniting autonomous agents, predictive IoT maintenance, computer vision thermal audits, and Model Context Protocol.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={onOpenDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-[11px] font-semibold border border-slate-700 transition-colors cursor-pointer"
              >
                <Download className="w-3 h-3 text-blue-400" />
                <span>Download Source HTML</span>
              </button>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-3">AI Platform</div>
            <ul className="space-y-2">
              <li><a href="#generative-ai" className="hover:text-white transition-colors">Generative Copilot</a></li>
              <li><a href="#predictive-ai" className="hover:text-white transition-colors">Predictive AI Engine</a></li>
              <li><a href="#ai-agents" className="hover:text-white transition-colors">Autonomous Agents</a></li>
              <li><a href="#facility-mcp" className="hover:text-white transition-colors">Facility MCP Standard</a></li>
              <li><a href="#command-center" className="hover:text-white transition-colors">Central Command Center</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-3">Verticals</div>
            <ul className="space-y-2">
              <li><a href="#healthcare" className="hover:text-white transition-colors">Healthcare & Hospitals</a></li>
              <li><a href="#asset-intelligence" className="hover:text-white transition-colors">Commercial Real Estate</a></li>
              <li><a href="#thermal-audit" className="hover:text-white transition-colors">Critical Substation Audits</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Industrial & Logistics</a></li>
              <li><a href="#preventive-maintenance" className="hover:text-white transition-colors">Smart Campus Operations</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-3">Security & Trust</div>
            <ul className="space-y-2">
              <li><span className="text-slate-400">SOC2 Type II Certified</span></li>
              <li><span className="text-slate-400">ISO 27001 / ISO 55001</span></li>
              <li><span className="text-slate-400">HIPAA & JCI Healthcare Compliant</span></li>
              <li><span className="text-slate-400">Private VPC & Edge Deployment</span></li>
              <li><span className="text-slate-400">ASHRAE Standard 188 / 170</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NanoSoft Dynamic Technologies Inc. All rights reserved. Built with Google AI principles.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Portal</span>
            <button
              onClick={onOpenDemo}
              className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
            >
              Request Enterprise Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
