// src/app/components/Portfolio.js

import collections from '../data/collections';
import Collection from './Collection';

export default function Portfolio() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">The Smur</h1>

      <div className="row justify-content-center">
        {collections.map((collection) => (
          <div className="col-md-6 col-lg-4 mb-4" key={collection.id}>
            <Collection {...collection} />
          </div>
        ))}
      </div>
    </div>
  );
}
