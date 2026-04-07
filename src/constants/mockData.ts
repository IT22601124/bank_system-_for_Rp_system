import type { Branch, Customer, Kpi, LoanCase, RevenuePoint, Transaction } from '../types/bank';

export const kpis: Kpi[] = [
  { label: 'Assets Under Management', value: '$9.42B', delta: '+8.1% YoY', trend: 'up' },
  { label: 'Daily Transaction Volume', value: '1.28M', delta: '+2.6% Today', trend: 'up' },
  { label: 'Fraud Prevention Success', value: '99.18%', delta: '+0.7 pts', trend: 'up' },
  { label: 'Operating Cost Ratio', value: '41.2%', delta: '-1.9 pts', trend: 'down' },
];

export const revenueSeries: RevenuePoint[] = [
  { month: 'Jan', value: 58 },
  { month: 'Feb', value: 62 },
  { month: 'Mar', value: 65 },
  { month: 'Apr', value: 69 },
  { month: 'May', value: 73 },
  { month: 'Jun', value: 70 },
  { month: 'Jul', value: 77 },
  { month: 'Aug', value: 83 },
  { month: 'Sep', value: 86 },
  { month: 'Oct', value: 90 },
  { month: 'Nov', value: 95 },
  { month: 'Dec', value: 99 },
];

export const customers: Customer[] = [
  { id: 'C-10932', name: 'Ariya Silva', segment: 'Private', riskScore: 11, status: 'Active', branch: 'Colombo Central' },
  { id: 'C-20815', name: 'Northline Textiles', segment: 'SME', riskScore: 37, status: 'Review', branch: 'Kandy Trade' },
  { id: 'C-67104', name: 'J. Fernando', segment: 'Retail', riskScore: 22, status: 'Active', branch: 'Galle Coast' },
  { id: 'C-90344', name: 'Velocity Freight Ltd', segment: 'Corporate', riskScore: 45, status: 'Review', branch: 'Colombo Corporate' },
  { id: 'C-35018', name: 'M. Perera', segment: 'Retail', riskScore: 8, status: 'Dormant', branch: 'Kurunegala Main' },
];

export const transactions: Transaction[] = [
  { id: 'TX-8810', channel: 'Mobile', amount: 42500, status: 'Settled', location: 'Colombo', accountRef: 'AC-993381' },
  { id: 'TX-8814', channel: 'Web', amount: 180000, status: 'Pending', location: 'Kandy', accountRef: 'AC-140228' },
  { id: 'TX-8829', channel: 'ATM', amount: 15000, status: 'Settled', location: 'Galle', accountRef: 'AC-508422' },
  { id: 'TX-8837', channel: 'Branch', amount: 1100000, status: 'Flagged', location: 'Colombo', accountRef: 'AC-019225' },
  { id: 'TX-8844', channel: 'Mobile', amount: 78200, status: 'Settled', location: 'Jaffna', accountRef: 'AC-779100' },
];

export const loanCases: LoanCase[] = [
  { id: 'LN-1102', applicant: 'Nexus Hospitality', product: 'Business', amount: 3200000, stage: 'Underwriting', ratio: '62%' },
  { id: 'LN-1110', applicant: 'P. Gunaratne', product: 'Mortgage', amount: 19000000, stage: 'Approved', ratio: '74%' },
  { id: 'LN-1132', applicant: 'S. Daluwatte', product: 'Vehicle', amount: 6800000, stage: 'Disbursed', ratio: '57%' },
  { id: 'LN-1140', applicant: 'R. Illangasinghe', product: 'Personal', amount: 900000, stage: 'Rejected', ratio: '89%' },
  { id: 'LN-1151', applicant: 'Mantis Labs', product: 'Business', amount: 4800000, stage: 'Underwriting', ratio: '66%' },
];

export const branches: Branch[] = [
  { id: 'BR-01', name: 'Colombo Central', city: 'Colombo', uptime: '99.97%', incidents: 1, queueTime: '03m 42s' },
  { id: 'BR-02', name: 'Kandy Trade', city: 'Kandy', uptime: '99.80%', incidents: 2, queueTime: '05m 11s' },
  { id: 'BR-03', name: 'Galle Coast', city: 'Galle', uptime: '99.91%', incidents: 1, queueTime: '04m 05s' },
  { id: 'BR-04', name: 'Jaffna North', city: 'Jaffna', uptime: '99.75%', incidents: 3, queueTime: '06m 30s' },
  { id: 'BR-05', name: 'Kurunegala Main', city: 'Kurunegala', uptime: '99.85%', incidents: 2, queueTime: '04m 50s' },
];