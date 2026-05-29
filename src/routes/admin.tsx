import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, DollarSign, Megaphone, Settings, ShoppingBag, Ticket, TrendingUp, Users } from "lucide-react";
import { Header } from "@/components/site/Header";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard — CertVault" }] }),
  component: Admin,
});

function Admin() {
  return (
    <>
      <Header />
      <main className="bg-muted/30 min-h-screen">
        <div className="container mx-auto px-6 py-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Operations</div>
              <h1 className="font-display text-3xl font-bold mt-1">Admin overview</h1>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted">Export</button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">New order</button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: DollarSign, l: "Revenue (MTD)", v: "₹84.2L", d: "+18.2%" },
              { icon: Ticket, l: "Vouchers sold", v: "1,284", d: "+12.4%" },
              { icon: Users, l: "Active students", v: "12,420", d: "+8.1%" },
              { icon: ShoppingBag, l: "Pending orders", v: "23", d: "−4" },
            ].map((s) => (
              <div key={s.l} className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <s.icon className="size-5 text-primary" />
                  <span className="text-xs font-semibold text-primary">{s.d}</span>
                </div>
                <div className="font-display font-bold text-3xl mt-3 text-primary-deep">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6">
              <h2 className="font-display font-semibold text-lg mb-4">Recent orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-xs uppercase tracking-wider text-muted-foreground">
                    <tr className="border-b border-border"><th className="text-left py-2.5">Order</th><th className="text-left">Customer</th><th className="text-left">Voucher</th><th className="text-right">Amount</th><th className="text-right">Status</th></tr>
                  </thead>
                  <tbody>
                    {[
                      ["#CV-8423", "Priya Iyer", "Azure AZ-104", "₹7,800", "Paid"],
                      ["#CV-8422", "Rohan Mehta", "CISSP", "₹56,000", "Paid"],
                      ["#CV-8421", "Sneha Kapoor", "AWS SAA × 12", "₹1,00,800", "Pending"],
                      ["#CV-8420", "Vikram Singh", "PMP", "₹21,500", "Paid"],
                      ["#CV-8419", "Anaya Patel", "Security+", "₹9,800", "Paid"],
                    ].map((r) => (
                      <tr key={r[0]} className="border-b border-border/60 hover:bg-muted/30">
                        <td className="py-3 font-semibold">{r[0]}</td><td>{r[1]}</td><td className="text-muted-foreground">{r[2]}</td>
                        <td className="text-right font-semibold">{r[3]}</td>
                        <td className="text-right"><span className={`text-xs px-2 py-0.5 rounded-full ${r[4] === "Paid" ? "bg-primary/10 text-primary" : "bg-gold/20 text-primary-deep"} font-semibold`}>{r[4]}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display font-semibold mb-4">Top categories</h3>
                <div className="space-y-3">
                  {[["Cloud", 62], ["Cybersecurity", 48], ["DevOps", 34], ["Project Mgmt", 28]].map(([c, v]) => (
                    <div key={c as string}>
                      <div className="flex justify-between text-xs mb-1"><span>{c}</span><span className="text-muted-foreground">{v}%</span></div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-gradient-hero" style={{ width: `${v}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-6">
                <Megaphone className="size-5 text-gold mb-2" />
                <div className="font-display font-semibold">Run a campaign</div>
                <p className="text-sm opacity-80 mt-1">Send a flash discount to 12k students.</p>
                <button className="mt-4 bg-gradient-gold text-primary-deep px-4 py-2 rounded-lg text-sm font-semibold">Create campaign</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
