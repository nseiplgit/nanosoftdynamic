import React, { useState } from 'react';
import { Network, Shield, Cpu, Database, Server, Lock, ArrowRight, CheckCircle2, Code2, Layers } from 'lucide-react';

export const FacilityMCPSection: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<'assets' | 'work_orders' | 'ppm' | 'contracts' | 'employees' | 'buildings'>('assets');

  const mcpModules = {
    assets: {
      name: 'Assets Module',
      resourceUri: 'mcp://smartfm/assets/{asset_id}/telemetry',
      description: 'Provides standardized JSON schemas for asset metadata, real-time IoT vibration/temperature streams, OEM manuals, and depreciation lifecycle records.',
      scopes: ['assets.read', 'telemetry.stream', 'diagnostics.read'],
      samplePayload: `{
  "assetId": "CH-CENT-02",
  "category": "Centrifugal Chiller 600TR",
  "bmsStatus": "RUNNING_NOMINAL",
  "bearingTempC": 64.2,
  "vibrationRms": 2.1,
  "lastServiceDate": "2026-09-12"
}`
    },
    work_orders: {
      name: 'Work Orders Module',
      resourceUri: 'mcp://smartfm/work-orders/{ticket_id}',
      description: 'Allows AI agents to programmatically generate, prioritize, update, and close emergency maintenance tickets with full technician audit trails.',
      scopes: ['workorders.create', 'workorders.update', 'dispatch.write'],
      samplePayload: `{
  "ticketId": "WO-9184",
  "urgency": "PRIORITY_1",
  "trade": "HVAC_REFRIGERATION",
  "assignedTech": "EMP-482 (Marcus Vance)",
  "slaDeadline": "2026-10-07T12:00:00Z"
}`
    },
    ppm: {
      name: 'PPM & Compliance Module',
      resourceUri: 'mcp://smartfm/ppm/schedules/compliance',
      description: 'Exposes statutory inspection calendars, ISO/ASHRAE compliance matrices, and condition-based scheduling algorithms to AI scheduling agents.',
      scopes: ['ppm.read', 'compliance.audit', 'schedules.rebalance'],
      samplePayload: `{
  "calendarQuarter": "2026-Q4",
  "statutoryItems": 184,
  "complianceRate": 0.994,
  "overdueCount": 0,
  "dynamicWindowDays": 14
}`
    },
    contracts: {
      name: 'Contracts & SLA Module',
      resourceUri: 'mcp://smartfm/contracts/vendors/{vendor_id}',
      description: 'Permits AI agents to cross-verify vendor warranties, contractor hourly rates, response time SLAs, and spare parts procurement agreements.',
      scopes: ['contracts.read', 'sla.verify', 'procurement.check'],
      samplePayload: `{
  "vendorId": "VND-CARRIER-SERVICES",
  "contractType": "COMPREHENSIVE_AMC",
  "responseSlaHours": 2.0,
  "warrantyExpiry": "2028-12-31",
  "penaltyClauseActive": true
}`
    },
    employees: {
      name: 'Employees & Technicians',
      resourceUri: 'mcp://smartfm/workforce/technicians/roster',
      description: 'Real-time technician location tracking, skill certifications, current ticket queue load, and safety induction validity records.',
      scopes: ['workforce.read', 'roster.query', 'location.geofence'],
      samplePayload: `{
  "techId": "EMP-482",
  "certifications": ["HVAC_MASTER", "HIGH_VOLTAGE_LV3"],
  "currentLocation": "TOWER_A_FL04",
  "activeWorkload": 2,
  "status": "AVAILABLE"
}`
    },
    buildings: {
      name: 'Buildings & BIM Module',
      resourceUri: 'mcp://smartfm/bim/spaces/{space_id}/cad',
      description: 'Accesses spatial building hierarchy, floor plans, 3D IFC/Revit models, room volume, AHU zoning layouts, and emergency egress routes.',
      scopes: ['bim.read', 'spatial.geometry', 'zoning.query'],
      samplePayload: `{
  "spaceId": "NORTH_TOWER_RM402",
  "floor": 4,
  "areaSqMeters": 68.5,
  "zoneAhu": "AHU-N04-A",
  "chilledWaterLoop": "CHW-SECONDARY-LOOP-02"
}`
    }
  };

  const activeModuleData = mcpModules[selectedModule];

  return (
    <section id="facility-mcp" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-xs font-semibold text-indigo-700 mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>Open Standard Protocol</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Facility MCP: The Model Context Protocol Integration Layer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal text-balance">
            Standardized, secure protocol enabling LLMs and AI Agents to communicate bidirectionally with SmartFM APIs, building automation systems, and enterprise databases.
          </p>
        </div>

        {/* Visual End-to-End Flow Diagram */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-14 shadow-xs">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Facility Model Context Protocol Architecture (End-to-End)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">
            {/* Step 1 */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
              <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">01. INITIATOR</div>
              <div className="text-xs font-bold text-slate-900">User / FM Lead</div>
              <div className="text-[11px] text-slate-500 mt-1">Natural Query / Mobile / Voice</div>
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-center shadow-xs">
              <div className="text-[10px] font-mono font-bold text-blue-600 mb-1">02. REASONING</div>
              <div className="text-xs font-bold text-blue-900">AI Assistant</div>
              <div className="text-[11px] text-blue-700 mt-1">Gemini / Claude / GPT LLM</div>
            </div>

            {/* Step 3 (Facility MCP highlighted) */}
            <div className="p-4 bg-indigo-600 text-white rounded-xl border border-indigo-700 text-center shadow-md ring-2 ring-indigo-200">
              <div className="text-[10px] font-mono font-bold text-indigo-200 mb-1">03. MCP GATEWAY</div>
              <div className="text-xs font-bold text-white">Facility MCP Server</div>
              <div className="text-[11px] text-indigo-100 mt-1">Context Broker & RBAC Token</div>
            </div>

            {/* Step 4 */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
              <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">04. CONNECTOR</div>
              <div className="text-xs font-bold text-slate-900">SmartFM APIs</div>
              <div className="text-[11px] text-slate-500 mt-1">REST, Webhooks & BACnet/IP</div>
            </div>

            {/* Step 5 */}
            <div className="p-4 bg-slate-100 rounded-xl border border-slate-300 text-center shadow-xs">
              <div className="text-[10px] font-mono font-bold text-slate-500 mb-1">05. MODULES</div>
              <div className="text-xs font-bold text-slate-900">Core FM Data</div>
              <div className="text-[11px] text-slate-600 mt-1">6 Enterprise Modules</div>
            </div>

            {/* Step 6 */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center shadow-xs">
              <div className="text-[10px] font-mono font-bold text-emerald-600 mb-1">06. OUTCOME</div>
              <div className="text-xs font-bold text-emerald-900">AI Grounded Response</div>
              <div className="text-[11px] text-emerald-700 mt-1">Zero Hallucination Action</div>
            </div>
          </div>
        </div>

        {/* Interactive Module Inspector */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/40 overflow-hidden">
          <div className="px-6 py-4 bg-slate-50/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Interactive MCP Resource Inspector
              </span>
            </div>
            <span className="text-xs text-slate-500">
              Click any module below to inspect its schema and security scopes
            </span>
          </div>

          {/* Module Selector Chips */}
          <div className="p-4 bg-slate-50/40 border-b border-slate-200 flex flex-wrap gap-2">
            {[
              { id: 'assets', label: 'Assets' },
              { id: 'work_orders', label: 'Work Orders' },
              { id: 'ppm', label: 'PPM & Compliance' },
              { id: 'contracts', label: 'Contracts & SLAs' },
              { id: 'employees', label: 'Employees & Techs' },
              { id: 'buildings', label: 'Buildings & BIM' }
            ].map((mod) => (
              <button
                key={mod.id}
                onClick={() => setSelectedModule(mod.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedModule === mod.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {mod.label}
              </button>
            ))}
          </div>

          {/* Module Details & Code Snippet */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600">
                  {activeModuleData.resourceUri}
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                  {activeModuleData.name}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {activeModuleData.description}
              </p>

              {/* Scopes */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Enforced Security Scopes (OAuth 2.0 / mTLS)
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModuleData.scopes.map((scope, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-mono text-xs border border-slate-200"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-900 flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Context Isolation:</strong> AI agents can never write to financial or payroll tables, and all state mutations require explicit Human-in-the-Loop clearance.
                </span>
              </div>
            </div>

            {/* Right JSON payload snippet */}
            <div className="lg:col-span-6 bg-slate-900 rounded-xl p-5 text-slate-100 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                <span>MCP Resource Schema Output</span>
                <span>application/json</span>
              </div>
              <pre className="overflow-x-auto text-emerald-400 leading-relaxed whitespace-pre font-mono">
                {activeModuleData.samplePayload}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
