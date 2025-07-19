"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Menu, MoonStar, Sun, X } from "lucide-react";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { useTheme } from "@/provider/theme-provider";

const links = [
  { name: "acerca", url: "/about/me" },
  { name: "contacto", url: "/#contact" },
  { name: "proyectos", url: "/#projects" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const preferesDark = useMatchMedia("(prefers-color-scheme: dark)", true);

  const isDarkMode = theme === "dark" || (theme === "system" && preferesDark);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden"
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto"
  };

  return (
    <>
      <header className="rounded-full w-full mt-6 bg-[var(--header-bg-color)] backdrop-blur-xl h-[74px] mx-auto relative z-50">
        <div className="flex items-center justify-between h-full px-6">
          {isDarkMode ? (
            <Image
              src="/assets/solid-dark-mode.png"
              width={105}
              height={55}
              alt="SolidSnk86"
              className="rotate-3 translate-y-1"
            />
          ) : (
            <Image
              src="/assets/solid-light-mode.png"
              width={105}
              height={55}
              alt="SolidSnk86"
              className="rotate-3 translate-y-1"
            />
          )}
          {/* Links del menú */}
          <aside className="flex items-center">
            <nav className="md:flex hidden items-center gap-3 p-6">
              {links.map(({ name, url }) => (
                <Link
                  key={name}
                  href={url}
                  onClick={closeMenu}
                  className="font-semibold hover:opacity-80 capitalize"
                >
                  {name}
                </Link>
              ))}
            </nav>
            <span className="text-zinc-500 hidden md:flex">|</span>
            <button
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className="p-2 rounded-lg hidden md:inline-flex"
              aria-label="Cambiar tema"
              title="Cambiar tema"
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6 text-zinc-500" />
              ) : (
                <MoonStar className="h-6 w-6 text-zinc-500" />
              )}
            </button>
          </aside>
          <button
            onClick={openMenu}
            className="p-2 rounded-lg md:hidden hover:bg-[var(--hover-color)] transition-colors duration-200"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6 text-zinc-500" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 inset-0 z-50 bg-opacity-50 backdrop-blur-[4px]">
          <div
            ref={menuRef}
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[var(--dialog-bg)] shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header del menú */}
            <div className="flex justify-between items-center p-6 border-b border-[var(--color-border)] text-[var(--foreground)]">
              <h2 className="text-lg font-semibold">
                Menú
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTheme(isDarkMode ? "light" : "dark")}
                  className="p-2 rounded-lg hover:bg-[var(--hover-color)] transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="h-6 w-6" />
                  ) : (
                    <MoonStar className="h-6 w-6" />
                  )}
                </button>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-[var(--hover-color)] transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Links del menú */}
            <nav className="flex flex-col p-6">
              {links.map(({ name, url }) => (
                <Link
                  key={name}
                  href={url}
                  onClick={closeMenu}
                  className="font-semibold text-lg transition-colors duration-200 capitalize py-4 border-b border-[var(--border-color)] last:border-b-0"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
