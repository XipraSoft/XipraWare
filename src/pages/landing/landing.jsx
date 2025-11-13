import React from 'react';
import './landing.css';
import  { useContext } from 'react';
import cartcontext from '../../context/cart/cartcontext';
import { Link } from 'react-router-dom';
//landing.jsx
//jfsfiwhfiuw
function Landing({ products }) {
  const { addToCart } = useContext(cartcontext);
  return (
    <div>
      {/* Hero Section */}
      <div className="row">
        <div className="col-2">
          <h1>
            Give Your Workout <br /> A New Style!
          </h1>
          <p>
            Success isn't always about greatness. It's about consistency. <br />
            Consistent hard work gains success. Greatness will come.
          </p>
          <Link to="/products">  <a href="#" className="btn">
            Explore Now &#8594;
          </a></Link>
        </div>
        <div className="col-2">
          <img src="image1.png" alt="Workout" />
        </div>
      </div>

      {/* Featured Categories */}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            {["category-1.jpg", "category-2.jpg", "category-3.jpg"].map((img, i) => (
              <div className="col-3" key={i}>
                <img src={img} alt={`Category ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {products.slice(0, 4).map((product) => (
            <div className="col-4" key={product.id}>
              <img src={product.image} alt={`Product ${product.id}`} />
              <h4>{product.title}</h4>
              <div className='bottom'>
                <p>${product.price}.00</p>
            <button onClick={() => addToCart(product.id)} className="addcart">
  <img src="cart.png" width="20px" height="20px" alt="cart" />
</button>

</div>
            </div>
          ))}
        </div>

        {/* Latest Products */}
        <h2 className="title">Latest Products</h2>
        <div className="row">
          {products.slice(4, 14).map((product) => (
            <div className="col-4" key={product.id}>
              <img src={product.image} alt={`Product ${product.id}`} />
              <h4>{product.title}</h4>
             <div className='bottom'>
                <p>${product.price}.00</p>
            <button onClick={() => addToCart(product.id)} className="addcart">
<img src="cart.png" alt="cart" />
</button>
</div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer */}
     {/* Exclusive Offer Section*/}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src="exclusive.png" className="offer-img" alt="Exclusive Offer" />
            </div>
            <div className="col-2">
              <p>Exclusively Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger AMOLED color full-touch display
                with adjustable brightness, so everything is clear as can be.
              </small>
              <br />
             <Link to="/products"> <a href="products.html" className="btn">
                Buy Now &#8594;
              </a></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            {["user-1.png", "user-2.png", "user-3.png"].map((img, idx) => (
              <div className="col-3" key={idx}>
                <i className="fa fa-quote-left"></i>
                <p>
                  XipraWare offers high-performance, stylish sportswear designed for comfort,
                  durability, and peak athletic performance.
                </p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i className="fa fa-star" key={i}></i>
                  ))}
                </div>
                <img src={img} alt={`User ${idx + 1}`} />
                <h3>{["Sean Parker", "Mike Smith", "Mabel Joe"][idx]}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="brands">
        <div className="small-container">
          <div className="row">
            {[
              "logo-godrej.png",
              "logo-oppo.png",
              "logo-coca-cola.png",
              "logo-paypal.png",
              "logo-philips.png",
            ].map((logo, idx) => (
              <div className="col-5" key={idx}>
                <img src={logo} alt={`Brand ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
