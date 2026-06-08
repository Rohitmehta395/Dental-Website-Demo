/**
 * Navigation Configuration
 * ========================
 * Centralized navigation definitions for sidebar and public site.
 */

export const dashboardNavigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    name: "Patients",
    href: "/patients",
    icon: "Users",
  },
  {
    name: "Appointments",
    href: "/appointments",
    icon: "Calendar",
  },
  {
    name: "Reactivation Campaigns",
    href: "/campaigns",
    icon: "Target",
  },
  {
    name: "Recall Automation",
    href: "/recall",
    icon: "RefreshCw",
  },
  {
    name: "Messages",
    href: "/messaging",
    icon: "MessageSquare",
  },
  {
    name: "Reports",
    href: "/reports",
    icon: "BarChart3",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "Settings",
  },
];

export const publicNavigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Insurance", href: "/insurance" },
  { name: "Contact", href: "/contact" },
];
