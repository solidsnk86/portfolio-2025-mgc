"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface LocationProviderProps {
  ip: string;
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
}

export const LocationContext = createContext<LocationProviderProps | null>(
  null,
);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<LocationProviderProps>();
  const [error, setError] = useState<TypeError | null>(null);

  const getLocation = useCallback(async () => {
    try {
      const response = await fetch(
        "https://solid-geolocation.vercel.app/location",
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setLocation(data);
    } catch (error) {
      setError(error as TypeError);
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  const values = {
    ip: location ? location.ip : "N/A",
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
  };

  return <LocationContext value={values}>{children}</LocationContext>;
};

export const useLocation = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("Debe ser usada denttro del provider");
  return ctx;
};
