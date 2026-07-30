import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:py-20">
        <div className="aetherflow-glow absolute inset-0" aria-hidden="true" />
        <div className="aetherflow-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Put your busywork on autopilot
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Join thousands of teams automating with AetherFlow. Build your first
            agent workflow in minutes — free to start.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full shadow-[0_0_28px_-6px] shadow-primary/60 sm:w-auto">
              <Link href="/chat">
                Start building free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Talk to sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
