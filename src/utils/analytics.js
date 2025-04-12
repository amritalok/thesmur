// utils/analytics.js
import ReactGA from 'react-ga4';

export const initGA = (measurementId) => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    ReactGA.initialize(measurementId);
  } else if (typeof window !== 'undefined') {
    console.log('GA initialized in development mode with ID:', measurementId);
  }
};

export const logPageView = (path) => {
  if (typeof window !== 'undefined') {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

export const logEvent = (category, action, label, value) => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};
