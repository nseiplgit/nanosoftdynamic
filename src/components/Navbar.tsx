import React, { useState } from 'react';
import { Download, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenDownload }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element in clean display face) */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:bg-blue-700 transition-colors">
            <span className="font-display">N</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
              NanoSoft <span className="text-blue-600">Dynamic</span>
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#generative-ai" className="hover:text-blue-600 transition-colors">Generative AI</a>
          <a href="#predictive-ai" className="hover:text-blue-600 transition-colors">Predictive AI</a>
          <a href="#ai-agents" className="hover:text-blue-600 transition-colors">AI Agents</a>
          <a href="#facility-mcp" className="hover:text-blue-600 transition-colors">Facility MCP</a>
          <a href="#healthcare" className="hover:text-blue-600 transition-colors">Healthcare</a>
          <a href="#thermal-audit" className="hover:text-blue-600 transition-colors">Thermal Audit</a>
          <a href="#command-center" className="hover:text-blue-600 transition-colors">Command Center</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors font-semibold text-blue-600">Contact Us</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors whitespace-nowrap border border-slate-200/80 cursor-pointer"
            title="Download Standalone HTML Package"
          >
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span>Download Source</span>
          </button>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Request Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenDownload}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            title="Download Source"
          >
            <Download className="w-4 h-4 text-blue-600" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col gap-2 pt-2 text-sm font-medium text-slate-700">
            <a onClick={() => setMobileOpen(false)} href="#generative-ai" className="px-3 py-2 rounded-lg hover:bg-slate-50">Generative AI</a>
            <a onClick={() => setMobileOpen(false)} href="#predictive-ai" className="px-3 py-2 rounded-lg hover:bg-slate-50">Predictive AI</a>
            <a onClick={() => setMobileOpen(false)} href="#ai-agents" className="px-3 py-2 rounded-lg hover:bg-slate-50">Facility AI Agents</a>
            <a onClick={() => setMobileOpen(false)} href="#facility-mcp" className="px-3 py-2 rounded-lg hover:bg-slate-50">Facility MCP</a>
            <a onClick={() => setMobileOpen(false)} href="#healthcare" className="px-3 py-2 rounded-lg hover:bg-slate-50">Healthcare System</a>
            <a onClick={() => setMobileOpen(false)} href="#asset-intelligence" className="px-3 py-2 rounded-lg hover:bg-slate-50">Smart Asset Management</a>
            <a onClick={() => setMobileOpen(false)} href="#preventive-maintenance" className="px-3 py-2 rounded-lg hover:bg-slate-50">Preventive Maintenance</a>
            <a onClick={() => setMobileOpen(false)} href="#intelligent-helpdesk" className="px-3 py-2 rounded-lg hover:bg-slate-50">Intelligent Helpdesk</a>
            <a onClick={() => setMobileOpen(false)} href="#thermal-audit" className="px-3 py-2 rounded-lg hover:bg-slate-50">Thermal Camera Audit</a>
            <a onClick={() => setMobileOpen(false)} href="#command-center" className="px-3 py-2 rounded-lg hover:bg-slate-50">Command Center</a>
            <a onClick={() => setMobileOpen(false)} href="#case-studies" className="px-3 py-2 rounded-lg hover:bg-slate-50">Case Studies</a>
            <a onClick={() => setMobileOpen(false)} href="#contact" className="px-3 py-2 rounded-lg hover:bg-blue-50 text-blue-700 font-semibold">Contact & Connect</a>
          </div>
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => { setMobileOpen(false); onOpenDemo(); }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm"
            >
              Request a Demo
            </button>
            <button
              onClick={() => { setMobileOpen(false); onOpenDownload(); }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200 border border-slate-200"
            >
              Download HTML Source Package
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
