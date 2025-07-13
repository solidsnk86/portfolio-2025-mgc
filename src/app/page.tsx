import { Header } from "@/shared/ui/Header";
import { Hero } from "@/shared/ui/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto justify-center">
      <Image src="/noise.svg" className="absolute top-0 left-0 opacity-[0.2] -z-20" fill alt="" />
      <Image src="/header-gradient.svg" className="absolute top-0 left-0 w-full h-40" fill alt="" />
      <Header />
      <Hero />
    </div>
  );
}
