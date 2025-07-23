import React, { useState } from "react";
import "./products.css";
import  { useContext } from 'react';
import cartcontext from '../../context/cart/cartcontext';

const Product = ({ products }) => {
  const [sortOption, setSortOption] = useState("Default Sort");
 const { addToCart } = useContext(cartcontext);
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Apply sorting logic
  const sortedProducts = (() => {
    let clonedProducts = [...products];

    switch (sortOption) {
      case "Sort By Price":
        return clonedProducts.sort((a, b) => a.price - b.price);

      case "Sort By Rating":
        return clonedProducts.sort((a, b) => b.price - a.price); // reverse of Sort By Price

      case "Sort By Popularity":
        return clonedProducts.reverse();

      default:
        return clonedProducts;
    }
  })();

  return (
    <div className="small-container">
      <div className="row row-2">
        <h2>All Products</h2>
        <select onChange={handleSortChange} value={sortOption}>
          <option>Default Sort</option>
          <option>Sort By Price</option>
          <option>Sort By Popularity</option>
          <option>Sort By Rating</option>
          <option>Sort By Sale</option>
        </select>
      </div>

      {/* Product Rows */}
      {Array.from({ length: Math.ceil(sortedProducts.length / 4) }, (_, rowIdx) => (
        <div className="row" key={rowIdx}>
          {sortedProducts.slice(rowIdx * 4, rowIdx * 4 + 4).map((product) => (
            <div className="col-4" key={product.id}>
              <a href="product_details.html">
                <img src={product.image} alt={`Product ${product.id}`} />
              </a>
              <h4>{product.title}</h4>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa ${
                      i < (product.rating || 0) ? "fa-star" : "fa-star-o"
                    }`}
                  />
                ))}
              </div>
               <div className='bottom'>
                <p>${product.price}.00</p>
            <button onClick={addToCart} className='addcart'><img src="cart.png" width="20px" height="20px" alt="cart" /></button>
</div>
            </div>
          ))}
        </div>
      ))}

      <div className="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&#8594;</span>
      </div>
    </div>
  );
};

export default Product;
