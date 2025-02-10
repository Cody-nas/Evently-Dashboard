import React from "react";
import { FiSearch, FiUser, FiMenu } from "react-icons/fi";
import PropTypes from "prop-types";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ toggleSidebar, toggleMobileSidebar }) => {
  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between">
      {/* Mobile Sidebar Toggle Button */}
      <button onClick={toggleMobileSidebar} className="md:hidden p-2 rounded-lg dark:text-white">
        <FiMenu size={24} />
      </button>

      {/* Search Bar */}
      <div className="relative flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <FiSearch className="absolute right-3 top-3 text-gray-500 dark:text-gray-300" />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <FiUser className="text-gray-600 dark:text-gray-300" />
        </div>

        {/* Desktop Sidebar Toggle Button */}
        {/* <button onClick={toggleSidebar} className="hidden md:block p-2 rounded-lg dark:text-white">
          <FiMenu size={24} />
        </button> */}
      </div>
    </header>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Navbar;
