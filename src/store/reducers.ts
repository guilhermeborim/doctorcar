import { combineReducers } from "@reduxjs/toolkit";
import postUserReducer from "./user/create/reducer";
import getUserReducer from "./user/get/reducer";
import loginUserReducer from "./user/login/reducer";
import postVehicleReducer from "./vehicle/create/reducer";
export const rootReducer = combineReducers({
  postUserReducer,
  getUserReducer,
  loginUserReducer,
  postVehicleReducer,
});
