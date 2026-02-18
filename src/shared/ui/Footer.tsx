"use client";

import { useEffect, useState } from "react";
import styles from "@/shared/styles/footer.module.css";
import Image from "next/image";
import { Dots } from "./effects/Dots";
import { usePathname } from "next/navigation";
import { Format } from "../utils/Format";
import { useLocation } from "@/provider/location-provider";

interface LocationProps {
  ip?: string;
  visits_count: number;
  city_name: string;
  country_name: string;
  emoji_flag: string;
  created_at: string | Date;
  latitude: number | string;
  longitude: number | string;
}

export const Footer = () => {
  const [lastVisit, setLastVisit] = useState<LocationProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ip, city, country, sysInfo, coords, error, isLoading: isLocationLoading } =
    useLocation();
  const path = usePathname();
  const { latitude, longitude } = coords;
  const { system } = sysInfo;
  const { browser, version } = sysInfo.webBrowser;

  useEffect(() => {
    const getCurrentIP = async () => {
      if (isLocationLoading) return;
      if (ip === "N/A") return;
      setIsLoading(true);
      const currentIP = ip;
      const currentCity = city.name;
      const currentCountry = country.name;
      const currentEmojiFlag = country.emojiFlag;
      const currentSystem = system;
      const currentBrowser = browser;
      const currentBrowserVersion = version;

      const lastVisitResponse: LocationProps = await fetch(
        "/api/supabase/get-visit").then((res) => res.json());

      const {
        ip: lastIP,
        visits_count,
        city_name,
        country_name,
        emoji_flag,
        created_at,
      } = lastVisitResponse;

      if (currentIP !== lastIP) {
        await fetch("/api/supabase/send-visit", {
          method: "POST",
          body: JSON.stringify({
            ip: currentIP,
            city: currentCity,
            country: currentCountry,
            page: path,
            so: currentSystem,
            browser: currentBrowser,
            version: currentBrowserVersion,
            emoji_flag: currentEmojiFlag,
            lat: latitude,
            lon: longitude,
          }),
        }).catch((error) => console.log(error));
      }
      setLastVisit({
        visits_count,
        city_name,
        country_name,
        emoji_flag,
        created_at,
        latitude,
        longitude,
      });
      setIsLoading(false);
    };
    getCurrentIP();
  }, [
    path,
    ip,
    city.name,
    country.name,
    country.emojiFlag,
    latitude,
    longitude,
    system,
    browser,
    version,
    isLocationLoading,
  ]);

  return (
    <footer
      className={`grid justify-center mx-auto py-10 space-y-3 ${styles.footer}`}
    >
      <Image
        src="/dividier.svg"
        width={300}
        height={0}
        alt="SVG"
        className="flex justify-center mx-auto"
      />
      <p className="text-[var(--mutted-color)] flex gap-1 font-semibold items-center text-sm text-center mx-auto">
        &copy;2025 SolidSnk86 <Dots className="mx-2" /> Calcagni Gabriel{" "}
      </p>
      {isLoading ? (
        <small className="text-center font-semibold h-[45px] animate-pulse">
          Cargando...
        </small>
      ) : (
        <>
          <small className="flex items-center mx-auto gap-2 xl:text-xs text-[11px]">
            <span className="w-[9px] h-[9px] hidden md:flex rounded-full bg-blue-500" />
            Última visita desde {lastVisit?.city_name},{" "}
            {lastVisit?.country_name} {lastVisit?.emoji_flag} el{" "}
            {Format.dateAndTime({ dateTime: lastVisit?.created_at as string })}
          </small>
          <small className="text-xs flex justify-center mx-auto">
            Vistas al perfil: {lastVisit?.visits_count}
          </small>
        </>
      )}
      <p className="flex justify-center mx-auto text-sm text-[var(--mutted-color)]">
        100% código hecho con 💖 por un humano
      </p>

      {error && (
        <small>{error.message}</small>
      )}
    </footer>
  );
};
