"use client";


import { PageTransition } from "@/components/shared/Animations";
import { campaigns } from "@/constants/mock-data";
import { formatCurrency } from "@/lib/utils";
import {
  Target,
  Play,
  Pause,
  Plus,
  Users,
  DollarSign,
  MailOpen,
  MessageSquare,
  TrendingUp,
  Rocket,
  CalendarCheck,
} from "lucide-react";

export default function CampaignsPage() {
  return (
    <PageTransition>
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-semibold text-primary tracking-tight">
            Reactivation Campaigns
          </h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Launch targeted campaigns to bring patients back and recover revenue.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary-container text-on-primary rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          New Campaign
        </button>
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-container-high overflow-hidden card-hover"
          >
            {/* Campaign Header */}
            <div className="p-5 border-b border-surface-container-high">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-fixed text-primary">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary">{campaign.name}</h3>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Started {new Date(campaign.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </div>
                </div>
                {campaign.status === "active" ? (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-success bg-success-light px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                    Active
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
                    Paused
                  </span>
                )}
              </div>
            </div>

            {/* Target Stats */}
            <div className="p-5 border-b border-surface-container-high bg-surface-container-low/50">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Users className="w-3.5 h-3.5 text-on-surface-variant" />
                    <span className="text-[11px] font-medium text-on-surface-variant">Target</span>
                  </div>
                  <span className="text-xl font-bold text-primary">{campaign.targetCount}</span>
                  <p className="text-[10px] text-on-surface-variant">patients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-on-surface-variant" />
                    <span className="text-[11px] font-medium text-on-surface-variant">Potential</span>
                  </div>
                  <span className="text-xl font-bold text-primary">{formatCurrency(campaign.potentialRevenue)}</span>
                  <p className="text-[10px] text-on-surface-variant">revenue</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <CalendarCheck className="w-3.5 h-3.5 text-on-surface-variant" />
                    <span className="text-[11px] font-medium text-on-surface-variant">Booked</span>
                  </div>
                  <span className="text-xl font-bold text-success">{campaign.bookedCount}</span>
                  <p className="text-[10px] text-on-surface-variant">appointments</p>
                </div>
              </div>
            </div>

            {/* Expected Results */}
            {campaign.expectedReactivations && (
              <div className="p-5 border-b border-surface-container-high">
                <h4 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3">
                  Expected Outcomes
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-surface-container rounded-lg p-3 text-center">
                    <span className="text-lg font-bold text-primary">{campaign.expectedReactivations}</span>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">Reactivations</p>
                  </div>
                  <div className="bg-surface-container rounded-lg p-3 text-center">
                    <span className="text-lg font-bold text-primary">{campaign.expectedAppointments}</span>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">Appointments</p>
                  </div>
                  <div className="bg-info-light rounded-lg p-3 text-center">
                    <span className="text-lg font-bold text-info">{formatCurrency(campaign.expectedRevenue)}</span>
                    <p className="text-[10px] text-info/70 mt-0.5">Recovery</p>
                  </div>
                </div>
              </div>
            )}

            {/* Performance Metrics */}
            <div className="p-5">
              <h4 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3">
                Campaign Metrics
              </h4>
              <div className="space-y-3">
                <MetricBar label="Sent" value={campaign.sentCount} max={campaign.targetCount} color="bg-secondary-container" />
                <MetricBar label="Open Rate" value={campaign.openRate} max={100} suffix="%" color="bg-primary-fixed" />
                <MetricBar label="Response Rate" value={campaign.responseRate} max={100} suffix="%" color="bg-brand-sky" />
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-4 border-t border-surface-container-high">
                {campaign.status === "active" ? (
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-surface-container border border-outline-variant text-on-surface rounded-lg text-sm font-medium hover:bg-surface-container-high transition-colors">
                    <Pause className="w-4 h-4" />
                    Pause Campaign
                  </button>
                ) : (
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-container text-on-primary rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                    <Rocket className="w-4 h-4" />
                    Launch Campaign
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}

function MetricBar({ label, value, max, suffix = "", color }) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-on-surface-variant">{label}</span>
        <span className="text-xs font-semibold text-primary">{value}{suffix}</span>
      </div>
      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
