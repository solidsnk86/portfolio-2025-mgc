"use client";

import { ContactForm } from "@/shared/ui/Contact";
import { Marquee } from "@/shared/ui/effects/Marquee";
import { Noise } from "@/shared/ui/effects/Noise";
import { Footer } from "@/shared/ui/Footer";
import { Header } from "@/shared/ui/Header";
import { Hero } from "@/shared/ui/Hero";
import { Projects } from "@/shared/ui/Projects";

export default function Home() {
  return (
      <div className="flex flex-col md:max-w-3xl mx-auto">
      <Noise />
      <Header />
      <Hero />
      <Marquee />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}
