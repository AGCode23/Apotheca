// CategoryPage.jsx

import React, { useState } from "react";
import ProductListCat from "./ProductListCat";
import styles from "./CategoryPage.module.css";
import Header from "./Header";

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryCode) => {
    setSelectedCategory(categoryCode);
  };

  const handleAllProductsClick = () => {
    setSelectedCategory(null); // Reset selected category to display all products
  };

  return (
    <div className={styles.categoryContainer}>
      <Header />
      <div className={styles.navContainer}>
        <div className={styles.mainNav}>
          <div className={styles.leftNav}>
            <ul className={styles.listSideNav}>
              <h2
                className={`${styles.allProducts} ${
                  selectedCategory === null ? styles.active : ""
                }`}
                onClick={handleAllProductsClick}
              >
                All Products
              </h2>
              <h2>Prescription</h2>
              <li
                className={selectedCategory === "01" ? styles.active : ""}
                onClick={() => handleCategoryClick("01")}
              >
                Antibiotics
              </li>
              <li
                className={selectedCategory === "02" ? styles.active : ""}
                onClick={() => handleCategoryClick("02")}
              >
                Anti-asthma & COPD
              </li>
              <li
                className={selectedCategory === "03" ? styles.active : ""}
                onClick={() => handleCategoryClick("03")}
              >
                Cholesterol
              </li>
            </ul>
            <ul className={styles.listSideNav}>
              <h2>Over-the-Counter</h2>
              <li
                className={selectedCategory === "04" ? styles.active : ""}
                onClick={() => handleCategoryClick("04")}
              >
                Allergies
              </li>
              <li
                className={selectedCategory === "05" ? styles.active : ""}
                onClick={() => handleCategoryClick("05")}
              >
                Cough and Colds
              </li>
              <li
                className={selectedCategory === "06" ? styles.active : ""}
                onClick={() => handleCategoryClick("06")}
              >
                Pain Reliever
              </li>
            </ul>
          </div>
          <div className={styles.rightNav}>
            <ProductListCat categoryCode={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
