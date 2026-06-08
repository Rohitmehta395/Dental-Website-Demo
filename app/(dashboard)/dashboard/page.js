"use client";

import { KPICard } from "@/components/dashboard/KPICard";
import { dashboardKPIs, recentActivity, patients, reportsData } from "@/constants/mock-data";
import { clinicConfig } from "@/constants/clinic-config";
import { formatCurrency } from "@/lib/utils";
import { PageTransition, StaggerContainer, StaggerItem, FadeInView } from "@/components/shared/Animations";
import {
  DollarSign,
  UserCheck,
  AlertTriangle,
  CalendarCheck,
  TrendingDown,
  Wallet,
  Clock,
  History,
  CheckSquare,
  Send,
  CalendarPlus,
  UserX,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const activityIcons = {
  reminder_sent: Send,
  appointment_booked: CalendarPlus,
  patient_reactivated: RefreshCw,
  treatment_accepted: CheckSquare,
  no_show: UserX,
  sync_completed: RefreshCw,
};

const activityColors = {
  reminder_sent: "bg-secondary-container",
  appointment_booked: "bg-primary-fixed",
  patient_reactivated: "bg-success-light",
  treatment_accepted: "bg-info-light",
  no_show: "bg-error-container",
  sync_completed: "bg-surface-container-high",
};

// Donut chart data
const appointmentStatusData = [
  { name: "Confirmed", value: 60, color: "#131B2E" },
  { name: "Pending", value: 25, color: "#D3E5F1" },
  { name: "Cancelled", value: 10, color: "#C6C6CD" },
  { name: "No Show", value: 5, color: "#FFDAD6" },
];

export default function DashboardPage() {
  const kpis = dashboardKPIs;

  // Get overdue + action-needed patients
  const actionPatients = patients
    .filter((p) => ["overdue", "no-show", "treatment-pending"].includes(p.status))
    .slice(0, 4);

  return (
    <PageTransition>
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-primary tracking-tight">
          {clinicConfig.dashboard.productName}
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">
          {clinicConfig.dashboard.welcomeMessage} — Real-time metrics and patient insights.
        </p>
      </div>

      {/* KPI Grid — Revenue-First */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8" staggerDelay={0.07}>
        <StaggerItem>
          <KPICard
            title="Revenue Recovered"
            value={kpis.revenueRecovered.value}
            icon="DollarSign"
            format="currency"
            trend={kpis.revenueRecovered.trend}
            trendLabel={kpis.revenueRecovered.period}
          />
        </StaggerItem>
        <StaggerItem>
          <KPICard
            title="Patients Reactivated"
            value={kpis.patientsReactivated.value}
            icon="UserCheck"
            trend={kpis.patientsReactivated.trend}
            trendLabel={kpis.patientsReactivated.period}
          />
        </StaggerItem>
        <StaggerItem>
          <KPICard
            title="Overdue Patients"
            value={kpis.overduePatients.value}
            icon="AlertTriangle"
            urgent
            href="/patients?filter=overdue"
          />
        </StaggerItem>
        <StaggerItem>
          <KPICard
            title="Appointments Recovered"
            value={kpis.appointmentsRecovered.value}
            icon="CalendarCheck"
            trend={kpis.appointmentsRecovered.trend}
            trendLabel={kpis.appointmentsRecovered.period}
          />
        </StaggerItem>
      </StaggerContainer>

      {/* Secondary KPIs — Revenue Context */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8" staggerDelay={0.07} delayStart={0.3}>
        <StaggerItem>
          <KPICard
            title="Potential Revenue Lost"
            value={kpis.potentialRevenueLost.value}
            icon="TrendingDown"
            format="currency"
            trend={kpis.potentialRevenueLost.trend}
            trendLabel={kpis.potentialRevenueLost.period}
          />
        </StaggerItem>
        <StaggerItem>
          <KPICard
            title="Recoverable Revenue"
            value={kpis.recoverableRevenue.value}
            icon="Wallet"
            format="currency"
            trendLabel={kpis.recoverableRevenue.label}
            href="/campaigns"
          />
        </StaggerItem>
        <StaggerItem>
          <KPICard
            title="No-Show Reduction"
            value={kpis.noShowReduction.value}
            icon="UserX"
            format="percent"
            trend={kpis.noShowReduction.trend}
            trendLabel={kpis.noShowReduction.period}
          />
        </StaggerItem>
        <StaggerItem>
          <KPICard
            title="Treatment Follow-Up Rate"
            value={kpis.treatmentFollowUpRate.value}
            icon="ClipboardCheck"
            format="percent"
            trend={kpis.treatmentFollowUpRate.trend}
            trendLabel={kpis.treatmentFollowUpRate.period}
          />
        </StaggerItem>
      </StaggerContainer>

      {/* Charts Row */}
      <FadeInView className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8" delay={0.2}>
        {/* Revenue Recovery Trend — spans 2 cols */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-container-high p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-primary">Revenue Recovery Trend</h3>
            <span className="text-xs font-medium text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
              Last 6 Months
            </span>
          </div>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={reportsData.revenueRecovered}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#131B2E" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#131B2E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E6E8EA" vertical={false} />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#76777D" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#76777D" }}
                  tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(15,23,42,0.1)",
                    fontSize: "13px",
                  }}
                  formatter={(value) => [formatCurrency(value), "Revenue"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#131B2E"
                  strokeWidth={2.5}
                  fill="url(#revenueGrad)"
                  dot={{ r: 4, fill: "#FFFFFF", stroke: "#131B2E", strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: "#131B2E" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Appointment Status Donut */}
        <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-container-high p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-primary w-full mb-4">Appointment Status</h3>
          <div className="relative w-44 h-44 my-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={appointmentStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={72}
                  paddingAngle={3}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {appointmentStatusData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold text-primary">60%</span>
              <span className="text-[11px] font-medium text-on-surface-variant">Confirmed</span>
            </div>
          </div>
          {/* Legend */}
          <div className="w-full flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3">
            {appointmentStatusData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[11px] font-medium text-on-surface-variant">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeInView>

      {/* Bottom Panels */}
      <FadeInView className="grid grid-cols-1 lg:grid-cols-2 gap-5" delay={0.1}>
        {/* Today's Action List */}
        <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-container-high overflow-hidden">
          <div className="p-5 border-b border-surface-container-high flex justify-between items-center">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-secondary" />
              Today&apos;s Actions
            </h3>
            <Link
              href="/patients"
              className="text-xs font-semibold text-secondary hover:text-primary transition-colors"
            >
              View All
            </Link>
          </div>
          <ul className="divide-y divide-surface-container-high">
            {actionPatients.map((patient) => {
              const initials = `${patient.firstName[0]}${patient.lastName[0]}`;
              const isUrgent = patient.status === "overdue" || patient.status === "no-show";

              return (
                <li
                  key={patient.id}
                  className="p-4 hover:bg-surface-container-low transition-colors flex items-center justify-between gap-4 group"
                >
                  <div className="flex gap-3 items-start min-w-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        isUrgent
                          ? "bg-error-container text-on-error-container"
                          : "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-primary truncate">
                        {patient.firstName} {patient.lastName}
                      </h4>
                      <p
                        className={`text-xs mt-0.5 ${
                          isUrgent ? "text-error font-medium" : "text-secondary"
                        }`}
                      >
                        {patient.treatmentStatus || "Recall Cleaning"}
                      </p>
                      {patient.revenueOpportunity > 0 && (
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          Revenue: <span className="font-semibold text-primary">{formatCurrency(patient.revenueOpportunity)}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/patients/${patient.id}`}
                    className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  >
                    Contact
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-container-high overflow-hidden">
          <div className="p-5 border-b border-surface-container-high">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <History className="w-5 h-5 text-secondary" />
              Recent Activity
            </h3>
          </div>
          <div className="p-5">
            <div className="relative border-l-2 border-surface-container-high ml-3 space-y-5 pb-2">
              {recentActivity.map((item) => {
                const Icon = activityIcons[item.type] || RefreshCw;
                const dotColor = activityColors[item.type] || "bg-surface-container-high";

                return (
                  <div key={item.id} className="relative pl-7">
                    <div
                      className={`absolute -left-[9px] top-0.5 w-4 h-4 rounded-full border-2 border-surface-container-lowest flex items-center justify-center ${dotColor}`}
                    >
                      <Icon className="w-2 h-2" />
                    </div>
                    <p className="text-sm text-on-surface">
                      {item.type === "reminder_sent" && (
                        <>Reminder sent to <span className="font-semibold text-primary">{item.patient}</span></>
                      )}
                      {item.type === "appointment_booked" && (
                        <>New appointment: <span className="font-semibold text-primary">{item.patient}</span></>
                      )}
                      {item.type === "patient_reactivated" && (
                        <>Patient reactivated: <span className="font-semibold text-primary">{item.patient}</span></>
                      )}
                      {item.type === "treatment_accepted" && (
                        <>Treatment accepted: <span className="font-semibold text-primary">{item.patient}</span> ({formatCurrency(item.value)})</>
                      )}
                      {item.type === "no_show" && (
                        <>No-show detected: <span className="font-semibold text-error">{item.patient}</span></>
                      )}
                      {item.type === "sync_completed" && <>Daily sync completed</>}
                    </p>
                    <span className="text-[11px] text-on-surface-variant">
                      {item.time} {item.method && `via ${item.method}`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </FadeInView>
    </PageTransition>
  );
}
