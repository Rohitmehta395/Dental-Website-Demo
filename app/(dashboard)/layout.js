"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";
import { ToastContainer } from "@/components/shared/Toast";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopBar />
      <main className="ml-64 mt-16 p-8">
        {children}
      </main>
      <ToastContainer />
    </div>
  );
}
