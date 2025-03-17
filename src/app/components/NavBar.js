'use client';
import Link from 'next/link';
import collections from '@/app/data/collections';
import { useEffect } from 'react';

const NavBar = () => {
  // Ensure Bootstrap’s JS is loaded for toggling
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js'); // Load Bootstrap JS in the client only
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          TheSmur
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="collectionsDropdown" role="button" data-bs-toggle="dropdown">
                Collections
              </a>
              <ul className="dropdown-menu">
                {collections.map((col) => (
                  <li key={col.id}>
                    <Link className="dropdown-item" href={`/collections/${col.title.toLowerCase()}`}>
                      {col.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
