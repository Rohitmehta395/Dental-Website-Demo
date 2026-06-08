"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { clinicConfig } from "@/constants/clinic-config";
import { Stethoscope, Mail, Lock, Shield, HeartPulse } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  };

  return (
    <main className="w-full h-screen flex flex-col md:flex-row">
      {/* Left Side: Branding Panel */}
      <section className="hidden md:flex flex-col w-1/2 bg-brand-navy text-white relative overflow-hidden h-full">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark" />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-sky/5" />
        <div className="absolute bottom-20 -left-10 w-60 h-60 rounded-full bg-brand-sky/5" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-brand-sky/3" />

        <div className="relative z-10 flex flex-col justify-between h-full p-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <Stethoscope className="w-5 h-5 text-brand-sky" />
            </div>
            <span className="text-xl font-bold">{clinicConfig.name}</span>
          </div>

          {/* Main Text */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
              Intelligent Patient
              <br />
              <span className="text-brand-sky">Retention System</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Bring patients back, recover lost revenue, and grow your practice
              with automated follow-ups and smart recall campaigns.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-2xl font-bold text-brand-sky">248</p>
                <p className="text-sm text-white/50">Patients Reactivated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-sky">$42,580</p>
                <p className="text-sm text-white/50">Revenue Recovered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-sky">34%</p>
                <p className="text-sm text-white/50">No-Show Reduction</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div />
        </div>
      </section>

      {/* Right Side: Login Panel */}
      <section className="w-full md:w-1/2 h-full bg-surface-container-lowest flex flex-col items-center justify-center relative overflow-y-auto px-4">
        {/* Mobile Logo */}
        <div className="md:hidden w-full flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-primary">{clinicConfig.name}</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-[420px]">
          <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-brand-border p-8">
            {/* Header */}
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-on-surface tracking-tight">
                Welcome back
              </h2>
              <p className="text-sm text-secondary mt-1">
                Sign in to access your clinic dashboard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                  <input
                    type="email"
                    placeholder="doctor@clinic.com"
                    defaultValue="sarah@brightsmile.dental"
                    className="w-full bg-surface-container-lowest border border-brand-border rounded-lg py-2.5 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-brand-sky/30 focus:border-brand-sky transition-all placeholder:text-outline-variant"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    defaultValue="password123"
                    className="w-full bg-surface-container-lowest border border-brand-border rounded-lg py-2.5 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-brand-sky/30 focus:border-brand-sky transition-all placeholder:text-outline-variant"
                  />
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border-brand-border text-brand-navy focus:ring-brand-navy"
                  />
                  <span className="text-sm text-on-surface-variant">Remember me</span>
                </label>
                <button type="button" className="text-sm font-medium text-brand-sky-dark hover:underline">
                  Forgot password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-semibold text-on-primary bg-brand-navy hover:bg-brand-navy-light focus:ring-2 focus:ring-brand-navy/30 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Sign In"
                )}
              </button>

              {/* Role Selector */}
              <div className="pt-3 border-t border-brand-gray-light mt-4">
                <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                  Select Role
                </label>
                <select className="w-full bg-surface-container-low border border-brand-border rounded-lg py-2 px-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-brand-sky/30 focus:border-brand-sky">
                  <option>{clinicConfig.name} — Dentist</option>
                  <option>{clinicConfig.name} — Office Manager</option>
                  <option>{clinicConfig.name} — Front Desk</option>
                </select>
              </div>
            </form>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-brand-sky" />
              <span className="text-xs text-secondary">Secure clinic access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HeartPulse className="w-4 h-4 text-brand-sky" />
              <span className="text-xs text-secondary">HIPAA-ready workflow</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-[11px] text-outline">
              © 2026 {clinicConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
