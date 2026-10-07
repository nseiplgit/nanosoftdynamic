import React, { useState } from 'react';
import { X, Download, Copy, Check, FileCode, CheckCircle2 } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const generateStandaloneHTML = () => {
    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NanoSoft Dynamic — AI-Powered SmartFM Platform</title>
  <meta name="description" content="NanoSoft Dynamic AI-Powered Smart Facility Management platform featuring autonomous agents, predictive maintenance, conversational facility intelligence, Facility MCP, healthcare operations, and thermal building audit.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #ffffff; color: #0f172a; }
    .bg-grid { background-image: radial-gradient(rgba(148, 163, 184, 0.25) 1px, transparent 1px); background-size: 24px 24px; }
  </style>
</head>
<body class="bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
  <!-- Top Navigation Bar -->
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-base">N</div>
        <span class="font-bold text-lg tracking-tight font-display text-slate-900">NanoSoft <span class="text-blue-600">Dynamic</span></span>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <a href="#generative-ai" class="hover:text-blue-600 transition-colors">Generative AI</a>
        <a href="#predictive-ai" class="hover:text-blue-600 transition-colors">Predictive AI</a>
        <a href="#ai-agents" class="hover:text-blue-600 transition-colors">AI Agents</a>
        <a href="#facility-mcp" class="hover:text-blue-600 transition-colors">Facility MCP</a>
        <a href="#healthcare" class="hover:text-blue-600 transition-colors">Healthcare</a>
        <a href="#thermal-audit" class="hover:text-blue-600 transition-colors">Thermal Audit</a>
        <a href="#command-center" class="hover:text-blue-600 transition-colors">Command Center</a>
        <a href="#contact" class="hover:text-blue-600 transition-colors font-semibold text-blue-600">Contact Us</a>
      </nav>
      <div class="flex items-center gap-3">
        <a href="#cta" class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all">Request Demo</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="relative pt-16 pb-24 bg-white overflow-hidden bg-grid">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 mb-6">
        <span class="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
        <span class="text-slate-500 font-semibold uppercase text-[10px]">Google AI Facility Architecture</span>
        <span class="text-slate-300">|</span>
        <span class="text-slate-800">Next-Gen Autonomous CAFM</span>
      </div>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-display max-w-4xl mx-auto leading-tight">
        AI-Powered Smart <br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Facility Management</span>
      </h1>
      <p class="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal">
        Transform your facilities with AI-powered insights, intelligent agents, predictive maintenance, automated workflows, and real-time facility intelligence.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#cta" class="px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all">Request a Demo</a>
        <a href="#generative-ai" class="px-7 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-xl transition-all">Explore AI Solutions</a>
      </div>
    </div>
  </section>

  <!-- 12 Enterprise Sections (Full SmartFM Suite) -->
  <main class="divide-y divide-slate-100">
    <!-- Generative AI -->
    <section id="generative-ai" class="py-20 bg-slate-50/50">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <span class="text-xs font-semibold text-blue-600 uppercase tracking-wider">Generative Facility Intelligence</span>
        <h2 class="text-3xl font-bold font-display mt-2">Talk Directly to Your Buildings with Generative AI</h2>
        <p class="mt-3 text-slate-600 max-w-2xl mx-auto text-sm">Ask natural language questions about assets, generate instant operational reports, and summarize incident tickets without complex queries.</p>
      </div>
    </section>

    <!-- Predictive AI -->
    <section id="predictive-ai" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <span class="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Zero Unplanned Downtime</span>
        <h2 class="text-3xl font-bold font-display mt-2">Predictive AI: Prevent Failures Before They Happen</h2>
        <p class="mt-3 text-slate-600 max-w-2xl mx-auto text-sm">Asset Data &rarr; IoT/Sensor Data &rarr; AI Analysis &rarr; Prediction &rarr; Alert &rarr; Maintenance Action.</p>
      </div>
    </section>

    <!-- Facility MCP -->
    <section id="facility-mcp" class="py-20 bg-slate-50/50">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <span class="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Model Context Protocol Standard</span>
        <h2 class="text-3xl font-bold font-display mt-2">Facility MCP Integration Layer</h2>
        <p class="mt-3 text-slate-600 max-w-2xl mx-auto text-sm">User &rarr; AI Assistant &rarr; Facility MCP &rarr; SmartFM APIs &rarr; Assets / Work Orders / PPM / Contracts / Employees / Buildings &rarr; AI Response.</p>
      </div>
    </section>

    <!-- Final CTA -->
    <section id="cta" class="py-20 bg-white text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-4xl font-extrabold font-display text-slate-900">Make Your Facility Intelligent with AI</h2>
        <p class="mt-4 text-slate-600 text-lg">Connect your people, assets, buildings, and operations with AI-powered SmartFM.</p>
        <div class="mt-8 flex justify-center gap-4">
          <a href="#" class="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold">Request a Demo</a>
          <a href="#" class="px-6 py-3 border border-slate-300 text-slate-800 rounded-xl text-sm font-semibold">Talk to an AI Facility Expert</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-slate-900 text-slate-400 py-12 text-center text-xs">
    <p>&copy; 2026 SmartFM Technologies Inc. All rights reserved.</p>
  </footer>
</body>
</html>`;
  };

  const handleDownload = () => {
    const htmlContent = generateStandaloneHTML();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'nanosoft-dynamic-smartfm.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateStandaloneHTML());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Top bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-blue-600" />
            <span className="font-display text-sm font-bold text-slate-900">
              Download Standalone Source HTML (NanoSoft Dynamic)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Complete Standalone HTML Package
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Download the complete NanoSoft Dynamic AI-powered facility website as a standalone <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono">nanosoft-dynamic-smartfm.html</code> file. It contains the white theme Google AI powered banner, responsive layout, Google Fonts typography, and complete facility management sections ready to open directly in any web browser.
            </p>
          </div>

          {/* Quick Stats of the package */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Format</div>
              <div className="text-xs font-bold text-slate-900 mt-0.5 font-mono">Single-File HTML5</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Brand</div>
              <div className="text-xs font-bold text-blue-600 mt-0.5 font-mono">NanoSoft Dynamic</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Theme</div>
              <div className="text-xs font-bold text-slate-900 mt-0.5">Luminous White AI</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Downloaded HTML File!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download nanosoft-dynamic-smartfm.html</span>
                </>
              )}
            </button>
            <button
              onClick={handleCopyCode}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy HTML Code</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
