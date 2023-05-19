// import { createStore } from "redux";
// import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
// import createSagaMiddleware from "redux-saga";

// // export const store = createStore(reducer);

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: () => [sagaMiddleware]
// });

// sagaMiddleware.run(productSaga);

// export default store;

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducers } from "./rootReducer";

const rootReducer = combineReducers(rootReducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

console.log("Old Store", store);

store.asyncReducers = {};
store.syncReducers = rootReducers;

export const injectReducer = (key, reducer) => {
  console.log("Dynamic Reducer Added", key, reducer);

  store.asyncReducers[key] = reducer;
  store.replaceReducer(
    combineReducers({
      ...store.syncReducers,
      ...store.asyncReducers
    })
  );

  console.log("New Store", store);
};

sagaMiddleware.run(productSaga);

export default store;
