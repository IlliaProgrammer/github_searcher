import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {BsGear} from 'react-icons/bs'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center text-blue-700 hover:text-blue-900 dark:text-white">
          <BsGear className="text-blue-700 mr-2 text-2xl mt-1" />
          <span className="text-2xl font-semibold whitespace-nowrap">GitHub Search</span>
        </a>

        {/* Menu Button */}
        <button
          type="button"
          className="block md:hidden text-gray-600 dark:text-white"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Menu Items */}
        <div className={`w-full md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8">
            <li>
              <Link
                to="/fav"
                className="block py-2 pl-3 pr-4 text-white text-xl bg-blue-700 rounded md:bg-transparent md:text-blue-700 hover:text-white dark:text-white dark:hover:text-gray-200"
              >
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

<Link to="/fav">Favourites</Link>