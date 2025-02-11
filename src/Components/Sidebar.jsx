import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiCalendar, FiMessageSquare, FiPlus, FiMenu, FiX } from "react-icons/fi";
import PropTypes from "prop-types";
// import logoLight from "@/assets/logo-light.svg";
// import logoDark from "@/assets/logo-dark.svg";
import { cn } from "../utils/cn";

const navItems = [
  { path: "/", name: "Overview", icon: FiHome },
  { path: "/events", name: "Events", icon: FiCalendar },
  { path: "/messages", name: "Messages", icon: FiMessageSquare },
  { path: "/create-event", name: "Create Event", icon: FiPlus },
];

const Sidebar = forwardRef(({ isSidebarCollapsed, isMobileSidebarOpen, toggleSidebar, toggleMobileSidebar }, ref) => {
  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] sm:static sm:z-auto flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 transition-all duration-300 ease-in-out",
        isSidebarCollapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
        isMobileSidebarOpen ? "max-md:left-0" : "max-md:-left-full"
      )}
    >
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-x-3 min-w-0">
          {/* <img src={logoLight} alt="Logo" className="h-8 w-8 flex-shrink-0 dark:hidden" />
          <img src={logoDark} alt="Logo" className="h-8 w-8 flex-shrink-0 hidden dark:block" /> */}
          {!isSidebarCollapsed && (
            <p className="text-lg font-medium text-slate-900 dark:text-slate-50 truncate">Eventicket</p>
          )}
        </div>

        {/* Sidebar Toggle Buttons */}
        <button onClick={toggleSidebar} className="hidden md:block p-2 rounded-lg text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 ml-2">
          <FiMenu size={20} />
        </button>
        <button onClick={toggleMobileSidebar} className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 ml-2">
          <FiX size={20} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3">
        {navItems.map(({ path, name, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => cn(
              "flex items-center gap-x-3 p-3 rounded-lg transition-colors",
              "text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50",
              "hover:bg-gray-200 dark:hover:bg-gray-700",
              isActive && "bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-slate-50",
              isSidebarCollapsed ? "md:justify-center md:w-[45px]" : "w-full"
            )}
          >
            <Icon size={22} className="flex-shrink-0" />
            {!isSidebarCollapsed && (
              <span className="truncate text-sm font-medium">
                {name}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  isSidebarCollapsed: PropTypes.bool,
  isMobileSidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Sidebar;