/**
 * Servicios disponibles para generar screenshots de URLs
 */
export type ScreenshotService = 'screenshotmachine' | 'microlink' | 'urlbox';

interface ScreenshotOptions {
  service?: ScreenshotService;
  width?: number;
  height?: number;
}

/**
 * Genera una URL de screenshot automático usando diferentes servicios
 * @param url - URL del sitio web a capturar
 * @param options - Opciones de configuración
 * @returns URL de la imagen del screenshot
 */
export const getScreenshotUrl = (
  url: string,
  options: ScreenshotOptions = {}
): string => {
  const { service = 'screenshotmachine', width = 1024, height = 768 } = options;

  switch (service) {
    case 'screenshotmachine':
      // Screenshot Machine
      // Registrate en: https://screenshotmachine.com/
      // Agrega tu key en .env.local: NEXT_PUBLIC_SCREENSHOT_API_KEY=tu-key
      const screenshotKey = process.env.NEXT_PUBLIC_SCREENSHOT_API_KEY || 'demo';
      return `https://api.screenshotmachine.com/?key=${screenshotKey}&url=${encodeURIComponent(url)}&dimension=${width}x${height}`;

    case 'microlink':
      // Microlink - API más confiable (https://microlink.io/)
      // Plan gratuito: 50 requests sin necesidad de API key
      // Para más requests, registrate y agrega NEXT_PUBLIC_MICROLINK_API_KEY
      const microlinkKey = process.env.NEXT_PUBLIC_MICROLINK_API_KEY;
      const microlinkParams = microlinkKey ? `&apiKey=${microlinkKey}` : '';
      return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&viewport.width=${width}&viewport.height=${height}${microlinkParams}&embed=screenshot.url`;

    case 'urlbox':
      // URLBox - Servicio profesional
      // Registrate en: https://urlbox.io/
      // Agrega tu key en .env.local: NEXT_PUBLIC_URLBOX_API_KEY=tu-key
      const urlboxKey = process.env.NEXT_PUBLIC_URLBOX_API_KEY || 'demo';
      return `https://api.urlbox.io/v1/${urlboxKey}/png?url=${encodeURIComponent(url)}&width=${width}&height=${height}`;

    default:
      return '';
  }
};

/**
 * Valida si una URL es válida para generar screenshot
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

