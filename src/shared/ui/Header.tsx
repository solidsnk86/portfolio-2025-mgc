"use client";

import Image from "next/image";
import { Navbar } from "./Navbar";
import { useMatchMedia } from "@/hooks/useMatchMedia";

export const Header = () => {
  const isDarkMode = useMatchMedia("(prefers-color-scheme: dark)", true);
  
  return (
    <header className="rounded-full max-w-3xl mt-6 bg-zinc-100/50 backdrop-blur-xl dark:bg-zinc-800/50 h-[74px] m-3">
      <div className="flex items-center justify-between h-full px-6">
        {isDarkMode ? (
          <Image
            src="/assets/solid-dark-mode.png"
            width={105}
            height={55}
            alt="SolidSnk86"
            className="rotate-3"
          />
        ) : (
          <Image
            src="/assets/solid-light-mode.png"
            width={105}
            height={55}
            alt="SolidSnk86"
            className="rotate-3"
          />
        )}

        <Navbar />
      </div>
    </header>
  );
};
