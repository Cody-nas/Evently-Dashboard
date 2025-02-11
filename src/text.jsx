import React, { useState } from "react";
import { FiSearch, FiUser, FiMenu } from "react-icons/fi";
import PropTypes from "prop-types";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ toggleSidebar, toggleMobileSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between">
      {/* Mobile Sidebar Toggle Button */}
      <button onClick={toggleMobileSidebar} className="md:hidden p-2 rounded-lg dark:text-white">
        <FiMenu size={24} />
      </button>

      {/* Search Bar - Hidden on mobile, toggled when clicking search icon */}
      <div className="relative flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search..."
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all ${isSearchOpen ? "block" : "hidden md:block"
            }`}
        />
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="absolute right-3 top-2 md:hidden text-gray-500 dark:text-gray-300"
        >
          <FiSearch size={24} />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <FiUser className="text-gray-600 dark:text-gray-300" />
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Navbar;
