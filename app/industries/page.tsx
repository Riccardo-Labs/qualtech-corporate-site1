import type { Metadata } from 'next';
import { Printer, Layers, Zap, Settings, Cpu, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries & Expertise — Qualtech',
  description:
    'Deep technical knowledge in flexographic printing, converting & lamination, and digital print & automation. We speak the language of your production floor.',
};

const sectors = [
  {
    icon: <Printer size={48} className="text-primary" />,
    title: 'Flexographic Printing',
    desc: "Representing the world's most advanced flexo press manufacturers. From narrow-web label presses to wide-web CI presses for high-speed flexible packaging production.",
    features: ['CI Flexo Presses (up to 8 colours)', 'Narrow-web for labels', 'Hybrid Flexo + Digital systems', 'Film and flexible packaging'],
    img: 'https://images.unsplash.com/photo-1565608087341-404b25458fed?auto=format&fit=crop&q=80&w=1000',
  },
  {
    icon: <Layers size={48} className="text-primary" />,
    title: 'Converting & Lamination',
    desc: 'Solutions for the transformation of paper, film and foil in roll form. High-precision slitter rewinders, solventless laminators and extrusion coating lines.',
    features: ['Slitter Rewinders', 'Solventless Laminators', 'Extrusion Coating', 'Multi-layer film lines'],
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
  },
  {
    icon: <Zap size={48} className="text-primary" />,
    title: 'Digital Print & Automation',
    desc: 'Inkjet printing systems for personalised and short-run packaging, integrated with automated prepress workflows. Robotic cells for palletising and visual inspection.',
    features: ['Inkjet systems for packaging', 'Short-run & variable data', 'Robotic cells (OPC-UA)', 'Visual inspection & quality control'],
    img: 'https://images.unsplash.com/photo-1530124560676-587cad321376?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function Industries() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-industrial py-20">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4 text-white">Industries & Expertise</h1>
            <p className="lead text-white/50">
              Deep technical knowledge in the most demanding sectors of industrial production.
              We speak the language of your production floor.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      {sectors.map((sector, i) => (
        <section key={i} className={`section-padding${i % 2 !== 0 ? ' bg-gray-50' : ''}`}>
          <div className="mx-auto max-w-7xl px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center${i % 2 !== 0 ? ' [direction:rtl]' : ''}`}>
              <div
                className={i % 2 !== 0 ? '[direction:ltr]' : ''}
                data-aos={i % 2 !== 0 ? 'fade-left' : 'fade-right'}
              >
                <div className="mb-4">{sector.icon}</div>
                <h2 className="display-5 fw-bold mb-4">{sector.title}</h2>
                <p className="text-muted text-xl mb-10">{sector.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {sector.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <Settings size={16} className="text-primary flex-shrink-0" />
                      <span className="font-bold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`mt-10 lg:mt-0${i % 2 !== 0 ? ' [direction:ltr]' : ''}`}
                data-aos={i % 2 !== 0 ? 'fade-right' : 'fade-left'}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sector.img}
                  alt={sector.title}
                  className="w-full shadow-lg"
                  style={{ borderRadius: '8px' }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Technical Credibility */}
      <section className="section-padding bg-industrial text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="display-5 fw-bold mb-4">Technical Credibility</h2>
            <p className="text-white/50 mb-12">
              Our agents are trained directly by the manufacturers. We don't just sell;
              we consult on production efficiency, material compatibility and ROI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Cpu size={32} className="text-primary mb-3" />, title: 'Industry 4.0', desc: 'ERP integration, OPC-UA connectivity and IoT-ready smart factory solutions.' },
                { icon: <Shield size={32} className="text-primary mb-3" />, title: 'Compliance', desc: 'All machinery meets EU standards: CE, ATEX, FDA, BRC and IFS certifications.' },
                { icon: <Settings size={32} className="text-primary mb-3" />, title: 'Optimisation', desc: 'Maximising OEE and reducing unplanned downtime across your production lines.' },
              ].map((item, i) => (
                <div key={i}>
                  {item.icon}
                  <h5 className="font-bold mb-2">{item.title}</h5>
                  <p className="small text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
