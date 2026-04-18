import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PHONE, PHONE_DISPLAY, EMAIL, WA_DEFAULT } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact D&C Exterior Cleaning Melbourne | Call, WhatsApp, Email" },
      { name: "description", content: "Get in touch with D&C Exterior Cleaning Melbourne. Call, WhatsApp or email for a free quote across all Melbourne suburbs." },
      { property: "og:title", content: "Contact D&C Exterior Cleaning Melbourne" },
      { property: "og:description", content: "Free quotes by phone, WhatsApp or email." },
    ],
  }),
  component: ContactPage,
});

const areas = ["Melbourne CBD","Brighton","Hawthorn","Doncaster","Glen Waverley","Williamstown","Bentleigh","St Kilda","Camberwell","Footscray","Box Hill","Richmond","South Yarra","Toorak","Caulfield","Carlton","Northcote","Preston","Essendon","Sunshine"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageLayout>
      <section className="bg-gradient-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Contact</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Get in touch</h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto text-lg">Free quotes within 24 hours. Reach us your way.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-3 gap-6">
          <a href={`tel:${PHONE}`} className="bg-white p-7 rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
            <Phone className="h-10 w-10 text-primary" />
            <h3 className="mt-4 font-bold text-lg">Call Us</h3>
            <p className="text-sm text-muted-foreground mt-1">{PHONE_DISPLAY}</p>
          </a>
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="bg-white p-7 rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
            <MessageCircle className="h-10 w-10 text-accent" />
            <h3 className="mt-4 font-bold text-lg">WhatsApp</h3>
            <p className="text-sm text-muted-foreground mt-1">Fastest reply — chat directly with our team</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="bg-white p-7 rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
            <Mail className="h-10 w-10 text-primary" />
            <h3 className="mt-4 font-bold text-lg">Email</h3>
            <p className="text-sm text-muted-foreground mt-1 break-all">{EMAIL}</p>
          </a>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-card">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours.</p>
            {sent ? (
              <div className="mt-8 p-6 rounded-xl bg-accent/10 text-foreground flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <div className="font-semibold">Thanks — message received!</div>
                  <div className="text-sm text-muted-foreground mt-1">We'll be in touch shortly. For faster response, message us on WhatsApp.</div>
                </div>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <div>
                  <label className="text-sm font-medium">Service Required</label>
                  <select name="service" className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>House Washing</option><option>Gutter Cleaning</option><option>Solar Panel Cleaning</option><option>Window Cleaning</option><option>Exterior Surface Cleaning</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your property..." />
                </div>
                <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-primary text-white font-semibold shadow-elegant hover:shadow-glow transition-smooth"><Send className="h-4 w-4" /> Send Message</button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white p-7 rounded-2xl shadow-card">
              <Clock className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-bold text-lg">Opening Hours</h3>
              <ul className="mt-3 text-sm space-y-1.5 text-muted-foreground">
                <li className="flex justify-between"><span>Monday – Friday</span><span className="font-medium text-foreground">7:00 AM – 7:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="font-medium text-foreground">8:00 AM – 6:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="font-medium text-foreground">By appointment</span></li>
              </ul>
            </div>
            <div className="bg-white p-7 rounded-2xl shadow-card">
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-bold text-lg">Service Areas</h3>
              <p className="text-sm text-muted-foreground mt-1">Proudly serving all of Melbourne and surrounding suburbs:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {areas.map(a => (<span key={a} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">{a}</span>))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input name={name} type={type} required={required} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
  );
}
