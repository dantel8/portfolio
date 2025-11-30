export interface TranslatedText {
  text: string;
  from_lng: string;
  to_lng: string;
  translated_text: string;
}

interface TranslateParams {
  text: string;
  from_lng: "es" | "en";
  to_lng: "es" | "en";
}

export class TranslationsRepository {
  async translate(params: TranslateParams): Promise<TranslatedText> {
    try {
      const url = new URL("https://api.mymemory.translated.net/get");
      url.searchParams.append("q", params.text);
      url.searchParams.append("langpair", `${params.from_lng}|${params.to_lng}`);

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.responseData?.translatedText) {
        throw new Error("Invalid translation response");
      }

      return {
        text: params.text,
        from_lng: params.from_lng,
        to_lng: params.to_lng,
        translated_text: data.responseData.translatedText,
      };
    } catch (error) {
      console.error("Error translating text:", error);
      return {
        text: params.text,
        from_lng: params.from_lng,
        to_lng: params.to_lng,
        translated_text: params.text,
      };
    }
  }
}