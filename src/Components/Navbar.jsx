import React, { useState } from "react";
import { FiSearch, FiUser, FiMenu } from "react-icons/fi";
import PropTypes from "prop-types";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ toggleSidebar, toggleMobileSidebar }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="w-full bg-white border  dark:bg-gray-800 shadow-md p-4">
      <div className="flex items-center justify-between">
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={toggleMobileSidebar}
          className="md:hidden p-2 rounded-lg dark:text-white"
        >
          <FiMenu size={20} />
        </button>

        {/* Search Bar - Hidden on mobile unless search icon clicked */}
        <div className="hidden md:block relative  flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-2xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <FiSearch className="absolute right-3 top-3 text-gray-500 dark:text-gray-300" />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Icon */}
          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden p-2 rounded-lg dark:text-white"
          >
            <FiSearch size={20} />
          </button>
          <DarkModeToggle />
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <FiUser className="text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Shows when search icon is clicked */}
      {showMobileSearch && (
        <div className="md:hidden w-full mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      )}
    </header>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Navbar;
