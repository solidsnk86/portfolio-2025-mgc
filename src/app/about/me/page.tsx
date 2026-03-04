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
            en el desarrollo de aplicaciones web utilizando React, Next.js, TailwindCSS, Supabase
            y PostgreSQL. Mi enfoque principal es la creación de interfaces responsivas y
            backends eficientes, priorizando siempre la escalabilidad del código. Poseo
            una fuerte orientación al aprendizaje continuo frente a los desafíos y aprovecho
            las herramientas de inteligencia artificial para optimizar mi flujo de trabajo
            y potenciar mi productividad.
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
        <section className="bg-[var(--header-bg-color)] grid border border-[var(--color-border)] backdrop-blur-lg rounded-xl p-8 overflow-hidden">
              <aside className="items-center justify-center mx-auto relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-156 h-156 gradient-2 rounded-full blur-2xl -z-10" />
              </aside>
              <article className="grid justify-center items-center gap-3 md:gap-2 text-center">
                <SocialLinks className="" />
              </article>
            </section>
      <Footer />
    </div>
  );
}
