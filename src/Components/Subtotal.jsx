import React from "react";
import styles from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
  const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal({cart.length} items): <strong>{`${value}`}</strong>
          </p>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₱"}
      />
      <button className={styles.checkoutButton}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
