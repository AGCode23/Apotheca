// Product.jsx
import React from "react";
import styles from "./Product.module.css";

const Product = ({ name, price, image }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productImageDiv}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>
      <h3>{name}</h3>
      <p>₱{price}</p>
    </div>
  );
};

export default Product;
