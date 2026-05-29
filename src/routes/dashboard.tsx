import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BookOpen, Calendar, Download, FileText, Settings, ShoppingBag, TrendingUp, Wallet } from "lucide-react";
import { Header } from "@/components/site/Header";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Student Dashboard — CertVault" }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <>
      <Header />
      <main className="bg-muted/30 min-h-screen">
        <div className="container mx-auto px-6 py-10 grid lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-gradient-hero text-primary-foreground grid place-items-center font-display font-bold">AS</div>
                <div>
                  <div className="font-display font-semibold">Aarav Sharma</div>
                  <div className="text-xs text-muted-foreground">Cloud Engineer · Pro</div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-gradient-gold text-primary-deep">
                <div className="text-xs">Wallet balance</div>
                <div className="font-display font-bold text-xl">₹2,450</div>
              </div>
            </div>
            <nav className="mt-4 bg-card border border-border rounded-2xl p-2">
              {[
                { icon: TrendingUp, t: "Overview" },
                { icon: ShoppingBag, t: "My vouchers", n: 3 },
                { icon: Calendar, t: "Exam bookings", n: 1 },
                { icon: BookOpen, t: "Training" },
                { icon: Award, t: "Certificates" },
                { icon: FileText, t: "Invoices" },
                { icon: Wallet, t: "Wallet & referrals" },
                { icon: Settings, t: "Settings" },
              ].map((n, i) => (
                <button key={n.t} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm ${i === 0 ? "bg-primary text-primary-foreground" : "hover:bg-muted"} transition`}>
                  <span className="flex items-center gap-2"><n.icon className="size-4" /> {n.t}</span>
                  {n.n && <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${i === 0 ? "bg-gold text-primary-deep" : "bg-muted-foreground/20"}`}>{n.n}</span>}
                </button>
              ))}
            </nav>
          </aside>

          <section className="lg:col-span-9 space-y-6">
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { v: "3", l: "Active vouchers" },
                { v: "1", l: "Upcoming exam" },
                { v: "2", l: "Certificates earned" },
                { v: "₹4,200", l: "Saved this year" },
              ].map((s) => (
                <div key={s.l} className="bg-card border border-border rounded-2xl p-5">
                  <div className="font-display font-bold text-3xl text-primary-deep">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-semibold text-lg">Your next exam</h2>
                <Link to="/exam-booking" className="text-sm text-primary font-semibold">Reschedule</Link>
              </div>
              <div className="grid md:grid-cols-3 gap-4 items-center bg-gradient-hero text-primary-foreground p-5 rounded-xl">
                <div className="md:col-span-2">
                  <div className="text-xs uppercase tracking-wider text-gold">AWS</div>
                  <div className="font-display font-semibold text-xl mt-1">Solutions Architect — Associate</div>
                  <div className="text-sm opacity-80 mt-2">Wed, 14 Aug 2026 · 14:00 IST · Pearson VUE Indiranagar</div>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold text-3xl">12d</div>
                  <div className="text-xs opacity-80">to go</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-display font-semibold text-lg mb-4">Your vouchers</h2>
              <div className="space-y-3">
                {["AWS Solutions Architect — Associate", "Azure AZ-104", "Terraform Associate"].map((v, i) => (
                  <div key={v} className="flex items-center justify-between p-4 border border-border rounded-xl hover:bg-muted/40 transition">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center font-display font-bold text-xs">{v.split(" ")[0]}</div>
                      <div>
                        <div className="font-semibold text-sm">{v}</div>
                        <div className="text-xs text-muted-foreground">Voucher · expires 12 Mar 2027</div>
                      </div>
                    </div>
                    <button className="text-sm text-primary font-semibold flex items-center gap-1"><Download className="size-4" /> PDF</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
