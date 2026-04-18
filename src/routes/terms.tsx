import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | D&C Exterior Cleaning Melbourne" },
      { name: "description", content: "Terms & Conditions for D&C Exterior Cleaning Service Melbourne." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-primary text-white py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-white/80 text-sm">Last updated: {new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>
      <section className="py-16">
        <article className="mx-auto max-w-4xl px-4 lg:px-8 prose prose-slate max-w-none space-y-6 text-foreground/85 leading-relaxed">
          <p>Welcome to D&C Exterior Cleaning Service Melbourne ("we", "us", "our"). By booking or using our services, you agree to the following terms.</p>
          <Section title="1. Services">
            We provide exterior cleaning services including but not limited to house washing, gutter cleaning, solar panel cleaning, window cleaning and exterior surface cleaning across Melbourne and surrounding suburbs.
          </Section>
          <Section title="2. Quotes & Pricing">
            All quotes are valid for 30 days unless otherwise stated. Final pricing may vary based on on-site assessment of property size, condition and access.
          </Section>
          <Section title="3. Bookings & Cancellations">
            Bookings can be made via phone, WhatsApp, our website, or email. We require at least 24 hours notice for cancellations. Late cancellations may incur a small fee.
          </Section>
          <Section title="4. Access & Site Conditions">
            The customer is responsible for providing safe and reasonable access to the property, including water and power if required. We reserve the right to reschedule jobs for safety reasons (severe weather, unsafe access).
          </Section>
          <Section title="5. Liability">
            We carry public liability insurance. We will exercise all reasonable care while performing services. We are not liable for pre-existing damage, loose tiles, brittle paint, blocked downpipes or any condition disclosed or undisclosed prior to commencement.
          </Section>
          <Section title="6. Payment">
            Payment is due upon completion of the service unless prior arrangements are made. We accept bank transfer and most major payment methods.
          </Section>
          <Section title="7. Satisfaction Guarantee">
            If you are not satisfied with our work, please notify us within 48 hours and we will return to address any reasonable issues at no additional cost.
          </Section>
          <Section title="8. Photos">
            We may take before/after photos for quality assurance and marketing purposes. Please notify us in writing if you do not wish your property photos to be used publicly.
          </Section>
          <Section title="9. Governing Law">
            These terms are governed by the laws of Victoria, Australia.
          </Section>
          <Section title="10. Contact">
            Questions about these terms? Contact us at info@dcexteriorcleaning.com.au or +61 430 539 714.
          </Section>
        </article>
      </section>
    </PageLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
