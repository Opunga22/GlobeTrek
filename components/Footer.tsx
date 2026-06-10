import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0b121e] text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h2 className="text-3xl font-black mb-6">Globe <span className="text-red-500">Trek</span></h2>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Globe Trek Community Support connects people with resources, relief, and development programs that strengthen families and neighbourhoods.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-slate-400">
            <li><a href="/destinations" className="hover:text-white transition">Services</a></li>
            <li><a href="/tours" className="hover:text-white transition">Programs</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-slate-400">
            <span>Email:</span>
            <li>support@globetrekcommunity.com</li>
            <span>Tel:</span>
            <li>+254 710 146 300</li>
            <span>Address:</span>
            <li>P.O. Box 36, 40400, Suna,Migori</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Globe Trek Community. All rights reserved.
      </div>
    </footer>
  );
}
