'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="absolute left-8 top-8 h-8 w-8"
      aria-label={
        theme === 'dark' ? 'switch to light mode' : 'switch to dark mode'
      }
      onClick={changeTheme}>
      {theme === 'dark' ? (
        <FaSun className="h-full w-full" />
      ) : (
        <FaMoon className="h-full w-full" />
      )}
    </button>
  );
}