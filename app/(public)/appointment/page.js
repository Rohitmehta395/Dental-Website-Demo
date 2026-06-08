"use client";

import { clinicConfig } from "@/constants/clinic-config";
import { PageTransition, FadeInView } from "@/components/shared/Animations";
import { CheckCircle2, Star, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function AppointmentForm() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") || "";
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  if (formStatus === "success") {
    return (
      <div className="bg-white rounded-[2rem] p-10 lg:p-16 shadow-[0_20px_40px_rgba(15,23,42,0.06)] border border-surface-container text-center">
        <div className="w-20 h-20 rounded-full bg-brand-sky/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-brand-sky-dark" />
        </div>
        <h2 className="text-3xl font-bold text-brand-navy mb-4">Request Received!</h2>
        <p className="text-lg text-on-surface-variant mb-8 leading-relaxed max-w-md mx-auto">
          Thank you for choosing {clinicConfig.name}. Our scheduling coordinator will contact you shortly to confirm your exact appointment time.
        </p>
        <button 
          onClick={() => setFormStatus("idle")}
          className="px-8 py-4 bg-brand-navy text-white rounded-xl font-semibold hover:bg-brand-navy-light transition-colors"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_40px_rgba(15,23,42,0.06)] border border-surface-container relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-sky/10 to-transparent rounded-full blur-[60px] pointer-events-none" />

      <h2 className="text-2xl font-bold text-brand-navy mb-8 relative z-10">Patient Details</h2>
      
      <div className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-semibold text-brand-navy">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              required
              className="w-full px-5 py-4 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy"
              placeholder="Legal first name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-semibold text-brand-navy">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              required
              className="w-full px-5 py-4 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy"
              placeholder="Legal last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-brand-navy">Email Address</label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full px-5 py-4 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              required
              className="w-full px-5 py-4 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy"
              placeholder="(555) 000-0000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="reason" className="block text-sm font-semibold text-brand-navy">Primary Reason for Visit</label>
          <div className="relative">
            <select 
              id="reason" 
              required
              defaultValue={defaultService}
              className="w-full px-5 py-4 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy appearance-none font-medium"
            >
              <option value="" disabled>Select a reason...</option>
              <option value="new-patient">New Patient Exam & Cleaning</option>
              <option value="emergency">Emergency / Toothache</option>
              <option value="consultation">Consultation / Second Opinion</option>
              {clinicConfig.services.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
              <option value="other">Other</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-3 h-3 border-r-2 border-b-2 border-brand-navy rotate-45 transform origin-center -translate-y-1/4" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="block text-sm font-semibold text-brand-navy flex items-center justify-between">
            <span>Additional Notes</span>
            <span className="text-xs font-normal text-on-surface-variant">Optional</span>
          </label>
          <textarea 
            id="notes" 
            rows={3}
            className="w-full px-5 py-4 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy resize-none"
            placeholder="Any specific concerns or preferences we should know about?"
          />
        </div>

        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className="w-full py-5 bg-brand-navy text-white rounded-xl font-bold text-lg hover:bg-brand-navy-light transition-all disabled:opacity-70 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4"
        >
          {formStatus === "submitting" ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            "Request Appointment Time"
          )}
        </button>
        <p className="text-xs text-center text-on-surface-variant flex items-center justify-center gap-1.5 mt-4">
          <ShieldCheck className="w-3.5 h-3.5" /> Your information is secure and HIPAA compliant.
        </p>
      </div>
    </form>
  );
}

export default function AppointmentPage() {
  return (
    <PageTransition className="w-full bg-background font-sans min-h-screen flex flex-col">
      <div className="flex-grow pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left: Trust & Value Proposition */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <FadeInView>
                <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy tracking-tight mb-6">
                  Let's get you scheduled.
                </h1>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
                  Requesting an appointment is quick and easy. Fill out the form, and our team will contact you promptly to finalize a time that works perfectly for your schedule.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-sky/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-sky-dark" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-navy mb-1">Fast Response</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">We typically respond to requests within 2 business hours to confirm your appointment time.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-sky/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-sky-dark" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-navy mb-1">No Commitment</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">Requesting a time doesn't lock you in. You can always reschedule if something comes up.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-sky/10 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-brand-sky-dark" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-navy mb-1">Top-Rated Care</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">Join thousands of patients who trust us with their smiles. 4.9/5 average rating.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-surface-container">
                  <p className="text-sm font-semibold text-brand-navy mb-2">Need immediate assistance?</p>
                  <p className="text-sm text-on-surface-variant mb-4">For dental emergencies, please call us directly.</p>
                  <a href={`tel:${clinicConfig.contact.phone.replace(/[^0-9]/g, "")}`} className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-sky-dark transition-colors">
                    {clinicConfig.contact.phone} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </FadeInView>
            </div>

            {/* Right: The Form */}
            <div className="lg:col-span-7 relative z-10">
              <FadeInView delay={0.2}>
                <Suspense fallback={<div className="h-[600px] w-full bg-surface-container-low rounded-[2rem] animate-pulse" />}>
                  <AppointmentForm />
                </Suspense>
              </FadeInView>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
