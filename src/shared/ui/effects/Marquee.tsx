import {
  JavaScriptIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgreSqlIcon,
  PythonIcon,
  ReactIcon,
  SupabaseIcon,
  TypescriptIcon,
} from "../Icons";
import styles from "@/shared/styles/marquee.module.css";

const technologies = [
  { name: "Javascript", icon: JavaScriptIcon },
  { name: "Typescript", icon: TypescriptIcon },
  { name: "Python", icon: PythonIcon },
  { name: "React", icon: ReactIcon },
  { name: "NextJS", icon: NextJsIcon },
  { name: "Supabase", icon: SupabaseIcon },
  { name: "PostgreSQL", icon: PostgreSqlIcon },
  { name: "NodeJS", icon: NodeJsIcon },
];

export const Marquee = () => {
  return (
    <div className="flex justify-center mx-auto overflow-x-hidden xl:max-w-2xl w-full relative my-10">
      <div className="pointer-events-none absolute top-0 -left-2 h-full w-24 bg-gradient-to-r from-[#fdfdfd]/90 via-white/20 to-transparent dark:from-[#1C1C1C]/90 dark:via-[#1C1C1C]/80 dark:to-transparent z-50 blur-sm" />
      <div className="pointer-events-none absolute top-0 -right-2 h-full w-24 bg-gradient-to-l from-[#fdfdfd]/90 via-white/20 to-transparent dark:from-[#1C1C1C]/90 dark:via-[#1C1C1C]/80 dark:to-transparent z-50 blur-sm" />
      <section className={`flex items-center gap-8 ${styles.marquee}`}>
        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div key={`${tech.name}-${index}`} className="p-2 z-10">
              <Icon width={40} height={40} fill="#999" />
            </div>
          );
        })}
      </section>
    </div>
  );
};
