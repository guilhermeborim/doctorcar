import { GetUser } from "@/src/types/user";
import { createSlice } from "@reduxjs/toolkit";
import { getUserAsync } from "./actions";

const initialState: {
  data: GetUser | null;
  loading: boolean;
  success: boolean;
  error: boolean;
} = {
  data: null,
  loading: false,
  success: false,
  error: false,
};

const getUserSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {
    resetUserFlag: (state) => {
      state.data = null;
      state.loading = false;
      state.success = false;
      state.error = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserAsync.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.success = true;
      state.error = false;
      state.loading = false;
    });
    builder.addCase(getUserAsync.rejected, (state, action) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.data = null;
    });
  },
});

export const { resetUserFlag } = getUserSlice.actions;

export default getUserSlice.reducer;
