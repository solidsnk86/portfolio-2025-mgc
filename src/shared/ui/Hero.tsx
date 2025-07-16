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
      className={`flex flex-col max-w-2xl text-wrap mt-16 justify-center mx-auto xl:p-0 md:p-0 p-4 ${styles.hero} ${fraunces.className}`}
    >
      <h2 className="flex flex-wrap gap-2 items-center xl:text-[49px] lg:text-5xl md:text-5xl text-4xl leading-[1.2] text-balance w-full">
        Hola,
        <br />
        <span className="inline-flex gap-2 items-center whitespace-nowrap">
          Soy
          <img
            src="/assets/mgc.png"
            alt="Gabriel avatar"
            className="rounded-full w-[1em] md:w-[1.2em] xl:w-[1.4em] h-auto align-middle"
          />
          Gabriel Calcagni,
        </span>
      </h2>

      <p className="xl:text-3xl text-2xl font-semibold">
        Técnico Universitario en Programación & amante del desarrollo de
        software.
      </p>
      <SocialLinks />
      <p className={`font-semibold xl:text-lg my-4 ${poppins.className}`}>
        Con más de 2 años de experiencia en proyectos propios, sigo explorando
        la magia <span className="text-xl">✨</span> del código y el diseño
        mientras completo mi formación en la UTN-FRSR, donde curso el último
        año.
      </p>
      <p className={`font-semibold ${poppins.className} items-center z-10`}>
        Actualmente trabajo en el proyecto <a href="https://neo-wifi.vercel.app/" className="retro-gradient">@neo-wifi</a>
      </p>
    </section>
  );
};
