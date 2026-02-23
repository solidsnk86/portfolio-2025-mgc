import { Fraunces, Poppins } from "next/font/google";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const fraunces = Fraunces({
  weight: ["300"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "500", "600"],
  subsets: ["latin"],
});

export const StyledCard = () => {
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
    <section className="bg-[var(--header-bg-color)] grid grid-cols-1 md:grid-cols-2 border border-[var(--color-border)] backdrop-blur-lg rounded-xl p-8 overflow-hidden">
      <aside className="items-center justify-center mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-56 h-56 gradient rounded-full blur-2xl -z-10" />
        <Image
          src="/assets/fireball.png"
          width={200}
          height={300}
          alt="Fire Ball"
        />
      </aside>
      <article className="grid justify-center items-center gap-3 md:gap-2 text-center group">
        <p className={`${fraunces.className} text-2xl`}>
          ¿Te interesa mi perfil?
        </p>
        <p className={`${poppins.className}`}>
          Hablemos y vemos cómo puedo ayudarte.
        </p>
        <span
          onClick={handleContact}
          style={{ fontWeight: 600 }}
          className={`flex gap-2 items-center justify-center md:justify-end md:translate-x-full md:skew-3 group-hover:skew-0
            group-hover:translate-x-0 transition-transform duration-400 cursor-default hover:underline hover:text-indigo-400`}
        >
          Contactar
          <ArrowRight size={20} />
        </span>
      </article>
    </section>
  );
};
