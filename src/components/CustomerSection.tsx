
import React, { useState } from 'react';

const CustomerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "The analytics platform transformed how we understand our business data. Incredible insights and user-friendly interface.",
      author: "Sarah Johnson",
      role: "CFO, TechCorp",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "Implementation was seamless and the AI-powered insights have saved us countless hours in reporting.",
      author: "Michael Chen", 
      role: "Data Director, FinanceFlow",
      company: "FinanceFlow",
      rating: 5
    },
    {
      quote: "Outstanding customer support and powerful consolidation features. Highly recommended for any growing business.",
      author: "Emma Rodriguez",
      role: "Operations Manager, GrowthLabs", 
      company: "GrowthLabs",
      rating: 5
    }
  ];

  const clients = [
    { name: "Microsoft", logo: "MS" },
    { name: "Google", logo: "G" },
    { name: "Amazon", logo: "A" },
    { name: "Apple", logo: "🍎" },
    { name: "Meta", logo: "M" },
    { name: "Netflix", logo: "N" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Trusted by section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Trusted by industry leaders</h2>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">{client.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What our customers say</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">Over 10,000+ satisfied customers worldwide</p>
          </div>

          <div className="relative">
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-12 text-center transition-colors duration-300">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 dark:text-yellow-300 text-2xl">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-2xl text-gray-800 dark:text-gray-200 mb-8 italic">
                "{testimonials[currentSlide].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[currentSlide].author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 dark:text-gray-200">{testimonials[currentSlide].author}</div>
                  <div className="text-gray-600 dark:text-gray-400">{testimonials[currentSlide].role}</div>
                </div>
              </div>
            </div>

            {/* Carousel controls */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : testimonials.length - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <span className="text-gray-700 dark:text-gray-300">←</span>
            </button>
            <button 
              onClick={() => setCurrentSlide(currentSlide < testimonials.length - 1 ? currentSlide + 1 : 0)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <span className="text-gray-700 dark:text-gray-300">→</span>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to transform your analytics?</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Join thousands of companies already using our platform</p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
