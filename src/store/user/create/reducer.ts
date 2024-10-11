import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./actions";

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: false,
};

const postUserSlice = createSlice({
  name: "postUser",
  initialState,
  reducers: {
    resetUserFlag: (state) => {
      state.data = [];
      state.loading = false;
      state.success = false;
      state.error = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginAsync.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.success = false;
      state.error = true;
    });
  },
});

export const { resetUserFlag } = postUserSlice.actions;

export default postUserSlice.reducer;
