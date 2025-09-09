// lib/device-utils.ts

/**
 * Detects if the user is on a mobile device
 * @returns true if the user is on a mobile device, false otherwise
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;

  const userAgent = navigator.userAgent || (window as any).opera;

  // Check for mobile devices
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());

  // Also check for touch capability as a fallback
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Check screen size as another indicator
  const isSmallScreen = window.innerWidth <= 768;

  return isMobile || hasTouch || isSmallScreen;
}

/**
 * Detects if the user is on a desktop device
 * @returns true if the user is on a desktop device, false otherwise
 */
export function isDesktopDevice(): boolean {
  return !isMobileDevice();
}

/**
 * Gets the device type
 * @returns 'mobile', 'tablet', or 'desktop'
 */
export function getDeviceType(): string {
  if (typeof window === 'undefined') return 'desktop';

  const isMobile = isMobileDevice();
  const width = window.innerWidth;

  if (width <= 768) {
    return 'mobile';
  } else if (width <= 1024) {
    return isMobile ? 'tablet' : 'desktop';
  } else {
    return 'desktop';
  }
}