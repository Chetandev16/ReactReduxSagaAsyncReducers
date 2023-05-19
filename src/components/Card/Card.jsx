import React, { useState } from "react";
import styles from "./Card.module.css";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartAction";

export const Card = (props) => {
  const index = props.idx;
  const { title, id, image, price, rating } = props.item;
  const cartData = useSelector((state) => state.cartData);

  const dispatch = useDispatch();

  // check if product is present in cart
  const productsInCart = cartData.filter((cartItem, idx) => {
    return cartItem.id === id;
  });
  const present = productsInCart.length > 0 ? true : false;

  const [inCart, setInCart] = useState(present);

  const handleCart = () => {
    if (!inCart) {
      dispatch(addToCart(props.item));
    } else {
      dispatch(removeFromCart(id));
    }

    setInCart(!inCart);
  };
  return (
    <div className={styles.container}>
      <p className={styles.id}>{index}</p>
      <p className={styles.title}>
        {title?.length > 10 ? title.slice(0, 30) : title}...
      </p>
      <img src={image} alt="" className={styles.cardImage} />

      <p>{price}$</p>

      <div className={styles.ratingCard}>
        <Rating initialValue={rating?.rate} readonly={true} size={15} />
        <p>{rating?.count} Users</p>
      </div>

      {!inCart && (
        <button
          className={styles.btn}
          onClick={() => {
            handleCart();
          }}
        >
          Add To Cart
        </button>
      )}
      {inCart && (
        <button
          style={{
            backgroundColor: "#ff2a26",
            color: "white"
          }}
          className={styles.btn}
          onClick={() => {
            handleCart();
          }}
        >
          Remove
        </button>
      )}
    </div>
  );
};
