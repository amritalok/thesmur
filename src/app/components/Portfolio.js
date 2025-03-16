// src/app/components/Portfolio.js

import Collection from './Collection';
import collections from '../data/collections';

export default function Portfolio() {
  return (
    <div className="container my-5">
      {/* Center the main heading */}
      <h1 className="mb-4 text-center">The Smur</h1>

      {/* Bootstrap grid for cards */}
      <div className="row gy-4">
        {collections.map((collection) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={collection.id}>
            <Collection {...collection} />
          </div>
        ))}
      </div>
    </div>
  );
}
