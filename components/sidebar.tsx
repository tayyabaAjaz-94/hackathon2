import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="font-bold text-lg mb-4">New (500)</h2>
      <ul className="space-y-2">
        <li> <a href="#" className="text-gray-700">Shoes</a> </li>
        <li> <a href="#" className="text-gray-700">Tops & T-Shirts</a> </li>
        <li> <a href="#" className="text-gray-700">Jackets</a> </li>
        <li> <a href="#" className="text-gray-700">Tracksuits</a> </li>
      </ul>
    </div>
  );
};

export default Sidebar;