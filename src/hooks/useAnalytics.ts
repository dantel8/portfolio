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

  const trackMenuClick = (section: string) => {
    trackEvent({
      action: 'menu_click',
      category: 'navigation',
      label: section,
    });
  };

  const trackLanguageChange = (newLanguage: string) => {
    trackEvent({
      action: 'language_changed',
      category: 'user_preference',
      label: newLanguage,
    });
  };

  const trackThemeChange = (newTheme: string) => {
    trackEvent({
      action: 'theme_changed',
      category: 'user_preference',
      label: newTheme,
    });
  };

  const trackCertificateOpened = (certificateTitle: string) => {
    trackEvent({
      action: 'certificate_opened',
      category: 'engagement',
      label: certificateTitle,
    });
  };

  const trackProjectViewed = (projectName: string) => {
    trackEvent({
      action: 'project_viewed',
      category: 'engagement',
      label: projectName,
    });
  };

  const trackContactFormSubmit = () => {
    trackEvent({
      action: 'contact_form_submit',
      category: 'conversion',
      label: 'Contact Form',
    });
  };

  return {
    trackEvent,
    trackDownloadCV,
    trackLinkClick,
    trackMenuClick,
    trackLanguageChange,
    trackThemeChange,
    trackCertificateOpened,
    trackProjectViewed,
    trackContactFormSubmit,
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
