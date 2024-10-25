import { VehicleService } from "@/src/service/backend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getVehicleAsync = createAsyncThunk(
  "getVehicle/getVehicleAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await VehicleService.getVehicle();
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
