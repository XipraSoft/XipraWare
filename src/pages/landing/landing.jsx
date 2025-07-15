import React from 'react';
import './landing.css'; // Assuming you have a CSS file for styling

const Landing = () => {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <h1>
            Give Your Workout <br /> A New Style!
          </h1>
          <p>
            Success isn't always about greatness. It's about consistency. Consistent
            <br /> hard work gains success. Greatness will come.
          </p>
          <a href="#" className="btn">
            Explore Now &#8594;
          </a>
        </div>
        <div className="col-2">
          <img src=" image1.png" alt="Workout" />
        </div>
      </div>

      {/* Featured Categories */}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src=" category-1.jpg" alt="Category 1" />
            </div>
            <div className="col-3">
              <img src=" category-2.jpg" alt="Category 2" />
            </div>
            <div className="col-3">
              <img src=" category-3.jpg" alt="Category 3" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {[1, 2, 3, 4].map((num) => (
            <div className="col-4" key={num}>
              <a href="product_details.html">
                <img src={` product-${num}.jpg`} alt={`Product ${num}`} />
              </a>
              <h4>Red Printed T-Shirt</h4>
              <div className="rating">
                {[...Array(4)].map((_, i) => (
                  <i className="fa fa-star" key={i}></i>
                ))}
                <i className="fa fa-star-o"></i>
              </div>
              <p>$50.00</p>
            </div>
          ))}
        </div>

        <h2 className="title">Latest Products</h2>
        <div className="row">
          {[5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <div className="col-4" key={num}>
              <img src={` product-${num}.jpg`} alt={`Product ${num}`} />
              <h4>Red Printed T-Shirt</h4>
              <div className="rating">
                {[...Array(4)].map((_, i) => (
                  <i className="fa fa-star" key={i}></i>
                ))}
                <i className="fa fa-star-o"></i>
              </div>
              <p>$50.00</p>
            </div>
          ))}
        </div>
      </div>

      {/* Offer */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src=" exclusive.png" className="offer-img" alt="Exclusive Offer" />
            </div>
            <div className="col-2">
              <p>Exclusively Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color
                full-touch display with adjustable brightness, so everything is clear as can be.
              </small>
              <br />
              <a href="products.html" className="btn">
                Buy Now &#8594;
              </a>
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
                  XipraWare offers high-performance, stylish sportswear designed for comfort, durability, and peak athletic performance.
Train harder, move freer, and look sharper—only with XipraWare.
                </p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i className="fa fa-star" key={i}></i>
                  ))}
                </div>
                <img src={` ${img}`} alt={`User ${idx + 1}`} />
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
                <img src={`${logo}`} alt={`Brand ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
