import axiosInstacne from "./axiosInstance";

const AuthAPI = {
  login: (formData) => axiosInstacne.post("/auth/login", formData),
};

export default AuthAPI;
