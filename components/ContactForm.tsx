'use client';
import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        toast.success('Message sent successfully!');
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const inputClass =
    'w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
      {/* Info */}
      <div className="lg:col-span-2" data-aos="fade-right">
        <h2 className="font-bold text-2xl mb-3">Get in Touch</h2>
        <p className="text-muted mb-10">
          Fill out the form and a specialised sales agent will get back to you promptly.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
              <MapPin className="text-primary" size={22} />
            </div>
            <div>
              <h5 className="font-bold mb-1">Office Location</h5>
              <p className="text-muted mb-0 text-sm">Via Milano 25<br />Bollate (MI) — Italy</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
              <Phone className="text-primary" size={22} />
            </div>
            <div>
              <h5 className="font-bold mb-1">Phone</h5>
              <p className="text-muted mb-0 text-sm">+39 02 123 4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
              <Mail className="text-primary" size={22} />
            </div>
            <div>
              <h5 className="font-bold mb-1">Email</h5>
              <p className="text-muted mb-0 text-sm">info@qualtech.it</p>
            </div>
          </div>
        </div>

        <hr className="my-8" />
        <h5 className="font-bold mb-3">Follow Our Network</h5>
        <button className="border border-blue-600 text-blue-600 p-2 rounded-full hover:bg-blue-50 transition" style={{ width: '45px', height: '45px' }}>
          <Linkedin size={20} />
        </button>
      </div>

      {/* Form */}
      <div className="lg:col-span-3" data-aos="fade-left">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-bold text-xs uppercase mb-2 tracking-wide">Full Name *</label>
                <input type="text" name="user_name" placeholder="John Smith" required className={inputClass} />
              </div>
              <div>
                <label className="block font-bold text-xs uppercase mb-2 tracking-wide">Company *</label>
                <input type="text" name="company_name" placeholder="Packaging Corp Ltd" required className={inputClass} />
              </div>
              <div>
                <label className="block font-bold text-xs uppercase mb-2 tracking-wide">Email *</label>
                <input type="email" name="user_email" placeholder="john@company.com" required className={inputClass} />
              </div>
              <div>
                <label className="block font-bold text-xs uppercase mb-2 tracking-wide">Phone</label>
                <input type="tel" name="user_phone" placeholder="+39 ..." className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className="block font-bold text-xs uppercase mb-2 tracking-wide">Role / Position</label>
                <input type="text" name="user_role" placeholder="Production Manager / CEO" className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className="block font-bold text-xs uppercase mb-2 tracking-wide">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Describe your machinery needs or enquiry..."
                  required
                  className={inputClass}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-industrial w-full py-3 flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : (<>Send Enquiry <Send size={18} /></>)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
