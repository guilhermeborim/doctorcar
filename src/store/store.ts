import { configureStore } from "@reduxjs/toolkit";
import userS from "./user/reducer";
export const store = configureStore({
  reducer: {
    user: userS,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const AppDispatch = typeof store.dispatch;
