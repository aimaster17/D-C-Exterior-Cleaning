import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import baRed from "@/assets/before-after-roof-red.jpg";
import baGrey from "@/assets/before-after-roof-grey.jpg";
import baBlack from "@/assets/before-after-roof-black.jpg";
import gWindow from "@/assets/gallery-window-1.jpg";
import gSolar from "@/assets/gallery-solar-1.jpg";
import gRoof from "@/assets/gallery-roof-1.jpg";
import gGutter from "@/assets/gallery-gutter-1.jpg";
import sHouse from "@/assets/service-house.jpg";
import sGutter from "@/assets/service-gutter.jpg";
import sSolar from "@/assets/service-solar.jpg";
import sWindow from "@/assets/service-window.jpg";
import sSurface from "@/assets/service-surface.jpg";
import underRoof from "@/assets/under-roof.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Our Work | Before & After Gallery — D&C Exterior Cleaning Melbourne" },
      { name: "description", content: "See real before & after results from Melbourne homes — solar panels, gutters, windows, roofs and exteriors." },
      { property: "og:title", content: "Our Work | D&C Exterior Cleaning Melbourne" },
      { property: "og:description", content: "Real before & after results from Melbourne homes." },
      { property: "og:image", content: baRed },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; alt: string; cat: string };
const items: Item[] = [
  { src: baRed, alt: "Red roof clean before and after", cat: "Roof / Exterior" },
  { src: baGrey, alt: "Grey roof clean before and after", cat: "Roof / Exterior" },
  { src: baBlack, alt: "Black roof clean before and after", cat: "Roof / Exterior" },
  { src: gSolar, alt: "Solar panel cleaning", cat: "Solar Panels" },
  { src: gWindow, alt: "Sparkling clean window", cat: "Windows" },
  { src: gRoof, alt: "Clean colorbond roof", cat: "Roof / Exterior" },
  { src: gGutter, alt: "Clean gutter", cat: "Gutters" },
  { src: sHouse, alt: "House washing service", cat: "Roof / Exterior" },
  { src: sGutter, alt: "Gutter cleaning in progress", cat: "Gutters" },
  { src: sSolar, alt: "Solar panel cleaning service", cat: "Solar Panels" },
  { src: sWindow, alt: "Window cleaning close up", cat: "Windows" },
  { src: sSurface, alt: "Driveway pressure washing", cat: "Roof / Exterior" },
  { src: underRoof, alt: "Roof underside detail", cat: "Roof / Exterior" },
];

const cats = ["All", "Solar Panels", "Gutters", "Windows", "Roof / Exterior"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = filter === "All" ? items : items.filter(i => i.cat === filter);

  return (
    <PageLayout>
      <section className="bg-gradient-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Our Work</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Real Melbourne results</h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto text-lg">Drag the slider — these are real before & after photos from our team's recent jobs.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          <BeforeAfterSlider image={baRed} alt="Red roof before and after" />
          <BeforeAfterSlider image={baGrey} alt="Grey roof before and after" />
          <BeforeAfterSlider image={baBlack} alt="Black roof before and after" />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {cats.map(c => (
              <button key={c} onClick={()=>setFilter(c)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-smooth ${filter===c ? "bg-gradient-primary text-white shadow-elegant" : "bg-secondary text-foreground hover:bg-secondary/70"}`}>{c}</button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((it, i) => (
              <motion.button key={i} layout onClick={()=>setLightbox(it)} initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-smooth aspect-[4/3]">
                <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                  <div className="text-white text-sm font-medium">{it.cat}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[60] bg-black/90 grid place-items-center p-4" onClick={()=>setLightbox(null)}>
            <button aria-label="Close" className="absolute top-5 right-5 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X /></button>
            <motion.img initial={{scale:.9}} animate={{scale:1}} src={lightbox.src} alt={lightbox.alt} className="max-w-[95vw] max-h-[90vh] rounded-xl" onClick={(e)=>e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
