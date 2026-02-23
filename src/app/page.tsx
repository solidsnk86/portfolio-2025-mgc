"use client";

import { ContactForm } from "@/shared/ui/Contact";
import { Dots } from "@/shared/ui/effects/Dots";
import { Marquee } from "@/shared/ui/effects/Marquee";
import { Noise } from "@/shared/ui/effects/Noise";
import { Footer } from "@/shared/ui/Footer";
import { Header } from "@/shared/ui/Header";
import { Hero } from "@/shared/ui/Hero";
import { Projects } from "@/shared/ui/Projects";
import { Blogsito } from "@/shared/ui/Blogsito";
import { ScrollToTopButton } from "@/shared/ui/ScrollToTop";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import { Fraunces, Poppins } from "next/font/google";

const fraunces = Fraunces({
  weight: ["300"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});

export default function Home() {
  const handleContact = () => {
    const message = encodeURIComponent(
      "Hola Gabriel, me gustaría contactar para un proyecto!",
    );
    const num = "2665290020";
    return window.open(
      `https://api.whatsapp.com/send?phone=${num}&text=${message}`,
    );
  };

  return (
    <div className="flex flex-col md:max-w-3xl mx-auto px-3 md:px-0 relative">
      <Noise />
      <Header />
      <Hero />
      <Marquee />
      <Dots className="flex justify-center mx-auto my-16" />
      <Projects />
      <Dots className="flex justify-center mx-auto my-16" />
      <Blogsito />
      <Dots className="flex justify-center mx-auto my-16" />

      <section className="bg-[var(--header-bg-color)] grid grid-cols-1 md:grid-cols-2 border border-[var(--color-border)] backdrop-blur-lg rounded-xl p-8 overflow-hidden">
        <aside className="items-center justify-center mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-56 h-56 gradient rounded-full blur-2xl -z-10" />
          <Image src="/assets/fireball.png" width={200} height={300} alt="Fire Ball" />
        </aside>
        <article className="grid justify-center items-center gap-2 text-center">
          <p className={`${fraunces.className} text-2xl`}>
            ¿Te interesa mi perfil?
          </p>
          <p className={`${poppins.className}`}>
            Hablemos y vemos cómo puedo ayudarte.
          </p>
          <Button onClick={handleContact} style={{ fontWeight: 600 }}>Contáctame</Button>
        </article>
      </section>

      <Dots className="flex justify-center mx-auto my-16" />
      <ContactForm />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
