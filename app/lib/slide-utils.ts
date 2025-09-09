// lib/slide-utils.ts

/**
 * Utility functions for slide management
 */

/**
 * Gets the total number of slides
 * @returns The total number of slides
 */
export function getTotalSlides(): number {
  // Based on the directory structure, we have 18 pages (1-18)
  return 18;
}

// Added a small comment to ensure there's a change to commit

/**
 * Validates if a page number is valid
 * @param page The page number to validate
 * @returns true if the page number is valid, false otherwise
 */
export function isValidPage(page: number): boolean {
  const total = getTotalSlides();
  return page >= 1 && page <= total;
}

/**
 * Gets the next page number
 * @param currentPage The current page number
 * @returns The next page number, or the current page if already at the last page
 */
export function getNextPage(currentPage: number): number {
  const total = getTotalSlides();
  return currentPage < total ? currentPage + 1 : currentPage;
}

/**
 * Gets the previous page number
 * @param currentPage The current page number
 * @returns The previous page number, or the current page if already at the first page
 */
export function getPreviousPage(currentPage: number): number {
  return currentPage > 1 ? currentPage - 1 : currentPage;
}