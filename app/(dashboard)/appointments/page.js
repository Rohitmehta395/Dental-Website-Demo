"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/Animations";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, List, Check, Clock, User, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const practitioners = [
  { id: "p1", initials: "S", name: "Dr. Sarah Smith", checked: true, bg: "bg-blue-100", text: "text-blue-700" },
  { id: "p2", initials: "J", name: "Dr. Michael Jones", checked: true, bg: "bg-teal-100", text: "text-teal-700" },
  { id: "p3", initials: "W", name: "Dr. Emily Wong", checked: false, bg: "bg-gray-100", text: "text-gray-700" },
];

const rooms = [
  { id: "r1", name: "Room 1", active: true },
  { id: "r2", name: "Room 2", active: true },
  { id: "r3", name: "Hygiene 1", active: false },
  { id: "r4", name: "Surgery A", active: false },
];

const days = [
  { name: "MON", date: "09" },
  { name: "TUE", date: "10" },
  { name: "WED", date: "11" },
  { name: "THU", date: "12", isCurrent: true },
  { name: "FRI", date: "13" },
];

const times = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"];

const appointments = [
  {
    id: 1,
    day: "THU",
    startHour: 9, // 9 AM
    durationHours: 1,
    patient: "Alice Freeman",
    type: "Routine Cleaning",
    color: "blue", // maps to specific classes below
    status: "confirmed",
  },
  {
    id: 2,
    day: "THU",
    startHour: 10, // 10 AM
    durationHours: 1.5,
    patient: "Robert Johnson",
    type: "Root Canal Therapy",
    color: "green",
    status: "checked-in",
    room: "Room 1",
  },
  {
    id: 3,
    day: "THU",
    startHour: 12, // 12 PM
    durationHours: 0.75,
    patient: "Dana Scully",
    color: "orange",
    status: "pending",
  },
];

export default function AppointmentsPage() {
  const [view, setView] = useState("calendar");

  return (
    <PageTransition>
      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-semibold text-primary tracking-tight">Appointments</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Manage your clinic's schedule and resources.
          </p>
        </div>
        <div className="flex bg-surface-container rounded-lg p-1 border border-outline-variant">
          <button
            onClick={() => setView("calendar")}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-md transition-colors",
              view === "calendar" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            <CalendarIcon className="w-4 h-4" />
            Calendar
          </button>
          <button
            onClick={() => setView("list")}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-md transition-colors",
              view === "list" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            <List className="w-4 h-4" />
            List
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 items-start">
        {/* Left Sidebar (Mini Calendar & Filters) */}
        <div className="w-full xl:w-72 flex-shrink-0 flex flex-col gap-6">
          {/* Mini Calendar */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-on-surface text-lg">October 2023</h3>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-surface-container rounded-full text-on-surface-variant">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-surface-container rounded-full text-on-surface-variant">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                <div key={d} className="font-medium text-on-surface-variant py-1">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {/* Dummy calendar dates */}
              <div className="py-1.5 text-on-surface-variant/40">1</div>
              <div className="py-1.5 text-on-surface-variant/40">2</div>
              <div className="py-1.5">3</div>
              <div className="py-1.5">4</div>
              <div className="py-1.5">5</div>
              <div className="py-1.5">6</div>
              <div className="py-1.5">7</div>
              
              <div className="py-1.5">8</div>
              <div className="py-1.5">9</div>
              <div className="py-1.5">10</div>
              <div className="py-1.5">11</div>
              <div className="py-1.5 bg-primary text-on-primary rounded-full font-semibold">12</div>
              <div className="py-1.5">13</div>
              <div className="py-1.5">14</div>

              <div className="py-1.5">15</div>
              <div className="py-1.5">16</div>
              <div className="py-1.5">17</div>
              <div className="py-1.5">18</div>
              <div className="py-1.5">19</div>
              <div className="py-1.5">20</div>
              <div className="py-1.5">21</div>

              <div className="py-1.5">22</div>
              <div className="py-1.5">23</div>
              <div className="py-1.5">24</div>
              <div className="py-1.5">25</div>
              <div className="py-1.5">26</div>
              <div className="py-1.5">27</div>
              <div className="py-1.5">28</div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high p-5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-on-surface text-lg">Filters</h3>
              <button className="text-xs font-medium text-primary hover:underline">Clear All</button>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-4">
                Practitioners
              </h4>
              <div className="flex flex-col gap-3">
                {practitioners.map((p) => (
                  <label key={p.id} className="flex items-center gap-3 cursor-pointer group">
                    <div className={cn(
                      "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                      p.checked ? "bg-primary border-primary" : "border-outline-variant bg-surface-container-lowest"
                    )}>
                      {p.checked && <Check className="w-3 h-3 text-on-primary" />}
                    </div>
                    <div className={cn("w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold", p.bg, p.text)}>
                      {p.initials}
                    </div>
                    <span className="text-sm text-on-surface group-hover:text-primary transition-colors">{p.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <hr className="border-surface-container-high my-6" />

            <div>
              <h4 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-4">
                Rooms
              </h4>
              <div className="flex flex-wrap gap-2">
                {rooms.map((r) => (
                  <button
                    key={r.id}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                      r.active 
                        ? "bg-primary-container/50 border-primary/30 text-primary" 
                        : "bg-surface-container-lowest border-outline-variant text-on-surface-variant hover:bg-surface-container"
                    )}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Calendar View */}
        <div className="flex-grow bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high overflow-hidden min-w-[600px] w-full">
          {/* Calendar Header */}
          <div className="flex border-b border-surface-container-high">
            <div className="w-16 flex-shrink-0 flex items-center justify-center border-r border-surface-container-high bg-surface">
              <span className="text-xs font-semibold text-on-surface-variant">EST</span>
            </div>
            <div className="flex-grow grid grid-cols-5">
              {days.map((day, index) => (
                <div 
                  key={day.name} 
                  className={cn(
                    "py-3 flex flex-col items-center justify-center text-center",
                    index !== days.length - 1 && "border-r border-surface-container-high",
                    day.isCurrent ? "bg-primary/5 border-b-2 border-b-primary" : "bg-surface"
                  )}
                >
                  <span className={cn(
                    "text-[11px] font-semibold tracking-wider",
                    day.isCurrent ? "text-primary" : "text-on-surface-variant"
                  )}>{day.name}</span>
                  <span className={cn(
                    "text-xl font-bold mt-0.5",
                    day.isCurrent ? "text-primary" : "text-on-surface"
                  )}>{day.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Grid Container (Relative for absolute positioning of events) */}
          <div className="relative">
            {/* Grid Background */}
            <div className="flex flex-col">
              {times.map((time, index) => (
                <div key={time} className="flex h-24 relative border-b border-surface-container-high/50 last:border-0">
                  <div className="w-16 flex-shrink-0 flex justify-end pr-3 pt-1 border-r border-surface-container-high bg-surface">
                    <span className="text-[10px] font-medium text-on-surface-variant">{time}</span>
                  </div>
                  <div className="flex-grow grid grid-cols-5">
                    {[0, 1, 2, 3, 4].map(col => (
                      <div key={col} className="border-r border-surface-container-high/30 border-dashed last:border-0 relative" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Time Line (10:30 AM approx) */}
            <div className="absolute top-[240px] left-0 w-full flex items-center z-10"> {/* 240px = 2.5 hours * 96px/hr (96 is h-24) */}
               <div className="w-16 flex justify-end pr-2">
                 <span className="text-[10px] font-bold text-brand-sky bg-surface px-1">10:30</span>
               </div>
               <div className="flex-grow border-t border-brand-sky relative">
                 <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-brand-sky" />
               </div>
            </div>

            {/* Render Appointments */}
            <div className="absolute top-0 left-16 right-0 bottom-0 pointer-events-none">
               <div className="w-full h-full grid grid-cols-5 relative">
                  {/* Event 1: Thu 9am - 10am */}
                  <div className="col-start-4 relative w-full h-full pointer-events-auto">
                    {appointments.map(apt => {
                      if (apt.id === 1) {
                         const top = (apt.startHour - 8) * 96; // 8 AM is 0, each hour is 96px (h-24)
                         const height = apt.durationHours * 96;
                         return (
                           <div 
                             key={apt.id}
                             className="absolute left-1 right-1 rounded-md border-l-4 p-2 overflow-hidden bg-brand-sky/10 border-l-brand-sky hover:ring-2 hover:ring-brand-sky cursor-pointer transition-all shadow-sm z-20"
                             style={{ top: `${top}px`, height: `${height}px` }}
                           >
                             <div className="flex items-start justify-between">
                               <span className="text-xs font-bold text-brand-sky-darker leading-tight">{apt.patient}</span>
                               <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" />
                             </div>
                             <span className="text-[10px] text-brand-sky-dark leading-tight block mt-1">{apt.type}</span>
                           </div>
                         )
                      }
                      if (apt.id === 2) {
                         const top = (apt.startHour - 8) * 96; 
                         const height = apt.durationHours * 96;
                         return (
                           <div 
                             key={apt.id}
                             className="absolute left-1 right-1 rounded-md border-l-4 p-2 overflow-hidden bg-green-100 border-l-green-500 hover:ring-2 hover:ring-green-500 cursor-pointer transition-all shadow-sm z-20"
                             style={{ top: `${top}px`, height: `${height}px` }}
                           >
                             <div className="flex items-start justify-between">
                               <span className="text-xs font-bold text-green-800 leading-tight">{apt.patient}</span>
                             </div>
                             <span className="text-[10px] text-green-700 leading-tight block mt-0.5">{apt.type}</span>
                             <span className="text-[9px] font-medium text-green-600 leading-tight block mt-1">Checked In</span>
                             <span className="text-[9px] text-green-600 leading-tight block">{apt.room}</span>
                           </div>
                         )
                      }
                      if (apt.id === 3) {
                         const top = (apt.startHour - 8) * 96; 
                         const height = apt.durationHours * 96;
                         return (
                           <div 
                             key={apt.id}
                             className="absolute left-1 right-1 rounded-md border-l-4 p-2 overflow-hidden bg-orange-100 border-l-orange-500 hover:ring-2 hover:ring-orange-500 cursor-pointer transition-all shadow-sm z-20"
                             style={{ top: `${top}px`, height: `${height}px` }}
                           >
                             <div className="flex items-start justify-between">
                               <span className="text-xs font-bold text-orange-800 leading-tight">{apt.patient}</span>
                               <Clock className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                             </div>
                           </div>
                         )
                      }
                      return null;
                    })}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
