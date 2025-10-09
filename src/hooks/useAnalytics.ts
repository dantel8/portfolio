'use client';

interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = ({ action, category, label, value }: EventParams) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackDownloadCV = () => {
    trackEvent({
      action: 'download',
      category: 'cv',
      label: 'CV Download',
    });
  };

  const trackLinkClick = (url: string, name: string) => {
    trackEvent({
      action: `click_${name.toLowerCase()}`,
      category: 'social_link',
      label: url,
    });
  };

  return {
    trackEvent,
    trackDownloadCV,
    trackLinkClick,
  };
};

// Añadir la definición de gtag al objeto window
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
