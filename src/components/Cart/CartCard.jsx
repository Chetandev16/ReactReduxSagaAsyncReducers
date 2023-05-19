import React, { useState } from "react";
import styles from "./Cart.module.css";
import { Rating } from "react-simple-star-rating";
import { useSelector } from "react-redux";
// import { addToCart } from "../../redux/cartAction";

export const CartCard = (props) => {
  // const dispatch = useDispatch();
  const { title, id, image, price, rating } = props.item;
  const data = useSelector((state) => state.cartData);
  const len = data.filter((item) => item.id === id).length;
  const [count, setCount] = useState(len);

  // useEffect(() => {
  //   dispatch(addToCart(props.item));
  // }, count);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="" />

      <div className={styles.info}>
        <p>{title}</p>
        <div className={styles.ratingCard}>
          <Rating initialValue={rating?.rate} readonly={true} size={15} />
          <p>{rating?.count} Users</p>
        </div>

        <div>
          <p>{price} $</p>

          <div className={styles.productCounter}>
            items:
            <button onClick={() => setCount(count + 1)} className={styles.btn}>
              +
            </button>
            {count}
            <button
              onClick={() => {
                if (count !== 1) setCount(count - 1);
              }}
              className={styles.btn}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
