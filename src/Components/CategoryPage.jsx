import React from "react";
import ProductListCat from "./ProductListCat";
import styles from "./CategoryPage.module.css";
import Header from "./Header";

const CategoryPage = () => {
  const handleBuyClick = (product) => {};

  return (
    <div className={styles.categoryContainer}>
      <Header />
      <div className={styles.navContainer}>
        <div className={styles.mainNav}>
          <div className={styles.leftNav}>
            <ul className={styles.listSideNav}>
              <h2>Prescription</h2>
              <li>Antibiotics</li>
              <li>Anti-asthma & COPD</li>
              <li>Cholesterol</li>
            </ul>
            <ul className={styles.listSideNav}>
              <h2>Over-the-Counter</h2>
              <li>Allergies</li>
              <li>Cough and Colds</li>
              <li>Pain Reliever</li>
            </ul>
          </div>
          <div className={styles.rightNav}>
            <ProductListCat onBuyClick={handleBuyClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
