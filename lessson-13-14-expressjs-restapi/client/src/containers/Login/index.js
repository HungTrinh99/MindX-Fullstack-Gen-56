import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { message } from "antd";
import AuthAPI from "../../services/auth";
import LoginForm from "./components/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const onLogin = async (values) => {
    const submitValues = {
      password: values.password,
      email: values.email,
    };
    setLoading(true);
    try {
      await AuthAPI.login(submitValues);
      navigate("/");
    } catch (err) {
      setErr(err.response.data.msg);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (err) {
      message.error(err);
    }
  }, [err]);
  return (
    <div className={css.root}>
      <LoginForm onLogin={onLogin} loading={loading} />
    </div>
  );
};

export default LoginPage;
