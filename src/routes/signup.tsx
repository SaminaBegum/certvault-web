import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create your account — CertVault" }] }),
  component: Signup,
});

function Signup() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] grid lg:grid-cols-2">
        <div className="flex items-center justify-center p-8 order-2 lg:order-1">
          <div className="w-full max-w-sm space-y-6">
            <div>
              <h1 className="font-display text-3xl font-bold">Create your account</h1>
              <p className="text-muted-foreground text-sm mt-1">Already have one? <Link to="/login" className="text-primary font-semibold">Sign in</Link></p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 border border-border py-3 rounded-lg text-sm font-medium hover:bg-muted transition">
              <span className="size-4 rounded-full bg-gradient-to-tr from-red-500 via-yellow-500 to-blue-500" /> Sign up with Google
            </button>
            <div className="flex items-center gap-3 text-xs text-muted-foreground"><div className="h-px bg-border flex-1" /> or <div className="h-px bg-border flex-1" /></div>
            <form className="space-y-3">
              <input className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Full name" />
              <input className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Work email" />
              <input className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Phone (for OTP)" />
              <input type="password" className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Create password" />
              <Link to="/dashboard" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground py-3.5 rounded-lg font-semibold">Create account <ArrowRight className="size-4" /></Link>
              <p className="text-[11px] text-center text-muted-foreground">By signing up you agree to our Terms & Privacy Policy.</p>
            </form>
          </div>
        </div>

        <div className="hidden lg:block relative order-1 lg:order-2">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=1600&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="relative h-full flex flex-col justify-between p-12 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Join 180,000+ professionals</div>
            <div className="space-y-5">
              <h2 className="font-display text-4xl font-bold leading-tight">Start saving<br /><span className="text-gradient-gold">from day one.</span></h2>
              <ul className="space-y-2.5">
                {["Up to 50% off official vouchers", "Free practice tests on signup", "AI career guidance", "₹500 wallet credit on first purchase"].map((x) => (
                  <li key={x} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 text-gold" /> {x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
