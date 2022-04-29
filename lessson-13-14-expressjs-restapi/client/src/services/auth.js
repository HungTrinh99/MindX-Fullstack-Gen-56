import axiosInstacne from "./axiosInstance";

const AuthAPI = {
  loadUser: () => axiosInstacne.get("/auth"),
  login: (formData) => axiosInstacne.post("/auth/login", formData),
};

export default AuthAPI;
