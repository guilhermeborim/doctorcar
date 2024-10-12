import { UserService } from "@/src/service/backend_helper";
import { GetUser } from "@/src/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserAsync = createAsyncThunk<
  { data: GetUser },
  undefined,
  { rejectValue: string }
>("getUser/getUserAsync", async (_, { rejectWithValue }) => {
  try {
    const response = await UserService.getUser();
    return { data: response.data as GetUser };
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
