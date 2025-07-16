"use client";

import { ThemeProvider } from "@/provider/theme-provider";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
