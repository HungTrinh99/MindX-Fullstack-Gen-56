import axiosInstacne from "./axiosInstance";

const AuthAPI = {
  loadUser: () => axiosInstacne.get("/auth"),
  login: (formData) => axiosInstacne.post("/auth/login", formData),
  signup: (formData) => axiosInstacne.post("/auth/register", formData),
};

export default AuthAPI;
