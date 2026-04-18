import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Heart, Shield, Sparkles, Users, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import about from "@/assets/about-hero.jpg";
import team from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About D&C Exterior Cleaning Melbourne | Reliable Local Team" },
      { name: "description", content: "Local Melbourne exterior cleaning specialists. Reliable, professional, and customer-focused — meet the team behind D&C." },
      { property: "og:title", content: "About D&C Exterior Cleaning Melbourne" },
      { property: "og:description", content: "Reliable, professional, customer-focused exterior cleaning in Melbourne." },
      { property: "og:image", content: about },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Reliability", desc: "We show up when we say we will, prepared and ready." },
  { icon: Award, title: "Quality Workmanship", desc: "Premium results that meet our exacting standards." },
  { icon: Heart, title: "Honest Pricing", desc: "Transparent quotes, no surprises, ever." },
  { icon: Sparkles, title: "Customer Satisfaction", desc: "We're not done until you're delighted." },
];

function AboutPage() {
  return (
    <PageLayout>
      <section className="relative">
        <img src={about} alt="Beautiful Melbourne home" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24 md:py-32 text-white">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">About Us</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold text-balance max-w-3xl">A Melbourne team obsessed with spotless results</h1>
            <p className="mt-5 text-lg text-white/85 max-w-2xl">We started D&C with one mission: deliver exterior cleaning that genuinely impresses. Every job, every customer, every time.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <img src={team} alt="D&C cleaning team" loading="lazy" className="rounded-2xl shadow-elegant w-full" />
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-balance">Local. Professional. Detail-obsessed.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">D&C Exterior Cleaning Service is a family-run Melbourne business built on reliability and pride in our craft. We specialise in house washing, solar panel cleaning, gutter clearing, window cleaning and exterior surface restoration — for homeowners, property managers, landlords and small commercial spaces.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">Our customers come back because we treat each property like our own. From the first quote to the final walkthrough, we're focused on your satisfaction and the longevity of your property.</p>
            <div className="mt-6 grid grid-cols-3 gap-6">
              <Stat n="500+" l="Properties cleaned" />
              <Stat n="100%" l="Satisfaction guarantee" />
              <Stat n="5★" l="Average rating" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What We Stand For</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Our values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v,i) => (
              <motion.div key={v.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="bg-white p-6 rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-primary text-white mb-4"><v.icon className="h-6 w-6" /></div>
                <h3 className="font-bold text-lg">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
          <Users className="h-12 w-12 text-primary mx-auto" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Trusted by repeat customers across Melbourne</h2>
          <p className="mt-4 text-muted-foreground">Most of our work comes from word-of-mouth and returning clients — the strongest endorsement we could ask for.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {["Reliable","Insured","Eco-friendly","Affordable","Police-checked","Local"].map(b => (
              <span key={b} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{b}</span>
            ))}
          </div>
          <Link to="/booking" className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-white font-semibold shadow-elegant hover:shadow-glow transition-smooth">Get your free quote <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </PageLayout>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-primary">{n}</div>
      <div className="text-xs text-muted-foreground mt-1">{l}</div>
    </div>
  );
}
