import { Noise } from "@/shared/ui/effects/Noise";
import { ProjectDataClient } from "../ProjectsDataClient";
import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const projectName = (await params).slug;
  return (
    <div className="flex flex-col md:max-w-3xl mx-auto">
    <Header />
    <Noise />
    <ProjectDataClient repo={projectName} />
    <Footer />
    </div>
  );
}
