"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User, Phone, Mail, Calendar, UserPlus } from "lucide-react";
import { PageTransition } from "@/components/shared/Animations";

export default function NewPatientPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/patients");
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto pb-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/patients"
            className="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant hover:text-primary"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="text-3xl font-semibold text-primary tracking-tight">Add New Patient</h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Enter the details below to create a new patient record.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-level-1 border border-surface-container-high overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            {/* Section 1: Personal Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-on-surface mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-on-surface mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="e.g., John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-on-surface mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="e.g., Doe"
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-on-surface mb-1.5">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-on-surface mb-1.5">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all appearance-none"
                  >
                    <option value="">Select gender...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="border-surface-container-high my-8" />

            {/* Section 2: Contact Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-on-surface mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-on-surface mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="patient@example.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-surface-container-high my-8" />

            {/* Section 3: Additional Notes */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-on-surface mb-4">Additional Notes</h3>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-on-surface mb-1.5">
                  Medical history, allergies, or special requirements
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Enter any relevant patient notes here..."
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-surface-container-high">
              <Link
                href="/patients"
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <UserPlus className="w-4 h-4" />
                )}
                {isSubmitting ? "Saving..." : "Create Patient"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
