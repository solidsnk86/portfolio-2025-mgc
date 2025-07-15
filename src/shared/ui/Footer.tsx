"use client";

import { GetLocation } from "@/lib/locationClient";
import { useEffect, useState } from "react";
import styles from "@/shared/styles/footer.module.css"

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
    <footer className={`grid justify-center mx-auto py-10 space-y-3 ${styles.footer}`}>
        <p className="text-[var(--mutted-color)] flex gap-1 font-semibold items-center text-sm">
            &copy;2025 - SolidSnk86 <small className="text-[10px]">✦</small> Calcagni Gabriel{" "}
        </p>
        <small className="flex items-center mx-auto gap-2">
            <span className="w-[9px] h-[9px] rounded-full bg-blue-500" />
            {location?.city.name || "No disponible"}, {location?.country.name || "No disponible"} {location?.country.emojiFlag || "No disponible"} - De tu dispositivo
        </small>
    </footer>
);
};
