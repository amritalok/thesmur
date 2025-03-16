// src/app/components/Collection.js
export default function Collection({ title, description, imageUrl, items }) {
  return (
    <div className="card mb-4">
      {imageUrl && <img src={imageUrl} alt={title} className="card-img-top" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {items && items.length > 0 && (
          <div>
            <h6>Items:</h6>
            <div className="row">
              {items.map((item) => (
                <div className="col-6" key={item.id}>
                  <div className="card mb-3">
                    <img src={item.imageUrl} alt={item.name} className="card-img-top" />
                    <div className="card-body p-2">
                      <h6 className="card-title" style={{ fontSize: '1rem' }}>{item.name}</h6>
                      <p className="card-text" style={{ fontSize: '0.9rem' }}>{item.description}</p>
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
