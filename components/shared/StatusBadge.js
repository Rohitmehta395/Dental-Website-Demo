import { cn } from "@/lib/utils";

const statusConfig = {
  active: {
    label: "Active",
    className: "bg-surface-container-high text-on-surface-variant",
  },
  "due-soon": {
    label: "Due Soon",
    className: "bg-warning-light text-warning",
  },
  overdue: {
    label: "Overdue",
    className: "bg-error-container text-on-error-container",
  },
  "no-show": {
    label: "No Show",
    className: "bg-error-container text-on-error-container",
  },
  "treatment-pending": {
    label: "Treatment Pending",
    className: "bg-warning-light text-warning",
  },
  reactivated: {
    label: "Reactivated",
    className: "bg-success-light text-success",
  },
};

export function StatusBadge({ status, className }) {
  const config = statusConfig[status] || statusConfig.active;

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
