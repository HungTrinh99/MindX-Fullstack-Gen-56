import React, { useState } from "react";
import SearchUser from "../../components/SearchUser";
import UserList from "../../components/UserList";
import { UserAPI } from "../../services/UserAPI";
const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSearchUser = async (keyword) => {
    if (!keyword) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
      return;
    }

    setLoading(true);
    try {
      const apiResponse = await UserAPI.searchUser(keyword);
      const usersData = apiResponse?.data?.items || [];
      setUsers(usersData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const onClearUser = () => setUsers([]);
  const hasClearButton = users.length !== 0;
  return (
    <div className=" mt-5">
      {isError && (
        <p className="alert alert-danger mb-3">
          Please enter the keyword before searching...
        </p>
      )}
      <SearchUser
        onSearchUser={onSearchUser}
        onClearUser={onClearUser}
        hasClearButton={hasClearButton}
      />
      <UserList users={users} loading={loading} />
    </div>
  );
};

export default SearchPage;
//optionalChain
