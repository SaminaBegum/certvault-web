import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CertCard } from "@/components/site/CertCard";
import { categories, certifications, providers } from "@/lib/data";

export const Route = createFileRoute("/certifications/")({
  head: () => ({
    meta: [
      { title: "All Certifications — AWS, Azure, Cisco, PMI & 30+ providers | CertVault" },
      { name: "description", content: "Browse 200+ official certification exam vouchers at up to 50% off. AWS, Azure, GCP, Cisco, CompTIA, PMI, and more." },
    ],
  }),
  component: CertList,
});

function CertList() {
  const [cat, setCat] = useState<string>("All");
  const [prov, setProv] = useState<string>("All");
  const [q, setQ] = useState("");
  const filtered = certifications.filter((c) =>
    (cat === "All" || c.category === cat) &&
    (prov === "All" || c.provider === prov) &&
    (c.name.toLowerCase().includes(q.toLowerCase()) || c.provider.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-6">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Certification marketplace</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 max-w-2xl">200+ certifications. Up to 50% off official vouchers.</h1>
            <p className="opacity-80 mt-3 max-w-xl">Direct partnerships with AWS, Microsoft, Google, Cisco, PMI & more — guaranteed authentic, instantly delivered.</p>
            <div className="mt-8 max-w-2xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search 'AWS', 'PMP', 'Security+'…" className="w-full bg-white text-foreground rounded-xl pl-12 pr-4 py-4 shadow-elegant outline-none focus:ring-2 focus:ring-gold" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 space-y-7">
              <div>
                <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2"><SlidersHorizontal className="size-4" /> Domain</h3>
                <div className="flex flex-wrap lg:flex-col gap-1.5">
                  {["All", ...categories].map((c) => (
                    <button key={c} onClick={() => setCat(c)} className={`text-left px-3 py-2 rounded-lg text-sm transition ${cat === c ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"}`}>{c}</button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2"><Filter className="size-4" /> Provider</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                  {["All", ...providers.slice(0, 12)].map((p) => (
                    <button key={p} onClick={() => setProv(p)} className={`text-left px-3 py-2 rounded-lg text-sm transition ${prov === p ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"}`}>{p}</button>
                  ))}
                </div>
              </div>
            </aside>
            <div className="lg:col-span-9">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">{filtered.length}</span> certifications · sorted by popularity</p>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((c) => <CertCard key={c.slug} c={c} />)}
              </div>
              {filtered.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">No certifications match those filters. <button onClick={() => { setCat("All"); setProv("All"); setQ(""); }} className="text-primary font-semibold ml-1">Reset</button></div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
