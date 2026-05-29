import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, Search, ShoppingCart, X } from "lucide-react";
import { cn } from "@/lib/utils";
  import logo from "@/assets/logo-removebg-preview.png"; // update path based on your file location
const nav = [
  { label: "Certifications", to: "/certifications" },
  { label: "Training", to: "/training" },
  { label: "Exam Booking", to: "/exam-booking" },
  { label: "Corporate", to: "/corporate" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary-deep text-primary-foreground text-xs">
        <div className="container mx-auto px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-6 opacity-90">
            <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-gold animate-pulse" /> Save up to 50% on global exam vouchers — limited time</span>
          </div>
          <div className="flex items-center gap-5 opacity-90">
            <a href="tel:+911800123000" className="flex items-center gap-1.5 hover:text-gold transition"><Phone className="size-3" /> 1800-123-000</a>
            <Link to="/login" className="hover:text-gold transition">Login</Link>
            <Link to="/signup" className="hover:text-gold transition">Sign up</Link>
          </div>
        </div>
      </div>

      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-elegant" : "bg-background/80 backdrop-blur-md border-b border-border/60"
      )}>
        <div className="container mx-auto px-6 h-16 md:h-18 flex items-center justify-between gap-6">
      

<Link to="/" className="flex items-center gap-3 shrink-0">
  <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden flex items-center justify-center">
    <img
      src={logo}
      alt="CertVault Logo"
      className="w-full h-full object-contain"
    />
  </div>
</Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/60 rounded-md transition">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden md:grid place-items-center size-9 rounded-md hover:bg-muted transition" aria-label="Search"><Search className="size-4" /></button>
            <button className="hidden md:grid place-items-center size-9 rounded-md hover:bg-muted transition relative" aria-label="Cart">
              <ShoppingCart className="size-4" />
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-gold text-[10px] font-semibold grid place-items-center text-primary-deep">2</span>
            </button>
            <Link to="/exam-booking" className="hidden md:inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground px-4 py-2.5 rounded-md text-sm font-semibold shadow-elegant hover:opacity-95 hover:scale-[1.02] transition">
              Book Exam
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden grid place-items-center size-9 rounded-md hover:bg-muted">
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-muted text-sm font-medium">{n.label}</Link>
              ))}
              <Link to="/exam-booking" onClick={() => setOpen(false)} className="mt-2 bg-gradient-hero text-primary-foreground px-4 py-3 rounded-md text-sm font-semibold text-center">Book Exam</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
