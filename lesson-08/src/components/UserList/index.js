import React from "react";
import UserItem from "../UserItem";

const UserList = (props) => {
  const { users, loading } = props;
  const emptyData = <h3 className="text-center mt-5">No data</h3>;
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row mt-5">
      {users.length !== 0
        ? users.map((user) => (
            <div key={user.login} className="col-12 col-md-4 user-item">
              <UserItem user={user} />
            </div>
          ))
        : emptyData}
    </div>
  );
};

export default UserList;
