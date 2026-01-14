"use client";

/* eslint-disable @next/next/no-img-element */
import styles from "@/shared/styles/hero.module.css";
import { Fraunces, Poppins } from "next/font/google";
import { SocialLinks } from "./SocialLinks";
import { useEffect } from "react";

const fraunces = Fraunces({
  weight: ["300"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300"],
  subsets: ["latin"],
});

export const Hero = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const rotation = scrollY % 360;
      const imgAvatar = document.getElementById("avatar-img");
      if (imgAvatar) {
        imgAvatar.style.transform = `rotateY(${rotation}deg)`;
      }
    });
  }, []);

  return (
    <section
      className={`flex flex-col max-w-2xl text-wrap mt-16 justify-center mx-auto xl:p-0 md:p-0 p-4 ${styles.hero} ${fraunces.className}`}
    >
      <h2 className="flex flex-wrap gap-2 items-center xl:text-[49px] lg:text-5xl md:text-5xl text-[2.20rem] leading-[1.2] text-balance w-full">
        Hola,
        <br />
        <span className="inline-flex gap-2 items-center whitespace-nowrap">
          Soy
          <img
            id="avatar-img"
            src="/assets/mgc.jfif"
            alt="Gabriel avatar"
            className="rounded-full w-[1em] md:w-[1.2em] xl:w-[1.4em] h-auto align-middle"
          />
          Gabriel Calcagni,
        </span>
      </h2>

      <p className="xl:text-3xl text-2xl font-semibold">
        Técnico Universitario en Programación & entusiasta del desarrollo de
        software.
      </p>
      <SocialLinks className="text-zinc-500" />
      <p
        className={`font-semibold xl:text-lg my-4 text-pretty ${poppins.className}`}
      >
        Con 3 años de experiencia, sigo explorando la magia{" "}
        <span className="text-xl">✨</span> del código y el diseño. Egresado de
        la UTN-FRSR, listo para nuevos desafíos.
      </p>
      <p className={`font-semibold ${poppins.className} items-center z-10`}>
        Actualmente trabajo para un cliente en Chile en el proyecto de{" "}
        <a
          href="https://cuidadorascalbuco.cl"
          className="retro-gradient"
        >
          @cuidadoras-calbuco.
        </a>
      </p>
    </section>
  );
};
