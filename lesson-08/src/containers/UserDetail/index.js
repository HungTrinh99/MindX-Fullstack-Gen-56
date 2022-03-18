import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserAPI } from "../../services/UserAPI";

const UserDetail = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState({});
  const urlParams = useParams();
  const { login } = urlParams;

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const apiResponseUser = await UserAPI.fetchUserInfo(login);
        const apiResponseRepos = await UserAPI.fetchUserRepos(login);

        setUser(apiResponseUser.data);
        setRepos(apiResponseRepos.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetail();
  }, []);
  return <div>{JSON.stringify(user)}</div>;
};

export default UserDetail;
