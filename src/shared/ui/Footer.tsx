"use client";

import { GetLocation } from "@/lib/locationClient";
import { useEffect, useState } from "react";

interface LocationProps {
  ip: string;
  city: {
    name: string;
  };
  country: {
    name: string;
    emojiFlag: string;
  };
  sysInfo: { system: string };
}

export const Footer = () => {
  const [location, setLocation] = useState<LocationProps>();

  useEffect(() => {
    const getCurrentIP = async () => {
      const currentIP = await GetLocation.ip();
      const currentCity = await GetLocation.city();
      const currentCountry = await GetLocation.country();
      const currentEmojiFlag = await GetLocation.emojiFlag();
      const currentOS = await GetLocation.os();
      setLocation({
        ip: currentIP,
        city: { name: currentCity },
        country: {
          name: currentCountry,
          emojiFlag: currentEmojiFlag,
        },
        sysInfo: {
          system: currentOS,
        },
      });
    };
    getCurrentIP();
  }, []);
return (
    <footer className="grid justify-center mx-auto py-10">
        <small className="text-[var(--mutted-color)] font-semibold">
            &copy;2025 - solidSnk86 ✦ calcagni gabriel{" "}
        </small>
        <small className="flex items-center mx-auto gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping duration-2000" />
            {location?.city.name || "No disponible"}, {location?.country.name || "No disponible"} {location?.country.emojiFlag || "No disponible"}
        </small>
    </footer>
);
};
