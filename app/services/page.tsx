import type { Metadata } from 'next';
import { Briefcase, BarChart, Users, TrendingUp, Search, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — Qualtech',
  description:
    'Comprehensive commercial solutions for the industrial machinery sector. Commercial representation, market development, sales negotiation and more.',
};

const services = [
  {
    icon: <Briefcase size={40} className="text-primary mb-4" />,
    title: 'Commercial Representation',
    desc: 'Full-scale agency services for machinery manufacturers. We act as your local commercial office, managing the entire sales pipeline from lead generation to contract closing.',
  },
  {
    icon: <TrendingUp size={40} className="text-primary mb-4" />,
    title: 'Market Development',
    desc: 'Strategic planning to enter new geographical or industrial sectors. We identify high-potential targets and build the commercial relationships needed to succeed.',
  },
  {
    icon: <Handshake size={40} className="text-primary mb-4" />,
    title: 'Sales Negotiation',
    desc: 'Expert support in high-value B2B negotiations. We manage technical presentations, factory demos and commercial discussions for projects ranging from €200k to €5M+.',
  },
  {
    icon: <Users size={40} className="text-primary mb-4" />,
    title: 'Qualified Network',
    desc: 'Over 15 years of industry relationships with key decision-makers: procurement managers, production directors and business owners across the packaging sector.',
  },
  {
    icon: <Search size={40} className="text-primary mb-4" />,
    title: 'Machinery Selection',
    desc: "Before proposing any solution, we study the client's production capacity, existing lines, growth targets and budget — then match them with the right machine.",
  },
  {
    icon: <BarChart size={40} className="text-primary mb-4" />,
    title: 'After-Sales & Follow-up',
    desc: 'We coordinate installation, commissioning and operator training, and remain the ongoing point of contact for upgrades, spare parts and future purchases.',
  },
];

const steps = [
  'Client analysis and production context assessment',
  'Selection of the most suitable machinery',
  'End-to-end negotiation management',
  'After-sales support and ongoing follow-up',
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-industrial py-20">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4 text-white">Our Services</h1>
            <p className="lead text-white/50">
              Comprehensive commercial solutions for the industrial machinery sector.
              We bridge the gap between engineering excellence and market success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="card-industrial p-6 shadow-sm h-full"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {service.icon}
                <h4 className="font-bold text-xl mb-3">{service.title}</h4>
                <p className="text-muted text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h6 className="text-primary fw-bold text-uppercase mb-3 text-sm tracking-widest">How We Work</h6>
              <h2 className="display-5 fw-bold mb-4">The Qualtech Approach</h2>
              <p className="text-muted mb-6">
                Our methodology is built on technical credibility and commercial persistence.
                We don't just send brochures; we understand the production needs of our
                clients and the engineering capabilities of our manufacturer partners.
              </p>
              <ul className="list-none p-0 space-y-3">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <span
                      className="bg-primary text-white flex items-center justify-content-center flex-shrink-0 rounded-full text-sm"
                      style={{ width: '28px', height: '28px', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0" data-aos="fade-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000"
                alt="Business Meeting"
                className="w-full shadow-lg"
                style={{ borderRadius: '8px' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
