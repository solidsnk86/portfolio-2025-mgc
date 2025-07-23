"use client";

import { GetLocation } from "@/lib/GetLocation";
import { useEffect, useState } from "react";
import styles from "@/shared/styles/footer.module.css";
import Image from "next/image";
import { Dots } from "./effects/Dots";
import { usePathname } from "next/navigation";
import { Format } from "../utils/Format";

interface LocationProps {
  ip?: string;
  visits_count: number;
  city_name: string;
  country_name: string;
  emoji_flag: string;
  created_at: string | Date;
}

export const Footer = () => {
  const [lastVisit, setLastVisit] = useState<LocationProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    const getCurrentIP = async () => {
      setIsLoading(true);
      const currentIP = await GetLocation.ip();
      const currentCity = await GetLocation.city();
      const currentCountry = await GetLocation.country();
      const currentEmojiFlag = await GetLocation.emojiFlag();
      const { system, browser, version } = await GetLocation.os();

      const lastVisitResponse: LocationProps = await fetch(
        "/api/supabase/get-visit",
        {
          method: "GET",
        }
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
            so: system,
            browser,
            version,
            emoji_flag: currentEmojiFlag,
          }),
        }).catch((error) => console.log(error));
      }
      setLastVisit({
        visits_count,
        city_name,
        country_name,
        emoji_flag,
        created_at,
      });
      setIsLoading(false);
    };
    getCurrentIP();
  }, [path]);

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
          <small className="flex items-center mx-auto gap-2 text-xs">
            <span className="w-[9px] h-[9px] rounded-full bg-blue-500" />
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
    </footer>
  );
};
