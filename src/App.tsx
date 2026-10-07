/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GenerativeAISection } from './components/GenerativeAISection';
import { PredictiveAISection } from './components/PredictiveAISection';
import { AIAgentsSection } from './components/AIAgentsSection';
import { FacilityMCPSection } from './components/FacilityMCPSection';
import { HealthcareSection } from './components/HealthcareSection';
import { SmartAssetSection } from './components/SmartAssetSection';
import { PreventiveMaintenanceSection } from './components/PreventiveMaintenanceSection';
import { IntelligentHelpdeskSection } from './components/IntelligentHelpdeskSection';
import { ThermalAuditSection } from './components/ThermalAuditSection';
import { CommandCenterSection } from './components/CommandCenterSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalMode, setDemoModalMode] = useState<'demo' | 'expert'>('demo');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleOpenDemo = (mode: 'demo' | 'expert' = 'demo') => {
    setDemoModalMode(mode);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header Navigation */}
      <Navbar
        onOpenDemo={() => handleOpenDemo('demo')}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Banner */}
        <HeroSection onOpenDemo={() => handleOpenDemo('demo')} />

        {/* 2. Generative AI */}
        <GenerativeAISection />

        {/* 3. Predictive AI */}
        <PredictiveAISection />

        {/* 4. Facility AI Agents */}
        <AIAgentsSection />

        {/* 5. Facility MCP (Model Context Protocol) */}
        <FacilityMCPSection />

        {/* 6. Facility Healthcare System */}
        <HealthcareSection />

        {/* 7. Smart Asset Management */}
        <SmartAssetSection />

        {/* 8. Preventive Maintenance */}
        <PreventiveMaintenanceSection />

        {/* 9. Intelligent Helpdesk */}
        <IntelligentHelpdeskSection />

        {/* 10. Thermal Camera / AI Building Audit */}
        <ThermalAuditSection />

        {/* 11. AI Facility Command Center */}
        <CommandCenterSection />

        {/* 12. Case Studies */}
        <CaseStudiesSection />

        {/* 13. Contact & Connect Section */}
        <ContactSection />

        {/* 14. Final CTA */}
        <FinalCTA
          onOpenDemo={handleOpenDemo}
          onOpenDownload={() => setIsDownloadModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={() => setIsDownloadModalOpen(true)}
        onOpenDemo={() => handleOpenDemo('demo')}
      />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialMode={demoModalMode}
      />

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
}
