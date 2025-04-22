import Link from 'next/link';
import Image from 'next/image';
import collections, { Collection, CollectionItem } from '../../data/collections';

// For Next.js App Router
export async function generateStaticParams() {
  return collections.map((col: Collection) => ({
    collection: col.category,
  }));
}

interface CollectionPageProps {
  params: Promise<{
    collection: string;
  }>;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { collection } = await params;
  const collectionData = collections.find((col: Collection) => col.category === collection);

  if (!collectionData) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl text-gray-800 dark:text-gray-100">Collection Not Found</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-8 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-4">
            {collectionData.title} Collection
          </h1>
          <p className="text-gray-600 dark:text-gray-300">{collectionData.description}</p>
        </header>

        {/* Modern CSS Grid with auto-fit for responsive design without media queries */}
        <div className="grid grid-cols-repeat-auto-fit gap-6">
          {collectionData.items.map((item: CollectionItem) => (
            <Link key={item.id} href={`/collections/${collection}/${item.id}`} className="group">
              <article
                className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                               transition-transform duration-300 hover:scale-105 
                               flex flex-col"
              >
                <div className="relative aspect-square bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover object-center"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-center">
                  <h2
                    className="text-lg font-semibold font-heading text-gray-800 dark:text-gray-100 
                              text-ellipsis overflow-hidden whitespace-nowrap"
                  >
                    {item.name}
                  </h2>
                  <p
                    className="text-gray-600 dark:text-gray-400 mt-1 text-sm 
                             display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; 
                             overflow: hidden;"
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
