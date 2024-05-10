// ProductCardCat.js
import React from "react";
import styles from "./ProductCardCat.module.css";
import { useStateValue } from "./StateProvider";

const ProductCard = ({ product }) => {
  const [{ cart }, dispatch] = useStateValue();
  console.log("basket content", cart);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        description: product.description,
        id: product.id,
        imageURL: product.imageURL,
        title: product.title,
        price: product.price,
      },
    });
  };

  return (
    <div className={styles.productCard}>
      <img src={product.imageURL} alt={product.name} />{" "}
      {/* Corrected image source */}
      <h3>{product.title}</h3>
      <p>Price: ₱{product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Buy</button>
    </div>
  );
};

export default ProductCard;
