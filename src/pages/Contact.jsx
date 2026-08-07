import PageHeader from '../components/PageHeader';
import ContactSection from '../components/Contact';

/* Contact page — reach out to TechTron */
export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in"
        highlight="Touch"
        description="Questions, ideas, or want to join? We'd love to hear from you."
      />
      {/* showHeading={false} — PageHeader already shows "Get in Touch" */}
      <ContactSection showHeading={false} />
    </>
  );
}
