import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import LoginForm from "./components/LoginForm";
import { login } from "../../context/auth/authReducer";
import css from "./LoginPage.module.css";
const LoginPage = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { loading, isAuthenticated } = state;

  const onSubmitHandler = async (values) => {
    const loginData = {
      email: values.email,
      password: values.password,
    };
    login(loginData, dispatch);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className={css.root}>
      <LoginForm onSubmit={onSubmitHandler} loading={loading} />
    </div>
  );
};

export default LoginPage;
