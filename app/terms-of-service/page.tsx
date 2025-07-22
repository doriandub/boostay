"use client";
import Link from "next/link";
export default function TermsOfService() {
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
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Terms of Service</h1>
        <div className="prose prose-gray max-w-none text-gray-700">
          <p>Welcome to Boostay. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.</p>
          <h2>1. Use of Service</h2>
          <p>You agree to use our platform only for lawful purposes and in accordance with these terms. You are responsible for your use of the service and any content you provide.</p>
          <h2>2. Account Registration</h2>
          <p>To access certain features, you may need to register an account. You agree to provide accurate information and keep your credentials secure.</p>
          <h2>3. Intellectual Property</h2>
          <p>All content, trademarks, and data on this site are the property of Boostay or its licensors. You may not use, reproduce, or distribute any content without permission.</p>
          <h2>4. Limitation of Liability</h2>
          <p>Boostay is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability is limited to the amount paid for services.</p>
          <h2>5. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to the service at our discretion, without notice, for conduct that violates these terms or is harmful to other users or us.</p>
          <h2>6. Changes to Terms</h2>
          <p>We may update these Terms of Service at any time. Continued use of the platform constitutes acceptance of the new terms.</p>
          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of Hungary. Any disputes will be subject to the exclusive jurisdiction of the courts of Budapest.</p>
          <h2>8. Contact</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:leo@boostay.com">leo@boostay.com</a>.</p>
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