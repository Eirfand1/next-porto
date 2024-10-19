'use client'

import React from 'react';
import { useTheme } from "@/components/navbar";

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div data-theme={theme ? 'garden' : 'dim'}>
      {children}
    </div>
  );
}