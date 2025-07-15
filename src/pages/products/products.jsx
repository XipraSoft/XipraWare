import React from "react";
import "./products.css"; // Ensure this path matches your file structure

const Product = () => {
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: "Red Printed T-Shirt",
    price: "$50.00",
    image: `  product-${i + 1}.jpg`,
    rating: 4,
  }));

  return (
    <div className="small-container">
      <div className="row row-2">
        <h2>All Products</h2>
        <select>
          <option>Default Sort</option>
          <option>Sort By Price</option>
          <option>Sort By Popularity</option>
          <option>Sort By Rating</option>
          <option>Sort By Sale</option>
        </select>
      </div>

      {/* Product Rows */}
      {Array.from({ length: 3 }, (_, rowIdx) => (
        <div className="row" key={rowIdx}>
          {products.slice(rowIdx * 4, rowIdx * 4 + 4).map((product) => (
            <div className="col-4" key={product.id}>
              <a href="product_details.html">
                <img src={product.image} alt={`Product ${product.id}`} />
              </a>
              <h4>{product.name}</h4>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa ${
                      i < product.rating ? "fa-star" : "fa-star-o"
                    }`}
                  />
                ))}
              </div>
              <p>{product.price}</p>
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
