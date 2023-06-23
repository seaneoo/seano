'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSpinner, FaSun } from 'react-icons/fa';

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
    return <FaSpinner className="h-6 w-6 animate-spin" />;
  }

  return (
    <button
      className="h-6 w-6"
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
