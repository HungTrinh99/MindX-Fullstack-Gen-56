import axiosInstance from "./axiosInstance";

const AuthAPI = {
  loadUser: () => axiosInstance.get("/auth"),
  login: (data) => axiosInstance.post("/auth/login", data),
};

export default AuthAPI;
