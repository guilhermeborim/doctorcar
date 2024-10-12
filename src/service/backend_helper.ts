import {
  ChangePasswordUser,
  GetUser,
  LoginResponse,
  LoginUser,
  PostUser,
} from "../types/user";
import { PostVehicle } from "../types/vehicle";
import { ApiResponse, get, post } from "./axios";
import { USER } from "./url_helper";

// User
// export const postUser = async (
//   data: PostUser,
// ): Promise<ApiResponse<PostUser>> => await post<PostUser>(USER, data);

// export const getUser = async (): Promise<ApiResponse<GetUser>> =>
//   await get<GetUser>(USER);

// export const loginUser = async (data: LoginUser) =>
//   await post<LoginUser>(USER + "/login", data);

// export const changePasswordUser = async (data: ChangePasswordUser) =>
//   await post<ChangePasswordUser>(USER + "/change-password", data);

export class UserService {
  static postUser = async (data: PostUser): Promise<ApiResponse<PostUser>> => {
    return await post<PostUser>(USER, data);
  };

  static getUser = async (): Promise<ApiResponse<GetUser>> => {
    return await get<GetUser>(USER);
  };

  static loginUser = async (
    data: LoginUser,
  ): Promise<ApiResponse<LoginResponse>> => {
    return await post<LoginResponse>(USER + "/login", data);
  };

  static changePasswordUser = async (data: ChangePasswordUser) => {
    return await post<ChangePasswordUser>(USER + "/change-password", data);
  };
}

export class VehicleService {
  static postVehicle = async (data: PostVehicle) => {
    return await post(USER, data);
  };
}
