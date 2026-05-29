import { useEffect, useState } from "react";
import { ArrowRight, Award, Calendar, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Slide = {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  cta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  badge?: string;
  image: string;
  stats: { icon: typeof Award; label: string; value: string }[];
};

const slides: Slide[] = [
  {
    eyebrow: "Limited-time bundle",
    title: "Save up to 50% on",
    highlight: "global certification exams",
    subtitle: "Official AWS, Microsoft, Cisco & Google vouchers — lowest price in India, guaranteed.",
    cta: { label: "Browse vouchers", to: "/certifications" },
    secondaryCta: { label: "Talk to an advisor", to: "/contact" },
    badge: "50% OFF",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&h=1100&fit=crop",
    stats: [
      { icon: Award, label: "Vouchers issued", value: "1.2L+" },
      { icon: ShieldCheck, label: "Official partners", value: "30+" },
      { icon: TrendingUp, label: "Avg. savings", value: "₹4,800" },
    ],
  },
  {
    eyebrow: "Official partner",
    title: "Authentic vouchers for",
    highlight: "AWS, Azure & Cisco",
    subtitle: "100% genuine, instantly delivered to your inbox with GST invoice and lifetime validity support.",
    cta: { label: "Buy a voucher", to: "/certifications" },
    secondaryCta: { label: "Verify authenticity", to: "/about" },
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=1100&fit=crop",
    stats: [
      { icon: ShieldCheck, label: "Genuine", value: "100%" },
      { icon: Zap, label: "Delivery", value: "< 2 min" },
      { icon: Users, label: "Professionals served", value: "180k+" },
    ],
  },
  {
    eyebrow: "Instant booking",
    title: "Book your exam in",
    highlight: "under 60 seconds",
    subtitle: "Pearson VUE & PSI testing centers in 38 cities. Online proctored slots available 24×7.",
    cta: { label: "Book exam now", to: "/exam-booking" },
    secondaryCta: { label: "Find a center", to: "/exam-booking" },
    badge: "24/7 slots",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=1100&fit=crop",
    stats: [
      { icon: Calendar, label: "Cities covered", value: "38" },
      { icon: Zap, label: "Avg. booking time", value: "47s" },
      { icon: Award, label: "Success rate", value: "94%" },
    ],
  },
  {
    eyebrow: "For enterprises",
    title: "Corporate training that",
    highlight: "actually moves metrics",
    subtitle: "Custom learning paths, dedicated success managers, and audit-ready certificate tracking for 240+ enterprises.",
    cta: { label: "Talk to sales", to: "/corporate" },
    secondaryCta: { label: "See case studies", to: "/success-stories" },
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=1100&fit=crop",
    stats: [
      { icon: Users, label: "Enterprises", value: "240+" },
      { icon: TrendingUp, label: "Avg. completion", value: "92%" },
      { icon: Award, label: "Skills tracked", value: "600+" },
    ],
  },
  {
    eyebrow: "Career velocity",
    title: "Get certified",
    highlight: "2× faster",
    subtitle: "AI-personalized study plans, live bootcamps, and unlimited practice tests — the fastest path to certified.",
    cta: { label: "Start learning", to: "/training" },
    secondaryCta: { label: "Take a free test", to: "/resources" },
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=1100&fit=crop",
    stats: [
      { icon: Sparkles, label: "Pass rate", value: "94%" },
      { icon: Zap, label: "Avg. time", value: "6 wks" },
      { icon: Users, label: "Mentors", value: "400+" },
    ],
  },
  {
    eyebrow: "Loved by India",
    title: "Trusted by",
    highlight: "180,000+ professionals",
    subtitle: "From TCS to Flipkart — India's most ambitious engineers level up here.",
    cta: { label: "Read reviews", to: "/testimonials" },
    secondaryCta: { label: "Join them", to: "/signup" },
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1600&h=1100&fit=crop",
    stats: [
      { icon: Users, label: "Learners", value: "180k+" },
      { icon: Award, label: "Avg. rating", value: "4.9★" },
      { icon: ShieldCheck, label: "Verified reviews", value: "32k" },
    ],
  },
  {
    eyebrow: "Pan-India · Global",
    title: "Global certifications.",
    highlight: "Local support.",
    subtitle: "Hindi, Tamil, Telugu & English support. UPI, EMI, GST invoicing. Built for India.",
    cta: { label: "Explore catalog", to: "/certifications" },
    secondaryCta: { label: "Pricing in ₹", to: "/certifications" },
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&h=1100&fit=crop",
    stats: [
      { icon: Users, label: "Languages", value: "4" },
      { icon: Zap, label: "Payment modes", value: "12+" },
      { icon: ShieldCheck, label: "GST invoice", value: "Auto" },
    ],
  },
  {
    eyebrow: "One platform",
    title: "Exams, training &",
    highlight: "career growth — unified",
    subtitle: "Stop juggling tabs. Buy vouchers, book exams, train with mentors, and track certificates — all in one place.",
    cta: { label: "See how it works", to: "/about" },
    secondaryCta: { label: "Create free account", to: "/signup" },
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=1100&fit=crop",
    stats: [
      { icon: Sparkles, label: "Surfaces", value: "All-in-one" },
      { icon: Award, label: "Certificates managed", value: "240k+" },
      { icon: TrendingUp, label: "NPS", value: "72" },
    ],
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background image */}
      <div className="absolute inset-0">
        {slides.map((sl, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: idx === i ? 1 : 0 }}
          >
            <img src={sl.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 to-primary-deep/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.18),transparent_45%)]" />
          </div>
        ))}
      </div>

      {/* Floating certification badges */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {["AWS", "Azure", "Cisco", "PMI", "K8s", "GCP"].map((b, idx) => (
          <div
            key={b}
            className="absolute glass-dark rounded-2xl px-3 py-2 text-xs font-semibold text-primary-foreground animate-fade-up"
            style={{
              top: `${15 + (idx % 3) * 25}%`,
              right: `${4 + Math.floor(idx / 3) * 8}%`,
              animationDelay: `${idx * 0.15}s`,
            }}
          >
            <span className="text-gold">●</span> {b} Partner
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-6 py-20 md:py-28 lg:py-36 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-primary-foreground space-y-7">
          <div key={`eyebrow-${i}`} className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-dark text-xs font-medium">
            <Sparkles className="size-3.5 text-gold" />
            <span>{s.eyebrow}</span>
            {s.badge && <span className="ml-1 px-2 py-0.5 rounded-full bg-gradient-gold text-primary-deep font-bold">{s.badge}</span>}
          </div>

          <h1 key={`title-${i}`} className="animate-fade-up font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            {s.title}<br />
            <span className="text-gradient-gold">{s.highlight}</span>
          </h1>

          <p key={`sub-${i}`} className="animate-fade-up text-base md:text-lg text-primary-foreground/85 max-w-xl leading-relaxed" style={{ animationDelay: "0.1s" }}>
            {s.subtitle}
          </p>

          <div key={`cta-${i}`} className="animate-fade-up flex flex-wrap items-center gap-3" style={{ animationDelay: "0.2s" }}>
            <Link to={s.cta.to} className="group inline-flex items-center gap-2 bg-gradient-gold text-primary-deep px-6 py-3.5 rounded-lg font-semibold shadow-gold hover:scale-[1.02] transition">
              {s.cta.label}
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </Link>
            <Link to={s.secondaryCta.to} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium border border-white/25 hover:bg-white/10 transition">
              {s.secondaryCta.label}
            </Link>
          </div>

          {/* Stats */}
          <div key={`stats-${i}`} className="animate-fade-up grid grid-cols-3 gap-3 pt-6 max-w-lg" style={{ animationDelay: "0.3s" }}>
            {s.stats.map((st) => (
              <div key={st.label} className="glass-dark rounded-xl p-3.5">
                <st.icon className="size-4 text-gold mb-1.5" />
                <div className="font-display font-bold text-xl leading-none">{st.value}</div>
                <div className="text-[11px] opacity-75 mt-1">{st.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side floating card */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="relative">
            <div className="glass-dark rounded-2xl p-6 shadow-elegant animate-fade-up">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-primary-foreground/60 uppercase tracking-wider">Today's deal</div>
                  <div className="text-primary-foreground font-display font-bold text-lg mt-0.5">AWS Solutions Architect</div>
                </div>
                <div className="size-12 rounded-xl bg-gradient-gold grid place-items-center font-display font-bold text-primary-deep">AWS</div>
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display font-bold text-3xl text-gold">₹8,400</span>
                <span className="text-sm line-through text-primary-foreground/50">₹12,500</span>
                <span className="text-xs px-2 py-1 rounded-md bg-gold/20 text-gold font-semibold">33% OFF</span>
              </div>
              <div className="space-y-2.5 text-sm text-primary-foreground/80 mb-5">
                {["Official Pearson VUE voucher", "Free 40-hour bootcamp included", "GST invoice + 1-year validity"].map((f) => (
                  <div key={f} className="flex items-center gap-2"><span className="text-gold">✓</span> {f}</div>
                ))}
              </div>
              <Link to="/exam-booking" className="block text-center bg-gradient-gold text-primary-deep py-3 rounded-lg font-semibold hover:scale-[1.01] transition">
                Grab this deal
              </Link>
              <div className="mt-3 text-center text-[11px] text-primary-foreground/60">⏱ Offer ends in 14h 22m</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        <button onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)} className="size-9 grid place-items-center rounded-full glass-dark text-primary-foreground hover:bg-gold hover:text-primary-deep transition" aria-label="Previous">
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-1.5 bg-white/40"}`} />
          ))}
        </div>
        <button onClick={() => setI((p) => (p + 1) % slides.length)} className="size-9 grid place-items-center rounded-full glass-dark text-primary-foreground hover:bg-gold hover:text-primary-deep transition" aria-label="Next">
          <ChevronRight className="size-4" />
        </button>
      </div>
    </section>
  );
}
