"use client";

import { Search, Bell, HelpCircle } from "lucide-react";
import { clinicConfig } from "@/constants/clinic-config";
import { getInitials } from "@/lib/utils";

export function TopBar() {
  const staffMember = clinicConfig.staff[3]; // Office Manager

  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-30 bg-surface/80 backdrop-blur-md border-b border-outline-variant h-16 px-8 flex justify-between items-center">
      {/* Search */}
      <div className="flex-1 mr-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
          <input
            type="text"
            placeholder="Search patients, campaigns, reports..."
            className="w-full h-10 bg-surface-container-low border border-outline-variant rounded-xl pl-10 pr-4 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition-all"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 ml-4">
        <button className="relative p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors">
          <Bell className="w-5 h-5" />
          {/* Notification dot */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
        </button>
        <button className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>

        <div className="h-6 w-px bg-outline-variant mx-1" />

        {/* User Avatar */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-xs font-bold">
            {getInitials(staffMember.name)}
          </div>
          <div className="hidden xl:block">
            <p className="text-sm font-medium text-on-surface leading-tight">
              {staffMember.name}
            </p>
            <p className="text-[11px] text-on-surface-variant leading-tight">
              {staffMember.role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
