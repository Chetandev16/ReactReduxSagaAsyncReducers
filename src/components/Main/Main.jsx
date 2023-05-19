import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/productAction";
import { Card } from "../Card/Card";

export const Main = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products);
  const query = useSelector((state) => state.searchQuery);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(addProducts()); //this will initiate saga to fetch products from given api when main Componet is mounted
  }, []);

  //this useEffect will run each time when searchQuery will be updated
  useEffect(() => {
    let res = allProducts?.[0];

    if (query !== undefined) {
      res = allProducts?.[0]?.filter((item) =>
        item?.title?.toLowerCase().includes(query?.toLowerCase())
      );
    }

    setFilteredProducts(res);
  }, [allProducts, query]);

  return (
    <main className={styles.container}>
      {filteredProducts &&
        filteredProducts.map((item, idx) => {
          // console.log(present);
          return (
            <div key={idx}>
              <Card item={item} idx={idx + 1} />
            </div>
          );
        })}
    </main>
  );
};
