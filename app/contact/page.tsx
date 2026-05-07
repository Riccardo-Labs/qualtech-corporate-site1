import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Qualtech',
  description:
    'Connect with our commercial experts to discuss your machinery needs or representation opportunities.',
};

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-industrial py-20">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4 text-white">Contact Our Network</h1>
            <p className="lead text-white/50">
              Connect with our commercial experts to discuss your machinery needs
              or representation opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="overflow-hidden">
        <iframe
          title="Qualtech — Bollate MI"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.3!2d9.1164!3d45.5396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c14a5b5b5b5b%3A0x0!2sBollate%2C%20MI!5e0!3m2!1sen!2sit!4v1"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
