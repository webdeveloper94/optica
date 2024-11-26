import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold">
              Optika
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/topics" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
              Mavzular
            </Link>
            <Link to="/laboratory" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
              Laboratoriya
            </Link>
            <Link to="/problems" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
              Masalalar
            </Link>
            <Link to="/tests" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
              Testlar
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/topics"
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Mavzular
          </Link>
          <Link
            to="/laboratory"
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Laboratoriya
          </Link>
          <Link
            to="/problems"
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Masalalar
          </Link>
          <Link
            to="/tests"
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Testlar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
