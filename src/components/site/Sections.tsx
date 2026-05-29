import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, Briefcase, Calendar, CheckCircle2, GraduationCap, MessageSquare, ShieldCheck, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { categories, certifications, providers, testimonials } from "@/lib/data";
import { CertCard } from "./CertCard";

export function CategoryStrip() {
  const icons = [Sparkles, ShieldCheck, Zap, Briefcase, GraduationCap, TrendingUp, BookOpen, Award, Users];
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Browse by domain</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Find your next credential</h2>
        </div>
        <Link to="/certifications" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">View all <ArrowRight className="size-4" /></Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3">
        {categories.map((cat, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Link key={cat} to="/certifications" className="group bg-card border border-border rounded-xl p-4 hover:border-primary hover:shadow-elegant hover:-translate-y-0.5 transition-all">
              <div className="size-10 rounded-lg bg-gradient-hero grid place-items-center mb-3 group-hover:scale-110 transition">
                <Icon className="size-5 text-primary-foreground" />
              </div>
              <div className="font-semibold text-sm leading-tight">{cat}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{Math.floor(Math.random() * 40 + 20)} certs</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function FeaturedCerts() {
  return (
    <section className="bg-gradient-surface py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Top-selling vouchers</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 max-w-xl">Discounted certifications professionals are buying this week</h2>
          </div>
          <Link to="/certifications" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">All certifications <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certifications.slice(0, 8).map((c) => <CertCard key={c.slug} c={c} />)}
        </div>
      </div>
    </section>
  );
}

export function ProvidersGrid() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Authorized partners</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">30+ global certification bodies. One marketplace.</h2>
        <p className="text-muted-foreground mt-3">Direct partnerships mean genuine vouchers, best prices, and full lifecycle support.</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {providers.map((p) => (
          <div key={p} className="aspect-[3/2] bg-card border border-border rounded-xl grid place-items-center hover:border-primary hover:shadow-elegant transition group">
            <span className="font-display font-bold text-sm md:text-base text-foreground/80 group-hover:text-primary transition text-center px-2">{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrainingSection() {
  const items = [
    { icon: GraduationCap, title: "Instructor-Led Training", desc: "Live cohorts with industry mentors, weekend & weekday batches.", price: "From ₹12,000" },
    { icon: Users, title: "Corporate Training", desc: "Dedicated batches for your team — onsite, virtual, or hybrid.", price: "Custom quote" },
    { icon: Zap, title: "Exam Bootcamps", desc: "Intensive 5-day programs designed to pass on first attempt.", price: "From ₹18,500" },
    { icon: BookOpen, title: "Self-Paced Tracks", desc: "On-demand video courses, labs, and unlimited practice tests.", price: "From ₹3,200" },
  ];
  return (
    <section className="bg-primary-deep text-primary-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,168,76,0.15),transparent_50%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Training Academy</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Premium training that gets you<br /><span className="text-gradient-gold">certified the first time.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-primary-foreground/75 text-lg leading-relaxed">
              400+ vetted mentors. Curated curriculum reviewed by the certification bodies themselves. 94% first-attempt pass rate across cohorts.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="glass-dark rounded-2xl p-6 hover:scale-[1.02] transition group">
              <div className="size-12 rounded-xl bg-gradient-gold grid place-items-center mb-4">
                <it.icon className="size-6 text-primary-deep" />
              </div>
              <h3 className="font-display font-semibold text-lg">{it.title}</h3>
              <p className="text-sm text-primary-foreground/70 mt-2 leading-relaxed">{it.desc}</p>
              <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gold font-semibold">{it.price}</span>
                <ArrowRight className="size-4 text-gold group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookingSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Exam booking</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Book your exam in <span className="text-primary">under 60 seconds.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real-time slots across Pearson VUE and PSI centers in 38 cities. Online proctored exams 24×7. Reschedule with one click — no penalties up to 48h.
          </p>
          <ul className="space-y-3">
            {[
              "300+ testing centers across India",
              "Online proctored from home / office",
              "Instant slot confirmation via email & WhatsApp",
              "Free rescheduling up to 48 hours before",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3"><CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" /> <span>{f}</span></li>
            ))}
          </ul>
          <div className="flex gap-3 pt-2">
            <Link to="/exam-booking" className="inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground px-6 py-3.5 rounded-lg font-semibold shadow-elegant hover:scale-[1.02] transition">
              Book exam now <ArrowRight className="size-4" />
            </Link>
            <Link to="/exam-booking" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium border border-border hover:bg-muted transition">
              Find a center
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-hero rounded-3xl opacity-10 blur-3xl" />
          <div className="relative bg-card border border-border rounded-2xl p-6 shadow-elegant">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-xs text-muted-foreground">Step 2 of 3</div>
                <div className="font-display font-semibold text-lg">Select a testing center</div>
              </div>
              <Calendar className="size-5 text-primary" />
            </div>
            <input className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm mb-4" placeholder="Search by city or pincode…" defaultValue="Bengaluru, 560001" />
            <div className="space-y-2.5">
              {[
                { name: "Pearson VUE — Indiranagar", dist: "2.4 km", slots: "12 slots today" },
                { name: "PSI — Koramangala", dist: "4.1 km", slots: "8 slots today" },
                { name: "Pearson VUE — Whitefield", dist: "11.6 km", slots: "5 slots today" },
              ].map((c, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-lg border ${i === 0 ? "border-primary bg-primary/5" : "border-border"} hover:border-primary transition cursor-pointer`}>
                  <div>
                    <div className="font-semibold text-sm">{c.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.dist} · {c.slots}</div>
                  </div>
                  <div className={`size-5 rounded-full border-2 ${i === 0 ? "border-primary bg-primary" : "border-border"}`} />
                </div>
              ))}
            </div>
            <button className="w-full mt-5 bg-gradient-hero text-primary-foreground py-3 rounded-lg font-semibold">Continue to slot selection</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  const stats = [
    { v: "1.2L+", l: "Vouchers issued" },
    { v: "240+", l: "Enterprise clients" },
    { v: "94%", l: "First-attempt pass rate" },
    { v: "4.9★", l: "Avg. rating · 32k reviews" },
  ];
  return (
    <section className="bg-gradient-gold">
      <div className="container mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center text-primary-deep">
            <div className="font-display font-bold text-4xl md:text-5xl">{s.v}</div>
            <div className="text-sm mt-1 font-medium opacity-80">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What our learners say</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Loved by India's most ambitious engineers</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-elegant transition">
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="text-gold">★</span>)}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border">
              <img src={t.img} alt={t.name} className="size-10 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CorporateCTA() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,168,76,0.2),transparent_50%)]" />
        <div className="relative grid lg:grid-cols-12 gap-8 items-center text-primary-foreground">
          <div className="lg:col-span-8 space-y-5">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Enterprise solutions</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Certify your entire team.<br />
              <span className="text-gradient-gold">Without the operational overhead.</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-xl">
              Dedicated success manager, GST-compliant bulk invoicing, custom learning paths, and audit-ready certification tracking. Used by 240+ enterprises across India.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link to="/corporate" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-deep px-6 py-3.5 rounded-lg font-semibold shadow-gold hover:scale-[1.02] transition">
                Request enterprise demo <ArrowRight className="size-4" />
              </Link>
              <Link to="/success-stories" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium border border-white/25 hover:bg-white/10 transition">
                See case studies
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            {[
              { v: "240+", l: "Enterprises" },
              { v: "92%", l: "Completion" },
              { v: "₹2.4Cr", l: "Saved in vouchers" },
              { v: "24×7", l: "Support" },
            ].map((s) => (
              <div key={s.l} className="glass-dark rounded-xl p-5">
                <div className="font-display font-bold text-2xl text-gold">{s.v}</div>
                <div className="text-xs opacity-75 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FloatingActions() {
  return (
    <>
      <a href="https://wa.me/911800123000" className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-elegant hover:scale-110 transition" aria-label="WhatsApp">
        <MessageSquare className="size-6" />
      </a>
    </>
  );
}
