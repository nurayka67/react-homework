import React from 'react';
import './Product.css';

const Product = ({ title, price, inStock, description, rating, tags }) => {
  const isOnSale = tags?.includes("Sale");
  const finalPrice = isOnSale ? Math.round(price * 0.9) : price;

  return (
    <div className={`product ${!inStock ? 'out-of-stock' : ''}`}>
      <h3>{title}</h3>
      <div className="rating">{"⭐".repeat(rating)} ({rating})</div>
      <p>{description}</p>
      <div className="tags">
        {tags?.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <div className="price">
        {!inStock ? "Out of stock" : (
          <>
            {isOnSale && <span className="old-price">{price}₸</span>}
            <span className={isOnSale ? "sale-price" : "normal-price"}>
              {finalPrice}₸
            </span>
            {isOnSale && <span className="sale-badge">-10%</span>}
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
