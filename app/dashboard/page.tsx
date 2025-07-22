'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [selectedPost, setSelectedPost] = useState('poolside-sunset')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const posts = [
    { id: 'poolside-sunset', views: '45.2K', likes: '2.1K', shares: '156', thumbnail: '🏊‍♂️' },
    { id: 'luxury-suite', views: '38.7K', likes: '1.8K', shares: '89', thumbnail: '🛏️' },
    { id: 'spa-experience', views: '52.1K', likes: '2.4K', shares: '203', thumbnail: '🧖‍♀️' },
    { id: 'dining-excellence', views: '41.3K', likes: '1.9K', shares: '127', thumbnail: '🍽️' },
    { id: 'beach-access', views: '33.8K', likes: '1.6K', shares: '94', thumbnail: '🏖️' },
    { id: 'rooftop-bar', views: '29.5K', likes: '1.3K', shares: '67', thumbnail: '🍸' }
  ]

  const selectedPostData = posts.find(post => post.id === selectedPost)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 mr-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="text-2xl font-bold text-[#578680]">Boostay</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-700">Welcome back, Hotel Manager</div>
            <div className="w-8 h-8 bg-[#578680] rounded-full flex items-center justify-center text-white text-sm font-semibold">
              HM
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className={`bg-white border-r border-gray-200 min-h-screen transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-64' : 'w-16'
        }`}>
          <div className="p-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'dashboard' 
                    ? 'bg-[#578680] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  {sidebarOpen && <span>Dashboard</span>}
                </div>
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'campaigns' 
                    ? 'bg-[#578680] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {sidebarOpen && <span>Campaigns</span>}
                </div>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'analytics' 
                    ? 'bg-[#578680] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  {sidebarOpen && <span>Analytics</span>}
                </div>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-[#578680] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {sidebarOpen && <span>Settings</span>}
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Track your campaign performance and audience insights</p>
            </div>

            {/* Campaign Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Views</p>
                    <p className="text-2xl font-bold text-gray-900">2.4M</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-600 font-medium">+12.5%</span>
                  <span className="text-gray-500 ml-1">vs last month</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Likes</p>
                    <p className="text-2xl font-bold text-gray-900">156K</p>
                  </div>
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-600 font-medium">+8.3%</span>
                  <span className="text-gray-500 ml-1">vs last month</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Reach</p>
                    <p className="text-2xl font-bold text-gray-900">890K</p>
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-600 font-medium">+15.2%</span>
                  <span className="text-gray-500 ml-1">vs last month</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                    <p className="text-2xl font-bold text-gray-900">6.5%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-600 font-medium">+2.1%</span>
                  <span className="text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Geographic Analytics */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Geographic Reach</h3>
                    <p className="text-sm text-gray-600 mt-1">Audience distribution by country</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        { country: 'United States', percentage: 32, views: '768K' },
                        { country: 'United Kingdom', percentage: 18, views: '432K' },
                        { country: 'France', percentage: 15, views: '360K' },
                        { country: 'Germany', percentage: 12, views: '288K' },
                        { country: 'Canada', percentage: 8, views: '192K' },
                        { country: 'Australia', percentage: 6, views: '144K' }
                      ].map((country, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
                              {country.country.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{country.country}</p>
                              <p className="text-xs text-gray-500">{country.views} views</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">{country.percentage}%</p>
                            <div className="w-16 h-1 bg-gray-200 rounded-full mt-1">
                              <div 
                                className="h-1 bg-[#578680] rounded-full"
                                style={{ width: `${country.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Selected Post Analytics */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
                    <p className="text-sm text-gray-600 mt-1">Detailed metrics and audience insights</p>
                  </div>
                  <div className="p-6">
                    {/* Post Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-900">{selectedPostData?.views}</p>
                        <p className="text-sm text-gray-600">Views</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-900">{selectedPostData?.likes}</p>
                        <p className="text-sm text-gray-600">Likes</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-900">{selectedPostData?.shares}</p>
                        <p className="text-sm text-gray-600">Shares</p>
                      </div>
                    </div>

                    {/* Demographics Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Age Groups */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">Age Distribution</h4>
                        <div className="space-y-2">
                          {[
                            { age: '18-24', percentage: 25, color: 'bg-[#578680]' },
                            { age: '25-34', percentage: 35, color: 'bg-[#578680]' },
                            { age: '35-44', percentage: 20, color: 'bg-[#578680]' },
                            { age: '45-54', percentage: 15, color: 'bg-[#578680]' },
                            { age: '55+', percentage: 5, color: 'bg-[#578680]' }
                          ].map((group) => (
                            <div key={group.age} className="flex items-center space-x-3">
                              <div className="w-16 text-xs text-gray-600">{group.age}</div>
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`${group.color} h-2 rounded-full`}
                                  style={{ width: `${group.percentage}%` }}
                                ></div>
                              </div>
                              <div className="w-8 text-xs text-gray-600">{group.percentage}%</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Gender Distribution */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">Gender Distribution</h4>
                        <div className="flex items-center justify-center space-x-8">
                          <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-[#578680] flex items-center justify-center text-white font-bold text-lg mb-2">
                              65%
                            </div>
                            <p className="text-sm text-gray-600">Female</p>
                          </div>
                          <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-lg mb-2">
                              35%
                            </div>
                            <p className="text-sm text-gray-600">Male</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Thumbnails */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">Recent Content</h4>
                      <div className="grid grid-cols-6 gap-3">
                        {posts.map((post) => (
                          <button
                            key={post.id}
                            onClick={() => setSelectedPost(post.id)}
                            className={`aspect-square rounded-lg border-2 transition-all ${
                              selectedPost === post.id
                                ? 'border-[#578680] bg-[#578680]/5'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                            }`}
                          >
                            <div className="w-full h-full flex items-center justify-center text-2xl">
                              {post.thumbnail}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="mt-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      { action: 'New post published', metric: '45.2K views', time: '2 hours ago', icon: '📱' },
                      { action: 'Campaign milestone reached', metric: '1M total views', time: '4 hours ago', icon: '🎯' },
                      { action: 'High engagement detected', metric: '2.4K likes', time: '6 hours ago', icon: '🔥' },
                      { action: 'New audience insights', metric: '24 countries reached', time: '1 day ago', icon: '📊' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="text-xl">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-600">{activity.metric}</p>
                        </div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 