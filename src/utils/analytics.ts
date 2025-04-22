// utils/analytics.ts
import ReactGA from 'react-ga4';

declare global {
  interface Window {
    GA_INITIALIZED?: boolean;
  }
}

/**
 * Initialize Google Analytics with the provided measurement ID
 * @param measurementId - The Google Analytics measurement ID
 */
export const initGA = (measurementId: string): void => {
  if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
    ReactGA.initialize(measurementId);
    window.GA_INITIALIZED = true;
  } else if (typeof window !== 'undefined') {
    console.log('GA initialized in development mode with ID:', measurementId);
  }
};

/**
 * Log a page view event to Google Analytics
 * @param path - The page path to log
 */
export const logPageView = (path: string): void => {
  if (typeof window !== 'undefined') {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

/**
 * Log a custom event to Google Analytics
 * @param category - Event category
 * @param action - Event action
 * @param label - Event label (optional)
 * @param value - Event value (optional)
 */
export const logEvent = (category: string, action: string, label?: string, value?: number): void => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};
