import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartCard } from "./CartCard";
import styles from "./Cart.module.css";

export const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const navigate = useNavigate();

  const price = cartData.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className="App__Layout">
      <div className={styles.cartHeader}>
        <h2>Total Price : {price}$</h2>

        <p
          onClick={() => {
            navigate("/");
          }}
          style={{
            textAlign: "end",
            marginRight: "2rem",
            textDecoration: "underline",
            cursor: "pointer"
          }}
        >
          go Back
        </p>
      </div>

      <div
        style={{
          width: "90%"
        }}
      >
        {cartData.map((item, idx) => {
          return (
            <div key={idx}>
              <CartCard item={item} />
            </div>
          );
        })}
      </div>

      {cartData.length === 0 && (
        <div
          style={{
            marginTop: "6rem"
          }}
        >
          <h1
            style={{
              textAlign: "center"
            }}
          >
            CART IS EMPTY
          </h1>
        </div>
      )}
    </div>
  );
};
