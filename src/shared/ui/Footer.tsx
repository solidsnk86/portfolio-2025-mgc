"use client";

import { GetLocation } from "@/lib/GetLocation";
import { useEffect, useState } from "react";
import styles from "@/shared/styles/footer.module.css";
import Image from "next/image";
import { Dots } from "./Dots";
import { usePathname } from "next/navigation";


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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const path = usePathname();


  useEffect(() => {
    const getCurrentIP = async () => {
      setIsLoading(true);
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
      const lastVisitResponse = await fetch("/api/supabase/get-visit", {
        method: "GET",
      }).then((res) => res.json());
      const data = lastVisitResponse.data[0];
      const lastIP = data.ip;
      if (currentIP !== lastIP) {
        await fetch("/api/supabase/send-visit", {
          method: "POST",
          body: JSON.stringify({
            ip: currentIP,
            city: currentCity,
            country: currentCountry,
            page: path
          }),
        }).catch((error) => console.log(error));
      }
      setIsLoading(false);
    };
    getCurrentIP();
  }, [path]);
  return (
    <footer
      className={`grid justify-center mx-auto py-10 space-y-3 ${styles.footer}`}
    >
      <Image src="/dividier.svg" width={300} height={0} alt="" />
      <p className="text-[var(--mutted-color)] flex gap-1 font-semibold items-center text-sm text-center mx-auto">
        &copy;2025 SolidSnk86 <Dots className="mx-2" /> Calcagni Gabriel{" "}
      </p>
      {isLoading ? (
        <small className="text-center font-semibold">Cargando...</small>
      ) : (
        <small className="flex items-center mx-auto gap-2">
          <span className="w-[9px] h-[9px] rounded-full bg-blue-500" />
          {location?.city.name || "No disponible"},{" "}
          {location?.country.name || "No disponible"}{" "}
          {location?.country.emojiFlag || "No disponible"} - De tu dispositivo
        </small>
      )}
    </footer>
  );
};
