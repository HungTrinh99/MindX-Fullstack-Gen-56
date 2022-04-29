import axiosInstacne from "../services/axiosInstance";

const setAuthToken = (token) => {
  if (token) {
    axiosInstacne.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete axiosInstacne.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
