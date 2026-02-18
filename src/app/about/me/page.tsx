"use client";

import { Noise } from "@/shared/ui/effects/Noise";
import { Footer } from "@/shared/ui/Footer";
import { Header } from "@/shared/ui/Header";
import Image from "next/image";
import { Fraunces, Poppins } from "next/font/google";
import { SocialLinks } from "@/shared/ui/SocialLinks";
import { Card } from "@/shared/ui/Card";
import { Dots } from "@/shared/ui/effects/Dots";

const fraunces = Fraunces({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300"],
  subsets: ["latin"],
});

export default function MePage() {
  return (
    <div className="flex flex-col md:max-w-3xl mx-auto px-3 relative z-40">
      <Noise />
      <Header />
      <section className={`flex flex-col`}>
        <h2
          className={`text-5xl font-bold mt-16 text-center ${fraunces.className}`}
        >
          Acerca
        </h2>
        <Image
          src="/dividier.svg"
          width={300}
          height={0}
          alt=""
          className="flex justify-center mx-auto"
        />
        <article className={`text-pretty space-y-4 ${poppins.className} my-4`}>
          <p>
            Técnico Universitario en Programación con 3 años de experiencia
            desarrollando aplicaciones con React, Next.js, TailwindCSS, Supabase
            y PostgreSQL. Me enfoco en crear interfaces responsivas y backends
            eficientes, siempre pensando en código limpio y escalable. Cometo
            errores como cualquier humano, pero siempre estoy dispuesto a
            aprender de ellos.
          </p>
          <p>
            Mis proyectos personales son laboratorios donde experimento,
            resuelvo problemas reales y aprendo continuamente. Me motiva crecer
            en equipo, colaborar en proyectos desafiantes y mantenerme
            actualizado en este sector dinámico.
          </p>
        </article>
      </section>
      <Dots className="flex justify-center mx-auto my-10" />
      <Card title="" text="Conéctate Conmigo">
        <SocialLinks className="text-zinc-900" />
      </Card>
      <Footer />
    </div>
  );
}
