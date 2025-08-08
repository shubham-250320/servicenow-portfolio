import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shubham Soni | ServiceNow AI/ML Engineer & Developer Portfolio",
  description:
    "Portfolio of Shubham Soni, a certified ServiceNow AI/ML Engineer with 3.6+ years of experience delivering enterprise-grade automation, AI Search, Virtual Agent, and predictive intelligence solutions for Fortune 500 companies.",
  keywords: [
    "Shubham Soni",
    "ServiceNow Developer",
    "ServiceNow AI/ML Engineer",
    "Virtual Agent",
    "AI Search",
    "Predictive Intelligence",
    "Automation",
    "ITSM",
    "Portfolio",
  ],
  authors: [{ name: "Shubham Soni" }],
  openGraph: {
    title: "Shubham Soni | ServiceNow AI/ML Engineer & Developer Portfolio",
    description:
      "Certified ServiceNow AI/ML Engineer specializing in enterprise automation, AI Search, Virtual Agent, and predictive intelligence. View my work, projects, and career achievements.",
    url: "https://your-portfolio-domain.com",
    siteName: "Shubham Soni Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
