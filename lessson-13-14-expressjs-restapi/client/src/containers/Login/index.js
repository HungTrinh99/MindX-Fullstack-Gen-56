import { useEffect, useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { Navigate } from "react-router-dom";
import { message } from "antd";
import LoginForm from "./components/LoginForm";
import css from "./LoginPage.module.css";
import { login } from "../../context/auth/AuthReducer";

const LoginPage = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { loading, error, isAuthenticated } = state;

  const onLogin = async (values) => {
    const submitValues = {
      password: values.password,
      email: values.email,
    };
    login(submitValues, dispatch);
  };

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className={css.root}>
      <LoginForm onLogin={onLogin} loading={loading} />
    </div>
  );
};

export default LoginPage;
