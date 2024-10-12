import { UserService } from "@/src/service/backend_helper";
import { LoginUser } from "@/src/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
  "loginUser/loginAsync",
  async (data: LoginUser, { rejectWithValue }) => {
    try {
      const response = await UserService.loginUser(data);

      const token = response.data.token;
      await AsyncStorage.setItem("token", token);

      return response.data;
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);
