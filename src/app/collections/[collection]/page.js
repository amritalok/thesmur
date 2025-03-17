import Link from 'next/link';
import collections from '../../data/collections';
import Image from 'next/image';

export async function generateStaticParams() {
  return collections.map((col) => ({
    collection: col.title.toLowerCase(),
  }));
}

export default async function CollectionPage({ params }) {
  const { collection } = await params;
  const collectionData = collections.find((col) => col.title.toLowerCase() === collection.toLowerCase());

  if (!collectionData) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl text-gray-800 dark:text-gray-100">Collection Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-4">
          {collectionData.title} Collection
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">{collectionData.description}</p>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {collectionData.items.map((item) => (
            <Link key={item.id} href={`/collections/${collection}/${item.id}`} className="group block">
              <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 group-hover:scale-105">
                <Image src={item.imageUrl} alt={item.name} width={20} height={48} className="w-full h-48 object-cover" />
                <div className="p-4 flex-grow flex flex-col justify-center text-center">
                  <h2 className="text-lg font-semibold font-heading text-gray-800 dark:text-gray-100">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
