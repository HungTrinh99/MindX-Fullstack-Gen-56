import axios from "axios";
const baseURL = "http://localhost:3002/api/v1";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 6000,
});

export default axiosInstance;
