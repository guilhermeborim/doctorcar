import { GetMaintenance } from "@/src/types/maintenance";
import { createSlice } from "@reduxjs/toolkit";
import { getMaintenanceAsync } from "./actions";

const initialState: {
  data: GetMaintenance[] | [];
  loading: boolean;
  success: boolean;
  error: boolean;
} = {
  data: [],
  loading: false,
  success: false,
  error: false,
};

const getVehicleSlice = createSlice({
  name: "getMaintenance",
  initialState,
  reducers: {
    resetVehicleFlag: (state) => {
      state.data = [];
      state.loading = false;
      state.success = false;
      state.error = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(getMaintenanceAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      state.success = true;
      state.error = false;
      state.loading = false;
    });
    builder.addCase(getMaintenanceAsync.rejected, (state, action) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.data = [];
    });
  },
});

export const { resetVehicleFlag } = getVehicleSlice.actions;

export default getVehicleSlice.reducer;
