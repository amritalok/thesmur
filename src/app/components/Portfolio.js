'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import collections from '../data/collections';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="min-h-screen py-8 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 md:p-10 shadow-lg mx-auto my-8 relative overflow-hidden text-neutral-800 dark:text-neutral-100 leading-relaxed font-body">
          <div className="absolute inset-0 opacity-5 pattern-dots pattern-[var(--color-gold)] dark:pattern-[var(--color-gold)] pattern-size-4 pattern-opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold)]"></div>

          <div className="space-y-4 relative z-10 w-full">
            <p className="w-full">
              At The Smur, we celebrate the <em>explorer in you</em>. Our jewelry is a symbol of adventure, culture, and
              self-expression. Each design tells a story, making it not just something you wear, but something you cherish.
            </p>

            <p className="text-center font-medium text-[var(--color-gold)]">
              💛 <em> Wear The SMUR, Discover The World </em> 💛
            </p>
          </div>
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[var(--color-gold)]/40 dark:border-[var(--color-gold)]/20 rounded-tr-lg"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[var(--color-gold)]/40 dark:border-[var(--color-gold)]/20 rounded-bl-lg"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link key={collection.id} href={`/collections/${collection.category}`} className="group block">
              <motion.div
                className="flex flex-col h-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-auto aspect-square relative overflow-hidden">
                  <Image
                    src={collection.imageUrl}
                    alt={collection.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-center border-t border-[var(--color-gold)]/10">
                  <h2 className="text-xl font-semibold font-heading text-gray-800 dark:text-gray-100 truncate">
                    {collection.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{collection.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center text-[var(--color-gold)] hover:text-[var(--color-gold)]/80 font-medium transition-colors duration-200">
                      Explore collection
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
