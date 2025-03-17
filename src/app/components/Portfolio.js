import Link from 'next/link';
import collections from '../data/collections';

export default function Portfolio() {
  return (
    <div className="min-h-screen py-8 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4 text-center">
        {/* <h1 className="text-4xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-4">The Smur</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Discover our curated collections</p> */}
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {collections.map((collection) => (
            <Link key={collection.id} href={`/collections/${collection.title.toLowerCase()}`} className="group block">
              <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 group-hover:scale-105">
                {/* Enforce a square container for the image */}
                <div className="w-full aspect-square relative">
                  <img src={collection.imageUrl} alt={collection.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-center">
                  <h2 className="text-base sm:text-lg font-semibold font-heading text-gray-800 dark:text-gray-100 truncate">
                    {collection.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
