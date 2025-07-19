import { ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/shared/styles/projects.module.css";

const projects = [
  {
    name: "Neo-WiFi App",
    url: "/neo-wifi-desktop",
    imgUrl: "/assets/3dicons-tools-dynamic-gradient.png",
    description: "Automatiza la configuración CPEs y routers TP-Link.",
    year: 2025,
  },
  {
    name: "Neo-WiFi Web",
    url: "/neo-wifi",
    imgUrl: "/assets/3dicons-wifi-dynamic-gradient.png",
    description: "Localización Inteligente de Antenas WiFi",
    year: 2025,
  },
  {
    name: "Geolocation API",
    url: "/geo_api",
    imgUrl: "/assets/3dicons-map-pin-dynamic-gradient.png",
    description: "API de geolocalización por IP o coordenandas",
    year: 2024,
  },
  {
    name: "Chat GPT Local",
    url: "/proyecto_python",
    imgUrl: "/assets/3dicons-chat-bubble-dynamic-gradient.png",
    description: "Chat GPT local con login de usuarios en PgAdmin",
    year: 2025,
  },
  {
    name: "Portfolio Editable",
    url: "/CV_GEC",
    imgUrl: "/assets/3dicons-folder-fav-dynamic-gradient.png",
    description: "Currículum Vitae editable desde Google Sheets",
    year: 2024,
  },
  {
    name: "Bloc de Notas",
    url: "/bloc-de-notas",
    imgUrl: "/assets/3dicons-notebook-dynamic-gradient.png",
    description: "Bloc de notas hecho en QT y C++",
    year: 2024,
  },
];

export const Projects = () => {
  return (
    <section className="grid p-4 max-w-3xl z-10" id="projects">
      <div className="flex justify-between items-center p-1">
        <h3 className="text-[var(--mutted-color)] text-sm font-semibold tracking-[0.15em]">
          PROYECTOS ACTUALES
        </h3>
        <Link href="/all-projects" className="retro-gradient text-sm font-semibold">
          Todos los trabajos ▸
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
        {projects.map(({ name, url, imgUrl, year, description }) => (
          <Link
            key={name}
            href={`/projects/${url}`}
            className="p-4 rounded-xl bg-[var(--card-project-color)] grid mx-auto w-full justify-center space-y-3 relative overflow-hidden group hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            <span className="p-1 rounded-xl bg-[var(--icon-bg)] group-hover:scale-90 group-hover:translate-y-3 transition-transform duration-300">
            <Image
              src={imgUrl}
              width={120}
              height={90}
              alt={name}
            />
            </span>
            <h3 className="text-center font-bold">{name}</h3>
            <small className="text-center">{year}</small>
            <article
              className={`absolute top-0 left-0 hidden group-hover:flex dark:bg-zinc-900/10 mx-auto backdrop-blur-md w-full h-full transition-all duration-300 ${styles.project}`}
            >
              <div className="flex flex-col mx-auto">
                <h3 className="text-center font-semibold text-lg">{name}</h3>
                <p className="text-center text-pretty">
                  {description}
                </p>
                <time className="text-center text-sm">{year}</time>
                <span className="p-1 rounded bg-[var(--header-bg-color)] w-fit flex mx-auto mt-2">
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
