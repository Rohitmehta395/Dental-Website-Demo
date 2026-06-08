"use client";

import { clinicConfig } from "@/constants/clinic-config";
import { Stethoscope } from "lucide-react";

export function Logo({ variant = "default", className = "" }) {
  const config = clinicConfig;

  if (variant === "icon") {
    return (
      <div className={`w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center ${className}`}>
        <Stethoscope className="w-4 h-4 text-on-primary" />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center flex-shrink-0">
        <Stethoscope className="w-5 h-5 text-on-primary" />
      </div>
      <div className="min-w-0">
        <h1 className="text-lg font-bold text-primary leading-tight truncate">
          {config.name}
        </h1>
        {variant === "dashboard" && (
          <p className="text-[11px] font-medium text-on-surface-variant leading-tight">
            {config.dashboard.productName}
          </p>
        )}
      </div>
    </div>
  );
}
