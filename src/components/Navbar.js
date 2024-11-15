import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">My Portfolio</Link>
        </h1>
        <ul className="flex space-x-6">
          <li><Link to="/employment-history">Employment History</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-gray-400">Skills</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
