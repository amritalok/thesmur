'use client';
import Link from 'next/link';
import collections from '../data/collections';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false); // Track Collections dropdown for mobile

  // For handling touch events on mobile
  const handleTouch = () => {
    if (window.innerWidth < 768) {
      // Only for mobile screens
      setCollectionsOpen(!collectionsOpen);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 relative">
        {/* Centered Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/" className="text-3xl font-bold font-heading text-gray-800 dark:text-gray-100">
            The Smur
          </Link>
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden absolute right-4 top-4" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-1 bg-gray-800 dark:bg-gray-100 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-800 dark:bg-gray-100 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-800 dark:bg-gray-100"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`mt-4 md:flex justify-center space-x-8 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
          >
            Contact
          </Link>

          {/* Collections Dropdown */}
          <div
            className="relative group"
            onTouchStart={handleTouch} // Handle touch event for mobile
          >
            <button
              onClick={() => setCollectionsOpen(!collectionsOpen)} // Toggle Collections dropdown on mobile
              className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors focus:outline-none"
              onMouseEnter={() => setCollectionsOpen(true)} // Open on hover for desktop
              onMouseLeave={() => setCollectionsOpen(false)} // Close on hover out for desktop
            >
              Collections
            </button>
            {/* Mobile dropdown */}
            {collectionsOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
                {collections.map((col) => (
                  <Link
                    key={col.id}
                    href={`/collections/${col.title.toLowerCase()}`}
                    className="block px-4 py-2 text-center text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {col.title}
                  </Link>
                ))}
              </div>
            )}
            {/* Desktop dropdown with hover/focus */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-10 md:block">
              {collections.map((col) => (
                <Link
                  key={col.id}
                  href={`/collections/${col.title.toLowerCase()}`}
                  className="block px-4 py-2 text-center text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {col.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
