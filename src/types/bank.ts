export type DeltaTrend = 'up' | 'down';

export interface Kpi {
  label: string;
  value: string;
  delta: string;
  trend: DeltaTrend;
}

export interface RevenuePoint {
  month: string;
  value: number;
}

export interface Customer {
  id: string;
  name: string;
  segment: 'Retail' | 'SME' | 'Corporate' | 'Private';
  riskScore: number;
  status: 'Active' | 'Review' | 'Dormant';
  branch: string;
}

export interface Transaction {
  id: string;
  channel: 'ATM' | 'Mobile' | 'Web' | 'Branch';
  amount: number;
  status: 'Settled' | 'Pending' | 'Flagged';
  location: string;
  accountRef: string;
}

export interface LoanCase {
  id: string;
  applicant: string;
  product: 'Mortgage' | 'Vehicle' | 'Business' | 'Personal';
  amount: number;
  stage: 'Underwriting' | 'Approved' | 'Disbursed' | 'Rejected';
  ratio: string;
}

export interface Branch {
  id: string;
  name: string;
  city: string;
  uptime: string;
  incidents: number;
  queueTime: string;
}