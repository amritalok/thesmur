'use client';
import Link from 'next/link';
import collections from '../data/collections';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 relative">
        {/* Centered Logo with Motion */}
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
        {/* Navigation Links */}
        <nav className="mt-4 hidden md:flex justify-center space-x-8">
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
          <div className="relative group">
            <button className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors focus:outline-none">
              Collections
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
        {/* Mobile Menu omitted for brevity */}
      </div>
    </header>
  );
}
