"use client";

import { useEffect } from "react";
import { useStore } from "@/lib/store";
import { X, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  success: CheckCircle,
  error: AlertTriangle,
  info: Info,
};

const styles = {
  success: "bg-success-light border-success text-success",
  error: "bg-error-container border-error text-on-error-container",
  info: "bg-info-light border-info text-info",
};

function Toast({ toast }) {
  const removeToast = useStore((s) => s.removeToast);
  const Icon = icons[toast.type] || icons.info;

  useEffect(() => {
    const timer = setTimeout(() => removeToast(toast.id), 4000);
    return () => clearTimeout(timer);
  }, [toast.id, removeToast]);

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl border shadow-level-2 animate-slide-up min-w-[320px]",
        styles[toast.type] || styles.info
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <p className="text-sm font-medium flex-1">{toast.message}</p>
      <button
        onClick={() => removeToast(toast.id)}
        className="p-0.5 rounded hover:bg-black/5 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export function ToastContainer() {
  const toasts = useStore((s) => s.toasts);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
