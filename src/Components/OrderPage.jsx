import React from "react";
import styles from "./OrderPage.module.css";
import Header from "./Header";

const OrderPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.orderGrid}>
        <div className={styles.orderRight}>
          <h2>Orders to Receive</h2>
          <div className={styles.orderBox}></div>
          <div className={styles.rightButton}>
            <button>Contact Seller</button>
            <button>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
