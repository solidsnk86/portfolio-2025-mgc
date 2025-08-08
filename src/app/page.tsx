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
      <Card title="Tenés algo en mente?" text="Lo hacemos realidad..">
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
