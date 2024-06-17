'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

export function ThemeProviders({ children }: { children: ReactNode }) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
