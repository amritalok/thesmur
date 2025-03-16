// src/app/components/Footer.js
'use client';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <div className="container p-4">
        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>Email: info@yourjewelry.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Jewelry Street, City, Country</p>
          </div>
          {/* Social Media */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <a href="https://www.instagram.com/the._.smur/" target="_blank" rel="noopener noreferrer">
              <img src="/thesmur/instagram.svg" alt="Instagram" width="30" height="30"></img>
              <svg>instagram</svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Jewelry Portfolio
      </div>
    </footer>
  );
}
