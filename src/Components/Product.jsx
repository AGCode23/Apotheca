// Product.js
import React from "react";
import styles from "./Product.module.css";

const Product = ({ name, price, image }) => {
  return (
    <div className={styles.product}>
      <img src={image} alt={name} className={styles.productImage} />
      <h3>{name}</h3>
      <p>₱{price}</p>
    </div>
  );
};

export default Product;
