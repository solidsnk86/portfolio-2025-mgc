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
      <div className="gradient-left" />
      <div className="gradient-right" />
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
