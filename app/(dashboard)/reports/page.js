"use client";

import { PageTransition } from "@/components/shared/Animations";
import { formatCurrency } from "@/lib/utils";
import {
  Download,
  ChevronDown,
  Wallet,
  Users,
  CalendarCheck,
  Megaphone
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock Data tailored to the screenshot
const revenueData = [
  { week: "W1", value: 15000 },
  { week: "W2", value: 22000 },
  { week: "W3", value: 32000 },
  { week: "W4", value: 42580 },
];

const responseRateData = [
  { day: "Mon", current: 20, previous: 15 },
  { day: "Tue", current: 45, previous: 30 },
  { day: "Wed", current: 55, previous: 35 },
  { day: "Thu", current: 40, previous: 25 },
  { day: "Fri", current: 50, previous: 45 },
  { day: "Sat", current: 85, previous: 65 },
];

const campaignPerformance = [
  { name: "Q3 Hygiene Recall", sent: "1,240", rate: "24.5%", rateGood: true, rev: "$18,450" },
  { name: "Post-Op Follow-up", sent: "450", rate: "68.2%", rateGood: true, rev: "$4,200" },
  { name: "Inactive Patient Win-back", sent: "890", rate: "12.1%", rateGood: false, rev: "$12,800" },
];

const chartTooltipStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #E2E8F0",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(15,23,42,0.1)",
  fontSize: "13px",
  color: "#131B2E",
};

export default function ReportsPage() {
  return (
    <PageTransition>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-semibold text-primary tracking-tight">Reports & Analytics</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Overview of patient recall performance and clinic revenue metrics.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-surface-container shadow-sm text-on-surface-variant rounded-lg text-sm font-semibold hover:bg-surface-container-lowest transition-colors">
            This Month <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-surface-container shadow-sm text-primary rounded-lg text-sm font-semibold hover:bg-surface-container-lowest transition-colors">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>

      {/* Top KPI Section */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-10">
        
        {/* Large Dark Revenue Card */}
        <div className="xl:col-span-8 bg-[#1B2135] rounded-xl overflow-hidden relative shadow-md flex flex-col justify-between">
          <div className="p-8 pb-0 relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-2">Revenue Recovered</p>
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-white">$42,580</span>
                  <span className="bg-[#1D4A39] text-[#4ADE80] px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    +8.4%
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="h-[200px] w-full mt-4 -mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revDarkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#FFFFFF", opacity: 0.5 }} dy={-15} />
                <Tooltip contentStyle={{...chartTooltipStyle, backgroundColor: "#131B2E", color: "#FFF", border: "1px solid rgba(255,255,255,0.1)"}} itemStyle={{ color: "#FFF" }} />
                <Area type="monotone" dataKey="value" stroke="#FFFFFF" strokeWidth={3} fill="url(#revDarkGrad)" dot={false} activeDot={{ r: 6, fill: "#FFF" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Stacked Cards */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-white border border-surface-container rounded-xl p-6 shadow-sm flex flex-col justify-center flex-1">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Patients Reactivated</p>
              <Users className="w-5 h-5 text-outline-variant" />
            </div>
            <div className="flex items-end gap-3 mb-1">
              <span className="text-4xl font-bold text-primary">248</span>
              <span className="bg-success-light text-success px-2 py-0.5 rounded-full text-xs font-bold mb-1.5 flex items-center">
                &uarr; 12%
              </span>
            </div>
            <p className="text-xs text-on-surface-variant font-medium">vs. 221 last month</p>
          </div>

          <div className="bg-white border border-surface-container rounded-xl p-6 shadow-sm flex flex-col justify-center flex-1">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Appointments Scheduled</p>
              <CalendarCheck className="w-5 h-5 text-outline-variant" />
            </div>
            <div className="flex items-end gap-3 mb-1">
              <span className="text-4xl font-bold text-primary">184</span>
              <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full text-xs font-bold mb-1.5 flex items-center">
                &minus; Stable
              </span>
            </div>
            <p className="text-xs text-on-surface-variant font-medium">via Recall Campaigns</p>
          </div>
        </div>
      </div>

      {/* Campaign Performance Section */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xl font-bold text-primary">Campaign Performance</h3>
          <button className="text-xs font-bold text-primary hover:underline tracking-wide uppercase">View All Campaigns</button>
        </div>
        <div className="bg-white border border-surface-container rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest border-b border-surface-container">
                  <th className="py-4 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Campaign Name</th>
                  <th className="py-4 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Messages Sent</th>
                  <th className="py-4 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Response Rate</th>
                  <th className="py-4 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Revenue Generated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {campaignPerformance.map((campaign, i) => (
                  <tr key={i} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-primary">{campaign.name}</td>
                    <td className="py-4 px-6 text-sm text-on-surface-variant">{campaign.sent}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${campaign.rateGood ? 'bg-[#E6F6ED] text-[#1D7A46]' : 'bg-surface-container-high text-on-surface-variant'}`}>
                        {campaign.rate}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-primary">{campaign.rev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Insights Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Left: Patient Insights Chart */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-4">Patient Insights</h3>
          <div className="bg-white border border-surface-container rounded-xl p-6 shadow-sm h-[320px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Recall Response Rate</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#131B2E]" />
                  <span className="text-[10px] font-bold text-primary uppercase">Current</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-outline-variant" />
                  <span className="text-[10px] font-bold text-primary uppercase">Previous</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={responseRateData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#76777D" }} dy={10} />
                  <Tooltip contentStyle={chartTooltipStyle} />
                  {/* Previous Line (Dashed area bottom) */}
                  <Area type="monotone" dataKey="previous" stroke="#C5C7CD" strokeWidth={3} strokeDasharray="6 6" fill="transparent" dot={false} activeDot={false} />
                  {/* Current Line (Solid top) */}
                  <Area type="monotone" dataKey="current" stroke="#131B2E" strokeWidth={4} fill="#F8FAFC" fillOpacity={1} dot={false} activeDot={{ r: 6, fill: "#131B2E" }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right: Segments & Activity */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Overdue Segments</h3>
            <div className="bg-white border border-surface-container rounded-xl p-6 shadow-sm">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-on-surface-variant">6+ Months Overdue</span>
                    <span className="text-base font-bold text-primary">142</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-[#131B2E] rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-on-surface-variant">12+ Months Overdue</span>
                    <span className="text-base font-bold text-primary">84</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-[#131B2E] rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-on-surface-variant">24+ Months Overdue</span>
                    <span className="text-base font-bold text-primary">29</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-[#131B2E] rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Recent Activity</h3>
            <div className="bg-white border border-surface-container rounded-xl p-5 shadow-sm">
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
                    <Download className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Monthly Revenue Exported</h4>
                    <p className="text-[10px] font-medium text-on-surface-variant uppercase tracking-wide mt-0.5">2 hours ago &bull; Dr. Smith</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
                    <Megaphone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Q3 Recall Launched</h4>
                    <p className="text-[10px] font-medium text-on-surface-variant uppercase tracking-wide mt-0.5">Yesterday &bull; Admin Sarah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
