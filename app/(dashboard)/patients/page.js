"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PageTransition } from "@/components/shared/Animations";
import { patients } from "@/constants/mock-data";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { formatDate, formatCurrency, getInitials, getAvatarColor } from "@/lib/utils";
import { Search, Eye, MessageSquare, MoreVertical, Filter, Plus } from "lucide-react";

const filterTabs = [
  { key: "all", label: "All Patients" },
  { key: "overdue", label: "Overdue" },
  { key: "due-soon", label: "Due Soon" },
  { key: "treatment-pending", label: "Treatment Pending" },
  { key: "no-show", label: "No Show" },
  { key: "active", label: "Active" },
];

export default function PatientsPage() {
  return (
    <Suspense fallback={<div className="animate-pulse p-8 text-on-surface-variant">Loading patients...</div>}>
      <PatientsContent />
    </Suspense>
  );
}

function PatientsContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = useMemo(() => {
    let result = patients;
    if (activeFilter !== "all") {
      result = result.filter((p) => p.status === activeFilter);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.firstName.toLowerCase().includes(q) ||
          p.lastName.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q) ||
          p.phone.includes(q)
      );
    }
    return result;
  }, [activeFilter, searchQuery]);

  const totalRevenue = filteredPatients.reduce(
    (sum, p) => sum + p.revenueOpportunity,
    0
  );

  return (
    <PageTransition>
      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-semibold text-primary tracking-tight">Patients</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Manage patient records and recall status.
            {totalRevenue > 0 && (
              <span className="ml-2 font-semibold text-primary">
                Total Revenue Opportunity: {formatCurrency(totalRevenue)}
              </span>
            )}
          </p>
        </div>
        <Link
          href="/patients/new"
          className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add New Patient
        </Link>
      </div>

      {/* Main Card */}
      <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-container-high overflow-hidden">
        {/* Filters Row */}
        <div className="p-5 border-b border-surface-container-high flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-surface">
          {/* Search */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
            <input
              type="text"
              placeholder="Search by name, ID, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky/30 transition-all"
            />
          </div>
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const count = tab.key === "all"
                ? patients.length
                : patients.filter((p) => p.status === tab.key).length;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                    activeFilter === tab.key
                      ? "bg-primary-container text-on-primary border-primary-container"
                      : "bg-surface-container text-on-surface-variant border-outline-variant hover:bg-surface-container-high"
                  }`}
                >
                  {tab.label}
                  <span className="ml-1.5 opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-surface-container-high">
                <th className="p-4 w-12 text-center">
                  <input
                    type="checkbox"
                    className="rounded border-outline-variant text-primary focus:ring-primary"
                  />
                </th>
                <th className="p-4 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
                  Patient
                </th>
                <th className="p-4 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider hidden sm:table-cell">
                  Last Visit
                </th>
                <th className="p-4 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
                  Next Recall
                </th>
                <th className="p-4 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider hidden md:table-cell">
                  Status
                </th>
                <th className="p-4 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider hidden lg:table-cell">
                  Revenue Opp.
                </th>
                <th className="p-4 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {filteredPatients.map((patient) => {
                const initials = getInitials(`${patient.firstName} ${patient.lastName}`);
                const avatarColor = getAvatarColor(`${patient.firstName} ${patient.lastName}`);
                const isOverdue = patient.status === "overdue" || patient.status === "no-show";

                return (
                  <tr
                    key={patient.id}
                    className="hover:bg-surface-container-low transition-colors group"
                  >
                    <td className="p-4 text-center">
                      <input
                        type="checkbox"
                        className="rounded border-outline-variant text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <Link href={`/patients/${patient.id}`} className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${avatarColor.bg} ${avatarColor.text}`}
                        >
                          {initials}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-on-surface hover:text-primary transition-colors">
                            {patient.firstName} {patient.lastName}
                          </div>
                          <div className="text-[11px] text-on-surface-variant">
                            {patient.id}
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant hidden sm:table-cell">
                      {formatDate(patient.lastVisit)}
                    </td>
                    <td className="p-4">
                      <div
                        className={`flex items-center gap-1.5 text-sm ${
                          isOverdue ? "text-error font-medium" : "text-on-surface"
                        }`}
                      >
                        {isOverdue && <AlertTriangleIcon className="w-3.5 h-3.5" />}
                        {formatDate(patient.nextRecall)}
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <StatusBadge status={patient.status} />
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      {patient.revenueOpportunity > 0 ? (
                        <span className="text-sm font-semibold text-primary">
                          {formatCurrency(patient.revenueOpportunity)}
                        </span>
                      ) : (
                        <span className="text-sm text-on-surface-variant">—</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                          href={`/patients/${patient.id}`}
                          className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-surface-container-high flex items-center justify-between text-xs font-semibold text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span>Showing {filteredPatients.length} patients</span>
          </div>
          <div className="flex items-center gap-2">
            <span>1-{filteredPatients.length} of {filteredPatients.length}</span>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function AlertTriangleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" /><path d="M12 17h.01" />
    </svg>
  );
}
