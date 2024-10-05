"use client"
import { useState } from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold">MyBrand</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">Home</a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">About</a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">Services</a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">Contact</a>
          </div>

          {/* Profile or Sign In (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              {/* User profile button provided by Clerk when signed in */}
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              {/* Sign In button when the user is not signed in */}
              <SignInButton mode="modal">
                <button className="text-white hover:text-gray-400 transition duration-300">Sign In</button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>

            {/* Profile or Sign In (Mobile) */}
            <div className="flex justify-center pt-4">
              <SignedIn>
                {/* User profile button provided by Clerk when signed in */}
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

              <SignedOut>
                {/* Sign In button when the user is not signed in */}
                <SignInButton mode="modal">
                  <button className="text-white hover:text-gray-400 transition duration-300">Sign In</button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
