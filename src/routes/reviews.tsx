import { createFileRoute } from "@tanstack/react-router";
import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { FACEBOOK } from "@/lib/contact";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | D&C Exterior Cleaning Melbourne" },
      { name: "description", content: "Read real reviews from Melbourne homeowners. Professional, reliable, and great results — every time." },
      { property: "og:title", content: "Customer Reviews | D&C Exterior Cleaning Melbourne" },
      { property: "og:description", content: "5-star reviews from Melbourne customers." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Sarah M.", suburb: "Brighton", rating: 5, text: "Outstanding job on our solar panels and windows. Polite, professional, and the results were spotless. Will absolutely use D&C again." },
  { name: "James T.", suburb: "Hawthorn", rating: 5, text: "Best gutter clean we've had. Showed up on time, fair price, no mess left behind. Great communication from start to finish." },
  { name: "Priya K.", suburb: "Doncaster", rating: 5, text: "House looks brand new after the wash. Highly recommend D&C to anyone in Melbourne wanting a reliable exterior cleaning team." },
  { name: "Michael R.", suburb: "Glen Waverley", rating: 5, text: "Professional from quote to finish. They cleaned our roof and driveway and the difference is night and day." },
  { name: "Emma L.", suburb: "Williamstown", rating: 5, text: "Honest pricing and great workmanship. The team took care to protect our garden while pressure washing. Thank you!" },
  { name: "David W.", suburb: "Bentleigh", rating: 5, text: "Booked for solar panel cleaning — energy output noticeably improved within days. Will be a repeat customer." },
  { name: "Olivia P.", suburb: "St Kilda", rating: 5, text: "Punctual, friendly and detail-oriented. The window cleaning was flawless inside and out. Excellent value." },
  { name: "Nathan H.", suburb: "Camberwell", rating: 5, text: "We use D&C for our rental properties. Reliable, well-priced, and tenants always comment on the results." },
  { name: "Zoe G.", suburb: "Footscray", rating: 5, text: "Quick quote via WhatsApp, booking the next week, and a sparkling outcome. Highly recommend." },
  { name: "Tom B.", suburb: "Box Hill", rating: 5, text: "These guys went above and beyond — even cleaned a few extra spots without charging us. Genuine trust." },
];

const keywords = ["Professional", "Reliable", "Great Results", "On Time", "Friendly", "Honest Pricing"];

function ReviewsPage() {
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  return (
    <PageLayout>
      <section className="bg-gradient-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Reviews</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Loved by Melbourne homeowners</h1>
          <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-6 py-3">
            <div className="flex gap-1">{Array.from({length:5}).map((_,i)=>(<Star key={i} className="h-5 w-5 fill-accent text-accent" />))}</div>
            <span className="font-bold text-2xl">{avg}</span>
            <span className="text-white/85">from {reviews.length}+ verified reviews</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {keywords.map(k => (<span key={k} className="px-4 py-1.5 rounded-full bg-white/15 text-sm font-medium">{k}</span>))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r,i) => (
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%3)*.08}} className="bg-white p-7 rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
              <div className="flex gap-1 mb-3">{Array.from({length:r.rating}).map((_,j)=>(<Star key={j} className="h-4 w-4 fill-accent text-accent" />))}</div>
              <p className="italic text-foreground/80 leading-relaxed">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-full bg-gradient-primary text-white font-bold">{r.name[0]}</div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.suburb}, Melbourne</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-white font-semibold shadow-elegant hover:shadow-glow transition-smooth">Leave a Review on Facebook <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>
    </PageLayout>
  );
}
