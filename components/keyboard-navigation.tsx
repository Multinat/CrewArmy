'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function KeyboardNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [zoomLevel, setZoomLevel] = useState(1);
  const slideContainerRef = useRef<HTMLDivElement | null>(null);
  
  // Extract current page from pathname
  const getCurrentPage = () => {
    if (pathname === '/') return 1;
    const match = pathname.match(/\/pages\/(\d+)/);
    return match ? parseInt(match[1]) : 1;
  };
  
  const currentPage = getCurrentPage();
  const totalPages = 19; // Updated to 19 based on your file structure

  // Navigation functions
  const goToPrevious = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      router.push(prevPage === 1 ? '/' : `/pages/${prevPage}`);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      router.push(nextPage === 1 ? '/' : `/pages/${nextPage}`);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Reset zoom level when navigating to a new page
      if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'ArrowLeft') {
        setZoomLevel(1);
      }
      
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        if (currentPage < totalPages) {
          const nextPage = currentPage + 1;
          router.push(nextPage === 1 ? '/' : `/pages/${nextPage}`);
        }
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (currentPage > 1) {
          const prevPage = currentPage - 1;
          router.push(prevPage === 1 ? '/' : `/pages/${prevPage}`);
        }
      } else if (event.key === 'Home') {
        event.preventDefault();
        router.push('/');
      } else if (event.key === 'End') {
        event.preventDefault();
        router.push(`/pages/${totalPages}`);
      } else if (event.key === '+' || event.key === '=') {
        // Zoom in
        event.preventDefault();
        setZoomLevel(prev => Math.min(prev + 0.1, 3)); // Allow more zoom in
      } else if (event.key === '-' || event.key === '_') {
        // Zoom out
        event.preventDefault();
        setZoomLevel(prev => Math.max(prev - 0.1, 0.3)); // Allow more zoom out
      } else if (event.key === '0') {
        // Reset zoom
        event.preventDefault();
        setZoomLevel(1);
      }
    };

    // Apply zoom to the slide container
    const applyZoom = () => {
      if (slideContainerRef.current) {
        slideContainerRef.current.style.transform = `scale(${zoomLevel})`;
        slideContainerRef.current.style.transformOrigin = 'center center';
        // Allow horizontal scrolling when zoomed
        slideContainerRef.current.style.overflow = 'auto';
      }
    };

    applyZoom();

    // Add event listeners
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentPage, totalPages, router, zoomLevel]);

  return (
    <>
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        />
      </div>
      
      {/* Slide counter */}
      <div className="fixed top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-mono z-40">
        {currentPage} / {totalPages}
      </div>

      {/* Navigation buttons for mobile */}
      <div className="fixed bottom-20 left-4 right-4 flex justify-between md:hidden z-40">
        <button
          onClick={goToPrevious}
          disabled={currentPage <= 1}
          className="bg-black/50 backdrop-blur-sm rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          disabled={currentPage >= totalPages}
          className="bg-black/50 backdrop-blur-sm rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Hidden div to hold the ref for zooming */}
      <div 
        ref={slideContainerRef} 
        style={{ display: 'none' }} 
      />
    </>
  );
}