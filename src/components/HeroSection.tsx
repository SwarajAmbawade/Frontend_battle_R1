
import React, { useState } from 'react';

const HeroSection = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  const items = [
    { id: 'reports', label: 'Reports' },
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'consolidations', label: 'Consolidations' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="parallax-element absolute top-20 left-10 w-32 h-32 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-xl"></div>
        <div className="parallax-element absolute top-40 right-20 w-48 h-48 bg-purple-500/20 dark:bg-purple-400/20 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="parallax-element absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 dark:bg-cyan-400/20 rounded-full blur-xl" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Trust indicators */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-white/80 dark:text-white/90 text-sm">
        <div className="flex items-center gap-2">
          <span>⭐</span>
          <span>4.8 rating on Capterra</span>
        </div>
        <div className="flex items-center gap-2">
          <span>⭐</span>
          <span>4.8 rating on G2</span>
        </div>
        <div className="flex items-center gap-2">
          <span>⭐</span>
          <span>350+ reviews on Xero</span>
        </div>
        <div className="flex items-center gap-2">
          <span>⭐</span>
          <span>550+ reviews on QuickBooks</span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white dark:text-white mb-8 slide-up-animation">
            Create{' '}
            <span 
              className={`inline-block cursor-pointer transition-all duration-300 ${
                selectedItem === 'reports' ? 'text-blue-400 dark:text-blue-300 scale-110' : 'hover:text-blue-300 dark:hover:text-blue-200'
              }`}
              onMouseEnter={() => setSelectedItem('reports')}
              onMouseLeave={() => setSelectedItem(null)}
            >
              reports
            </span>
            ,{' '}
            <span 
              className={`inline-block cursor-pointer transition-all duration-300 ${
                selectedItem === 'dashboards' ? 'text-purple-400 dark:text-purple-300 scale-110' : 'hover:text-purple-300 dark:hover:text-purple-200'
              }`}
              onMouseEnter={() => setSelectedItem('dashboards')}
              onMouseLeave={() => setSelectedItem(null)}
            >
              dashboards
            </span>
            {' '}& {' '}
            <span 
              className={`inline-block cursor-pointer transition-all duration-300 ${
                selectedItem === 'consolidations' ? 'text-cyan-400 dark:text-cyan-300 scale-110' : 'hover:text-cyan-300 dark:hover:text-cyan-200'
              }`}
              onMouseEnter={() => setSelectedItem('consolidations')}
              onMouseLeave={() => setSelectedItem(null)}
            >
              consolidations
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-12 fade-scale-animation" style={{animationDelay: '0.5s'}}>
            <span className="text-yellow-400 dark:text-yellow-300 text-2xl">✨</span>
            <p className="text-2xl text-white/90 dark:text-white/95">Now with AI-insights</p>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl fade-scale-animation" style={{animationDelay: '1s'}}>
            Start 14-day free trial →
          </button>
          
          <div className="mt-8 fade-scale-animation" style={{animationDelay: '1.2s'}}>
            <button className="text-white/70 hover:text-white dark:text-white/80 dark:hover:text-white underline">
              📊 See what we do
            </button>
          </div>
        </div>

        {/* Interactive preview cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {selectedItem === 'reports' && (
            <div className="md:col-span-3 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-8 fade-scale-animation">
              <h3 className="text-2xl font-bold text-white dark:text-white mb-4">Financial Reports</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/20 dark:bg-black/30 rounded-lg p-4">
                  <h4 className="text-white dark:text-white font-semibold mb-2">Total Income</h4>
                  <p className="text-red-400 dark:text-red-300">↘ 36.5%</p>
                  <p className="text-white dark:text-white text-2xl font-bold">$426.8K</p>
                  <p className="text-white/60 dark:text-white/70 text-sm">$672.5K total last year</p>
                </div>
                <div className="bg-white/20 dark:bg-black/30 rounded-lg p-4">
                  <h4 className="text-white dark:text-white font-semibold mb-2">Cash Flow</h4>
                  <p className="text-green-400 dark:text-green-300">↗ 202.9%</p>
                  <p className="text-white dark:text-white text-2xl font-bold">$288,721</p>
                </div>
              </div>
            </div>
          )}
          
          {selectedItem === 'dashboards' && (
            <div className="md:col-span-3 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-8 fade-scale-animation">
              <h3 className="text-2xl font-bold text-white dark:text-white mb-4">Interactive Dashboards</h3>
              <div className="bg-white/20 dark:bg-black/30 rounded-lg p-4">
                <h4 className="text-white dark:text-white font-semibold mb-2">Expenses Overview</h4>
                <p className="text-white dark:text-white text-xl">$56.2K</p>
                <div className="mt-4 flex gap-2">
                  <div className="h-2 bg-green-400 dark:bg-green-300 rounded flex-1"></div>
                  <div className="h-2 bg-blue-400 dark:bg-blue-300 rounded flex-1"></div>
                  <div className="h-2 bg-purple-400 dark:bg-purple-300 rounded flex-1"></div>
                  <div className="h-2 bg-orange-400 dark:bg-orange-300 rounded flex-1"></div>
                </div>
              </div>
            </div>
          )}
          
          {selectedItem === 'consolidations' && (
            <div className="md:col-span-3 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-8 fade-scale-animation">
              <h3 className="text-2xl font-bold text-white dark:text-white mb-4">Data Consolidations</h3>
              <p className="text-white/80 dark:text-white/90">Automatically consolidate data from multiple sources with AI-powered insights.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
