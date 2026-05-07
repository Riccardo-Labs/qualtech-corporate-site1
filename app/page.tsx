import Link from 'next/link';
import { ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';
import HeroParticles from '@/components/HeroParticles';

const partners = [
  { src: '/partners/winkler.jpg', alt: 'Winkler', maxHeight: '80px', maxWidth: '220px', href: 'https://www.w-u-d.com/' },
  { src: '/partners/partner2.png', alt: 'NLW', maxHeight: '55px', maxWidth: '160px', href: 'https://nlwww.com/' },
  { src: '/partners/gaps.png', alt: 'GAPS', maxHeight: '55px', maxWidth: '160px', href: 'https://www.paperbagmachine-gaps.com/' },
];

const industries = [
  {
    title: 'Flexographic Printing',
    desc: 'High-speed printing solutions for flexible packaging and labels.',
    img: 'https://images.unsplash.com/photo-1565608087341-404b25458fed?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Converting Lines',
    desc: 'Advanced machinery for slitting, rewinding, lamination and material transformation.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Digital Print & Automation',
    desc: 'Inkjet systems for short-run packaging and robotic cells for palletising and quality inspection.',
    img: 'https://images.unsplash.com/photo-1530124560676-587cad321376?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-industrial relative overflow-hidden flex items-center"
        style={{ minHeight: '77vh' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1565608087341-404b25458fed?auto=format&fit=crop&q=80&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 25, 47, 0.78)' }} />
        </div>

        <HeroParticles />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 w-full">
          <div className="max-w-2xl" data-aos="fade-up">
            <h1 className="hero-title text-white">
              Manufacturing Equipment <br />
              <span className="text-primary">Sales Network</span>
            </h1>
            <p className="lead text-white/50 mb-10">
              We represent global manufacturing leaders, connecting high-value industrial
              technology with the world's most demanding packaging producers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white text-white px-10 py-3 rounded-full hover:bg-white hover:text-[var(--industrial-blue)] transition-all font-semibold"
            >
              Need more information? <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="py-14 bg-white border-b overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center">
            {partners.map((p, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 150}>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 object-contain"
                    style={{ maxHeight: p.maxHeight, maxWidth: p.maxWidth }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12" data-aos="fade-right">
            <h6 className="text-primary fw-bold text-uppercase mb-3 text-sm tracking-widest">Why Partner With Us</h6>
            <h2 className="display-5 fw-bold mb-4">Strategic Commercial Representation</h2>
            <p className="text-muted text-xl max-w-xl">
              We don't just sell, we help build market leadership. We provide manufacturers with direct access
              to a high-level network of packaging decision-makers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <Globe className="text-primary mb-4" size={40} />,
                title: 'International Network',
                desc: 'Instant access to the European and global packaging markets through our established commercial relationships built over 25+ years.',
                delay: '100',
              },
              {
                icon: <ShieldCheck className="text-primary mb-4" size={40} />,
                title: 'Technical Credibility',
                desc: 'Our team understands the engineering behind the machines, ensuring accurate technical sales and long-term client trust.',
                delay: '200',
              },
              {
                icon: <Zap className="text-primary mb-4" size={40} />,
                title: 'Lead Acceleration',
                desc: 'Shorten the sales cycle for high-value machinery through targeted prospecting and expert negotiation support.',
                delay: '300',
              },
            ].map((card, i) => (
              <div key={i} className="p-6 bg-white border h-full" data-aos="fade-up" data-aos-delay={card.delay}>
                {card.icon}
                <h4 className="font-bold mb-3 text-lg">{card.title}</h4>
                <p className="text-muted text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-industrial">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3 text-white">Industries We Serve</h2>
            <p className="text-white/50 mx-auto max-w-lg">
              Specialized expertise in the most advanced sectors of industrial packaging production.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{ height: '400px' }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={industry.img}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute bottom-0 left-0 w-full p-6"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                >
                  <h4 className="font-bold text-white mb-2">{industry.title}</h4>
                  <p className="text-white/60 text-sm mb-0">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="mx-auto max-w-7xl px-4" data-aos="zoom-in">
          <h2 className="display-4 fw-bold mb-6">Ready to Expand Your Market?</h2>
          <p className="lead mb-10 opacity-90">
            Whether you are a manufacturer seeking representation or a producer looking for the next generation of machinery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[var(--accent-blue)] font-bold px-10 py-3 rounded-full hover:bg-gray-100 transition-colors no-underline"
            >
              Contact Our Network
            </Link>
            <Link
              href="/partners"
              className="border border-white text-white font-bold px-10 py-3 rounded-full hover:bg-white hover:text-[var(--accent-blue)] transition-colors no-underline"
            >
              View Machinery Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
