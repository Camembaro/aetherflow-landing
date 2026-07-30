import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="aetherflow-grid absolute inset-0" aria-hidden="true" />
      <div className="aetherflow-glow absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="size-3.5 text-primary" />
          <span>Now with autonomous multi-step agents</span>
        </div>

        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Automate the busywork with{" "}
          <span className="text-primary">AI agents that flow</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          AetherFlow lets your team design, deploy, and run autonomous AI workflows
          that connect every tool you use — no glue code, no babysitting.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full shadow-[0_0_28px_-6px] shadow-primary/60 sm:w-auto">
            <Link href="/chat">
              Start building free
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Book a demo
          </Button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          No credit card required · Free for up to 3 workflows
        </p>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="pointer-events-none absolute -inset-x-8 -top-8 h-40 bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
            <Image
              src="/aetherflow/dashboard.png"
              alt="AetherFlow visual workflow builder showing connected AI agent nodes"
              width={1600}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
