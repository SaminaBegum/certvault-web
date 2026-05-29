import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Building2, CheckCircle2, FileText, Users } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Training & Certification — Enterprise Plans | CertVault" },
      { name: "description", content: "Certify your entire team. Bulk vouchers, custom learning paths, dedicated success manager. Trusted by 240+ enterprises." },
    ],
  }),
  component: Corporate,
});

function Corporate() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-hero text-primary-foreground py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Enterprise solutions</div>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">Certify your team. <span className="text-gradient-gold">Without the chaos.</span></h1>
              <p className="opacity-85 text-lg max-w-xl">Bulk vouchers, GST-compliant invoicing, custom learning paths, and a dedicated success manager. 240+ enterprises trust us.</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-deep px-6 py-3.5 rounded-lg font-semibold shadow-gold hover:scale-[1.02] transition">Request enterprise demo <ArrowRight className="size-4" /></a>
            </div>
            <div className="lg:col-span-5">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=900&fit=crop" alt="Corporate training" className="rounded-2xl shadow-elegant" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { icon: Building2, t: "240+ Enterprises", d: "From series-A startups to Fortune 500 GCCs" },
              { icon: Users, t: "60,000+ Engineers", d: "Trained across 30+ certification domains" },
              { icon: BarChart3, t: "92% Completion", d: "Industry-leading engagement on cohorts" },
              { icon: FileText, t: "GST-Ready", d: "Bulk invoicing, PO support, MSA contracts" },
            ].map((f) => (
              <div key={f.t} className="bg-card border border-border rounded-2xl p-6">
                <div className="size-12 rounded-xl bg-gradient-hero grid place-items-center mb-4"><f.icon className="size-6 text-primary-foreground" /></div>
                <div className="font-display font-bold text-xl">{f.t}</div>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container mx-auto px-6 pb-24">
          <div className="bg-card border border-border rounded-3xl p-10 grid lg:grid-cols-2 gap-10 shadow-elegant">
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-bold">Get a custom quote</h2>
              <p className="text-muted-foreground">Tell us about your team. We'll respond within 4 business hours with a tailored proposal.</p>
              <ul className="space-y-2 pt-2">
                {["Volume discounts from 10 vouchers", "Dedicated CSM & onboarding", "Custom-branded learning portal", "Audit-ready certificate tracking"].map((x) => (
                  <li key={x} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 text-primary" /> {x}</li>
                ))}
              </ul>
            </div>
            <form className="space-y-3">
              <input className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Full name" />
              <input className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Work email" />
              <input className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Company name" />
              <div className="grid grid-cols-2 gap-3">
                <input className="bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Team size" />
                <select className="bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm">
                  <option>Cloud certifications</option><option>Cybersecurity</option><option>DevOps</option><option>Project management</option><option>Multiple</option>
                </select>
              </div>
              <textarea className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm min-h-[100px]" placeholder="Tell us about your goals…" />
              <button type="button" className="w-full bg-gradient-hero text-primary-foreground py-3.5 rounded-lg font-semibold">Request proposal</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
