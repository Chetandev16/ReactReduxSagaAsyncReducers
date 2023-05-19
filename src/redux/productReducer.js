import { PRODUCT_LIST, SEARCH, SET_PRODUCT_LIST } from "./constant";

export const products = (productData = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return productData;

    case SET_PRODUCT_LIST:
      return [action.data];
    default:
      return productData;
  }
};

export const searchQueryReducer = (query = "", action) => {
  switch (action.type) {
    case SEARCH:
      return action.query;

    default:
      return query;
  }
};
