// ProductList.js
import React from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
