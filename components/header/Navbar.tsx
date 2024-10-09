"use client"
import Link from 'next/link';

import React from 'react';
import { Button } from '../ui/button';


const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Roomie<span className="text-blue-800">Finder</span>
          </Link>
        </div>

        {/* Links */}
        <ul className="flex space-x-5">
          <li>
            <Link href="/" className="text-blue-600 text-lg font-medium transition-colors duration-300 hover:text-blue-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/find-roommate" className="text-blue-600 text-lg font-medium transition-colors duration-300 hover:text-blue-800">
              Find a Roommate
            </Link>
          </li>
          <li>
            <Link href="/housing-finder" className="text-blue-600 text-lg font-medium transition-colors duration-300 hover:text-blue-800">
              Housing Finder
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-blue-600 text-lg font-medium transition-colors duration-300 hover:text-blue-800">
              Profile
            </Link>
          </li>
        </ul>

        {/* Log In / Sign Up Buttons */}
        <div className="flex space-x-2">
          <Link href="/login">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="border border-gray-400 text-gray-600 hover:bg-gray-300">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
