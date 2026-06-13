"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinicConfig } from "@/constants/clinic-config";
import { publicNavigation } from "@/constants/navigation";
import { Stethoscope, Menu, X, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmoothScroll from "@/components/shared/SmoothScroll";

function PublicHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Pages that have a dark blue background at the very top
  const darkHeroPages = ['/about', '/insurance', '/contact'];
  const isDarkHero = darkHeroPages.includes(pathname);
  
  // Use light text (white) only if we are at the top of a dark hero page
  const useLightText = !scrolled && isDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-surface-container/50 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Stethoscope className="w-5 h-5 text-brand-sky" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${useLightText ? 'text-white' : 'text-brand-navy'}`}>
              {clinicConfig.name}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-1 backdrop-blur-md px-2 py-1.5 rounded-2xl border transition-colors duration-300 ${useLightText ? 'bg-white/10 border-white/20' : 'bg-white/50 border-surface-container/50 shadow-sm'}`}>
          {publicNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-brand-navy"
                    : useLightText
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-on-surface-variant hover:text-brand-navy hover:bg-white/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-surface-container/30"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${clinicConfig.contact.phone.replace(/[^0-9]/g, "")}`}
            className={`text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${useLightText ? 'text-white hover:text-brand-sky' : 'text-brand-navy hover:text-brand-sky'}`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">{clinicConfig.contact.phone}</span>
          </a>
          <Link
            href="/appointment"
            className={`group px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 ${
              useLightText
                ? "bg-white text-brand-navy hover:bg-surface-bright"
                : "bg-brand-navy text-white hover:bg-brand-navy-light"
            }`}
          >
            Book Visit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-xl backdrop-blur-md border transition-colors ${
            useLightText
              ? "text-white bg-white/10 border-white/20"
              : "text-brand-navy bg-white/50 border-surface-container/50"
          }`}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-surface-container/50 shadow-xl overflow-hidden md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {publicNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-brand-blue-light text-brand-navy"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:text-brand-navy"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="h-px bg-surface-container my-2" />
              <Link
                href="/appointment"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-navy text-white rounded-xl text-base font-semibold"
              >
                Book Your Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const socialIcons = {
  facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  google: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a5.932 5.932 0 1 1 0-11.862 5.7 5.7 0 0 1 3.974 1.615l2.766-2.766A9.68 9.68 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.761h-9.426z" />
    </svg>
  ),
  yelp: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.966 12.012l-1.077 1.834a3.842 3.842 0 0 1-5.111 1.401l-.018-.01-5.042-2.793a.855.855 0 0 1-.383-.75.875.875 0 0 1 .496-.786l4.63-2.316a3.84 3.84 0 0 1 5.378 1.144zm4.843 3.905l-4.502-2.502a3.845 3.845 0 0 0-4.015.11l-3.328 2.053a.86.86 0 0 0-.417.846.858.858 0 0 0 .546.731l5.352 2.126a3.84 3.84 0 0 0 4.97-1.78l1.41-3.05a.861.861 0 0 0-.016-.534zM12.98 10.3l.035-5.17A3.856 3.856 0 0 0 9.214 1.258h-.022L6.168 1.956a.859.859 0 0 0-.649.654.854.854 0 0 0 .195.9l3.522 3.86a3.842 3.842 0 0 0 3.744 1.229V10.3zm10.741 1.291l-4.992-1.895a3.834 3.834 0 0 0-4.708 2.222l-.764 2.016 4.417 2.651a3.839 3.839 0 0 0 5.127-1.332l1.378-3.07a.86.86 0 0 0-.026-.874.856.856 0 0 0-.432-.387z" />
    </svg>
  )
};

function PublicFooter() {
  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-sky/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-blue-light/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg">
                <Stethoscope className="w-6 h-6 text-brand-sky" />
              </div>
              <span className="text-2xl font-bold tracking-tight">{clinicConfig.name}</span>
            </Link>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-sm">
              {clinicConfig.description}
            </p>
            <div className="flex items-center gap-4">
              {Object.entries(clinicConfig.social).map(([platform, url]) => {
                const IconComponent = socialIcons[platform.toLowerCase()];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-brand-sky hover:text-white hover:border-brand-sky transition-all duration-300"
                    aria-label={platform}
                  >
                    {IconComponent ? <IconComponent className="w-4 h-4" /> : <span className="capitalize text-sm font-semibold">{platform[0]}</span>}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4">
              {publicNavigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-white/60 hover:text-brand-sky transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              {clinicConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="text-base text-white/60 hover:text-brand-sky transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${clinicConfig.contact.phone.replace(/[^0-9]/g, "")}`} className="flex items-start gap-3 text-base text-white/60 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                  <span>{clinicConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${clinicConfig.contact.email}`} className="flex items-start gap-3 text-base text-white/60 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                  <span>{clinicConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-base text-white/60">
                  <MapPin className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                  <span>
                    {clinicConfig.contact.address.street}<br/>
                    {clinicConfig.contact.address.city}, {clinicConfig.contact.address.state} {clinicConfig.contact.address.zip}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {clinicConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="text-sm text-white/40 hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function PublicLayout({ children }) {
  return (
    <SmoothScroll>
      <div className="min-h-screen w-full flex flex-col bg-background font-sans selection:bg-brand-sky/30 selection:text-brand-navy">
        <PublicHeader />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <PublicFooter />
      </div>
    </SmoothScroll>
  );
}
