import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./actions";

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: "",
};

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    resetUserFlag: (state) => {
      state.data = [];
      state.loading = false;
      state.success = false;
      state.error = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(loginAsync.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = "";
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.success = false;
      state.error = action.payload as string;
    });
  },
});

export const { resetUserFlag } = loginUserSlice.actions;

export default loginUserSlice.reducer;
