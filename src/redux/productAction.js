import { PRODUCT_LIST, SEARCH } from "./constant";

export const addProducts = () => {
  return {
    type: PRODUCT_LIST
  };
};

export const searchQuery = (query) => {
  return {
    type: SEARCH,
    query
  };
};
