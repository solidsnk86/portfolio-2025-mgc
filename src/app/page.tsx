"use client";

import { ContactForm } from "@/shared/ui/Contact";
import { Dots } from "@/shared/ui/effects/Dots";
import { Marquee } from "@/shared/ui/effects/Marquee";
import { Noise } from "@/shared/ui/effects/Noise";
import { Footer } from "@/shared/ui/Footer";
import { Header } from "@/shared/ui/Header";
import { Hero } from "@/shared/ui/Hero";
import { Card } from "@/shared/ui/Card";
import { Projects } from "@/shared/ui/Projects";
import { Blogsito } from "@/shared/ui/Blogsito";
import { ScrollToTopButton } from "@/shared/ui/ScrollToTop";
import Image from "next/image";

export default function Home() {
  const handleContact = () => {
    const message = encodeURIComponent("Hola Gabriel, me gustaría contactar para un proyecto!")
    const num = "2665290020"
    return window.open(`https://api.whatsapp.com/send?phone=${num}&text=${message}`)
  }
  
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
      <Card
        title="Tenés algo en mente?"
        text="Lo hacemos realidad.."
        button={
          <div className="flex justify-center mx-auto z-50">
            <button onClick={handleContact} className="py-4 px-8 mt-4 text-zinc-50 bg-zinc-950 w-fit rounded-full cursor-pointer hover:opacity-85">
              Contactáme
            </button>
          </div>
        }
      >
        <Image
          src="/assets/fireball.png"
          width={180}
          height={120}
          alt="Fireball draw"
        />
      </Card>
      <Dots className="flex justify-center mx-auto my-16" />
      <ContactForm />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
