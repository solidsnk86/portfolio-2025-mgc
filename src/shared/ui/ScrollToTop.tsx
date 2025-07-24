import { ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [show, setShow] = useState<boolean>();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 left-6 p-2 rounded-lg border border-[var(--border-color)] z-50 bg-[var(--header-bg-color)] cursor-pointer shadow-md"
      >
        <ArrowUpToLine size={20} />
      </button>
    )
  );
};
