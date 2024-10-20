'use client'

import React from 'react';
import { ThemeProvider, useTheme } from "@/components/navbar";

function ThemeLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div data-theme={theme ? 'garden' : 'night'}>
      {children}
    </div>
  );
}

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeLayout>
        {children}
      </ThemeLayout>
    </ThemeProvider>
  );
}