import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import styles from "@/shared/styles/social-links.module.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/gabriel-calcagni",
    icon: Linkedin,
  },
  { name: "Github", url: "https://github.com/solidsnk86", icon: Github },
  { name: "Twitter", url: "https://x.com/CalcagniGabriel", icon: Twitter },
  {
    name: "Instagram",
    url: "https://www.instagram.com/calcagnigabriel/",
    icon: Instagram,
  },
];

export const SocialLinks = ({ className }: { className: string }) => {
  return (
    <div className={`flex my-6 gap-4 items-center ${poppins.className}`}>
      {socialLinks.map(({ name, url, icon }) => {
        const Icon = icon;
        return (
          <Link
            href={url}
            key={name}
            className={`flex xl:gap-2 gap-1 items-center xl:text-sm text-xs font-semibold relative ${className} ${styles.social} btn-animation`}
          >
            <Icon
              className={`${name === "LinkedIn" ? "-translate-y-[2px]" : ""} xl:w-[18px] xl:h-[18px] w-4 h-4 svg-animation`}
            />
            <span>{name}</span>
          </Link>
        );
      })}
    </div>
  );
};
