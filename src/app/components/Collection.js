'use client';
// src/app/components/Collection.js
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Collection({ title, description, imageUrl }) {
  return (
    <motion.article
      className="collection-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {imageUrl && <Image src={imageUrl} alt={title} width={400} height={250} className="collection-image object-cover" />}
      <div className="collection-content p-4">
        <h2 className="collection-title text-xl font-semibold mb-2">{title}</h2>
        <p className="collection-description text-gray-600 mb-4">{description}</p>
        <Link
          href={`/collections/${title.toLowerCase()}`}
          className="collection-link text-blue-500 hover:underline"
          aria-label={`View the ${title} collection`}
        >
          View Collection
        </Link>
      </div>
    </motion.article>
  );
}
