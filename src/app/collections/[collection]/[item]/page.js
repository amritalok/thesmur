import Link from 'next/link';
import collections from '../../../data/collections';
import Image from 'next/image';

export function generateStaticParams() {
  return collections.flatMap((col) =>
    col.items.map((item) => ({
      collection: col.title.toLowerCase(),
      item: item.id.toString(),
    })),
  );
}

export default function ItemPage({ params }) {
  const { collection, item } = params;
  const colData = collections.find((col) => col.title.toLowerCase() === collection.toLowerCase());
  if (!colData)
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl text-gray-800 dark:text-gray-100">Collection Not Found</h2>
      </div>
    );
  const itemData = colData.items.find((i) => i.id.toString() === item);
  if (!itemData)
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl text-gray-800 dark:text-gray-100">Item Not Found</h2>
      </div>
    );

  return (
    <div className="min-h-screen py-8 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-4">{itemData.name}</h1>
        <div className="relative w-full max-w-2xl mx-auto aspect-[4/5]">
          <Image
            src={itemData.imageUrl}
            alt={itemData.name}
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{itemData.description}</p>
        <Link
          href={`/collections/${collection}`}
          className="inline-block px-6 py-3 bg-gold text-white rounded-md font-semibold transition duration-300 hover:bg-yellow-600"
        >
          Back to {colData.title} Collection
        </Link>
      </div>
    </div>
  );
}
