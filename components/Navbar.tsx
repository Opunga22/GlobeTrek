'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50 flex flex-col font-sans select-none antialiased">
      {/* 1. Top Utility Bar */}
      {/* <div className="bg-black/20 backdrop-blur-sm text-slate-900 text-[10px] sm:text-xs py-2 px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center border-b border-white/10 gap-2 sm:gap-0">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="mailto:info@globetrek.community" className="flex items-center gap-2 hover:text-white transition whitespace-nowrap">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h3a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@globetrekcommunity.com
          </a>
          <a href="tel:+254710146300" className="flex items-center gap-2 hover:text-white transition whitespace-nowrap">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +(254) 710 146 300
          </a>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold tracking-wider px-4 sm:px-5 py-1.5 sm:py-2 rounded text-[10px] sm:text-xs uppercase transition-all shadow-md">
            Donate
          </button>
        </div>
      </div> */}

      {/* 2. Main Navigation Header */}
      <header className="px-4 md:px-12 py-4 sm:py-6 flex justify-between items-center bg-transparent">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-red-600 bg-slate-800">
          <Image src="/assets/neew.jpeg" alt="Globe Trek Community Support" width={48} height={48} className="h-full w-full object-cover" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-bold text-white/90">
          <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-red-500 transition-colors">Services</Link>
          <Link href="/programs" className="hover:text-red-500 transition-colors">Programs</Link>
          <Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg lg:hidden transition backdrop-blur-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </header>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-700 p-4">
          <nav className="flex flex-col gap-4 text-center font-bold text-white/90">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-red-500 transition-colors border-b border-white/5">Home</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-red-500 transition-colors border-b border-white/5">Services</Link>
            <Link href="/programs" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-red-500 transition-colors border-b border-white/5">Programs</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-red-500 transition-colors border-b border-white/5">Blog</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-red-500 transition-colors border-b border-white/5">About Us</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-red-500 transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </div>
  );
}