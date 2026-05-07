import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Settings, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partners & Machinery — Qualtech',
  description:
    'Exclusively representing the most prestigious industrial packaging machinery manufacturers. Explore our curated portfolio.',
};

const partners = [
  {
    name: 'Flexo Press Systems',
    origin: 'Austria',
    category: 'Flexographic Printing',
    machines: ['CI Press F-Series (up to 8 colours)', 'Narrow-web LabelPro', 'Hybrid Flexo + Digital systems'],
    desc: 'Global leader in high-speed flexographic printing technology for flexible packaging, film and labels.',
  },
  {
    name: 'ConvertLine Europa',
    origin: 'Germany',
    category: 'Converting',
    machines: ['S-Line Slitter Rewinders', 'L-Series Laminators', 'High-speed rewinders'],
    desc: 'Specialists in high-precision converting solutions for laminated materials, rolls and plastic films.',
  },
  {
    name: 'DigitalPack Pro',
    origin: 'Netherlands',
    category: 'Digital Printing',
    machines: ['Inkjet packaging systems', 'Automated prepress workflow', 'Short-run & variable data'],
    desc: 'Inkjet printing systems for personalised packaging, variable data printing and premium short-run production.',
  },
  {
    name: 'DieCut Industrial',
    origin: 'Italy',
    category: 'Die-Cutting',
    machines: ['Automatic flatbed die-cutters', 'Rotary die-cutting systems', 'Inline inspection units'],
    desc: 'Automatic die-cutting presses for corrugated board and composite materials, precision to one tenth of a millimetre.',
  },
  {
    name: 'PackBot Systems',
    origin: 'Japan',
    category: 'Automation',
    machines: ['Robotic cells with OPC-UA', 'Automatic palletisers', 'Machine vision systems'],
    desc: 'Robotic cells for palletising, packaging and visual quality inspection with native ERP integration.',
  },
  {
    name: 'LaminaTech Group',
    origin: 'Germany',
    category: 'Lamination',
    machines: ['Multi-layer film laminators', 'Solventless coating lines', 'Food & pharma certified lines'],
    desc: 'Laminating machines for multi-layer films certified to FDA, BRC and IFS standards for food, pharma and cosmetics.',
  },
];

export default function Partners() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-industrial py-20">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4 text-white">Our Partners & Machinery</h1>
            <p className="lead text-white/50">
              We exclusively represent the most prestigious manufacturers in the industry.
              Explore our curated portfolio of industrial excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Partners grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="font-bold text-2xl mb-2">Represented Manufacturers</h2>
            <p className="text-muted">Direct commercial access to world-class engineering.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="rounded-lg shadow-sm overflow-hidden border-0 flex flex-col md:flex-row h-full"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Left panel */}
                <div className="bg-gray-50 flex items-center justify-center p-6 border-r md:w-48 flex-shrink-0">
                  <div className="text-center">
                    <div
                      className="bg-white shadow-sm mx-auto flex items-center justify-center mb-3"
                      style={{ width: '70px', height: '70px', borderRadius: '50%' }}
                    >
                      <Settings className="text-primary" size={32} />
                    </div>
                    <h6 className="font-bold mb-1 text-xs">{partner.name}</h6>
                    <span className="bg-gray-500 text-white px-2 py-0.5 rounded text-xs uppercase">{partner.origin}</span>
                  </div>
                </div>
                {/* Right panel */}
                <div className="p-5 flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-primary text-white px-3 py-1 rounded text-sm">{partner.category}</span>
                    <ShieldCheck className="text-green-500" size={20} />
                  </div>
                  <p className="text-muted text-sm mb-3">{partner.desc}</p>
                  <h6 className="font-bold mb-2 text-xs">Key Machinery:</h6>
                  <ul className="list-none p-0 space-y-1">
                    {partner.machines.map((machine, mi) => (
                      <li key={mi} className="text-sm flex items-start gap-2">
                        <ExternalLink size={13} className="text-primary flex-shrink-0 mt-0.5" />
                        {machine}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for manufacturers */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
            <h2 className="font-bold text-3xl mb-4">Are You a Manufacturer?</h2>
            <p className="text-muted mb-10">
              Looking for a commercial partner to enter or grow in the Italian and European market?
              We are always open to new representation agreements with leading manufacturers.
            </p>
            <Link href="/contact" className="btn-industrial px-10 py-3">
              Apply for Representation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
