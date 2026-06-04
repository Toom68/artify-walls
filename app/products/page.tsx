import { useState } from 'react';

const products = [
  {
    badge: 'Best Seller',
    img: 'https://source.unsplash.com/480x360/?custom,canvas,print,art',
    alt: 'Custom Canvas Prints',
    title: 'Custom Canvas Prints',
    price: '$89',
  },
  {
    img: 'https://source.unsplash.com/480x360/?personalized,photo,frame,decor',
    alt: 'Personalized Photo Frames',
    title: 'Personalized Photo Frames',
    price: '$49',
  },
  {
    img: 'https://source.unsplash.com/480x360/?customizable,wall,decal,art',
    alt: 'Customizable Wall Decals',
    title: 'Customizable Wall Decals',
    price: '$39',
  },
  {
    img: 'https://source.unsplash.com/480x360/?modern,wall,art,abstract',
    alt: 'Modern Wall Art',
    title: 'Modern Wall Art',
    price: '$59',
  },
  {
    img: 'https://source.unsplash.com/480x360/?family,photo,collage,wall',
    alt: 'Family Photo Collage',
    title: 'Family Photo Collage',
    price: '$69',
  },
  {
    img: 'https://source.unsplash.com/480x360/?nursery,wall,decor,custom',
    alt: 'Custom Nursery Decor',
    title: 'Custom Nursery Decor',
    price: '$54',
  },
];

export default function ProductsPage() {
  return (
    <main>
      <section className="products" id="products">
        {products.map((p, i) => (
          <div className="product-card" tabIndex={0} key={p.title}>
            {p.badge && <div className="product-card__badge">{p.badge}</div>}
            <img className="product-card__img" src={p.img} alt={p.alt} />
            <div className="product-card__body">
              <div className="product-card__title">{p.title}</div>
              <div className="product-card__price">{p.price}</div>
              <AddToCartButton label={`Add ${p.title} to cart`} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

function AddToCartButton({ label }: { label: string }) {
  const [added, setAdded] = useState(false);
  return (
    <button
      className="product-card__btn"
      aria-label={label}
      disabled={added}
      style={
        added
          ? {
              background: '#29c27f',
              color: '#fff',
              boxShadow: '0 4px 18px 0 rgba(41,194,127,0.18)'
            }
          : undefined
      }
      onClick={() => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
      }}
    >
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}
