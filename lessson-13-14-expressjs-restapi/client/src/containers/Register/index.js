import { message } from "antd";
import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import { signup } from "../../context/auth/AuthReducer";
import SignupForm from "./components/SignupForm";
import css from "./Register.module.css";

const Register = () => {
  const {
    state: { isAuthenticated, signupError, loading },
    dispatch,
  } = useContext(AuthContext);

  const onSubmit = (values) => {
    signup(values, dispatch);
  };

  useEffect(() => {
    if (signupError && !loading) {
      console.log("effect runss");
      message.error(signupError);
    }
  }, [signupError, loading]);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className={css.root}>
      <SignupForm onSubmit={onSubmit} loading={loading} />
    </div>
  );
};

export default Register;
