// NavBar.tsx
'use client';

import Link from 'next/link';
import collections, { Collection } from '../data/collections';
import { useState, useRef, useEffect, MouseEvent, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [collectionsOpen, setCollectionsOpen] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        navbarRef.current &&
        navbarRef.current.contains(event.target as Node)
      ) {
        setCollectionsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);
    return () => document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && collectionsOpen) {
        setCollectionsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape as unknown as EventListener);
    return () => document.removeEventListener('keydown', handleEscape as unknown as EventListener);
  }, [collectionsOpen]);

  // Handle dropdown timing
  const handleMouseEnter = (): void => {
    if (window.innerWidth >= 768) {
      setCollectionsOpen(true);
    }
  };

  const handleMouseLeave = (): void => {
    if (window.innerWidth >= 768 && !isClicking) {
      // Use timeout to prevent immediate closing
      setTimeout(() => {
        if (!dropdownRef.current?.matches(':hover') && !isClicking) {
          setCollectionsOpen(false);
        }
      }, 100);
    }
  };

  // Toggle dropdown on click (for mobile)
  const toggleCollections = (e: React.MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setCollectionsOpen(!collectionsOpen);
  };

  // Handle click tracking
  const handleMouseDown = (): void => {
    setIsClicking(true);
  };

  const handleMouseUp = (): void => {
    // Small delay to ensure the click event completes
    setTimeout(() => {
      setIsClicking(false);
    }, 100);
  };

  // Handle link click with navigation
  const handleLinkClick = (): void => {
    // Don't immediately close dropdown to allow navigation to complete
    setTimeout(() => {
      setCollectionsOpen(false);
      setMenuOpen(false);
    }, 100);
  };

  return (
    <header ref={navbarRef} className="bg-white dark:bg-gray-800 shadow z-30 relative">
      <div className="container mx-auto px-4 py-4 relative">
        {/* Centered Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/">
            <Image src="/thesmur.svg" width={120} height={60} alt="Logo" className="inline-block" priority />
          </Link>
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden absolute right-4 top-4 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-100 mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-100 mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-100"></span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`mt-4 md:flex justify-center space-y-4 md:space-y-0 md:space-x-8 ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          <Link
            href="/"
            className="block md:inline-block text-center text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block md:inline-block text-center text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block md:inline-block text-center text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors"
            onClick={handleLinkClick}
          >
            Contact
          </Link>

          {/* Collections Dropdown */}
          <div
            ref={dropdownRef}
            className="relative group text-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleCollections}
              className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gold transition-colors focus:outline-none"
              aria-expanded={collectionsOpen}
              aria-haspopup="true"
              id="nav-collections-dropdown"
            >
              Collections
            </button>

            {/* Universal dropdown (works for both mobile and desktop) */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-40 transition-all duration-200 ${
                collectionsOpen
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 -translate-y-2 invisible md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:visible'
              }`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              aria-labelledby="nav-collections-dropdown"
            >
              {collections.map((col: Collection) => (
                <Link
                  key={col.id}
                  href={`/collections/${col.category}`}
                  className="block px-4 py-3 text-center text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-md last:rounded-b-md"
                  onClick={handleLinkClick}
                  data-collection-id={col.id}
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
};

export default NavBar;
