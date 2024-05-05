// ProductCard.js
import React from "react";
import styles from "./ProductCardCat.module.css";

const ProductCardCat = ({ product, onBuyClick }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => onBuyClick(product)}>Buy</button>
    </div>
  );
};

export default ProductCardCat;
