import { createSlice } from "@reduxjs/toolkit";
import { vehicleAsync } from "./actions";

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: false,
};

const postVehicleSlice = createSlice({
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
    builder.addCase(vehicleAsync.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    });
    builder.addCase(vehicleAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(vehicleAsync.rejected, (state, action) => {
      state.success = false;
      state.error = true;
    });
  },
});

export const { resetUserFlag } = postVehicleSlice.actions;

export default postVehicleSlice.reducer;
