import React from 'react'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Street Runner Shoes',
    category: 'Footwear',
    price: 79,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Classic Denim Jacket',
    category: 'Fashion',
    price: 64,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Noise-Cancel Headphones',
    category: 'Electronics',
    price: 129,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Eco Water Bottle',
    category: 'Accessories',
    price: 24,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80',
  },
]

const categories = ['All', 'Fashion', 'Electronics', 'Footwear', 'Accessories']

function App() {
  const total = products.reduce((sum, product) => sum + product.price, 0)

  return (
    <div className="storefront">
      <header className="hero">
        <p className="hero-badge">Spring Collection 2026</p>
        <h1>Shop Smart, Live Better</h1>
        <p className="hero-copy">
          Find everyday essentials with fast shipping, honest prices, and styles
          picked for modern living.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Start Shopping</button>
          <button className="btn btn-outline">View Deals</button>
        </div>
      </header>

      <section className="category-row" aria-label="Product categories">
        {categories.map((category) => (
          <button key={category} className="category-chip" type="button">
            {category}
          </button>
        ))}
      </section>

      <main className="content-grid">
        <section className="products" aria-label="Featured products">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <img src={product.image} alt={product.name} loading="lazy" />
              <div className="product-body">
                <p className="product-category">{product.category}</p>
                <h2>{product.name}</h2>
                <div className="product-meta">
                  <span>${product.price}</span>
                  <span>⭐ {product.rating}</span>
                </div>
                <button type="button" className="btn btn-primary product-btn">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="cart-summary" aria-label="Cart summary">
          <h3>Quick Cart</h3>
          <p>{products.length} items selected</p>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${total}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>$0</strong>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <strong>${total}</strong>
          </div>
          <button type="button" className="btn btn-primary checkout-btn">
            Checkout
          </button>
        </aside>
      </main>
    </div>
  )
}

export default App
