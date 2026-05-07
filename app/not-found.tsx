import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-industrial flex items-center" style={{ minHeight: '80vh' }}>
      <div className="mx-auto max-w-7xl px-4 py-20 text-center w-full">
        <h1 className="font-bold mb-3 text-white" style={{ fontSize: '6rem', lineHeight: 1 }}>404</h1>
        <h2 className="font-bold mb-4 text-white text-3xl">Page Not Found</h2>
        <p className="text-white/50 text-xl mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-industrial inline-flex items-center gap-2 px-10 py-3">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
