import React, { useState } from 'react';
import { HeartPulse, ShieldAlert, Thermometer, Wind, Zap, FileCheck2, PhoneCall, Gauge, CheckCircle2 } from 'lucide-react';

export const HealthcareSection: React.FC = () => {
  const [activeZone, setActiveZone] = useState<'icu' | 'gas' | 'cleanroom' | 'power'>('icu');

  const hospitalZones = {
    icu: {
      name: 'ICU & Surgical Suites',
      metrics: [
        { label: 'Air Change Rate', value: '24 ACH', status: 'Compliant' },
        { label: 'Positive Pressure', value: '+3.5 Pa', status: 'Optimal' },
        { label: 'Laminar Velocity', value: '0.45 m/s', status: 'ISO Class 5' },
        { label: 'Humidity Setpoint', value: '52% RH', status: 'Ideal' }
      ],
      description: 'Continuous monitoring of laminar airflow velocity, differential pressure regimes, and HEPA filter integrity to prevent surgical site contamination.',
      criticalAssets: 'Surgical Chillers, Medical Grade AHU-OT01, HEPA Filter Banks, UPS-ICU-01'
    },
    gas: {
      name: 'Medical Gas & Oxygen Plant',
      metrics: [
        { label: 'O2 Line Pressure', value: '4.2 Bar', status: 'Steady' },
        { label: 'Manifold Vacuum', value: '-0.75 Bar', status: 'Nominal' },
        { label: 'Liquid O2 Level', value: '94% Full', status: 'Auto-Replenish' },
        { label: 'Gas Purity Index', value: '99.8% O2', status: 'Pharmacopeia' }
      ],
      description: 'Real-time telemetry across central medical oxygen manifolds, nitrous oxide, and vacuum scavenging with sub-second failover alert loops.',
      criticalAssets: 'Cryogenic O2 Storage Tank, Rotary Vane Vacuum Pumps, Duplex Regulators'
    },
    cleanroom: {
      name: 'Isolation & Cleanrooms',
      metrics: [
        { label: 'Negative Pressure', value: '-2.8 Pa', status: 'Containment Ok' },
        { label: 'Particulate 0.5µm', value: '820 count/m³', status: 'ISO Class 7' },
        { label: 'UV-C Sterilization', value: 'Active Nocturnal', status: 'Verified' },
        { label: 'Exhaust Velocity', value: '1,450 CFM', status: 'Exhaust Valid' }
      ],
      description: 'Airborne infection isolation room (AIIR) pressure containment surveillance, guaranteeing zero particulate backflow into hospital common areas.',
      criticalAssets: 'Bio-containment Exhaust Dampers, UV-C Disinfection Coils, Bag-in/Bag-out HEPA'
    },
    power: {
      name: 'Emergency Backup & UPS',
      metrics: [
        { label: 'DG Auto-Start Test', value: '&lt; 8.2 Seconds', status: 'NFPA 110 Class 10' },
        { label: 'Diesel Fuel Reserve', value: '96 Hours Run', status: 'Full Reserve' },
        { label: 'Static UPS Load', value: '42% Nominal', status: 'Dual Redundant' },
        { label: 'Isolated Power IPS', value: '0.4 mA Leakage', status: 'Safe Medical Ground' }
      ],
      description: 'Zero-break emergency electrical distribution for operating tables, dialysis centers, and neonatal ventilators with automated weekly load bank verification.',
      criticalAssets: 'Cummins 1500kVA Standby Genset, Schneider Medical Isolated Power Panels'
    }
  };

  const currentZoneData = hospitalZones[activeZone];

  return (
    <section id="healthcare" className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-semibold text-rose-700 mb-3">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Mission-Critical Healthcare Facilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            AI Facility Intelligence for Hospitals & Medical Centers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Where facility failure is never an option. SmartFM provides clinical-grade compliance, medical equipment tracking, and emergency incident automation tailored for hospitals.
          </p>
        </div>

        {/* Feature showcase split with high-fidelity healthcare image */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/40 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Image & Overlay */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src="/src/assets/images/smartfm_healthcare_facility_1791371708347.jpg"
                alt="Hospital Facility Engineering and Critical Infrastructure"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-300">
                  Joint Commission & NABH Ready
                </div>
                <div className="text-lg font-bold font-display mt-1">
                  100% Life-Safety Audit Traceability
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Digital chain-of-custody for all medical equipment calibrations and HVAC pressure balances.
                </div>
              </div>
            </div>

            {/* Right Zone Selector and Telemetry */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hospital Facility Zone</div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">{currentZoneData.name}</h3>
                </div>

                {/* Zone Switcher */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                  {[
                    { id: 'icu', label: 'ICU / OT' },
                    { id: 'gas', label: 'Med Gas' },
                    { id: 'cleanroom', label: 'Cleanrooms' },
                    { id: 'power', label: 'Emergency Power' }
                  ].map((z) => (
                    <button
                      key={z.id}
                      onClick={() => setActiveZone(z.id as any)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        activeZone === z.id
                          ? 'bg-white text-blue-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {z.label}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {currentZoneData.description}
              </p>

              {/* Real-time telemetry cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {currentZoneData.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-[11px] text-slate-500 font-medium">{m.label}</div>
                    <div className="text-sm font-bold text-slate-900 mt-1 font-mono">{m.value}</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> {m.status}
                    </div>
                  </div>
                ))}
              </div>

              {/* Critical Assets connected */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Autonomous Monitored Assets:
                </div>
                <div className="text-xs text-slate-600 font-mono mt-1">
                  {currentZoneData.criticalAssets}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Specific Healthcare Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Thermometer,
              title: 'Medical Equipment Lifecycle',
              desc: 'Tracks calibration certificates, preventative maintenance, OEM recall notices, and warranty for MRI, CT scanners, and autoclaves.'
            },
            {
              icon: ShieldAlert,
              title: 'Critical Asset Monitoring',
              desc: 'Sub-second anomaly alarms on ICU chillers, liquid nitrogen cryo-storage, and blood bank refrigeration units.'
            },
            {
              icon: FileCheck2,
              title: 'Compliance & Audit Ready',
              desc: 'Automates regulatory paperless logs for JCI, NABH, ASHRAE 170, and NFPA 99 with tamper-proof cryptographic audit stamps.'
            },
            {
              icon: PhoneCall,
              title: 'Clinical Facility Helpdesk',
              desc: 'Dedicated rapid triage for doctors and nursing staff. Zero-bureaucracy voice and mobile ticketing with priority clinical routing.'
            },
            {
              icon: Wind,
              title: 'Infection Control (HVAC/HEPA)',
              desc: 'Surveillance of pressure cascade regimes, particulate count, and UV-C lamp output across airborne isolation suites.'
            },
            {
              icon: Zap,
              title: 'Emergency Power & UPS',
              desc: 'Continuous readiness tracking for diesel generators, automatic transfer switches (ATS), and isolated power systems (IPS).'
            },
            {
              icon: Gauge,
              title: 'Emergency Workflows',
              desc: 'Automated rapid incident escalation protocols for water shutoffs, medical gas drops, or power trip events.'
            },
            {
              icon: HeartPulse,
              title: 'Clinical Performance Index',
              desc: 'Executive dashboard correlating environmental parameters with surgical turnover times and clinical staff comfort.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 transition-all shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
