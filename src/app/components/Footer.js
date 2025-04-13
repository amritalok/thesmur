'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h5 className="uppercase font-bold mb-2">Contact Us</h5>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M3 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H3zm0 2h18v12H3V6zm9 5L4 6h16l-8 5z" />
            </svg>
            <span>contact@thesmur.com</span>
          </div>
        </div>
        {/* Social Media */}
        <div className="text-center">
          <h5 className="uppercase font-bold mb-2">Follow Us</h5>
          <a
            href="https://www.instagram.com/the._.smur/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center hover:text-gold transition-colors"
          >
            <Image src="/instagram.svg" width={8} height={8} alt="Instagram" className="w-8 h-8 inline-block" />
            <span className="inline-block ml-2">Instagram</span>
          </a>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-3">© {new Date().getFullYear()} The Smur. All rights reserved.</div>
    </footer>
  );
}
