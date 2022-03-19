import axiosInstance from "../configs/axios";

export const UserAPI = {
  fetchUsers: () => axiosInstance.get(`/users`),

  fetchUserInfo: (username) => axiosInstance.get(`/users/${username}`),

  fetchUserRepos: (username) => axiosInstance.get(`/users/${username}/repos`),

  searchUser: (keyword) => axiosInstance.get(`/search/users?q=${keyword}`),
};
