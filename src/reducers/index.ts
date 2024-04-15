import { ReducersMapObject, combineReducers } from "@reduxjs/toolkit";
import { loadingBarReducer as loadingBar } from "react-redux-loading-bar";
import test from "./test.reducer";
const rootReducer: ReducersMapObject = {
  test,
  loadingBar,
};

export default rootReducer;
