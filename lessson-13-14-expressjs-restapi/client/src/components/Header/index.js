import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={css.root}>
      <Link to="/">
        <h1 className={css.logo}>Book Review</h1>
      </Link>
      <ul>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
};

export default Header;


