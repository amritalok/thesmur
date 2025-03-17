'use client';
import Link from 'next/link';
import collections from '../data/collections';
import { useState } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4">
        {/* Centered Logo */}
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold font-heading text-gray-800 dark:text-gray-100">
            The Smur
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="mt-4 hidden md:block">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/" className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
              >
                Contact
              </Link>
            </li>
            <li className="relative group">
              <button className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors focus:outline-none">
                Collections
              </button>
              <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {collections.map((col) => (
                  <li key={col.id}>
                    <Link
                      href={`/collections/${col.title.toLowerCase()}`}
                      className="block px-4 py-2 text-center text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {col.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="mt-4 md:hidden flex justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-gray-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 bg-white dark:bg-gray-800 px-4 py-2 rounded shadow">
            <ul className="space-y-4 text-center">
              <li>
                <Link
                  href="/"
                  className="block text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <span className="block text-lg font-semibold text-gray-800 dark:text-gray-100">Collections</span>
                <ul className="mt-2 space-y-2">
                  {collections.map((col) => (
                    <li key={col.id}>
                      <Link
                        href={`/collections/${col.title.toLowerCase()}`}
                        className="block text-base text-gray-800 dark:text-gray-100 hover:underline"
                      >
                        {col.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
