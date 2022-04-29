import axiosInstacne from "../services/axiosInstance";

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    axiosInstacne.defaults.headers.common["x-auth-token"] = token;
  } else {
    localStorage.removeItem("token");
    delete axiosInstacne.defaults.headers.common["x-auth-token"];
  }
};
