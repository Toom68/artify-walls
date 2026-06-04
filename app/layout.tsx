'use client';
import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Artify Walls | Make Your Walls Speak</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Sticky Glassmorphism Nav */}
        <nav className="nav" role="navigation">
          <a href="/" className="nav__logo">Artify Walls</a>
          <div className="nav__links">
            <a href="/#features" className="nav__link">Features</a>
            <a href="/products" className="nav__link">Shop</a>
            <a href="/about" className="nav__link">About</a>
            <a href="#contact" className="nav__link">Contact</a>
            <a href="/products" className="nav__cta">Shop Now</a>
          </div>
        </nav>
        {children}
        {/* Footer */}
        <footer className="footer" id="about">
          <div className="footer__col">
            <div className="footer__brand">Artify Walls</div>
            <div className="footer__desc">
              Personalized home decor that turns your memories and style into stunning art. <br />
              <span style={{ color: '#ffb8ae' }}>&quot;Make Your Walls Speak&quot;</span>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__col-title" style={{ fontWeight: 600, marginBottom: '0.4rem' }}>Shop</div>
            <div className="footer__links">
              <a href="/products" className="footer__link">All Products</a>
              <a href="/products" className="footer__link">Custom Canvas Prints</a>
              <a href="/products" className="footer__link">Photo Frames</a>
              <a href="/products" className="footer__link">Wall Decals</a>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__col-title" style={{ fontWeight: 600, marginBottom: '0.4rem' }}>Company</div>
            <div className="footer__links">
              <a href="/about" className="footer__link">About Us</a>
              <a href="#contact" className="footer__link">Contact</a>
              <a href="/#features" className="footer__link">How It Works</a>
              <a href="/" className="footer__link">Home</a>
            </div>
          </div>
          <div className="footer__copyright">
            &copy; 2024 Artify Walls. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
