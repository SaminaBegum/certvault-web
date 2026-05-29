import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const cols = [
  {
    title: "Certifications",
    links: ["AWS", "Microsoft Azure", "Google Cloud", "Cisco", "CompTIA", "PMI", "CISSP", "CEH", "Kubernetes", "Terraform"],
  },
  {
    title: "Training",
    links: ["Instructor-Led", "Corporate Training", "Virtual Bootcamps", "Exam Prep Programs", "Career Tracks", "Custom Workshops"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Partners", "Contact", "Blog", "Success Stories"],
  },
  {
    title: "Support",
    links: ["Help Center", "FAQ", "Refund Policy", "Reschedule Exam", "Testing Centers", "Privacy", "Terms"],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground/90">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="size-10 rounded-lg bg-gradient-gold grid place-items-center">
                <span className="font-display font-bold text-primary-deep">CV</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg">CertVault</div>
                <div className="text-xs opacity-70 -mt-0.5">India's certification marketplace</div>
              </div>
            </Link>
            <p className="text-sm opacity-75 leading-relaxed max-w-sm">
              The trusted platform for global certification exams, premium training, and corporate learning — used by 240+ enterprises and 180,000+ professionals.
            </p>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center gap-2"><Phone className="size-4 text-gold" /> 1800-123-000 (Toll Free)</div>
              <div className="flex items-center gap-2"><Mail className="size-4 text-gold" /> hello@certvault.in</div>
              <div className="flex items-center gap-2"><MapPin className="size-4 text-gold" /> Bengaluru · Mumbai · Delhi NCR</div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {[Linkedin, Twitter, Youtube, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="size-9 grid place-items-center rounded-full border border-white/15 hover:bg-gold hover:text-primary-deep hover:border-gold transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display font-semibold text-sm text-gold mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}><a href="#" className="text-sm opacity-75 hover:opacity-100 hover:text-gold transition">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs opacity-70">
          <div>© {new Date().getFullYear()} CertVault Technologies Pvt Ltd. All rights reserved. GST: 29AABCT1234X1Z5</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Refund Policy</a>
            <a href="#" className="hover:text-gold">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
