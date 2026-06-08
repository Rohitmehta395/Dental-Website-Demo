"use client";

import Link from "next/link";
import { clinicConfig } from "@/constants/clinic-config";
import * as LucideIcons from "lucide-react";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ShieldCheck,
  HeartHandshake
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FadeInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/Animations";
import { useRef } from "react";

export default function HomePage() {
  const { services, testimonials, dentist } = clinicConfig;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="w-full bg-background font-sans">
      {/* ===== HERO SECTION (Premium Editorial) ===== */}
      <section ref={targetRef} className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-surface-bright/40" />
        {/* Subtle animated gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-b from-brand-sky/10 to-transparent blur-[120px] pointer-events-none opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-brand-blue-light/20 to-transparent blur-[100px] pointer-events-none opacity-50 mix-blend-multiply" />

        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-surface-container shadow-sm mb-8 w-max"
            >
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-brand-sky/20 border border-white flex items-center justify-center">
                    <Star className="w-3 h-3 text-brand-sky-dark fill-current" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-semibold tracking-wide text-brand-navy uppercase">
                Highest Rated in Portland
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-brand-navy leading-[1.05] tracking-tight mb-6"
            >
              Redefining the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky-dark to-brand-sky">
                Dental Experience
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg lg:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg font-light"
            >
              Expert care, modern technology, and a focus on your comfort. We craft beautiful, healthy smiles without the clinical anxiety.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/appointment"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-navy text-white rounded-2xl font-semibold overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Visit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-navy border border-surface-container rounded-2xl font-semibold hover:bg-surface-container-low transition-colors"
              >
                Meet The Doctor
              </Link>
            </motion.div>
          </div>

          {/* Image Composition */}
          <div className="lg:col-span-6 relative h-[450px] lg:h-[550px] w-full hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-4 lg:inset-8 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Trust Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute bottom-20 -left-6 z-20 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-surface-container flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-brand-sky/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-brand-sky-dark" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-navy">Accepting</p>
                <p className="text-xs text-on-surface-variant font-medium">New Patients</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== TRUST METRICS (Elegant Text-based) ===== */}
      <section className="py-20 bg-white border-y border-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-surface-container">
            {[
              { value: "500+", label: "Five-Star Reviews", desc: "From our amazing community" },
              { value: "15+", label: "Years Experience", desc: "Delivering exceptional care" },
              { value: "2k+", label: "Smiles Cared For", desc: "Healthy, happy patients" },
              { value: "98%", label: "Satisfaction", desc: "Our commitment to you" },
            ].map((stat, idx) => (
              <StaggerItem key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left px-4 pt-8 sm:pt-0 first:pt-0">
                <h3 className="text-4xl lg:text-5xl font-light text-brand-navy mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-base font-semibold text-brand-navy mb-1">{stat.label}</p>
                <p className="text-sm text-on-surface-variant">{stat.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SERVICES (Outcomes/Benefits Focused) ===== */}
      <section className="py-24 lg:py-32 bg-surface-bright relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInView className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-brand-sky-dark uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-sky-dark" /> Expertise
              </h2>
              <h3 className="text-3xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-6">
                Exceptional care for every stage of your smile.
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                We believe dentistry shouldn't just be about fixing problems, but enhancing your confidence and overall health.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-surface-container rounded-xl text-brand-navy font-semibold hover:bg-surface-container-low transition-colors whitespace-nowrap w-max"
            >
              Explore All Treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Restore Your Smile", desc: "Durable, natural-looking solutions like implants and crowns to give you back full function and aesthetics.", icon: ShieldCheck },
              { title: "Enhance Your Confidence", desc: "Cosmetic treatments including professional whitening and veneers tailored to your ideal look.", icon: Star },
              { title: "Protect Your Health", desc: "Thorough cleanings and proactive exams to prevent issues before they start.", icon: HeartHandshake },
            ].map((service, idx) => (
              <StaggerItem key={idx} className="group relative">
                <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-surface-container transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue-light/50 flex items-center justify-center mb-8 group-hover:bg-brand-sky group-hover:text-white transition-colors duration-500">
                    <service.icon className="w-7 h-7 text-brand-sky-dark group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">{service.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">{service.desc}</p>
                  <div className="flex items-center text-sm font-semibold text-brand-navy group-hover:text-brand-sky-dark transition-colors mt-auto">
                    Learn more <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== MEET THE DENTIST (Highly Personal Editorial) ===== */}
      <section className="py-24 lg:py-32 bg-white border-y border-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <FadeInView className="lg:col-span-5 order-2 lg:order-1">
              <h2 className="text-sm font-bold tracking-widest text-brand-sky-dark uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-sky-dark" /> The Doctor
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-2">
                {dentist.name}
              </h3>
              <p className="text-lg text-brand-sky-dark font-medium mb-8">
                {dentist.title}
              </p>
              
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed mb-10">
                <p>
                  "I started this practice with a simple philosophy: dentistry should be personal, comfortable, and absolutely transparent. Every patient who walks through our doors is treated like family."
                </p>
                <p>
                  With over 15 years of experience, Dr. Chen has built a reputation in Portland for her gentle approach and commitment to the latest advancements in dental technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-navy text-white rounded-xl font-semibold hover:bg-brand-navy-light transition-colors"
                >
                  Read Her Story
                </Link>
              </div>
            </FadeInView>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <FadeInView delay={0.2}>
                <div className="relative aspect-[4/5] lg:aspect-square w-full rounded-[2.5rem] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80')",
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply" />
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE EXPERIENCE (Storytelling visual) ===== */}
      <section className="py-24 lg:py-32 bg-brand-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeInView className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-sm font-bold tracking-widest text-brand-sky uppercase mb-4">
              The Experience
            </h2>
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              Dentistry, but comfortable.
            </h3>
            <p className="text-lg text-white/70 leading-relaxed">
              We've designed every aspect of our clinic to put you at ease. From the moment you walk in, you'll notice the difference.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80", title: "Calm Environment", desc: "Warm lighting, soothing music, and a welcoming atmosphere." },
              { img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80", title: "Precision Technology", desc: "Digital impressions and 3D imaging for faster, accurate care." },
              { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80", title: "Personalized Focus", desc: "We take the time to listen, explain, and customize your plan." }
            ].map((item, idx) => (
              <StaggerItem key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-square">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== TESTIMONIALS (Premium Social Proof) ===== */}
      <section className="py-24 lg:py-32 bg-surface-bright">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInView className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-6">
              Loved by our patients.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="flex text-brand-sky-dark">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <p className="text-lg font-semibold text-brand-navy">4.9/5 Average Rating</p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {testimonials.slice(0, 3).map((t, i) => (
              <StaggerItem key={i} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-surface-container flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sky/40 to-transparent" />
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-sky-dark text-brand-sky-dark" />
                  ))}
                </div>
                <blockquote className="text-lg text-brand-navy leading-relaxed mb-10 flex-grow font-medium">
                  "{t.quote}"
                </blockquote>
                <div className="mt-auto">
                  <p className="font-bold text-brand-navy">{t.name}</p>
                  <p className="text-sm text-on-surface-variant">{t.service}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center gap-2 text-brand-sky-dark font-semibold hover:text-brand-navy transition-colors"
            >
              Read More Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-surface-container-low">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square rounded-full bg-brand-sky/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeInView>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight mb-8">
              Take the first step toward a healthier smile.
            </h2>
            <p className="text-lg lg:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Our team is ready to welcome you. Request an appointment online or call our office directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-navy text-white font-semibold rounded-2xl hover:bg-brand-navy-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-lg"
              >
                Book Your Appointment
              </Link>
              <a
                href={`tel:${clinicConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-brand-navy font-semibold rounded-2xl border-2 border-surface-container hover:border-brand-navy hover:bg-surface-container-low transition-all w-full sm:w-auto text-lg"
              >
                Call {clinicConfig.contact.phone}
              </a>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
