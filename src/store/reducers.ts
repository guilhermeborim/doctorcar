import { combineReducers } from "@reduxjs/toolkit";
import postUserReducer from "./user/create/reducer";
import getUserReducer from "./user/get/reducer";

export const rootReducer = combineReducers({
  postUserReducer,
  getUserReducer,
});
