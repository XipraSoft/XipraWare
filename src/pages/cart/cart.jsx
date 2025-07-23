import React from 'react';
import './cart.css'; // assuming you'll move styles into this file or import globally

const Cart = ({products}) => {
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
          <tr>
            <td>
              <div className="cart-info">
                <img src=" buy-1.jpg" alt="Red Printed T-Shirt" />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price: $30.00</small>
                  <br />
                    
                </div>
              </div>
            </td>
            <td><input type="number" defaultValue="1" /></td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src=" buy-2.jpg" alt="Red Printed T-Shirt" />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                    
                </div>
              </div>
            </td>
            <td><input type="number" defaultValue="1" /></td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src=" buy-3.jpg" alt="Red Printed T-Shirt" />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                    
                </div>
              </div>
            </td>
            <td><input type="number" defaultValue="1" /></td>
            <td>$50.00</td>
          </tr>
        </tbody>
      </table>

      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$235.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
