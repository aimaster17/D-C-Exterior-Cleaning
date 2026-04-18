import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Upload, CalendarCheck } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { WA_BOOKING } from "@/lib/contact";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Online | D&C Exterior Cleaning Melbourne" },
      { name: "description", content: "Book your exterior cleaning service online in 5 simple steps. Fast confirmation by WhatsApp." },
      { property: "og:title", content: "Book Your Cleaning | D&C Melbourne" },
      { property: "og:description", content: "Multi-step online booking — confirmed via WhatsApp." },
    ],
  }),
  component: BookingPage,
});

const steps = ["Service", "Property", "Schedule", "Contact", "Confirm"] as const;
const services = ["House Washing","Gutter Cleaning","Solar Panel Cleaning","Window Cleaning","Exterior Surface Cleaning"];
const propertyTypes = ["House","Townhouse","Apartment","Commercial","Other"];
const slots = ["Morning (8am–12pm)","Afternoon (12pm–4pm)","Late Afternoon (4pm–7pm)"];

type Form = {
  service: string; propertyType: string; size: string; address: string;
  date: string; slot: string; name: string; phone: string; email: string; notes: string; image?: File | null;
};

function BookingPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>({ service: services[0], propertyType: propertyTypes[0], size: "", address: "", date: "", slot: slots[0], name: "", phone: "", email: "", notes: "", image: null });
  const [done, setDone] = useState(false);

  const update = <K extends keyof Form>(k: K, v: Form[K]) => setForm(f => ({ ...f, [k]: v }));
  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));
  const submit = () => {
    setDone(true);
    setTimeout(() => { window.location.href = WA_BOOKING; }, 1800);
  };

  return (
    <PageLayout>
      <section className="bg-gradient-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Book Online</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Book your cleaning in 5 steps</h1>
          <p className="mt-3 text-white/85">Quick, simple, confirmed via WhatsApp.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {/* Progress */}
          <div className="flex items-center justify-between mb-10">
            {steps.map((label, i) => (
              <div key={label} className="flex-1 flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`h-10 w-10 rounded-full grid place-items-center font-bold text-sm transition-smooth ${i < step ? "bg-accent text-accent-foreground" : i === step ? "bg-gradient-primary text-white shadow-elegant" : "bg-secondary text-muted-foreground"}`}>
                    {i < step ? <Check className="h-5 w-5" /> : i + 1}
                  </div>
                  <div className="mt-2 text-xs font-medium hidden sm:block text-center">{label}</div>
                </div>
                {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < step ? "bg-accent" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card min-h-[420px]">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="done" initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} className="text-center py-10">
                  <div className="h-20 w-20 mx-auto grid place-items-center rounded-full bg-accent text-white"><CalendarCheck className="h-10 w-10" /></div>
                  <h2 className="mt-6 text-2xl font-bold">Booking received!</h2>
                  <p className="mt-2 text-muted-foreground">Redirecting you to WhatsApp to confirm availability...</p>
                </motion.div>
              ) : (
                <motion.div key={step} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} transition={{duration:.3}}>
                  {step === 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Select a service</h2>
                      <p className="text-sm text-muted-foreground mb-6">What would you like cleaned?</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {services.map(s => (
                          <button key={s} onClick={()=>update("service", s)} className={`p-4 rounded-xl border-2 text-left transition-smooth ${form.service===s?"border-primary bg-primary/5":"border-border hover:border-primary/40"}`}>
                            <div className="font-semibold">{s}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Property details</h2>
                      <p className="text-sm text-muted-foreground mb-6">Tell us about the property.</p>
                      <div className="space-y-4">
                        <Select label="Property type" value={form.propertyType} onChange={v=>update("propertyType", v)} options={propertyTypes} />
                        <Input label="Size / details (e.g. single storey, 4 bedrooms)" value={form.size} onChange={v=>update("size", v)} />
                        <Input label="Address" value={form.address} onChange={v=>update("address", v)} required />
                        <div>
                          <label className="text-sm font-medium">Upload an image (optional)</label>
                          <label className="mt-1 flex items-center gap-3 cursor-pointer rounded-lg border-2 border-dashed border-border p-4 hover:border-primary/40 transition-smooth">
                            <Upload className="h-5 w-5 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{form.image ? form.image.name : "Click to upload a photo"}</span>
                            <input type="file" accept="image/*" className="hidden" onChange={e=>update("image", e.target.files?.[0] ?? null)} />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Schedule</h2>
                      <p className="text-sm text-muted-foreground mb-6">Pick a preferred date and time.</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input label="Preferred date" type="date" value={form.date} onChange={v=>update("date", v)} required />
                        <Select label="Time slot" value={form.slot} onChange={v=>update("slot", v)} options={slots} />
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Your contact info</h2>
                      <p className="text-sm text-muted-foreground mb-6">So we can confirm your booking.</p>
                      <div className="space-y-4">
                        <Input label="Full name" value={form.name} onChange={v=>update("name", v)} required />
                        <Input label="Phone" type="tel" value={form.phone} onChange={v=>update("phone", v)} required />
                        <Input label="Email" type="email" value={form.email} onChange={v=>update("email", v)} required />
                        <div>
                          <label className="text-sm font-medium">Notes (optional)</label>
                          <textarea rows={3} value={form.notes} onChange={e=>update("notes", e.target.value)} className="mt-1 w-full rounded-lg border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 4 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Confirm your booking</h2>
                      <p className="text-sm text-muted-foreground mb-6">Review the details below.</p>
                      <dl className="divide-y divide-border rounded-xl border border-border bg-secondary/40">
                        {[
                          ["Service", form.service],
                          ["Property", `${form.propertyType}${form.size ? " — " + form.size : ""}`],
                          ["Address", form.address || "—"],
                          ["Date", form.date || "—"],
                          ["Time slot", form.slot],
                          ["Name", form.name || "—"],
                          ["Phone", form.phone || "—"],
                          ["Email", form.email || "—"],
                          ["Notes", form.notes || "—"],
                        ].map(([k,v]) => (
                          <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-1 px-4 py-3">
                            <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                            <dd className="font-medium text-right">{v}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-5 text-xs text-muted-foreground">After confirming, you'll be redirected to WhatsApp to finalise the booking with our team.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {!done && (
              <div className="mt-8 flex items-center justify-between">
                <button onClick={prev} disabled={step===0} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold disabled:opacity-30 hover:bg-secondary transition-smooth"><ChevronLeft className="h-4 w-4" /> Back</button>
                {step < steps.length - 1 ? (
                  <button onClick={next} className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-elegant hover:shadow-glow transition-smooth">Continue <ChevronRight className="h-4 w-4" /></button>
                ) : (
                  <button onClick={submit} className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow-elegant hover:scale-105 transition-smooth">Confirm Booking <Check className="h-4 w-4" /></button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v:string)=>void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input type={type} value={value} onChange={e=>onChange(e.target.value)} required={required} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
  );
}
function Select({ label, value, onChange, options }: { label: string; value: string; onChange:(v:string)=>void; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select value={value} onChange={e=>onChange(e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
