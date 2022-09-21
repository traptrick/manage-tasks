import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";
import { loadState, saveState } from "../localStorage";
const _ = require("lodash");

const persistedState = loadState();

const store = configureStore(
  {
    reducer: {
      todo: todoReducer,
    },
    preloadedState: persistedState
  },
);

store.subscribe(
  _.throttle(() => {
    saveState({
      todo: store.getState().todo,
    });
  }, 2000)
);

export default store;
