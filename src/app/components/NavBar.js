'use client';
import Link from 'next/link';
import collections from '../data/collections';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NavBar() {
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
          <Link href="/">
            <Image src="/thesmur.svg" width={8} height={8} alt="Instagram" className="w-30 h-15 inline-block" />
          </Link>
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden absolute right-4 top-4" popoverTarget="mobileMenu" popoverTargetAction="toggle">
          <span className="block w-6 h-1 bg-gray-800 dark:bg-gray-100 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-800 dark:bg-gray-100 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-800 dark:bg-gray-100"></span>
        </button>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex justify-center space-x-8">
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

        {/* Popover Menu for Mobile */}
        <dialog
          id="mobileMenu"
          popover
          className="md:hidden absolute top-16 right-4 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-20"
        >
          <nav className="flex flex-col space-y-4 p-4">
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
            <details className="rounded-xl">
              <summary className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors rounded-xl">
                Collections
              </summary>
              <div className="flex flex-col mt-2 space-y-2">
                {collections.map((col) => (
                  <Link
                    key={col.id}
                    href={`/collections/${col.title.toLowerCase()}`}
                    className="text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded"
                  >
                    {col.title}
                  </Link>
                ))}
              </div>
            </details>
          </nav>
        </dialog>
      </div>
    </header>
  );
}
