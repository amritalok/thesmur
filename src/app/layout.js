import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'The Smur',
  description: 'A chic and contemporary jewelry portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <NavBar />
        {/* Add extra bottom padding to ensure footer isn't pushed out */}
        <main className="flex-grow pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
