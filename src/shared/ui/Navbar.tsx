import { Sun } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "acerca", url: "/about" },
  { name: "contaco", url: "#contact" },
  { name: "proyectos", url: "/projects" },
];

export const Navbar = () => {
  return (
    <nav className="flex gap-3 items-center">
      {links.map(({ name, url }) => (
        <span key={name}>
          <Link
            href={url}
            className="font-semibold hover:brightness-125 dark:text-zinc-300 capitalize"
          >
            {name}
          </Link>
        </span>
      ))}
      <Sun />
    </nav>
  );
};
