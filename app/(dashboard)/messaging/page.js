"use client";

import { PageTransition } from "@/components/shared/Animations";
import {
  ChevronRight,
  Smartphone,
  Info,
  ChevronLeft,
  X,
  Send,
  Check,
  Clock,
  Reply,
  CheckCheck
} from "lucide-react";

export default function MessagingPage() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-6 pb-12 max-w-7xl mx-auto">
        
        {/* SECTION 1: Templates */}
        <div className="bg-white rounded-2xl border border-surface-container shadow-sm p-6">
          <h2 className="text-sm font-bold text-primary mb-4">Templates</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {[
              "Appointment Reminder",
              "No-show Follow-up",
              "Birthday Greeting",
              "Post-Treatment Care"
            ].map((template) => (
              <button 
                key={template}
                className="flex-shrink-0 flex justify-between items-center gap-8 border border-surface-container rounded-xl px-5 py-3.5 hover:border-brand-sky hover:bg-brand-blue-light/30 transition-colors group"
              >
                <span className="text-sm font-semibold text-primary">{template}</span>
                <ChevronRight className="w-4 h-4 text-outline-variant group-hover:text-brand-sky-dark transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 2: Composer and Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT: New Outbound Message */}
          <div className="lg:col-span-7 flex flex-col bg-white rounded-2xl border border-surface-container shadow-sm overflow-hidden h-full">
            <div className="p-5 border-b border-surface-container">
              <h2 className="text-sm font-bold text-primary">New Outbound Message</h2>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              {/* Type Selector */}
              <div className="flex gap-6 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded-full border-[5px] border-primary bg-white" />
                  <span className="text-sm font-medium text-primary">SMS</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded-full border border-outline-variant bg-white" />
                  <span className="text-sm font-medium text-on-surface-variant">WhatsApp</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded-full border border-outline-variant bg-white" />
                  <span className="text-sm font-medium text-on-surface-variant">Email</span>
                </label>
              </div>

              {/* TO Field */}
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3">
                TO
              </label>
              <div className="border border-surface-container rounded-xl p-1.5 flex items-center mb-6 focus-within:border-brand-sky focus-within:ring-1 focus-within:ring-brand-sky transition-all">
                <div className="flex items-center gap-3 bg-surface-container-lowest border border-surface-container px-2 py-1.5 rounded-lg w-full">
                  <div className="w-7 h-7 rounded-full bg-brand-blue-light flex items-center justify-center text-[10px] font-bold text-brand-sky-dark">
                    SJ
                  </div>
                  <span className="text-sm font-medium text-primary flex-1">Sarah Jenkins</span>
                  <span className="text-sm text-on-surface-variant">+1 (555) 019-2834</span>
                  <button className="p-1 hover:bg-surface-container rounded text-outline-variant hover:text-primary">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* MESSAGE Field */}
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3">
                MESSAGE
              </label>
              <div className="flex flex-col flex-1">
                <textarea 
                  className="w-full flex-1 min-h-[160px] border border-surface-container rounded-t-xl p-4 text-sm text-primary resize-none focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky transition-all"
                  defaultValue="Hi Sarah, this is a reminder for your dental cleaning tomorrow at 2:00 PM with Dr. Smith. Reply YES to confirm or use the link below to reschedule."
                />
                
                {/* Tokens */}
                <div className="border-b border-l border-r border-surface-container rounded-b-xl bg-surface-container-lowest p-3 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-on-surface-variant mr-2">Tokens:</span>
                  {[
                    "[Patient Name]",
                    "[Clinic Name]",
                    "[Next Recall Date]",
                    "[Booking Link]"
                  ].map((token) => (
                    <button key={token} className="text-[10px] font-bold text-primary bg-white border border-surface-container px-2 py-1.5 rounded hover:bg-surface-container-low transition-colors shadow-sm">
                      {token}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-surface-container flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white mt-auto">
              <p className="text-sm text-on-surface-variant">142/160 chars (1 SMS segment)</p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-surface-container text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors text-center justify-center">
                  Save Draft
                </button>
                <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-semibold flex justify-center items-center gap-2 hover:opacity-90 transition-opacity shadow-sm">
                  <Send className="w-4 h-4" />
                  Send Now
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Preview */}
          <div className="lg:col-span-5 flex flex-col bg-surface-container-lowest rounded-2xl border border-surface-container shadow-sm overflow-hidden h-full">
            <div className="p-5 border-b border-surface-container flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-outline-variant" />
              <h2 className="text-sm font-bold text-primary">Live Preview</h2>
            </div>
            
            <div className="flex-1 bg-surface-bright flex items-center justify-center p-8">
              {/* Phone Mockup */}
              <div className="w-[300px] h-[600px] bg-surface-container-lowest rounded-[2.5rem] border-[10px] border-surface-container shadow-xl overflow-hidden flex flex-col relative shrink-0">
                
                {/* Phone Header */}
                <div className="px-4 py-4 border-b border-surface-container flex justify-between items-center bg-white z-10">
                  <ChevronLeft className="w-5 h-5 text-primary" />
                  <div className="text-center">
                    <p className="text-sm font-bold text-primary">Sarah Jenkins</p>
                    <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mt-0.5">SMS</p>
                  </div>
                  <Info className="w-5 h-5 text-primary" />
                </div>

                {/* Phone Body */}
                <div className="flex-1 bg-surface-bright p-5 overflow-y-auto">
                  <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest text-center mb-6">
                    TODAY 10:42 AM
                  </p>
                  
                  <div className="bg-white border border-surface-container rounded-2xl rounded-tl-sm p-4 shadow-sm w-[85%]">
                    <p className="text-sm text-primary leading-relaxed">
                      Hi Sarah, this is a reminder for your dental cleaning tomorrow at 2:00 PM with Dr. Smith. Reply YES to confirm or use the link below to reschedule.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Sent History */}
        <div className="bg-white rounded-2xl border border-surface-container shadow-sm overflow-hidden">
          <div className="p-5 border-b border-surface-container flex justify-between items-center">
            <h2 className="text-sm font-bold text-primary">Sent History</h2>
            <div className="flex bg-surface-container-low p-1 rounded-lg border border-surface-container">
              <button className="px-4 py-1 text-xs font-bold text-primary bg-white rounded shadow-sm">
                All
              </button>
              <button className="px-4 py-1 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
                SMS
              </button>
            </div>
          </div>
          
          <div>
            {/* Row 1 */}
            <div className="p-5 flex justify-between items-center border-b border-surface-container hover:bg-surface-container-lowest transition-colors">
              <p className="text-sm font-bold text-primary w-1/4">Sarah Jenkins</p>
              <div className="flex-1 flex items-center gap-3">
                <span className="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  SMS
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  <CheckCheck className="w-3.5 h-3.5" />
                  DELIVERED
                </span>
              </div>
              <p className="text-sm text-on-surface-variant w-1/4 text-right">10:42 AM</p>
            </div>

            {/* Row 2 */}
            <div className="p-5 flex justify-between items-center border-b border-surface-container hover:bg-surface-container-lowest transition-colors">
              <p className="text-sm font-bold text-primary w-1/4">Michael Chang</p>
              <div className="flex-1 flex items-center gap-3">
                <span className="bg-brand-blue-light text-brand-sky-dark text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  WHATSAPP
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  PENDING
                </span>
              </div>
              <p className="text-sm text-on-surface-variant w-1/4 text-right">Yesterday</p>
            </div>

            {/* Row 3 */}
            <div className="p-5 flex justify-between items-center hover:bg-surface-container-lowest transition-colors">
              <p className="text-sm font-bold text-primary w-1/4">Emily Rodriguez</p>
              <div className="flex-1 flex items-center gap-3">
                <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  EMAIL
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  <Reply className="w-3 h-3 scale-x-[-1]" />
                  REPLIED
                </span>
              </div>
              <p className="text-sm text-on-surface-variant w-1/4 text-right">Oct 12</p>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
