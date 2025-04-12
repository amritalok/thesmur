'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import collections from '../data/collections';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="min-h-screen py-8 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4 text-center">
        {/* <h1 className="text-4xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-4">The Smur</h1> */}
        <div class="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-10 shadow-lg max-w-3xl mx-auto my-8 relative overflow-hidden font-serif text-neutral-800 leading-relaxed">
          <div class="absolute inset-0 opacity-5 pattern-dots pattern-yellow-400 pattern-size-4 pattern-opacity-10"></div>

          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-yellow-400"></div>

          <div class="space-y-4 relative z-10">
            <p>
              At <em class="text-amber-700 font-medium">The Smur</em>, we believe that jewelry is more than just an accessory—it's
              a story, a memory, a reflection of the places that shape us. Founded with a passion for travel and cultural
              exploration, <strong class="text-amber-700">The Smur</strong> brings a unique collection of jewelry inspired by the
              destinations <em class="italic">I have traveled to</em>. Each piece in our collection is personally curated,
              blending the beauty of different cultures with modern elegance. From the intricate craftsmanship of{' '}
              <em class="italic">Jaipur</em>, the romantic charm of <strong class="font-semibold">Paris</strong>, the vibrant
              textures of <strong class="font-semibold">Dubai souks</strong>, to the serene hues of{' '}
              <strong class="font-semibold">Santorini</strong>, our designs capture the essence of these breathtaking locations.
              Our goal is to let you carry a piece of the world with you, wherever you go.
            </p>

            <p>
              Crafted with{' '}
              <em class="italic">
                gold-polished, anti-tarnish finishes, The Smur's jewelry is designed to be timeless, ensuring lasting beauty and
                versatility. Whether you're dressing up for a wedding, a festive occasion, or just looking for an elegant everyday
                accessory, our collections complement every outfit—from sarees and lehengas to chic Western wear
              </em>
              . At The Smur, we celebrate the <em class="italic">explorer in you</em>. Our jewelry is a symbol of adventure,
              culture, and self-expression. Each design tells a story, making it not just something you wear, but something you
              cherish.
            </p>

            <p class="text-center font-medium text-amber-600">
              💛 <em class="italic">Discover The Smur. Wear the world.</em> 💛
            </p>
          </div>

          <div class="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-300/40 rounded-tr-lg"></div>
          <div class="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-300/40 rounded-bl-lg"></div>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {collections.map((collection) => (
            <Link key={collection.id} href={`/collections/${collection.title.toLowerCase()}`} className="group block">
              <motion.div
                className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-120 relative overflow-hidden">
                  <Image
                    src={collection.imageUrl}
                    alt={collection.title}
                    width={300}
                    height={150}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-center">
                  <h2 className="text-xl font-semibold font-heading text-gray-800 dark:text-gray-100 truncate">
                    {collection.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{collection.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
