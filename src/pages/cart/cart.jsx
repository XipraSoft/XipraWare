import React, { useContext } from 'react';
import './cart.css';
import cartcontext from '../../context/cart/cartcontext';
import { products } from '../../helpers.js/cardsdata'; // Your product list

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(cartcontext);

  const getProduct = (id) => products.find((p) => p.id === id);

  const getSubtotal = (price, quantity) => price * quantity;

  const subtotal = cartItems.reduce((acc, item) => {
    const product = getProduct(item.id);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  const tax = subtotal * 0.175; // 17.5% tax example
  const total = subtotal + tax;

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
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    readOnly
                  />
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
    </div>
  );
};

export default Cart;
