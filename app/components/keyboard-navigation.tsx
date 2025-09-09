'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isMobileDevice } from '@/lib/device-utils';

export function KeyboardNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [zoomLevel, setZoomLevel] = useState(1);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isMobile = isMobileDevice();

  // Extract current page from pathname
  const getCurrentPage = () => {
    if (pathname === '/') return 1;
    const match = pathname.match(/\/pages\/(\d+)/);
    return match ? parseInt(match[1]) : 1;
  };

  const currentPage = getCurrentPage();
  const totalPages = 18; // Updated to match actual number of slides

  // Touch event handlers for swipe navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // Only handle single touch
      if (e.touches.length === 1) {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartX.current || !touchStartY.current || e.changedTouches.length !== 1) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;

      // Check if horizontal swipe is more significant than vertical and meets minimum threshold
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        e.preventDefault(); // Prevent default scroll behavior
        
        if (diffX > 0) {
          // Swipe left - go to next page
          if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            router.push(nextPage === 1 ? '/' : `/pages/${nextPage}`);
          }
        } else {
          // Swipe right - go to previous page
          if (currentPage > 1) {
            const prevPage = currentPage - 1;
            router.push(prevPage === 1 ? '/' : `/pages/${prevPage}`);
          }
        }
      }
      
      // Reset touch coordinates
      touchStartX.current = 0;
      touchStartY.current = 0;
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'ArrowLeft':
          if (currentPage > 1) {
            const prevPage = currentPage - 1;
            router.push(prevPage === 1 ? '/' : `/pages/${prevPage}`);
          }
          break;
        case 'ArrowRight':
        case ' ':
          e.preventDefault(); // Prevent space from scrolling
          if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            router.push(nextPage === 1 ? '/' : `/pages/${nextPage}`);
          }
          break;
        case 'Home':
          router.push('/');
          break;
        case 'End':
          router.push(`/pages/${totalPages}`);
          break;
        case '+':
        case '=':
          // Zoom in
          setZoomLevel(prev => Math.min(prev + 0.1, 3));
          break;
        case '-':
          // Zoom out
          setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
          break;
        case '0':
          // Reset zoom
          setZoomLevel(1);
          break;
      }
    };

    // Apply zoom level to slide container
    const slideContainer = document.querySelector('.slide-container');
    if (slideContainer) {
      if (zoomLevel !== 1) {
        slideContainer.classList.add('zoomed');
        (slideContainer as HTMLElement).style.transform = `scale(${zoomLevel})`;
      } else {
        slideContainer.classList.remove('zoomed');
        (slideContainer as HTMLElement).style.transform = '';
      }
    }

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);
    }

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentPage, router, totalPages, zoomLevel, isMobile]);

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

  // Calculate progress percentage
  const progress = (currentPage / totalPages) * 100;

  return (
    <>
      {/* Progress bar at the top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm md:text-base z-40">
        {currentPage} / {totalPages}
      </div>

      {/* Mobile navigation buttons */}
      {isMobile && (
        <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-8 z-40">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="bg-black bg-opacity-50 text-white p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-70 transition-all"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="bg-black bg-opacity-50 text-white p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-70 transition-all"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}