import { Workflow, Boxes, ShieldCheck, Gauge, GitBranch, Plug } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Visual agent builder",
    description:
      "Drag, connect, and branch AI agents on a canvas. Ship complex automations without writing a line of glue code.",
  },
  {
    icon: Plug,
    title: "200+ integrations",
    description:
      "Connect Slack, Notion, Linear, your database, and any REST API. AetherFlow speaks to the tools you already run on.",
  },
  {
    icon: GitBranch,
    title: "Conditional logic",
    description:
      "Route work with branches, loops, and human-in-the-loop approvals so agents make the right call every time.",
  },
  {
    icon: Gauge,
    title: "Real-time observability",
    description:
      "Trace every run step by step. See tokens, latency, and outcomes so you always know what your agents are doing.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description:
      "SOC 2 Type II, SSO, and granular permissions. Your data stays encrypted in transit and at rest.",
  },
  {
    icon: Boxes,
    title: "Reusable templates",
    description:
      "Start from battle-tested workflow blueprints for support, ops, and research, then customize to fit your stack.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Features</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to run agents in production
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            From the first prototype to millions of runs, AetherFlow gives you the
            building blocks to automate with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
