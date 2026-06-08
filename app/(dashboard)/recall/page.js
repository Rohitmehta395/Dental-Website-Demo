"use client";

import { PageTransition } from "@/components/shared/Animations";
import {
  MoreVertical,
  Play,
  Clock,
  MessageSquare,
  Mail,
  Plus,
  Settings2,
  ChevronDown,
  X,
  AlertCircle,
  BarChart3,
  Send,
  CalendarCheck,
  Wallet,
  ArrowRight,
  Pencil
} from "lucide-react";

export default function RecallAutomationPage() {
  return (
    <PageTransition>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 pb-12">
        
        {/* LEFT COLUMN: Workflow Builder */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-surface-container shadow-sm overflow-hidden flex flex-col h-full">
            
            {/* Header */}
            <div className="p-6 border-b border-surface-container flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-primary tracking-tight">Standard 6-Month Hygiene Recall</h2>
                <p className="text-sm text-on-surface-variant mt-1">Automated sequence for routine adult prophylaxis.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-surface-container">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-primary">Active</span>
                </div>
                <button className="p-1.5 text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Builder Area */}
            <div className="flex-1 p-8 bg-surface-bright flex flex-col items-center">
              
              {/* NODE 1: Trigger */}
              <div className="w-full max-w-lg bg-white rounded-xl border border-surface-container shadow-sm overflow-hidden">
                <div className="p-4 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-sky/10 flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 text-brand-sky-dark fill-brand-sky-dark" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-0.5">Trigger</p>
                    <p className="text-base font-bold text-primary">Visit Completed</p>
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-surface-container bg-surface-container-lowest flex justify-between items-center group cursor-pointer hover:bg-surface-container-low transition-colors">
                  <p className="text-sm text-on-surface-variant">Procedure: Prophylaxis (Adult)</p>
                  <Pencil className="w-3.5 h-3.5 text-outline-variant group-hover:text-primary transition-colors" />
                </div>
              </div>

              {/* Connector */}
              <div className="w-px h-6 bg-surface-container" />

              {/* NODE 2: Delay */}
              <div className="w-full max-w-lg bg-white rounded-xl border border-surface-container shadow-sm overflow-hidden">
                <div className="p-4 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-on-surface-variant" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-0.5">Delay</p>
                    <p className="text-base font-bold text-primary">Wait 6 Months</p>
                  </div>
                  <button className="self-start mt-2">
                    <Pencil className="w-3.5 h-3.5 text-outline-variant hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>

              {/* Connector with Plus */}
              <div className="flex flex-col items-center">
                <div className="w-px h-3 bg-surface-container" />
                <button className="w-6 h-6 rounded-full border border-surface-container bg-white flex items-center justify-center text-outline-variant hover:border-primary hover:text-primary hover:shadow-sm transition-all z-10">
                  <Plus className="w-3 h-3" />
                </button>
                <div className="w-px h-3 bg-surface-container" />
              </div>

              {/* NODE 3: Action (SMS) - Highlighted */}
              <div className="w-full max-w-lg bg-white rounded-xl border-2 border-primary shadow-sm overflow-hidden">
                <div className="p-4 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-on-surface-variant fill-on-surface-variant" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-0.5">Action</p>
                    <p className="text-base font-bold text-primary mb-3">Send SMS Reminder</p>
                    <div className="bg-surface-container-low p-3 rounded-lg border border-surface-container">
                      <p className="text-sm text-on-surface-variant italic leading-relaxed">
                        "Hi {"{PatientName}"}, it's time for your 6-month checkup at RecallDent. Reply Y"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-surface-container bg-surface-container-lowest flex justify-between items-center group cursor-pointer hover:bg-surface-container-low transition-colors">
                  <p className="text-sm text-on-surface-variant">Template: Friendly Casual</p>
                  <Pencil className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>

              {/* Connector */}
              <div className="w-px h-6 bg-surface-container" />

              {/* NODE 4: Delay */}
              <div className="w-full max-w-lg bg-white rounded-xl border border-surface-container shadow-sm overflow-hidden">
                <div className="p-4 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-on-surface-variant" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-0.5">Delay</p>
                    <p className="text-base font-bold text-primary">Wait 7 Days</p>
                  </div>
                  <button className="self-start mt-2">
                    <Pencil className="w-3.5 h-3.5 text-outline-variant hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>

              {/* Connector */}
              <div className="w-px h-6 bg-surface-container" />

              {/* NODE 5: Action (Email) */}
              <div className="w-full max-w-lg bg-white rounded-xl border border-surface-container shadow-sm overflow-hidden">
                <div className="p-4 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-on-surface-variant fill-on-surface-variant" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-0.5">Action</p>
                    <p className="text-base font-bold text-primary">Send Email Follow-Up</p>
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-surface-container bg-surface-container-lowest flex justify-between items-center group cursor-pointer hover:bg-surface-container-low transition-colors">
                  <p className="text-sm text-on-surface-variant">Condition: If not booked</p>
                  <Pencil className="w-3.5 h-3.5 text-outline-variant group-hover:text-primary transition-colors" />
                </div>
              </div>

              {/* Connector */}
              <div className="w-px h-6 bg-surface-container" />

              {/* Big Plus */}
              <button className="w-12 h-12 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center text-outline-variant hover:text-primary hover:border-primary transition-colors bg-white hover:bg-surface-container-lowest">
                <Plus className="w-5 h-5" />
              </button>

            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          
          {/* Settings Panel */}
          <div className="bg-white rounded-2xl border border-surface-container shadow-sm overflow-hidden">
            <div className="p-6 border-b border-surface-container flex justify-between items-center">
              <h3 className="text-lg font-bold text-primary">Workflow Settings</h3>
              <Settings2 className="w-5 h-5 text-outline-variant" />
            </div>
            
            <div className="p-6">
              {/* Status Box */}
              <div className="bg-surface-container-low rounded-xl p-4 flex justify-between items-center mb-8">
                <div>
                  <h4 className="text-sm font-bold text-primary">Workflow Status</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Currently running and monitoring.</p>
                </div>
                {/* Toggle switch */}
                <button className="w-11 h-6 rounded-full bg-primary flex items-center px-0.5 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-white translate-x-5 transition-transform" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Primary Trigger */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">Primary Trigger</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-surface-container rounded-xl pl-4 pr-10 py-3 text-sm text-primary font-medium focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky">
                      <option>Visit Completed</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
                  </div>
                </div>

                {/* Target Audience */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">Target Audience</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <div className="inline-flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant border border-surface-container">
                      Adult Patients
                      <button className="hover:text-primary"><X className="w-3 h-3" /></button>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant border border-surface-container">
                      PPO Insurance
                      <button className="hover:text-primary"><X className="w-3 h-3" /></button>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-outline-variant hover:text-primary transition-colors border border-dashed border-outline-variant rounded-full px-4 py-1.5">
                    <Plus className="w-3 h-3" />
                    Add Rule
                  </button>
                </div>

                {/* Exclusion Rules */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-2">Exclusion Rules</label>
                  <div className="border border-surface-container rounded-xl p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-error shrink-0" />
                    <p className="text-sm text-on-surface-variant">
                      Exclude patients with future appointments booked.
                    </p>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <button className="w-full bg-primary text-on-primary font-semibold py-3.5 rounded-xl mt-8 hover:opacity-90 transition-opacity">
                Save Configuration
              </button>
            </div>
          </div>

          {/* Performance Panel */}
          <div className="bg-white rounded-2xl border border-surface-container shadow-sm overflow-hidden">
            <div className="p-6 border-b border-surface-container flex justify-between items-center">
              <h3 className="text-lg font-bold text-primary">Performance (30 Days)</h3>
              <BarChart3 className="w-5 h-5 text-outline-variant" />
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-surface-container rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3 text-on-surface-variant">
                    <Send className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Sent</span>
                  </div>
                  <p className="text-3xl font-bold text-primary">1,240</p>
                </div>
                
                <div className="border border-surface-container rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3 text-on-surface-variant">
                    <CalendarCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Booked</span>
                  </div>
                  <p className="text-3xl font-bold text-primary">312</p>
                </div>
              </div>

              {/* Highlight Card */}
              <div className="bg-primary rounded-xl p-6 text-white relative overflow-hidden mt-4">
                <div className="relative z-10">
                  <p className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2">
                    Est. Revenue Recovered
                  </p>
                  <p className="text-4xl font-bold text-white tracking-tight mb-3">
                    $46.8k
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-white/80">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-success"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    +12% vs last month
                  </div>
                </div>
                <Wallet className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 pointer-events-none transform -rotate-12" />
              </div>

              <button className="w-full mt-6 text-sm font-semibold text-primary flex items-center justify-center gap-2 hover:opacity-70 transition-opacity">
                View detailed analytics <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
