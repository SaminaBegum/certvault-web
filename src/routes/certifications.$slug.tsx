import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, Calendar, CheckCircle2, Clock, Download, GraduationCap, Sparkles, Star, TrendingUp, Users } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { certifications } from "@/lib/data";
import { CertCard } from "@/components/site/CertCard";

export const Route = createFileRoute("/certifications/$slug")({
  loader: ({ params }) => {
    const c = certifications.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return { cert: c };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.cert.name} — Voucher, Training & Exam Booking | CertVault` },
      { name: "description", content: `${loaderData.cert.tagline}. Official ${loaderData.cert.provider} voucher at ₹${loaderData.cert.price}. Training, practice tests & instant exam booking.` },
    ] : [],
  }),
  component: CertDetail,
  notFoundComponent: () => (<><Header /><main className="container mx-auto px-6 py-32 text-center"><h1 className="font-display text-3xl">Certification not found</h1><Link to="/certifications" className="text-primary mt-4 inline-block">← Back to catalog</Link></main><Footer /></>),
});

function CertDetail() {
  const { cert: c } = Route.useLoaderData();
  const off = Math.round(((c.mrp - c.price) / c.mrp) * 100);
  const related = certifications.filter((x) => x.category === c.category && x.slug !== c.slug).slice(0, 4);
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={`relative bg-gradient-to-br ${c.color} text-white overflow-hidden`}>
          <div className="absolute inset-0 bg-primary-deep/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
          <div className="container mx-auto px-6 py-20 relative">
            <div className="text-xs opacity-80 mb-3"><Link to="/" className="hover:underline">Home</Link> · <Link to="/certifications" className="hover:underline">Certifications</Link> · {c.provider}</div>
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="size-16 rounded-2xl bg-white/95 grid place-items-center font-display font-bold text-primary-deep">{c.logo}</div>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-80">{c.provider} · {c.level}</div>
                    <div className="text-sm opacity-90">{c.category}</div>
                  </div>
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">{c.name}</h1>
                <p className="text-lg opacity-85 max-w-2xl">{c.tagline}</p>
                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <span className="flex items-center gap-2"><Star className="size-4 fill-gold text-gold" /> <b>{c.rating}</b> <span className="opacity-70">(4,820 reviews)</span></span>
                  <span className="flex items-center gap-2"><Users className="size-4" /> {c.enrolled.toLocaleString("en-IN")} enrolled</span>
                  <span className="flex items-center gap-2"><Clock className="size-4" /> {c.duration} of training</span>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-white text-foreground rounded-2xl p-6 shadow-elegant">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Official voucher</div>
                  <div className="flex items-baseline gap-3 mt-2">
                    <span className="font-display font-bold text-4xl text-primary-deep">₹{c.price.toLocaleString("en-IN")}</span>
                    <span className="text-sm line-through text-muted-foreground">₹{c.mrp.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="text-sm text-primary font-semibold mt-1">You save ₹{(c.mrp - c.price).toLocaleString("en-IN")} ({off}% off)</div>
                  <div className="my-5 h-px bg-border" />
                  <ul className="space-y-2.5 text-sm">
                    {["Genuine voucher · 1-year validity", "GST invoice included", "Email delivery within 2 minutes", "Free exam reschedule (1×)"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> {f}</li>
                    ))}
                  </ul>
                  <Link to="/exam-booking" className="block text-center mt-5 bg-gradient-hero text-primary-foreground py-3.5 rounded-lg font-semibold hover:scale-[1.01] transition">Buy & book exam</Link>
                  <button className="block w-full text-center mt-2 py-3 rounded-lg font-medium border border-border hover:bg-muted transition text-sm">Add to cart</button>
                  <div className="mt-4 text-[11px] text-center text-muted-foreground">🔒 Secure checkout · UPI, Cards, EMI, Net Banking</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="container mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">About this certification</h2>
              <p className="text-foreground/80 leading-relaxed">
                The {c.name} validates your ability to design, deploy, and operate {c.category.toLowerCase()} solutions using {c.provider} best practices. It is one of the most sought-after credentials in the industry — recognized by Fortune 500 enterprises and IT services leaders alike.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3">
                Our voucher comes directly from {c.provider}'s authorized partner program — 100% genuine, with full lifecycle support including rescheduling, score reports, and certificate verification.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">What you'll learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Core architecture principles", "Security & compliance", "Cost optimization", "Migration strategies", "Monitoring & observability", "Production troubleshooting"].map((t) => (
                  <div key={t} className="flex items-start gap-2.5 p-4 bg-muted/40 rounded-lg"><CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" /><span className="text-sm">{t}</span></div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Career opportunities</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { role: "Solutions Architect", sal: "₹18–32 LPA" },
                  { role: "Cloud Engineer", sal: "₹12–22 LPA" },
                  { role: "DevOps Engineer", sal: "₹14–26 LPA" },
                ].map((j) => (
                  <div key={j.role} className="p-5 border border-border rounded-xl">
                    <TrendingUp className="size-5 text-primary mb-2" />
                    <div className="font-display font-semibold">{j.role}</div>
                    <div className="text-sm text-muted-foreground">Avg. salary in India</div>
                    <div className="font-display font-bold text-xl text-primary mt-2">{j.sal}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Frequently asked</h2>
              <div className="space-y-3">
                {[
                  { q: "Is this voucher genuine?", a: "Yes — sourced directly from " + c.provider + "'s authorized partner program, with 1-year validity and full reschedule support." },
                  { q: "How fast is delivery?", a: "Within 2 minutes to your registered email, along with a GST invoice." },
                  { q: "Can I get a refund?", a: "Unused vouchers can be refunded within 7 days. Used or expired vouchers are non-refundable." },
                  { q: "Do you provide training too?", a: "Yes — bundled instructor-led training is available at a discount when you buy the voucher with us." },
                ].map((f) => (
                  <details key={f.q} className="group bg-card border border-border rounded-xl p-5">
                    <summary className="font-semibold cursor-pointer flex items-center justify-between">{f.q}<span className="text-primary group-open:rotate-45 transition">+</span></summary>
                    <p className="text-sm text-muted-foreground mt-3">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-5">
            <div className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground">
              <Sparkles className="size-6 text-gold mb-3" />
              <h3 className="font-display font-semibold text-lg">Add training & save 20%</h3>
              <p className="text-sm opacity-80 mt-2">Pair this voucher with our {c.duration} instructor-led bootcamp.</p>
              <Link to="/training" className="inline-flex items-center gap-1 mt-4 text-gold font-semibold text-sm">Bundle now <ArrowRight className="size-4" /></Link>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <Download className="size-5 text-primary mb-2" />
              <h3 className="font-display font-semibold">Download brochure</h3>
              <p className="text-sm text-muted-foreground mt-1">Full syllabus, exam objectives, sample questions.</p>
              <button className="mt-4 w-full py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-muted transition">Download PDF</button>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <BookOpen className="size-5 text-primary mb-2" />
              <h3 className="font-display font-semibold">Talk to an advisor</h3>
              <p className="text-sm text-muted-foreground mt-1">Free 15-min call to plan your certification journey.</p>
              <button className="mt-4 w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary-deep transition">Schedule a call</button>
            </div>
          </aside>
        </section>

        {related.length > 0 && (
          <section className="bg-gradient-surface py-16">
            <div className="container mx-auto px-6">
              <h2 className="font-display text-2xl font-bold mb-6">Related certifications</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {related.map((r) => <CertCard key={r.slug} c={r} />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
