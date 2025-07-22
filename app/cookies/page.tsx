"use client";
import Link from "next/link";
export default function Cookies() {
  return (
    <div className="bg-white min-h-screen w-full text-gray-900 font-sans flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <span className="text-lg sm:text-xl font-bold text-[#578680]">BOOSTAY</span>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors">Home</Link>
          </nav>
        </div>
      </header>
      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">Cookie Policy</h1>
        <div className="text-sm text-gray-500 mb-8">Last updated: June 2024</div>
        <div className="prose prose-gray max-w-none text-gray-700">
          <p>This Cookie Policy explains how Boostay uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
          <h2>1. What Are Cookies?</h2>
          <p>Cookies are small data files placed on your device when you visit a website. They are widely used to make websites work, or to work more efficiently, as well as to provide reporting information.</p>
          <h2>2. How We Use Cookies</h2>
          <ul>
            <li>To enable essential website functionality</li>
            <li>To analyze site usage and improve our services</li>
            <li>To remember your preferences</li>
          </ul>
          <h2>3. Your Choices</h2>
          <p>You can control or delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.</p>
          <h2>4. Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          <h2>5. Contact</h2>
          <p>If you have any questions about our use of cookies, please contact us at <a href="mailto:leo@boostay.com">leo@boostay.com</a>.</p>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="mb-6">
            <h2 className="font-bold text-lg mb-2">Website Publisher</h2>
            <div className="text-gray-700">
              This site is operated by: <b>Plateformes Bt</b><br />
              Ady Endre utca 69, 8089 Vértesacsa, Hungary<br />
              Company registration number: 07-06-016519<br />
              Registered at the Commercial Court of Budapest<br />
              Contact: <a href="mailto:leo@boostay.com" className="text-[#578680] underline">leo@boostay.com</a>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Hosting Provider</h2>
            <div className="text-gray-700">
              Hostinger International Ltd<br />
              61 Lordou Vironos Street, 6023 Larnaca, Cyprus<br />
              <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer" className="text-[#578680] underline">https://www.hostinger.com</a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link href="/" className="text-[#578680] hover:underline">← Back to Home</Link>
        </div>
      </main>
      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          © 2025 Boostay. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 