import { Link } from "@tanstack/react-router";
import { Clock, Star, Users } from "lucide-react";
import type { Certification } from "@/lib/data";

export function CertCard({ c }: { c: Certification }) {
  const off = Math.round(((c.mrp - c.price) / c.mrp) * 100);
  return (
    <Link to="/certifications/$slug" params={{ slug: c.slug }} className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
      <div className={`relative h-32 bg-gradient-to-br ${c.color} p-5 flex items-start justify-between`}>
        <div className="text-white">
          <div className="text-[11px] uppercase tracking-wider opacity-80">{c.provider}</div>
          <div className="mt-1 text-xs px-2 py-0.5 rounded-full bg-white/20 inline-block backdrop-blur">{c.level}</div>
        </div>
        <div className="size-14 rounded-xl bg-white/95 grid place-items-center font-display font-bold text-sm text-primary-deep shadow-md">
          {c.logo}
        </div>
        <div className="absolute bottom-3 right-4 text-[10px] uppercase tracking-wider text-white/80">{c.category}</div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-base leading-snug group-hover:text-primary transition line-clamp-2 min-h-[2.6rem]">
          {c.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-2 line-clamp-1">{c.tagline}</p>

        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Star className="size-3 fill-gold text-gold" /> {c.rating}</span>
          <span className="flex items-center gap-1"><Users className="size-3" /> {(c.enrolled / 1000).toFixed(1)}k</span>
          <span className="flex items-center gap-1"><Clock className="size-3" /> {c.duration}</span>
        </div>

        <div className="flex items-end justify-between mt-4 pt-4 border-t border-border">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-xl text-primary-deep">₹{c.price.toLocaleString("en-IN")}</span>
              <span className="text-xs line-through text-muted-foreground">₹{c.mrp.toLocaleString("en-IN")}</span>
            </div>
            <div className="text-[11px] text-primary font-semibold mt-0.5">Save ₹{(c.mrp - c.price).toLocaleString("en-IN")} ({off}% off)</div>
          </div>
          <span className="text-xs font-medium text-primary group-hover:translate-x-0.5 transition">View →</span>
        </div>
      </div>
    </Link>
  );
}
