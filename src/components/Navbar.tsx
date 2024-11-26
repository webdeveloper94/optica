import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Optika
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">
            Asosiy
          </Link>
          <Link to="/topics" className="text-white hover:text-blue-200">
            Mavzular
          </Link>
          <Link to="/laboratory" className="text-white hover:text-blue-200">
            Laboratoriya
          </Link>
          <Link to="/problems" className="text-white hover:text-blue-200">
            Masalalar
          </Link>
          <Link to="/tests" className="text-white hover:text-blue-200">
            Testlar
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
