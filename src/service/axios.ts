import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export type ApiResponse<T> = AxiosResponse<T>;

const baseUrl = axios.create({
  baseURL: "http://192.168.15.14:3334",
  timeout: 5000,
});

const excludedRoutes = [
  "/user/login",
  "/user/register",
  "/user/change-password",
];

baseUrl.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await AsyncStorage.getItem("token");

    if (token && config.url && !excludedRoutes.includes(config.url)) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const post = async <T>(
  url: string,
  data: any,
): Promise<ApiResponse<T>> => {
  return await baseUrl.post<T>(url, data);
};

export const get = async <T>(url: string): Promise<ApiResponse<T>> => {
  return await baseUrl.get<T>(url);
};

export const put = async <T>(
  url: string,
  data: any,
): Promise<ApiResponse<T>> => {
  return await baseUrl.put<T>(url, data);
};

export default baseUrl;
