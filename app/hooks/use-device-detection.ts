// hooks/use-device-detection.ts

import { useEffect, useState } from 'react';

/**
 * Custom hook to detect device type
 * @returns object with device detection properties
 */
export function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent || (window as any).opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

      const mobile = mobileRegex.test(userAgent.toLowerCase());
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const width = window.innerWidth;
      
      setIsMobile(mobile && width <= 768);
      setIsTablet(mobile && width > 768);
      setIsDesktop(!mobile);
      setIsTouchDevice(touch);
    }
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isTouchDevice,
  };
}