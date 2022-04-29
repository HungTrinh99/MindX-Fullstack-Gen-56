import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import { logout } from "../../context/auth/AuthReducer";
import css from "./Header.module.css";

const Header = (props) => {
  const { state, dispatch } = useContext(AuthContext);
  const { isAuthenticated } = state;

  const navItemsContent = isAuthenticated ? (
    <>
      <li
        className="nav-item"
        style={{
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => logout(dispatch)}
      >
        Log out
      </li>
    </>
  ) : (
    <>
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/signup">
          Sign up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/login">
          Log in
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Book center
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/search">
                Search
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{navItemsContent}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
