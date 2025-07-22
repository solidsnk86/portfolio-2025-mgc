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
        <h1 className={`text-5xl font-bold mt-16 text-center ${fraunces.className}`}>Acerca</h1>
        <Image src="/dividier.svg" width={300} height={0} alt="" className="flex justify-center mx-auto" />
        <article className={`text-pretty space-y-3 ${poppins.className} my-4`}>
        <p>
          Soy estudiante avanzado de la Tecnicatura Universitaria en
          Programación, actualmente consolidando mi formación académica mientras
          aplico y amplío mis conocimientos a través de proyectos personales.
          Cuento con más de 2 años y medio de experiencia práctica desarrollando
          aplicaciones y sitios web, lo cual me ha permitido familiarizarme
          profundamente con el ecosistema de desarrollo moderno.
        </p>
        <p>
          A lo largo de este tiempo he trabajado con tecnologías como React,
          Next.js, TailwindCSS, Supabase y PostgreSQL, tanto en la creación de
          interfaces dinámicas y responsivas como en la construcción de backends
          funcionales y eficientes. Este recorrido me ha dado una visión
          integral del proceso de desarrollo: desde el diseño y la experiencia
          de usuario hasta la lógica de negocio y la gestión de datos.
        </p>
        <p>
          Mis proyectos personales son más que ejercicios: los considero
          espacios de aprendizaje continuo, donde experimento, pruebo ideas
          nuevas y busco soluciones a problemas reales. Me interesa
          particularmente escribir código limpio, (no todas las veces 😅) y bien estructurado, pensando
          siempre en la mantenibilidad y la escalabilidad.
        </p>
        <h4>
          Me motiva crecer profesionalmente en el ámbito tecnológico, colaborar
          en equipos donde pueda aportar y seguir aprendiendo, y mantenerme
          actualizado en un sector tan dinámico como la programación.
        </h4>
        </article>
      </section>
      <Dots className="flex justify-center mx-auto my-10" />
      <Card title="" text="Conéctate Conmigo">
        <SocialLinks />
      </Card>
      <Footer />
    </div>
  );
}
