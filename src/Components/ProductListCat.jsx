// ProductListCat.jsx
import React, { useState, useEffect } from "react";
import ProductCardCat from "./ProductCardCat";
import styles from "./ProductListCat.module.css";
import getProductsFromFirestore from "./ProductData";

const ProductListCat = ({ categoryCode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProductsFromFirestore();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  // Filter products based on the category code
  const filteredProducts = categoryCode
    ? products.filter((product) => product.id.startsWith(categoryCode))
    : products;

  // Calculate indexes for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className={styles.productList}>
        {currentProducts.map((product, index) => (
          <ProductCardCat
            key={index} // Ensure each key is unique
            product={product}
          />
        ))}
      </div>
      <ul className={styles.pagination}>
        <li
          onClick={prevPage}
          className={currentPage === 1 ? styles.disabled : ""}
        >
          Previous
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </li>
        ))}
        <li
          onClick={nextPage}
          className={currentPage === totalPages ? styles.disabled : ""}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default ProductListCat;