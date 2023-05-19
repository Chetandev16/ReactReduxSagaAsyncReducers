import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data
  };
};

export const removeFromCart = (id) => {
  console.log("here");
  return {
    type: REMOVE_FROM_CART,
    id
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
    data: ""
  };
};

// export const Test = () => {
//   return {
//     type: "TEST",
//     data: ""
//   };
// };
