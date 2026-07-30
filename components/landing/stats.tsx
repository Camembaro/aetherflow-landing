const stats = [
  { value: "12M+", label: "Workflow runs / month" },
  { value: "99.98%", label: "Platform uptime" },
  { value: "4.9/5", label: "Average customer rating" },
  { value: "60%", label: "Avg. time saved on ops" },
];

export function Stats() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-card">
          <dl className="grid grid-cols-2 divide-border lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-8 text-center ${i < stats.length - 1 ? "border-b border-border lg:border-b-0 lg:border-r" : ""} ${i % 2 === 0 ? "border-r border-border lg:border-r" : ""}`}
              >
                <dt className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="mx-auto mt-16 max-w-3xl text-center">
          <blockquote className="text-balance text-xl font-medium leading-relaxed sm:text-2xl">
            &ldquo;AetherFlow replaced a dozen brittle scripts and two internal tools.
            Our ops team now ships automations in an afternoon instead of a sprint.&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Mara Ellison</span> · VP of
            Operations, Cortexa
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
