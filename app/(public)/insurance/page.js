"use client";

import Link from "next/link";
import { clinicConfig } from "@/constants/clinic-config";
import { PageTransition, FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Animations";
import { ShieldCheck, CreditCard, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

export default function InsurancePage() {
  const { insurance } = clinicConfig;

  return (
    <PageTransition className="w-full bg-background font-sans">
      {/* ===== HEADER ===== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-brand-sky/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-brand-sky" />
              <span className="text-sm font-semibold tracking-wide uppercase">
                Transparent Pricing
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Insurance & Financing
            </h1>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              We believe high-quality dental care should be accessible. We accept most major insurance plans and offer flexible financing options.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ===== ACCEPTED INSURANCE ===== */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeInView className="lg:col-span-5">
              <h2 className="text-sm font-bold tracking-widest text-brand-sky-dark uppercase mb-4">
                Accepted Plans
              </h2>
              <h3 className="text-3xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-6">
                Maximizing your benefits.
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Our knowledgeable staff is here to help you navigate your insurance benefits. We'll handle the paperwork and file claims on your behalf to ensure you get the maximum coverage available.
              </p>
              
              <div className="bg-surface-bright rounded-2xl p-6 lg:p-8 border border-surface-container">
                <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-brand-sky-dark" /> Don't see your plan?
                </h4>
                <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
                  {insurance.note}
                </p>
                <a
                  href={`tel:${clinicConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-2 text-brand-sky-dark font-semibold hover:text-brand-navy transition-colors text-sm"
                >
                  Call {clinicConfig.contact.phone} to verify <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeInView>

            <div className="lg:col-span-7">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {insurance.accepted.map((ins, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-white rounded-xl p-6 border border-surface-container shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-brand-sky/10 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-brand-sky-dark opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-lg font-semibold text-brand-navy">{ins}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINANCING OPTIONS ===== */}
      <section className="py-24 lg:py-32 bg-surface-bright border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInView className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue-light/50 border border-brand-sky/20 mb-6 shadow-sm">
              <CreditCard className="w-8 h-8 text-brand-sky-dark" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-6">
              Flexible Payment Options
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              No insurance? No problem. We offer several ways to make your dental care fit your budget comfortably.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {insurance.financingOptions.map((opt, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-surface-container shadow-sm hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">{opt.name}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">{opt.description}</p>
                  <div className="mt-auto pt-6 border-t border-surface-container">
                    <span className="text-sm font-semibold text-brand-sky-dark uppercase tracking-wider">
                      Ask us for details
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-24 bg-white border-t border-surface-container">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy tracking-tight mb-8">
              Get an accurate estimate before treatment begins.
            </h2>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-navy text-white font-semibold rounded-2xl hover:bg-brand-navy-light transition-all shadow-lg hover:-translate-y-1 text-lg"
            >
              Request Appointment <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInView>
        </div>
      </section>
    </PageTransition>
  );
}
