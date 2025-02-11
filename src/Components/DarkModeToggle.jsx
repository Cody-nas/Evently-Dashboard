// src/components/DarkModeToggle.jsx
import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if theme exists in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Check if OS prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    // On component mount, set initial dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ?
        <FiSun className="w-4 h-4 text-gray-800 dark:text-gray-200" /> :
        <FiMoon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
      }
    </button>
  );
};

export default DarkModeToggle;