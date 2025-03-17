// src/app/about/page.js
export default function About() {
  return (
    <div className="min-h-screen py-8 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Welcome to our jewelry portfolio! This business is close to my heart because it represents the fusion of traditional
          craftsmanship and modern design. Every piece is a labor of love that celebrates heritage, creativity, and personal
          expression.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Our journey began with a passion for art and a desire to create unique pieces that empower individuals. We believe that
          jewelry is not just an accessory but a statement of who you are.
        </p>
      </div>
    </div>
  );
}
