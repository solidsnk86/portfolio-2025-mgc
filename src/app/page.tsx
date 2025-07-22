"use client";

import { ContactForm } from "@/shared/ui/Contact";
import { Dots } from "@/shared/ui/effects/Dots";
import { Marquee } from "@/shared/ui/effects/Marquee";
import { Noise } from "@/shared/ui/effects/Noise";
import { Footer } from "@/shared/ui/Footer";
import { Header } from "@/shared/ui/Header";
import { Hero } from "@/shared/ui/Hero";
import { StarShipIcon } from "@/shared/ui/Icons";
import { Card } from "@/shared/ui/Card";
import { Projects } from "@/shared/ui/Projects";
import { Blogsito } from "@/shared/ui/Blogsito";

export default function Home() {
  return (
    <div className="flex flex-col md:max-w-3xl mx-auto">
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
        title="Tienes algo en mente?"
        text="Podríamos hacerlo realidad.."
      >
        <StarShipIcon width={40} height={40} fill="#fff" />
      </Card>
      <Dots className="flex justify-center mx-auto my-16" />
      <ContactForm />
      <Footer />
    </div>
  );
}
