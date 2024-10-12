import { VehicleService } from "@/src/service/backend_helper";
import { PostVehicle } from "@/src/types/vehicle";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const vehicleAsync = createAsyncThunk(
  "postUser/vehicleAsync",
  async (data: PostVehicle, { rejectWithValue }) => {
    try {
      const response = await VehicleService.postVehicle(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
