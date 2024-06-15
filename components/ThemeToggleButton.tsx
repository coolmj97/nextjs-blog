'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <button
      className={`w-10 h-10 p-2 rounded-full hover:bg-gray-300 transition-all dark:bg-white`}
      onClick={toggleTheme}
    >
      {isMounted ? (
        theme === 'dark' ? (
          <Image src={'./moon.svg'} alt={'darkMode'} width={24} height={24} />
        ) : (
          <Image src={'./sun.svg'} alt={'lightMode'} width={24} height={24} />
        )
      ) : null}
    </button>
  );
}
