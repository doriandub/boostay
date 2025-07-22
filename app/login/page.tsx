'use client'

export default function Login() {
  return (
    <div className="bg-white min-h-screen w-full text-gray-900 font-sans">
      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-[#578680]">BOOSTAY</a>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors">Features</a>
              <a href="/#dashboard" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors">Analytics</a>
              <a href="/#content" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors">Content Creation</a>
              <a href="/#how" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors">How it Works</a>
            </nav>
            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-sm font-medium text-[#578680] transition-colors">
                Sign In
              </a>
              <a href="/#cta-section" className="bg-[#578680] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a7370] transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* LOGIN SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
              <p className="text-gray-600">Sign in to your Boostay account</p>
            </div>
            
            {/* Login Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#578680] focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#578680] focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 text-[#578680] focus:ring-[#578680] border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-[#578680] hover:underline">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#578680] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#4a7370] transition-colors focus:outline-none focus:ring-2 focus:ring-[#578680] focus:ring-offset-2"
              >
                Sign in
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/#cta-section" className="text-[#578680] hover:underline font-medium">
                  Get started
                </a>
              </p>
            </div>
            

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">BOOSTAY</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md">
                The social media solution for luxury hotels. Data-driven PR that transforms your hotel's online presence and drives real bookings.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/boostay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/hotelseng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {/* Official Instagram Classic Camera Icon (outline style) */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="/#media-features" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors footer-link">Media Features</a></li>
                <li><a href="/#mass-distribution" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors footer-link">Mass Distribution</a></li>
                <li><a href="/#growth-campaigns" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors footer-link">Growth Campaigns</a></li>
                <li><a href="/#content-creation" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors footer-link">Content Creation</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="/privacy" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/cookies" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#cta-section" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base text-gray-400">
              © 2025 Boostay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 