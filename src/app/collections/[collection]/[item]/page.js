import collections from '@/app/data/collections';

// ✅ Generate static paths for all items within each collection
export function generateStaticParams() {
  return collections.flatMap((col) =>
    col.items.map((item) => ({
      collection: col.title.toLowerCase(), // Convert to lowercase for URL consistency
      item: item.id.toString(), // Ensure item ID is a string
    })),
  );
}

const ItemPage = ({ params }) => {
  const { collection, item } = params;

  // ✅ Find the collection
  const collectionData = collections.find((col) => col.title.toLowerCase() === collection.toLowerCase());

  if (!collectionData) {
    return (
      <div className="container mt-5">
        <h2>Collection Not Found</h2>
      </div>
    );
  }

  // ✅ Find the specific item
  const itemData = collectionData.items.find((i) => i.id.toString() === item);

  if (!itemData) {
    return (
      <div className="container mt-5">
        <h2>Item Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{itemData.name}</h1>
      <img src={itemData.imageUrl} alt={itemData.name} className="img-fluid" />
      <p>{itemData.description}</p>
      <a href={`/collections/${collection}`} className="btn btn-secondary mt-3">
        Back to {collectionData.title}
      </a>
    </div>
  );
};

export default ItemPage;
