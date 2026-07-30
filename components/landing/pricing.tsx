import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "For individuals exploring their first automations.",
    features: ["3 active workflows", "1,000 runs / month", "Community support", "Core integrations"],
    cta: "Get started",
    href: "/chat",
    featured: false,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    description: "For growing teams shipping agents to production.",
    features: [
      "Unlimited workflows",
      "100,000 runs / month",
      "Priority support",
      "All integrations",
      "Real-time observability",
    ],
    cta: "Start free trial",
    href: "/chat",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with security and scale needs.",
    features: ["Unlimited runs", "SSO & SAML", "Dedicated support", "SOC 2 & DPA", "On-prem options"],
    cta: "Contact sales",
    href: "/chat",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Pricing</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, usage-based pricing
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Start free and scale as your automations grow. No hidden fees.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.featured
                  ? "border-primary/50 bg-card shadow-[0_0_40px_-12px] shadow-primary/40"
                  : "border-border bg-card"
              }`}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-lg font-medium">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-8 w-full"
                variant={tier.featured ? "default" : "outline"}
              >
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
