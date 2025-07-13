import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import styles from '@/shared/styles/social-links.module.css'

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "800"],
    subsets: ["latin"]
})

const socialLinks = [
  { name: "Github", url: "https://github.com/solidsnk86", icon: Github },
  { name: "Twitter", url: "https://x.com/CalcagniGabriel", icon: Twitter },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/gabriel-calcagni",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/calcagnigabriel/",
    icon: Instagram,
  },
];

export const SocialLinks = () => {
  return (
    <div className={`flex my-6 gap-4 items-center ${poppins.className}`}>
      {socialLinks.map(({ name, url, icon }) => {
        const Icon = icon
        return (
          <Link href={url} key={name} className={`flex gap-2 items-center text-sm font-semibold relative text-zinc-500 ${styles.social}`}>
            <Icon size={18} className={`${name === "LinkedIn" ? "-translate-y-[2px]" : ""}`} />
            <span>{name}</span>
          </Link>
        );
      })}
    </div>
  );
};
