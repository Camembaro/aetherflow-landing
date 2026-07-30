import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Stats } from "@/components/landing/stats";
import { Pricing } from "@/components/landing/pricing";
import { CtaSection } from "@/components/landing/cta-section";
import { SiteFooter } from "@/components/landing/site-footer";

export const metadata: Metadata = {
  title: "AetherFlow — Autonomous AI workflow automation",
  description:
    "AetherFlow lets teams design, deploy, and run autonomous AI agent workflows that automate the busywork across every tool you use.",
};

export default function LandingPage() {
  return (
    <div className="aetherflow min-h-screen font-sans antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
