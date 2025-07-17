import { Noise } from "@/shared/ui/effects/Noise";
import { ProjectDataClient } from "../ProjectsDataClient";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const projectName = (await params).slug;
  return (
    <>
    <Noise />
    <ProjectDataClient repo={projectName} />
    </>
  );
}
