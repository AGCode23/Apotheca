import React from "react";
import styles from "./ProductCart.module.css";
import { useStateValue } from "./StateProvider";

const ProductCart = ({ description, id, imageURL, title, price }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className={styles.productCart}>
      <img className={styles.productCartImage} src={imageURL} alt="" />
      <div className={styles.productCartInfo}>
        <h2 className={styles.productCartTitle}>{title}</h2>
        <h3 className={styles.productCartPrice}>Price: ₱{price}</h3>
        <p className={styles.productCartDesc}>{description}</p>
        <button onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
};

export default ProductCart;
