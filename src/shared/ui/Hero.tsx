import Image from "next/image";
import styles from '@/shared/styles/hero.module.css'
import { Fraunces } from "next/font/google";
import { SocialLinks } from "./SocialLinks";

const fraunces = Fraunces({
    weight: ["300"],
    subsets: ["latin"]
})

export const Hero = () => {
  return (
    <section className={`flex flex-col max-w-2xl mt-16 justify-center mx-auto ${styles.hero} ${fraunces.className}`}>
      <h2 className="flex gap-2 items-center text-5xl">
        Hola, Soy{" "}
        <Image
          src="/assets/mgc.png"
          width={65}
          height={65}
          alt="Gabriel avatar"
          className="rounded-full"
        />{" "}
        Gabriel Calcagni,
      </h2>
      <p className="text-3xl font-semibold">
        Técnico Universitario en Programación & amante del desarrollo de
        software.
      </p>
      <SocialLinks />
    </section>
  );
};
