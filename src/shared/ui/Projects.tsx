import { ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/shared/styles/projects.module.css";

const projects = [
  {
    name: "Project-1",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "A WiFi management tool for seamless connectivity.",
    year: 2025,
  },
  {
    name: "Project-2",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "An innovative solution for network monitoring.",
    year: 2024,
  },
  {
    name: "Project-3",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "A user-friendly interface for WiFi settings.",
    year: 2024,
  },
  {
    name: "Project-4",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "Advanced analytics for WiFi performance.",
    year: 2024,
  },
  {
    name: "Project-5",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "A mobile app for managing WiFi connections.",
    year: 2024,
  },
  {
    name: "Project-6",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "Integration with smart home devices.",
    year: 2024,
  },
];

export const Projects = () => {
  return (
    <section className="p-4 max-w-3xl z-10">
      <div className="flex justify-between items-center p-1">
        <h3 className="text-[var(--mutted-color)] text-sm font-semibold">
          PROYECTOS ACTUALES
        </h3>
        <Link href="/works" className="retro-gradient text-sm font-semibold">
          Todos los trabajos ▸
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
        {projects.map(({ name, url, imgUrl, year, description }) => (
          <Link
            key={name}
            href={url}
            className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 grid mx-auto w-full justify-center space-y-3 relative overflow-hidden group"
          >
            <Image
              src={imgUrl}
              width={120}
              height={90}
              alt={name}
              className=""
            />
            <h3 className="text-center font-bold">{name}</h3>
            <small className="text-center">{year}</small>
            <article
              className={`absolute top-0 left-0 hidden group-hover:flex bg-zinc-800/10 mx-auto backdrop-blur-2xl w-full h-full transition-colors duration-300 ${styles.project}`}
            >
              <div className="flex flex-col mx-auto">
                <h3 className="text-center font-semibold">{name}</h3>
                <p className="text-center text-pretty text-[var(--mutted-color)]">
                  {description}
                </p>
                <ArrowUpRightFromSquareIcon className="flex mx-auto" size={14} />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
