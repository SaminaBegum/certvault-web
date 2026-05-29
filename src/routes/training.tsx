import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, GraduationCap, Users, Zap } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Premium Certification Training — Bootcamps & Mentorship | CertVault" },
      { name: "description", content: "Live cohorts, expert mentors, 94% first-attempt pass rate. AWS, Azure, GCP, DevOps, Cybersecurity bootcamps." },
    ],
  }),
  component: Training,
});

const tracks = [
  { name: "AWS Solutions Architect Bootcamp", weeks: "6 weeks", cohort: "Aug 18", seats: "12 of 30 left", price: "₹22,500" },
  { name: "Azure Administrator Mastery", weeks: "5 weeks", cohort: "Aug 25", seats: "8 of 25 left", price: "₹19,800" },
  { name: "CKA — Kubernetes Bootcamp", weeks: "4 weeks", cohort: "Sep 2", seats: "15 of 25 left", price: "₹21,200" },
  { name: "CISSP Exam Prep Intensive", weeks: "8 weeks", cohort: "Sep 9", seats: "6 of 20 left", price: "₹38,500" },
  { name: "PMP Boot Camp", weeks: "5 weeks", cohort: "Aug 22", seats: "11 of 30 left", price: "₹28,000" },
  { name: "DevOps Engineer Track", weeks: "10 weeks", cohort: "Sep 5", seats: "18 of 30 left", price: "₹34,500" },
];

function Training() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Training Academy</div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 leading-tight">Premium training that gets you <span className="text-gradient-gold">certified the first time.</span></h1>
            <p className="opacity-85 mt-4 text-lg">400+ vetted mentors. 94% first-attempt pass rate. Live cohorts every two weeks.</p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[{ icon: GraduationCap, t: "Instructor-Led" }, { icon: Users, t: "Corporate" }, { icon: Zap, t: "Bootcamps" }, { icon: Calendar, t: "Self-Paced" }].map((f) => (
              <div key={f.t} className="p-5 bg-card border border-border rounded-xl flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 grid place-items-center"><f.icon className="size-5 text-primary" /></div>
                <span className="font-semibold">{f.t}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mb-6">Upcoming cohorts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tracks.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-elegant transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">{t.weeks}</span>
                  <span className="text-xs text-muted-foreground">{t.seats}</span>
                </div>
                <h3 className="font-display font-semibold text-lg mt-4 leading-snug">{t.name}</h3>
                <div className="mt-3 text-sm text-muted-foreground">Next cohort: <span className="font-semibold text-foreground">{t.cohort}</span></div>
                <div className="flex items-center justify-between mt-5 pt-5 border-t border-border">
                  <div className="font-display font-bold text-xl text-primary-deep">{t.price}</div>
                  <Link to="/exam-booking" className="inline-flex items-center gap-1 text-primary font-semibold text-sm">Enroll <ArrowRight className="size-4" /></Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
