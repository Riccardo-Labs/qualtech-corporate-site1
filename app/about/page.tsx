import type { Metadata } from 'next';
import { FaAward, FaGlobe, FaShieldAlt, FaBolt, FaHandshake, FaChartLine } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About — Qualtech',
  description:
    'Founded in Bollate (MI), Qualtech is a professional commercial network bridging engineering innovation with industrial growth in the packaging sector.',
};

const values = [
  { icon: <FaShieldAlt className="text-primary" size={32} />, title: 'Integrity', desc: 'Transparent commercial dealings and honest technical assessment, with no conflicts of interest.' },
  { icon: <FaBolt className="text-primary" size={32} />, title: 'Expertise', desc: 'Continuous training on the latest industrial technologies to deliver genuine consultancy value.' },
  { icon: <FaHandshake className="text-primary" size={32} />, title: 'Partnership', desc: 'Long-term commitment to both manufacturers and client companies alike.' },
  { icon: <FaChartLine className="text-primary" size={32} />, title: 'Results', desc: 'Focused on delivering measurable market growth for every manufacturer we represent.' },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-industrial py-20">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4 text-white">About Qualtech</h1>
            <p className="lead text-white/50">
              A legacy of commercial excellence in the industrial packaging sector.
              We are the bridge between engineering innovation and industrial growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div data-aos="fade-right">
              <h6 className="text-primary fw-bold text-uppercase mb-3 text-sm tracking-widest">Our Story</h6>
              <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
              <p className="text-muted text-xl mb-4">
                Founded in Bollate (MI), Qualtech was established to provide high-end machinery
                manufacturers with a professional, technically-competent commercial presence
                in the Italian and European market.
              </p>
              <p className="text-muted mb-10">
                We believe industrial sales require more than just a network — they require a
                deep understanding of the manufacturing process. Our team consists of former
                production managers and industrial engineers who have moved into commercial
                leadership and speak the language of the production floor.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <FaAward className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h5 className="font-bold mb-0">15+ Years</h5>
                    <p className="small text-muted mb-0">Market Presence</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h5 className="font-bold mb-0">40+ Brands</h5>
                    <p className="small text-muted mb-0">Global Representation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0" data-aos="fade-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Qualtech office"
                className="w-full shadow-lg"
                style={{ borderRadius: '8px' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h6 className="text-primary fw-bold text-uppercase mb-3 text-sm tracking-widest">The Principles That Guide Us</h6>
            <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
            <p className="text-muted mx-auto max-w-lg">
              The principles that guide our commercial representation and client relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-6 text-center h-full"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex justify-center mb-3">{value.icon}</div>
                <h5 className="font-bold mb-3">{value.title}</h5>
                <p className="small text-muted mb-0">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
