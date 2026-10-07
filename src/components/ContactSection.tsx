import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Building2, MessageSquare, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Enterprise Implementation',
    facilitySize: '1M - 5M sq. ft.',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    {
      region: 'Global Headquarters',
      city: 'San Francisco, CA',
      address: '500 Howard Street, Suite 1400',
      phone: '+1 (415) 890-4200',
      email: 'enterprise@nanosoftdynamic.com'
    },
    {
      region: 'EMEA Technology Hub',
      city: 'London, UK',
      address: '25 Bank Street, Canary Wharf',
      phone: '+44 20 7946 0920',
      email: 'emea@nanosoftdynamic.com'
    },
    {
      region: 'APAC Facility Center',
      city: 'Singapore',
      address: '1 Marina Boulevard, #28-00',
      phone: '+65 6712 3400',
      email: 'apac@nanosoftdynamic.com'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-blue-700 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with NanoSoft Dynamic</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Talk to Our AI Facility Architects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Whether you manage commercial towers, healthcare complexes, or university campuses, our solutions team is ready to demonstrate customized ROI, telemetry integration, and seamless deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Regional Hubs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Direct Enterprise Access</span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Connect Directly
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Fast response times for enterprise inquiries, RFP submissions, and technical architecture reviews.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email Inquiries</div>
                    <a href="mailto:contact@nanosoftdynamic.com" className="text-blue-600 hover:underline">
                      contact@nanosoftdynamic.com
                    </a>
                    <div className="text-[11px] text-slate-500">Average response: &lt; 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Toll-Free Enterprise Line</div>
                    <div className="text-slate-700 font-mono font-medium">+1 (800) 550-SMART (7627)</div>
                    <div className="text-[11px] text-slate-500">Mon - Fri · 24/5 Global Coverage</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Mission-Critical Incident Support</div>
                    <div className="text-slate-700">Dedicated 24/7/365 NOC Hotline for contracted facilities</div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Non-Disclosure Agreements (NDA) proactively executed prior to facility data review.</span>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Global Facility Engineering Hubs
              </div>
              <div className="space-y-3">
                {offices.map((office, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{office.city}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{office.region}</span>
                    </div>
                    <div className="text-slate-600 text-[11px] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" /> {office.address}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono pt-0.5">
                      {office.phone} · {office.email}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Message & Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Message Successfully Transmitted
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A dedicated NanoSoft Dynamic Facility Solutions Director has received your request and will follow up with technical documentation for <strong>{formData.company}</strong> within 2 business hours.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 max-w-sm mx-auto text-left space-y-1">
                  <div><strong>Ticket ID:</strong> NSD-INQ-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div><strong>Category:</strong> {formData.inquiryType}</div>
                  <div><strong>Assigned Team:</strong> Enterprise Architecture Group</div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Direct Connect Form</span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                    Request an Architecture Assessment
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the brief details below to speak with an engineer about your facility systems.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. David Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="d.sterling@campus.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Organization / Company *</label>
                    <input
                      required
                      type="text"
                      placeholder="Metro Health / Horizon Tech Towers"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Objective</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    >
                      <option>Enterprise Implementation</option>
                      <option>Predictive AI & Thermal Camera Audit</option>
                      <option>Healthcare Facility Management</option>
                      <option>Facility MCP Custom Integration</option>
                      <option>Vendor & Contractor RFP</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Facility Square Footage</label>
                    <select
                      value={formData.facilitySize}
                      onChange={(e) => setFormData({ ...formData, facilitySize: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    >
                      <option>Under 500,000 sq. ft.</option>
                      <option>500,000 - 1,000,000 sq. ft.</option>
                      <option>1M - 5M sq. ft.</option>
                      <option>5M+ sq. ft. (Multi-campus)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Detailed Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your current facility setup, BMS protocols (BACnet, Modbus, MQTT), and primary maintenance challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Compliant with SOC2, GDPR, & ISO 27001 data governance</span>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer"
                  >
                    <span>Submit Architecture Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
