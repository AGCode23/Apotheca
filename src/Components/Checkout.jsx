import React from "react";
import Header from "./Header";
import styles from "./Checkout.module.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import ProductCart from "./ProductCart";

const Checkout = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className={styles.checkoutContainer}>
      <Header />
      <div className={styles.checkout}>
        <div className={styles.checkoutLeft}>
          {cart?.length === 0 ? (
            <div>
              <h2 className={styles.checkoutTitle}>Your cart is empty.</h2>
              <p>Your have no item in your cart. Buy something now.</p>
            </div>
          ) : (
            <div>
              <h2 className={styles.cartTitle}>Items in your Cart</h2>
              {cart.map((item) => (
                <ProductCart
                  description={item.description}
                  id={item.id}
                  imageURL={item.imageURL}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className={styles.checkoutRight}>
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
