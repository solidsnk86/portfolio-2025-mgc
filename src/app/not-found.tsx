import Image from "next/image";
import { Fraunces } from "next/font/google";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { Noise } from "@/shared/ui/effects/Noise";

const fraunces = Fraunces({
  weight: ["900"],
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <>
    <Noise />
    <section className="flex justify-center mx-auto h-dvh">
      <div className="flex flex-col gap-3 bg-[#fff]/60 backdrop-blur-md p-10 h-[480px] my-auto rounded-2xl border border-[var(--border-color)]">
        <Image src="/not-found.svg" width={200} height={200} alt="404 image" className="flex justify-center mx-auto" />
        <h1 className={`text-6xl font-bold text-center dark:text-zinc-900 ${fraunces.className}`}>
          404
        </h1>
        <h3 className={`text-2xl font-semibold dark:text-zinc-900 ${fraunces.className}`}>
          Ooopps! No se encontró la página.
        </h3>
        <Link href="/" className="flex justify-center mx-auto gap-2 items-center font-semibold bg-zinc-100 w-fit rounded-lg px-3 py-2 hover:opacity-80 dark:text-zinc-900">
        <HomeIcon size={18} />
        Volver al inicio
        </Link>
      </div>
    </section>
    </>
  );
}
