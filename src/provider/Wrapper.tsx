"use client";

import { ThemeProvider } from "@/provider/theme-provider";
import { LocationProvider } from "./location-provider";
import { ProjectProvider } from "./projects-provider";

export default function WrapperProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocationProvider>
        <ProjectProvider>{children}</ProjectProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}
