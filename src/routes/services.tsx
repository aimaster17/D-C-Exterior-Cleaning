import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { WA_DEFAULT } from "@/lib/contact";
import sHouse from "@/assets/service-house.jpg";
import sGutter from "@/assets/service-gutter.jpg";
import sSolar from "@/assets/service-solar.jpg";
import sWindow from "@/assets/service-window.jpg";
import sSurface from "@/assets/service-surface.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Exterior Cleaning Services Melbourne | House, Gutter, Solar, Windows" },
      { name: "description", content: "Full-service exterior cleaning across Melbourne — house washing, gutter cleaning, solar panel & window cleaning, driveway & patio restoration." },
      { property: "og:title", content: "Our Services | D&C Exterior Cleaning Melbourne" },
      { property: "og:description", content: "House, gutter, solar, window and surface cleaning across Melbourne." },
      { property: "og:image", content: sHouse },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { id: "house", img: sHouse, emoji: "🏠", title: "House Washing", desc: "A complete exterior wash that removes years of dirt, mould and atmospheric stains — restoring your home's kerb appeal.", benefits: ["Removes dirt, mould & cobwebs", "Soft-wash safe for all surfaces", "Boosts kerb appeal & paint life"] },
  { id: "gutter", img: sGutter, emoji: "🧼", title: "Gutter Cleaning", desc: "Clear blocked gutters before the next storm. We remove leaves, debris and silt to keep your roofing system flowing.", benefits: ["Full debris removal", "Prevents costly water damage", "Down-pipe flush included"] },
  { id: "solar", img: sSolar, emoji: "☀️", title: "Solar Panel Cleaning", desc: "Dust, bird droppings and grime can rob your panels of efficiency. We use streak-free, panel-safe methods to restore output.", benefits: ["Improves energy output", "Pure-water, streak-free finish", "Safe for all panel types"] },
  { id: "window", img: sWindow, emoji: "🪟", title: "Window Cleaning", desc: "Crystal-clear interior and exterior windows — frames, sills and tracks included for a complete finish.", benefits: ["Inside & outside cleaning", "Frames, sills & tracks", "Streak-free guaranteed"] },
  { id: "surface", img: sSurface, emoji: "🧱", title: "Exterior Surface Cleaning", desc: "Driveways, patios, paths and walls. High-pressure restoration that brings tired surfaces back to life.", benefits: ["Driveways, patios, paths", "Removes oil, mould & moss", "Visible results in one pass"] },
];

function ServicesPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-primary text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Services</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-balance">Premium exterior cleaning, end-to-end</h1>
          <p className="mt-5 text-white/85 max-w-2xl mx-auto text-lg">Five specialist services. One trusted Melbourne team. Choose what you need — or bundle for the best value.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <motion.div key={s.id} id={s.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-2xl shadow-elegant">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-smooth duration-700" />
              </div>
              <div>
                <div className="text-4xl">{s.emoji}</div>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.benefits.map(b => (<li key={b} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span>{b}</span></li>))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-elegant hover:shadow-glow transition-smooth">Book Now <ArrowRight className="h-4 w-4" /></Link>
                  <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"><MessageCircle className="h-4 w-4" /> Get Quote</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
