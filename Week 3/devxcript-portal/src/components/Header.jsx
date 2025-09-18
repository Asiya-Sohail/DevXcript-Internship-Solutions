import React from "react";
import useAuthStore from "../store/authStore";

const Header = ({ toggleSidebar }) => {
  const { user } = useAuthStore();
  
  // For demo purposes, use mock data if user is not logged in
  const userData = user || {
    name: "BABAR AZAM",
    email: "babar@devxcript.com"
  };

  const initials = userData.name.split(' ').map(n => n[0]).join('');

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white lg:ml-64">
      {/* Hamburger for md and below */}
      <button onClick={toggleSidebar} className="text-2xl lg:hidden">
        ☰
      </button>

      <h1 className="text-xl font-bold text-gray-800">DevXcript Portal</h1>

      <div className="flex items-center gap-3">
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold">
          {initials}
        </span>
        <div>
          <p className="font-semibold text-sm text-gray-800">{userData.name}</p>
          <p className="text-xs text-gray-500 truncate max-w-[120px]">
            {userData.email}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;