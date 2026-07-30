const companies = ["Northwind", "Cortexa", "Lumen", "Vantel", "Hexline", "Orbital"];

export function LogoCloud() {
  return (
    <section className="border-y border-border/60 bg-background/40 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          Powering automation at fast-moving teams
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
