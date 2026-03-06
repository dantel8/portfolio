import { useCallback } from "react";
import { useAnalytics } from "./useAnalytics";

export const useDownloadCV = () => {
  const { trackDownloadCV } = useAnalytics();

  const downloadCV = useCallback((filePath: string, fileName: string) => {
    trackDownloadCV();
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [trackDownloadCV]);

  return { downloadCV };
};
