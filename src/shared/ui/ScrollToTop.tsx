import { ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "../styles/scroll.module.css";

export const ScrollToTopButton = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: window.scrollY / 2,
      left: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 600);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 xl:left-6 left-3 p-2 rounded-lg border border-[var(--border-color)] 
            z-50 bg-[var(--bg-color)] cursor-pointer shadow-md transition-transform duration-300 ${scrolled ? styles.scroll : "-translate-x-20"}`}
    >
      <ArrowUpToLine size={20} />
    </button>
  );
};
