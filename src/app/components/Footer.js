'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h5 className="uppercase font-bold mb-2">Contact Us</h5>
          <p>Email: info@yourjewelry.com</p>
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
            <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 inline-block" />
            <span className="inline-block ml-2">Instagram</span>
          </a>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-3">© {new Date().getFullYear()} The Smur. All rights reserved.</div>
    </footer>
  );
}
