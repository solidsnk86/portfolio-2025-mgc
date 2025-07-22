import { Noise } from "@/shared/ui/effects/Noise";
import { Header } from "@/shared/ui/Header";
import { BlogClient } from "../BlogClient";
import { Footer } from "@/shared/ui/Footer";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  return (
    <div className="flex flex-col md:max-w-3xl mx-auto px-3 relative">
      <Header />
      <Noise />
      <BlogClient blog={name} />
      <Footer />
    </div>
  );
}
