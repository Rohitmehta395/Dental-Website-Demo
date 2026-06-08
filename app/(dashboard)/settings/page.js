"use client";

import { PageTransition } from "@/components/shared/Animations";
import { clinicConfig } from "@/constants/clinic-config";
import { useStore } from "@/lib/store";
import {
  Building2,
  Bell,
  RefreshCw,
  Users,
  Clock,
  Save,
  Mail,
  Phone,
  MapPin,
  Check
} from "lucide-react";

export default function SettingsPage() {
  const addToast = useStore((s) => s.addToast);

  const handleSave = () => {
    addToast({ type: "success", message: "Settings saved successfully" });
  };

  return (
    <PageTransition>
      <div className="max-w-5xl pb-12">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-primary tracking-tight">Settings</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Manage your clinic's profile, notification preferences, and team members.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Clinic Information Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold text-primary">Clinic Profile</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Update your clinic's public-facing details, including contact information and location. This information is used in automated patient communications.
              </p>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-surface-container overflow-hidden">
              <div className="p-6 md:p-8 space-y-6">
                <FormField label="Clinic Name" defaultValue={clinicConfig.name} />
                <FormField label="Tagline" defaultValue={clinicConfig.tagline} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Support Phone" defaultValue={clinicConfig.contact.phone} icon={Phone} />
                  <FormField label="Support Email" defaultValue={clinicConfig.contact.email} icon={Mail} />
                </div>
                <FormField
                  label="Physical Address"
                  defaultValue={`${clinicConfig.contact.address.street}, ${clinicConfig.contact.address.city}, ${clinicConfig.contact.address.state} ${clinicConfig.contact.address.zip}`}
                  icon={MapPin}
                />
              </div>
            </div>
          </div>

          <hr className="border-surface-container" />

          {/* Notification Preferences */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold text-primary">Notifications</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Choose what events you want to be notified about. These alerts will appear in your dashboard and be sent to your primary email.
              </p>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-surface-container overflow-hidden">
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                  <ToggleField label="Email notifications for overdue patients" description="Get a weekly digest of patients who have fallen behind on their recall." defaultChecked />
                  <ToggleField label="SMS alerts for no-shows" description="Immediate text message when a patient marks a no-show." defaultChecked />
                  <ToggleField label="Daily summary report" description="Receive a morning brief of scheduled appointments and revenue." defaultChecked />
                  <ToggleField label="Campaign completion alerts" description="Notify when a mass-message campaign finishes sending." defaultChecked />
                  <ToggleField label="New patient registration alerts" description="Alert when a new patient profile is created in the system." />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-surface-container" />

          {/* Recall Defaults */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold text-primary">Recall Automation</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Configure the global default settings for your automated recall and reactivation campaigns.
              </p>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-surface-container overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Default Recall Period" defaultValue="6 months" />
                  <FormField label="Overdue Threshold" defaultValue="30 days past due" />
                  <FormField label="Max Reminder Attempts" defaultValue="3" />
                  <FormField label="Reminder Interval" defaultValue="7 days" />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-surface-container" />

          {/* Staff */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold text-primary">Team Members</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Manage access and roles for your clinic's staff.
              </p>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-surface-container overflow-hidden">
              <div className="divide-y divide-surface-container">
                {clinicConfig.staff.map((member, i) => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-surface-container-lowest transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-sm font-bold">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">{member.name}</p>
                        <p className="text-xs font-medium text-on-surface-variant mt-0.5">{member.role}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-xs font-bold text-primary border border-surface-container rounded-lg hover:bg-surface-container-low transition-colors">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Save Button Container */}
          <div className="pt-6 flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-sm"
            >
              <Save className="w-4 h-4" />
              Save All Changes
            </button>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

function FormField({ label, defaultValue, icon: Icon }) {
  return (
    <div>
      <label className="block text-xs font-bold text-primary mb-2 tracking-wide uppercase">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline-variant" />
        )}
        <input
          type="text"
          defaultValue={defaultValue}
          className={`w-full bg-surface-container-lowest border border-surface-container rounded-xl py-3 ${
            Icon ? "pl-11" : "pl-4"
          } pr-4 text-sm font-medium text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
        />
      </div>
    </div>
  );
}

function ToggleField({ label, description, defaultChecked = false }) {
  return (
    <div className="flex items-start justify-between gap-6 py-2">
      <div>
        <span className="block text-sm font-bold text-primary">{label}</span>
        {description && (
          <span className="block text-xs font-medium text-on-surface-variant mt-1">{description}</span>
        )}
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-surface-container border border-outline-variant rounded-full peer peer-checked:bg-primary transition-colors peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:shadow-sm after:transition-all" />
      </label>
    </div>
  );
}
