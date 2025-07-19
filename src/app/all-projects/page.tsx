import { Header } from "@/shared/ui/Header";
import { ALlProjectsClient } from "./AllProjectsClient";
import { Footer } from "@/shared/ui/Footer";
import { Noise } from "@/shared/ui/effects/Noise";

export default function AllProjectsPage() {
  return (
    <div className="flex flex-col md:max-w-3xl mx-auto px-3">
      <Noise />
      <Header />
      <ALlProjectsClient />
      <Footer />
    </div>
  );
}
