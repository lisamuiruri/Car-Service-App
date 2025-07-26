import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header className="bg-yellow-400 text-black text-center py-2 font-bold text-xl">
        Shine & Drive
      </header>

      <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
        <ul className="flex space-x-6 text-lg ml-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1'
                  : 'hover:text-yellow-400 transition-colors'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1'
                  : 'hover:text-yellow-400 transition-colors'
              }
            >
              Services
            </NavLink>
          </li>
        </ul>

        <div className="ml-auto text-white text-sm font-medium">
          FOR BOOKING CONTACT US <span className="font-bold">0734567891</span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
