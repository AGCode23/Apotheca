// ProductCardCat.js
import React from "react";
import styles from "./ProductCardCat.module.css";

const ProductCard = ({ product, onBuyClick }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.imageURL} alt={product.name} /> {/* Corrected image source */}
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {/* <p>{product.description}</p> */}
      <button onClick={() => onBuyClick(product)}>Buy</button>
    </div>
  );
};

export default ProductCard;
