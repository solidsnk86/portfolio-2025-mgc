"use client";

import { ThemeProvider } from "@/provider/theme-provider";
import { LocationProvider } from "./location-provider";
import { ProjectProvider } from "./projects-provider";
import { BlogProvider } from "./blog-provider";

export default function WrapperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <LocationProvider>
        <BlogProvider>
          <ProjectProvider>{children}</ProjectProvider>
        </BlogProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}
