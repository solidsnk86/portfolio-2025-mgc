import {
  CssIcon,
  GithubIcon,
  GitIcon,
  JavaScriptIcon,
  MySqlIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgreSqlIcon,
  PythonIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindIcon,
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
  { name: "MySQL", icon: MySqlIcon },
  { name: "NodeJS", icon: NodeJsIcon },
  { name: "CSS", icon: CssIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Git", icon: GitIcon },
  { name: "Github", icon: GithubIcon }
];

export const Marquee = () => {
  return (
    <div className="flex justify-center mx-auto overflow-x-hidden xl:max-w-2xl w-full relative my-10">
      <div className="gradient-left" />
      <div className="gradient-right" />
      <section className={`flex items-center gap-10 ${styles.marquee}`}>
        {[...technologies, ...technologies].map(({ name, icon }, index) => {
          const Icon = icon;
          return (
            <div key={`${name}-${index}`} className="p-2 z-10">
              <Icon width={40} height={40} fill="#999" />
            </div>
          );
        })}
      </section>
    </div>
  );
};
