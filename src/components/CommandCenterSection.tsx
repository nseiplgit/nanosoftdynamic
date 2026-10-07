import React, { useState } from 'react';
import { LayoutDashboard, Building2, CheckCircle2, AlertTriangle, TrendingDown, Activity, Cpu, Sparkles, Clock, ArrowUpRight, BarChart3 } from 'lucide-react';

export const CommandCenterSection: React.FC = () => {
  const [selectedCampus, setSelectedCampus] = useState<'tech' | 'hospital' | 'tower' | 'logistics'>('tech');
  const [activeTab, setActiveTab] = useState<'kpi' | 'recommendations' | 'tickets'>('kpi');

  const campusData = {
    tech: {
      name: 'Global Tech Campus (HQ)',
      location: '4 Office Towers · 4.2M sq. ft.',
      stats: {
        totalAssets: '14,820',
        openWorkOrders: '18',
        ppmCompliance: '99.4%',
        criticalAlerts: '0',
        assetHealth: '98.2%',
        facilityHealthScore: '96 / 100',
        energyInsights: '-6.4% kWh vs Baseline',
        aiRecommendations: '3 Pending Action',
        pendingHelpdesk: '7 Tickets (4.2m MTTR)'
      },
      recommendations: [
        { id: 'REC-01', text: 'Pre-cool Tower B by 1.5°C between 05:00-07:00 to avoid forecasted 14:00 peak electric demand charge.', impact: 'Saves $2,400 today' },
        { id: 'REC-02', text: 'Stagger basement exhaust fan cycle during shift change to reduce harmonic neutral current.', impact: 'Extends motor life by 14%' },
        { id: 'REC-03', text: 'Re-balance air supply in Conference Hall 3B following high CO2 occupancy spike.', impact: 'Comfort index +18%' }
      ]
    },
    hospital: {
      name: 'Metro Health Medical Center',
      location: '850 Beds · 14 Operating Theatres',
      stats: {
        totalAssets: '9,450',
        openWorkOrders: '12',
        ppmCompliance: '100.0%',
        criticalAlerts: '0',
        assetHealth: '99.7%',
        facilityHealthScore: '99 / 100',
        energyInsights: 'Pure Power Quality (THD < 2%)',
        aiRecommendations: '2 Pending Action',
        pendingHelpdesk: '3 Clinical Tickets (1.8m MTTR)'
      },
      recommendations: [
        { id: 'REC-01', text: 'Schedule nocturnal HEPA filter differential check on OT-04 before morning cardiac surgeries.', impact: 'Statutory JCI Compliance' },
        { id: 'REC-02', text: 'Perform quarterly auto-transfer ATS test on secondary dialysis UPS loop.', impact: 'NFPA 110 Verified' }
      ]
    },
    tower: {
      name: 'Financial Tower 62',
      location: '62 Floors Commercial · Multi-Tenant',
      stats: {
        totalAssets: '11,200',
        openWorkOrders: '24',
        ppmCompliance: '98.8%',
        criticalAlerts: '1 Triaged',
        assetHealth: '97.4%',
        facilityHealthScore: '94 / 100',
        energyInsights: '-8.2% Chilled Water Flow',
        aiRecommendations: '4 Pending Action',
        pendingHelpdesk: '11 Tickets (6.1m MTTR)'
      },
      recommendations: [
        { id: 'REC-01', text: 'Elevator Car #06 brake shoe wear sensor at 82% threshold; auto-bundle with Tuesday evening routine PPM.', impact: 'Prevents car lockout' },
        { id: 'REC-02', text: 'Adjust static duct pressure setpoint on floors 40-52 to eliminate whistling damper acoustics.', impact: 'Resolves 4 tenant calls' }
      ]
    },
    logistics: {
      name: 'Global Air Cargo & Logistics Hub',
      location: '8 Hangars · Cold Storage Chain',
      stats: {
        totalAssets: '6,800',
        openWorkOrders: '9',
        ppmCompliance: '99.1%',
        criticalAlerts: '0',
        assetHealth: '98.9%',
        facilityHealthScore: '97 / 100',
        energyInsights: 'Solar PV offset: 34% of base',
        aiRecommendations: '2 Pending Action',
        pendingHelpdesk: '4 Tickets (3.5m MTTR)'
      },
      recommendations: [
        { id: 'REC-01', text: 'Defrost cycle optimization for Cold Storage Hangar 2 to prevent ice accumulation on evaporators.', impact: 'Energy drop 9.2%' },
        { id: 'REC-02', text: 'Fast-speed sectional overhead door safety light curtain realignment needed in Dock 14.', impact: 'Safety assurance' }
      ]
    }
  };

  const current = campusData[selectedCampus];

  return (
    <section id="command-center" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-blue-700 mb-3">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Single Pane of Glass</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Centralized AI Facility Command Center
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Real-time multi-building situational awareness. One unified command dashboard integrating IoT sensor telemetry, work orders, PPM compliance, energy benchmarks, and autonomous AI recommendations.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 shadow-xl shadow-slate-200/50 p-6 sm:p-8">
          {/* Top Command Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-display text-xl font-bold text-slate-900">{current.name}</h3>
                <span className="text-xs font-mono text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                  Live Feed · UTC
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{current.location}</div>
            </div>

            {/* Campus Selector */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs overflow-x-auto">
              {[
                { id: 'tech', label: 'Tech Campus' },
                { id: 'hospital', label: 'Hospital Facility' },
                { id: 'tower', label: 'Commercial Tower' },
                { id: 'logistics', label: 'Logistics Hub' }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCampus(c.id as any)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCampus === c.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* 9 Core Telemetry Dashboard Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Total Assets */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Total Assets Monitored</div>
              <div className="text-2xl font-extrabold font-display text-slate-900 mt-1">{current.stats.totalAssets}</div>
              <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 100% Digital Twin Synced
              </div>
            </div>

            {/* Open Work Orders */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Open Work Orders</div>
              <div className="text-2xl font-extrabold font-display text-blue-600 mt-1">{current.stats.openWorkOrders}</div>
              <div className="text-[11px] text-slate-500 mt-1">0 overdue · All within SLA target</div>
            </div>

            {/* PPM Compliance */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">PPM Compliance Rate</div>
              <div className="text-2xl font-extrabold font-display text-emerald-600 mt-1">{current.stats.ppmCompliance}</div>
              <div className="text-[11px] text-emerald-700 mt-1 font-semibold">Statutory Audit Clear</div>
            </div>

            {/* Critical Alerts */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Critical Active Alerts</div>
              <div className="text-2xl font-extrabold font-display text-slate-900 mt-1">{current.stats.criticalAlerts}</div>
              <div className="text-[11px] text-emerald-600 mt-1">Autonomous triage active</div>
            </div>

            {/* Asset Health Index */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Asset Health Index</div>
              <div className="text-2xl font-extrabold font-display text-indigo-600 mt-1">{current.stats.assetHealth}</div>
              <div className="text-[11px] text-slate-500 mt-1">Vibration & thermal nominal</div>
            </div>

            {/* Facility Health Score */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Facility Health Score</div>
              <div className="text-2xl font-extrabold font-display text-emerald-600 mt-1">{current.stats.facilityHealthScore}</div>
              <div className="text-[11px] text-slate-500 mt-1">Grade A+ World Class</div>
            </div>

            {/* Energy Insights */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Energy & Carbon Insights</div>
              <div className="text-lg font-bold font-display text-emerald-700 mt-1 truncate">{current.stats.energyInsights}</div>
              <div className="text-[11px] text-slate-500 mt-1">Dynamic setpoint trimming</div>
            </div>

            {/* AI Recommendations */}
            <div className="p-4 bg-white rounded-xl border border-blue-200 shadow-2xs bg-blue-50/40">
              <div className="text-[11px] font-semibold text-blue-800 uppercase tracking-wide">AI Prescriptive Actions</div>
              <div className="text-lg font-bold font-display text-blue-700 mt-1">{current.stats.aiRecommendations}</div>
              <div className="text-[11px] text-blue-600 mt-1">Continuous optimization</div>
            </div>

            {/* Pending Helpdesk Tickets */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Pending Helpdesk Tickets</div>
              <div className="text-lg font-bold font-display text-slate-900 mt-1">{current.stats.pendingHelpdesk}</div>
              <div className="text-[11px] text-slate-500 mt-1">Auto-routed to active technicians</div>
            </div>
          </div>

          {/* AI Prescriptive Recommendation List */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Autonomous Recommendations for this Facility
                </span>
              </div>
              <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">
                Execute All Approved Actions
              </span>
            </div>

            <div className="space-y-2.5">
              {current.recommendations.map((rec) => (
                <div key={rec.id} className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded mt-0.5 shrink-0">
                      {rec.id}
                    </span>
                    <span className="text-slate-800 font-medium">{rec.text}</span>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {rec.impact}
                    </span>
                    <button className="px-2.5 py-1 text-[11px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors cursor-pointer">
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
