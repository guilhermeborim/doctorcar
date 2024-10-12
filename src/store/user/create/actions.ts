import { UserService } from "@/src/service/backend_helper";
import { PostUser } from "@/src/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createAsync = createAsyncThunk(
  "postUser/createAsync",
  async (data: PostUser, { rejectWithValue }) => {
    try {
      const response = await UserService.postUser(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
