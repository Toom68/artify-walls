export default function AboutPage() {
  return (
    <main>
      <section style={{ maxWidth: 800, margin: '3.5rem auto 2.5rem auto', padding: '0 1.2rem' }}>
        <h1 style={{ fontSize: '2.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1.1rem', letterSpacing: '-1px' }}>
          About Artify Walls
        </h1>
        <p style={{ fontSize: '1.13rem', color: '#333', marginBottom: '1.7rem', lineHeight: 1.6 }}>
          Artify Walls was born from a passion for turning memories and creativity into beautiful, lasting decor. We believe your walls should tell your story—whether it’s a cherished photo, a favorite quote, or a custom design that’s uniquely yours.
        </p>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.7rem' }}>
          Our Mission
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          To empower everyone to create personalized art that transforms any space into a reflection of their personality and style. We use only premium, museum-grade materials and vibrant inks for art that lasts a lifetime.
        </p>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.7rem' }}>
          Why Choose Us?
        </h2>
        <ul style={{ fontSize: '1.05rem', color: '#444', marginLeft: '1.2em', marginBottom: '1.5rem', lineHeight: 1.6, listStyle: 'disc' }}>
          <li>Fully customizable products—your images, your words, your colors</li>
          <li>Premium quality, gallery-worthy materials</li>
          <li>Fast, free shipping and easy returns</li>
          <li>Perfect for gifting and special occasions</li>
        </ul>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.7rem' }}>
          Our Promise
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Every piece from Artify Walls is made with care and attention to detail. We’re here to help you make your walls speak—beautifully.
        </p>
        <div style={{ background: 'var(--color-accent)', borderRadius: 'var(--radius)', padding: '2.2rem 1.5rem', color: 'var(--color-primary)', fontWeight: 600, textAlign: 'center', fontSize: '1.18rem', marginTop: '2.5rem', boxShadow: '0 2px 12px 0 rgba(255,111,97,0.07)' }}>
          "Make Your Walls Speak" — Artify Walls
        </div>
      </section>
    </main>
  );
}
