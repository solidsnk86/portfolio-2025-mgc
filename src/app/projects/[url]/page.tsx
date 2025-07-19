import { Noise } from "@/shared/ui/effects/Noise";
import { ProjectDataClient } from "../ProjectsDataClient";
import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const name = (await params).url;

  return (
    <div className="flex flex-col md:max-w-3xl mx-auto px-3 relative">
      <Header />
      <Noise />
      <ProjectDataClient repo={name} />
      <Footer />
    </div>
  );
}
