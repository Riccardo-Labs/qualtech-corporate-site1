import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-industrial py-16 mt-auto">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Qualtech"
                width={120}
                height={32}
                style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-white/50 mb-6 text-sm leading-relaxed">
              Premier commercial network representing global leaders in industrial packaging machinery.
              Bridging the gap between high-end manufacturers and production excellence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-bold mb-4 text-white">Quick Links</h5>
            <ul className="list-none p-0 space-y-2">
              {[
                { href: '/services', label: 'Services' },
                { href: '/industries', label: 'Industries' },
                { href: '/partners', label: 'Partners' },
                { href: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm no-underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h5 className="font-bold mb-4 text-white">Industries</h5>
            <ul className="list-none p-0 space-y-2">
              {[
                'Flexographic Printing',
                'Converting Lines',
                'Digital Print & Automation',
              ].map((item) => (
                <li key={item}>
                  <Link href="/industries" className="text-white/50 hover:text-white text-sm no-underline transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold mb-4 text-white">Contact Info</h5>
            <ul className="list-none p-0 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-white/50 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-white/50 text-sm">Via Milano 25<br />Bollate (MI), Italy</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-white/50 flex-shrink-0" size={18} />
                <span className="text-white/50 text-sm">+39 02 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-white/50 flex-shrink-0" size={18} />
                <span className="text-white/50 text-sm">info@qualtech.it</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm mb-0">© 2026 Qualtech S.r.l. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 text-sm no-underline hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 text-sm no-underline hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
