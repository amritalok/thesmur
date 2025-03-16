// src/app/components/Collection.js
import Link from 'next/link';
export default function Collection({ title, description, imageUrl, items }) {
  return (
    <div className="card mb-4 h-100">
      {imageUrl && <img src={imageUrl} alt={title} className="card-img-top" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {items && items.length > 0 && (
          <div>
            <div className="row">
              {items.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card h-100">
                    <Link href={`/item/${item.id}`}>
                      <img src={item.imageUrl} alt={item.name} className="card-img-top" />
                    </Link>
                    <div className="card-body p-2">
                      <h6 className="card-title" style={{ fontSize: '1rem' }}>
                        {item.name}
                      </h6>
                      <p className="card-text" style={{ fontSize: '0.9rem' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
