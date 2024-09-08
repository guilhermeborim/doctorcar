import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://192.168.15.14:3334",
  timeout: 5000,
});

export default baseUrl;
