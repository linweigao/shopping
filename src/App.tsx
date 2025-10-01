import React, { useState } from 'react';
import './App.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

function App() {
  const [products] = useState<Product[]>([
    { id: 1, name: 'T-Shirt', price: 19.99, image: '👕' },
    { id: 2, name: 'Jeans', price: 49.99, image: '👖' },
    { id: 3, name: 'Sneakers', price: 79.99, image: '👟' },
    { id: 4, name: 'Hat', price: 24.99, image: '🧢' }
  ]);

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product): void => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number): void => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = (): string => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🛍️ Shopping App</h1>
        <div className="cart-info">
          Cart: {cart.length} items - ${getTotalPrice()}
        </div>
      </header>

      <main className="main-content">
        <section className="products">
          <h2>Products</h2>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="cart-item">
                  <span>{item.image} {item.name} - ${item.price}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="cart-total">
                <strong>Total: ${getTotalPrice()}</strong>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;