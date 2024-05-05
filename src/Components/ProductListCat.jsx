// ProductList.js
import React, { useState } from "react";
import ProductCardCat from "./ProductCardCat";
import styles from "./ProductListCat.module.css";
import productsData from "./ProductData";

const ProductList = ({ onBuyClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Logic to calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.productList}>
      {currentProducts.map((product) => (
        <ProductCardCat
          key={product.id}
          product={product}
          onBuyClick={onBuyClick}
        />
      ))}
      {/* Pagination buttons */}
      <div className={styles.pagination}>
        {Array.from({
          length: Math.ceil(productsData.length / productsPerPage),
        }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
