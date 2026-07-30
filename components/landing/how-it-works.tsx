import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Design your flow",
    description:
      "Sketch the automation on a visual canvas. Add agents, tools, and triggers, then connect them into a pipeline.",
  },
  {
    step: "02",
    title: "Connect your tools",
    description:
      "Authenticate the apps and data sources your agents need. AetherFlow handles credentials and rate limits for you.",
  },
  {
    step: "03",
    title: "Deploy & monitor",
    description:
      "Ship to production with one click. Watch runs live, get alerts on failures, and iterate without downtime.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-primary">How it works</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              From idea to live automation in three steps
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              AetherFlow removes the infrastructure work so you can focus on the
              outcomes. No servers to manage, no pipelines to babysit.
            </p>

            <ol className="mt-10 space-y-8">
              {steps.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-sm text-primary">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
              <Image
                src="/aetherflow/hero-wave.png"
                alt="Flowing streams of light representing an AetherFlow automation pipeline"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
