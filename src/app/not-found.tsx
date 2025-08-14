import Image from "next/image";
import { Fraunces } from "next/font/google";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

const fraunces = Fraunces({
  weight: ["900"],
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <section className="flex justify-center mx-auto h-[100dvh]">
      <div className="flex flex-col gap-3 bg-[#fff] p-10 h-[480px] my-auto rounded-xl">
        <Image src="/assets/404.png" width={400} height={400} alt="404 image" />
        <h1 className={`text-6xl font-bold text-center dark:text-zinc-900 ${fraunces.className}`}>
          404
        </h1>
        <h3 className={`text-2xl font-semibold dark:text-zinc-900 ${fraunces.className}`}>
          Ooopps! No se encontró la página.
        </h3>
        <Link href="/" className="flex justify-center mx-auto gap-2 items-center font-semibold bg-zinc-100 w-fit rounded-xl px-3 py-2 hover:opacity-80 dark:text-zinc-900">
        <HomeIcon size={18} />
        Volver al inicio
        </Link>
      </div>
    </section>
  );
}
