"use client";

import { useEffect, useState } from "react";
import styles from "@/shared/styles/footer.module.css";
import Image from "next/image";
import { Dots } from "./effects/Dots";
import { usePathname } from "next/navigation";
import { Format } from "../utils/Format";
import { useLocation } from "@/provider/location-provider";
import Link from "next/link";

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
  const {
    ip,
    city,
    country,
    sysInfo,
    coords,
    isLoading: isLocationLoading,
    cvViewsCount,
  } = useLocation();
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
        "/api/supabase/get-visit",
      ).then((res) => res.json());

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
    <footer className={`grid py-10 space-y-3 ${styles.footer} w-full`}>
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
      <article
        className={`mt-4 grid gap-3 justify-center border border-[var(--color-border)] visit_card p-6 rounded-xl bg-[var(--header-bg-color)] backdrop-blur-lg`}
      >
        {!isLoading ? (
          <>
            <small className="flex items-center mx-auto gap-2 xl:text-xs text-[11px] text-center">
              <span className="w-[6px] h-[6px] hidden md:flex rounded-full bg-blue-500/50" />
              Última visita {Format.timeAgo(lastVisit?.created_at as string)}{" "}
              desde {lastVisit?.city_name}, {lastVisit?.country_name}{" "}
              {lastVisit?.emoji_flag}
            </small>
            <small className="text-xs flex justify-center mx-auto">
              Vistas al perfil: {lastVisit?.visits_count}{" "}
              ·{" "}
              CV Visto: {cvViewsCount}
            </small>
          </>
        ) : (
          <>
            <div className="flex w-[285px] h-4 bg-zinc-200/60 dark:bg-zinc-700/60 rounded-sm relative animate-pulse">
              <span className="absolute top-1 -left-4 w-[6px] h-[6px] hidden md:flex rounded-full bg-zinc-500/50 " />
            </div>
            <div className="w-[170px] h-4 flex justify-center mx-auto rounded-sm bg-zinc-200/60 dark:bg-zinc-700/60 animate-pulse"></div>
          </>
        )}
        <p className="flex justify-center mx-auto text-sm text-[var(--mutted-color)]">
          Hecho con 💖 por{" "}
          <Link
            href="https://github.com/solidsnk86/"
            className="hover:underline mx-1"
          >
            @SolidSnk86
          </Link>
        </p>
      </article>
    </footer>
  );
};
