export interface FacilityMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  subtext: string;
}

export interface AIAgent {
  id: 'asset' | 'ppm' | 'helpdesk' | 'ops';
  name: string;
  role: string;
  tagline: string;
  description: string;
  capabilities: string[];
  sampleQuery: string;
  sampleResponse: {
    title: string;
    metrics?: { label: string; value: string }[];
    summary: string;
    actionTaken: string;
    nextRecommendedStep: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  clientType: string;
  metricHighlight: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  implementation: string;
  result: string[];
}

export interface HelpdeskSimulation {
  prompt: string;
  category: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  detectedLocation: string;
  detectedAsset: string;
  assignedTeam: string;
  slaTarget: string;
  automatedActions: string[];
}

export interface ThermalHotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  temperature: string;
  delta: string;
  component: string;
  severity: 'Critical' | 'Warning' | 'Optimal';
  diagnosis: string;
  actionRequired: string;
}
