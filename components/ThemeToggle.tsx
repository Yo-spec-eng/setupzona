'use client';

import { useEffect, useState } from 'react';

// Alterna modo claro/oscuro y lo guarda en localStorage.
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className="rounded-lg border border-gray-200 p-2 text-sm transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
