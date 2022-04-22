import axios from "axios";
const baseURL = "http://localhost:3002/api/v1";

const axiosInstacne = axios.create({
  baseURL,
  timeout: 10000,
});

export default axiosInstacne;
