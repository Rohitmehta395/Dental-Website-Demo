import { Inter } from "next/font/google";
import "./globals.css";
import { clinicConfig } from "@/constants/clinic-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: `${clinicConfig.name} — ${clinicConfig.tagline}`,
  description: clinicConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-full w-full font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
