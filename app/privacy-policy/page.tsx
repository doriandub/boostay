"use client";
import Link from "next/link";
export default function PrivacyPolicy() {
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
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none text-gray-700">
          <p>At Boostay, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
          <h2>1. Information We Collect</h2>
          <ul>
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Usage data and analytics</li>
            <li>Cookies and tracking technologies</li>
          </ul>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To improve user experience and our platform</li>
            <li>To communicate with you about updates, offers, and support</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2>3. Sharing Your Information</h2>
          <p>We do not sell your personal information. We may share data with trusted third parties who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</p>
          <h2>4. Cookies</h2>
          <p>We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings.</p>
          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at <a href="mailto:leo@boostay.com">leo@boostay.com</a>.</p>
          <h2>7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          <h2>8. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:leo@boostay.com">leo@boostay.com</a>.</p>
          <h2>Company & Hosting Information</h2>
          <ul>
            <li><b>Website publisher:</b> Plateformes Bt</li>
            <li><b>Address:</b> Ady Endre utca 69, 8089 Vértesacsa, Hungary</li>
            <li><b>Company registration:</b> 07-06-016519</li>
            <li><b>Registered:</b> Commercial Court of Budapest</li>
            <li><b>Contact:</b> leo@boostay.com</li>
            <li><b>Hosting provider:</b> Hostinger International Ltd</li>
            <li><b>Hosting address:</b> 61 Lordou Vironos Street, 6023 Larnaca, Cyprus</li>
            <li><b>Hosting website:</b> <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer">https://www.hostinger.com</a></li>
          </ul>
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