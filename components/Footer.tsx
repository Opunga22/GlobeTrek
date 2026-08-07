import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b121e] text-white py-12 sm:py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        <div className="sm:col-span-2 lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-black mb-6">Globe <span className="text-red-500">Trek</span></h2>
          <p className="text-slate-400 max-w-sm leading-relaxed text-sm sm:text-base">
            Globe Trek Community Support connects people with resources, relief, and development programs that strengthen families and neighbourhoods.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3 sm:space-y-4 text-slate-400 text-sm sm:text-base">
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/programs" className="hover:text-white transition">Programs</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/donate" className="font-semibold text-red-400 hover:text-red-300 transition">Donate</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h3>
          <ul className="space-y-3 sm:space-y-4 text-slate-400 text-sm sm:text-base">
            <li>
              <span className="block text-white text-xs font-bold uppercase mb-1">Email:</span>
              support@globetrekcommunity.com
            </li>
            <li>
              <span className="block text-white text-xs font-bold uppercase mb-1">Tel:</span>
              +254 710 146 300
            </li>
            <li>
              <span className="block text-white text-xs font-bold uppercase mb-1">Address:</span>
              P.O. Box 36, 40400, Suna, Migori
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Globe Trek Community. All rights reserved.
      </div>
    </footer>
  );
}
