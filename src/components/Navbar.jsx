import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-10 p-4 flex justify-center items-center bg-transparent">
      <ul className="flex space-x-10" style={{ marginTop: '10px' }}> {/* Adjusts the navbar positioning */}
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `uppercase transition duration-300 ${isActive ? 'text-white font-semibold' : 'text-gray-100'} hover:text-gray-800`
            }
            style={{ letterSpacing: '0.05em', fontSize: '0.8em' }}
          >
            H O M E
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `uppercase transition duration-300 ${isActive ? 'text-white font-semibold' : 'text-gray-100'} hover:text-gray-800`
            }
            style={{ letterSpacing: '0.05em', fontSize: '0.8em' }}
          >
            P R O J E C T S
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `uppercase transition duration-300 ${isActive ? 'text-white font-semibold' : 'text-gray-100'} hover:text-gray-800`
            }
            style={{ letterSpacing: '0.05em', fontSize: '0.8em' }}
          >
            A B O U T
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `uppercase transition duration-300 ${isActive ? 'text-white font-semibold' : 'text-gray-100'} hover:text-gray-800`
            }
            style={{ letterSpacing: '0.05em', fontSize: '0.8em' }}
          >
            C O N T A C T
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
