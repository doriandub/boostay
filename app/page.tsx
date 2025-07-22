'use client'

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("scroll-link")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.replace("#", "");
        if (id) {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="bg-white min-h-screen w-full text-gray-900 font-sans">
      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-lg sm:text-xl font-bold text-[#578680]">BOOSTAY</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#media-features" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors scroll-link">Features</a>
              <a href="#analytics" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors scroll-link">Analytics</a>
              <a href="#content-creation" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors scroll-link">Content Creation</a>
              <a href="#how" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors scroll-link">How it Works</a>
            </nav>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/login" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors">
                Sign In
              </a>
              <button 
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#578680] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a7370] transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-[#578680] hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#media-features" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors py-2 scroll-link">Features</a>
                <a href="#analytics" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors py-2 scroll-link">Analytics</a>
                <a href="#content-creation" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors py-2 scroll-link">Content Creation</a>
                <a href="#how" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors py-2 scroll-link">How it Works</a>
                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                  <a href="/login" className="text-sm font-medium text-gray-700 hover:text-[#578680] transition-colors py-2">
                    Sign In
                  </a>
                  <button 
                    onClick={() => {
                      document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                      setMobileMenuOpen(false);
                    }}
                    className="bg-[#578680] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a7370] transition-colors text-left"
                  >
                    Get Started
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center pt-2 pb-0 sm:pt-4 sm:pb-1 lg:pt-6 lg:pb-2 xl:pt-8 xl:pb-3 md:pt-3 md:pb-0 min-[320px]:pt-2 min-[320px]:pb-0">
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-block bg-[#f5f7fa] text-[#578680] text-xs sm:text-sm font-semibold px-4 py-1 rounded-full shadow-sm border border-gray-100">
              Social Media Solutions for Luxury Hotels
            </span>
          </div>
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            <span>The shortcut to becoming</span>
            <br className="hidden lg:block" />
            <span>Instagram's next viral hotel</span>
          </h1>
          {/* Tagline */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            <span>The next generation of PR - powered by data, elevated by technology,</span>
            <br className="hidden lg:block" />
            <span>and brought to life through authentic social storytelling.</span>
          </p>
          {/* CTA Buttons */}
          <div className="flex justify-center mb-10 sm:mb-14">
            <button 
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#578680] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-[#4a7370] transition-colors text-base sm:text-lg shadow-sm"
            >
              Get Started
            </button>
          </div>
          {/* Trust Badges / Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-2">
            <div className="flex flex-row items-center gap-3 sm:gap-6 lg:gap-10 w-full justify-center">
              <img src="/images/logo1.png" alt="Hotel Brand 1" className="h-[30px] sm:h-9 lg:h-10 w-auto object-contain filter grayscale transition duration-300 hover:filter-none" />
              <img src="/images/logo2.png" alt="Hotel Brand 2" className="h-[30px] sm:h-9 lg:h-10 w-auto object-contain filter grayscale transition duration-300 hover:filter-none" />
              <img src="/images/logo3.png" alt="Hotel Brand 3" className="h-[30px] sm:h-9 lg:h-10 w-auto object-contain filter grayscale transition duration-300 hover:filter-none" />
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA FEATURES */}
      <section id="media-features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex lg:grid mobile-image-above grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Media Features
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  We create a vertical, social-native capsule that tells your story through carefully designed narratives and visuals - crafted to align with your brand and resonate with modern audiences.
                </p>
                <p>
                  This feature is published on our multilingual media platforms, presenting your hotel as a destination of choice in a premium editorial context - inspiring travelers and strengthening your image across borders.
                </p>
              </div>
            </div>
            
            {/* Media Features Illustration - premium Instagram profile mockup */}
            <div className="flex justify-center items-center w-full">
              <div className="w-full max-w-[440px] aspect-[440/260] overflow-hidden flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full h-full flex flex-col overflow-hidden relative">
                  {/* Raised Award Patch Badge */}
                  <div className="absolute top-4 right-4 z-10 flex items-center">
                    <div className="relative">
                      <div className="bg-[#578680] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg border-2 border-white flex flex-col items-center" style={{boxShadow: '0 4px 16px 0 #57868033, 0 2px 8px 0 #0001'}}>
                        <span style={{letterSpacing: '0.04em'}}>The Digital</span>
                        <span style={{letterSpacing: '0.04em'}}>Travel Guide</span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black/10 rounded-b-xl blur-sm" />
                    </div>
                  </div>
                  {/* Profile header */}
                  <div className="flex items-center px-6 pt-7 pb-3 border-b border-gray-100 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gray-200 border-4 border-white shadow-inner flex items-center justify-center mr-4 overflow-hidden">
                      <img
                        src="/images/profile-logo.png"
                        alt="Hotels Instagram profile photo"
                        className="w-full h-full object-cover rounded-full"
                        style={{ minWidth: '100%', minHeight: '100%' }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-2">
                        <span className="font-bold text-lg text-gray-900">Hotels</span>
                        <span className="text-xs text-gray-400 font-mono">@hotelseng</span>
                      </div>
                      <div className="text-xs text-gray-500 font-serif mt-1 leading-snug whitespace-pre-line">
                        🛎️ 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 🗝️<br />Exploring the finest hotels, one stay at a time ✨<br /><span className="text-[#578680]">#𝘈𝘶𝘵𝘩𝘦𝘯𝘵𝘪𝘤𝘛𝘳𝘢𝘷𝘦𝘭𝘎𝘶𝘪𝘥𝘦</span>
                      </div>
                    </div>
                  </div>
                  {/* Instagram grid */}
                  <div className="flex-1 grid grid-cols-4 gap-2 px-4 py-4 bg-[#f8fafc]">
                    {/* 8 vertical post placeholders */}
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="rounded-lg bg-gray-200 h-24 w-full flex flex-col overflow-hidden shadow-sm border border-gray-100 relative">
                        {/* Clean image placeholder, no overlays */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MASS DISTRIBUTION */}
      <section id="mass-distribution" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* In Mass Distribution section, set illustration container to 'order-1 lg:order-none' and text container to 'order-2 lg:order-none' for mobile, and remove flex-col-reverse. Use 'lg:order-none' to reset order on desktop. */}
          <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Visual: Content Distribution Cards */}
            <div className="order-1 lg:order-none w-full">
              <div className="relative h-64 sm:h-72">
                {/* Distribution Cards - Instagram */}
                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg transform -rotate-2 absolute top-2 sm:top-4 left-2 sm:left-4 w-32 sm:w-40 h-52 sm:h-60">
                  <div className="flex items-center mb-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-2"></div>
                    <div className="text-xs font-semibold">Instagram</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded h-24 sm:h-28 mb-3 flex items-center justify-center">
                    <div className="text-white text-center">
                      {/* Paper plane (share) icon */}
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path d="M22 2L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-900 mb-1">247 Posts Scheduled</div>
                  <div className="text-xs text-gray-600">2.1M views</div>
                </div>
                
                {/* Distribution Cards - Facebook */}
                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg transform rotate-2 absolute top-2 sm:top-4 right-2 sm:right-4 w-32 sm:w-40 h-52 sm:h-60">
                  <div className="flex items-center mb-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full mr-2"></div>
                    <div className="text-xs font-semibold">Facebook</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded h-24 sm:h-28 mb-3 flex items-center justify-center">
                    <div className="text-white text-center">
                      {/* Heart icon */}
                      <svg className="w-8 h-8 mx-auto" fill="white" viewBox="0 0 24 24">
                        <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-900 mb-1">183 Posts Scheduled</div>
                  <div className="text-xs text-gray-600">1.8M views</div>
                </div>
                
                {/* Distribution Cards - TikTok */}
                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg transform -rotate-1 absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-52 sm:h-60">
                  <div className="flex items-center mb-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full mr-2"></div>
                    <div className="text-xs font-semibold">TikTok</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-black rounded h-24 sm:h-28 mb-3 flex items-center justify-center">
                    <div className="text-white text-center">
                      {/* Play button (triangle) icon */}
                      <svg className="w-8 h-8 mx-auto" fill="white" viewBox="0 0 24 24">
                        <polygon points="6,4 20,12 6,20 6,4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-900 mb-1">312 Posts Scheduled</div>
                  <div className="text-xs text-gray-600">2.7M views</div>
                </div>
              </div>
            </div>
            
            <div className="order-2 lg:order-none w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Mass Distribution
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  We then take this crafted capsule and deploy it methodically across a constellation of supporting accounts - publishing it hundreds of times per month in different formats and contexts.
                </p>
                <p>
                  This high-volume, data-driven approach multiplies your chances of a viral breakthrough - ensuring one or more posts spark significant attention while driving consistent engagement in your target markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH CAMPAIGNS */}
      <section id="growth-campaigns" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex lg:grid mobile-image-above grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Growth Campaigns
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Our multilingual growth campaigns are designed to fuel your algorithm - bringing in active followers with a real interest in your hotel and destination.
                </p>
                <p>
                  Unlike passive audiences acquired through ads, this engaged community interacts with your content - unlocking organic growth, especially in the countries you choose to activate.
                </p>
              </div>
            </div>
            
            {/* Visual: Growth Chart */}
            <div>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Growth Analytics</h3>
                  <div className="text-sm text-gray-500">Last 30 days</div>
                </div>
                
                {/* New Growth Chart */}
                <div className="relative h-32 sm:h-48 mb-3 sm:mb-4 lg:mb-6">
                  <svg className="w-full h-full" viewBox="0 0 300 120">
                    {/* Grid Lines */}
                    <line x1="0" y1="30" x2="300" y2="30" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="0" y1="60" x2="300" y2="60" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="0" y1="90" x2="300" y2="90" stroke="#e5e7eb" strokeWidth="1" />
                    
                    {/* Segment 1: Gentle slope (organic growth) */}
                    <line x1="0" y1="100" x2="120" y2="90" stroke="#578680" strokeWidth="3" />
                    
                    {/* Segment 2: Softened viral spike (centered) */}
                    <line x1="120" y1="90" x2="150" y2="30" stroke="#578680" strokeWidth="3" />
                    
                    {/* Segment 3: Steeper accelerated growth */}
                    <line x1="150" y1="30" x2="300" y2="0" stroke="#578680" strokeWidth="3" />
                  </svg>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#578680]">+247%</div>
                    <div className="text-xs sm:text-sm text-gray-500">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#578680]">12.4K</div>
                    <div className="text-xs sm:text-sm text-gray-500">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#578680]">89%</div>
                    <div className="text-xs sm:text-sm text-gray-500">Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK YOUR IMPACT */}
      <section id="analytics" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Track Your Results
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              <p>
                Every campaign includes a dedicated dashboard, giving you full transparency on the performance of each featured video - with precise, measurable results for your hotel.
              </p>
              <p>
                For each video, you can see the audience it reached: the countries where it was viewed, the age groups, genders, and engagement levels - all pulled directly from our media accounts via the Meta API.
              </p>
            </div>
          </div>

          {/* New Dashboard Analytics Interface */}
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto p-0">
            <div className="min-w-[1100px] p-6 sm:p-8">
              {/* Top Metrics Cards */}
              <div className="grid grid-cols-4 gap-4 mb-10">
                {/* Total Impressions */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E40AF]/10 mb-3">
                    {/* Eye icon */}
                    <svg className="w-7 h-7 text-[#1E40AF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-[#1E40AF]">2.4M</div>
                  <div className="text-sm text-gray-600">Total Impressions</div>
                  <div className="text-xs text-green-600 mt-1">+8.2% vs last month</div>
                </div>
                {/* Guest Engagement */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D97706]/10 mb-3">
                    {/* Heart icon */}
                    <svg className="w-7 h-7 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-[#D97706]">156K</div>
                  <div className="text-sm text-gray-600">Guest Engagement</div>
                  <div className="text-xs text-green-600 mt-1">+5.1% vs last month</div>
                </div>
                {/* Global Reach */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#059669]/10 mb-3">
                    {/* Globe icon */}
                    <svg className="w-7 h-7 text-[#059669]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-[#059669]">890K</div>
                  <div className="text-sm text-gray-600">Global Reach</div>
                  <div className="text-xs text-green-600 mt-1">+3.7% vs last month</div>
                </div>
                {/* Conversion Rate */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#7C3AED]/10 mb-3">
                    {/* Analytics/growth icon */}
                    <svg className="w-7 h-7 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M21 21H3" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-[#7C3AED]">6.5%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                  <div className="text-xs text-green-600 mt-1">+1.2% vs last month</div>
                </div>
              </div>

              {/* Main Dashboard Area */}
              <div className="grid grid-cols-2 gap-8">
                {/* LEFT COLUMN: Geographic Reach */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col">
                  <div className="mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#578680]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11.5c0 6.36 8.5 10.5 8.5 10.5s8.5-4.14 8.5-10.5C21.5 6.03 16.97 2 12 2z" /><circle cx="12" cy="11.5" r="3.5" /></svg>
                    <h3 className="text-lg font-semibold text-gray-900">Geographic Reach</h3>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">Audience distribution by country</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="fi fi-us w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs">🇺🇸</span>
                        <span className="text-sm text-gray-700">United States</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">36,9%</span>
                        <span className="text-xs text-gray-500">768K views</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="fi fi-gb w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs">🇬🇧</span>
                        <span className="text-sm text-gray-700">United Kingdom</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">10,4%</span>
                        <span className="text-xs text-gray-500">432K views</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="fi fi-de w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs">🇩🇪</span>
                        <span className="text-sm text-gray-700">Germany</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">6,5%</span>
                        <span className="text-xs text-gray-500">360K views</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="fi fi-au w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs">🇦🇺</span>
                        <span className="text-sm text-gray-700">Australia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">3,4%</span>
                        <span className="text-xs text-gray-500">288K views</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="fi fi-fr w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs">🇫🇷</span>
                        <span className="text-sm text-gray-700">France</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">2,7%</span>
                        <span className="text-xs text-gray-500">192K views</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Performance Analytics - Video 239 */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col">
                  <div className="mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#578680]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 21H3" /></svg>
                    <h3 className="text-lg font-semibold text-gray-900">Performance Analytics - Video 239</h3>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">Detailed metrics and audience insights</div>
                  {/* Top metrics */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex flex-col items-center bg-gray-50 rounded-lg px-4 py-2">
                      <div className="text-lg font-bold text-[#578680]">45.2K</div>
                      <div className="text-xs text-gray-600">Views</div>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 rounded-lg px-4 py-2">
                      <div className="text-lg font-bold text-[#578680]">2.1K</div>
                      <div className="text-xs text-gray-600">Likes</div>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 rounded-lg px-4 py-2">
                      <div className="text-lg font-bold text-[#578680]">156</div>
                      <div className="text-xs text-gray-600">Shares</div>
                    </div>
                  </div>
                  {/* Age Distribution Bar Chart */}
                  <div className="mb-6">
                    <div className="text-xs text-gray-500 mb-2">Age Distribution</div>
                    <div className="flex flex-col gap-2">
                      {/* Age groups and bars */}
                      <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-gray-600">13-17</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#578680] h-2 rounded-full" style={{width: '4%'}}></div>
                        </div>
                        <span className="w-10 text-xs text-gray-500 text-right">0.9%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-gray-600">18-24</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#578680] h-2 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="w-10 text-xs text-gray-500 text-right">3.0%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-gray-600">25-34</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#578680] h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                        <span className="w-10 text-xs text-gray-500 text-right">16.6%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-gray-600">35-44</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#578680] h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <span className="w-10 text-xs text-gray-500 text-right">30.6%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-gray-600">45-54</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#578680] h-2 rounded-full" style={{width: '55%'}}></div>
                        </div>
                        <span className="w-10 text-xs text-gray-500 text-right">27.9%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-gray-600">55-64</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#578680] h-2 rounded-full" style={{width: '32%'}}></div>
                        </div>
                        <span className="w-10 text-xs text-gray-500 text-right">16.2%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-gray-600">65+</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#578680] h-2 rounded-full" style={{width: '9%'}}></div>
                        </div>
                        <span className="w-10 text-xs text-gray-500 text-right">4.8%</span>
                      </div>
                    </div>
                  </div>
                  {/* Gender Distribution Pie Chart */}
                  <div>
                    <div className="text-xs text-gray-500 mb-2">Gender Distribution</div>
                    <div className="flex items-center gap-4">
                      <svg width="64" height="64" viewBox="0 0 32 32" className="block" aria-hidden="true">
                        <circle r="16" cx="16" cy="16" fill="#e5e7eb" />
                        <path d="M16 16 L16 0 A16 16 0 1 1 4.8 27.2 Z" fill="#578680" />
                      </svg>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#578680]"></span>
                          <span className="text-xs text-gray-600">Female</span>
                          <span className="text-xs text-gray-500 ml-2">55%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                          <span className="text-xs text-gray-600">Male</span>
                          <span className="text-xs text-gray-500 ml-2">45%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT CREATION */}
      <section id="content-creation" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Content Creation
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  We create vertical-first content engineered for social platforms - blending proven patterns with professional execution tailored to your brand.
                </p>
                <p>
                  Grounded in data and insights from thousands of viral videos, our approach ensures your content resonates authentically and delivers results.
                </p>
              </div>
            </div>
            {/* Ultra-Simple iPhone Mockups: 2 rectangles per phone */}
            <div className="flex flex-row justify-center items-end space-x-4 sm:space-x-8">
              {/* Phone 1 */}
              <div className="relative w-20 h-44 sm:w-28 sm:h-64" style={{borderRadius: '1.1rem', overflow: 'hidden', background: '#e5e7eb'}}>
                <img src="/images/content1.png" alt="Drone Views" className="w-full h-full object-cover" style={{borderRadius: '1.1rem'}} />
                {/* Caption Rectangle */}
                <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 w-[80%] bg-white/80 text-gray-900 text-[11px] sm:text-xs px-2 py-1 rounded-md flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis" style={{backdropFilter: 'blur(2px)'}}>
                  Drone Views
                </div>
              </div>
              {/* Phone 2 */}
              <div className="relative w-20 h-44 sm:w-28 sm:h-64" style={{borderRadius: '1.1rem', overflow: 'hidden', background: '#e5e7eb'}}>
                <img src="/images/content2.png" alt="Reels Content" className="w-full h-full object-cover" style={{borderRadius: '1.1rem'}} />
                {/* Caption Rectangle */}
                <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 w-[80%] bg-white/80 text-gray-900 text-[11px] sm:text-xs px-2 py-1 rounded-md flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis" style={{backdropFilter: 'blur(2px)'}}>
                  Reels Content
                </div>
              </div>
              {/* Phone 3 */}
              <div className="relative w-20 h-44 sm:w-28 sm:h-64" style={{borderRadius: '1.1rem', overflow: 'hidden', background: '#e5e7eb'}}>
                <img src="/images/content3.png" alt="Stories Highlights" className="w-full h-full object-cover" style={{borderRadius: '1.1rem'}} />
                {/* Caption Rectangle */}
                <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 w-[80%] bg-white/80 text-gray-900 text-[11px] sm:text-xs px-2 py-1 rounded-md flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis" style={{backdropFilter: 'blur(2px)'}}>
                  Stories Highlights
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">How It Works</h2>
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Simple three-step process to transform your hotel's social media presence
              </p>
            </div>
          </div>
          {/* Connected Step-by-Step Process */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 relative">
            {/* Step 1 - Contact */}
            <div className="flex flex-col items-center text-center flex-1 z-10">
              <div className="w-12 h-12 rounded-full bg-[#578680] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Contact</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
                Let's connect. You tell us your goals, audience, and brand vision.
              </p>
            </div>
            {/* Connector 1 */}
            <div className="hidden md:flex flex-col items-center justify-center w-24 z-0">
              <svg width="100%" height="48" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 24C32 24 64 24 88 24" stroke="#578680" strokeWidth="3" strokeLinecap="round" />
                <circle cx="88" cy="24" r="5" fill="#578680" />
              </svg>
            </div>
            {/* Step 2 - Creative */}
            <div className="flex flex-col items-center text-center flex-1 z-10">
              <div className="w-12 h-12 rounded-full bg-[#578680] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Creative</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
                We produce the content and run the campaigns across our media network.
              </p>
            </div>
            {/* Connector 2 */}
            <div className="hidden md:flex flex-col items-center justify-center w-24 z-0">
              <svg width="100%" height="48" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 24C32 24 64 24 88 24" stroke="#578680" strokeWidth="3" strokeLinecap="round" />
                <circle cx="88" cy="24" r="5" fill="#578680" />
              </svg>
            </div>
            {/* Step 3 - Tracking */}
            <div className="flex flex-col items-center text-center flex-1 z-10">
              <div className="w-12 h-12 rounded-full bg-[#578680] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Tracking</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
                You follow the performance from your dashboard - powered by Meta data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#578680]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Ready to transform your hotel's social media presence?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join the hotels that are already seeing viral growth and increased bookings through our data-driven approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="mailto:leo@boostay.com"
              className="bg-white text-[#578680] px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Email Us
          </a>
          <a
              href="https://calendly.com/boostay"
            target="_blank"
            rel="noopener noreferrer"
              className="border border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#578680] transition-colors text-sm sm:text-base"
          >
              Book a Call
          </a>
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
                <li><a href="#media-features" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors footer-link scroll-link">Media Features</a></li>
                <li><a href="#mass-distribution" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors footer-link scroll-link">Mass Distribution</a></li>
                <li><a href="#growth-campaigns" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors footer-link scroll-link">Growth Campaigns</a></li>
                <li><a href="#content-creation" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors footer-link scroll-link">Content Creation</a></li>
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

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        .delay-100 { animation-delay: 0.1s !important; }
        .delay-200 { animation-delay: 0.2s !important; }
      `}</style>
      <style jsx global>{`
        @media (max-width: 768px) {
          .mobile-image-above {
            flex-direction: column-reverse !important;
          }
        }
      `}</style>
    </div>
  );
}
