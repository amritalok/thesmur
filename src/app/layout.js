// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';

import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata = {
  title: 'The Smur',
  description: 'A chic and contemporary jewelry portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
