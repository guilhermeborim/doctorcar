import { UserService } from "@/src/service/backend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserAsync = createAsyncThunk(
  "getUser/getUserAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserService.getUser();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
