"use client";

import { PageTransition } from "@/components/shared/Animations";
import { use } from "react";
import { patients, visitHistory, communicationTimeline } from "@/constants/mock-data";
import { useStore } from "@/lib/store";
import { formatDate, getInitials, getAvatarColor } from "@/lib/utils";
import Link from "next/link";
import {
  CalendarDays,
  Send,
  StickyNote,
  Smartphone,
  Mail,
  CalendarX,
  Stethoscope,
  UserX,
  Check,
  Pin,
  Pencil,
  AlertTriangle,
  MoreHorizontal,
  MessageSquare
} from "lucide-react";

export default function PatientProfilePage({ params }) {
  const { id } = use(params);
  // Get patient by id, fallback to first patient if not found
  const patient = patients.find((p) => p.id === id) || patients[0];
  const addToast = useStore((s) => s.addToast);
  
  const initials = getInitials(`${patient.firstName} ${patient.lastName}`);
  const avatarColor = getAvatarColor(`${patient.firstName} ${patient.lastName}`);

  const calculateAge = (dob) => {
    const diff = Date.now() - new Date(dob).getTime();
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
  };

  const handleSendReminder = () => {
    addToast({
      type: "success",
      message: `Recall reminder sent to ${patient.firstName} ${patient.lastName}`,
    });
  };

  const handleMarkNoShow = () => {
    addToast({
      type: "error",
      message: `${patient.firstName} ${patient.lastName} marked as no-show`,
    });
  };

  const handleBookAppointment = () => {
    addToast({
      type: "success",
      message: `Opening booking flow for ${patient.firstName}...`,
    });
  };

  const handleAddNote = () => {
    addToast({
      type: "success",
      message: `Opening note editor for ${patient.firstName}...`,
    });
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto pb-12">
        
        {/* Top Header Card */}
        <div className="bg-white rounded-2xl border border-surface-container shadow-sm mb-6 pt-1">
          {/* Black accent bar */}
          <div className="h-4 bg-primary rounded-t-xl mx-1 -mt-1" />
          
          <div className="p-8 pb-0">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              
              {/* Left Identity Area */}
              <div className="flex gap-6">
                <div className="relative">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold ${avatarColor.bg} ${avatarColor.text}`}>
                    {initials}
                  </div>
                  {patient.status === 'overdue' && (
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full border-4 border-white bg-error" />
                  )}
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-primary">
                      {patient.firstName} {patient.lastName}
                    </h1>
                    {patient.status === 'overdue' && (
                      <span className="bg-error-container/50 text-error px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                        Overdue
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-on-surface-variant mt-1.5">
                    ID: #{patient.id} &nbsp;&bull;&nbsp; DOB: {formatDate(patient.dateOfBirth)} ({calculateAge(patient.dateOfBirth)}y)
                  </p>
                  
                  {/* Contact Pills */}
                  <div className="flex flex-wrap gap-2 text-sm text-on-surface-variant font-medium mt-4">
                    <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-surface-container shadow-sm">
                      <Smartphone className="w-4 h-4 text-outline-variant" /> {patient.phone}
                    </div>
                    <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-surface-container shadow-sm">
                      <Mail className="w-4 h-4 text-outline-variant" /> {patient.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-col gap-3 min-w-[200px]">
                <button 
                  onClick={handleBookAppointment}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-sm"
                >
                  <CalendarDays className="w-4 h-4" /> Book Appointment
                </button>
                <div className="flex gap-2">
                  <button 
                    onClick={handleSendReminder}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-blue-light/50 border border-brand-sky/20 text-brand-sky-dark rounded-xl text-sm font-bold hover:bg-brand-blue-light transition-colors"
                  >
                    <Send className="w-4 h-4" /> Reminder
                  </button>
                  <button 
                    onClick={handleAddNote}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-surface-container-low border border-surface-container text-on-surface-variant rounded-xl text-sm font-bold hover:bg-surface-container transition-colors"
                  >
                    <StickyNote className="w-4 h-4" /> Note
                  </button>
                </div>
                <button 
                  onClick={handleMarkNoShow}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-error-container text-error rounded-xl text-sm font-bold hover:bg-error-container/10 transition-colors"
                >
                  <UserX className="w-4 h-4" /> Mark No-Show
                </button>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex gap-8 mt-10 px-2 border-b border-surface-container">
              <button className="text-sm font-bold text-primary border-b-4 border-primary pb-3 -mb-[2px]">Overview</button>
              <button className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors pb-3">Visits</button>
              <button className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors pb-3">Treatments</button>
              <button className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors pb-3">Messages</button>
              <button className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors pb-3">Documents</button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN (Clinical & History) */}
          <div className="xl:col-span-7 flex flex-col gap-6">
            
            {/* Overdue Alert Banner */}
            {patient.status === 'overdue' && (
              <div className="bg-error-container/20 rounded-xl p-5 border border-error-container/30 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-error-container/50 flex items-center justify-center text-error shrink-0">
                    <CalendarX className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary">No Upcoming Appointment</h3>
                    <p className="text-sm font-medium text-on-surface-variant mt-0.5">Patient is currently overdue for their 6-month recall.</p>
                  </div>
                </div>
                <button className="bg-white border border-surface-container shadow-sm px-4 py-2 rounded-lg text-sm font-bold text-primary hover:bg-surface-container-lowest transition-colors">
                  Schedule Now
                </button>
              </div>
            )}

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-surface-container rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-on-surface-variant mb-4">
                  <Stethoscope className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Completed Treatments</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-bold text-primary">4</span>
                  <span className="text-[10px] text-outline-variant font-bold uppercase tracking-wider mb-1">Life-to-date</span>
                </div>
              </div>
              <div className="bg-white border border-surface-container rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-on-surface-variant mb-4">
                  <UserX className="w-4 h-4 text-error" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">No-Show History</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-bold text-primary">1</span>
                  <span className="text-[10px] text-outline-variant font-bold uppercase tracking-wider mb-1">Last 12m</span>
                </div>
              </div>
            </div>

            {/* Recent Clinical History */}
            <div className="bg-white border border-surface-container rounded-xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-surface-container flex justify-between items-center bg-surface-container-lowest">
                <h3 className="text-base font-bold text-primary">Recent Clinical History</h3>
                <button className="text-[10px] font-bold text-primary uppercase tracking-wider hover:underline">View All</button>
              </div>
              <div className="p-6">
                <div className="relative border-l-2 border-surface-container ml-3 space-y-8">
                  {visitHistory.slice(0, 2).map((visit, i) => (
                    <div key={i} className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-[4px] border-white bg-outline-variant" />
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-sm font-bold text-primary">{visit.type}</h4>
                        <span className="text-[11px] font-bold text-on-surface-variant">{formatDate(visit.date)}</span>
                      </div>
                      <p className="text-sm text-on-surface-variant mb-3 leading-relaxed">
                        Performed by {visit.provider}. {visit.notes}
                      </p>
                      <span className="inline-flex items-center gap-1 bg-surface-container-low border border-surface-container px-2 py-1 rounded text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                        <Check className="w-3 h-3" /> Completed
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Notes & Comms) */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            
            {/* Staff Notes */}
            <div className="bg-[#FFFDF5] border border-[#F2E5C4] rounded-xl shadow-sm overflow-hidden">
              <div className="px-5 py-4 flex justify-between items-center border-b border-[#F2E5C4]">
                <div className="flex items-center gap-2 text-[#A88C3A]">
                  <Pin className="w-4 h-4 fill-current" />
                  <h3 className="text-sm font-bold">Staff Notes</h3>
                </div>
                <button className="hover:opacity-70 transition-opacity">
                  <Pencil className="w-4 h-4 text-[#A88C3A]" />
                </button>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-primary leading-relaxed mb-5">
                  {patient.notes}
                </p>
                {patient.status === 'overdue' && (
                  <div className="bg-error-container/20 border border-error-container/30 rounded-xl p-4 flex gap-3 mb-5">
                    <AlertTriangle className="w-5 h-5 text-error shrink-0" />
                    <p className="text-sm font-medium text-primary leading-relaxed">
                      High anxiety regarding needles. Ensure Dr. Smith uses topical anesthetic liberally and allocates extra time for procedures.
                    </p>
                  </div>
                )}
                <p className="text-[9px] font-bold text-outline-variant uppercase tracking-widest text-right">
                  Last updated by Reception &bull; 2 mos ago
                </p>
              </div>
            </div>

            {/* Recent Comms */}
            <div className="bg-white border border-surface-container rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col">
              <div className="p-5 border-b border-surface-container flex justify-between items-center">
                <h3 className="text-base font-bold text-primary">Recent Comms</h3>
                <button className="text-outline-variant hover:text-primary transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="divide-y divide-surface-container">
                {communicationTimeline.slice(0, 2).map((msg, i) => (
                  <div key={i} className="p-5 flex gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'sms' ? 'bg-brand-blue-light text-brand-sky-dark' : 'bg-surface-container-low text-on-surface-variant'}`}>
                      {msg.type === 'sms' ? <MessageSquare className="w-5 h-5 fill-current" /> : <Mail className="w-5 h-5 fill-current" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-sm font-bold text-primary">{msg.type === 'sms' ? 'Recall Reminder SMS' : 'Fall Newsletter Email'}</h4>
                        <span className="text-[11px] font-bold text-on-surface-variant">{formatDate(msg.date)}</span>
                      </div>
                      <p className="text-sm text-on-surface-variant mb-2 line-clamp-1">
                        "{msg.message}"
                      </p>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${msg.type === 'sms' ? 'bg-surface-container-low text-on-surface-variant' : 'text-success'}`}>
                        {msg.type === 'email' && <Check className="w-3 h-3" />}
                        {msg.type === 'sms' ? 'Automated' : 'Opened'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto p-4 border-t border-surface-container text-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer">
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider">View Full Log</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
}
