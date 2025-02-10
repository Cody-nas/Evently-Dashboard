import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCalendar, FiMessageSquare, FiPlus, FiMenu } from 'react-icons/fi';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { path: '/', name: 'Overview', icon: FiHome },
    { path: '/events', name: 'Events', icon: FiCalendar },
    { path: '/messages', name: 'Messages', icon: FiMessageSquare },
    { path: '/create-event', name: 'Create Event', icon: FiPlus },
  ];

  return (
    <aside className={`h-screen bg-white dark:bg-gray-800 shadow-lg p-4 transition-all ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <button onClick={toggleSidebar} className="mb-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
        <FiMenu className="w-6 h-6" />
      </button>
      <h1 className={`text-xl font-bold text-gray-900 dark:text-white mb-6 transition-all ${isCollapsed ? 'hidden' : 'block'}`}>Admin Dashboard</h1>
      <nav className="space-y-4">
        {navItems.map(({ path, name, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all ${isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            {!isCollapsed && name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;