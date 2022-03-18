import axios from "axios";
export const baseURL = "https://api.github.com";
export const UserAPI = {
  fetchUsers: () => axios.get(`${baseURL}/users`),

  fetchUserInfo: (username) => axios.get(`${baseURL}/users/${username}`),

  fetchUserRepos: (username) => axios.get(`${baseURL}/users/${username}/repos`),
};
