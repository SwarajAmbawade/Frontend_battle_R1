
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';

const StatsSection = () => {
  const carbonData = [
    { name: '2019', value: 540, target2030: 500, target2025: 600 },
    { name: '2020', value: 278, target2030: 500, target2025: 600 },
    { name: '2021', value: 875, target2030: 500, target2025: 600 },
    { name: '2022', value: 617, target2030: 500, target2025: 600 },
    { name: '2023', value: 506, target2030: 500, target2025: 600 },
    { name: '2024', value: 36, target2030: 500, target2025: 600 },
    { name: '2025', value: 185, target2030: 500, target2025: 600 },
  ];

  const portfolioData = [
    { year: '2019', carbon: 38673, energy: 157, consumption: 65198706 },
    { year: '2020', carbon: 32813, energy: 135, consumption: 48784205 },
    { year: '2021', carbon: 14111, energy: 128, consumption: 49324077 },
    { year: '2022', carbon: 45048, energy: 123, consumption: 47790662 },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Analytics & Insights</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Data-driven decisions with real-time analytics</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Carbon Emissions Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Embodied Carbon Emissions</h3>
                <p className="text-gray-600 dark:text-gray-300">Intensity measured by kgCO₂e/m²</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Download data ↓
              </button>
            </div>
            
            <div className="mb-6">
              <div className="flex gap-4 mb-4">
                <button className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm">Refurbishment</button>
                <button className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm">New build</button>
                <button className="bg-red-600 dark:bg-red-700 text-white px-3 py-1 rounded-full text-sm">All</button>
              </div>
              <div className="flex gap-4">
                <button className="bg-red-600 dark:bg-red-700 text-white px-3 py-1 rounded-full text-sm">Complete</button>
                <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Estimate</button>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={carbonData}>
                  <XAxis dataKey="name" className="text-gray-600 dark:text-gray-300" />
                  <YAxis className="text-gray-600 dark:text-gray-300" />
                  <Bar dataKey="value" fill="#dc2626" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-0.5 border-dashed border-gray-400 dark:border-gray-500"></div>
                <span>500 kgCO₂e/m² - Embodied Carbon Target 2030</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-gray-800 dark:bg-gray-300"></div>
                <span>600 kgCO₂e/m² - Embodied Carbon Target 2025</span>
              </div>
            </div>
          </div>

          {/* Portfolio Metrics */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Portfolio Metrics</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Managed portfolio carbon footprint</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">tCO₂e</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">45,048</span>
                  <span className="text-red-500 dark:text-red-400 flex items-center">↑ 16%</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">from 2019</p>
                <div className="mt-2">
                  <div className="bg-red-200 dark:bg-red-900/30 h-2 rounded-full">
                    <div className="bg-red-600 dark:bg-red-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Managed portfolio energy intensity</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">kWh/m²</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">123</span>
                  <span className="text-green-500 dark:text-green-400 flex items-center">↓ 22%</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">from 2019</p>
                <div className="mt-2">
                  <div className="bg-red-200 dark:bg-red-900/30 h-2 rounded-full">
                    <div className="bg-red-600 dark:bg-red-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Managed portfolio energy consumption</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">kWh</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">47,790,662</span>
                  <span className="text-green-500 dark:text-green-400 flex items-center">↓ 27%</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">from 2019</p>
                <div className="mt-2">
                  <div className="bg-red-200 dark:bg-red-900/30 h-2 rounded-full">
                    <div className="bg-red-600 dark:bg-red-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                See full breakdown of carbon footprint →
              </button>
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                Download the data ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
