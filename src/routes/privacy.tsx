import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | D&C Exterior Cleaning Melbourne" },
      { name: "description", content: "Privacy Policy for D&C Exterior Cleaning Service Melbourne." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-primary text-white py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-white/80 text-sm">Last updated: {new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>
      <section className="py-16">
        <article className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6 text-foreground/85 leading-relaxed">
          <p>D&C Exterior Cleaning Service Melbourne respects your privacy. This policy explains how we collect, use, and protect your personal information.</p>
          <S title="1. Information We Collect">We collect information you provide directly: name, phone, email, address, property details, and any messages or photos shared during booking or quoting.</S>
          <S title="2. How We Use It">To provide quotes, schedule and deliver services, respond to enquiries, send service updates, process payments, and improve our offering.</S>
          <S title="3. Sharing">We do not sell your personal information. We may share information with trusted partners (e.g., payment providers) strictly to fulfil services. We may disclose information if required by law.</S>
          <S title="4. Data Security">We use reasonable technical and organisational measures to protect your data. No method of transmission over the internet is 100% secure.</S>
          <S title="5. Cookies & Analytics">Our website may use cookies and analytics tools to understand usage and improve experience. You can control cookies through your browser settings.</S>
          <S title="6. Your Rights">You may request access to, correction of, or deletion of your personal information by contacting us. We aim to respond within 30 days.</S>
          <S title="7. Children">Our services are not directed to children under 16. We do not knowingly collect their information.</S>
          <S title="8. Changes">We may update this policy. The "last updated" date above will reflect the latest version.</S>
          <S title="9. Contact">For privacy questions, contact us at info@dcexteriorcleaning.com.au or +61 430 539 714.</S>
        </article>
      </section>
    </PageLayout>
  );
}

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
