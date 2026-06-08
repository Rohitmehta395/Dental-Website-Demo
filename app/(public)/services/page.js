"use client";

import Link from "next/link";
import { clinicConfig } from "@/constants/clinic-config";
import * as LucideIcons from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageTransition, FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Animations";

export default function ServicesPage() {
  const { services } = clinicConfig;

  return (
    <PageTransition className="w-full bg-background font-sans">
      {/* ===== HEADER ===== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-surface-bright relative overflow-hidden border-b border-surface-container">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-brand-sky/10 to-transparent rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeInView>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-navy tracking-tight mb-6">
              Exceptional care for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky-dark to-brand-sky">
                every stage of your smile.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              From routine maintenance to complete restorations, our approach is always conservative, transparent, and focused on your comfort.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ===== SERVICES LISTING ===== */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = LucideIcons[service.icon] || LucideIcons.Star;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={service.id} 
                  id={service.id} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Content */}
                  <div className={`order-2 ${!isEven ? 'lg:order-1' : 'lg:order-1'}`}>
                    <FadeInView>
                      <div className="w-16 h-16 rounded-2xl bg-brand-blue-light/50 flex items-center justify-center mb-8 border border-brand-sky/20 shadow-sm">
                        <Icon className="w-8 h-8 text-brand-sky-dark" />
                      </div>
                      <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-6">
                        {service.name}
                      </h2>
                      <p className="text-xl text-on-surface-variant leading-relaxed mb-10 font-light">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {service.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-sky-dark shrink-0" />
                            <span className="text-base font-medium text-brand-navy">{item}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/appointment?service=${service.id}`}
                        className="inline-flex items-center gap-2 text-brand-sky-dark font-semibold hover:text-brand-navy transition-colors text-lg"
                      >
                        Request this service <ArrowRight className="w-5 h-5" />
                      </Link>
                    </FadeInView>
                  </div>

                  {/* Image/Visual Content */}
                  <div className={`order-1 ${!isEven ? 'lg:order-2' : 'lg:order-2'}`}>
                    <FadeInView delay={0.2} className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-surface-container">
                      <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply z-10" />
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                        style={{
                          // Use a set of high quality stock photos based on the index to differentiate
                          backgroundImage: `url('https://images.unsplash.com/${
                            index === 0 ? 'photo-1606811841689-23dfddce3e95' :
                            index === 1 ? 'photo-1588776814546-1ffcf47267a5' :
                            index === 2 ? 'photo-1629909613654-28e377c37b09' :
                            index === 3 ? 'photo-1579684385127-1ef15d508118' :
                            index === 4 ? 'photo-1559839734-2b71ea197ec2' :
                            'photo-1576091160399-112ba8d25d1d'
                          }?auto=format&fit=crop&q=80')`
                        }}
                      />
                    </FadeInView>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-sky/20 to-transparent blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeInView>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-8">
              Not sure what you need?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Schedule a comprehensive exam and consultation. We'll assess your oral health and build a customized treatment plan together.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-brand-navy font-semibold rounded-2xl hover:bg-brand-blue-light transition-all shadow-lg hover:-translate-y-1 text-lg"
            >
              Book a Consultation
            </Link>
          </FadeInView>
        </div>
      </section>
    </PageTransition>
  );
}
