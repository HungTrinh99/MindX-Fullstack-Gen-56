import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../../components/UserList";
import { UserAPI } from "../../services/UserAPI";

const Homepage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const apiResponse = await UserAPI.fetchUsers();
        setUsers(apiResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Homepage;

// RESTFul API - HTTP: GET, POST, PUT, DELETE ...
// ErrorBoundary
