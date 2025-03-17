import collections from '@/app/data/collections';
import Link from 'next/link';

// ✅ Generate static paths for all collections
export function generateStaticParams() {
  return collections.map((col) => ({
    collection: col.title.toLowerCase(),
  }));
}

const CollectionPage = ({ params }) => {
  const { collection } = params;
  const collectionData = collections.find((col) => col.title.toLowerCase() === collection.toLowerCase());

  if (!collectionData) {
    return (
      <div className="container mt-5">
        <h2>Collection Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{collectionData.title} Collection</h1>
      <p>{collectionData.description}</p>
      <div className="row">
        {collectionData.items.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card">
              <img src={item.imageUrl} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <Link href={`/collections/${collection}/${item.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
