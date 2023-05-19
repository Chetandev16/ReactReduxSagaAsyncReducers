import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { searchQuery } from "../../redux/productAction";

import { injectReducer } from "../../redux/store";
import { searchQueryReducer } from "../../redux/productReducer";

export const Header = () => {
  const result = useSelector((state) => state.cartData); //get all data of cart
  const dispatch = useDispatch();

  const [search, setSearch] = useState(""); //search product from input field
  const navigate = useNavigate();
  useEffect(() => {
    injectReducer("searchQuery", searchQueryReducer);
  }, []);

  useEffect(() => {
    dispatch(searchQuery(search)); //send updated query to redux everytime user updates any value in input
  }, [search]);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <img className={styles.logo} src={logo} alt="" />

      {/* search bar */}
      <div className={styles.inputContainer}>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{
            fontSize: "16px",
            border: "none",
            width: "100%",
            outline: "none",
            padding: "10px 0"
          }}
          type="text"
          placeholder="search product"
        />

        <BsSearch className={styles.searchIcon} />
      </div>

      {/* Cart Logo */}
      <div
        style={{
          cursor: "pointer"
        }}
        className={styles.cartContainer}
        onClick={() => {
          navigate("/cart");
        }}
      >
        <BsFillCartFill className={styles.cartLogo} />

        <div className={styles.cartCount}>{result.length}</div>
      </div>
    </header>
  );
};
