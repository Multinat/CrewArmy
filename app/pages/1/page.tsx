'use client';

import { useEffect } from 'react';

export default function Slide1() {
  useEffect(() => {
    // Get the slide container element
    const slideContainer = document.querySelector('.slide-container');
    
    if (slideContainer) {
      // Reset transform when component mounts
      (slideContainer as HTMLElement).style.transform = 'scale(1)';
      (slideContainer as HTMLElement).style.transformOrigin = 'center center';
      
      // Ensure proper overflow handling
      (slideContainer as HTMLElement).style.overflow = 'auto';
    }
  }, []);

  return (
    <div className="slide-container">
      {/* Top Section - Main Title */}
      <div className="text-center mb-6 md:mb-8 w-full">
        <h1 className="slide-title font-bold text-yellow-400 mb-2 md:mb-4 px-4">
          2025 TEAM ARMY EXCELLENCE STRATEGY
        </h1>
        <p className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          CREW ARMY
        </p>
      </div>

      {/* Middle Section - Mission and Focus Areas */}
      <div className="flex-1 flex flex-col justify-center items-center text-center w-full max-w-6xl px-4">
        <h2 className="text-lg md:text-2xl lg:text-4xl font-medium text-gray-200 mb-6 md:mb-8">
          Empowering Frontline Excellence Through Strategic Operations
        </h2>
        
        {/* Focus Areas - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 w-full">
          <div className="bg-yellow-500 bg-opacity-20 backdrop-blur border border-yellow-500 border-opacity-30 rounded-lg p-4 md:p-6">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-400">Safety First</p>
          </div>
          <div className="bg-green-500 bg-opacity-20 backdrop-blur border border-green-500 border-opacity-30 rounded-lg p-4 md:p-6">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-400">Quality Always</p>
          </div>
          <div className="bg-orange-500 bg-opacity-20 backdrop-blur border border-orange-500 border-opacity-30 rounded-lg p-4 md:p-6">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-orange-400">Volume Optimization</p>
          </div>
          <div className="bg-purple-500 bg-opacity-20 backdrop-blur border border-purple-500 border-opacity-30 rounded-lg p-4 md:p-6">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-purple-400">Cost Management</p>
          </div>
        </div>

        {/* Tagline */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg md:text-2xl lg:text-3xl px-6 md:px-8 lg:px-12 py-4 md:py-6 rounded-lg shadow-lg text-center">
          Make Line 1 Great again through AUTONOMOUS TEAMS
        </div>
      </div>

      {/* Bottom Section - Year Identifier */}
      <div className="text-center mt-6 md:mt-8 w-full">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white opacity-80">2025</p>
        <p className="text-base md:text-xl lg:text-2xl text-gray-300">Strategic Implementation Framework</p>
      </div>
    </div>
  );
}