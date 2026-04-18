import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Wrench, DollarSign, Star, ArrowRight, Sparkles, Home, Sun, Droplets, Square, ScrollText } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { PHONE, WA_DEFAULT, FACEBOOK } from "@/lib/contact";
import heroImg from "@/assets/hero-main.jpg";
import beforeAfterRed from "@/assets/before-after-roof-red.jpg";
import beforeAfterGrey from "@/assets/before-after-roof-grey.jpg";
import beforeAfterBlack from "@/assets/before-after-roof-black.jpg";
import sHouse from "@/assets/service-house.jpg";
import sGutter from "@/assets/service-gutter.jpg";
import sSolar from "@/assets/service-solar.jpg";
import sWindow from "@/assets/service-window.jpg";
import sSurface from "@/assets/service-surface.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D&C Exterior Cleaning Melbourne | Premium House, Solar & Window Wash" },
      { name: "description", content: "Premium exterior cleaning in Melbourne. House washing, gutter, solar panel, window & surface cleaning. Fully equipped, reliable, affordable. Get a free quote." },
      { property: "og:title", content: "D&C Exterior Cleaning Melbourne — Premium Results, Trusted Local Team" },
      { property: "og:description", content: "Spotless exterior cleaning across Melbourne. Book your free quote today." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Home, title: "House Washing", desc: "Full exterior wash that lifts dirt, mould and stains." },
  { icon: ScrollText, title: "Gutter Cleaning", desc: "Debris removal that prevents costly blockages." },
  { icon: Sun, title: "Solar Panel Cleaning", desc: "Streak-free wash that restores panel efficiency." },
  { icon: Droplets, title: "Window Cleaning", desc: "Crystal-clear interior & exterior glass." },
  { icon: Square, title: "Surface Cleaning", desc: "Driveways, patios and walls revived." },
];

const trust = [
  { icon: Shield, title: "Reliable", desc: "On-time, every time" },
  { icon: Wrench, title: "Fully Equipped", desc: "Pro-grade gear" },
  { icon: DollarSign, title: "Affordable", desc: "Honest, transparent pricing" },
  { icon: Sparkles, title: "Spotless Results", desc: "100% satisfaction guarantee" },
];

const reviews = [
  { name: "Sarah M.", text: "Outstanding job on our solar panels and windows. Polite, professional, and the results were spotless.", rating: 5 },
  { name: "James T.", text: "Best gutter clean we've had. Showed up on time, fair price, no mess left behind.", rating: 5 },
  { name: "Priya K.", text: "House looks brand new after the wash. Highly recommend D&C to anyone in Melbourne.", rating: 5 },
];

function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Professional cleaner pressure washing a Melbourne home" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24 md:py-36 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-medium tracking-wide uppercase">
              <Sparkles className="h-4 w-4 text-accent" /> MELBOURNE'S TOP RATED CLEANERS
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.05]">
              Premium Exterior Cleaning Services in Melbourne
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
              Professional House Washing, Gutter Cleaning, Solar Panel Cleaning & Window Cleaning. Spotless results, every time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-accent-foreground font-semibold shadow-elegant hover:scale-105 transition-smooth">
                Get a Free Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white font-semibold hover:bg-white/20 transition-smooth">
                Call Now
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> 100% Satisfaction Guarantee</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Fully Insured</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Local Melbourne Team</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-elegant transition-smooth">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-primary text-white mb-4">
                <t.icon className="h-6 w-6" />
              </div>
              <div className="font-bold text-lg">{t.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-balance">Everything your property needs to shine</h2>
            <p className="mt-4 text-muted-foreground">From rooftops to driveways, we handle every exterior cleaning challenge with premium results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{img:sHouse,...services[0]},{img:sGutter,...services[1]},{img:sSolar,...services[2]},{img:sWindow,...services[3]},{img:sSurface,...services[4]}].map((s) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-elegant transition-smooth">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <s.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-xl">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">Learn more <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </motion.div>
            ))}
            <Link to="/booking" className="rounded-2xl bg-gradient-primary text-white p-8 flex flex-col justify-between shadow-elegant hover:shadow-glow transition-smooth">
              <div>
                <h3 className="text-2xl font-bold">Ready to book?</h3>
                <p className="mt-2 text-white/85">Get a quote in minutes — we'll handle the rest.</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold">Book Online <ArrowRight className="h-5 w-5" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose D&C</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-balance">Local experts you can trust with your property</h2>
            <p className="mt-4 text-muted-foreground">We're a Melbourne-based team that treats every job like our own home. Quality workmanship, honest pricing, and total respect for your space.</p>
            <ul className="mt-6 space-y-3">
              {["Fully insured & police-checked technicians","Eco-friendly cleaning solutions","Free, no-obligation quotes","Same-week availability across Melbourne","Before & after photos with every job"].map(item => (
                <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-smooth">More about us <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <BeforeAfterSlider image={beforeAfterRed} alt="Roof cleaning before and after" />
        </div>
      </section>

      {/* BEFORE / AFTER GRID */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Real Results</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">See the difference</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img src={beforeAfterGrey} alt="Grey roof cleaning before and after" loading="lazy" className="rounded-2xl shadow-card w-full" />
            <img src={beforeAfterBlack} alt="Black roof cleaning before and after" loading="lazy" className="rounded-2xl shadow-card w-full" />
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What Customers Say</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Loved by Melbourne homeowners</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(r => (
              <div key={r.name} className="bg-white p-7 rounded-2xl shadow-card">
                <div className="flex gap-1 mb-3">{Array.from({length:r.rating}).map((_,i)=>(<Star key={i} className="h-4 w-4 fill-accent text-accent" />))}</div>
                <p className="text-foreground/80 italic">"{r.text}"</p>
                <div className="mt-4 font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth">Read all reviews <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <img src={ctaBg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-5xl px-4 lg:px-8 py-20 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Book Your Cleaning Today</h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto text-lg">Get a sparkling property and the peace of mind of working with Melbourne's most reliable exterior cleaning team.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="px-7 py-4 rounded-full bg-accent text-accent-foreground font-semibold shadow-elegant hover:scale-105 transition-smooth">WhatsApp Us</a>
            <Link to="/booking" className="px-7 py-4 rounded-full bg-white text-primary font-semibold hover:scale-105 transition-smooth">Book Online</Link>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="px-7 py-4 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white font-semibold hover:bg-white/20 transition-smooth">Follow on Facebook</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
