import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — CertVault" }] }),
  component: Login,
});

function Login() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] grid lg:grid-cols-2">
        <div className="hidden lg:block relative">
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&h=1600&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="relative h-full flex flex-col justify-between p-12 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Welcome back</div>
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight">Continue your<br /><span className="text-gradient-gold">certification journey.</span></h2>
              <p className="opacity-80 mt-3 max-w-sm">Access your vouchers, training cohorts, and exam bookings in one place.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-sm space-y-6">
            <div>
              <h1 className="font-display text-3xl font-bold">Sign in</h1>
              <p className="text-muted-foreground text-sm mt-1">New here? <Link to="/signup" className="text-primary font-semibold">Create an account</Link></p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 border border-border py-3 rounded-lg text-sm font-medium hover:bg-muted transition">
              <span className="size-4 rounded-full bg-gradient-to-tr from-red-500 via-yellow-500 to-blue-500" /> Continue with Google
            </button>
            <div className="flex items-center gap-3 text-xs text-muted-foreground"><div className="h-px bg-border flex-1" /> or <div className="h-px bg-border flex-1" /></div>
            <form className="space-y-3">
              <input className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Email or phone" />
              <input type="password" className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm" placeholder="Password" />
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
                <a href="#" className="text-primary font-semibold">Forgot?</a>
              </div>
              <Link to="/dashboard" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground py-3.5 rounded-lg font-semibold">Sign in <ArrowRight className="size-4" /></Link>
            </form>
            <p className="text-[11px] text-center text-muted-foreground">Protected by industry-standard encryption.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
