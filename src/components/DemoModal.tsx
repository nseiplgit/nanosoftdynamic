import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Building2, User, Mail, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'demo' | 'expert';
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialMode = 'demo' }) => {
  const [mode, setMode] = useState<'demo' | 'expert'>(initialMode);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    organization: '',
    facilityType: 'Commercial Real Estate',
    assetCount: '1,000 - 5,000 Assets',
    preferredTime: 'Morning (09:00 - 12:00)',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              S
            </div>
            <span className="font-display text-sm font-bold text-slate-900">
              {mode === 'demo' ? 'Request Live SmartFM AI Demo' : 'Consult an AI Facility Expert'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Session Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName || 'Facility Leader'}</strong>. Our Lead Facility AI Solutions Architect will demonstrate custom telemetry models for <strong>{formData.organization || 'your organization'}</strong> ({formData.facilityType}).
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto font-mono text-slate-700">
              <div><strong>Confirmation ID:</strong> SFM-DEMO-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div><strong>Assigned Specialist:</strong> Marcus Vance (Senior Solutions Director)</div>
              <div><strong>Focus Module:</strong> Facility MCP & Predictive Maintenance Engine</div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3 mb-2">
              <button
                type="button"
                onClick={() => setMode('demo')}
                className={`py-2 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                  mode === 'demo' ? 'bg-blue-50 border-blue-400 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                Request Product Demo
              </button>
              <button
                type="button"
                onClick={() => setMode('expert')}
                className={`py-2 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                  mode === 'expert' ? 'bg-blue-50 border-blue-400 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                Talk to Facility Expert
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Work Email *</label>
                <input
                  required
                  type="email"
                  placeholder="sarah@enterprise.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Company / Organization *</label>
                <input
                  required
                  type="text"
                  placeholder="Apex Health Group"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Facility Type</label>
                <select
                  value={formData.facilityType}
                  onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option>Commercial Real Estate (Office Towers)</option>
                  <option>Hospital & Healthcare Network</option>
                  <option>Data Center & Critical Infra</option>
                  <option>Industrial Plant & Manufacturing</option>
                  <option>Educational & University Campus</option>
                  <option>Aviation & Logistics Hub</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Total Assets Scale</label>
                <select
                  value={formData.assetCount}
                  onChange={(e) => setFormData({ ...formData, assetCount: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option>500 - 1,000 Assets</option>
                  <option>1,000 - 5,000 Assets</option>
                  <option>5,000 - 20,000 Assets</option>
                  <option>20,000+ Assets (Portfolio)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Preferred Timezone Slot</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option>Morning (09:00 - 12:00)</option>
                  <option>Afternoon (13:00 - 16:00)</option>
                  <option>Evening (17:00 - 19:00)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Operational Objectives (Optional)</label>
              <textarea
                rows={2}
                placeholder="e.g. Looking to integrate predictive vibration sensing on 12 central chillers and replace paper work orders..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>NDA & Privacy protected</span>
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <span>Confirm Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
