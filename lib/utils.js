import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatRelativeDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

export function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function getStatusColor(status) {
  const colors = {
    active: {
      bg: "bg-surface-container-high",
      text: "text-on-surface-variant",
      dot: "bg-on-surface-variant",
    },
    "due-soon": {
      bg: "bg-warning-light",
      text: "text-warning",
      dot: "bg-warning",
    },
    overdue: {
      bg: "bg-error-container",
      text: "text-on-error-container",
      dot: "bg-error",
    },
    "no-show": {
      bg: "bg-error-container",
      text: "text-on-error-container",
      dot: "bg-error",
    },
    "treatment-pending": {
      bg: "bg-warning-light",
      text: "text-warning",
      dot: "bg-warning",
    },
    reactivated: {
      bg: "bg-success-light",
      text: "text-success",
      dot: "bg-success",
    },
  };
  return colors[status] || colors.active;
}

// Avatar background color rotation from Stitch palette
const avatarColors = [
  { bg: "bg-secondary-container", text: "text-on-secondary-container" },
  { bg: "bg-tertiary-fixed", text: "text-on-tertiary-fixed" },
  { bg: "bg-primary-fixed", text: "text-on-primary-fixed" },
  { bg: "bg-error-container", text: "text-on-error-container" },
  { bg: "bg-info-light", text: "text-info" },
  { bg: "bg-success-light", text: "text-success" },
];

export function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return avatarColors[Math.abs(hash) % avatarColors.length];
}
