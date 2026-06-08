"use client";

import { clinicConfig } from "@/constants/clinic-config";
import { PageTransition, FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Animations";
import { Phone, Mail, MapPin, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const { contact, hours } = clinicConfig;
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <PageTransition className="w-full bg-background font-sans">
      {/* ===== HEADER ===== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-brand-sky/20 to-transparent blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeInView>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Get in touch.
            </h1>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              Whether you have a question about our services or need immediate assistance, our team is here to help.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ===== EMERGENCY BANNER ===== */}
      <section className="bg-amber-50 border-b border-amber-100 py-4 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-amber-900">
          <div className="flex items-center gap-2 font-bold">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <span>Dental Emergency?</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span className="font-medium text-sm sm:text-base">We offer same-day emergency appointments.</span>
          <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`} className="ml-2 font-bold text-amber-700 hover:text-amber-900 underline underline-offset-4 transition-colors">
            Call us now
          </a>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left: Contact Info & Hours */}
            <div className="lg:col-span-5 space-y-12">
              <FadeInView>
                <h2 className="text-2xl font-bold text-brand-navy mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-brand-sky-dark" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Phone</p>
                      <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`} className="text-xl font-bold text-brand-navy hover:text-brand-sky-dark transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-brand-sky-dark" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${contact.email}`} className="text-lg font-bold text-brand-navy hover:text-brand-sky-dark transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-brand-sky-dark" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Location</p>
                      <address className="text-lg font-medium text-brand-navy not-italic">
                        {contact.address.street}<br/>
                        {contact.address.city}, {contact.address.state} {contact.address.zip}
                      </address>
                      <a href={contact.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-brand-sky-dark hover:text-brand-navy transition-colors mt-2">
                        Get Directions <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.2} className="bg-surface-bright rounded-[2rem] p-8 border border-surface-container">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-brand-sky-dark" />
                  <h2 className="text-xl font-bold text-brand-navy">Business Hours</h2>
                </div>
                <ul className="space-y-4">
                  {hours.map((h, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm lg:text-base">
                      <span className="font-semibold text-on-surface-variant">{h.day}</span>
                      <span className={`font-medium ${h.open === 'Closed' ? 'text-red-500/80' : 'text-brand-navy'}`}>
                        {h.open === 'Closed' ? 'Closed' : `${h.open} - ${h.close}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </FadeInView>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <FadeInView delay={0.2} className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_40px_rgba(15,23,42,0.06)] border border-surface-container h-full">
                <h2 className="text-3xl font-bold text-brand-navy mb-2">Send us a message</h2>
                <p className="text-on-surface-variant mb-8 font-medium">We'll get back to you within 24 business hours.</p>

                {formStatus === "success" ? (
                  <div className="bg-brand-sky/10 border border-brand-sky/30 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-[400px]">
                    <div className="w-16 h-16 rounded-full bg-brand-sky/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-brand-sky-dark" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">Message Sent!</h3>
                    <p className="text-on-surface-variant mb-8">Thank you for reaching out. A member of our team will be in touch shortly.</p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="px-6 py-3 bg-white border border-surface-container rounded-xl text-brand-navy font-semibold hover:bg-surface-container-low transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-semibold text-brand-navy">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          required
                          className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-semibold text-brand-navy">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          required
                          className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-brand-navy">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-brand-navy">Message</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-transparent focus:bg-white focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10 transition-all outline-none text-brand-navy resize-none"
                        placeholder="How can we help you today?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold text-lg hover:bg-brand-navy-light transition-all disabled:opacity-70 flex items-center justify-center"
                    >
                      {formStatus === "submitting" ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </FadeInView>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* ===== MAP PLACEHOLDER ===== */}
      <section className="h-[400px] w-full bg-surface-container relative">
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 opacity-50">
          <MapPin className="w-12 h-12 text-on-surface-variant" />
          <p className="font-semibold text-on-surface-variant uppercase tracking-widest">Interactive Map</p>
        </div>
        {/* Real implementation would embed Google Maps iframe here */}
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-24 bg-surface-bright border-t border-surface-container">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-6">
              Prefer to book directly?
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
              Skip the message and securely request your appointment time through our online system.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-sky text-brand-navy font-bold rounded-2xl hover:bg-white transition-all shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] hover:-translate-y-1 text-lg"
            >
              Request Appointment Online
            </Link>
          </FadeInView>
        </div>
      </section>
    </PageTransition>
  );
}
