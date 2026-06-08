/**
 * Clinic Configuration
 * =====================
 * ALL clinic-specific content lives here.
 * To adapt for a new clinic, only modify this file.
 * No page code should contain hardcoded clinic content.
 */

export const clinicConfig = {
  // --- Branding ---
  name: "Bright Smile Dental",
  tagline: "Your Family's Path to a Healthier Smile",
  description:
    "At Bright Smile Dental, we combine modern technology with compassionate care to deliver exceptional dental experiences for the whole family.",
  shortName: "BSD",

  // --- Logo ---
  // Replace with actual logo path for each clinic
  logo: "/logo.svg",
  logoDark: "/logo-dark.svg",
  favicon: "/favicon.ico",

  // --- Brand Colors (extend/override the design system) ---
  colors: {
    primary: "#0F172A",
    primaryLight: "#1E293B",
    accent: "#38BDF8",
    accentLight: "#E0F2FE",
  },

  // --- Dentist / Owner ---
  dentist: {
    name: "Dr. Sarah Chen",
    title: "DDS, FAGD",
    bio: "Dr. Sarah Chen has been providing exceptional dental care for over 15 years. A graduate of Columbia University College of Dental Medicine, she is committed to helping every patient achieve their healthiest smile through personalized, gentle care.",
    specialties: [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Preventive Care",
      "Restorative Dentistry",
    ],
    education: [
      "Columbia University College of Dental Medicine, DDS",
      "Fellow, Academy of General Dentistry (FAGD)",
      "Advanced Implant Training, NYU Langone",
    ],
    photoUrl: "/images/dentist.jpg",
  },

  // --- Staff ---
  staff: [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Dentist",
      photoUrl: "/images/staff/sarah.jpg",
    },
    {
      name: "Dr. Michael Torres",
      role: "Associate Dentist",
      photoUrl: "/images/staff/michael.jpg",
    },
    {
      name: "Jennifer Adams",
      role: "Dental Hygienist",
      photoUrl: "/images/staff/jennifer.jpg",
    },
    {
      name: "Emily Park",
      role: "Office Manager",
      photoUrl: "/images/staff/emily.jpg",
    },
    {
      name: "David Kim",
      role: "Dental Assistant",
      photoUrl: "/images/staff/david.jpg",
    },
  ],

  // --- Services ---
  services: [
    {
      id: "preventive",
      name: "Preventive Care",
      icon: "Shield",
      description:
        "Regular cleanings, exams, and X-rays to keep your smile healthy and catch issues early.",
      items: [
        "Comprehensive Exams",
        "Professional Cleanings",
        "Digital X-Rays",
        "Fluoride Treatments",
        "Sealants",
        "Oral Cancer Screening",
      ],
    },
    {
      id: "cosmetic",
      name: "Cosmetic Dentistry",
      icon: "Sparkles",
      description:
        "Transform your smile with our range of cosmetic treatments designed to enhance your confidence.",
      items: [
        "Teeth Whitening",
        "Porcelain Veneers",
        "Dental Bonding",
        "Smile Makeovers",
        "Gum Contouring",
      ],
    },
    {
      id: "restorative",
      name: "Restorative Dentistry",
      icon: "Wrench",
      description:
        "Repair and restore damaged teeth with durable, natural-looking solutions.",
      items: [
        "Dental Implants",
        "Crowns & Bridges",
        "Root Canal Therapy",
        "Dentures & Partials",
        "Tooth-Colored Fillings",
      ],
    },
    {
      id: "emergency",
      name: "Emergency Care",
      icon: "AlertCircle",
      description:
        "Same-day emergency appointments available for urgent dental issues.",
      items: [
        "Toothache Relief",
        "Broken Tooth Repair",
        "Lost Filling/Crown",
        "Dental Abscess",
        "Emergency Extractions",
      ],
    },
    {
      id: "family",
      name: "Family Dentistry",
      icon: "Users",
      description:
        "Comprehensive dental care for patients of all ages, from toddlers to seniors.",
      items: [
        "Children's Dentistry",
        "Teen Orthodontics",
        "Adult Preventive Care",
        "Senior Dental Care",
        "Special Needs Dentistry",
      ],
    },
    {
      id: "technology",
      name: "Advanced Technology",
      icon: "Zap",
      description:
        "State-of-the-art technology for more comfortable, precise, and efficient treatments.",
      items: [
        "Digital Impressions",
        "3D Imaging (CBCT)",
        "Laser Dentistry",
        "Intraoral Cameras",
        "CAD/CAM Same-Day Crowns",
      ],
    },
  ],

  // --- Testimonials ---
  testimonials: [
    {
      name: "Maria Rodriguez",
      quote:
        "Dr. Chen and her team made me feel so comfortable. After years of avoiding the dentist, they helped me get back on track with my dental health. I actually look forward to my appointments now!",
      rating: 5,
      service: "General Dentistry",
    },
    {
      name: "James Thompson",
      quote:
        "The reminder system they use is fantastic. I never miss an appointment anymore, and my teeth have never been healthier. The whole office runs like clockwork.",
      rating: 5,
      service: "Preventive Care",
    },
    {
      name: "Priya Patel",
      quote:
        "My family has been coming here for three years. The kids love it, the staff is incredible, and the results speak for themselves. Best dental practice we've ever been to.",
      rating: 5,
      service: "Family Dentistry",
    },
    {
      name: "Robert Williams",
      quote:
        "I needed a crown and was dreading it, but Dr. Chen made the process painless. They even had same-day technology so I didn't need a temporary. Truly impressive.",
      rating: 5,
      service: "Restorative Dentistry",
    },
    {
      name: "Linda Chen",
      quote:
        "The teeth whitening results exceeded my expectations. Professional, quick, and the staff walked me through every step. My smile has never looked better!",
      rating: 5,
      service: "Cosmetic Dentistry",
    },
    {
      name: "David Park",
      quote:
        "After my cleaning, they sent me a follow-up text checking in. That kind of personal attention is rare. I've already referred three friends.",
      rating: 5,
      service: "Preventive Care",
    },
    {
      name: "Susan Miller",
      quote:
        "The office is beautiful and spotless, and the team is incredibly friendly. It truly feels like a premium experience from the moment you walk in.",
      rating: 5,
      service: "Cosmetic Dentistry",
    },
  ],

  // --- Insurance ---
  insurance: {
    accepted: [
      "Delta Dental",
      "Cigna",
      "MetLife",
      "Aetna",
      "Guardian",
      "United Healthcare",
      "Blue Cross Blue Shield",
      "Humana",
      "Principal",
      "Sun Life",
    ],
    financingOptions: [
      {
        name: "CareCredit",
        description: "0% interest financing available for 6-24 months",
      },
      {
        name: "In-House Payment Plans",
        description: "Flexible monthly payment options for major treatments",
      },
      {
        name: "Senior Discount",
        description: "10% discount for patients 65 and older",
      },
    ],
    note: "Don't see your insurance? Contact us — we work with most major providers and can help verify your benefits.",
  },

  // --- Contact ---
  contact: {
    phone: "(555) 234-5678",
    email: "hello@brightsmile.dental",
    address: {
      street: "1234 Riverside Drive, Suite 200",
      city: "Portland",
      state: "OR",
      zip: "97201",
    },
    mapUrl: "https://maps.google.com",
  },

  // --- Business Hours ---
  hours: [
    { day: "Monday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "4:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "2:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ],

  // --- Social Media ---
  social: {
    facebook: "https://facebook.com/brightsmile",
    instagram: "https://instagram.com/brightsmile",
    google: "https://g.page/brightsmile",
    yelp: "https://yelp.com/biz/brightsmile",
  },

  // --- Public Website Content ---
  website: {
    heroHeadline: "Your Family Deserves a Healthier Smile",
    heroSubheadline:
      "Modern dental care with a personal touch. Preventive, cosmetic, and restorative dentistry for the whole family.",
    heroCta: "Request an Appointment",
    heroSecondaryCta: "Meet Dr. Chen",

    // How We Help Section
    howWeHelp: {
      headline: "How We Help Patients Stay On Track",
      items: [
        {
          icon: "Bell",
          title: "Preventive Care Reminders",
          description:
            "Never miss a cleaning or check-up with our automated reminder system.",
        },
        {
          icon: "Calendar",
          title: "Easy Appointment Requests",
          description:
            "Request appointments online anytime — we'll confirm within hours.",
        },
        {
          icon: "Heart",
          title: "Personalized Follow-Ups",
          description:
            "Our team follows up after every visit to ensure your comfort and recovery.",
        },
        {
          icon: "MessageSquare",
          title: "Better Patient Communication",
          description:
            "Stay connected with your care team through convenient text and email updates.",
        },
      ],
    },

    // Trust Indicators
    trustIndicators: [
      { value: "15+", label: "Years of Experience" },
      { value: "5,000+", label: "Happy Patients" },
      { value: "4.9★", label: "Google Rating" },
      { value: "98%", label: "Patient Retention" },
    ],
  },

  // --- Dashboard Labels ---
  dashboard: {
    productName: "Growth Dashboard",
    welcomeMessage: "Patient Retention & Revenue Recovery",
  },
};
