/* eslint-disable @next/next/no-img-element */
import styles from "@/shared/styles/hero.module.css";
import { Fraunces, Poppins } from "next/font/google";
import { SocialLinks } from "./SocialLinks";

const fraunces = Fraunces({
  weight: ["300"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300"],
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <section
      className={`flex flex-col max-w-2xl mt-16 justify-center mx-auto xl:p-0 md:p-0 p-4 ${styles.hero} ${fraunces.className}`}
    >
      <h2 className="flex gap-2 items-center xl:text-[49px] md:text-5xl text-3xl text-balance">
        Hola, Soy{" "}
        <img
          src="/assets/mgc.png"
          alt="Gabriel avatar"
          className="rounded-full w-8 md:w-12 xl:w-16 h-auto"
        />{" "}
        Gabriel Calcagni,
      </h2>
      <p className="xl:text-3xl text-2xl font-semibold">
        Técnico Universitario en Programación & amante del desarrollo de
        software.
      </p>
      <SocialLinks />
      <p className={`font-semibold text-lg my-3 ${poppins.className}`}>
        Con más de 2 años de experiencia en proyectos propios, sigo explorando
        la magia <span className="text-xl">✨</span> del código y el diseño mientras completo mi formación en la
        UTN-FRSR, donde curso el último año.
      </p>
    </section>
  );
};
