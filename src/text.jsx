import React from "react";
import { FiMenu } from "react-icons/fi";
import PropTypes from "prop-types";

const Navbar = ({ toggleSidebar, toggleMobileSidebar }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Sidebar Toggle for Mobile */}
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden p-2 rounded-lg dark:text-white"
      >
        <FiMenu size={24} />
      </button>

      <h1 className="text-lg font-semibold dark:text-white">Dashboard</h1>

      {/* Sidebar Toggle for Desktop */}
      <button
        onClick={toggleSidebar}
        className="hidden md:block p-2 rounded-lg dark:text-white"
      >
        <FiMenu size={24} />
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Navbar;
