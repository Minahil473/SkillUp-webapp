// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = "font-bold"; // Only make it bold

  return (
    <nav className="bg-primary text-white sticky shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Title */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2a7 7 0 00-7 7c0 2.21 1.344 4.094 3.25 5.19L9 18h6l.75-3.81A6.998 6.998 0 0019 9a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-2xl font-bold text-white">SkillUp</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-gray-300"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-gray-300"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-gray-300"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-gray-300"
              }
            >
              Admin
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary text-white px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} block px-3 py-2 rounded`
                : "block px-3 py-2 hover:bg-blue-700 rounded"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} block px-3 py-2 rounded`
                : "block px-3 py-2 hover:bg-blue-700 rounded"
            }
            onClick={() => setIsOpen(false)}
          >
            Events
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} block px-3 py-2 rounded`
                : "block px-3 py-2 hover:bg-blue-700 rounded"
            }
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} block px-3 py-2 rounded`
                : "block px-3 py-2 hover:bg-blue-700 rounded"
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} block px-3 py-2 rounded`
                : "block px-3 py-2 hover:bg-blue-700 rounded"
            }
            onClick={() => setIsOpen(false)}
          >
            Admin
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
