import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay only for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        transition-transform duration-300 z-50`}
      >
        {/* Header with close button (hidden on lg screens) */}
        <div className="p-4 font-bold text-xl flex items-center justify-between lg:justify-start">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded bg-teal-500 text-white">
              DX
            </span>
            <div>
              DevXcript
              <p className="text-xs font-normal">Student Portal</p>
            </div>
          </div>

          {/* Close Button (only small/medium screens) */}
          <button
            onClick={toggleSidebar}
            className="text-gray-600 text-2xl hover:text-black lg:hidden"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <ul className="p-4 space-y-4">
        
          <li><NavLink to="/dashboard" className={(isActive) => {
            `cursor-pointer ${isActive ? "bg-teal-50 p-2 rounded" : ""}`
          }}>📊 Dashboard</NavLink></li>

          <li><NavLink to="/courses" className={(isActive) => {
            `cursor-pointer ${isActive ? "bg-teal-50 p-2 rounded" : ""}`
          }}>📚 Courses</NavLink></li>

          <li><NavLink to="/results" className={(isActive) => {
            `cursor-pointer ${isActive ? "bg-teal-50 p-2 rounded" : ""}`
          }}>📋 Results</NavLink></li>

          <li><NavLink to="/attendance" className={(isActive) => {
            `cursor-pointer ${isActive ? "bg-teal-50 p-2 rounded" : ""}`
          }}>✅ Attendance</NavLink></li>

          <li><NavLink to="/profile" className={(isActive) => {
            `cursor-pointer ${isActive ? "bg-teal-50 p-2 rounded" : ""}`
          }}>👤 Student Profile</NavLink></li>
        </ul>

        <div className="absolute bottom-4 left-4 text-sm text-gray-500">
          Developed By DevXcript
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
