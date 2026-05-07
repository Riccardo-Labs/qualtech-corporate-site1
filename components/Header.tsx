'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/">
            <Image
              src="/logo-1024x195.png"
              alt="Qualtech"
              width={189}
              height={36}
              style={{ height: '36px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-industrial ml-4"
              style={{
                borderRadius: '34px',
                padding: '6px 18px',
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: 'normal',
                textTransform: 'none',
              }}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 pt-2 flex flex-col gap-1 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link block py-2${pathname === link.href ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-industrial text-center mt-2"
              style={{ borderRadius: '34px', padding: '10px 18px', textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}
            >
              Get in Touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
