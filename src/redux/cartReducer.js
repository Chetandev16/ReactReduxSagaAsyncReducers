import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.log(action);
  //   return action.data;
  // }
  // return "no action matched";

  switch (action.type) {
    case ADD_TO_CART:
      // add to cart logic
      // console.log("ADD_TO_CART", action);
      return [...data, action.data];

    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART", action.id);
      const filterData = data.filter((item) => item.id !== action.id);
      return [...filterData];
    // const index = data.indexOf(action.data);

    // return index === -1
    //   ? []
    //   : [...data.slice(0, index), ...data.slice(index + 1)];

    case EMPTY_CART:
      //  call backend api to also clear cart from backend
      return [];

    default:
      return data;
  }
};
