import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  const data = yield fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );

  // console.log("saga", data);

  yield put({
    type: SET_PRODUCT_LIST,
    data
  });
}

function* productSaga() {
  //generator function
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
