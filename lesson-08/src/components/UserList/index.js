import React from "react";
import UserItem from "../UserItem";

const UserList = (props) => {
  const { users } = props;
  const emptyData = <h3 className="text-center mt-5">No data</h3>;
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
