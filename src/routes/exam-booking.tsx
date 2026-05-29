import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, CheckCircle2, ChevronRight, Clock, MapPin, Monitor, Search } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/exam-booking")({
  head: () => ({
    meta: [
      { title: "Book Your Certification Exam — Pearson VUE & PSI Centers | CertVault" },
      { name: "description", content: "Book AWS, Azure, Cisco & 200+ certification exams. 300+ centers across India, online proctored 24×7. Confirmed in 60 seconds." },
    ],
  }),
  component: BookingPage,
});

const steps = ["Choose exam", "Select mode", "Pick a slot", "Confirm"];

function BookingPage() {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<"center" | "online">("center");

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-hero text-primary-foreground py-14">
          <div className="container mx-auto px-6">
            <h1 className="font-display text-3xl md:text-5xl font-bold">Book your exam</h1>
            <p className="opacity-80 mt-2 max-w-xl">Real-time slots across Pearson VUE & PSI. Confirmed by email & WhatsApp instantly.</p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12 grid lg:grid-cols-12 gap-8">
          {/* Stepper */}
          <aside className="lg:col-span-3">
            <ol className="space-y-1">
              {steps.map((s, i) => (
                <li key={s}>
                  <button onClick={() => setStep(i)} className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition ${i === step ? "bg-primary text-primary-foreground" : i < step ? "text-foreground" : "text-muted-foreground"} hover:bg-muted/60 ${i === step && "hover:bg-primary"}`}>
                    <span className={`size-7 rounded-full grid place-items-center text-xs font-bold ${i === step ? "bg-gold text-primary-deep" : i < step ? "bg-primary text-primary-foreground" : "bg-muted"}`}>{i < step ? "✓" : i + 1}</span>
                    <span className="font-medium text-sm">{s}</span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="mt-8 p-5 bg-muted/40 rounded-xl">
              <Clock className="size-5 text-primary mb-2" />
              <div className="font-display font-semibold text-sm">Need help?</div>
              <p className="text-xs text-muted-foreground mt-1">Our exam advisors are available 24×7</p>
              <a href="tel:18001230000" className="text-primary font-semibold text-sm mt-2 inline-block">1800-123-000</a>
            </div>
          </aside>

          {/* Main */}
          <div className="lg:col-span-9">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant min-h-[500px]">
              {step === 0 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-bold">Which exam are you booking?</h2>
                    <p className="text-muted-foreground text-sm mt-1">Search by certification name or exam code.</p>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <input defaultValue="AWS Solutions Architect — Associate (SAA-C03)" className="w-full bg-muted/40 border border-border rounded-lg pl-12 pr-4 py-3.5 text-sm" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["AWS SAA-C03", "Azure AZ-104", "CCNA 200-301", "PMP", "CISSP", "Security+"].map((e) => (
                      <button key={e} className="text-left px-4 py-3 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-sm font-medium">{e}</button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold">Choose your exam mode</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: "center" as const, icon: MapPin, t: "At a testing center", d: "Pearson VUE & PSI · 38 cities · 300+ locations", b: "Most popular" },
                      { id: "online" as const, icon: Monitor, t: "Online proctored", d: "From home or office · 24×7 availability · live invigilation", b: "Convenient" },
                    ].map((m) => (
                      <button key={m.id} onClick={() => setMode(m.id)} className={`text-left p-6 rounded-xl border-2 transition ${mode === m.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                        <div className="flex items-center justify-between mb-3">
                          <m.icon className="size-6 text-primary" />
                          <span className="text-[10px] uppercase tracking-wider bg-gold/20 text-primary-deep px-2 py-0.5 rounded-full font-semibold">{m.b}</span>
                        </div>
                        <div className="font-display font-semibold text-lg">{m.t}</div>
                        <p className="text-sm text-muted-foreground mt-1">{m.d}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold">Pick your slot</h2>
                  <div className="grid grid-cols-7 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
                      <button key={d} className={`p-3 rounded-lg border text-center transition ${i === 2 ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>
                        <div className="text-[10px] uppercase">{d}</div>
                        <div className="font-display font-bold text-lg mt-1">{12 + i}</div>
                      </button>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 mt-4">Available times</div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30", "20:00"].map((t, i) => (
                        <button key={t} className={`py-3 rounded-lg border text-sm font-medium transition ${i === 3 ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary"}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <div className="size-14 rounded-full bg-primary/10 text-primary grid place-items-center"><CheckCircle2 className="size-7" /></div>
                  <h2 className="font-display text-2xl font-bold">Confirm your booking</h2>
                  <div className="bg-muted/40 rounded-xl p-5 space-y-3 text-sm">
                    <Row k="Exam" v="AWS Solutions Architect — Associate (SAA-C03)" />
                    <Row k="Mode" v={mode === "center" ? "At testing center" : "Online proctored"} />
                    <Row k="Center" v="Pearson VUE — Indiranagar, Bengaluru" />
                    <Row k="Date & time" v="Wed, 14 Aug 2026 · 14:00 IST" />
                    <Row k="Voucher price" v="₹8,400" />
                    <div className="h-px bg-border" />
                    <Row k="Total" v="₹8,400" bold />
                  </div>
                  <button className="w-full bg-gradient-hero text-primary-foreground py-3.5 rounded-lg font-semibold">Pay & confirm booking</button>
                </div>
              )}

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted disabled:opacity-40 transition">Back</button>
                <button onClick={() => setStep((s) => Math.min(3, s + 1))} disabled={step === 3} className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-deep disabled:opacity-40 transition">Continue <ChevronRight className="size-4" /></button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{k}</span>
      <span className={bold ? "font-display font-bold text-base text-primary-deep" : "font-medium"}>{v}</span>
    </div>
  );
}
