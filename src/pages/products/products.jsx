import React, { useState } from "react";
import "./products.css";

const Product = ({ products }) => {
  const [sortOption, setSortOption] = useState("Default Sort");

  // Handle sort selection
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "Sort By Price") {
      return a.price - b.price; // ascending
    }
    return 0; // Default (no sorting)
  });

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
              <p>${product.price}.00</p>
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
