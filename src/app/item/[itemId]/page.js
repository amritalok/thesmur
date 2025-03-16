// src/app/item/[itemId]/page.js
import collections from '../../data/collections';

// Helper function to find an item by id from the collections data
function findItemById(itemId) {
  for (const collection of collections) {
    for (const item of collection.items) {
      if (String(item.id) === String(itemId)) {
        return { item, collectionTitle: collection.title };
      }
    }
  }
  return null;
}

export async function generateStaticParams() {
  const paths = [];
  for (const collection of collections) {
    for (const item of collection.items) {
      paths.push({ itemId: String(item.id) });
    }
  }
  return paths;
}

export default function ItemPage({ params }) {
  const { itemId } = params;
  const data = findItemById(itemId);

  if (!data) {
    return (
      <div className="container my-5">
        <h1>Item Not Found</h1>
        <p>Sorry, we could not find the item you’re looking for.</p>
      </div>
    );
  }

  const { item, collectionTitle } = data;

  return (
    <div className="container my-5">
      <h1>{item.name}</h1>
      <p>
        <strong>Collection:</strong> {collectionTitle}
      </p>
      <img src={item.imageUrl} alt={item.name} className="img-fluid mb-3" />
      <p>{item.description}</p>
    </div>
  );
}
