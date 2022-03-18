import React from "react";
import { useNavigate } from "react-router-dom";
const UserItem = (props) => {
  const navigate = useNavigate();

  const {
    user: { login, avatar_url },
  } = props;

  const onRedirectToUserDetail = () => {
    navigate(`/users/${login}`);
  };
  return (
    <div className="user-container">
      <img src={avatar_url} alt={login} />
      <h5>{login}</h5>
      <button onClick={onRedirectToUserDetail}>More</button>
    </div>
  );
};

export default UserItem;
