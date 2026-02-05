/**
 * Hover Detection Library
 * Provides multiple methods to detect if a device supports hover
 */

const HoverDetect = {
  /**
   * Method 1: CSS Media Query (hover)
   * Most modern and reliable: checks if device can hover over elements
   */
  mediaQueryHover() {
    return window.matchMedia('(hover: hover)').matches;
  },

  /**
   * Method 2: Pointer Media Query
   * Checks if primary pointer device supports hover
   */
  mediaQueryPointerHover() {
    return window.matchMedia('(pointer: fine) and (hover: hover)').matches;
  },

  /**
   * Method 3: Touch Detection via touchstart
   * Simple check: if device has touchstart, it's likely touch-based
   */
  noTouchstartEvent() {
    return !('ontouchstart' in window) && !navigator.msMaxTouchPoints;
  },

  /**
   * Method 4: Navigator maxTouchPoints
   * Check if device has no touch points
   */
  noMaxTouchPoints() {
    return !navigator.maxTouchPoints || navigator.maxTouchPoints === 0;
  },

  /**
   * Method 5: Pointer Events and maxTouchPoints
   * More specific check for touch-capable devices
   */
  pointerCanHover() {
    if (!window.PointerEvent) return true; // fallback to true for older browsers
    
    // Check if primary pointer can hover
    const mediaQuery = window.matchMedia('(pointer: coarse)').matches;
    return !mediaQuery;
  },

  /**
   * Method 6: CSS Media Query (any-hover)
   * Checks if ANY input device (primary or secondary) supports hover
   * Useful for hybrid devices like iPad with trackpad
   */
  anyInputCanHover() {
    return window.matchMedia('(any-hover: hover)').matches;
  },

  /**
   * Method 7: Combined heuristic
   * Combines multiple checks for higher confidence
   */
  combinedHeuristic() {
    const hasNoTouch = !('ontouchstart' in window) && !navigator.msMaxTouchPoints;
    const noTouchPoints = !navigator.maxTouchPoints || navigator.maxTouchPoints === 0;
    
    return hasNoTouch && noTouchPoints;
  },

  /**
   * Get all results at once
   */
  getAllResults() {
    return {
      'CSS Media Query (hover: hover)': this.mediaQueryHover(),
      'CSS Media Query (pointer: fine)': this.mediaQueryPointerHover(),
      'No touchstart event': this.noTouchstartEvent(),
      'No maxTouchPoints': this.noMaxTouchPoints(),
      'Pointer not coarse': this.pointerCanHover(),
      'CSS Media Query (any-hover)': this.anyInputCanHover(),
      'Combined heuristic': this.combinedHeuristic(),
    };
  },

  /**
   * Consensus check: most methods agree?
   */
  getConsensus() {
    const results = Object.values(this.getAllResults());
    const trueCount = results.filter(r => r === true).length;
    return trueCount >= 4; // Consensus if 4+ methods agree
  },
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HoverDetect;
}
