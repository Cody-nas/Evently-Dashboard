import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <FiSearch className="absolute right-3 top-3 text-gray-500 dark:text-gray-300" />
      </div>
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <FiUser className="text-gray-600 dark:text-gray-300" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;