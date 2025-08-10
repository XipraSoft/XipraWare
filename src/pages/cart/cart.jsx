import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import cartcontext from '../../context/cart/cartcontext';
import { products } from '../../helpers.js/cardsdata';
import './cart.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(cartcontext);

  const getProduct = (id) => products.find((p) => p.id === id);
  const getSubtotal = (price, quantity) => price * quantity;

  const subtotal = cartItems.reduce((acc, item) => {
    const product = getProduct(item.id);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  const tax = subtotal * 0.175;
  const total = subtotal + tax;

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const cartData = cartItems.map((item) => {
      const product = getProduct(item.id);
      return {
        title: product.title,
        price: product.price,
        quantity: item.quantity,
        image: product.image,
      };
    });

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/stripe/create-checkout-session`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cartItems: cartData }),
        }
      );

      if (!res.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { id } = await res.json();
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (err) {
      console.error(err);
      alert('Error during checkout. Please try again.');
    }
  };

  return (
    <div className="small-container cart-page">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const product = getProduct(item.id);
            return (
              <tr key={item.id}>
                <td>
                  <div className="cart-info">
                    <img src={product.image} alt={product.title} />
                    <div>
                      <p>{product.title}</p>
                      <small>Price: ${product.price}.00</small>
                      <br />
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" defaultValue={item.quantity} readOnly />
                </td>
                <td>${getSubtotal(product.price, item.quantity).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>${tax.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {cartItems.length > 0 && (
        <button
          style={{
            background: '#ff523b',
            color: '#fff',
            padding: '10px 20px',
            marginTop: '20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
