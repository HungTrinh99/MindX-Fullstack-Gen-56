import React, { useContext } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import { logout } from "../../context/auth/authReducer";
import css from "./Header.module.css";

const Header = (props) => {
  const { state, dispatch } = useContext(AuthContext);
  const { isAuthenticated } = state;
  const onLogoutHandler = () => {
    logout(dispatch);
  };
  console.log(isAuthenticated);
  const navListContent = isAuthenticated ? (
    <>
      <li
        className="nav-item"
        style={{
          color: "white",
          cursor: "pointer",
        }}
        onClick={onLogoutHandler}
      >
        Logout
      </li>
    </>
  ) : (
    <>
      <li className="nav-item">
        <Link className="nav-link active" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/register">
          Sign up
        </Link>
      </li>
    </>
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Book review
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{navListContent}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
