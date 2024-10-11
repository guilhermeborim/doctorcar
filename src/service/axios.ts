import axios, { AxiosResponse } from "axios";

export type ApiResponse<T> = AxiosResponse<T>;

const baseUrl = axios.create({
  baseURL: "http://192.168.15.14:3334",
  timeout: 5000,
});

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
