"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export interface LocationProviderProps {
  id?: string;
  ip: string;
  isLoading: boolean;
  city: {
    name: string;
    postalCode: string;
  };
  country: {
    name: string;
    emojiFlag: string;
    timezone: string;
  };
  coords: {
    latitude: string;
    longitude: string;
  };
  sysInfo: {
    language: string;
    system: string;
    webBrowser: {
      browser: string;
      version: string;
    };
  };
  error: TypeError | null | undefined;
  cvViewsCount: number;
  sendCvView: () => Promise<void>
}

export const LocationContext = createContext<LocationProviderProps | null>(
  null,
);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<LocationProviderProps>();
  const [error, setError] = useState<TypeError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cvViewsCount, setCvViews] = useState<number>(0);

  const getLocation = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/location");
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setLocation(data);
      setIsLoading(false);
    } catch (error) {
      setError(error as TypeError);
      setIsLoading(false);
    }
  }, []);

  const getCvViews = useCallback(async () => {
    try {
      const response = await fetch("/api/supabase/cv-views/get-views");
      const views = await response.json();
      setCvViews(views.count);
    } catch (error) {
      setError(error as TypeError);
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    getCvViews();
  }, [getCvViews]);

  const sendCvView = async () => {
    if (!location) return;
    const { city, country } = location;
    try {
      const lastVisitResponse = await fetch("/api/supabase/get-visit");
      const lastVisit = await lastVisitResponse.json();
      if (!lastVisit) return;
      await fetch("/api/supabase/cv-views/send-view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitId: lastVisit.id,
          from: `Desde ${city?.name}, ${country?.name} - ${country?.timezone}`,
        }),
      });
      await getCvViews();
    } catch (error) {
      setError(error as TypeError);
    }
  };

  const values = {
    ip: location ? location.ip : "N/A",
    isLoading,
    city: location ? location.city : { name: "N/A", postalCode: "N/A" },
    coords: {
      latitude: location ? location.coords.latitude : "N/A",
      longitude: location ? location.coords.longitude : "N/A",
    },
    country: location
      ? location.country
      : { name: "N/A", emojiFlag: "N/A", timezone: "N/A" },
    sysInfo: {
      language: location ? location.sysInfo?.language : "N/A",
      system: location ? location.sysInfo?.system : "N/A",
      webBrowser: {
        browser: location?.sysInfo
          ? location.sysInfo.webBrowser.browser
          : "N/A",
        version: location?.sysInfo
          ? location.sysInfo.webBrowser.version
          : "N/A",
      },
    },
    error,
    cvViewsCount,
    sendCvView
  };

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("Debe ser usada denttro del provider");
  return ctx;
};
