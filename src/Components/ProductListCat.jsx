// ProductList.js
import React from "react";
import ProductCardCat from "./ProductCardCat";
import styles from "./ProductListCat.module.css";
import productData from "./ProductData";

const ProductList = ({ onBuyClick }) => {
  return (
    <div className={styles.productList}>
      {productData.map((product) => (
        <ProductCardCat
          key={product.id}
          product={product}
          onBuyClick={onBuyClick}
        />
      ))}
    </div>
  );
};

export default ProductList;
