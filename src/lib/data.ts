export type Certification = {
  slug: string;
  provider: string;
  name: string;
  category: string;
  level: "Foundational" | "Associate" | "Professional" | "Expert";
  price: number;
  mrp: number;
  duration: string;
  rating: number;
  enrolled: number;
  tagline: string;
  logo: string; // emoji/initial fallback
  color: string; // tailwind gradient
};

export const categories = [
  "Cloud",
  "Cybersecurity",
  "Networking",
  "Project Management",
  "DevOps",
  "Data & AI",
  "Programming",
  "Testing",
  "Business Analysis",
];

export const providers = [
  "AWS", "Microsoft", "Google Cloud", "Cisco", "CompTIA", "PMI", "ISACA",
  "Salesforce", "Red Hat", "Oracle", "EC-Council", "ISTQB", "VMware",
  "HashiCorp", "Docker", "Kubernetes", "ISC2", "ServiceNow", "SAP",
  "Atlassian", "Databricks", "Snowflake", "Adobe", "Tableau", "Palo Alto",
  "Fortinet", "Juniper", "Linux Foundation", "Scrum Alliance", "IIBA",
];

export const certifications: Certification[] = [
  { slug: "aws-solutions-architect-associate", provider: "AWS", name: "Solutions Architect — Associate", category: "Cloud", level: "Associate", price: 8400, mrp: 12500, duration: "40 hrs", rating: 4.9, enrolled: 28430, tagline: "The most in-demand cloud cert in India", logo: "AWS", color: "from-orange-500 to-amber-600" },
  { slug: "aws-cloud-practitioner", provider: "AWS", name: "Cloud Practitioner", category: "Cloud", level: "Foundational", price: 5200, mrp: 8500, duration: "20 hrs", rating: 4.8, enrolled: 41210, tagline: "Start your AWS journey", logo: "AWS", color: "from-orange-500 to-amber-600" },
  { slug: "az-104-administrator", provider: "Microsoft", name: "Azure Administrator (AZ-104)", category: "Cloud", level: "Associate", price: 7800, mrp: 11000, duration: "36 hrs", rating: 4.8, enrolled: 19840, tagline: "Manage cloud infrastructure at scale", logo: "MS", color: "from-sky-500 to-blue-600" },
  { slug: "az-900-fundamentals", provider: "Microsoft", name: "Azure Fundamentals (AZ-900)", category: "Cloud", level: "Foundational", price: 4200, mrp: 6500, duration: "18 hrs", rating: 4.9, enrolled: 52100, tagline: "Entry point to Microsoft Azure", logo: "MS", color: "from-sky-500 to-blue-600" },
  { slug: "ccna-200-301", provider: "Cisco", name: "CCNA 200-301", category: "Networking", level: "Associate", price: 11500, mrp: 18900, duration: "60 hrs", rating: 4.7, enrolled: 22340, tagline: "Industry-standard networking credential", logo: "Cisco", color: "from-blue-600 to-indigo-700" },
  { slug: "comptia-security-plus", provider: "CompTIA", name: "Security+ SY0-701", category: "Cybersecurity", level: "Foundational", price: 9800, mrp: 14500, duration: "44 hrs", rating: 4.8, enrolled: 17650, tagline: "Vendor-neutral cybersecurity baseline", logo: "C+", color: "from-red-500 to-rose-600" },
  { slug: "pmp-certification", provider: "PMI", name: "PMP — Project Management Professional", category: "Project Management", level: "Professional", price: 21500, mrp: 32000, duration: "80 hrs", rating: 4.9, enrolled: 14320, tagline: "Globally recognized PM credential", logo: "PMI", color: "from-emerald-600 to-teal-700" },
  { slug: "cissp", provider: "ISC2", name: "CISSP", category: "Cybersecurity", level: "Expert", price: 56000, mrp: 78000, duration: "120 hrs", rating: 4.9, enrolled: 8910, tagline: "The gold standard for security leaders", logo: "ISC2", color: "from-slate-700 to-zinc-900" },
  { slug: "ceh-v13", provider: "EC-Council", name: "CEH v13 — Certified Ethical Hacker", category: "Cybersecurity", level: "Professional", price: 24500, mrp: 38000, duration: "70 hrs", rating: 4.7, enrolled: 12450, tagline: "Think like a hacker, defend like a pro", logo: "EC", color: "from-red-600 to-rose-800" },
  { slug: "google-cloud-ace", provider: "Google Cloud", name: "Associate Cloud Engineer", category: "Cloud", level: "Associate", price: 7900, mrp: 11500, duration: "38 hrs", rating: 4.8, enrolled: 11240, tagline: "Deploy and manage GCP workloads", logo: "GCP", color: "from-blue-500 to-emerald-500" },
  { slug: "terraform-associate", provider: "HashiCorp", name: "Terraform Associate", category: "DevOps", level: "Associate", price: 6500, mrp: 9500, duration: "28 hrs", rating: 4.8, enrolled: 9420, tagline: "Infrastructure as code, mastered", logo: "TF", color: "from-violet-600 to-purple-700" },
  { slug: "cka-kubernetes", provider: "Linux Foundation", name: "Certified Kubernetes Administrator", category: "DevOps", level: "Professional", price: 14200, mrp: 21500, duration: "55 hrs", rating: 4.8, enrolled: 8740, tagline: "Run production K8s clusters", logo: "K8s", color: "from-indigo-500 to-blue-700" },
];

export const trustLogos = [
  "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL", "Tech Mahindra",
  "Capgemini", "IBM", "Deloitte", "EY", "KPMG", "PwC", "Flipkart", "Paytm",
];

export const testimonials = [
  { name: "Aarav Sharma", role: "Cloud Engineer at Infosys", text: "Saved ₹4,200 on my AWS SAA voucher and the bootcamp got me certified in 6 weeks. Hike was 38%.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
  { name: "Priya Iyer", role: "DevOps Lead at TCS", text: "Booking the exam was effortless. The proctored slot was confirmed within minutes. Best platform I've used.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face" },
  { name: "Rohan Mehta", role: "Security Analyst, Deloitte", text: "Cleared CISSP in the first attempt. The practice tests and study material were genuinely premium.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
  { name: "Sneha Kapoor", role: "L&D Head, HCL", text: "Onboarded 240 engineers for Azure training. Their corporate portal made tracking trivial.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" },
];
