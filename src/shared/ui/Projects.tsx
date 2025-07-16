import { ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/shared/styles/projects.module.css";

const projects = [
  {
    name: "Neo-WiFi App",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "Automatiza la configuración CPEs y routers TP-Link.",
    year: 2025,
  },
  {
    name: "Neo-WiFi Web",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "Localización Inteligente de Antenas WiFi",
    year: 2025,
  },
  {
    name: "Geolocation API",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "API de geolocalización por IP o coordenandas",
    year: 2024,
  },
  {
    name: "Chat GPT Local",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "Advanced analytics for WiFi performance.",
    year: 2025,
  },
  {
    name: "Editable Portfolio",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "Currículum Vitae editable desde Google Sheets",
    year: 2024,
  },
  {
    name: "Readme Notes",
    url: "https://github.com/solidsnk86/neo-wifi",
    imgUrl: "/vercel.svg",
    description: "Bloc de notas hecho en QT y C++",
    year: 2024,
  },
];

export const Projects = () => {
  return (
    <section className="grid p-4 max-w-3xl z-10">
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
            className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 grid mx-auto w-full justify-center space-y-3 relative overflow-hidden group"
          >
            <Image
              src={imgUrl}
              width={120}
              height={90}
              alt={name}
              className="group-hover:scale-90 group-hover:translate-y-3 transition-transform duration-300"
            />
            <h3 className="text-center font-bold">{name}</h3>
            <small className="text-center">{year}</small>
            <article
              className={`absolute top-0 left-0 hidden group-hover:flex dark:bg-zinc-900/10 mx-auto backdrop-blur-xl w-full h-full transition-all duration-300 ${styles.project}`}
            >
              <div className="flex flex-col mx-auto">
                <h3 className="text-center font-semibold text-lg">{name}</h3>
                <p className="text-center text-pretty text-zinc-300">
                  {description}
                </p>
                <time className="text-center text-sm">{year}</time>
                <span className="p-1 rounded bg-zinc-200 dark:bg-zinc-900/50 w-fit flex mx-auto mt-2">
                <ArrowUpRightFromSquareIcon size={14} />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
