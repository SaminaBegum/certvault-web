import { trustLogos } from "@/lib/data";

export function TrustBar() {
  const logos = [...trustLogos, ...trustLogos];
  return (
    <section className="bg-surface border-y border-border/60 py-8 overflow-hidden">
      <div className="container mx-auto px-6 mb-5">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          Trusted by L&D teams at India's top enterprises
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
        <div className="flex marquee gap-12 whitespace-nowrap">
          {logos.map((l, i) => (
            <div key={i} className="font-display font-bold text-xl text-muted-foreground/70 hover:text-primary transition shrink-0">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
