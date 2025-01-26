import React, { useState } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center p-2 bg-gray-200 rounded-md"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 p-4 z-50 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}
      >
        <h2 className="font-bold text-lg mb-4">New (500)</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-700 hover:underline">
              Shoes
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:underline">
              Tops & T-Shirts
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:underline">
              Jackets
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:underline">
              Tracksuits
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
