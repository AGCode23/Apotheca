import React from "react";
import Header from "./Header";
import styles from "./Checkout.module.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className={styles.checkoutContainer}>
      <Header />
      <div className={styles.checkout}>
        <div className={styles.checkoutLeft}>
          <div>
            <h2 className={styles.checkoutTitle}>Your cart is empty.</h2>
            <p>Your have no item in your cart. Buy something now.</p>
          </div>
        </div>
        <div className={styles.checkoutRight}>
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
