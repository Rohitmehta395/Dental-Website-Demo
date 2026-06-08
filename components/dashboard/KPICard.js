"use client";

import { cn, formatCurrency, formatNumber } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

export function KPICard({
  title,
  value,
  icon,
  trend,
  trendLabel,
  format = "number",
  urgent = false,
  href,
  className,
}) {
  const Icon = LucideIcons[icon] || LucideIcons.Activity;

  const formattedValue =
    format === "currency"
      ? formatCurrency(value)
      : format === "percent"
        ? `${value}%`
        : formatNumber(value);

  const isPositiveTrend = trend && trend.startsWith("+");

  const content = (
    <div
      className={cn(
        "bg-surface-container-lowest rounded-xl shadow-level-1 border p-6 flex flex-col justify-between card-hover relative overflow-hidden",
        urgent ? "border-error-container" : "border-surface-container-high",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Urgent indicator stripe */}
      {urgent && (
        <div className="absolute top-0 left-0 w-1 h-full bg-error" />
      )}

      <div className={cn("flex justify-between items-start mb-4", urgent && "pl-1")}>
        <div>
          <p className="text-sm font-medium text-on-surface-variant mb-1 tracking-wide">
            {title}
          </p>
          <h3
            className={cn(
              "text-3xl font-semibold tracking-tight",
              urgent ? "text-error" : "text-primary"
            )}
          >
            {formattedValue}
          </h3>
        </div>
        <div
          className={cn(
            "p-2.5 rounded-lg",
            urgent
              ? "bg-error-container text-on-error-container"
              : "bg-secondary-container text-on-secondary-container"
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {(trend || trendLabel) && (
        <div className={cn("flex items-center gap-1.5", urgent ? "pl-1" : "")}>
          {trend && (
            <>
              {isPositiveTrend ? (
                <LucideIcons.TrendingUp className="w-3.5 h-3.5 text-success" />
              ) : (
                <LucideIcons.TrendingDown className="w-3.5 h-3.5 text-error" />
              )}
              <span
                className={cn(
                  "text-xs font-semibold",
                  isPositiveTrend ? "text-success" : "text-error"
                )}
              >
                {trend}
              </span>
            </>
          )}
          {trendLabel && (
            <span className="text-xs text-on-surface-variant">
              {trendLabel}
            </span>
          )}
          {urgent && !trend && (
            <span className="text-xs font-bold text-error">Action Required</span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
