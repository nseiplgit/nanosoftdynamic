import { AIAgent, CaseStudy, HelpdeskSimulation, ThermalHotspot } from '../types';

export const AI_AGENTS: AIAgent[] = [
  {
    id: 'asset',
    name: 'Asset Intelligence Agent',
    role: 'Asset Lifecycle & Health Specialist',
    tagline: 'Autonomous asset health tracking & historical telemetry correlation',
    description: 'Provides instant asset information, full lifecycle history, maintenance logs, and proactively flags degraded components before mechanical failure.',
    capabilities: [
      'Retrieves complete asset specs, warranty, and commissioning telemetry',
      'Correlates multi-year maintenance logs with OEM MTBF benchmarks',
      'Identifies abnormal vibration, amp draw, and thermal stress signatures',
      'Recommends optimal overhaul timing vs component replacement'
    ],
    sampleQuery: 'Audit centrifugal chiller CH-02 in Building 3 basement — check vibration trends and service history.',
    sampleResponse: {
      title: 'Centrifugal Chiller #CH-02 Health Assessment',
      metrics: [
        { label: 'Asset Health Index', value: '74.2% (Degrading)' },
        { label: 'RUL (Est. Life)', value: '38 Days to Threshold' },
        { label: 'Vibration Amplitude', value: '4.8 mm/s (+38% vs baseline)' },
        { label: 'Operating Run Hours', value: '28,450 hrs' }
      ],
      summary: 'Telemetry indicates harmonic vibration anomaly on Drive-End bearing #2 following recent peak load cycles. Last overhaul was 14 months ago; oil analysis indicates trace particulate buildup.',
      actionTaken: 'Flagged for priority condition-based inspection; throttled stage-2 compression spool to avoid mechanical fatigue.',
      nextRecommendedStep: 'Dispatch Level-3 HVAC technician with dynamic balancing kit before scheduled Friday peak cooling demand.'
    }
  },
  {
    id: 'ppm',
    name: 'Preventive Maintenance Agent',
    role: 'PPM Scheduler & Compliance Engine',
    tagline: 'Dynamically optimizes maintenance cadence from static calendar to real wear',
    description: 'Continuously monitors preventive maintenance schedules, flags overdue tasks, predicts optimal intervention windows, and drastically reduces unpredicted equipment failures.',
    capabilities: [
      'Monitors statutory, OEM, and SLA compliance schedules across campuses',
      'Detects overdue activities and auto-reallocates technician workloads',
      'Converts calendar-based PPM into dynamic condition-based maintenance (CBM)',
      'Simulates parts inventory availability before dispatching work orders'
    ],
    sampleQuery: 'What preventive maintenance schedules are at risk of SLA breach across HVAC and fire pumps this week?',
    sampleResponse: {
      title: 'Weekly PPM Risk & Schedule Optimization Report',
      metrics: [
        { label: 'Campus Compliance Rate', value: '99.4%' },
        { label: 'Tasks at Risk', value: '2 Overdue / 4 High-Risk' },
        { label: 'Saved Downtime', value: '46 hours projected' },
        { label: 'Spare Parts Staged', value: '100% In Stock' }
      ],
      summary: 'Identified 2 overdue quarter-turn valve lubrications in Tower B and 1 upcoming high-pressure fire pump test. Rebalanced technician route to complete all critical tasks 18 hours prior to statutory audit deadline.',
      actionTaken: 'Auto-bundled valve check with adjacent AHU filter replacement, saving 1.5 hours of technician travel transit time.',
      nextRecommendedStep: 'Authorize electronic sign-off token for certified fire protection engineer upon pressure test completion.'
    }
  },
  {
    id: 'helpdesk',
    name: 'Intelligent Helpdesk Agent',
    role: 'Natural Language Triage & Dispatch',
    tagline: 'Translates informal human complaints into structured, routed work orders',
    description: 'Understands unstructured tenant complaints via natural language, identifies precise building location and affected asset, assigns severity, and routes tickets to certified teams.',
    capabilities: [
      'Natural language semantic classification across 45+ facility categories',
      'Zero-click extraction of floor, zone, asset tag, and urgency level',
      'Automated dispatch based on technician skill matrix, proximity, and SLA load',
      'Two-way conversational updates to tenant via SMS, Teams, or Webhook'
    ],
    sampleQuery: 'Someone spilled coffee near the server rack on floor 6 west wing and the UPS fan sounds like it is struggling.',
    sampleResponse: {
      title: 'Emergency Multi-Category Ticket Auto-Generated (#WO-9184)',
      metrics: [
        { label: 'Classified Urgency', value: 'Priority 1 (Critical)' },
        { label: 'Detected Location', value: 'Tower A · Floor 6 · Room 608 (IDF)' },
        { label: 'Target Asset', value: 'UPS Unit #UPS-06-B (APC Symmetra)' },
        { label: 'Target SLA', value: '< 15 mins First Response' }
      ],
      summary: 'Parsed dual-hazard incident: Immediate liquid hazard near high-voltage electrical enclosure + acoustic distress on auxiliary cooling fan. Segregated into cleaning crew dispatch and electrical rapid response.',
      actionTaken: 'High-priority alert dispatched to on-duty Electrical Lead (R. Kumar, 2 min away) and Facility Housekeeping.',
      nextRecommendedStep: 'Lock magnetic access door to IDF-608 until electrical safety clearance is uploaded.'
    }
  },
  {
    id: 'ops',
    name: 'Facility Operations Agent',
    role: 'Centralized FM Intelligence & KPI Guardian',
    tagline: 'Real-time telemetry synthesis, sustainability monitoring & executive insights',
    description: 'Monitors holistic facility KPIs, detects abnormal utility surges, tracks carbon and energy consumption, and provides facility managers with actionable strategic recommendations.',
    capabilities: [
      'Real-time synthesis of BMS, IoT energy meters, and occupancy sensors',
      'Instant carbon footprint and energy baseline deviation calculations',
      'Automated executive briefings and statutory compliance rollups',
      'Cross-portfolio facility benchmarking and capital expenditure planning'
    ],
    sampleQuery: 'Analyze energy spike in East Campus over the past 48 hours and provide corrective optimization.',
    sampleResponse: {
      title: 'East Campus Energy Anomaly & Setpoint Optimization',
      metrics: [
        { label: 'Unplanned Consumption', value: '+14.2% kWh Spike' },
        { label: 'Root Cause', value: 'AHU-04 Simultaneous Heating/Cooling' },
        { label: 'Cost Avoidance Potential', value: '$3,820 / month' },
        { label: 'Carbon Impact', value: '4.2 metric tons CO2e' }
      ],
      summary: 'Discovered that Air Handling Unit AHU-04 was caught in simultaneous mechanical cooling and reheat due to a stuck modulating valve actuator in Zone 4C. Reheat was fighting 18°C supply air.',
      actionTaken: 'Sent BACnet protocol override to lock reheat damper to minimum 15% position during unoccupied nocturnal hours.',
      nextRecommendedStep: 'Create maintenance work order to replace actuator diaphragm during next scheduled downtime window.'
    }
  }
];

export const HELPDESK_PRESETS: HelpdeskSimulation[] = [
  {
    prompt: 'The main conference room 402 is sweltering hot, and there is a wet puddle forming right under the ceiling cassette unit.',
    category: 'HVAC / Chilled Water Leakage',
    priority: 'High',
    detectedLocation: 'North Tower · Level 4 · Conference Suite 402',
    detectedAsset: 'FCU-N04-02 (Daikin Variable Refrigerant Volume)',
    assignedTeam: 'HVAC Mechanical Specialist Team (Lead: Marcus Vance)',
    slaTarget: '30 Minutes Response · 2 Hours Resolution',
    automatedActions: [
      'Extracted entity: Ceiling cassette FCU-N04-02',
      'Mapped coordinates: North Tower Floor 4 Zone 2',
      'Cross-checked condensate pump sensor: High Float Switch tripped',
      'Generated Work Order #WO-8042 with priority escalation',
      'Triggered automated SMS confirmation to meeting organizer'
    ]
  },
  {
    prompt: 'Fluorescent lights in the pharmacy cold storage corridor are flickering violently and the emergency exit sign is beep-chirping.',
    category: 'Electrical Distribution / Safety',
    priority: 'Critical',
    detectedLocation: 'Hospital Wing B · Level 1 · Cold Chain Corridor #104',
    detectedAsset: 'Panel DP-EMERG-01 / Dual-battery Inverter Unit',
    assignedTeam: 'Certified Hospital Electrical Engineers (On-Call Unit)',
    slaTarget: '15 Minutes Response · 1 Hour Resolution',
    automatedActions: [
      'Extracted compliance category: JCI Critical Healthcare Zone',
      'Identified potential ballast short-circuit on Emergency Distribution Circuit',
      'Verified cold-chain vaccine refrigerator backup power remains isolated & unaffected',
      'Dispatched on-site electrical technician with thermal imaging camera'
    ]
  },
  {
    prompt: 'The electronic badge turnstile at West Lobby Gate 3 is rejecting valid credentials and making a loud grinding screech.',
    category: 'Access Control & Physical Security',
    priority: 'Medium',
    detectedLocation: 'Main Atrium · Ground Floor · West Security Turnstiles Gate 3',
    detectedAsset: 'Optical Turnstile #TRN-W03 (Gunnebo SpeedStile)',
    assignedTeam: 'Access Systems & Integrated Security Unit',
    slaTarget: '45 Minutes Response · 3 Hours Resolution',
    automatedActions: [
      'Extracted mechanical failure: Drive motor gearbox friction',
      'Auto-switched turnstile to Fail-Open bi-directional mode to prevent crowd bottleneck',
      'Generated Work Order #WO-8049 with spare belt replacement ticket'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'campus-ppm',
    title: 'Enterprise Tech Campus AI Predictive Maintenance',
    category: 'Predictive Maintenance & Energy',
    clientType: 'Fortune 100 Technology Campus (4.2M sq. ft.)',
    metricHighlight: '42%',
    metricLabel: 'Reduction in unscheduled HVAC downtime',
    challenge: 'Managing over 18,500 active mechanical and electrical assets across 6 interconnected office towers. Reliance on static calendar-based PPM schedules resulted in unexpected chiller compressor seizures, costly weekend emergency dispatches, and excessive tenant temperature complaints.',
    solution: 'Deployed SmartFM AI with IoT vibration and thermal telemetry streaming directly into the Predictive AI Engine. The platform transformed static 30-day maintenance schedules into real-time condition-based triggers.',
    implementation: 'Integrated 1,200 IoT sensors across chillers, AHUs, cooling towers, and switchgear with the SmartFM Facility MCP layer. Trained predictive wear models on 4 years of historic equipment data.',
    result: [
      'Zero catastrophic chiller compressor failures across 24 consecutive months',
      '42% reduction in unscheduled downtime and $620,000 saved in emergency contractor callouts',
      '18% overall reduction in facility energy consumption through real-time setpoint optimization',
      '99.4% SLA adherence achieved across all statutory preventative maintenance orders'
    ]
  },
  {
    id: 'hospital-health',
    title: 'Multi-Specialty Hospital Critical Facility Management',
    category: 'Healthcare Facility Management',
    clientType: '850-Bed Tertiary Teaching Hospital',
    metricHighlight: '100%',
    metricLabel: 'Statutory compliance across critical life-support assets',
    challenge: 'Healthcare facilities cannot tolerate a single second of utility interruption. Strict JCI and NABH audit requirements demanded airtight traceability for medical gas plants, operating theatre laminar flow systems, and emergency backup diesel generators.',
    solution: 'Implemented the SmartFM Healthcare Facility Suite with autonomous AI agents dedicated to critical biomedical equipment, laminar air pressure balancing, and emergency backup infrastructure.',
    implementation: 'Configured automated regulatory audit logs, real-time HEPA filter particulate differential pressure tracking, and immediate emergency work order escalation for any life-safety equipment anomaly.',
    result: [
      '100% regulatory audit compliance recorded across consecutive JCI and state health inspections',
      'Average response time for operating theatre environmental alerts dropped from 28 mins to 4.2 mins',
      'Medical gas supply line pressure anomalies detected and resolved 7 hours before clinical impact',
      'Eliminated manual paper logbooks with automated digital cryptographic chain-of-custody'
    ]
  },
  {
    id: 'thermal-audit',
    title: 'Autonomous Thermal Camera Building Envelope & Switchgear Audit',
    category: 'Thermal Camera AI Audit',
    clientType: 'Metro Financial Tower (62 Floors)',
    metricHighlight: '$1.4M',
    metricLabel: 'Capital loss averted via pre-fault hotspot detection',
    challenge: 'High-voltage busbars and rooftop HVAC systems in a 62-floor skyscraper presented hidden thermal degradation that conventional visual walk-through inspections consistently missed until catastrophic breaker trips occurred.',
    solution: 'Introduced drone and handheld FLIR thermal camera integration powered by SmartFM Computer Vision AI. Automatic radiometric heat anomaly detection and thermal gradient comparison against baseline standards.',
    implementation: 'Processed over 14,000 thermal inspection frames per quarter. AI automatically flags Delta-T (>15°C) anomalies, maps them to asset CAD coordinates, and auto-generates work orders with infrared radiometric crops.',
    result: [
      'Identified critical 84.6°C loose terminal hotspot on Main Substation Busbar Phase B prior to electrical arcing',
      'Detected moisture ingress and thermal bridge insulation leaks across 1,800 sq. meters of glass curtain wall',
      'Estimated $1.4M in potential electrical fire damage and tenant business interruption averted',
      'Audit cycle time compressed from 3 weeks of manual engineering review to under 4 hours'
    ]
  },
  {
    id: 'helpdesk-ai',
    title: 'Autonomous AI Helpdesk & Multi-Tenant Dispatch',
    category: 'Intelligent Helpdesk Automation',
    clientType: 'International Logistics & Commercial Hub (12 Buildings)',
    metricHighlight: '78%',
    metricLabel: 'Reduction in helpdesk ticket resolution time',
    challenge: 'A deluge of 1,800+ monthly informal tenant requests sent via emails, WhatsApp, and calls created severe bottlenecks for 3 dispatch coordinators, causing delayed response times and incorrect technician allocations.',
    solution: 'Replaced manual ticket entry with the SmartFM Natural Language Helpdesk Agent. Natural language understanding automatically parses user complaints, determines location, selects trade category, and dispatches the closest certified tech.',
    implementation: 'Integrated with tenant communication portals, QR codes on asset tags, and mobile technician apps. The agent provides conversational status updates to occupants.',
    result: [
      'First-touch ticket classification accuracy exceeded 96.8% without human triage intervention',
      'Mean Time to Respond (MTTR) dropped from 84 minutes to 6.2 minutes',
      '78% reduction in total ticket resolution turnaround time',
      'Tenant satisfaction (CSAT) rating surged from 3.4/5 to 4.9/5 within 90 days'
    ]
  }
];

export const THERMAL_HOTSPOTS: ThermalHotspot[] = [
  {
    id: 'spot-1',
    x: 48,
    y: 36,
    temperature: '84.6°C',
    delta: '+38.2°C vs Phase A',
    component: 'Substation Busbar Joint Phase B',
    severity: 'Critical',
    diagnosis: 'Severe thermal overload caused by loose bolt torque & oxidized contact surface.',
    actionRequired: 'Emergency torque calibration & thermal contact paste reapplication during off-peak window.'
  },
  {
    id: 'spot-2',
    x: 74,
    y: 62,
    temperature: '61.4°C',
    delta: '+16.5°C vs Ambient',
    component: 'Chiller Drive Bearing Housing #2',
    severity: 'Warning',
    diagnosis: 'Lubricant starvation in main thrust bearing cage causing rotational frictional heat buildup.',
    actionRequired: 'Flush synthetic polyolester lubricant and verify acoustic emission bearing index.'
  },
  {
    id: 'spot-3',
    x: 22,
    y: 78,
    temperature: '26.1°C',
    delta: 'Normal (±1.2°C)',
    component: 'Harmonic Filter Bank #1',
    severity: 'Optimal',
    diagnosis: 'Capacitor bank operating well within nominal thermal and electrical impedance limits.',
    actionRequired: 'Routine monitoring; next scheduled thermographic pass in 90 days.'
  }
];
