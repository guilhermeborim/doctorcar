import { MaintenanceService } from "@/src/service/backend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMaintenanceAsync = createAsyncThunk(
  "getMaintenance/getMaintenanceAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await MaintenanceService.getMaintenance();
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
