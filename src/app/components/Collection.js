// src/app/components/Collection.js
import Link from 'next/link';

export default function Collection({ title, description, imageUrl }) {
  return (
    <div className="card shadow-sm border-0">
      {imageUrl && <img src={imageUrl} alt={title} className="card-img-top" style={{ objectFit: 'cover', height: '250px' }} />}
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link href={`/collections/${title.toLowerCase()}`} className="btn btn-dark">
          View Collection
        </Link>
      </div>
    </div>
  );
}
