"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { dashboardNavigation } from "@/constants/navigation";
import * as LucideIcons from "lucide-react";
import { UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <nav className={cn(
      "h-screen w-64 fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-6 px-4 z-40 transition-transform duration-300",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-8 px-3"
      >
        <Logo variant="dashboard" />
      </motion.div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-1 flex-grow">
        {dashboardNavigation.map((item, index) => {
          const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.1 + index * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 relative",
                  isActive
                    ? "text-primary bg-secondary-container font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute right-0 top-1 bottom-1 w-[3px] bg-primary rounded-l-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className={cn("w-5 h-5 flex-shrink-0", isActive ? "text-primary" : "")} />
                {item.name}
              </Link>
            </motion.li>
          );
        })}
      </ul>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
        className="mt-auto pt-6"
      >
        <Link
          href="/patients/new"
          className="w-full bg-primary-container text-on-primary py-2.5 px-4 rounded-lg text-sm font-medium shadow-sm hover:opacity-90 transition-all hover:shadow-md flex items-center justify-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          Add New Patient
        </Link>
      </motion.div>
    </nav>
  );
}
