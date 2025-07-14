import { useEffect, useState } from "react";

export const useMatchMedia = (query: string, defaultState: boolean) => {
  const [media, setTheme] = useState<boolean>(() => {
    if (defaultState !== undefined) {
      return defaultState;
    }
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }

    return false;
  });

  const handleEvent = (event: MediaQueryListEvent | MediaQueryList) => {
    setTheme(event.matches)
  }
  
  useEffect(() => {
    if (typeof window === "undefined") return
    const media = window.matchMedia(query)

    handleEvent(media)

    media.addEventListener("change", handleEvent)

    return () => media.removeEventListener('change', handleEvent)
  }, [query])

  return media
};
