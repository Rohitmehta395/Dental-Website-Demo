"use client";

import Link from "next/link";
import { clinicConfig } from "@/constants/clinic-config";
import { PageTransition, FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Animations";
import { Star, ArrowRight } from "lucide-react";

export default function TestimonialsPage() {
  const { testimonials } = clinicConfig;
  
  // Create a featured testimonial (the first one)
  const featuredTestimonial = testimonials[0];
  // The rest
  const otherTestimonials = testimonials.slice(1);

  return (
    <PageTransition className="w-full bg-background font-sans">
      {/* ===== HEADER ===== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-brand-sky/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-surface-container mb-8">
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-white border border-surface-container flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-brand-sky-dark fill-current" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold text-brand-navy ml-2">
                500+ Five-Star Reviews
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-navy tracking-tight mb-6">
              Don't just take our word for it.
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              Read stories from real patients who trust us with their smiles, comfort, and long-term oral health.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ===== FEATURED STORY ===== */}
      {featuredTestimonial && (
        <section className="py-12 relative z-10">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <FadeInView>
              <div className="bg-brand-navy rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-sky/20 to-transparent blur-3xl pointer-events-none" />
                
                <div className="lg:w-2/5 relative aspect-square lg:aspect-auto h-[300px] lg:h-auto">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80')` }}
                  />
                </div>
                
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: featuredTestimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8">
                    "{featuredTestimonial.quote}"
                  </h3>
                  <div>
                    <p className="text-lg font-bold text-white mb-1">{featuredTestimonial.name}</p>
                    <p className="text-brand-sky font-semibold uppercase tracking-wider text-xs">{featuredTestimonial.service}</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>
      )}

      {/* ===== MORE STORIES (Varied Grid) ===== */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherTestimonials.map((t, i) => {
              return (
                <StaggerItem key={i} className="h-full">
                  <div className="h-full flex flex-col rounded-3xl p-8 lg:p-10 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border-surface-container shadow-sm">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-5 h-5 fill-brand-sky text-brand-sky" />
                        ))}
                      </div>
                      <span className="text-6xl font-serif text-brand-navy/10 leading-none h-8">"</span>
                    </div>
                    
                    <p className="flex-grow text-lg leading-relaxed mb-8 font-medium text-on-surface-variant">
                      {t.quote}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg bg-surface-container-high text-brand-navy">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-brand-navy">{t.name}</p>
                        <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">{t.service}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-24 bg-surface-bright border-t border-surface-container">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-8">
              Ready to write your own success story?
            </h2>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-navy text-white font-semibold rounded-2xl hover:bg-brand-navy-light transition-all shadow-lg hover:-translate-y-1 text-lg"
            >
              Book Your First Visit <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInView>
        </div>
      </section>
    </PageTransition>
  );
}
