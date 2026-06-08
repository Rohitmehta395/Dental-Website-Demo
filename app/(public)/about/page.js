"use client";

import Image from "next/image";
import { clinicConfig } from "@/constants/clinic-config";
import { PageTransition, FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Animations";
import { Award, GraduationCap, Heart, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const { dentist, staff } = clinicConfig;

  return (
    <PageTransition className="w-full bg-background font-sans">
      {/* ===== HEADER ===== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-sky/20 to-transparent blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeInView>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              More than just a dental clinic.
            </h1>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed font-light">
              We are a team of dedicated professionals committed to changing the way you think about taking care of your smile.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ===== MEET THE DOCTOR (Editorial Profile) ===== */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            <FadeInView className="lg:col-span-5 sticky top-32">
              <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-8">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80')",
                  }}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-brand-navy font-semibold">
                  <GraduationCap className="w-5 h-5 text-brand-sky-dark" />
                  <span>Columbia University College of Dental Medicine</span>
                </div>
                <div className="flex items-center gap-3 text-brand-navy font-semibold">
                  <Award className="w-5 h-5 text-brand-sky-dark" />
                  <span>Fellow, Academy of General Dentistry</span>
                </div>
              </div>
            </FadeInView>

            <div className="lg:col-span-7 pt-4 lg:pt-12">
              <FadeInView delay={0.2}>
                <h2 className="text-sm font-bold tracking-widest text-brand-sky-dark uppercase mb-4">
                  The Founder
                </h2>
                <h3 className="text-4xl lg:text-6xl font-bold text-brand-navy tracking-tight mb-4">
                  {dentist.name}
                </h3>
                <p className="text-xl lg:text-2xl text-on-surface-variant font-light mb-12">
                  {dentist.title}
                </p>

                <div className="prose prose-lg text-on-surface-variant max-w-none">
                  <p className="text-xl text-brand-navy font-medium leading-relaxed mb-8">
                    "My goal has always been to remove the fear from dentistry. I wanted to build a practice where patients feel genuinely cared for, heard, and completely comfortable."
                  </p>
                  
                  <p className="mb-6 leading-relaxed">
                    With over 15 years of clinical experience, Dr. Chen has established herself as one of Portland's leading restorative and cosmetic dentists. Her journey into dentistry began with a simple desire: to combine art, science, and human connection into a lifelong profession.
                  </p>

                  <p className="mb-12 leading-relaxed">
                    She is particularly known for her gentle chairside manner and her ability to put even the most anxious patients at ease. Whether it's a routine cleaning or a complex full-mouth restoration, her focus remains on delivering predictable, long-lasting, and beautiful results.
                  </p>
                </div>

                <div className="bg-surface-bright rounded-3xl p-8 lg:p-10 border border-surface-container">
                  <h4 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-brand-sky-dark" /> Philosophy of Care
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Total transparency in treatment planning and costs.",
                      "Conservative approaches that preserve your natural teeth.",
                      "Investing in technology that makes treatments faster and painless.",
                      "Treating the person, not just the tooth."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-sky-dark shrink-0 mt-0.5" />
                        <span className="text-on-surface-variant">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            </div>
            
          </div>
        </div>
      </section>

      {/* ===== THE TEAM ===== */}
      <section className="py-24 lg:py-32 bg-surface-bright border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInView className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-6">
              Meet our experts.
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Every member of our team is highly trained and dedicated to making your visit seamless and stress-free.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-12">
            {/* We skip the lead dentist here since they are featured above, just show the rest */}
            {staff.slice(1).map((member, idx) => {
              const staffPhotos = {
                "Dr. Michael Torres": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
                "Jennifer Adams": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
                "Emily Park": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
                "David Kim": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
              };
              const photoUrl = staffPhotos[member.name] || "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80";
              
              return (
              <StaggerItem key={idx} className="group">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-surface-container shadow-sm border border-surface-container-high transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{
                      backgroundImage: `url('${photoUrl}')`,
                    }}
                  />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-1">{member.name}</h4>
                <p className="text-sm font-semibold text-brand-sky-dark uppercase tracking-wider">{member.role}</p>
              </StaggerItem>
            )})}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
