import Image from 'next/image';
import { useRef } from 'react';

export default function HomePage() {
  // For smooth scroll on anchor links
  // (handled by browser in Next.js, so no JS needed)
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <img
          className="hero__bg"
          src="https://source.unsplash.com/1920x900/?personalized,home,decor"
          alt="Personalized Home Decor"
        />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__headline">Transform Spaces with Personalized Art</h1>
          <div className="hero__subtext">Discover unique, customizable decor that reflects your style.</div>
          <div className="hero__actions">
            <a href="#products" className="hero__btn">Shop Personalized Decor</a>
            <a href="#features" className="hero__btn hero__btn--alt">How It Works</a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trustbar">
        <div className="trustbar__item"><i>🚚</i> Free Shipping</div>
        <div className="trustbar__item"><i>🔄</i> Easy Returns</div>
        <div className="trustbar__item"><i>🔒</i> Secure Checkout</div>
        <div className="trustbar__item"><i>🏡</i> Make Your Walls Speak</div>
      </div>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon">🎨</div>
          <div className="feature-card__title">Fully Customizable</div>
          <div className="feature-card__desc">
            Choose your own images, colors, and text to create one-of-a-kind decor that matches your personality and space.
          </div>
        </div>
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon">🖼️</div>
          <div className="feature-card__title">Premium Quality</div>
          <div className="feature-card__desc">
            We use museum-grade materials and vibrant inks for art that lasts, ensuring every piece is gallery-worthy.
          </div>
        </div>
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon">🎁</div>
          <div className="feature-card__title">Perfect for Gifting</div>
          <div className="feature-card__desc">
            Personalize a memorable gift for housewarmings, weddings, or any occasion that deserves a unique touch.
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="products" id="products">
        <div className="product-card" tabIndex={0}>
          <div className="product-card__badge">Best Seller</div>
          <img
            className="product-card__img"
            src="https://source.unsplash.com/480x360/?custom,canvas,print,art"
            alt="Custom Canvas Prints"
          />
          <div className="product-card__body">
            <div className="product-card__title">Custom Canvas Prints</div>
            <div className="product-card__price">$89</div>
            <AddToCartButton label="Add Custom Canvas Prints to cart" />
          </div>
        </div>
        <div className="product-card" tabIndex={0}>
          <img
            className="product-card__img"
            src="https://source.unsplash.com/480x360/?personalized,photo,frame,decor"
            alt="Personalized Photo Frames"
          />
          <div className="product-card__body">
            <div className="product-card__title">Personalized Photo Frames</div>
            <div className="product-card__price">$49</div>
            <AddToCartButton label="Add Personalized Photo Frames to cart" />
          </div>
        </div>
        <div className="product-card" tabIndex={0}>
          <img
            className="product-card__img"
            src="https://source.unsplash.com/480x360/?customizable,wall,decal,art"
            alt="Customizable Wall Decals"
          />
          <div className="product-card__body">
            <div className="product-card__title">Customizable Wall Decals</div>
            <div className="product-card__price">$39</div>
            <AddToCartButton label="Add Customizable Wall Decals to cart" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__headline">Ready to Make Your Walls Speak?</div>
        <a href="#products" className="cta-banner__btn">Start Customizing</a>
      </section>
    </>
  );
}

import { useState } from 'react';
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
