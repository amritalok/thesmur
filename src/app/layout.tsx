// layout.tsx
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Roboto } from 'next/font/google';
import AnalyticsProvider from './components/AnalyticsProvider';
import { ReactNode } from 'react';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'The Smur',
  description: 'A chic and contemporary jewelry portfolio',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        {/* {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <AnalyticsProvider />} */}
        <NavBar />
        <main className="flex-grow pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
