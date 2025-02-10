import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCalendar, FiMessageSquare, FiPlus } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const navItems = [
    { path: '/', name: 'Overview', icon: FiHome },
    { path: '/events', name: 'Events', icon: FiCalendar },
    { path: '/messages', name: 'Messages', icon: FiMessageSquare },
    { path: '/create-event', name: 'Create Event', icon: FiPlus },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map(({ path, name, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive
                      ? 'border-blue-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;