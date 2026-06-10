
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 flex flex-col font-sans select-none antialiased">
      {/* 1. Top Utility Bar */}
      <div className="bg-black/20 backdrop-blur-sm text-slate-900 text-xs py-2 px-4 md:px-12 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-6">
          <a href="mailto:info@globetrek.community" className="flex items-center gap-2 hover:text-white transition">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h3a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@globetrekcommunity.com
          </a>
          <a href="tel:+254710146300" className="flex items-center gap-2 hover:text-white transition">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +(254) 710 146 300
          </a>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold tracking-wider px-5 py-2 rounded text-xs uppercase transition-all shadow-md">
            Donate
          </button>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className="px-4 md:px-12 py-6 flex justify-between items-center bg-transparent">
        <div>
        <Image src="/assets/glb.png" alt="Globe Trek Community Support" width={150} height={50} className="object-contain" />
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-[15px] font-bold text-white/90">
          <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
          <Link href="/destinations" className="hover:text-red-500 transition-colors">Services</Link>
          <Link href="/tours" className="hover:text-red-500 transition-colors">Programs</Link>
          <Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
        </nav>

        <button className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg lg:hidden transition backdrop-blur-md">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
    </div>
  );
}