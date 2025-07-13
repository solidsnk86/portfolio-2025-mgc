import { Sun } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "proyectos", url: "/projects" },
  { name: "contaco", url: "/contact" },
  { name: "acerca", url: "/about" },
  { name: "blog", url: "/blog" },
];

export const Navbar = () => {
  return (
    <nav className="flex gap-3 items-center">
      {links.map(({ name, url }) => (
        <span key={name}>
          <Link href={url} className="font-semibold hover:brightness-125 dark:text-zinc-300">{name}</Link>
        </span>
      ))}
      <Sun />
    </nav>
  );
};
