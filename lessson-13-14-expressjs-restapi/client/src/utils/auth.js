import axiosInstance from "../services/axiosInstance";
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete axiosInstance.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};
