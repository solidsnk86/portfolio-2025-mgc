"use client"

import { useMatchMedia } from "@/hooks/useMatchMedia"
import { Menu, Sun, Moon, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const links = [
  { name: "acerca", url: "/about" },
  { name: "contacto", url: "#contact" }, // Corregido el typo
  { name: "proyectos", url: "/projects" },
]

export const Navbar = () => {
  const isMobile = useMatchMedia("(max-width: 768px)", false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Detectar tema actual
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)
  }, [])

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen, isMobile])

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {!isMobile ? (
        // Desktop Navigation
        <nav className="flex gap-6 items-center">
          <div className="flex gap-6">
            {links.map(({ name, url }) => (
              <Link
                key={name}
                href={url}
                className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 dark:text-zinc-300 capitalize relative group"
              >
                {name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-zinc-500 dark:text-zinc-300" />
            ) : (
              <Moon className="h-5 w-5 text-zinc-500" />
            )}
          </button>
        </nav>
      ) : (
        // Mobile Navigation
        <div className="relative">
          <button
            onClick={handleMenu}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-zinc-500 dark:text-zinc-300" />
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
              <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-zinc-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {/* Header del menú */}
                <div className="flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-700">
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Menú</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
                      aria-label="Toggle theme"
                    >
                      {isDarkMode ? (
                        <Sun className="h-5 w-5 text-zinc-500 dark:text-zinc-300" />
                      ) : (
                        <Moon className="h-5 w-5 text-zinc-500" />
                      )}
                    </button>
                    <button
                      onClick={closeMenu}
                      className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5 text-zinc-500 dark:text-zinc-300" />
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
                      className="font-semibold text-lg text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 capitalize py-4 border-b border-zinc-100 dark:border-zinc-800 last:border-b-0"
                    >
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
